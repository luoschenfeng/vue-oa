<template>
  <div
    :class="className"
    :style="{height: height, width: width}"
  >
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'BarChart',
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '300px',
    },
    chartData: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData() {
      this.initEchart()
    },
  },
  methods: {
    initEchart() {
      let echart = echarts.init(this.$el, 'dark')

      echart.setOption({
        legend: {},
        tooltip: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {},
        dataset: {
          source: this.chartData,
          dimensions: [
            'date',
            'male',
            'female',
          ],
        },

        series: [
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'male',
              seriesName: 'male',
            },
          },
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'female',
              seriesName: 'female',
            },
          },
        ],
      })
    },
  },
}
</script>

<style>

</style>
