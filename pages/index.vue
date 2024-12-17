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
  <div class="lg:flex justify-between items-start gap-24 px-10 *:pt-28 lg:*:pb-28 max-w-screen-xl xl:container">
    <StoryblokComponent v-if="profileStory" class="lg:sticky lg:top-0" :blok="profileStory.content" />
    <StoryblokComponent v-if="aboutStory" :blok="aboutStory.content" />
  </div>
</template>
