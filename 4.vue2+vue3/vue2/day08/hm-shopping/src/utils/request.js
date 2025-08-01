import axios from "axios";
import {Toast} from "vant";
import store from "@/store";

const request = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 自定义加载图标
  Toast.loading({
    message: '加载中...',
    forbidClick: true, //背景禁止点击
    loadingType: 'spinner', //配置图标
    duration: 0 //不会消失
  });

  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const res = response.data;
  if (res.status === 200) {
    Toast.clear()
    return res;
  } else {
    Toast.fail(res.message);
    console.error(res.message)
    return Promise.reject(res.message);
  }
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request;
