<template lang="html">
  <div :id="chartId" ></div>
</template>

<script>
var cid = 0
// import AChart from 'acharts'
var AChart = window.AChart
const events = [
  'plotclick',
  'plotmove',
  'plotover',
  'plotout',
  'seriesactived',
  'seriesunactived',
  'seriesitemclick',
  'seriesitemselected',
  'seriesitemunselected',
  'tooltipshow',
  'tooltiphide'
]
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
      chartId: 'achart',
      theme: null
    }
  },
  methods: {
    init () {
      let op = this.$props.options
      op.id = this.chartId
      if (this.theme) {
        op.theme = this.theme
      }
      this.chart = new AChart(op)

      events.forEach((ev) => {
        this.chart.on(ev, (params) => {
          this.$emit(ev, params)
        })
      })
    },
    setTheme (theme) {
      let Theme = AChart.Theme
      // Theme[this.chartId] = Theme.initTheme(Theme.Base, theme)
      // this.theme = Theme[this.chartId]
      Theme.ch = Theme.initTheme(Theme.Base, theme)
      this.theme = Theme.ch
      console.log('props', this.$props)
      if (typeof this.$props.options !== 'undefined') {
        this.init()
        this.chart.render()
      }
      // this.chart.render()
    }
  },
  beforeCreate () {
    // this.chartId = 'achart-' + (cid++)
    // this.chartId = 'achart'
  },
  created () {
    this.chartId = 'achart-' + (cid++)
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
