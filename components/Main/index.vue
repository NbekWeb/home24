<template>
  <div>
    <Slide />
    <CategoryCards class="font-firs" />
    <Populars class="font-firs" />
    <Brends/>
    <Blogs/>
  </div>
</template>
<script>
import CategoryCards from "./Category.vue";
import Slide from "./Slide.vue";
import Populars from "./Populars.vue";
import Brends from "./Brends.vue";
import Blogs from "./Blogs.vue";
export default {
  layout: "default",
  components: {
    CategoryCards,
    Slide,
    Populars,
    Brends,
    Blogs
  },
};
</script>
<style></style>
