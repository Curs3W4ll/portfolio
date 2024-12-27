<script setup lang="ts">
import { useFlag } from "@unleash/proxy-client-vue";

const focusedExperience = ref<string | undefined>(undefined);

const sbVersion = useStoryblokVersion();

const profileStory = await useAsyncStoryblok("profile", {
  version: sbVersion,
});
const aboutStory = await useAsyncStoryblok("about", {
  version: sbVersion,
});
const experiences = await useStoryblokExperiences(sbVersion);
const experienceStories = computed(() => {
  return experiences.data.value?.filter((elem) => {
    return typeof elem === "object";
  });
});

const displayResumeButton = useFlag("display-resume");
</script>

<template>
  <div class="gap-24 px-10 *:pt-28 max-w-screen-xl lg:flex lg:justify-between lg:items-start min-h-screen xl:container">
    <StoryblokComponent
      v-if="profileStory"
      class="lg:sticky lg:top-0 lg:pb-28 lg:h-screen"
      :blok="profileStory.content"
      data-test="profile-section"
    />
    <div class="pb-28 flex flex-col gap-32">
      <StoryblokComponent v-if="aboutStory" id="about" :blok="aboutStory.content" />
      <div v-if="experienceStories" id="experience" class="flex flex-col gap-5">
        <StoryblokComponent
          v-for="experience in experienceStories"
          :key="experience.uuid"
          :blok="experience.content"
          :fade="focusedExperience && focusedExperience !== experience.uuid"
          @mouseover="focusedExperience = experience.uuid"
          @mouseleave="focusedExperience = undefined"
        />
        <CustomLink v-if="displayResumeButton" class="pl-5 capitalize" href="/resume.pdf" target="_blank"
          >See full résumé</CustomLink
        >
      </div>
    </div>
  </div>
</template>
