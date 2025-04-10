import removeAttr from "remove-attr";

export default defineNuxtConfig({
  ssr: process.env.NUXT_CONFIG_SSR == "true" ? true : process.env.NUXT_CONFIG_SSR === "false" ? false : undefined,
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
      baseUrl: process.env.NUXT_BASE_URL || "https://hervaud.fr",
      storyblokVersion: process.env.NUXT_STORYBLOK_VERSION || "published",
      unleashProxyUrl: process.env.NUXT_UNLEASH_PROXY_URL,
      unleashProxySecret: process.env.NUXT_UNLEASH_PROXY_CLIENT_KEY,
    },
  },
  app: {
    head: {
      templateParams: {
        separator: "-",
      },
    },
  },
  css: ["~/assets/scss/main.scss"],
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
    "@nuxt/fonts",
    "nuxt-time",
    "nuxt-anchorscroll",
    "@vueuse/nuxt",
    "@nuxt/image",
    "v-gsap-nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "nuxt-seo-utils",
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
  vite: {
    plugins: [
      removeAttr({
        extensions: ["vue"],
        attributes: [process.env.NUXT_KEEP_DATA_TEST_ATTRIBUTES === "true" ? "data-nothing" : "data-test"],
      }),
    ],
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
      from: "~/themes/custom.ts",
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
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
  site: {
    url: "https://hervaud.fr",
    name: "Corentin Hervaud",
  },
  sitemap: {
    urls: [
      {
        loc: "/resume.pdf",
        _sitemap: "en",
      },
      {
        loc: "/fr/cv.pdf",
        _sitemap: "fr",
      },
    ],
  },
  i18n: {
    locales: [
      {
        code: "en",
        language: "en",
        file: "en-US.ts",
      },
      {
        code: "fr",
        language: "fr",
        file: "fr-FR.ts",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
      fallbackLocale: "en",
    },
    baseUrl: process.env.NUXT_BASE_URL,
    lazy: true,
  },
  colorMode: {
    fallback: "dark",
    classSuffix: "",
    storage: "cookie",
  },
  seo: {
    fallbackTitle: false,
  },
  sourcemap: {
    client: "hidden",
  },
  compatibilityDate: "2024-12-19",
});
