import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import type { Medicine } from "../../src/lib/medicines";
import { buildMedicines } from "../../src/lib/medicines";

const fixturePath = fileURLToPath(
  new URL("../fixtures/medicines-sample.csv", import.meta.url),
);
const fixture = readFileSync(fixturePath, "utf8");

describe("buildMedicines", () => {
  it("parses quoted commas and escaped quotes in names", () => {
    const result = buildMedicines(fixture);

    expect(result.medicines[0]).toEqual({
      slug: "medi-plus-500",
      nameEn: 'Medi, "Plus" 500',
      nameAr: "ميدي بلس",
      scientific: "Paracetamol",
      manufacturer: "Acme",
      drugClass: "Analgesic",
      route: "oral",
      priceEgp: 12.5,
    });
  });

  it("parses the supported price formats and rounds to two decimals", () => {
    const result = buildMedicines(fixture);

    expect(result.medicines.find((medicine) => medicine.nameAr === "بانادول إكسترا")?.priceEgp).toBe(
      1250,
    );
    expect(result.medicines.find((medicine) => medicine.nameAr === "بانادول إكسترا 2")?.priceEgp).toBe(
      12,
    );
    expect(result.medicines.find((medicine) => medicine.nameEn === "Arabic One")?.priceEgp).toBe(
      123.5,
    );
    expect(result.medicines.find((medicine) => medicine.nameEn === "Persian One")?.priceEgp).toBe(
      123.5,
    );
    expect(result.medicines.find((medicine) => medicine.nameEn === "Plain 12")?.priceEgp).toBe(
      12,
    );

    const rounded = buildMedicines(
      "commercial_name_en,commercial_name_ar,price_egp\nRound,تقريب,1.005",
    );
    expect(rounded.medicines[0].priceEgp).toBe(1.01);

    const malformedGrouping = buildMedicines(
      'commercial_name_en,commercial_name_ar,price_egp\nBad,سيء,"1,25"',
    );
    expect(malformedGrouping.rejected).toEqual([
      { line: 2, reason: "bad price" },
    ]);
  });

  it("rejects bad prices and nameless rows with their input lines", () => {
    const result = buildMedicines(fixture);

    expect(result.rejected).toEqual([
      { line: 8, reason: "bad price" },
      { line: 9, reason: "no name" },
      { line: 11, reason: "bad price" },
      { line: 12, reason: "bad price" },
      { line: 14, reason: "bad price" },
    ]);
  });

  it("deduplicates by identity and gives collisions stable hash slugs", () => {
    const result = buildMedicines(fixture);

    expect(result.medicines).toHaveLength(7);
    expect(result.medicines.filter((medicine) => medicine.nameEn === "Panadol Extra").map((medicine) => medicine.slug)).toEqual([
      "panadol-extra-5aeec9fd",
      "panadol-extra-7b84f75f",
    ]);
    expect(result.rejected).not.toContainEqual({ line: 10, reason: "duplicate" });
  });

  it("keeps each medicine slug stable when the input rows are reversed", () => {
    const lines = fixture.split("\r\n");
    const reversedFixture = [
      lines[0],
      ...lines.slice(1, -1).reverse(),
      "",
    ].join("\r\n");
    const identityKey = (medicine: Medicine) =>
      [
        medicine.nameEn,
        medicine.nameAr,
        medicine.scientific,
        medicine.manufacturer,
        medicine.route,
      ].join("|");
    const original = buildMedicines(fixture).medicines
      .map((medicine) => [identityKey(medicine), medicine.slug])
      .sort();
    const reversed = buildMedicines(reversedFixture).medicines
      .map((medicine) => [identityKey(medicine), medicine.slug])
      .sort();

    expect(reversed).toEqual(original);
  });

  it("excludes price from identity and keeps the first duplicate price", () => {
    const csv = [
      "commercial_name_en,commercial_name_ar,scientific_name,manufacturer,route,price_egp",
      "Same Product,اسم المنتج,Ingredient,Maker,oral,10",
      "Same Product,اسم المنتج,Ingredient,Maker,oral,99",
    ].join("\r\n");
    const changedPrice = csv.split("\r\n").slice(0, 2).join("\r\n").replace(",10", ",99");
    const result = buildMedicines(csv);
    const changed = buildMedicines(changedPrice);

    expect(result.medicines).toHaveLength(1);
    expect(result.medicines[0]).toMatchObject({
      slug: "same-product",
      priceEgp: 10,
    });
    expect(changed.medicines[0].slug).toBe("same-product");
  });

  it("gives Arabic-only medicines a stable hashed slug", () => {
    const firstRun = buildMedicines(fixture);
    const secondRun = buildMedicines(fixture);

    expect(firstRun.medicines.find((medicine) => medicine.nameAr === "دواء عربي")?.slug).toBe(
      "med-0e826372",
    );
    expect(secondRun.medicines.find((medicine) => medicine.nameAr === "دواء عربي")?.slug).toBe(
      "med-0e826372",
    );
  });

  it("sorts compact index tuples by English then Arabic name and matches the rows", () => {
    const result = buildMedicines(fixture);

    expect(result.index).toEqual([
      ["arabic-one", "Arabic One", "عربي وان", 123.5],
      ["medi-plus-500", 'Medi, "Plus" 500', "ميدي بلس", 12.5],
      ["panadol-extra-5aeec9fd", "Panadol Extra", "بانادول إكسترا", 1250],
      ["panadol-extra-7b84f75f", "Panadol Extra", "بانادول إكسترا 2", 12],
      ["persian-one", "Persian One", "فارسی وان", 123.5],
      ["plain-12", "Plain 12", "دواء عادي", 12],
      ["med-0e826372", null, "دواء عربي", 12],
    ]);

    for (const [slug, nameEn, nameAr, priceEgp] of result.index) {
      const medicine = result.medicines.find((item) => item.slug === slug);
      expect(medicine).toMatchObject({ slug, nameEn, nameAr, priceEgp });
    }
  });

  it("trims values and clearly rejects missing required columns", () => {
    const trimmed = buildMedicines(
      " commercial_name_en , price_egp \n  Trimmed name  ,  EGP 2  ",
    );

    expect(trimmed.medicines[0]).toMatchObject({
      nameEn: "Trimmed name",
      nameAr: null,
      priceEgp: 2,
    });

    expect(() =>
      buildMedicines("commercial_name_en,commercial_name_ar\nName,اسم"),
    ).toThrow("Missing required CSV column: price_egp");
    expect(() => buildMedicines("price_egp\n2")).toThrow(
      "Missing required CSV column: commercial_name_en or commercial_name_ar",
    );
  });
});
