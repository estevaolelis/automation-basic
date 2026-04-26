import { test, expect } from '@playwright/test';

test('Validate link', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle(/Welcome to the-internet/);
});
