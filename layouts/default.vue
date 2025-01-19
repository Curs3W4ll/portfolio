<script setup lang="ts">
const route = useRoute();
const head = useLocaleHead();
const config = useConfig();

const title = computed(() => (route.meta.title ? `${route.meta.title} - ${config.seo.name}` : config.seo.name));
</script>

<template>
  <Html :dir="head.htmlAttrs?.dir" :lang="head.htmlAttrs?.lang">
    <Head>
      <Title>{{ title }}</Title>
      <Link :href="config.seo.url" rel="canonical" />
      <Link rel="icon" type="image/type" sizes="512x512" href="/favicon/favicon-512x512.png" />
      <Link rel="icon" type="image/type" sizes="192x192" href="/favicon/favicon-192x192.png" />
      <Link rel="icon" type="image/type" sizes="96x96" href="/favicon/favicon-96x96.png" />
      <Link rel="icon" type="image/type" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <Link rel="icon" type="image/type" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <Link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <Link rel="shortcut icon" href="/favicon/favicon.ico" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <Link rel="manifest" href="/favicon/site.webmanifest" />
      <template v-for="link in head.link" :key="link.hid">
        <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta :content="config.seo.description" name="description" />
      <Meta :content="config.seo.name" property="og:title" />
      <Meta :content="config.seo.description" property="og:description" />
      <Meta :content="config.seo.url" property="og:url" />
      <Meta :content="config.seo.image" property="og:image" />
      <Meta :content="config.seo.name" property="og:site_name" />
      <Meta :content="config.seo.type" property="og:type" />
      <Meta :content="config.seo.name" name="twitter:title" />
      <Meta :content="config.seo.description" name="twitter:description" />
      <Meta :content="config.seo.url" name="twitter:site" />
      <Meta :content="config.seo.image" name="twitter:image" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta :content="config.seo.color" name="msapplication-TileColor" />
      <Meta :content="config.seo.image" name="msapplication-TileImage" />
      <Meta :content="config.seo.color" name="theme-color" />
      <template v-for="meta in head.meta" :key="meta.hid">
        <Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <slot />
    </Body>
  </Html>
</template>
