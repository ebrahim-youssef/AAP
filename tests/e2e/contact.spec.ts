import { expect, test } from "@playwright/test";

test.describe("contact actions", () => {
  test("shows the missing WhatsApp state without a wa.me link", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("button", { name: "اسأل على واتساب" })).toBeDisabled();
    await expect(page.getByText("بيانات تتوثّق").first()).toBeVisible();
    await expect(page.locator('a[href^="https://wa.me/"]')).toHaveCount(0);
  });

  test("opens the branch call dialog and closes it with Escape", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "اتصل بفرع" }).click();

    const dialog = page.getByRole("dialog", { name: "اختار الفرع" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("button", { name: "إغلاق" })).toBeFocused();
    await expect(dialog).toContainText("الفرع الأول");
    await expect(dialog).toContainText("الفرع التاني");
    await expect(dialog.getByText("بيانات تتوثّق")).toHaveCount(2);

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
});
