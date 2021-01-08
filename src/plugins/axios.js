"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {//axios的配置
  baseURL:"http://music.kele8.cn"
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);//根据配置创建axios实例
//axios ajax请求的前置配置
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // config.url +='?token=12345678990-=fdsa3456';
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
//axios 请求之后后置配置 得到服务器的结果
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
//vue的插件规范
//install 方法就是插件安装方法
//把 axios做成 vue的插件
Plugin.install = function(Vue) {//插件配置
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
    $http:{
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin)

export default Plugin;
