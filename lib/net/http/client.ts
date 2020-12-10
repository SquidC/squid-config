import axios from "axios";

// create an axios instance
const service = axios.create({
  timeout: 50000, // request timeout
  headers: { "Content-Type": "application/json;charset=UTF-8" },
  // 抓包
  // proxy: {
  //   host: "127.0.0.1",
  //   port: 8888,
  // }
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    /**
     * http的code
     */
    return response;
  },
  (error) => {
    return error;
  }
);

export default service;
