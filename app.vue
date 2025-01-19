<script setup lang="ts">
import { useFlag } from "@unleash/proxy-client-vue";

const displayEyesPopup = ref<boolean>(false);

onMounted(() => {
  const displayAnimatedEyesFlag = useFlag("display-animated-eyes");

  syncRef(displayEyesPopup, displayAnimatedEyesFlag, { direction: "rtl" });
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#C980E6 0%,#5FDFC8 100%)" />
  <EyesPopup v-if="displayEyesPopup" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
