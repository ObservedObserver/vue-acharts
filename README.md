# vue-acharts

> 基于vue的acharts图表组件

使用[vue2.5.2+](https://cn.vuejs.org/)与[acharts1.0.15+](https://github.com/acharts/acharts)构建

## 使用
在使用前，需在全局使用cdn等方式引入ACharts。这是由于目前尚未解决npm安装acharts出现的各种问题。
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
vue-acharts会自动设定dom的id，格式为`acharts-${integer}`。这使得在使用的时候无需传入id配置项，vue-acharts会自动帮你设置各个图表的id。

### 事件
+ 图表支持的事件类型：

  + plotclick 图表边框内部的点击事件
    + ev.x 点击的x坐标
    + ev.y 点击的y坐标
    + ev.shape 点击的图形
  + plotmove 图表边框内部的移动事件
    + ev.x 移动到的x坐标
    + ev.y 移动到的y坐标
    + ev.shape 移动到的图形
  + plotover 进入图表的边框内部
    + ev.x 进入的x坐标
    + ev.y 进入的y坐标
    + ev.shape 移动到的图形
  + plotout 移出图表边框
  + seriesactived 图表序列激活，例如折线图激活
    + ev.series 图表序列
  + seriesunactived 图表序列取消激活
    + ev.series 图表序列
  + seriesitemclick 点击图表序列子项，例如饼图的一个子项（弧形）被点击
    + ev.series 图表序列
    + ev.seriesItem 图表序列子项
  + seriesitemselected 选中图表序列的一个子项，例如柱状图的一项被选中
    + ev.series 图表序列
    + ev.seriesItem 图表序列子项
  + seriesitemunselected 取消选中图表序列的一个子项
    + ev.series 图表序列
    + ev.seriesItem 图表序列子项
  + tooltipshow 提示信息显示
  + tooltiphide 提示信息隐藏

使用代码
```js
<A-Chart :options="options" @plotclick="yourAction">
...
methods: {
  yourAction (ev) {
    console.log(ev.x, ev.y, ev.shape)
  }
}
```
### 本地开发测试
```bash
npm i
npm run dev
```
[http://localhost:8080](http://localhost:8080)
