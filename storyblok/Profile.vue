<script setup lang="ts">
import type { Profile } from "~/.storyblok/types/314995/storyblok-components";

defineProps<{
  blok: Profile;
}>();
</script>

<template>
  <div v-editable="blok" class="flex flex-col justify-between h-full" data-test="profile">
    <div class="space-y-3">
      <NuxtLinkLocale to="index">
        <h1 class="text-4xl sm:text-5xl font-extrabold shrink-0 lg:whitespace-nowrap">
          {{ blok.name }}
        </h1>
      </NuxtLinkLocale>
      <h2 class="text-xl sm:text-2xl font-bold">{{ blok.job }}</h2>
      <h3 v-gsap.animateText.slow>{{ blok.description }}</h3>
    </div>
    <NavBar class="invisible lg:visible" />
    <div class="flex gap-5 pt-3">
      <NuxtLink v-for="link in blok.links" :key="link._uid" :to="link.url.url" target="_blank" data-test="social-link">
        <SvgIcon :icon="link.icon" :title="link.name" />
      </NuxtLink>
    </div>
  </div>
</template>
