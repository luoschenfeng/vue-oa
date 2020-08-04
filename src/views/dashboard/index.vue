<template>
  <div>
    dashboard
    <router-link :to="{name: 'Router'}">
      Router
    </router-link>
    <pre>
      {{ sexStatisticMonthly }}
    </pre>
  </div>
</template>

<script>
import {
  getPVBySexStatistics,
} from '@/api/dashboard'

export default {
  name: 'Dashboard',
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
