import { test, expect } from '@playwright/test';

test('get Luke Skywalker from SWAPI', async ({ request }) => {
  const response = await request.get('https://swapi.tech/api/people/1');

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body.result.properties.name).toBe('Luke Skywalker');
});
