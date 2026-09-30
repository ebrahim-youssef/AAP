import { describe, expect, it } from "vitest";
import type { Medicine } from "../../src/lib/medicines";
import { toSql } from "../../src/lib/medicines-sql";

describe("toSql", () => {
  it("escapes apostrophes, renders nulls, and writes the as-of metadata", () => {
    const medicine: Medicine = {
      slug: "obrien",
      nameEn: "O'Brien",
      nameAr: null,
      scientific: null,
      manufacturer: "O'Pharma",
      drugClass: null,
      route: "oral",
      priceEgp: 12.5,
    };

    const sql = toSql([medicine], "2026-06");

    expect(sql).toContain("'O''Brien'");
    expect(sql).toContain("'O''Pharma'");
    expect(sql).toContain("NULL");
    expect(sql).toContain(
      "INSERT INTO meta (key, value) VALUES ('as_of', '2026-06');",
    );
  });

  it("keeps each medicine INSERT under 90 KB and inserts every row", () => {
    const medicines: Medicine[] = Array.from({ length: 2_000 }, (_, index) => ({
      slug: "medicine-" + index,
      nameEn: "Medicine " + index,
      nameAr: "دواء " + index,
      scientific: "Ingredient " + index,
      manufacturer: "Manufacturer " + index,
      drugClass: "Class " + index,
      route: "oral",
      priceEgp: 10 + index / 100,
    }));

    const sql = toSql(medicines, "2026-06");
    const statements = sql.match(/INSERT INTO medicines[\s\S]*?;/g) ?? [];

    expect(statements.length).toBeGreaterThan(1);
    expect(statements.every((statement) => Buffer.byteLength(statement, "utf8") < 90 * 1024)).toBe(
      true,
    );

    const insertedRows = statements.reduce(
      (count, statement) => count + (statement.match(/\),\s*\(/g)?.length ?? 0) + 1,
      0,
    );
    expect(insertedRows).toBe(2_000);
  });
});
