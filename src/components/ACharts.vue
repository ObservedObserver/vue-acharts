<template lang="html">
  <div :id="chartId" ></div>
</template>

<script>
var cid = 0
// import AChart from 'acharts'
var AChart = window.AChart
export default {
  name: 'a-charts',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      chart: null,
      chartId: 'achart'
    }
  },
  methods: {
    init () {
      let op = this.$props.options
      this.chartId = 'achart-' + (cid++)
      op.id = this.chartId
      this.chart = new AChart(this.$props.options)
    }
  },
  beforeCreate () {
    // this.chartId = 'achart-' + (cid++)
    // this.chartId = 'achart'
  },
  created () {
    if (typeof this.$props.options !== 'undefined') {
      this.init()
    }
    // this.chartId = 'achart'
  },
  mounted () {
    console.log(this.$props.options)
    if (this.chart) {
      this.chart.render()
    } else {
      if (typeof this.$props.options !== 'undefined') {
        this.init()
        this.chart.render()
      }
    }
  },
  computed: {
    series () {
      return this.$props.options.series
    }
  },
  watch: {
    series (oldVal, newVal) {
      if (this.chart) {
        let chartSeries = this.chart.getSeries()
        chartSeries.forEach((val, index, arr) => {
          arr[index].changeData(newVal[index].data)
        })
        this.chart.repaint()
      } else {
        this.init()
        this.chart.render()
      }
    }
  }
}
</script>

<style lang="css">
</style>
