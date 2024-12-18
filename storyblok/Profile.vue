<script setup lang="ts">
import type { ProfileStoryblok } from "~/components-types-sb";

defineProps<{
  blok: ProfileStoryblok;
}>();
</script>

<template>
  <div v-editable="blok" class="space-y-3" data-test="profile">
    <NuxtLink to="/">
      <h1 class="text-4xl sm:text-5xl font-extrabold shrink-0 whitespace-nowrap">{{ blok.name }}</h1>
    </NuxtLink>
    <h2 class="text-xl sm:text-2xl font-bold">{{ blok.job }}</h2>
    <h3>{{ blok.description }}</h3>
  </div>
</template>
