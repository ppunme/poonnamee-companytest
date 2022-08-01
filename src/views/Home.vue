<template>
  <div class="container mx-auto pt-20">
    <Search :setSearch="setSearch" />
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 pt-12 py-3"
    >
      <a
        v-for="(company, index) in filteredCompany"
        :key="index"
        class="bg-secondary-color rounded-xl w-40 h-48 pt-[12px] mx-auto text-center text-primary-color text-sm font-semibold cursor-pointer hover:ring-2 hover:ring-primary-color/50 hover:drop-shadow-[0_0px_4px_rgba(135,89,242)]"
        :href="'/poonnamee-companytest/' + company.id"
      >
        <div class="">
          <div
            class="bg-white h-[136px] w-[136px] mx-auto rounded-lg flex items-center justify-center"
          >
            <img
              :src="
                company.logo
                  ? getLogo(company.logo)
                  : require('@/assets/images/no_image.png')
              "
              class="w-12"
            />
          </div>
          <p class="py-3">{{ company.name }}</p>
        </div>
      </a>
    </div>

    <div class="flex justify-center pt-8">
      <ChevronDownIcon
        @click="loadMore"
        v-if="currentPage * maxPerPage < companies.length"
        class="w-16 text-primary-color cursor-pointer hover:text-primary-color/70"
      />

      <ChevronDoubleUpIcon
        class="fixed right-5 bottom-10 w-12 h-12 p-2 rounded-full bg-primary-color/50 opacity-50 hover:opacity-100 text-white cursor-pointer"
        v-show="scY > 170"
        @click="scrollToTop"
      />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import companyData from "../data/companies.json";
import { ChevronDownIcon, ChevronDoubleUpIcon } from "@heroicons/vue/solid";

export default {
  name: "home-view",
  components: {
    Search,
    ChevronDownIcon,
    ChevronDoubleUpIcon,
  },
  data() {
    return {
      companies: null,
      currentPage: 1,
      maxPerPage: 10,
      scTimer: 0,
      scY: 0,
      search: null,
    };
  },
  created() {
    this.companies = companyData.companies;
  },
  methods: {
    getLogo(logo) {
      return require(`@/assets/images/${logo}`);
    },
    setSearch(value) {
      this.search = value;
    },
    searchCompany(companies) {
      if (!this.search) {
        return companies;
      }

      return companies.filter((company) => {
        return company.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    loadMore() {
      this.currentPage += 1;
    },
    handleScroll() {
      this.scY = window.scrollY;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    paginatedCompanies(com) {
      return com.slice(0, this.currentPage * this.maxPerPage);
    },
  },
  computed: {
    filteredCompany() {
      return this.paginatedCompanies(this.searchCompany(this.companies));
    },
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
