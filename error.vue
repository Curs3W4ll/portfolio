<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center text-white-dark">
    <div class="flex gap-3 items-center">
      <h1 class="my-3 text-xl">{{ error.statusCode }}</h1>
      <Divider class="before:!border-white self-stretch" layout="vertical" />
      <p>
        This page could not be loaded.
        <span class="hover:text-primary cursor-pointer" @click="handleError">Go back home</span>
      </p>
    </div>
  </div>
</template>
