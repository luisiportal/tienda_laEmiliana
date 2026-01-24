import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.tiendalaemiliana.com',
  output:'server',
  adapter: node({
    mode: 'standalone',
  }),
  
  integrations: [react(),sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
