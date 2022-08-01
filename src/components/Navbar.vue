<template>
  <nav class="flex items-center bg-primary-color py-3">
    <div class="flex items-center text-white uppercase mr-6">
      <img :src="require('@/assets/images/logo.png')" class="w-10 ml-3" />
      <span class="font-bold text-2xl text-uppercase pl-3">Test</span>
    </div>

    <div class="flex items-center pl-20">
      <a
        href="/"
        class="flex text-white font-bold underline hover:text-slate-300"
      >
        <HomeIcon class="w-4 text-white mr-2" />
        <p>Home</p>
      </a>
    </div>
  </nav>
</template>

<script>
import { HomeIcon } from "@heroicons/vue/solid";
export default {
  name: "navbar-comp",
  components: {
    HomeIcon,
  },
};
</script>

<style></style>
