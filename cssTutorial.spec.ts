import { test, expect } from '@playwright/test';

test('Salesforce login using CSS selectors', async ({ page }) => {
  test.setTimeout(120000);

  await page.goto('https://login.salesforce.com/?locale=in');
  await page.locator('#username').fill('yuvarani.sekar@testleaf.com');
  await page.locator('input.button.primary').click();
  await page.locator('input[type="password"]').fill('TestLeaf@2028');
  await page.locator('input[value="Log In"]').click();
});