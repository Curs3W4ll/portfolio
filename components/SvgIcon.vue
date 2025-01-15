<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <span class="sr-only">{{ title }}</span>
  <div v-html="icon" class="size-6 aspect-square content-center fill-white-dark hover:fill-white" :title="title" />
</template>
