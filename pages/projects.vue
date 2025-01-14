<script setup lang="ts">
import type { ProjectStoryblok } from "~/components-types-sb";
import { CustomLink } from "#components";

const sbVersion = useStoryblokVersion();

const projects = await useStoryblokProjects(sbVersion, true);
if (import.meta.dev && projects.data.value) {
  for (const [i, elem] of projects.data.value.entries()) {
    useStoryblokBridge(elem.id, (evStory) => (projects.data.value![i] = evStory));
  }
}
const projectsStories = computed(() => {
  return projects.data.value
    ?.filter((elem) => {
      return typeof elem === "object";
    })
    .map((elem) => {
      return elem.content as ProjectStoryblok;
    });
});
</script>

<template>
  <div class="container max-w-screen-xl py-20 space-y-10">
    <div class="space-y-3">
      <NuxtLink
        class="text-primary text-lg before:content-['←\00a0'] before:inline-block before:hover:motion-safe:-translate-x-2 before:motion-safe:transition-transform before:ease-in-out before:duration-300"
        to="/"
        >Corentin Hervaud</NuxtLink
      >
      <h1 class="text-4xl font-bold">All projects</h1>
    </div>
    <table class="w-full table-auto text-left">
      <thead class="sticky top-0">
        <tr class="*:p-3 text-sm whitespace-nowrap backdrop-blur">
          <th class="!pl-0">Year</th>
          <th>Project</th>
          <th>Made at</th>
          <th>Built using</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projectsStories" :key="project.id" class="border-t border-white-dark *:p-3">
          <td class="text-white-dark !pl-0">{{ project.year }}</td>
          <td class="text-white whitespace-nowrap">
            <component :is="project.link?.url ? CustomLink : 'strong'" :href="project.link?.url" target="_blank">
              {{ project.title }}
            </component>
          </td>
          <td class="text-white-dark">{{ project.company }}</td>
          <td><TagsList :tags="project.tags?.value" /></td>
          <td class="text-white-dark">{{ project.summary }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
