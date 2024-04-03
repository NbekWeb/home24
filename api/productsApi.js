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
  async getProducts(category){
    return await $nuxt.$axiosInstance.get(`/products?category=${category}`);
  }
};
