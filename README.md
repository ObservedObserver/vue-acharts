# vue-acharts

> 基于vue的acharts图标组件

## 使用
在使用前，需现在全局倒入ACharts。这是由于目前尚未解决npm安装acharts出现的各种问题。
```html
 <script src="http://g.tbcdn.cn/bui/acharts/1.0.15/acharts-min.js"></script>
```
vue-acharts组件会从全局`window.AChart`来获取到ACharts。

注册全局组件
```js
import Vue from 'vue'
import ACharts from 'vue-acharts/components/ACharts'

// register component to use
Vue.component('ACharts', ACharts)
```

使用组件(demo)
```js
<template>
  <div id="app">
    <A-Charts :options="options" />
    <A-Charts :options="options" />
    <A-Charts :options="options" />
    <button type="button" name="button" @click="createData">Change</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      option: {
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
        },
        {
          name: 'Shanghai',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
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
  }
}
</script>

<style>
</style>

```
vue-acharts组件会帮助你监控option中数据的变化，并根据变化进行实时渲染。

### Props
+ options

### Methods
+ init

### 注意事项
vue-echarts会自定义dom的id，格式为`acharts-${integer}`，注意在使用时规避id命名冲突。

### 本地开发测试
```bash
npm i
npm run dev
```
[http://localhost:8080](http://localhost:8080)
