<template>
  <div class="container mx-auto">
    <div class="flex gap-2 mb-8 text-xl text-grey" v-if="$route.params.category">
      <nuxt-link to="/" class="text-orenge">{{ $t("home") }}</nuxt-link>
      <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
      <nuxt-link to="/category">{{ $route.params.category }} </nuxt-link>
    </div>
    <div class="flex flex-wrap gap-x-6 gap-y-12" v-if="category.length > 0">
      <CardProduct
        :img="product?.products?.[0]?.images?.[0]?.md_img"
        :name="product?.products?.[0]?.name"
        :price="product?.products?.[0]?.real_price"
        :stars="product?.stars"
        v-for="product in products"
        :key="product.id"
        :slug="product?.products?.[0]?.slug"
        class="h-auto"
      />
    </div>
    <div v-else>
      <CardEmpty
        img="empty-product"
        text="Товар не найдена"
        description="Но вы всегда можете ее наполнить"
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
      category: [],
    };
  },
  methods: {
    async __GET_PRODUCTS() {
      try {
        const data = await porductsApi.getProducts(
          "?category=" + this.$route.params.category
        );
        const dataCategory = await porductsApi.getCategory(
          this.$route.params.category
        );
        this.products = data?.data?.products?.data;
        console.log(this.products);
        this.category = dataCategory?.data?.products?.data;
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
