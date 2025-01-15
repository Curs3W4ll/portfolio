<script setup lang="ts">
import type { NuxtTime } from "#components";

const props = defineProps<{
  startDate: Date | string;
  endDate?: Date | string;
}>();

const convertToDate = (e?: Date | string) => (typeof e === "string" ? (e === "" ? undefined : new Date(e)) : e);

const start = ref<Date | undefined>(convertToDate(props.startDate));
const end = ref<Date | undefined>(convertToDate(props.endDate));

const startFormat = computed(() => {
  const obj: ExtractPropTypes<typeof NuxtTime> = {};

  if (start.value?.getUTCFullYear() === end.value?.getUTCFullYear()) {
    obj.month = "short";
  } else {
    obj.year = "numeric";
  }

  return obj;
});
const endFormat = computed(() => {
  const obj: ExtractPropTypes<typeof NuxtTime> = {
    year: "numeric",
  };

  if (start.value?.getUTCFullYear() === end.value?.getUTCFullYear()) {
    obj.month = "short";
  }

  return obj;
});
</script>

<template>
  <div>
    <strong>
      <NuxtTime v-if="start" v-bind="startFormat" :datetime="start" />
      -
      <NuxtTime v-if="end && end < new Date()" v-bind="endFormat" :datetime="end" />
      <span v-else>present</span>
    </strong>
  </div>
</template>
