import { test, expect } from '@playwright/test';

test.describe('GET /todos', () => {
  test('[API] Should return a list of todos', async ({ request }) => {
    // Arrange
    const endpoint = '/todos';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status()).toBe(200, 'Status should be 200');
    expect(Array.isArray(body)).toBe(true, 'Response should be an array');
    expect(body.length).toBeGreaterThan(0, 'Should return at least one todo');
  });

  test('[API] Should return a todo with correct structure', async ({ request }) => {
    // Arrange
    const todoId = 1;

    // Act
    const response = await request.get(`/todos/${todoId}`);
    const body = await response.json();

    // Assert
    expect(response.status()).toBe(200, 'Status should be 200');
    expect(body.id).toBe(todoId, 'Todo ID should match');
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('completed');
    expect(body).toHaveProperty('userId');
  });

  test('[API] Should return 404 for non-existent todo', async ({ request }) => {
    // Arrange
    const invalidId = 99999;

    // Act
    const response = await request.get(`/todos/${invalidId}`);

    // Assert
    expect(response.status()).toBe(404, 'Status should be 404 for non-existent todo');
  });
});
