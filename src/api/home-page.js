import request from '@/unit/request'

/**
 *
 * @param {object} [params]
 */
export function getPVBySexStatistics(params) {
  return request({
    url: 'api/statistics/PVBySex',
    params,
  })
}
