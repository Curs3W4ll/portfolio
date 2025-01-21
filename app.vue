<script setup lang="ts">
import { useFlag } from "@unleash/proxy-client-vue";

const displayEyesPopup = ref<boolean>(false);
const displayLanguageSwitcher = ref<boolean>(false);

onMounted(() => {
  const displayAnimatedEyesFlag = useFlag("display-animated-eyes");
  const displayLanguageSwitcherFlag = useFlag("display-language-switcher");

  syncRef(displayEyesPopup, displayAnimatedEyesFlag, { direction: "rtl" });
  syncRef(displayLanguageSwitcher, displayLanguageSwitcherFlag, { direction: "rtl" });
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#C980E6 0%,#5FDFC8 100%)" />
  <EyesPopup v-if="displayEyesPopup" :display-language-switcher="displayLanguageSwitcher" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
