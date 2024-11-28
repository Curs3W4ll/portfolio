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
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@sentry/nuxt/module",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "nuxt-gtag",
    "@storyblok/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
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
  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN,
    bridge: true,
    devtools: true,
  },
  site: {
    url: "https://hervaud.fr",
    name: "Corentin Hervaud",
  },
  sourcemap: {
    client: true,
  },
});
