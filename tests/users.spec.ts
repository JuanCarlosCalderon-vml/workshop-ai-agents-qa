import { test, expect } from '@playwright/test';

test.describe('GET /users', () => {
  test('[API] Should return a list of users', async ({ request }) => {
    // Arrange
    const endpoint = '/users';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status()).toBe(200, 'Status should be 200');
    expect(Array.isArray(body)).toBe(true, 'Response should be an array');
    expect(body.length).toBeGreaterThan(0, 'Should return at least one user');
  });

  test('[API] Should return a user by ID', async ({ request }) => {
    // Arrange
    const userId = 1;

    // Act
    const response = await request.get(`/users/${userId}`);
    const body = await response.json();

    // Assert
    expect(response.status()).toBe(200, 'Status should be 200');
    expect(body.id).toBe(userId, 'User ID should match');
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
    expect(response.status()).toBe(404, 'Status should be 404 for non-existent user');
  });
});
