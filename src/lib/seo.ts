import type { Branch } from "../data/site";
import { getStrings } from "../i18n/strings";
import { absoluteLocaleUrl, absoluteSiteUrl } from "./site-url";
import type { Locale } from "./i18n";

type JsonObject = Record<string, unknown>;

function addIfPresent(target: JsonObject, key: string, value: string | null): void {
  if (value !== null) target[key] = value;
}

function branchName(branch: Branch, locale: Locale): string {
  return locale === "en" ? branch.nameEn : branch.nameAr;
}

function branchJsonLd(
  branch: Branch,
  locale: Locale,
  site: URL | undefined,
  includeContext: boolean,
): JsonObject {
  const data: JsonObject = {
    ...(includeContext ? { "@context": "https://schema.org" } : {}),
    "@type": "Pharmacy",
    name: branchName(branch, locale),
    url: absoluteLocaleUrl(site, locale, `branches/${branch.slug}`),
  };
  addIfPresent(data, "address", branch.addressAr);
  addIfPresent(data, "telephone", branch.phone);
  addIfPresent(data, "openingHours", branch.hoursAr);
  return data;
}

export function buildHomeJsonLd(
  branches: readonly Branch[],
  locale: Locale,
  site: URL | undefined,
): JsonObject {
  const text = getStrings(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: text.brandName,
    url: absoluteLocaleUrl(site, locale, "/"),
    logo: absoluteSiteUrl(site, "/logo-icon.svg"),
    department: branches.map((branch) => branchJsonLd(branch, locale, site, false)),
  };
}

export function buildBranchJsonLd(
  branch: Branch,
  locale: Locale,
  site: URL | undefined,
): JsonObject {
  return branchJsonLd(branch, locale, site, true);
}

export interface MedicineJsonLdInput {
  slug: string;
  nameEn: string | null;
  nameAr: string | null;
  manufacturer: string | null;
  priceEgp: number;
}

export function buildMedicineJsonLd(
  medicine: MedicineJsonLdInput,
  locale: Locale,
  site: URL | undefined,
): JsonObject {
  const data: JsonObject = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: medicine.nameEn ?? medicine.nameAr ?? medicine.slug,
    offers: {
      "@type": "Offer",
      price: medicine.priceEgp,
      priceCurrency: "EGP",
      url: absoluteLocaleUrl(site, locale, `medicines/${medicine.slug}`),
    },
  };
  addIfPresent(data, "alternateName", medicine.nameAr);
  if (medicine.manufacturer !== null) {
    data.brand = { "@type": "Brand", name: medicine.manufacturer };
    data.manufacturer = medicine.manufacturer;
  }
  return data;
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
