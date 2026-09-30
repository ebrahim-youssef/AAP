import { expect, test } from "@playwright/test";

const pagePaths = [
  "/",
  "/medicines",
  "/branches",
  "/branches/branch-1",
  "/branches/branch-2",
  "/about",
  "/terms",
  "/privacy",
];

test.describe("static Arabic pages", () => {
  for (const path of pagePaths) {
    test(`${path} serves an Arabic RTL document with one heading`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", "ar");
      await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
      await expect(page.locator("h1")).toHaveCount(1);
    });
  }

  test("home puts the medicine search in the header", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("header .aa-search input")).toBeVisible();
  });
});
