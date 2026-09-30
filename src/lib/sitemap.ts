import { localePath, type Locale } from "./i18n";

export const MEDICINE_SITEMAP_PAGE_SIZE = 5_000;
const sitemapNamespace = "http://www.sitemaps.org/schemas/sitemap/0.9";
const xhtmlNamespace = "http://www.w3.org/1999/xhtml";

export interface SitemapAlternate {
  hreflang: string;
  href: string;
}

export interface SitemapEntry {
  loc: string;
  alternates?: SitemapAlternate[];
  lastmod?: string;
}

export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildUrlset(entries: readonly SitemapEntry[]): string {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<urlset xmlns="${sitemapNamespace}" xmlns:xhtml="${xhtmlNamespace}">`,
  ];

  for (const entry of entries) {
    lines.push("  <url>", `    <loc>${xmlEscape(entry.loc)}</loc>`);
    if (entry.lastmod) lines.push(`    <lastmod>${xmlEscape(entry.lastmod)}</lastmod>`);
    for (const alternate of entry.alternates ?? []) {
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="${xmlEscape(alternate.hreflang)}" href="${xmlEscape(alternate.href)}" />`,
      );
    }
    lines.push("  </url>");
  }

  lines.push("</urlset>");
  return lines.join("\n") + "\n";
}

export function buildSitemapIndex(locations: readonly string[]): string {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<sitemapindex xmlns="${sitemapNamespace}">`,
  ];

  for (const location of locations) {
    lines.push("  <sitemap>", `    <loc>${xmlEscape(location)}</loc>`, "  </sitemap>");
  }

  lines.push("</sitemapindex>");
  return lines.join("\n") + "\n";
}

export function medicineSitemapFileCount(medicineCount: number): number {
  return Math.ceil(Math.max(0, medicineCount) / MEDICINE_SITEMAP_PAGE_SIZE);
}

function absoluteUrl(origin: string | URL, path: string): string {
  return new URL(path, origin).toString();
}

function localizedAlternates(origin: string | URL, path: string): SitemapAlternate[] {
  const arabic = absoluteUrl(origin, localePath("ar", path));
  return [
    { hreflang: "ar", href: arabic },
    { hreflang: "en", href: absoluteUrl(origin, localePath("en", path)) },
    { hreflang: "x-default", href: arabic },
  ];
}

export function buildLocalizedUrlset(
  origin: string | URL,
  paths: readonly string[],
): string {
  const entries = paths.flatMap((path) => {
    const alternates = localizedAlternates(origin, path);
    return (["ar", "en"] as Locale[]).map((locale) => ({
      loc: absoluteUrl(origin, localePath(locale, path)),
      alternates,
    }));
  });

  return buildUrlset(entries);
}

export function buildMedicineUrlset(
  origin: string | URL,
  slugs: readonly string[],
): string {
  return buildLocalizedUrlset(
    origin,
    slugs.map((slug) => `medicines/${encodeURIComponent(slug)}`),
  );
}
