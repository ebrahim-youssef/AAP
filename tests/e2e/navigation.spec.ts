import { expect, test } from "@playwright/test";
import { staticRoutes } from "../fixtures/routes";

const destinations = ["/", "/medicines", "/branches", "/about", "/terms", "/privacy"];

for (const viewport of [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1280, height: 800 },
]) {
  test.describe(`${viewport.name} navigation`, () => {
    test.use({ viewport });

    for (const path of staticRoutes) {
      test(`${path} exposes every site destination`, async ({ page }) => {
        await page.goto(path);

        for (const destination of destinations) {
          await expect(page.locator(`a[href="${destination}"]:visible`).first()).toBeVisible();
        }
      });
    }
  });
}
