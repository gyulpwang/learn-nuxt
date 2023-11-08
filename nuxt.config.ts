// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },
  
  // Replace Vuex pinia
  modules: ['@pinia/nuxt'],

  // Global CSS
  css: ['@/assets/css/reset.css'],
})
