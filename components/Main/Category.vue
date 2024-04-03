<template>
  <div class="w-full bg-white">
    <div class="container mx-auto pt-28">
      <h2 class="mb-6 text-3xl font-bold text-black">{{ $t("categories") }}</h2>
      <div class="flex flex-wrap gap-6">
        <Card
          v-for="category of categories"
          :key="category?.id"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "../Card/Category.vue";
import porductsApi from "@/api/productsApi.js";
export default {
  components: {
    Card,
  },

  data() {
    return {
      categories: [],
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
  },
  async mounted() {
    await this.__GET_CATEGORIES();
  },
};
</script>
<!-- 
    <script>
import porductsApi from "@/api/productsApi.js";

export default {
  data() {
    return {
      categories: [],
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
  },
  async mounted() {
    await this.__GET_CATEGORIES();
  },
};
</script>
 -->
<style lang=""></style>
