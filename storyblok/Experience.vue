<script setup lang="ts">
import type { ExperienceStoryblok } from "~/components-types-sb";
import { CustomLink } from "#components";

withDefaults(
  defineProps<{
    blok: ExperienceStoryblok;
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
    class="flex items-baseline gap-3 p-5 rounded-lg text-white-dark hover:bg-white/5 peer peer-hover:opacity-50"
    :class="{ 'opacity-50': fade }"
  >
    <div class="w-1/4 text-sm uppercase flex-shrink-0">
      <DateExperience :start-date="blok.startDate" :end-date="blok.endDate" />
    </div>
    <div class="flex flex-col gap-1 text-white">
      <component :is="blok.link?.url ? CustomLink : 'strong'" class="font-bold" :href="blok.link?.url" target="_blank">
        {{ blok.title }} · {{ blok.company }}
      </component>
      <div class="text-sm text-white-dark whitespace-pre-line">
        {{ blok.role }}
      </div>
      <div class="pt-2 flex flex-wrap gap-2">
        <Tag v-for="tag in blok.tags.value" :key="tag" :value="tag" rounded />
      </div>
    </div>
  </div>
</template>
