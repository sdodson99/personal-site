import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: true,
      },
    }),
    prefetch(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'slack-dark',
    },
  },
});
