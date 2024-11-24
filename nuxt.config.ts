export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {
      sentryDSN: "",
      mode: "development",
    },
  },
  css: ["@/assets/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/test-utils/module", "@sentry/nuxt/module"],
  eslint: {
    checker: true,
  },
  devServer: {
    port: 4173,
  },
  typescript: {
    typeCheck: true,
  },
  sourcemap: {
    client: true,
  },
});
