<template>
  <div class="container mx-auto">
    <Link class="my-6" text="Блог" link="Все блоги" />
    <div class="flex flex-wrap gap-6">
      <Card
        v-for="blog of blogs"
        :key="blog?.id"
        :title="blog?.title"
        :img="blog?.md_img"
        :slug="blog?.slug"
      />
    </div>
  </div>
</template>
<script>
import Link from "../Help/Link.vue";
import Card from "../Card/Blog.vue";
import porductsApi from "@/api/productsApi.js";
export default {
  components: {
    Link,
    Card,
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async __GET_BLOGS() {
      try {
        const blogsData = await porductsApi.getBlogs();
        this.blogs = blogsData?.data?.posts?.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_BLOGS();
  },
};
</script>
<style lang=""></style>
