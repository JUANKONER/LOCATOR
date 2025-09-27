import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/tailwindcss', {
      configPath: 'tailwind.config.ts',
      viewer: false
    }],
    '@pinia/nuxt',
    '@nuxt/image'
  ],
  css: ['~/assets/css/tailwind.css','leaflet/dist/leaflet.css'],
  devtools: { enabled: true },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET
  },
  vite: {
    optimizeDeps: {
      include: ['leaflet']
    }
  },
    nitro: {
    compatibilityDate: '2025-05-19'
  }
  ,typescript: {
    strict: true,
    typeCheck: true
  },
  imports: {
     dirs: ['stores', 'composables'],
    autoImport: true
  }}
)
