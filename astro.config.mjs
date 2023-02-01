import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seandodson.com',
  integrations: [tailwind(), prefetch(), robotsTxt(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'slack-dark',
    },
  },
});
