<script setup lang="ts">
const story = await useAsyncStoryblok("home", {
  version: useRoute().query._storyblok ? "draft" : "published",
});
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>
