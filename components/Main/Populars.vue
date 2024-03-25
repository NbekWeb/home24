<template>
  <div class="w-full">
    <div class="container mx-auto ">
      <Link class="mt-28 mb-6" />
      <div class="flex justify-between flex-wrap gap-y-2">
        <Card  v-for="n of 4" :key="n"/>
      </div>
    </div>
  </div>
</template>
<script>
import Link from "../Help/Link.vue";
import Card from "../Card/Popular.vue";
export default {
  components: {
    Link,
    Card,
  },
};
</script>
<style lang=""></style>
