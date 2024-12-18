<script setup lang="ts">
import type { AboutStoryblok } from "~/components-types-sb";

defineProps<{
  blok: AboutStoryblok;
}>();
</script>

<template>
  <div v-editable="blok" data-test="about">
    <CustomRichText :rich-text="blok.description" />
  </div>
</template>
