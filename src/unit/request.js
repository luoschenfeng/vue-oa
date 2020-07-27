import axios from 'axios'
import {
  Message,
} from 'element-ui'
import {
  i18n,
} from '@/lang'

import {
  isEmptyObject,
} from '.'
import {
  HTTP_REQUEST_SUCCESS_STATUS_CODE,
} from '@/constMap'
import {
  getToken,
} from '@/unit/token'

// 创建实例时设置配置的默认值
let instance = axios.create({
  baseURL: process.env.VUE_APP_MOCK_URL,
  timeout: 5000,
});

// 在实例已创建后修改默认值
instance.defaults.headers.common['HTTP_X_REQUESTED_WITH'] = 'XMLHttpRequest'
const token = getToken()

instance.defaults.headers.common['token'] = token

instance.interceptors.request.use(function (config) {

  // Do something before request is sent
  return config
}, function (error) {

  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {

  const {
    data: res,
  } = response

  const {
    status, data = {},
  } = res

  if (status === HTTP_REQUEST_SUCCESS_STATUS_CODE) {

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return Promise.resolve(data)
  } else {
    try {
      const {
        code = 0, message = '',
      } = res

      if (message) {
        Message.error(message)
        throw new Error(message)
      } else {
        if (code) {

          // 4000 -  5000 权限
          // 5000 - 6000 验证失败
          let prompt = ''

          if (4000 <= code < 5000) {
            prompt = `code ${code} 权限未定义`
          } else if (5000 <= code < 6000) {
            prompt = `code ${code} 验证失败`
          } else {
            prompt = `code ${code}`
          }
          Message.error(prompt)

          // throw code also
          throw new Error(prompt)
        } else {
          Message.error(i18n.t('request.HTTP_STATUS_UNKNOWN'))
          throw new Error(i18n.t('request.HTTP_STATUS_UNKNOWN'))
        }
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }

}, function (err) {

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(err)
})

/**
 * @description 请求封装
 * @param {object} config
 * @param {string} config.url
 * @param {string} config.method
 * @param {object} [config.params]
 *
 */
function request({
  url, method = 'get', params = {},
}) {
  let config = {
    url: url,
    method: method,
  }

  if (method === 'get' && !isEmptyObject(params)) {
    config.params = params
  }
  if (method === 'post' && !isEmptyObject(params)) {
    config.data = params
  }

  return instance(config)

}

export default request
