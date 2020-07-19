import request from '@/unit/request'

/**
 *
 * @param {object} [params]
 */
export function getPVBySexStatisticsData(params) {
  return request({
    url: 'api/statistics/PVBySex',
    params,
  })
}
