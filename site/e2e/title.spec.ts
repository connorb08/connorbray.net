import { test, expect } from '@playwright/test';

let baseURL = process.env.BASE_URL || 'http://localhost:8787';

test('has title', async ({ page }) => {
	await page.goto(baseURL);

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/connorbray.net/);
});
