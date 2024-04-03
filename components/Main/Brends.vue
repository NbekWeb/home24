<template>
  <div class="w-full">
    <div class="container mx-auto">
      <Link class="mt-28 mb-6" />
      <div class="flex gap-6 flex-wrap gap-y-2">
        <Card />
      </div>
    </div>
  </div>
</template>
<script>
import Link from "../Help/Link.vue";
import Card from "../Card/Brend.vue";
export default {
  components: {
    Link,
    Card,
  },
};
</script>
<style lang=""></style>
