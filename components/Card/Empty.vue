<template>
  <div class="flex justify-center mt-14">
    <div class="w-[388px]">
      <div class="w-full">
        <img
          :src="require(`@/assets/img/${img}.png`)"
          alt="empty"
          class="w-full h-auto"
        />
      </div>
      <div class="w-full mt-8 text-xs font-normal text-center text-grey">
        <p class="mb-2 text-2xl font-medium text-bold-grey">
          {{ text }}
        </p>
        <p>
          {{ description }}
        </p>
        <nuxt-link
          to="/"
          class="flex justify-center w-full py-4 mt-6 text-xl bg-white border rounded-md border-orenge text-orenge hover:bg-orenge hover:text-white"
        >
          На главную
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    description: String,
    img: String,
  },
};
</script>

<style lang=""></style>
