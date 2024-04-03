<template>
  <div class="flex flex-col w-64 h-full gap-y-2 gap-x-6">
    <img
      :src="product?.products?.[0]?.images?.[0]?.md_img"
      :alt="product?.name"
      class="h-[336px] border border-bor-grey rounded-2xl w-full object-contain"
    />

    <div class="px-4 py-3 bg-red-300">
      <div class="flex justify-between w-full ">
        <div class="">
          <p>{{ product?.products?.[0]?.real_price }}</p>
          <!-- <p>6 187 000 сум</p> -->
        </div>
        <div
          class="flex items-center justify-center w-8 h-8 bg-bold-orenge rounded-3xl hover:bg-orenge"
        >
          <img src="@/assets/img/icon/buy.svg" />
        </div>
      </div>
      <div>{{ product?.stars || "0.0 Hali baho yo" }}</div>
      <p>{{ product?.products?.[0]?.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {},
  },
};
</script>
<style></style>
