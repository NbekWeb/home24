<template>
  <div>
    <div class="w-[390px] overflow-x-hidden">
      <div class="swiper-container dayProductSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item of 5" :key="item">
            <div class="w-full h-[432px] bg-white rounded-3xl px-8 py-7">
              <div class="flex justify-between w-full">
                <h2 class="text-2xl uppercase">товар дня</h2>
                <div
                  class="flex items-center justify-center w-8 h-8 bg-back-grey rounded-2xl"
                >
                  <img src="@/assets/img/icon/Heart.svg" alt="" />
                </div>
              </div>
              <div class="flex justify-between py-8">
                <div class="swaper widt-calc h-[100px]">
                  <img src="@/assets/img/kreslo.png" alt="" srcset="" />
                </div>
                <div class="h-[200px] widt-calc">
                  <div
                    class="w-full h-9 bg-back-grey flex justify-between pl-3 items-center rounded-[8px] relative"
                  >
                    <p>Cкидка</p>
                    <div
                      class="trapazoid rounded-r-[8px] text-white w-[80px] font-bold flex items-center justify-end h-full pr-2"
                    >
                      -90%
                    </div>
                  </div>
                  <p class="mt-6 mb-1 text-xl">1.240.000 <span>сум</span></p>
                  <p class="text-xs line-through text-light-grey">1.500.000</p>
                  <div class="flex mt-4 text-xs text-grey">
                    <img src="@/assets/img/icon/Star.svg" />
                    <span>Нет отзывов</span>
                  </div>
                  <p class="mt-3 text-[14px]">
                    Realme Pad Mini 32GB + 3GB LTE (синий)
                  </p>
                  <div
                    class="flex items-center justify-center w-full gap-2 mt-6 rounded cursor-pointer h-9 bg-bold-orenge hover:bg-orenge"
                  >
                    <img
                      src="@/assets/img/icon/bag.svg"
                      alt=""
                      class="invert brightness-200"
                    />
                    <span class="text-white">в карзину</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full !mt-5">
        <div class="flex gap-2 swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  mounted() {
    Swiper.use([Pagination, Autoplay]);
    this.swiper = new Swiper(".dayProductSwiper", {
      slidesPerView: 1,
      spaceBetween: 12,
      autoplay: {
        delay: 3000,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style scoped>
.trapazoid {
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0 100%);
  background: linear-gradient(
    129.57deg,
    rgb(255, 126, 0) 1.329%,
    rgba(255, 126, 0, 0) 267.535%
  );
}
</style>
