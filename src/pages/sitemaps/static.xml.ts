import { branches } from "../../data/site";
import { buildLocalizedUrlset, sitemapResponse } from "../../lib/sitemap";
import { requireSite } from "../../lib/site-url";

export const prerender = true;

export function GET({ site }: { site: URL | undefined }): Response {
  const paths = [
    "/",
    "medicines",
    "branches",
    ...branches.map((branch) => "branches/" + branch.slug),
    "about",
    "terms",
    "privacy",
  ];

  return sitemapResponse(buildLocalizedUrlset(requireSite(site), paths));
}
