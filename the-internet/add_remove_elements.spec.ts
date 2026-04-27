import { test, expect } from "@playwright/test";

test("Validate adding element and deleting element", async ({ page }) => {
  let times = 3

  await page.goto("/");
  await page.getByRole("link", { name: "Add/Remove Elements" }).click();

  const addButtons = page.getByRole("button", { name: "Add Element" });
  for (let i = 0; i < times; i++) {
    await addButtons.click()
  }

  const deleteButtons = page.getByRole("button", { name: "Delete"})
  await expect(deleteButtons).toHaveCount(times)

  for (let i = 0; i < times; i++) {
    await deleteButtons.first().click()
  }

  await expect(deleteButtons).toHaveCount(0);
});
