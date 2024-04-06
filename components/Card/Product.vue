<template>
  <div>
    <nuxt-link
      :to="'/products/' + slug"
      class="flex flex-col w-64 h-full gap-y-2 gap-x-6 product rounded-2xl"
    >
      <img
        :src="img"
        :alt="name"
        class="h-[336px] border border-bor-grey rounded-2xl w-full object-contain product__img"
      />
      <!-- product?.images?.[0]?.md_img -->
      <div class="px-4 py-3 bg-btn-grey rounded-2xl product__text">
        <div class="flex justify-between w-full items-center mb-2">
          <div class="">
            <p>{{ price }}</p>
            <!-- <p>6 187 000 сум</p> -->
          </div>
          <div
            class="flex items-center justify-center w-8 h-8 bg-bold-orenge rounded-3xl hover:bg-orenge"
          >
            <img src="@/assets/img/icon/buy.svg" />
          </div>
        </div>
        <div class="flex gap-1">
          <img src="@/assets/img/icon/stardegre.svg" alt="" srcset="" />
          <span> {{ stars || "0.0 Hali baho yo" }}</span>
        </div>
        <p>{{ name }}</p>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    img: "",
    stars: "",
    price: "",
    name: "",
    slug: "",
  },
};
</script>
<style scoped>
.product:hover .product__img {
  transform: scale(1.05);
}
.product:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.product:hover .product__img {
  border-bottom: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.product:hover .product__text {
  border-top: none;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
</style>
