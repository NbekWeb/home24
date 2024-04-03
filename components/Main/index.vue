<template>
  <div>
    <Slide />
    <CategoryCards class="font-firs" />
    <Populars class="font-firs" />
    <Brends/>
  </div>
</template>
<script>
import CategoryCards from "./Category.vue";
import Slide from "./Slide.vue";
import Populars from "./Populars.vue";
import Brends from "./Brends.vue";
export default {
  layout: "default",
  components: {
    CategoryCards,
    Slide,
    Populars,
    Brends,
  },
};
</script>
<style></style>
