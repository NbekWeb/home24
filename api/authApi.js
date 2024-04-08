export default {
  async postSendCode(phone) {
    return await $nuxt.$axiosInstance.post("auth/check", phone);
  },
  async postRegister(phone) {
    return await $nuxt.$axiosInstance.post("auth/register", phone);
  },
  async getMe() {
    const token = localStorage.getItem("token");
    if (token) {
      $nuxt.$axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      return await $nuxt.$axiosInstance.get("profile/me");
    }
  },
};
