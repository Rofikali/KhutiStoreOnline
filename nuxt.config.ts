// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    // baseURL: '/<your-repository-name>/', // Replace <your-repository-name> with your GitHub repository name
    // baseURL: '/git@github.com:Rofikali/KhutiStoreOnline.git/', // Replace <your-repository-name> with your GitHub repository name
    baseURL: '/KhutiStoreOnline/', // Replace <your-repository-name> with your GitHub repository name
  },
  nitro: {
    preset: 'static', // Enables static site generation
  },
});
