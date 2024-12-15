<script setup lang="ts">
const sbVersion = useStoryblokVersion();

const profileStory = await useAsyncStoryblok("profile", {
  version: sbVersion,
});
const aboutStory = await useAsyncStoryblok("about", {
  version: sbVersion,
});
</script>

<template>
  <div class="mx-36 my-28 flex justify-between gap-32">
    <StoryblokComponent v-if="profileStory" class="shrink-0" :blok="profileStory.content" />
    <StoryblokComponent v-if="aboutStory" :blok="aboutStory.content" />
  </div>
</template>
