<script setup lang="ts">
import { useFlag } from "@unleash/proxy-client-vue";

const focusedExperience = ref<string | undefined>(undefined);
const focusedProject = ref<string | undefined>(undefined);

const sbVersion = useStoryblokVersion();

const profileStory = await useAsyncStoryblok("profile", {
  version: sbVersion,
});
const aboutStory = await useAsyncStoryblok("about", {
  version: sbVersion,
});
const experiences = await useStoryblokExperiences(sbVersion);
if (import.meta.dev && experiences.data.value) {
  for (const [i, elem] of experiences.data.value.entries()) {
    useStoryblokBridge(elem.id, (evStory) => (experiences.data.value![i] = evStory));
  }
}
const experienceStories = computed(() => {
  return experiences.data.value?.filter((elem) => {
    return typeof elem === "object";
  });
});
const projects = await useStoryblokProjects(sbVersion, true);
if (import.meta.dev && projects.data.value) {
  for (const [i, elem] of projects.data.value.entries()) {
    useStoryblokBridge(elem.id, (evStory) => (projects.data.value![i] = evStory));
  }
}
const projectsStories = computed(() => {
  return projects.data.value?.filter((elem) => {
    return typeof elem === "object";
  });
});

const displayResumeButton = useFlag("display-resume");
const displaySeeProjectArchiveButton = useFlag("display-projects-archive");
</script>

<template>
  <div class="gap-24 px-10 *:pt-28 max-w-screen-xl lg:flex lg:justify-between lg:items-start min-h-screen xl:container">
    <StoryblokComponent
      v-if="profileStory"
      class="lg:sticky lg:top-0 lg:pb-28 lg:h-screen"
      :blok="profileStory.content"
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
      <div v-if="projectsStories" id="projects" class="flex flex-col gap-5">
        <StoryblokComponent
          v-for="project in projectsStories"
          :key="project.uuid"
          :blok="project.content"
          :fade="focusedProject && focusedProject !== project.uuid"
          @mouseover="focusedProject = project.uuid"
          @mouseleave="focusedProject = undefined"
        />
        <CustomLink v-if="displaySeeProjectArchiveButton" class="pl-5 capitalize" href="/projects"
          >Projects archive</CustomLink
        >
      </div>
    </div>
  </div>
</template>
