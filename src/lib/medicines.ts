export type Medicine = {
  slug: string;
  nameEn: string | null;
  nameAr: string | null;
  scientific: string | null;
  manufacturer: string | null;
  drugClass: string | null;
  route: string | null;
  priceEgp: number;
};

export type IndexEntry = [
  slug: string,
  nameEn: string | null,
  nameAr: string | null,
  priceEgp: number,
];

type CsvRecord = {
  values: string[];
  line: number;
};

function parseCsv(csvText: string): CsvRecord[] {
  const text = csvText.charCodeAt(0) === 0xfeff ? csvText.slice(1) : csvText;
  const records: CsvRecord[] = [];
  let fields: string[] = [];
  let field = "";
  let inQuotes = false;
  let afterQuote = false;
  let fieldStart = true;
  let line = 1;
  let recordLine = 1;

  const pushField = () => {
    fields.push(field);
    field = "";
    fieldStart = true;
    afterQuote = false;
  };

  const pushRecord = () => {
    pushField();
    records.push({ values: fields, line: recordLine });
    fields = [];
    recordLine = line;
  };

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (inQuotes) {
      if (character === '"') {
        if (text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          inQuotes = false;
          afterQuote = true;
        }
      } else if (character === "\r") {
        if (text[index + 1] === "\n") {
          field += "\r\n";
          index += 1;
        } else {
          field += "\r";
        }
        line += 1;
      } else if (character === "\n") {
        field += "\n";
        line += 1;
      } else {
        field += character;
      }
      continue;
    }

    if (afterQuote) {
      if (character === ",") {
        pushField();
      } else if (character === "\r" || character === "\n") {
        if (character === "\r" && text[index + 1] === "\n") index += 1;
        line += 1;
        pushRecord();
      } else {
        throw new Error("Invalid CSV after quoted field on line " + line);
      }
      continue;
    }

    if (fieldStart && character === '"') {
      inQuotes = true;
      fieldStart = false;
    } else if (character === ",") {
      pushField();
    } else if (character === "\r" || character === "\n") {
      if (character === "\r" && text[index + 1] === "\n") index += 1;
      line += 1;
      pushRecord();
    } else {
      field += character;
      fieldStart = false;
    }
  }

  if (inQuotes) {
    throw new Error("Unterminated quoted field on line " + recordLine);
  }

  if (field.length > 0 || fields.length > 0 || !fieldStart) {
    pushField();
    records.push({ values: fields, line: recordLine });
  }

  return records;
}

function clean(value: string | undefined): string | null {
  const trimmed = value?.trim() ?? "";
  return trimmed === "" ? null : trimmed;
}

function parsePrice(value: string | null): number | null {
  if (value === null) return null;

  const normalized = value
    .replace(/^EGP\s*/i, "")
    .replace(/[\u0660-\u0669]/g, (digit) =>
      String(digit.charCodeAt(0) - 0x0660),
    )
    .replace(/[\u06f0-\u06f9]/g, (digit) =>
      String(digit.charCodeAt(0) - 0x06f0),
    )
    .replace(/\u066b/g, ".")
    .replace(/\u066c/g, ",");
  if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(normalized)) {
    return null;
  }

  const price = Number(normalized.replace(/,/g, ""));
  if (!Number.isFinite(price) || price <= 0) return null;

  return Math.round((price + Number.EPSILON) * 100) / 100;
}

function shortHash(value: string): string {
  let hash = 0x811c9dc5;

  for (const character of value) {
    hash = Math.imul(hash ^ character.codePointAt(0)!, 0x01000193) >>> 0;
  }

  return hash.toString(16).padStart(8, "0");
}

function slugFromName(nameEn: string): string {
  const ascii = nameEn
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x00-\x7f]/g, "")
    .toLowerCase();
  const slug = ascii.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return slug === "" ? "med-" + shortHash(nameEn) : slug;
}

