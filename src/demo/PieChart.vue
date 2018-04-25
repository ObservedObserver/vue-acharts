<template lang="html">
  <A-Charts :options="options" />
</template>

<script>
export default {
  name: 'pie-chart',
  data () {
    return {
      options: {
        width: 600,
        height: 400,
        legend: null,
        seriesOptions: {
          pieCfg: {
            allowPointSelect: true,
            labels: {
              distance: 40,
              label: {},
              renderer (value, item) {
                return value + ' ' + (item.point.percent * 100).toFixed(2) + '%'
              }
            }
          }
        },
        tooltip: {
          pointRenderer (point) {
            return (point.percent * 100).toFixed(2) + '%'
          }
        },
        series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ]
        }]
      }
    }
  }
}
</script>

<style lang="css">
</style>
