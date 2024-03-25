<template>
  <div>
    <Slide />
    <CategoryCards />
    <Populars/>
  </div>
</template>
<script>
import CategoryCards from "./Category.vue";
import Slide from "./Slide.vue";
import Populars from "./Populars.vue";
export default {
  layout: "default",
  components: {
    CategoryCards,
    Slide,
    Populars
  },
};
</script>
<style></style>
