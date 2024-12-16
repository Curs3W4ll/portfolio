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
  <div class="flex justify-between items-start px-10 *:py-28 gap-32 xl:container">
    <StoryblokComponent v-if="profileStory" class="shrink-0 sticky top-0" :blok="profileStory.content" />
    <StoryblokComponent v-if="aboutStory" class="" :blok="aboutStory.content" />
  </div>
</template>
