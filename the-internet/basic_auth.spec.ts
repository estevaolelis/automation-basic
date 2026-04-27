import { test, expect } from "@playwright/test";

test("Authentication on Basic Auth", async ({ page, context }) => {
  await page.goto("/basic_auth");

  await expect(page.getByText('Congratulations! You must have the proper credentials.')).toBeVisible();
});
