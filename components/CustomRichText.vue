<script setup lang="ts">
import type { StoryblokRichTextNode } from "@storyblok/vue";
import type { RichtextStoryblok } from "~/components-types-sb";
import CustomLink from "~/components/CustomLink.vue";

defineProps<{
  richText: RichtextStoryblok;
}>();

const resolvers = ref({
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
    console.log("link");
    console.log(node);
    return h(
      CustomLink,
      {
        href: node.attrs?.href,
        target: "_blank",
        class: "text-white whitespace-nowrap",
      },
      () => node.text,
    );
  },
  [MarkTypes.BOLD]: (node: StoryblokRichTextNode<VNode>) => {
    console.log("bold");
    console.log(node);
    return h(
      "strong",
      {
        class: "text-white",
      },
      node.text,
    );
  },
});
</script>

<template>
  <StoryblokRichText class="space-y-5 text-white-dark" :doc="richText" :resolvers="resolvers" />
</template>
