import {
  buildMedicineUrlset,
  medicineSitemapFileCount,
  MEDICINE_SITEMAP_PAGE_SIZE,
  sitemapResponse,
} from "../../lib/sitemap";
import { readMedicineSlugs } from "../../lib/medicine-slugs";
import { requireSite } from "../../lib/site-url";

export const prerender = true;

interface Props {
  slugs: string[];
}

export async function getStaticPaths() {
  const slugs = await readMedicineSlugs();
  const fileCount = medicineSitemapFileCount(slugs.length);

  return Array.from({ length: fileCount }, (_, index) => {
    const start = index * MEDICINE_SITEMAP_PAGE_SIZE;
    return {
      params: { n: String(index + 1) },
      props: { slugs: slugs.slice(start, start + MEDICINE_SITEMAP_PAGE_SIZE) },
    };
  });
}

export async function GET({
  props,
  site,
}: {
  props: Props;
  site: URL | undefined;
}): Promise<Response> {
  return sitemapResponse(buildMedicineUrlset(requireSite(site), props.slugs));
}
