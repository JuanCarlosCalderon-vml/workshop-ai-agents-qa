import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder API - Smoke Test', () => {
  test('[API] Should return a list of users', async ({ request }) => {
    // Arrange
    const endpoint = '/users';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(Array.isArray(body), 'Response should be an array').toBeTruthy();
    expect(body.length, 'Should return users').toBeGreaterThan(0);
    expect(body[0].id, 'First user should have an id').toBeDefined();
    expect(body[0].name, 'First user should have a name').toBeDefined();
    expect(body[0].email, 'First user should have an email').toBeDefined();
  });
});
