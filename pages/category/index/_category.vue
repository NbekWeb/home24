<template>
  <div class="container mx-auto">
    <div class="flex gap-2 mt-8 text-xl text-grey">
      <nuxt-link to="/" class="text-orenge">{{ $t("home") }}</nuxt-link>
      <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
      <nuxt-link to="/wishes">{{ $t("favorites") }}</nuxt-link>
    </div>
    <div class="flex flex-wrap gap-x-6 gap-y-12 ">
      <CardProduct
        :product="product"
        v-for="product in products"
        :key="product.id"
        class="h-auto"
      />
    </div>
  </div>
</template>
<script>
import porductsApi from "@/api/productsApi.js";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async __GET_PRODUCTS() {
      try {
        const data = await porductsApi.getProducts(this.$route.params.category);
        this.products = data?.data?.products?.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_PRODUCTS();
  },
  watch: {
    "$route.params.category": {
      handler(newCategory, oldCategory) {
        if (newCategory !== oldCategory) {
          this.__GET_PRODUCTS(newCategory);
        }
      },
      immediate: true,
    },
  },
};
</script>
<style></style>
