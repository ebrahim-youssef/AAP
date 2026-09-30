import { describe, expect, it } from "vitest";
import type { IndexEntry } from "../../src/lib/medicines";
import { normalize, search, searchShardKey } from "../../src/lib/search";

const entries: IndexEntry[] = [
  ["panadol-advance", "PANADOL ADVANCE 500 MG", "بانادول أدفانسي", 46],
  ["panadol-other-place", "OTHER BRAND", "دواء بانادول", 30],
  ["aspirin", "ASPIRIN 100 MG", "أسبرين", 15],
];

describe("normalize", () => {
  it("folds Arabic variants, strips marks and tatweel, and converts digits", () => {
    expect(normalize("أَ إِ آ ٱ ى ة ؤ ئ ـ ١٢٣ ۱۲۳")).toBe(
      "ا ا ا ا ي ه و ي 123 123",
    );
  });
});

describe("search", () => {
  it("finds the same Panadol entry from Arabic, tashkeel, skeleton, and English queries", () => {
    expect(search(entries, "بانادول")[0][0]).toBe("panadol-advance");
    expect(search(entries, "بَانَادُول")[0][0]).toBe("panadol-advance");
    expect(search(entries, "باندول")).toContainEqual(entries[0]);
    expect(search(entries, "PANADOL")[0][0]).toBe("panadol-advance");
    expect(search(entries, "pan")[0][0]).toBe("panadol-advance");
    expect(search(entries, "panadol 500")[0][0]).toBe("panadol-advance");
    expect(search(entries, "mg")).toEqual([]);
  });

  it("ranks whole-name prefixes above token prefixes above skeleton matches", () => {
    const rankedEntries: IndexEntry[] = [
      ["tier-two", "OTHER BRAND", "دواء بانادول", 30],
      ["tier-three", "SPELLING VARIANT", "باندول", 20],
      ["tier-one", "PANADOL", "بانادول", 46],
    ];

    expect(search(rankedEntries, "بانادول").map((entry) => entry[0])).toEqual([
      "tier-one",
      "tier-two",
      "tier-three",
    ]);
  });

  it("returns no results for one-character queries and respects the limit", () => {
    expect(search(entries, "ب")).toEqual([]);
    expect(search(entries, "بانادول", 1)).toHaveLength(1);
  });

  it("chooses a two-character shard from a searchable token", () => {
    expect(searchShardKey("panadol 500")).toBe("pa");
    expect(searchShardKey("500 mg")).toBeNull();
  });
});
