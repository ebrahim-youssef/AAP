import { expect, test } from "@playwright/test";

test("branch detail marks every unverified branch and delivery field", async ({ page }) => {
  await page.goto("/branches/branch-1");

  await expect(page.locator(".aa-facts").getByText("بيانات تتوثّق")).toHaveCount(8);
});
