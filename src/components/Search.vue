<template>
  <div class="group relative px-5">
    <SearchIcon
      class="absolute w-5 left-7 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary-color"
    />
    <input
      class="w-full text-slate-900 rounded-md py-2 pl-10 border border-slate-300 shadow-sm focus:border-2 focus:border-primary-color focus:outline-none"
      type="text"
      aria-label="Search company"
      placeholder="Search company..."
      v-model="search"
    />
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/solid";
export default {
  name: "search-comp",
  components: {
    SearchIcon,
  },
  props: {
    setSearch: Function,
  },
  data() {
    return {
      search: null,
    };
  },
  watch: {
    search(value) {
      this.setSearch(value);
    },
  },
};
</script>

<style>
.search-icon {
  margin: 0 8px 0 12px;
}
.search-input {
  outline: none;
  border: none;
  width: 100%;
  font-size: 16px;
}

label {
  width: 100%;
}
</style>
