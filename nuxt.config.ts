// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Shopping',
      htmlAttrs: {
        lang: 'en',
      },
      // Meta Tag
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  
  // Replace Vuex to Pinia
  modules: ['@pinia/nuxt'],

  // Global CSS
  css: ['@/assets/css/reset.css'],

  // Global Config
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000',
      env: {
        nodeEnv: process.env.NODE_ENV,
        envName: process.env.ENV_NAME,
      }
    }
  }
})