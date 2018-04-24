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
  beforeCreate () {
    // this.chartId = 'achart-' + (cid++)
    // this.chartId = 'achart'
  },
  created () {
    if (typeof this.$props.options !== 'undefined') {
      let op = this.$props.options
      this.chartId = 'achart-' + (cid++)
      op.id = this.chartId
      console.log('option', op)
      console.log(this.$el)
      this.chart = new AChart(this.$props.options)
    }
    // this.chartId = 'achart'
  },
  mounted () {
    console.log(this.$props.options)
    if (this.chart) {
      this.chart.render()
    } else {
      if (typeof this.$props.options !== 'undefined') {
        let op = this.$props.options
        op.id = this.chartId
        console.log('option', op)
        console.log(this.$el)
        this.chart = new AChart(this.$props.options)
      }
    }
  },
  computed: {
    series () {
      console.log('change')
      return this.$props.options.series
    }
  },
  watch: {
    series (oldVal, newVal) {
      if (this.chart) {
        console.log(newVal)
        let chartSeries = this.chart.getSeries()
        chartSeries.forEach((val, index, arr) => {
          arr[index].changeData(newVal[index].data)
        })
        this.chart.repaint()
      }
    }
  }
}
</script>

<style lang="css">
</style>
