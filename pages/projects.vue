<script setup lang="ts">
import type { Project } from "~/.storyblok/types/314995/storyblok-components";
import { CustomLink } from "#components";

defineI18nRoute({
  paths: {
    en: "/projects",
    fr: "/projets",
  },
});

const sbVersion = useStoryblokVersion();
const { locale, t } = useI18n();
const config = useConfig();

useHeadSafe({
  title: t("titles.projectsArchive"),
  meta: [
    { name: "description", content: config.seo.description.projects },
    { property: "og:description", content: config.seo.description.projects },
    { name: "twitter:description", content: config.seo.description.projects },
    { property: "og:title", content: config.seo.name.projects },
    { name: "twitter:title", content: config.seo.name.projects },
  ],
});

const projectsStories = await useStoryblokStoriesContent<Project>(
  "projects",
  sbVersion,
  locale.value,
  "content.year:desc",
);
</script>

<template>
  <div class="container max-w-(--breakpoint-xl) py-20 px-10 space-y-10">
    <div class="space-y-3">
      <NuxtLinkLocale
        class="text-primary-600 dark:text-primary text-lg before:content-['←\00a0'] before:inline-block motion-safe:hover:before:-translate-x-2 motion-safe:before:transition-transform before:ease-in-out before:duration-300"
        to="index"
        data-test="back-button"
        >Corentin Hervaud</NuxtLinkLocale
      >
      <h1 class="text-4xl font-bold first-letter:uppercase">{{ $t("allProjects") }}</h1>
    </div>
    <table class="w-full table table-auto text-left">
      <thead class="table-header-group sticky top-0" data-test="header-row">
        <tr class="table-row *:p-3 text-sm whitespace-nowrap backdrop-blur-sm">
          <th class="table-cell !pl-0 first-letter:uppercase">{{ $t("year") }}</th>
          <th class="table-cell first-letter:uppercase">{{ $t("project") }}</th>
          <th class="hidden md:table-cell first-letter:uppercase">{{ $t("madeAt") }}</th>
          <th class="hidden lg:table-cell first-letter:uppercase">{{ $t("builtUsing") }}</th>
          <th class="hidden sm:table-cell first-letter:uppercase">{{ $t("summary") }}</th>
        </tr>
      </thead>
      <tbody class="table-row-group">
        <tr
          v-for="project in projectsStories"
          :key="project._uid"
          class="table-row border-t border-black-light dark:border-white-dark *:p-3"
        >
          <td class="table-cell text-black-light dark:text-white-dark pl-0!">
            <NuxtTime :datetime="project.year" :locale="locale" year="numeric" />
          </td>
          <td class="table-cell text-black dark:text-white whitespace-nowrap">
            <component :is="project.link?.url ? CustomLink : 'strong'" :to="project.link?.url" target="_blank">
              {{ project.title }}
            </component>
          </td>
          <td class="hidden md:table-cell text-black-light dark:text-white-dark">{{ project.company }}</td>
          <td class="hidden lg:table-cell"><TagsList :tags="project.tags?.value" /></td>
          <td v-tooltip="project.description" class="hidden sm:table-cell text-black-light dark:text-white-dark">
            {{ project.summary }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
