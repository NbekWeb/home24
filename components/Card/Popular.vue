<template lang="">
  <div class="w-[252px] popular rounded-b-2xl">
    <nuxt-link to="">
      <div
        class="popular__img h-[336px] w-full relative rounded-t-2xl rounded-b-2xl"
      >
        <div class="flex justify-center w-full">
          <img :src="img" class="object-cover tran" />
        </div>
        <div class="absolute text-white bottom-3 left-3">
          <img src="@/assets/img/aksi.png" class="h-full" />
          <span class="absolute text-[10px] top-5 left-5">скидки</span>
          <span class="absolute text-base top-8 left-5">
            {{ skidki || 15 }} %</span
          >
        </div>
      </div>
      <div class="px-4 py-3 mt-2 popular__title">
        <div class="flex justify-between">
          <div class="">
            <p class="text-xl text-bold-grey">
              {{ Math.floor(price * 0.7) }} cum
            </p>
            <p class="text-xs line-through light-grey">{{ price }} cum</p>
            <div class="flex gap-1">
              <img src="@/assets/img/icon/stardegre.svg" alt="star" />
              <span>{{ starts }}</span>
            </div>
          </div>
          <div
            class="flex items-center justify-center w-8 h-8 bg-bold-orenge rounded-3xl hover:bg-orenge"
          >
            <img src="@/assets/img/icon/buy.svg" />
          </div>
        </div>
        <p class="mt-2 text-xs font-medium text-bold-grey">
          {{ name }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    name: "",
    price: "",
    starts: "",
    skidki: "",
    img: "",
  },
};
</script>
<style>
.popular__img {
  border: 1px solid rgb(243, 243, 250);
}
.popular__img {
  /* Multiple background layers */
  background: rgba(151, 151, 151, 0), rgb(255, 255, 255);
}

.popular:hover .tran {
  transform: scale(1.05);
}
.popular:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.popular:hover .popular__img {
  border-bottom: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
