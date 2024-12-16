<script setup lang="ts">
import type { ProfileStoryblok } from "~/components-types-sb";

defineProps<{
  blok: ProfileStoryblok;
}>();
</script>

<template>
  <div v-editable="blok" class="space-y-3">
    <template v-if="blok">
      <h1 class="text-5xl font-extrabold shrink-0 whitespace-nowrap">{{ blok.name }}</h1>
      <h2 class="text-2xl font-bold">{{ blok.job }}</h2>
      <h3>{{ blok.description }}</h3>
    </template>
  </div>
</template>
