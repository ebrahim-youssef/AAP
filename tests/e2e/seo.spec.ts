import { expect, request as playwrightRequest, test } from "@playwright/test";

const origin = "https://aap.example";
const medicinePath = "/medicines/panadol-advance-500-mg-24-f-c-tabs";
const staticRoutes = [
  "/",
  "/medicines",
  "/branches",
  "/branches/branch-1",
  "/branches/branch-2",
  "/about",
  "/terms",
  "/privacy",
];

function localePath(locale: "ar" | "en", path: string): string {
  if (locale === "ar") return path;
  return path === "/" ? "/en" : "/en" + path;
}

function sitemapLocations(xml: string): string[] {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].replace(/&amp;/g, "&"),
  );
}

function canonicalFromHtml(html: string): string {
  return html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
}

for (const route of staticRoutes) {
  for (const locale of ["ar", "en"] as const) {
    const path = localePath(locale, route);
    test(path + " has its own canonical and reciprocal language links", async ({ page }) => {
      await page.goto(path);

      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("html")).toHaveAttribute("dir", locale === "ar" ? "rtl" : "ltr");
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        origin + path,
      );

      for (const [alternateLocale, alternatePath] of [
        ["ar", localePath("ar", route)],
        ["en", localePath("en", route)],
        ["x-default", localePath("ar", route)],
      ] as const) {
        const alternate = page.locator('link[rel="alternate"][hreflang="' + alternateLocale + '"]');
        await expect(alternate).toHaveCount(1);
        await expect(alternate).toHaveAttribute("href", origin + alternatePath);
      }
    });
  }
}

test("home JSON-LD describes the pharmacy and omits unknown branch fields", async ({ page }) => {
  await page.goto("/");

  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(jsonLd ?? "");

  expect(data["@type"]).toBe("Pharmacy");
  expect(data.department).toHaveLength(2);
  expect(data).not.toHaveProperty("address");
  expect(data).not.toHaveProperty("telephone");
  expect(data.logo).toBe(origin + "/logo-icon.svg");
});

test("medicine JSON-LD contains a priced offer without stock availability", async ({ page }) => {
  await page.goto(medicinePath);

  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  const data = JSON.parse(jsonLd ?? "");

  expect(data["@type"]).toBe("Product");
  expect(data.offers.price).toBe(46);
  expect(data.offers.priceCurrency).toBe("EGP");
  expect(data.offers).not.toHaveProperty("availability");
});

test("medicine language switch preserves the slug", async ({ page }) => {
  await page.goto(medicinePath);
  await expect(page.locator("header .aa-language-switch")).toBeVisible();
  await expect(page.locator('header a[lang="en"]')).toHaveAttribute(
    "href",
    "/en" + medicinePath,
  );

  await page.goto("/en" + medicinePath);
  await expect(page.locator("header .aa-language-switch")).toBeVisible();
  await expect(page.locator('header a[lang="ar"]')).toHaveAttribute("href", medicinePath);
});

test("English medicine page keeps the price metadata and locale links", async ({ page }) => {
  const path = "/en" + medicinePath;
  await page.goto(path);

  await expect(page).toHaveTitle("PANADOL ADVANCE 500 MG 24 F.C.TABS. price in Egypt | Ali Amin Pharmacies");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", origin + path);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /EGP 46.*June 2026/,
  );
  await expect(page.locator("body")).toContainText("PANADOL ADVANCE 500 MG 24 F.C.TABS.");
  await expect(page.locator("body")).toContainText("بانادول أدفانسي");
});

test("English medicine search links to the English detail route", async ({ page }) => {
  await page.goto("/en/medicines");
  await page.locator('input#medicine-page-search[name="q"]').fill("panadol");

  await expect(page.locator('a[href^="/en/medicines/panadol-"]').first()).toBeVisible();
});

