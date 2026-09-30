import { absoluteSiteUrl } from "../lib/site-url";

export const prerender = true;

export function GET({ site }: { site: URL | undefined }): Response {
  const body = "User-agent: *\nAllow: /\nSitemap: " + absoluteSiteUrl(site, "/sitemap.xml") + "\n";
  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
