const config = {
  seo: {
    name: "Corentin Hervaud",
    description:
      "Corentin Hervaud is a software developer specializing in creating innovative and modern websites and software using the latest technologies.",
    image: "https://hervaud.fr/og.png",
    locale: "en_US",
    type: "website",
    url: "https://hervaud.fr",
    color: "#C980E6",
  },
};

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: `%s - ${config.seo.name}`,
      link: [
        { rel: "canonical", href: config.seo.url },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon/favicon-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/favicon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: config.seo.description },
        { property: "og:title", content: config.seo.name },
        { property: "og:description", content: config.seo.description },
        { property: "og:url", content: config.seo.url },
        { property: "og:image", content: config.seo.image },
        { property: "og:site_name", content: config.seo.name },
        { property: "og:type", content: config.seo.type },
        { property: "og:locale", content: config.seo.locale },
        { name: "twitter:title", content: config.seo.name },
        { name: "twitter:description", content: config.seo.description },
        { name: "twitter:site", content: config.seo.url },
        { name: "twitter:image", content: config.seo.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "msapplication-TileColor", content: config.seo.color },
        { name: "msapplication-TileImage", content: config.seo.image },
        { name: "theme-color", content: config.seo.color },
      ],
    },
  },
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
      storyblokVersion: process.env.NUXT_STORYBLOK_VERSION || "published",
    },
  },
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
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
  site: {
    url: "https://hervaud.fr",
    name: "Corentin Hervaud",
  },
  sitemap: {
    urls: [
      {
        loc: "/resume.pdf",
      },
    ],
  },
  sourcemap: {
    client: true,
  },
});
