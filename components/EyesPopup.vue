<template>
  <div
    class="fixed top-1/2 left-0 -translate-y-1/2 -translate-x-40 flex items-center hover:translate-x-0 motion-safe:transition-transform ease-in-out duration-200 z-10"
  >
    <div class="rounded-r border-8 border-l-0 border-black w-40 h-52">
      <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-r w-full h-full p-3">
        <LocaleSwitcher />
      </div>
    </div>
    <AnimatedEyes />
  </div>
</template>
