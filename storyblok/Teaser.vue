<script setup lang="ts">
import type { TeaserStoryblok } from "~/components-types-sb";
defineProps<{
  blok: TeaserStoryblok;
}>();
</script>

<template>
  <div v-editable="blok">
    <h1>{{ blok.headline }}</h1>
  </div>
</template>
