import {
  buildSitemapIndex,
  medicineSitemapFileCount,
  sitemapResponse,
} from "../lib/sitemap";
import { readMedicineSlugs } from "../lib/medicine-slugs";
import { absoluteSiteUrl } from "../lib/site-url";

export const prerender = true;

export async function GET({ site }: { site: URL | undefined }): Promise<Response> {
  const medicineCount = (await readMedicineSlugs()).length;
  const medicineFiles = Array.from(
    { length: medicineSitemapFileCount(medicineCount) },
    (_, index) => absoluteSiteUrl(site, "/sitemaps/medicines-" + (index + 1) + ".xml"),
  );
  const xml = buildSitemapIndex([
    absoluteSiteUrl(site, "/sitemaps/static.xml"),
    ...medicineFiles,
  ]);

  return sitemapResponse(xml);
}
