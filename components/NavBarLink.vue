<script setup lang="ts">
withDefaults(
  defineProps<{
    anchor: string;
    active: boolean;
  }>(),
  {
    active: false,
  },
);
</script>

<template>
  <div class="flex items-center gap-3 h-5">
    <div
      class="transition-all ease-out duration-200"
      :class="[active ? 'bg-white w-20 h-0.5' : 'bg-white-dark w-10 h-px']"
    />
    <NuxtLink :class="[active ? 'text-white font-bold' : 'text-sm text-white-dark']" :href="`#${anchor}`">{{
      anchor
    }}</NuxtLink>
  </div>
</template>
