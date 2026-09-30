import { describe, expect, it } from "vitest";
import { buildMedicineJsonLd, serializeJsonLd } from "../../src/lib/seo";

describe("JSON-LD serialization", () => {
  it("escapes less-than characters before the script tag is rendered", () => {
    const serialized = serializeJsonLd({
      name: "A <script>alert(1)</script>",
    });

    expect(serialized).not.toContain("<script>");
    expect(serialized).toContain("\\u003cscript>");
  });

  it("does not add an availability claim to medicine offers", () => {
    const data = buildMedicineJsonLd(
      {
        slug: "sample",
        nameEn: "Sample",
        nameAr: "عينة",
        manufacturer: null,
        priceEgp: 12.5,
      },
      "en",
      new URL("https://aap.example"),
    );

    expect(data.offers).toEqual({
      "@type": "Offer",
      price: 12.5,
      priceCurrency: "EGP",
      url: "https://aap.example/en/medicines/sample",
    });
    expect(data.offers).not.toHaveProperty("availability");
  });
});
