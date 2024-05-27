export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/test-utils/module"],
  eslint: {
    checker: true,
  },
  devServer: {
    port: 4173,
  },
});
