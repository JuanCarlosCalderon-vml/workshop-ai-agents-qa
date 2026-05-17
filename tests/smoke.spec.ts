import { test, expect } from '@playwright/test';

test('smoke - API is reachable', async ({ request }) => {
  const response = await request.get('/users');
  expect(response.ok()).toBeTruthy();
});
