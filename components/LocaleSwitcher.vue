<script setup lang="ts">
const { locale, locales } = useI18n();
</script>

<template>
  <div>
    <p class="font-bold"><i class="pi pi-language" /> Language</p>
    <div class="space-x-2 pl-3">
      <SwitchLocalePathLink
        v-for="l in locales"
        :key="l.code"
        class="uppercase"
        :class="[locale === l.code ? 'text-white underline' : 'text-white-dark']"
        :locale="l.code"
      >
        {{ l.code }}
      </SwitchLocalePathLink>
    </div>
  </div>
</template>
