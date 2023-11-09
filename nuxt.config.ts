// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },
  
  // Replace Vuex pinia
  // Divide Environment by dotenv
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