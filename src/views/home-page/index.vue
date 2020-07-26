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
  getPVBySexStatistics,
} from '@/api/home-page'

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

      getPVBySexStatistics(params)
        .then(data => {
          this.sexStatisticMonthly = data
        })
        .catch(err => {
          this.loading = false
          throw new Error(err)
        })
    },
  },
}
</script>

<style>

</style>
