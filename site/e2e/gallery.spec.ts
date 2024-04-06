import { test, expect } from '@playwright/test';

let baseURL = process.env.BASE_URL || 'http://localhost:8787';

test('page has title', async ({ page }) => {
	await page.goto(baseURL + '/gallery');
	await expect(page).toHaveTitle(/Photo Gallery/);
});

test('page has images', async ({ page }) => {
	await page.goto(baseURL + '/gallery');
	expect((await page.getByRole('img').all()).length).toBeGreaterThan(0);
});
