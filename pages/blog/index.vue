<template>
  <div class="container mx-auto text-bold-grey">
    <div class="navigation-link"></div>
    <div class="">
      <h3 class="mt-4 mb-8 text-4xl font-medium">Блог</h3>
      <div>
        <p>{{ blog?.title }}</p>
        <div v-html="blog?.desc"></div>
        <nuxt-child />
      </div>
      <div class="mt-10">
        <p class="mb-6 text-4xl">Другие блоги</p>
        <div class="flex flex-wrap gap-6">
          <CardBlog
            v-for="blog of blogs"
            :key="blog?.id"
            :title="blog?.title"
            :img="blog?.md_img"
            :slug="blog?.slug"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import porductsApi from "@/api/productsApi.js";
export default {
  data() {
    return {
      blogs: [],
      blog: "",
    };
  },
  methods: {
    async __GET_BLOG() {
      try {
        const blogData = await porductsApi.getBlog(this.$route.params.blog);
        this.blog = blogData?.data?.post;
        this.blogs = blogData?.data?.other_posts;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    await this.__GET_BLOG();
  },
  watch: {
    "$route.params.blog": {
      handler(newSearch, oldSearch) {
        if (newSearch !== oldSearch) {
          this.__GET_BLOG();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang=""></style>
