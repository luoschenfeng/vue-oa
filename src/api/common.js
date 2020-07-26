import request from '@/unit/request'

/**
 * post请求前需要向后端请求hash
 */
export function getHash() {
  return request({
    url: 'api/hash',
  })
}
