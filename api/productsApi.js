export default {
  async getCatalog() {
    return await $nuxt.$axiosInstance.get("/categories?limit=8");
  },
  async getBanners() {
    return await $nuxt.$axiosInstance.get("/banners");
  },
  async getCategories() {
    return await $nuxt.$axiosInstance.get("/categories");
  },
  async getProducts(category) {
    return await $nuxt.$axiosInstance.get(`/products?category=${category}`);
  },
  async getSearch(search) {
    return await $nuxt.$axiosInstance.get(`/search?search=${search}`);
  },
  async getBrands() {
    return await $nuxt.$axiosInstance.get("/brands");
  },
  async getPopulars() {
    return await $nuxt.$axiosInstance.get("/products?limit=5");
  },
  async getBlogs() {
    return await $nuxt.$axiosInstance.get("/posts");
  },
  async getBlog(slug) {
    return await $nuxt.$axiosInstance.get(`/posts/${slug}`);
  },
};
