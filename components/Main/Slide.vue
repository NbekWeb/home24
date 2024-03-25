<template>
  <div class="slide bg-back-grey">
    <div class="container flex justify-between h-full py-10 mx-auto text-black">
      <div class="slider border">
        <img src="@/assets/img/head.png" alt="" srcset="" class="heada">
      </div>
      <div class="w-[390px] h-[420px]  bg-white rounded-3xl px-8 py-7">
        <div class="flex justify-between w-full">
          <h2 class="text-2xl uppercase">товар дня</h2>
          <div
            class="flex items-center justify-center w-8 h-8 bg-back-grey rounded-2xl"
          >
            <img src="@/assets/img/icon/Heart.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-between py-8">
          <div class="swaper  widt-calc h-[100px]">
            <img src="@/assets/img/kreslo.png" alt="" srcset="">
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
            <p class="mt-3 text-xl">Realme Pad Mini 32GB + 3GB LTE (синий)</p>
            <div
              class="flex cursor-pointer items-center justify-center w-full gap-2 mt-6 rounded h-9 bg-bold-orenge hover:bg-orenge"
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
</template>
<script>
export default {};
</script>
<style>
/* .slide {
  height: calc(100vh - 10.5rem);
} */
.trapazoid {
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0 100%);
  background: linear-gradient(
    129.57deg,
    rgb(255, 126, 0) 1.329%,
    rgba(255, 126, 0, 0) 267.535%
  );
}

.widt-calc {
  width: calc(50% - 10px);
}

.heada{
  height: 420px;
  width: auto;
}
</style>
