import { describe, expect, it } from "vitest";
import {
  buildSitemapIndex,
  buildUrlset,
  MEDICINE_SITEMAP_PAGE_SIZE,
  medicineSitemapFileCount,
} from "../../src/lib/sitemap";

describe("sitemap XML", () => {
  it("renders a literal two-medicine urlset with escaped values and alternates", () => {
    const xml = buildUrlset([
      {
        loc: "https://aap.example/medicines/panadol?ref=price&lang=ar",
        alternates: [
          { hreflang: "ar", href: "https://aap.example/medicines/panadol" },
          { hreflang: "en", href: "https://aap.example/en/medicines/panadol" },
          { hreflang: "x-default", href: "https://aap.example/medicines/panadol" },
        ],
      },
      {
        loc: "https://aap.example/en/medicines/aspirin",
        alternates: [
          { hreflang: "ar", href: "https://aap.example/medicines/aspirin" },
          { hreflang: "en", href: "https://aap.example/en/medicines/aspirin" },
          { hreflang: "x-default", href: "https://aap.example/medicines/aspirin" },
        ],
      },
    ]);

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        "  <url>",
        "    <loc>https://aap.example/medicines/panadol?ref=price&amp;lang=ar</loc>",
        '    <xhtml:link rel="alternate" hreflang="ar" href="https://aap.example/medicines/panadol" />',
        '    <xhtml:link rel="alternate" hreflang="en" href="https://aap.example/en/medicines/panadol" />',
        '    <xhtml:link rel="alternate" hreflang="x-default" href="https://aap.example/medicines/panadol" />',
        "  </url>",
        "  <url>",
        "    <loc>https://aap.example/en/medicines/aspirin</loc>",
        '    <xhtml:link rel="alternate" hreflang="ar" href="https://aap.example/medicines/aspirin" />',
        '    <xhtml:link rel="alternate" hreflang="en" href="https://aap.example/en/medicines/aspirin" />',
        '    <xhtml:link rel="alternate" hreflang="x-default" href="https://aap.example/medicines/aspirin" />',
        "  </url>",
        "</urlset>",
      ].join("\n") + "\n",
    );
  });

  it("creates six medicine sitemap files for the imported 25,066 medicines", () => {
    expect(MEDICINE_SITEMAP_PAGE_SIZE).toBe(5_000);
    expect(medicineSitemapFileCount(25_066)).toBe(6);
    expect(
      buildSitemapIndex([
        "https://aap.example/sitemaps/static.xml",
        ...Array.from({ length: 6 }, (_, index) =>
          `https://aap.example/sitemaps/medicines-${index + 1}.xml`,
        ),
      ]),
    ).toContain("<loc>https://aap.example/sitemaps/medicines-6.xml</loc>");
  });

  it("includes the XML declaration and sitemap namespaces", () => {
    const xml = buildSitemapIndex(["https://aap.example/sitemaps/static.xml"]);

    expect(xml).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?>/);
    expect(xml).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  });
});
