<script setup lang="ts">
const { locale, locales } = useI18n();
</script>

<template>
  <div>
    <p class="font-bold">
      <i class="pi pi-language" /> <span class="capitalize">{{ $t("language") }}</span>
    </p>
    <div class="space-x-2 pl-3">
      <SwitchLocalePathLink
        v-for="l in locales"
        :key="l.code"
        class="uppercase"
        :class="[locale === l.code ? 'text-black dark:text-white underline' : 'text-black-light dark:text-white-dark']"
        :locale="l.code"
      >
        {{ l.code }}
      </SwitchLocalePathLink>
    </div>
  </div>
</template>
