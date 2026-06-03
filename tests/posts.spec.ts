import { test, expect } from '@playwright/test';

test.describe('GET /posts', () => {
  test('[API] Should return a list of posts', async ({ request }) => {
    // Arrange
    const endpoint = '/posts';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(Array.isArray(body), 'Response should be an array').toBe(true);
    expect(body.length, 'Should return at least one post').toBeGreaterThan(0);
  });

  test('[API] Should return a post with correct structure', async ({ request }) => {
    // Arrange
    const postId = 1;

    // Act
    const response = await request.get(`/posts/${postId}`);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(body.id, 'Post ID should match').toBe(postId);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
    expect(body).toHaveProperty('userId');
  });

  test('[API] Should return 404 for non-existent post', async ({ request }) => {
    // Arrange
    const invalidId = 99999;

    // Act
    const response = await request.get(`/posts/${invalidId}`);

    // Assert
    expect(response.status(), 'Status should be 404 for non-existent post').toBe(404);
  });
});
