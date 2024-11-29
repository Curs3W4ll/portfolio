<script setup lang="ts">
const story = await useAsyncStoryblok("home", {
  version: useRoute().query._storyblok ? "draft" : "published",
});
</script>

<template>
  <div class="align-center flex flex-col">
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
    <Button
      label="See my resume"
      size="large"
      icon="pi pi-file-pdf"
      class="mx-auto mt-8"
    />
  </div>
</template>
