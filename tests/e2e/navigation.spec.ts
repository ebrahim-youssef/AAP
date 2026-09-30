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

const destinations = ["/", "/medicines", "/branches", "/about", "/terms", "/privacy"];

for (const viewport of [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 800 },
]) {
  test.describe(`${viewport.name} navigation`, () => {
    test.use({ viewport });

    for (const path of pagePaths) {
      test(`${path} exposes every site destination`, async ({ page }) => {
        await page.goto(path);

        for (const destination of destinations) {
          await expect(page.locator(`a[href="${destination}"]:visible`).first()).toBeVisible();
        }
      });
    }
  });
}
