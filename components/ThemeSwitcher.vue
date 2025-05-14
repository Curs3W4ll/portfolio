<script setup lang="ts">
import { faDisplay, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

withDefaults(
  defineProps<{
    show?: boolean;
  }>(),
  {
    show: true,
  },
);

const colorMode = useColorMode();
const { state, next } = useCycleList(["system", "dark", "light"] as const, { initialValue: colorMode.preference });

watchEffect(() => (colorMode.preference = state.value));

const themeIcon = computed(() => {
  switch (colorMode.preference) {
    case "dark":
      return faMoon;
    case "light":
      return faSun;
    case "system":
    default:
      return faDisplay;
  }
});
</script>

<template>
  <div v-if="show">
    <p class="font-bold">
      <span class="capitalize">{{ $t("theme.theme") }}</span>
    </p>
    <div class="pl-3 flex items-center gap-2 cursor-pointer" data-test="change-theme-button" @click="next()">
      <font-awesome :icon="themeIcon" />
      <p class="first-letter:uppercase underline" data-test="theme-name">{{ $t(`theme.${state}`) }}</p>
    </div>
  </div>
</template>
