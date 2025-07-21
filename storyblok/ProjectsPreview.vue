<script setup lang="ts">
import type { ProjectsPreview } from "~/.storyblok/types/314995/storyblok-components";

const props = defineProps<{
  blok: ProjectsPreview;
}>();

const focusedProject = ref<string | undefined>(undefined);

const projects = computed(() => {
  return props.blok.projects.filter((elem) => {
    return typeof elem === "object";
  });
});
</script>

<template>
  <Project
    v-for="project in projects"
    :key="project.id"
    :blok="project.content"
    :fade="focusedProject !== undefined && focusedProject !== project.uuid"
    @mouseover="focusedProject = project.uuid"
    @mouseleave="focusedProject = undefined"
  />
</template>
