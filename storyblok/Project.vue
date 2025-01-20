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
    class="flex items-start gap-3 p-5 rounded-lg text-white-dark hover:bg-white/5 peer peer-hover:opacity-50"
    :class="{ 'opacity-50': fade }"
    data-test="project"
  >
    <div class="w-1/4 text-sm uppercase flex-shrink-0 p-2">
      <NuxtImg
        v-if="blok.previewImage"
        class="border-white-dark border rounded"
        :src="blok.previewImage.filename ?? undefined"
        :alt="blok.previewImage.alt ?? ''"
        format="webp"
        quality="1"
        provider="storyblok"
        placeholder
      />
    </div>
    <div class="flex flex-col gap-1 text-white">
      <component :is="blok.link?.url ? CustomLink : 'strong'" class="font-bold" :to="blok.link?.url" target="_blank">
        {{ blok.title }}
      </component>
      <div class="text-sm text-white-dark whitespace-pre-line">
        {{ blok.description }}
      </div>
      <TagsList :tags="blok.tags?.value" />
    </div>
  </div>
</template>
