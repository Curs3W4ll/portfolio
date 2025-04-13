<script setup lang="ts">
withDefaults(
  defineProps<{
    anchor: string;
    active?: boolean;
  }>(),
  {
    active: false,
  },
);
</script>

<template>
  <div class="flex">
    <NuxtLink
      class="flex items-center gap-3 h-5 hover:text-black dark:hover:text-white group"
      :class="[active ? 'text-black dark:text-white font-bold' : 'text-sm text-black-light dark:text-white-dark']"
      :to="`#${anchor}`"
      :data-test="`anchor-${anchor}`"
    >
      <div
        class="transition-all ease-out duration-200 group-hover:w-20 group-hover:h-0.5 group-hover:bg-black dark:group-hover:bg-white"
        :class="[active ? 'bg-black dark:bg-white w-20 h-0.5' : 'bg-black-light dark:bg-white-dark w-10 h-px']"
      />
      {{ $t(`anchors.${anchor}`) }}</NuxtLink
    >
    <div class="grow" />
  </div>
</template>
