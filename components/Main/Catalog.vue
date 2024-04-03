<template>
  <div class="absolute top-0 z-20 w-full h-auto bg-white py-14">
    <div class="container flex w-full mx-auto">
      <div class="flex pl-3">
        <div
          class="flex flex-col gap-y-14 justify-start w-[250px] gap-6 border-r-[2px] border-bor-grey"
        >
          <div
            class="flex items-center gap-2 icon-hover"
            v-for="category in categories"
            :key="category?.id"
            @mouseover="getCategoryChildren(category)"
          >
            <!-- <img src="@/assets/img/icon/Heart.svg" alt="Heart Icon" /> -->
            <nuxt-link :to="'/category/' + `${category?.slug}`" class="hover:text-orenge">{{
              category?.name
            }}</nuxt-link>
          </div>
        </div>
      </div>

      <div class="pl-6 ">
        <h2 class="text-3xl font-medium text-orenge">{{ title }}</h2>

        <div
          class="flex flex-wrap justify-between pt-10 text-xl font-normal gap-y-6 text-grey gap-x-24"
        >
          <div
            class="w-auto"
            v-for="childCategory in categoryChildren"
            :key="childCategory.id"
          >
            <nuxt-link
              :to="'/category/' + `${childCategory?.slug}`"
              class="pb-6 text-2xl font-medium text-bold-grey "
            >
              {{ childCategory?.name }}
            </nuxt-link>
            <div v-if="childCategory?.children.length != 0">
              <p
                v-for="childrenCategory in childCategory.children"
                :key="childrenCategory?.id"
              >
                {{ childrenCategory?.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import porductsApi from "@/api/productsApi.js";

export default {
  data() {
    return {
      categories: [],
      categoryChildren: [],
      title: "",
    };
  },
  methods: {
    async __GET_CATEGORIES() {
      try {
        const dataCategories = await porductsApi.getCategories();
        this.categories = dataCategories?.data?.data;
      } catch (e) {
        console.log(e);
      }
    },
    getCategoryChildren(category) {
      if (category?.children.length != 0) {
        this.title = category?.name;
        this.categoryChildren = category?.children;
        console.log(category);
      }
    },
  },
  async mounted() {
    await this.__GET_CATEGORIES();
    this.getCategoryChildren(this.categories?.[0]);
  },
};
</script>

<style></style>
