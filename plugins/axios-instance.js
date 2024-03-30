import Cookies from "js-cookie";

export default ({ $axios, redirect, error }, inject) => {
  const axiosInstance = $axios.create({
    baseURL: "https://e-shop.ndc.uz/api",
  });

  axiosInstance.onRequest((config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
  axiosInstance.onResponse((response) => {
    return response;
  });

  axiosInstance.onError(async (e) => {
    return Promise.reject(e);
  });
  inject("axiosInstance", axiosInstance);
};
