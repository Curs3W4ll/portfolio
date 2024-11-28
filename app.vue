<script setup lang="ts">
useHead({
  link: [
    { rel: "canonical", href: "https://hervaud.fr" },
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
});
useSeoMeta({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - Corentin Hervaud` : "Corentin Hervaud",
  description: config.seo.description,
  ogLocale: config.seo.locale,
  // ogLocaleAlternate: ["fr_FR"], TODO: When adding optional supported locale
  ogSiteName: config.seo.name,
  // @ts-expect-error Because cannot infer type
  ogType: config.seo.type,
  twitterCard: "summary_large_image",
  twitterSite: config.seo.url,
  ogTitle: config.seo.name,
  ogDescription: config.seo.description,
  ogUrl: config.seo.url,
  ogImage: config.seo.image,
  twitterTitle: config.seo.name,
  twitterDescription: config.seo.description,
  twitterImage: config.seo.image,
  msapplicationTileColor: config.seo.color,
  msapplicationTileImage: config.seo.image,
  themeColor: config.seo.color,
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
