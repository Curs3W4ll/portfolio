<script setup lang="ts">
import type { ProjectsPreviewStoryblok } from "~/components-types-sb";

const props = defineProps<{
  blok: ProjectsPreviewStoryblok;
}>();

const focusedProject = ref<string | undefined>(undefined);

const projects = computed(() => {
  return props.blok.projects.filter((elem) => {
    return typeof elem === "object";
  });
});
</script>

<template>
  <StoryblokComponent
    v-for="project in projects"
    :key="project.id"
    :blok="project.content"
    :fade="focusedProject && focusedProject !== project.uuid"
    @mouseover="focusedProject = project.uuid"
    @mouseleave="focusedProject = undefined"
  />
</template>
