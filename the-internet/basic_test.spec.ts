import { test, expect } from '@playwright/test';

test('Validate link', async ({ page }) => {
  await page.goto("/");
  
  await expect(page).toHaveTitle("The Internet");
});
