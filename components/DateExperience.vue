<script setup lang="ts">
import type { NuxtTime } from "#components";

const props = defineProps<{
  startDate: Date | string;
  endDate?: Date | string;
}>();

const convertToDate = (e?: Date | string) => (typeof e === "string" ? (e === "" ? undefined : new Date(e)) : e);

const start = ref<Date | undefined>(convertToDate(props.startDate));
const end = ref<Date | undefined>(convertToDate(props.endDate));

const format = computed(() => {
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
      <NuxtTime v-if="start" :datetime="start" v-bind="format" />
      -
      <NuxtTime v-if="end" :datetime="end" v-bind="format" />
      <span v-else>present</span>
    </strong>
  </div>
</template>
