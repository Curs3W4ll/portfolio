<script setup lang="ts">
const anchors = ["about", "experience", "projects"];
const activeAnchor = ref(anchors[0]);

const handleScroll = () => {
  let selectedAnchor: string | undefined = undefined;

  for (const anchor of anchors) {
    const rect = document.getElementById(anchor)?.getBoundingClientRect();

    if (!rect) {
      continue;
    }
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      selectedAnchor = anchor;
      break;
    }
    if (rect.bottom >= 0 && !selectedAnchor) {
      selectedAnchor = anchor;
    }
  }

  activeAnchor.value = selectedAnchor ?? anchors[0];
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="uppercase flex flex-col gap-5">
    <NavBarLink v-for="anchor in anchors" :key="anchor" :anchor="anchor" :active="anchor === activeAnchor" />
  </div>
</template>
