// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://kametora-lab.github.io',
  base: '/amamikusabana_2',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});