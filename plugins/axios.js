export default function ({ $axios, redirect, error }, inject) {
    const axios = $axios.create({
      baseURL: 'http://185.211.170.253:8008/api/wms/v1',
    });
    axios.setHeader("Content-Type", "application/json");
  
    axios.onRequest((config) => {
      return config;
    });
  
    axios.onResponse((response) => {
      return response;
    });
    
    axios.onError((err) => {
      // const errors = [404, 500];
      // if (errors.includes(err.response.status)) {
      //   error({
      //     statusCode: err.response.status,
      //     message: "This page could not be found",
      //     layout: "error",
      //   });
      // }
      return Promise.reject(err);
    });
    inject("axios", axios);
  }
  
  