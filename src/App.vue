<template>
  <div id="app">
    <A-Charts :options="options" />
    <button type="button" name="button" @click="createData">Change</button>
  </div>
</template>

<script>
import ACharts from '@/components/ACharts.vue'
export default {
  name: 'App',
  data () {
    return {
      option: {
        id: 'acharts',
        width: 950,
        height: 500,
        plotCfg: {
          margin: [50, 50, 80]
        },
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
        }]
      }
    }
  },
  mounted () {
    // setInterval(() => {
    //   this.option.series[0].data = this.option.series[0].data.map((val) => {
    //     return parseInt(20 * Math.random())
    //   })
    //   console.log(this.options.series[0].data)
    //   // console.log(this.option.series[0].data)
    // }, 3000)
  },
  methods: {
    createData () {
      this.option.series = [{
        name: 'Tokyo',
        data: []
      }]
      for (let i = 0; i < 12; i++) {
        this.option.series[0].data.push(parseInt(Math.random() * 20))
      }
    }
  },
  computed: {
    options: {
      cache: false,
      get () {
        console.log('app change')
        return this.option
      }
    }
  },
  components: {
    ACharts
  }
}
</script>

<style>
</style>
