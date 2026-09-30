export type Locale = "ar" | "en";

export const locales: readonly Locale[] = ["ar", "en"];

export function localePath(locale: Locale, path = "/"): string {
  const normalizedPath = path === "/" ? "" : path.replace(/^\/+|\/+$/g, "");
  const suffix = normalizedPath === "" ? "" : `/${normalizedPath}`;
  return locale === "en" ? `/en${suffix}` : suffix || "/";
}

export function unlocalizedPath(pathname: string): string {
  let publicPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  publicPath = publicPath
    .replace(/\/index\.html$/, "/")
    .replace(/\.html$/, "")
    .replace(/\/+$/, "") || "/";

  const normalized = publicPath.replace(/^\/+/, "");
  if (normalized === "en") return "/";
  if (normalized.startsWith("en/")) return `/${normalized.slice(3)}`;
  return publicPath;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function isLocale(value: string | undefined): value is Locale {
  return value === "ar" || value === "en";
}
