import type { IndexEntry } from "./medicines";

// Derived from the most frequent unit, dosage-form, and pack tokens in the
// June 2026 snapshot. These tokens remain part of matching, but do not choose
// a shard on their own.
export const SEARCH_SHARD_STOPLIST = [
  "mg",
  "gm",
  "mcg",
  "ml",
  "tab",
  "tabs",
  "tablet",
  "tablets",
  "cap",
  "caps",
  "capsule",
  "capsules",
  "amp",
  "amps",
  "ampoule",
  "ampoules",
  "vial",
  "vials",
  "sachet",
  "sachets",
  "bag",
  "bags",
  "bottle",
  "bottles",
  "tube",
  "tubes",
  "box",
  "boxes",
  "piece",
  "pieces",
  "pc",
  "pcs",
  "pack",
  "packs",
  "dose",
  "doses",
  "unit",
  "units",
  "cream",
  "creams",
  "gel",
  "gels",
  "syrup",
  "syrups",
  "solution",
  "solutions",
  "soln",
  "susp",
  "suspension",
  "suspensions",
  "drop",
  "drops",
  "spray",
  "sprays",
  "lotion",
  "lotions",
  "ointment",
  "oint",
  "ointments",
  "powder",
  "powders",
  "foam",
  "foams",
  "shampoo",
  "shampoos",
  "wash",
  "washes",
  "soap",
  "soaps",
  "serum",
  "serums",
  "oil",
  "oils",
  "oral",
  "topical",
  "nasal",
  "vaginal",
  "vag",
  "inhaler",
  "inhalers",
  "injection",
  "inj",
  "inf",
  "infusion",
  "syringe",
  "syringes",
  "enema",
  "douche",
  "mouthwash",
  "mouth",
  "eye",
  "eyedrops",
  "ear",
  "otic",
  "patch",
  "patches",
  "supp",
  "supplement",
  "supplements",
  "chew",
  "chewable",
  "chewables",
  "gummies",
  "lozenge",
  "lozenges",
  "granules",
  "coated",
  "prefilled",
  "مل",
  "مجم",
  "جم",
  "جرام",
  "كجم",
  "وحده",
  "وحدات",
  "قرص",
  "اقراص",
  "كبسوله",
  "كبسولات",
  "امبول",
  "امبولات",
  "فيال",
  "فيالات",
  "شراب",
  "شرابات",
  "كريم",
  "محلول",
  "معلق",
  "قطره",
  "قطرات",
  "بخاخ",
  "لوشن",
  "مرهم",
  "بودره",
  "شامبو",
  "غسول",
  "سيروم",
  "زيت",
  "فم",
  "انف",
  "عين",
  "حقن",
  "سرنجه",
  "سرنجات",
  "لبوس",
  "تاب",
  "تابس",
  "كابس",
  "كاب",
  "ساتشيتس",
  "سيرينجي",
  "سواب",
] as const;

const SEARCH_SHARD_STOPLIST_SET = new Set<string>(SEARCH_SHARD_STOPLIST);

export function normalize(text: string): string {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\u064b-\u0652\u0670]/g, "")
    .replace(/\u0640/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/[\u0660-\u0669]/g, (digit) =>
      String(digit.charCodeAt(0) - 0x0660),
    )
    .replace(/[\u06f0-\u06f9]/g, (digit) =>
      String(digit.charCodeAt(0) - 0x06f0),
    )
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function shardKeyForNormalizedToken(token: string): string | null {
  if (
    token.length === 0 ||
    /^\d/u.test(token) ||
    SEARCH_SHARD_STOPLIST_SET.has(token)
  ) {
    return null;
  }

  const characters = [...token];
  if (
    characters.length < 2 ||
    !/^[a-z\p{Script=Arabic}]/u.test(characters[0])
  ) {
    return null;
  }

  return characters.slice(0, 2).join("");
}

export function searchShardKey(query: string): string | null {
  const tokens = normalize(query).split(" ").filter(Boolean);
  for (const token of tokens) {
    const key = shardKeyForNormalizedToken(token);
    if (key !== null) return key;
  }
  return null;
}

function arabicSkeleton(token: string): string {
  return /\p{Script=Arabic}/u.test(token) ? token.replace(/[اوي]/g, "") : token;
}

function everyTokenHasPrefix(queryTokens: string[], nameTokens: string[]): boolean {
  return queryTokens.every((queryToken) =>
    queryToken.length > 0 && nameTokens.some((nameToken) => nameToken.startsWith(queryToken)),
  );
}

function matchTier(name: string, normalizedQuery: string, queryTokens: string[]): number | null {
  const normalizedName = normalize(name);
  if (normalizedName.startsWith(normalizedQuery)) return 1;

  const nameTokens = normalizedName === "" ? [] : normalizedName.split(" ");
  if (everyTokenHasPrefix(queryTokens, nameTokens)) return 2;

  const skeletonQuery = queryTokens.map(arabicSkeleton);
  const skeletonName = nameTokens.map(arabicSkeleton);
  return everyTokenHasPrefix(skeletonQuery, skeletonName) ? 3 : null;
}

function compareNullableNames(left: string | null, right: string | null): number {
  if (left === null) return right === null ? 0 : 1;
  if (right === null) return -1;
  return left < right ? -1 : left > right ? 1 : 0;
}

export function search(
  entries: IndexEntry[],
  query: string,
  limit = 30,
): IndexEntry[] {
  const normalizedQuery = normalize(query);
  const maximum = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 0;
  if (maximum === 0 || normalizedQuery.length < 2) return [];

  const queryTokens = normalizedQuery.split(" ");
  if (!queryTokens.some((token) => shardKeyForNormalizedToken(token) !== null)) {
    return [];
  }

  const matches = entries.flatMap((entry) => {
    const tiers = [entry[1], entry[2]]
      .filter((name): name is string => name !== null)
      .map((name) => matchTier(name, normalizedQuery, queryTokens))
      .filter((tier): tier is number => tier !== null);
    const tier = tiers.length > 0 ? Math.min(...tiers) : null;
    return tier === null ? [] : [{ entry, tier }];
  });

  matches.sort(
    (left, right) =>
      left.tier - right.tier ||
      compareNullableNames(left.entry[1], right.entry[1]) ||
      compareNullableNames(left.entry[2], right.entry[2]) ||
      left.entry[0].localeCompare(right.entry[0]),
  );

  return matches.slice(0, maximum).map(({ entry }) => entry);
}
