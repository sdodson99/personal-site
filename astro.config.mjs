import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import prefetch from '@astrojs/prefetch';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seandodson.com',
  integrations: [tailwind(), partytown(), prefetch(), robotsTxt(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'slack-dark',
    },
  },
});
