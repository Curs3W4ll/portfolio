<script setup lang="ts">
import type { About } from "~/.storyblok/types/314995/storyblok-components";

defineProps<{
  blok: About;
}>();
</script>

<template>
  <div v-editable="blok" data-test="about">
    <CustomRichText :rich-text="blok.description" />
  </div>
</template>