function fitSlug(base: string, suffix = ""): string {
  const suffixText = suffix === "" ? "" : "-" + suffix;
  const available = 80 - suffixText.length;
  const trimmedBase = base.slice(0, available).replace(/-+$/g, "");
  return trimmedBase + suffixText;
}

function compareNames(left: string | null, right: string | null): number {
  if (left === null) return right === null ? 0 : 1;
  if (right === null) return -1;
  return left < right ? -1 : left > right ? 1 : 0;
}

export function buildMedicines(csvText: string): {
  medicines: Medicine[];
  index: IndexEntry[];
  rejected: { line: number; reason: string }[];
  duplicatesDropped: number;
} {
  const records = parseCsv(csvText);
  const header = records.shift()?.values.map((value) => value.trim()) ?? [];
  const indexes = new Map(header.map((name, index) => [name, index]));
  const priceIndex = indexes.get("price_egp");
  const nameEnIndex = indexes.get("commercial_name_en");
  const nameArIndex = indexes.get("commercial_name_ar");

  if (priceIndex === undefined) {
    throw new Error("Missing required CSV column: price_egp");
  }
  if (nameEnIndex === undefined && nameArIndex === undefined) {
    throw new Error(
      "Missing required CSV column: commercial_name_en or commercial_name_ar",
    );
  }

  const read = (values: string[], index: number | undefined): string | null =>
    index === undefined ? null : clean(values[index]);
  type Candidate = Omit<Medicine, "slug"> & {
    identity: string;
    baseSlug: string;
  };
  const candidates: Candidate[] = [];
  const rejected: { line: number; reason: string }[] = [];
  let duplicatesDropped = 0;
  const seen = new Set<string>();

  for (const record of records) {
    if (record.values.every((value) => value.trim() === "")) continue;

    const nameEn = read(record.values, nameEnIndex);
    const nameAr = read(record.values, nameArIndex);
    const priceEgp = parsePrice(read(record.values, priceIndex));

    if (priceEgp === null) {
      rejected.push({ line: record.line, reason: "bad price" });
      continue;
    }
    if (nameEn === null && nameAr === null) {
      rejected.push({ line: record.line, reason: "no name" });
      continue;
    }

    const scientific = read(record.values, indexes.get("scientific_name"));
    const manufacturer = read(record.values, indexes.get("manufacturer"));
    const route = read(record.values, indexes.get("route"));
    const identity = JSON.stringify([
      nameEn,
      nameAr,
      scientific,
      manufacturer,
      route,
    ]);
    if (seen.has(identity)) {
      duplicatesDropped += 1;
      continue;
    }
    seen.add(identity);

    candidates.push({
      identity,
      baseSlug:
        nameEn === null ? "med-" + shortHash(nameAr!) : slugFromName(nameEn),
      nameEn,
      nameAr,
      scientific,
      manufacturer,
      drugClass: read(record.values, indexes.get("drug_class")),
      route,
      priceEgp,
    });
  }

  const baseCounts = new Map<string, number>();
  for (const candidate of candidates) {
    baseCounts.set(candidate.baseSlug, (baseCounts.get(candidate.baseSlug) ?? 0) + 1);
  }

  const medicines: Medicine[] = candidates.map(
    ({ identity, baseSlug, ...candidate }) => ({
      ...candidate,
      slug:
        baseCounts.get(baseSlug)! > 1
          ? fitSlug(baseSlug, shortHash(identity))
          : fitSlug(baseSlug),
    }),
  );

  const index: IndexEntry[] = medicines.map(
    ({ slug, nameEn, nameAr, priceEgp }) => [
      slug,
      nameEn,
      nameAr,
      priceEgp,
    ],
  );
  index.sort(
    (left, right) =>
      compareNames(left[1], right[1]) || compareNames(left[2], right[2]),
  );

  return {
    medicines,
    index,
    rejected,
    duplicatesDropped,
  };
}
