import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prerender from 'vite-plugin-prerender'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/items', '/weapons'],
    }),
    sitemap({
      hostname: 'https://spix-rayt.github.io/arc-raiders-kettle',
      basePath: '/arc-raiders-kettle',
      outDir: 'dist',
      dynamicRoutes: ['/', '/items', '/weapons']
    })
  ],
  base: "/arc-raiders-kettle/",
  server: {
    port: 5173,
    strictPort: true
  }
})
