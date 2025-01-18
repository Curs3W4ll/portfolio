<script setup lang="ts">
import type { ProjectStoryblok } from "~/components-types-sb";
import { CustomLink } from "#components";

defineI18nRoute({
  paths: {
    en: "/projects",
    fr: "/projets",
  },
});

const sbVersion = useStoryblokVersion();
const { locale, t } = useI18n();

const projects = await useStoryblokProjects(sbVersion, locale.value);
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

useHead({
  title: t("titles.projectsArchive"),
});
</script>

<template>
  <div class="container max-w-screen-xl py-20 px-10 space-y-10">
    <div class="space-y-3">
      <NuxtLinkLocale
        class="text-primary text-lg before:content-['←\00a0'] before:inline-block before:hover:motion-safe:-translate-x-2 before:motion-safe:transition-transform before:ease-in-out before:duration-300"
        to="index"
        data-test="back-button"
        >Corentin Hervaud</NuxtLinkLocale
      >
      <h1 class="text-4xl font-bold first-letter:uppercase">{{ $t("allProjects") }}</h1>
    </div>
    <table class="w-full table table-auto text-left">
      <thead class="table-header-group sticky top-0" data-test="header-row">
        <tr class="table-row *:p-3 text-sm whitespace-nowrap backdrop-blur">
          <th class="table-cell !pl-0 first-letter:uppercase">{{ $t("year") }}</th>
          <th class="table-cell first-letter:uppercase">{{ $t("project") }}</th>
          <th class="hidden md:table-cell first-letter:uppercase">{{ $t("madeAt") }}</th>
          <th class="hidden lg:table-cell first-letter:uppercase">{{ $t("builtUsing") }}</th>
          <th class="hidden sm:table-cell first-letter:uppercase">{{ $t("summary") }}</th>
        </tr>
      </thead>
      <tbody class="table-row-group">
        <tr v-for="project in projectsStories" :key="project.id" class="table-row border-t border-white-dark *:p-3">
          <td class="table-cell text-white-dark !pl-0">
            <NuxtTime :datetime="project.year" :locale="locale" year="numeric" />
          </td>
          <td class="table-cell text-white whitespace-nowrap">
            <component :is="project.link?.url ? CustomLink : 'strong'" :href="project.link?.url" target="_blank">
              {{ project.title }}
            </component>
          </td>
          <td class="hidden md:table-cell text-white-dark">{{ project.company }}</td>
          <td class="hidden lg:table-cell"><TagsList :tags="project.tags?.value" /></td>
          <td
            v-tooltip.left="{ value: project.description, autoHide: false }"
            class="hidden sm:table-cell text-white-dark"
          >
            {{ project.summary }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
