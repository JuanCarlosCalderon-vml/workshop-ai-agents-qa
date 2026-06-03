import { test, expect } from '@playwright/test';

test.describe('GET /users', () => {
  test('[API] Should return a list of users', async ({ request }) => {
    // Arrange
    const endpoint = '/users';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(Array.isArray(body), 'Response should be an array').toBe(true);
    expect(body.length, 'Should return at least one user').toBeGreaterThan(0);
  });

  test('[API] Should return a user by ID', async ({ request }) => {
    // Arrange
    const userId = 1;

    // Act
    const response = await request.get(`/users/${userId}`);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(body.id, 'User ID should match').toBe(userId);
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('email');
    expect(body).toHaveProperty('username');
  });

  test('[API] Should return 404 for non-existent user', async ({ request }) => {
    // Arrange
    const invalidId = 99999;

    // Act
    const response = await request.get(`/users/${invalidId}`);

    // Assert
    expect(response.status(), 'Status should be 404 for non-existent user').toBe(404);
  });
});
