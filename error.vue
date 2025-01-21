<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const showError = useState(() => import.meta.dev);

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center text-white-dark">
    <div class="flex gap-3 items-center">
      <h1 class="my-3 text-xl">{{ error.statusCode }}</h1>
      <Divider class="before:!border-white self-stretch" layout="vertical" />
      <p class="first-letter:uppercase">
        {{ $t("couldNotLoadPage") }}.
        <span
          class="hover:text-primary cursor-pointer inline-block first-letter:uppercase"
          data-test="go-back-home"
          @click="handleError"
          >{{ $t("goBackHome") }}</span
        >
      </p>
    </div>
    <div v-if="showError === true" class="mt-10">
      <p>{{ error.name }}</p>
      <p>{{ error.message }}</p>
      <p>{{ error.stack }}</p>
    </div>
  </div>
</template>
