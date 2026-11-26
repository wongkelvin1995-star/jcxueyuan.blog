import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://jcxueyuan.blog',
  trailingSlash: 'always',
  integrations: [preact()],
  build: {
    inlineStylesheets: 'auto',
  },
});
