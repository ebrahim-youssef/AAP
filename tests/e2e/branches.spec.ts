import { expect, test } from "@playwright/test";

test("branch detail marks every unverified branch and delivery field", async ({ page }) => {
  await page.goto("/branches/branch-1");

  for (const field of ["العنوان", "المواعيد", "التليفون", "الخريطة", "التوصيل"]) {
    const row = page.locator(".aa-facts > div", {
      has: page.getByText(field, { exact: true }),
    });

    await expect(row).toHaveCount(1);
    await expect(row.locator("dd")).toHaveText("بيانات تتوثّق");
  }
});
