<template>
  <div>
    <nuxt-link :to="'/blog/'+slug" class="rounded-[18px] relative">
      <img :src="img" :alt="title" class="object-cover w-[390px] h-[277px] rounded-[18px]" />
      <p class="absolute z-10 text-xl font-semibold text-white bottom-6 left-6 ">{{ title }} blog nomi tadam</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    slug: "",
    title: "",
    img: "",
  },
};
</script>
