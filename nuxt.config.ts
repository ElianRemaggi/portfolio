// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  modules: [
    'lenis/nuxt'
  ],
  nitro: {
    preset: 'static' 
  },
  app: {
    baseURL: './',
    buildAssetsDir: '_nuxt'
  },
  css: ['@/app/assets/css/main.css'],
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  srcDir: './'
})
