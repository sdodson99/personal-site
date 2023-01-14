import { test, expect } from '@playwright/test';

test('view blog post', async ({ page }) => {
  await page.goto('/');

  const firstBlogPostReadMoreButton = page.locator('text=Read more').first();
  await firstBlogPostReadMoreButton.click();

  const blogPostLocator = page.locator('text=Post 3');
  await expect(blogPostLocator).toBeVisible();

  await expect(page).toHaveScreenshot('blog-post.png', {
    fullPage: true,
  });

  const backToFeedButton = page.locator('text=Back to recent posts');
  await backToFeedButton.click();

  const feedHeaderLocator = page.locator('text=Latest Blog Posts');
  await expect(feedHeaderLocator).toBeVisible();
});
