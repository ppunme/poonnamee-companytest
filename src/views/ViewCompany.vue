<template>
  <div class="pt-10 px-8 md:px-16 lg:px-28">
    <button>
      <ChevronLeftIcon
        @click="goBack"
        class="w-10 text-white bg-primary-color rounded-full cursor-pointer hover:bg-primary-color/70"
      />
    </button>

    <div class="pt-5 sm:pt-10">
      <div class="flex flex-col sm:flex-row bg-secondary-color rounded-lg p-3">
        <div class="basis-full sm:basis-1/4">
          <div
            class="bg-white h-44 w-44 rounded-lg flex items-center justify-center mx-auto sm:ml-0 sm:mr-auto"
          >
            <img
              :src="
                company.logo
                  ? getLogo(company.logo)
                  : require('@/assets/images/no_image.png')
              "
              class="w-32"
            />
          </div>
        </div>
        <div
          class="basis-full sm:basis-3/4 flex font-semibold p-3 h-full my-auto"
        >
          <div class="grid grid-cols-2 gap-1 sm:gap-2 text-sm sm:text-base">
            <div class="text-primary-color">
              <p>Company name</p>
            </div>
            <div>{{ company.name }}</div>
            <div class="text-primary-color">
              <p>Owner</p>
            </div>
            <div>{{ company.owner }}</div>
            <div>
              <p class="text-primary-color">Website</p>
            </div>
            <div>{{ company.website }}</div>
            <div>
              <p class="text-primary-color">Email</p>
            </div>
            <div>{{ company.email }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import companyData from "../data/companies.json";
import { ChevronLeftIcon } from "@heroicons/vue/solid";

export default {
  name: "viewcompany-view",
  components: {
    ChevronLeftIcon,
  },
  data() {
    return {
      companies: companyData.companies,
      company: null,
    };
  },
  created() {
    this.getSingleCompany(this.$route.params.companyId);
  },
  methods: {
    getSingleCompany(id) {
      // Filter company by id
      let item = this.companies.filter((item) => {
        return item.id === +id;
      });
      this.company = item[0];
    },
    getLogo(logo) {
      return require(`@/assets/images/${logo}`);
    },
    goBack() {
      //go back by one record
      this.$router.go(-1);
    },
  },
};
</script>
