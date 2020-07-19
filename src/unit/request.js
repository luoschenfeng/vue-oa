import axios from 'axios'
import {
  isEmptyObject,
} from '.'

// 创建实例时设置配置的默认值
let instance = axios.create({
  baseURL: process.env.VUE_APP_MOCK_URL,
  timeout: 5000,
});

// 在实例已创建后修改默认值
instance.defaults.headers.common['HTTP_X_REQUESTED_WITH'] = 'XMLHttpRequest';
instance.interceptors.request.use(function (config) {

  // Do something before request is sent
  return config;
}, function (error) {

  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {

  const res = response.data

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return Promise.resolve(res);
}, function (error) {

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

/**
 *
 * @param {object} config
 * @param {string} config.url
 * @param {string} config.method
 * @param {object} [config.params]
 * @param {object} [config.data]
 *
 */
function request({
  url, method = 'get', params, data,
}) {
  let config = {
    url: url,
    method: method,
  }

  if (method === 'get' && !isEmptyObject(params)) {
    config.params = params
  }
  if (method === 'post' && !isEmptyObject(data)) {
    config.data = data
  }

  return instance(config)

}

export default request
