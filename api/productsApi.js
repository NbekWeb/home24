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
  async getCategory(category) {
    return await $nuxt.$axiosInstance.get(`/categories/${category}`);
  },
  async getBrand(brand) {
    return await $nuxt.$axiosInstance.get(`/brands/${brand}`);
  },
  async getProducts(category) {
    return await $nuxt.$axiosInstance.get(`/products${category}`);
  },
  async getProduct(slug) {
    return await $nuxt.$axiosInstance.get(`/products/${slug}`);
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
