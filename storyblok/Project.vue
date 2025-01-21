<script setup lang="ts">
import type { ProjectStoryblok } from "~/components-types-sb";
import { CustomLink } from "#components";

withDefaults(
  defineProps<{
    blok: ProjectStoryblok;
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
    class="flex flex-col-reverse md:flex-row items-start gap-3 p-5 rounded-lg text-black-ligh dark:text-white-dark hover:bg-black/5 hover:dark:bg-white/5"
    :class="{ 'opacity-50': fade }"
    data-test="project"
  >
    <div class="md:w-1/4 text-sm uppercase flex-shrink-0 p-2">
      <NuxtImg
        v-if="blok.previewImage"
        class="border-black-light dark:border-white-dark border rounded"
        :src="blok.previewImage.filename ?? undefined"
        :alt="blok.previewImage.alt ?? ''"
        format="webp"
        quality="1"
        provider="storyblok"
        placeholder
      />
    </div>
    <div class="flex flex-col gap-1 text-black dark:text-white">
      <component :is="blok.link?.url ? CustomLink : 'strong'" class="font-bold" :to="blok.link?.url" target="_blank">
        {{ blok.title }}
      </component>
      <div class="text-sm text-black-light dark:text-white-dark whitespace-pre-line">
        {{ blok.description }}
      </div>
      <TagsList :tags="blok.tags?.value" />
    </div>
  </div>
</template>
