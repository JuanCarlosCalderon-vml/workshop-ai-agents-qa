import { test, expect } from '@playwright/test';

test.describe('GET /posts', () => {
  test('[API] Should return a list of posts', async ({ request }) => {
    // Arrange
    const endpoint = '/posts';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status()).toBe(200, 'Status should be 200');
    expect(Array.isArray(body)).toBe(true, 'Response should be an array');
    expect(body.length).toBeGreaterThan(0, 'Should return at least one post');
  });

  test('[API] Should return a post with correct structure', async ({ request }) => {
    // Arrange
    const postId = 1;

    // Act
    const response = await request.get(`/posts/${postId}`);
    const body = await response.json();

    // Assert
    expect(response.status()).toBe(200, 'Status should be 200');
    expect(body.id).toBe(postId, 'Post ID should match');
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
    expect(response.status()).toBe(404, 'Status should be 404 for non-existent post');
  });
});
