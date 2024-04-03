<template>
  <div class="banner__calc">
    <div class="overflow-x-hidden">
      <div class="relative swiper-container bannerSwiper">
        <div class="">
          <button
            class="!w-12 !h-12 bg-white rounded-full swiper-button-prev opacity-45 hover:opacity-65"
          >
            <img src="@/assets/img/icon/arrow-left.svg" />
          </button>
          <button
            class="swiper-button-next !w-12 !h-12 bg-white rounded-full opacity-45 rotate-180 hover:opacity-65"
          >
            <img src="@/assets/img/icon/arrow-left.svg" />
          </button>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner of banners" :key="banner?.id">
            <img
              :src="banner?.['lg_img']"
              alt=""
              class="rounded-3xl heada bg-inherit"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full !mt-5">
        <div class="flex gap-2 banner-pagination"></div>
      </div>
    </div>
  </div>
</template>

<style>
.banner__calc {
  width: calc(100% - 414px);
}

/* .swiper-button-prev,
.swiper-button-next {
  position: absolute;
  bottom: 0px !important;
  z-index: 20;
  width: 56px !important;
  height: 56px !important;
} */

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

.heada {
  height: 432px;
  width: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet-active {
  background: rgb(255, 126, 0);
}
.swiper-pagination {
  position: static;
}
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: "";
}
</style>

<script>
import porductsApi from "@/api/productsApi.js";
import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      banners: [],
    };
  },
  async mounted() {
    await this.__GET_BANNERS();
    Swiper.use([Pagination, Autoplay, Navigation]);
    this.swiper = new Swiper(".bannerSwiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".banner-pagination",
        clickable: true,
      },
    });
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
