import { localePath, type Locale } from "./i18n";

export function requireSite(site: URL | undefined): URL {
  if (!site) throw new Error("Astro.site is required for absolute public URLs");
  return site;
}

export function absoluteSiteUrl(site: URL | undefined, path: string): string {
  return new URL(path, requireSite(site)).toString();
}

export function absoluteLocaleUrl(
  site: URL | undefined,
  locale: Locale,
  path: string,
): string {
  return absoluteSiteUrl(site, localePath(locale, path));
}

// Preview mode: keep search engines out until the real domain and branch
// details are in. Set to true at launch.
export const indexable = false;
