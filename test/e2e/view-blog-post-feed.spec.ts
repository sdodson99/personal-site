import { test, expect } from '@playwright/test';

test('view blog post feed', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const feedLocator = page.locator('text=Latest Blog Posts');
  await expect(feedLocator).toBeVisible();

  const postsLocator = page.locator('data-testid=BlogPostPreview');
  await expect(postsLocator).toHaveCount(3);

  await expect(page).toHaveScreenshot('blog-post-feed.png', {
    fullPage: true,
  });
});
