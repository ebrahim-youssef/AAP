import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { IndexEntry } from "../src/lib/medicines.ts";
import { buildMedicines } from "../src/lib/medicines.ts";
import { toSql } from "../src/lib/medicines-sql.ts";
import {
  normalize,
  shardKeyForNormalizedToken,
} from "../src/lib/search.ts";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function countCsvDataRows(csvText: string): number {
  const text = csvText.charCodeAt(0) === 0xfeff ? csvText.slice(1) : csvText;
  let inQuotes = false;
  let fieldStart = true;
  let recordHasValue = false;
  let records = 0;

  const finishRecord = () => {
    if (recordHasValue) records += 1;
    fieldStart = true;
    recordHasValue = false;
  };

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (inQuotes) {
      if (character === '"') {
        if (text[index + 1] === '"') {
          recordHasValue = true;
          index += 1;
        } else {
          inQuotes = false;
        }
      } else if (character === "\r") {
        if (text[index + 1] === "\n") index += 1;
      } else if (character !== "\n") {
        recordHasValue = character.trim() !== "" || recordHasValue;
      }
      continue;
    }

    if (fieldStart && character === '"') {
      inQuotes = true;
      fieldStart = false;
    } else if (character === ",") {
      fieldStart = true;
    } else if (character === "\r" || character === "\n") {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      finishRecord();
    } else {
      fieldStart = false;
      if (character.trim() !== "") recordHasValue = true;
    }
  }

  if (recordHasValue) finishRecord();
  return Math.max(0, records - 1);
}

function printCounts(
  kept: number,
  rejected: { line: number; reason: string }[],
  duplicatesDropped: number,
): void {
  const byReason = new Map<string, number>();
  for (const item of rejected) {
    byReason.set(item.reason, (byReason.get(item.reason) ?? 0) + 1);
  }
  const rejectionSummary =
    byReason.size === 0
      ? "none"
      : [...byReason.entries()]
          .map(([reason, count]) => reason + "=" + count)
          .join(", ");

  console.log("kept: " + kept);
  console.log("rejected: " + rejectionSummary);
  console.log("duplicates dropped: " + duplicatesDropped);
}

function compactShard(entries: IndexEntry[]) {
  return {
    slugs: entries.map((entry) => entry[0]),
    namesEn: entries.map((entry) => entry[1]),
    namesAr: entries.map((entry) => entry[2]),
    prices: entries.map((entry) => entry[3]),
  };
}

async function main(): Promise<void> {
  const inputPath = resolve(projectRoot, process.argv[2] ?? "data/raw/medicines.csv");
  const asOf = process.argv[3] ?? "2026-06";
  const csvText = await readFile(inputPath, "utf8");
  const result = buildMedicines(csvText);
  const dataRows = countCsvDataRows(csvText);
  const duplicatesDropped = Math.max(
    0,
    dataRows - result.medicines.length - result.rejected.length,
  );

  printCounts(result.medicines.length, result.rejected, duplicatesDropped);
  if (result.medicines.length === 0) {
    process.exitCode = 1;
    return;
  }

  const sqlPath = resolve(projectRoot, "data/medicines.sql");
  const medicineSlugsPath = resolve(projectRoot, "data/medicine-slugs.json");
  const searchDir = resolve(projectRoot, "public/search");
  const oldIndexPath = resolve(projectRoot, "public/search-index.json");
  await mkdir(dirname(sqlPath), { recursive: true });
  await rm(oldIndexPath, { force: true });
  await rm(searchDir, { recursive: true, force: true });
  await mkdir(searchDir, { recursive: true });
  await writeFile(sqlPath, toSql(result.medicines, asOf), "utf8");
  await writeFile(
    medicineSlugsPath,
    JSON.stringify(result.medicines.map((medicine) => medicine.slug).sort()),
    "utf8",
  );

  const shardItems = new Map<string, typeof result.index>();
  for (const entry of result.index) {
    const keys = new Set<string>();
    for (const name of [entry[1], entry[2]]) {
      if (name === null) continue;
      for (const token of normalize(name).split(" ")) {
        const key = shardKeyForNormalizedToken(token);
        if (key !== null) keys.add(key);
      }
    }

    for (const key of keys) {
      const items = shardItems.get(key) ?? [];
      items.push(entry);
      shardItems.set(key, items);
    }
  }

  const shards = [...shardItems.keys()].sort();
  await writeFile(
    resolve(searchDir, "meta.json"),
    JSON.stringify({ asOf, shards }),
    "utf8",
  );
  await Promise.all(
    shards.map((key) =>
      writeFile(
        resolve(searchDir, key + ".json"),
        JSON.stringify(compactShard(shardItems.get(key)!)),
        "utf8",
      ),
    ),
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
