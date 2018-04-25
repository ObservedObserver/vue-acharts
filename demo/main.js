// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ACharts from '@/components/ACharts.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('ACharts', ACharts)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
