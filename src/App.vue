<template>
  <div id="app">
    <bar-chart />
    <line-chart />
    <pie-chart />
    <!-- <A-Charts :options="options" @plotclick="testPlotClick"/>
    <A-Charts :options="options" />
    <A-Charts :options="options" /> -->
    <button type="button" name="button" @click="createData">Change</button>
  </div>
</template>

<script>
// import ACharts from '@/components/ACharts.vue'
import BarChart from '@/demo/BarChart.vue'
import LineChart from '@/demo/LineChart.vue'
import PieChart from '@/demo/PieChart.vue'
export default {
  name: 'App',
  data () {
    return {
      option: {
        width: 600,
        height: 400,
        // plotCfg: {
        //   margin: [50, 50, 80]
        // },
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
  },
  methods: {
    createData () {
      this.option.series = this.option.series.map((val) => {
        // val.name = ""
        val.data = val.data.map(val => parseInt(Math.random() * 20))
        return val
      })
    },
    testPlotClick (ev) {
      console.log(ev.x, ev.y, ev.shape)
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
    BarChart,
    LineChart,
    PieChart
  }
}
</script>

<style>
</style>
