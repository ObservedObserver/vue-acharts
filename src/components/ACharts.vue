<template lang="html">
  <div id="acharts"></div>
</template>

<script>
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
      chart: null
    }
  },
  created () {
    if (typeof this.$props.options !== 'undefined') {
      this.chart = new AChart(this.$props.options)
    }
  },
  mounted () {
    console.log(this.$props.options)
    if (this.chart) {
      this.chart.render()
    } else {
      if (typeof this.$props.options !== 'undefined') {
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
      console.log(newVal)
      let chartSeries = this.chart.getSeries()[0]
      chartSeries.changeData(newVal[0].data)
      this.chart.repaint()
    }
  }
}
</script>

<style lang="css">
</style>
