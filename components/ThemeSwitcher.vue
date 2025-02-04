<script setup lang="ts">
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
      return "pi-moon";
    case "light":
      return "pi-sun";
    case "system":
    default:
      return "pi-desktop";
  }
});
</script>

<template>
  <div v-if="show">
    <p class="font-bold">
      <span class="capitalize">{{ $t("theme.theme") }}</span>
    </p>
    <div class="pl-3 flex items-center gap-2 cursor-pointer" data-test="change-theme-button" @click="next()">
      <i class="pi" :class="[themeIcon]" />
      <p class="first-letter:uppercase" data-test="theme-name">{{ $t(`theme.${state}`) }}</p>
    </div>
  </div>
</template>
