<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

defineProps<NuxtLinkProps>();
</script>

<template>
  <NuxtLinkLocale
    v-bind="$props"
    class="font-bold hover:text-primary-600 hover:dark:text-primary after:content-['↗\00a0'] after:inline-block after:hover:motion-safe:scale-110 after:hover:motion-safe:-translate-y-1 after:hover:motion-safe:translate-x-0.5 after:motion-safe:transition-transform after:ease-in-out after:duration-300"
  >
    <slot />
  </NuxtLinkLocale>
</template>
