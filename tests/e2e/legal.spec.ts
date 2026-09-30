import { expect, test } from "@playwright/test";
import { staticRoutes } from "../fixtures/routes";

test("terms contains the three required notices", async ({ page }) => {
  await page.goto("/terms");

  await expect(page.locator(".aa-notice-list")).toContainText("الأسعار هي أسعار القوائم وقد تتغير");
  await expect(page.locator(".aa-notice-list")).toContainText("لا يقدم نصيحة طبية");
  await expect(page.locator(".aa-notice-list")).toContainText("لازم لها روشتة عند الاستلام أو التوصيل");
});

for (const path of staticRoutes) {
  test(`${path} has the site copyright line`, async ({ page }) => {
    await page.goto(path);

    await expect(page.locator("footer")).toContainText("© 2026 صيدليات علي أمين");
  });
}
