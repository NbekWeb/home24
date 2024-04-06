<template>
  <div class="w-full">
    <div class="container mx-auto">
      <Link class="mb-6 mt-28" text="Популярные товары" link="Все товары" />
      <div class="flex flex-wrap gap-x-6 gap-y-4">
        <Card
          v-for="product of products"
          :key="product?.id"
          :name="product?.name"
          :price="product?.products?.[0]?.real_price"
          :img="product?.products?.[0]?.images?.[0]?.md_img"
          :slug="product?.products?.[0]?.slug"
          :starts="product?.stars"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Link from "../Help/Link.vue";
import Card from "../Card/Popular.vue";
import porductsApi from "@/api/productsApi.js";
export default {
  components: {
    Link,
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async __GET_POPULARS() {
      try {
        const popularsData = await porductsApi.getPopulars();
        this.products = popularsData?.data?.products?.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_POPULARS();
  },
};
</script>
<style lang=""></style>
