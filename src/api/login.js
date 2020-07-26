import request from '@/unit/request'

/**
 * 登录
 * @param {object} params
 * @param {string} params.username
 * @param {object} params.password
 */
export function login(params) {
  return request({
    url: 'api/login',
    method: 'post',
    params,
  })
}

/**
 * 登出
 */
export function logout() {
  return request({
    url: 'api/logout',
  })
}

/**
 * 用户信息
 */
export function getUserInfo() {
  return request({
    url: 'api/userInfo',
  })
}
