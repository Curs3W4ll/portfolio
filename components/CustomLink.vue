<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<NuxtLinkProps>();
</script>

<template>
  <NuxtLinkLocale
    v-bind="$props"
    class="font-bold hover:text-primary-600 dark:hover:text-primary after:content-['↗\00a0'] after:inline-block motion-safe:hover:after:scale-110 motion-safe:hover:after:-translate-y-1 motion-safe:hover:after:translate-x-0.5 motion-safe:after:transition-transform after:ease-in-out after:duration-300"
  >
    <slot />
  </NuxtLinkLocale>
</template>
