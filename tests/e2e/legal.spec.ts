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

test("terms contains the three required notices", async ({ page }) => {
  await page.goto("/terms");

  await expect(page.locator(".aa-notice-list")).toContainText("الأسعار هي أسعار القوائم وقد تتغير");
  await expect(page.locator(".aa-notice-list")).toContainText("لا يقدم نصيحة طبية");
  await expect(page.locator(".aa-notice-list")).toContainText("لازم لها روشتة عند الاستلام أو التوصيل");
});

for (const path of pagePaths) {
  test(`${path} has the site copyright line`, async ({ page }) => {
    await page.goto(path);

    await expect(page.locator("footer")).toContainText("© 2026 صيدليات علي أمين");
  });
}
