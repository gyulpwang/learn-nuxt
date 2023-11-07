// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },

  // Global CSS
  css: ['@/assets/css/reset.css'],
})
