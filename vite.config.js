import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ vue(), tailwindcss(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: [ 'favicon.svg', 'robots.txt' ],
    manifest: {
      name: 'Hair Creation',
      short_name: 'HC',
      description: 'Hair creation my salooon',
      theme_color: '#ffffff',
      background_color: '#000000',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/pwa-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '511x230',
          type: 'image/png'
        }
      ]
    }
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true
  },
})
