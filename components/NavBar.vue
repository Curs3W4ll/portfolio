<script setup lang="ts">
const anchors = ["about", "experience", "projects"];
const activeAnchor = ref(anchors[0]);

const handleScroll = () => {
  for (const anchor of anchors) {
    const rect = document.getElementById(anchor)?.getBoundingClientRect();

    if (rect && rect.bottom >= 0) {
      activeAnchor.value = anchor;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="uppercase flex flex-col gap-5">
    <NavBarLink v-for="anchor in anchors" :key="anchor" :anchor="anchor" :active="anchor === activeAnchor" />
  </div>
</template>
