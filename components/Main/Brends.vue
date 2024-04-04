<template>
  <div class="w-full">
    <div class="container mx-auto">
      <Link class="mb-6 mt-28" text="Популярные бренды" link="Смотреть все" />
      <div class="flex flex-wrap gap-6">
        <Card v-for="img in images" :key="img.id" :img="img?.md_logo" :name="img?.name" :slug="img.slug" />
      </div>
    </div>
  </div>
</template>
<script>
import Link from "../Help/Link.vue";
import Card from "../Card/Brend.vue";
import porductsApi from "@/api/productsApi.js";
export default {
  components: {
    Link,
    Card,
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async __GET_BRANDS() {
      try {
        const brandsData = await porductsApi.getBrands();
        this.images = brandsData?.data?.brands;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_BRANDS();
  },
};


</script>
<style lang=""></style>
