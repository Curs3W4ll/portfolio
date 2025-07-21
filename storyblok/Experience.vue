<script setup lang="ts">
import type { Experience } from "~/.storyblok/types/314995/storyblok-components";
import { CustomLink } from "#components";

withDefaults(
  defineProps<{
    blok: Experience;
    fade?: boolean;
  }>(),
  {
    fade: false,
  },
);
</script>

<template>
  <div
    v-editable="blok"
    class="flex flex-col md:flex-row items-baseline gap-3 p-5 rounded-lg text-black-light dark:text-white-dark hover:bg-black/5 dark:hover:bg-white/5"
    :class="{ 'opacity-50': fade }"
    data-test="experience"
  >
    <div class="md:w-1/4 text-sm uppercase shrink-0">
      <DateExperience :start-date="blok.startDate" :end-date="blok.endDate" />
    </div>
    <div class="flex flex-col gap-1 text-black dark:text-white">
      <component :is="blok.link?.url ? CustomLink : 'strong'" class="font-bold" :to="blok.link?.url" target="_blank">
        {{ blok.title }} · {{ blok.company }}
      </component>
      <div class="text-sm text-black-light dark:text-white-dark whitespace-pre-line">
        {{ blok.role }}
      </div>
      <TagsList :tags="blok.tags?.value" />
    </div>
  </div>
</template>
