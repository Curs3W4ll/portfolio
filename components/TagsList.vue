<script setup lang="ts">
import Tag from "@/volt/Tag.vue";

defineProps<{
  tags?: string[];
}>();
</script>

<template>
  <div v-if="tags" class="pt-2 flex flex-wrap gap-2">
    <Tag v-for="tag in tags" :key="tag" :value="tag" rounded />
  </div>
</template>
