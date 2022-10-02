import { test, expect } from '@playwright/test';

test.skip('view blog post feed', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  const feedLocator = page.locator('text=Recently Published');
  await expect(feedLocator).toBeVisible();

  const postsLocator = page.locator('data-testid=BlogPostPreview');
  await expect(postsLocator).toHaveCount(3);
});
