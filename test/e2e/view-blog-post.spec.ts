import { test, expect } from '@playwright/test';

test.skip('view blog post', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const firstBlogPostReadMoreButton = page.locator('text=Read more').first();
  await firstBlogPostReadMoreButton.click();

  const blogPostLocator = page.locator('text=Post 3').first();
  await expect(blogPostLocator).toBeVisible();

  const backToFeedButton = page.locator('text=Back to recent posts');
  await backToFeedButton.click();

  const feedHeaderLocator = page.locator('text=Recently Published');
  await expect(feedHeaderLocator).toBeVisible();
});
