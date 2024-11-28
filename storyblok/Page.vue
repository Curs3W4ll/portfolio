<script setup lang="ts">
import type { PageStoryblok } from "~/components-types-sb";
defineProps<{
  blok: PageStoryblok;
}>();
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="elem in blok.body"
      :key="elem._uid"
      :blok="elem"
    />
  </div>
</template>
