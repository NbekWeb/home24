<template>
  <div class="slide bg-back-grey">
    <div
      class="container flex gap-x-6 h-[528px] py-10 mx-auto text-black w-full"
    >
      <Banner />
      <DayProduct />
    </div>
  </div>
</template>
<script>
import Banner from "../Card/Banner.vue";
import DayProduct from "../Card/DayPorduct.vue";
export default {
  components: {
    Banner,
    DayProduct,
  },
};
</script>
<style>
.widt-calc {
  width: calc(50% - 10px);
}
</style>
