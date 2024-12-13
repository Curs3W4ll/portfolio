<script setup lang="ts">
const story = await useAsyncStoryblok("home", {
  version: useRoute().query._storyblok ? "draft" : "published",
});
</script>

<template>
  <div class="align-center mt-10 flex flex-col">
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
    <Button
      label="See my resume"
      size="large"
      icon="pi pi-file-pdf"
      class="mx-auto mt-8"
      as="a"
      href="/resume.pdf"
      target="_blank"
      no-rel
    />
  </div>
</template>
