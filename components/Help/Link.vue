<template>
  <div class="w-full">
    <div class="container mx-auto">
      <p class="text-3xl text-black">
        {{ text }}
        <span
          class="border-b border-bold-orenge pb-[1px] text-bold-orenge text-xl"
          >{{ link }}</span
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: "",
    link: "",
  },
};
</script>
<style lang=""></style>
