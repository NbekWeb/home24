<template>
  <div>
    <nuxt-link
      :to="'/brand/'+ slug"
      class="flex items-center justify-center border rounded brend"
    >
      <img :src="img" :alt="name" class="object-cover w-full h-full rounded" />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    img: "",
    name: "",
    slug:""
  },
};
</script>
<style>
.brend {
  width: 252px;
  height: 160px;
}
</style>
