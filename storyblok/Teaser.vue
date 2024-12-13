<script setup lang="ts">
import type { TeaserStoryblok } from "~/components-types-sb";
defineProps<{
  blok: TeaserStoryblok;
}>();
</script>

<template>
  <div
    v-editable="blok"
    class="flex justify-center"
  >
    <h1 class="text-7xl">{{ blok.headline }}</h1>
  </div>
</template>
