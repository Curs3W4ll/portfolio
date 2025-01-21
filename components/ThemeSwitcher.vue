<script setup lang="ts">
const colorMode = useColorMode({ emitAuto: true });
const { state, next } = useCycleList(["auto", "dark", "light"] as const, { initialValue: colorMode });

watchEffect(() => (colorMode.value = state.value));

const themeIcon = computed(() => {
  switch (colorMode.value) {
    case "dark":
      return "pi-moon";
    case "light":
      return "pi-sun";
    case "auto":
    default:
      return "pi-desktop";
  }
});
</script>

<template>
  <div>
    <p class="font-bold">
      <span class="capitalize">{{ $t("theme.theme") }}</span>
    </p>
    <div class="pl-3 flex items-center gap-2 cursor-pointer" @click="next()">
      <i class="pi" :class="[themeIcon]" />
      <p class="first-letter:uppercase">{{ $t(`theme.${state}`) }}</p>
    </div>
  </div>
</template>
