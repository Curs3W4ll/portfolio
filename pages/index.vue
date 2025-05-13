<script setup lang="ts">
import { useFlag } from "@unleash/proxy-client-vue";

const focusedExperience = ref<string | undefined>(undefined);
const displayResumeButton = ref<boolean>(false);
const displayProjectsArchiveButton = ref<boolean>(false);

const sbVersion = useStoryblokVersion();
const { locale } = useI18n();

const profileStory = await useStoryblokStory("profile", sbVersion, locale.value);
const aboutStory = await useStoryblokStory("about", sbVersion, locale.value);
const projectsPreviewStory = await useStoryblokStory(
  "projects-preview",
  sbVersion,
  locale.value,
  "projects-preview.projects",
);
const experiencesStories = await useStoryblokStories("experiences", sbVersion, locale.value, "content.startDate:desc");

const resumeFile = computed(() => {
  switch (locale.value) {
    case "fr":
      return "/fr/cv.pdf";
    case "en":
    default:
      return "/resume.pdf";
  }
});

onMounted(() => {
  const displayResumeButtonFlag = useFlag("display-resume");
  const displayProjectsArchiveButtonFlag = useFlag("display-projects-archive");

  syncRef(displayResumeButton, displayResumeButtonFlag, { direction: "rtl" });
  syncRef(displayProjectsArchiveButton, displayProjectsArchiveButtonFlag, { direction: "rtl" });
});
</script>

<template>
  <div
    class="gap-24 px-10 *:pt-28 max-w-(--breakpoint-xl) lg:flex lg:justify-between lg:items-start min-h-screen xl:container"
  >
    <StoryblokComponent
      v-if="profileStory"
      class="lg:sticky lg:top-0 lg:pb-28 lg:h-screen"
      :blok="profileStory.content"
    />
    <div class="pb-28 flex flex-col gap-32">
      <StoryblokComponent v-if="aboutStory" id="about" :blok="aboutStory.content" />
      <div v-if="experiencesStories" id="experience" class="flex flex-col gap-5">
        <StoryblokComponent
          v-for="experience in experiencesStories"
          :key="experience.uuid"
          :blok="experience.content"
          :fade="focusedExperience && focusedExperience !== experience.uuid"
          @mouseover="focusedExperience = experience.uuid"
          @mouseleave="focusedExperience = undefined"
        />
        <CustomLink v-if="displayResumeButton" class="pl-5 capitalize" :to="resumeFile" target="_blank">{{
          $t("seeResume")
        }}</CustomLink>
      </div>
      <div v-if="projectsPreviewStory" id="projects" class="flex flex-col gap-5">
        <StoryblokComponent :blok="projectsPreviewStory.content" />
        <CustomLink
          v-if="displayProjectsArchiveButton"
          class="pl-5 capitalize"
          to="/projects"
          data-test="projects-archive-button"
          >{{ $t("seeProjectsArchive") }}</CustomLink
        >
      </div>
    </div>
  </div>
</template>