test("sitemap index and medicine sitemap expose a real medicine URL", async ({ request }) => {
  const indexResponse = await request.get("/sitemap.xml");
  expect(indexResponse.status()).toBe(200);
  expect(indexResponse.headers()["content-type"]).toContain("application/xml");
  const indexXml = await indexResponse.text();
  expect(indexXml).toContain("https://aap.example/sitemaps/medicines-1.xml");

  const medicineResponse = await request.get("/sitemaps/medicines-1.xml");
  expect(medicineResponse.status()).toBe(200);
  expect(medicineResponse.headers()["content-type"]).toContain("application/xml");
  const medicineXml = await medicineResponse.text();
  const firstArabicMedicine = sitemapLocations(medicineXml).find((location) =>
    location.startsWith(origin + "/medicines/"),
  );
  expect(firstArabicMedicine).toBeTruthy();
  expect(medicineXml).toContain(
    origin + "/en" + new URL(firstArabicMedicine!).pathname,
  );
});

test("sitemap URLs are direct 200s and pages canonicalize to those URLs", async ({ request }) => {
  const staticXml = await (await request.get("/sitemaps/static.xml")).text();
  const staticLocations = sitemapLocations(staticXml);
  const noRedirect = await playwrightRequest.newContext({
    baseURL: "http://localhost:8787",
    maxRedirects: 0,
  });

  try {
    for (const publicUrl of [
      ...staticLocations,
      origin + medicinePath,
      origin + "/en" + medicinePath,
    ]) {
      const target = new URL(publicUrl);
      const response = await noRedirect.get(target.pathname);
      expect(response.status(), publicUrl).toBe(200);
      expect(canonicalFromHtml(await response.text()), publicUrl).toBe(publicUrl);
    }
  } finally {
    await noRedirect.dispose();
  }
});

test("build-time sitemap index has six bounded medicine files", async ({ request }) => {
  const indexXml = await (await request.get("/sitemap.xml")).text();
  const indexLocations = sitemapLocations(indexXml);

  expect(indexLocations).toHaveLength(7);
  expect(indexLocations).toContain(origin + "/sitemaps/static.xml");
  for (let page = 1; page <= 6; page += 1) {
    expect(indexLocations).toContain(origin + "/sitemaps/medicines-" + page + ".xml");
  }

  for (let page = 1; page <= 6; page += 1) {
    const response = await request.get("/sitemaps/medicines-" + page + ".xml");
    expect(response.status()).toBe(200);
    const body = await response.body();
    expect(body.byteLength).toBeLessThan(10 * 1024 * 1024);
  }

  const firstMedicineXml = await (
    await request.get("/sitemaps/medicines-1.xml")
  ).text();
  const firstArabicMedicine = sitemapLocations(firstMedicineXml).find((location) =>
    location.startsWith(origin + "/medicines/"),
  );
  expect(firstArabicMedicine).toBeTruthy();
  expect(firstMedicineXml).toContain(
    origin + "/en" + new URL(firstArabicMedicine!).pathname,
  );
});

test("unknown sitemap page is a real 404", async ({ request }) => {
  expect((await request.get("/sitemaps/medicines-99.xml")).status()).toBe(404);
});

test("robots points to the absolute sitemap", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.status()).toBe(200);
  expect(await response.text()).toContain("Sitemap: " + origin + "/sitemap.xml");
});

test("unknown static route returns 404", async ({ request }) => {
  expect((await request.get("/does-not-exist")).status()).toBe(404);
});

test("unknown medicine slugs return 404 in both locales", async ({ request }) => {
  expect((await request.get("/medicines/does-not-exist")).status()).toBe(404);
  expect((await request.get("/en/medicines/does-not-exist")).status()).toBe(404);
});

test("Arabic 404 offers English home, search, and WhatsApp contact", async ({ page }) => {
  const response = await page.goto("/does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.locator('a[href="/en"]').filter({ hasText: "English home" })).toBeVisible();
  await expect(page.locator("#missing-medicine-search")).toBeVisible();
  await expect(page.getByRole("button", { name: "اسأل على واتساب" })).toBeVisible();
});
