<template>
  <div>
    <div class="container mx-auto mt-8 mb-28">
      <div class="flex gap-2 text-xl text-grey">
        <nuxt-link to="/" class="text-orenge">{{ $t("home") }}</nuxt-link>
        <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
        <nuxt-link to="/comparison">{{ $t("comparison") }}</nuxt-link>
      </div>
      <div class="mt-2 text-xl font-normal text-bold-grey">
        <h2 class="mb-5 text-4xl font-medium">{{ $t("comparisonList") }}</h2>
        <p>{{ $t("items") }}:0</p>
      </div>
      sasas
      <div v-for="banner of banners" :key="banner?.id">
        {{ banner["lg_img"] }}
      </div>
      <CardEmpty
        img="empty-comparison"
        title="Сравнивать пока нечего"
        description="Добавляйте товары к сравнению характеристик и выбирайте самый
           подходящий вам товар"
      />
    </div>
  </div>
</template>
<script>
import porductsApi from "@/api/productsApi.js";
export default {
  data() {
    return {
      banners: [],
    };
  },
  mounted() {
    this.__GET_BANNERS();
  },
  methods: {
    async __GET_BANNERS() {
      try {
        const dataBanners = await porductsApi.getBanners();
        this.banners = dataBanners?.data?.banners?.data;
      } catch (e) {
        console.error("Error fetching banners:", e);
      }
    },
  },
};
</script>
<style lang=""></style>
