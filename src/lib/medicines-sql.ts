import type { Medicine } from "./medicines";

const insertPrefix =
  "INSERT INTO medicines (slug, name_en, name_ar, scientific, manufacturer, drug_class, route, price_egp) VALUES ";
const maxStatementBytes = 90 * 1024;

function sqlString(value: string): string {
  return "'" + value.replace(/'/g, "''") + "'";
}

function sqlValue(value: string | null): string {
  return value === null ? "NULL" : sqlString(value);
}

function medicineRow(medicine: Medicine): string {
  return "(" + [
    sqlValue(medicine.slug),
    sqlValue(medicine.nameEn),
    sqlValue(medicine.nameAr),
    sqlValue(medicine.scientific),
    sqlValue(medicine.manufacturer),
    sqlValue(medicine.drugClass),
    sqlValue(medicine.route),
    String(medicine.priceEgp),
  ].join(", ") + ")";
}

function byteLength(value: string): number {
  return new TextEncoder().encode(value).byteLength;
}

export function toSql(medicines: Medicine[], asOf: string): string {
  const statements = [
    "DROP TABLE IF EXISTS medicines;",
    "DROP TABLE IF EXISTS meta;",
    [
      "CREATE TABLE medicines (",
      "  slug TEXT PRIMARY KEY,",
      "  name_en TEXT,",
      "  name_ar TEXT,",
      "  scientific TEXT,",
      "  manufacturer TEXT,",
      "  drug_class TEXT,",
      "  route TEXT,",
      "  price_egp REAL NOT NULL",
      ");",
    ].join("\n"),
    "CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT);",
    "INSERT INTO meta (key, value) VALUES ('as_of', " + sqlString(asOf) + ");",
  ];

  let rows: string[] = [];

  const flushRows = () => {
    if (rows.length === 0) return;
    statements.push(insertPrefix + rows.join(",\n") + ";");
    rows = [];
  };

  for (const medicine of medicines) {
    const row = medicineRow(medicine);
    const candidate = insertPrefix + rows.concat(row).join(",\n") + ";";

    if (rows.length > 0 && byteLength(candidate) >= maxStatementBytes) {
      flushRows();
    }

    rows.push(row);
  }
  flushRows();

  return statements.join("\n") + "\n";
}
