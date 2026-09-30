import { expect, test } from "@playwright/test";

test.describe("medicine search", () => {
  test("finds Panadol results while typing in Arabic", async ({ page }) => {
    await page.goto("/medicines");

    await page.locator('input#medicine-page-search[name="q"]').fill("بانادول");

    await expect(page.locator('a[href^="/medicines/panadol-"]').first()).toBeVisible();
  });

  test("prefills the search input from the URL query", async ({ page }) => {
    await page.goto("/medicines?q=panadol");

    await expect(page.locator("#medicine-page-search")).toHaveValue("panadol");
  });

  test("the home search form sends its query to the results page", async ({ page }) => {
    await page.goto("/");

    await page.locator('input#home-medicine-search[name="q"]').fill("panadol");
    await page.locator("form", { has: page.locator("#home-medicine-search") }).locator(".aa-search__go").click();

    await expect(page).toHaveURL(/\/medicines\/?\?q=panadol$/);
    await expect(page.locator('a[href^="/medicines/panadol-"]').first()).toBeVisible();
  });
});

test.describe("medicine detail", () => {
  test("renders a real medicine with its price, notices, and cache header", async ({ page }) => {
    const response = await page.goto(
      "/medicines/panadol-advance-500-mg-24-f-c-tabs",
    );

    expect(response?.status()).toBe(200);
    expect(response?.headers()["cache-control"]).toContain("s-maxage=86400");
    await expect(page.locator("h1")).toHaveAttribute("dir", "ltr");
    await expect(page.locator("h1")).toContainText("PANADOL ADVANCE 500 MG 24 F.C.TABS.");
    await expect(page.locator("body")).toContainText("46 ج.م");
    await expect(page.locator("body")).toContainText("يلزم تأكيد");
    await expect(page.locator("body")).toContainText("يونيو 2026");
    await expect(page.locator("body")).toContainText("الأسعار هي أسعار القوائم وقد تتغير");
    await expect(page.locator("body")).toContainText("لا يقدم نصيحة طبية");
    await expect(page.locator("body")).toContainText("لازم لها روشتة عند الاستلام أو التوصيل");
  });

  test("returns a real 404 for an unknown medicine slug", async ({ page }) => {
    const response = await page.goto("/medicines/does-not-exist");

    expect(response?.status()).toBe(404);
    expect(response?.headers()["cache-control"]).toBe(
      "public, max-age=60, s-maxage=300",
    );
  });
});
