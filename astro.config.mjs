import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kevinparadisiai.github.io',
  base: '/Siteweb',
  outDir: './docs',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    assets: 'assets',
  },
});
