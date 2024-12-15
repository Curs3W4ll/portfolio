<script setup lang="ts">
import type { StoryblokRichTextNode } from "@storyblok/vue";
import type { RichtextStoryblok } from "~/components-types-sb";
import CustomLink from "~/components/CustomLink.vue";

defineProps<{
  richText: RichtextStoryblok;
}>();

const resolvers = ref({
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) =>
    h(
      CustomLink,
      {
        href: node.attrs?.href,
        target: "_blank",
      },
      () => node.text,
    ),
});
</script>

<template>
  <StoryblokRichText class="space-y-5" :doc="richText" :resolvers="resolvers" />
</template>
