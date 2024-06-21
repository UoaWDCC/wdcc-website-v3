import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://wdcc.co.nz',
  outDir: './dist',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: 'static',
  adapter: netlify(),
  image: {
    domains: ['wdcc-website.fly.storage.tigris.dev']
  }
});