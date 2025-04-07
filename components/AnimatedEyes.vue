<script setup lang="ts">
import { RoughEase } from "gsap/EasePack";

onMounted(() => {
  useGSAP().registerPlugin(RoughEase);
  useGSAP()
    .matchMedia()
    .add("(prefers-reduced-motion: no-preference)", () => {
      useGSAP().to(".eye-ball", {
        duration: 10,
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: "rough({ clamp: true, points: 10, strength: 1, template: power1.none })",
      });
    });
});
</script>

<template>
  <div class="h-20 w-10 overflow-clip relative">
    <div class="absolute bg-black w-12 h-12 rounded-r-full left-0 top-0 -translate-x-1/3"></div>
    <div class="absolute bg-black w-12 h-12 rounded-r-full left-0 bottom-0 -translate-x-1/3"></div>
    <div class="absolute bg-white w-8 h-10 rounded-r-full left-0 top-0 mt-1 -translate-x-1/3"></div>
    <div class="absolute bg-white w-8 h-10 rounded-r-full left-0 bottom-0 mb-1 -translate-x-1/3"></div>
    <div
      class="eye-ball absolute bg-black w-6 h-6 rounded-full left-0 top-0 mt-1 -translate-x-1/2 motion-reduce:translate-y-1/4"
    ></div>
    <div
      class="eye-ball absolute bg-black w-6 h-6 rounded-full left-0 bottom-0 mb-5 -translate-x-1/2 motion-reduce:translate-y-1/4"
    ></div>
  </div>
</template>
