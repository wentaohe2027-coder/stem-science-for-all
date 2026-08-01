// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // CHANGE THIS to your real domain once you buy one.
  site: 'https://stemscienceforall.org',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
