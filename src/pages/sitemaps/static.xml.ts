import { branches } from "../../data/site";
import { buildLocalizedUrlset } from "../../lib/sitemap";
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

  return new Response(buildLocalizedUrlset(requireSite(site), paths), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
