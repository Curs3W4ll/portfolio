<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <span class="sr-only">{{ title }}</span>
  <div
    class="size-6 aspect-square content-center fill-black-light dark:fill-white-dark hover:fill-black hover:dark:fill-white"
    :title="title"
    v-html="icon"
  />
</template>
