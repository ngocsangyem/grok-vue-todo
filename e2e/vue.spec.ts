import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('should delete a todo', async ({ page }) => {
  await page.goto('http://localhost:5173');

  //   // Add a todo
  //   await page.fill('input[placeholder="Add a new todo"]', 'Delete me');
  //   await page.click('button:text("Add")');

  //   // Delete it
  //   await page.click('button:text("Delete")');

  //   // Check if it’s gone
  //   const todos = await page.$$('li');
  //   expect(todos.length).toBe(0);
});
