import { test, expect } from '@playwright/test';

test.describe('GET /todos', () => {
  test('[API] Should return a list of todos', async ({ request }) => {
    // Arrange
    const endpoint = '/todos';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(Array.isArray(body), 'Response should be an array').toBe(true);
    expect(body.length, 'Should return at least one todo').toBeGreaterThan(0);
  });

  test('[API] Should return a todo with correct structure', async ({ request }) => {
    // Arrange
    const todoId = 1;

    // Act
    const response = await request.get(`/todos/${todoId}`);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(body.id, 'Todo ID should match').toBe(todoId);
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
    expect(response.status(), 'Status should be 404 for non-existent todo').toBe(404);
  });
});
