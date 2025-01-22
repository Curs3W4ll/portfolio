<script setup lang="ts">
import { useFlag } from "@unleash/proxy-client-vue";

const displayEyesPopup = ref<boolean>(false);
const displayLanguageSwitcher = ref<boolean>(false);
const displayThemeSwitcher = ref<boolean>(false);

onMounted(() => {
  const displayAnimatedEyesFlag = useFlag("display-animated-eyes");
  const displayLanguageSwitcherFlag = useFlag("display-language-switcher");
  const displayThemeSwitcherFlag = useFlag("display-theme-switcher");

  syncRef(displayEyesPopup, displayAnimatedEyesFlag, { direction: "rtl" });
  syncRef(displayLanguageSwitcher, displayLanguageSwitcherFlag, { direction: "rtl" });
  syncRef(displayThemeSwitcher, displayThemeSwitcherFlag, { direction: "rtl" });
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#C980E6 0%,#5FDFC8 100%)" />
  <ColorScheme>
    <EyesPopup
      :display-language-switcher="displayEyesPopup && displayLanguageSwitcher"
      :display-theme-switcher="displayEyesPopup && displayThemeSwitcher"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ColorScheme>
</template>
