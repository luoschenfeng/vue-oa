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
    chartData: {
      handler: function () { this.initEchart() },
      deep: true,
    },
  },
  mounted() {
    this.$el.addEventListener('resize', function () { console.log(1) })
  },
  methods: {
    initEchart() {
      this.chart = echarts.init(this.$el, 'dark')

      this.chart.setOption({
        legend: {},
        tooltip: {},
        grid: {
          top: 50,
          left: '2%',
          right: '2%',
          bottom: '2%',
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
            animationDuration: 6000,
          },
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'female',
              seriesName: 'female',
            },
            animationDuration: 6000,
          },
        ],
      })
    },

    // chartResize() {
    //   this.chart.resize()
    // },
  },
}
</script>

<style>

</style>
