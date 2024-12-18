<script setup lang="ts">
import type { ProfileStoryblok } from "~/components-types-sb";

defineProps<{
  blok: ProfileStoryblok;
}>();
</script>

<template>
  <div v-editable="blok" class="flex flex-col justify-between h-full" data-test="profile">
    <div class="space-y-3">
      <NuxtLink to="/">
        <h1 class="text-4xl sm:text-5xl font-extrabold shrink-0 whitespace-nowrap">{{ blok.name }}</h1>
      </NuxtLink>
      <h2 class="text-xl sm:text-2xl font-bold">{{ blok.job }}</h2>
      <h3>{{ blok.description }}</h3>
    </div>
    <div class="flex gap-5 pt-3">
      <NuxtLink v-for="link in blok.links" :key="link._uid" :to="link.url.url" target="_blank" data-test="social-link">
        <SvgIcon :icon="link.icon" :title="link.name" />
      </NuxtLink>
    </div>
  </div>
</template>
