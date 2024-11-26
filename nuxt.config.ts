export default defineNuxtConfig({
  ssr: false,
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
      version: process.env.NUXT_PUBLIC_VERSION || "development",
    },
  },
  css: ["@/assets/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@sentry/nuxt/module",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
  ],
  eslint: {
    checker: true,
  },
  devServer: {
    port: 4173,
  },
  typescript: {
    typeCheck: true,
  },
  sentry: {
    sourceMapsUploadOptions: {
      org: "hvconnect",
      project: "portfolio",
      authToken: process.env.NUXT_SENTRY_AUTH_TOKEN,
    },
    unstable_sentryBundlerPluginOptions: {
      release: {
        name: process.env.NUXT_SENTRY_RELEASE,
      },
    },
  },
  primevue: {
    importTheme: {
      from: "@/themes/custom.ts",
    },
    options: {
      ripple: true,
    },
  },
  sourcemap: {
    client: true,
  },
});
