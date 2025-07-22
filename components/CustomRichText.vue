<script setup lang="ts">
import type { StoryblokRichTextNode } from "@storyblok/vue";
import type { StoryblokRichtext } from "~/.storyblok/types/storyblok";
import CustomLink from "~/components/CustomLink.vue";

defineProps<{
  richText: StoryblokRichtext;
}>();

const resolvers = ref({
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
    return h(
      CustomLink,
      {
        to: node.attrs?.href,
        target: "_blank",
        class: "text-black dark:text-white whitespace-nowrap",
      },
      () => node.text,
    );
  },
  [MarkTypes.BOLD]: (node: StoryblokRichTextNode<VNode>) => {
    return h(
      "strong",
      {
        class: "dark:text-white text-black",
      },
      node.text,
    );
  },
});
</script>

<template>
  <div class="space-y-5 text-black-light dark:text-white-dark">
    <StoryblokRichText :doc="richText" :resolvers="resolvers" />
  </div>
</template>
