import { test, expect } from '@playwright/test';

// Este archivo representa el output de Copilot SIN configuración de AI.
// Se usa como referencia para comparar contra el output CON capas configuradas.

test('get users', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.length).toBeGreaterThan(0);
});

test('get user by id', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.id).toBe(1);
  expect(data.name).toBeDefined();
});

test('user not found', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/999');
  expect(response.status()).toBe(404);
});

test('check user structure', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('name');
  expect(data).toHaveProperty('email');
  expect(data).toHaveProperty('address');
});
