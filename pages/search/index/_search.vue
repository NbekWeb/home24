<template>
  <div class="container mx-auto">
    <div class="flex gap-2 mt-8 text-xl text-grey">
      <nuxt-link to="/" class="text-orenge">{{ $t("home") }}</nuxt-link>
      <img src="@/assets/img/icon/arrow-right.svg" alt="arrow" srcset="" />
      <nuxt-link to="/wishes">{{ $t("favorites") }}</nuxt-link>
    </div>
    <div class="flex flex-wrap gap-x-6 gap-y-12">
      <CardProduct
        :name="product.name"
        :price="product.real_price"
        :stars="product.info.stars"
        :img="product.images[0].md_img"
        v-for="product in searchs"
        :key="product.id"
        class="h-auto"
      />
      <!-- <div v-for="product in searchs" :key="product.id"> {{ product.images[0].md_img }}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    searchs: [],
  },
};
</script>
