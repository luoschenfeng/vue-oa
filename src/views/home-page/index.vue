<template>
  <div>
    home-page
    <pre>
      {{ sexStatisticMonthly }}
    </pre>
  </div>
</template>

<script>
import {
  getPVBySexStatisticsData,
} from '@/api/home-page'

import {
  SUCCESS_HTTP_REQUEST_STATUS,
} from '@/statusMap'

export default {
  data() {

    return {
      requestParams: {},
      sexStatisticMonthly: {},
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.randerSexStatisticLineChart()
    },
    randerSexStatisticLineChart() {
      this.loading = true
      const params = this.requestParams

      getPVBySexStatisticsData(params).then(res => {
        if (res.status ===  SUCCESS_HTTP_REQUEST_STATUS) {
          this.loading = false
          this.sexStatisticMonthly = res.data
        } else {

          this.$message({
            showClose: true,
            message: this.$t('HTTP_STATUS_UNKNOWN'),
          });
        }
      }).catch(err => {
        this.loading = false
        throw new Error(err)
      })
    },
  },
}
</script>

<style>

</style>
