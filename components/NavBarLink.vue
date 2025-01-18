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
  <div class="flex">
    <NuxtLink
      class="flex items-center gap-3 h-5 hover:text-white group"
      :class="[active ? 'text-white font-bold' : 'text-sm text-white-dark']"
      :href="`#${anchor}`"
      :data-test="`anchor-${anchor}`"
    >
      <div
        class="transition-all ease-out duration-200 group-hover:w-20 group-hover:h-0.5 group-hover:bg-white"
        :class="[active ? 'bg-white w-20 h-0.5' : 'bg-white-dark w-10 h-px']"
      />
      {{ $t(`anchors.${anchor}`) }}</NuxtLink
    >
    <div class="grow" />
  </div>
</template>
