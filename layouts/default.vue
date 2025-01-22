<script setup lang="ts">
const head = useLocaleHead();
const config = useConfig();
</script>

<template>
  <Html :dir="head.htmlAttrs?.dir" :lang="head.htmlAttrs?.lang">
    <Head>
      <Link rel="shortcut icon" href="/favicon.ico" />
      <Link rel="manifest" href="/site.webmanifest" />
      <template v-for="link in head.link" :key="link.hid">
        <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <Meta :content="config.seo.description" name="description" />
      <Meta :content="config.seo.name" property="og:title" />
      <Meta :content="config.seo.description" property="og:description" />
      <Meta :content="config.seo.name" name="twitter:title" />
      <Meta :content="config.seo.description" name="twitter:description" />
      <Meta :content="config.seo.url" name="twitter:site" />
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
