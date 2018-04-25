<template lang="html">
  <A-Charts ref="chart" :options="option" />
</template>

<script>
import config from './theme/dark.js'
export default {
  name: 'line-chart',
  data () {
    return {
      option: {
        width: 600,
        height: 400,
        title: {
          text: '一年的平均温度'
        },
        subTitle: {
          text: 'Source: WorldClimate.com'
        },
        xAxis: {
          categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          title: {
            text: '温度',
            rotate: -90
          }
        },
        tooltip: {
          valueSuffix: '°C',
          shared: true,
          crosshairs: true
        },
        series: [{
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
          name: 'Shanghai',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
      }
    }
  },
  mounted () {
    console.log(this.$refs)
    this.$refs.chart.setTheme(config)
  }
}
</script>

<style lang="css">
</style>
