import { test, expect } from '@playwright/test';

test('Validate heading from A/B link', async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "A/B Testing"}).click()

  await expect(page.getByRole("heading", { name: "A/B Test Control"})).toBeVisible();
});
