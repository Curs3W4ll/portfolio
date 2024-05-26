export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/main.css"],
  modules: ["@nuxt/eslint"],
  eslint: {
    checker: true,
  },
});
