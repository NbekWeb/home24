
import Cookies from 'js-cookie';

export default ({ $axios, redirect, error }, inject) => {
  const axiosInstance = $axios.create({
    baseURL: "http://185.211.170.253:8008/api/wms/v1",
  });
  // axiosInstance.setHeader("Content-Type", "application/json");

  axiosInstance.onRequest((config) => {
    // console.log('saAS');
    // console.log('$cookies.get("token")', Cookies.get('token'));
    const token = Cookies.get('token');
    if (token) {
      // console.log('dada',token)
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
