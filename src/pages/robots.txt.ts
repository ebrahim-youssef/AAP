import { absoluteSiteUrl } from "../lib/site-url";
import { sitemapResponse } from "../lib/sitemap";

export const prerender = true;

export function GET({ site }: { site: URL | undefined }): Response {
  const body = "User-agent: *\nAllow: /\nSitemap: " + absoluteSiteUrl(site, "/sitemap.xml") + "\n";
  return sitemapResponse(body, "text/plain; charset=utf-8");
}
