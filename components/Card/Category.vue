<template>
  <div
    class="w-[252px] h-[244px] bg-back-grey text-bold-grey rounded-lg p-6 flex flex-col justify-start items-start mebel-card"
  >
    <nuxt-link
      :to="'/category/'+category?.slug"
      class="flex flex-col justify-between w-full h-full text-center"
    >
      <img
      v-if="category.md_img"
        :src="category?.md_img"
        :alt="category?.name"
        class="object-contain w-full h-28"
      />
      <img v-else src="@/assets/img/sof.png" alt="" srcset="">
      <p class="text-2xl justify-self-end">{{ category?.name }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    category: {},
  },
};
</script>

<style>
.mebel-card:hover p {
  color: rgb(255, 100, 24);
}
.mebel-card:hover {
  background: rgb(148, 148, 152, 0.3);
}
</style>
