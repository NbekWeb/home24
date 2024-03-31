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
     <div>
      {{ data }}
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
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getBanner(); // Call getBanner method when the component is mounted
  },
  methods: {
    async getBanner() {
      try {
        const banner = await $nuxt.$axiosInstance.get("/banners");
        this.data = banner.data.banners.data;
      } catch (e) {
        console.error("Error fetching banners:", e);
      }
    },
  },
};
</script>
<style lang=""></style>
