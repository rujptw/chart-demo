/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-01 13:54:52
 * @FilePath: /chart-demo/demo/src/main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import dataV from '@jiaminghi/data-view'
import { Socket } from './request.config'
Vue.config.productionTip = false

Vue.use(VCharts)
Vue.use(dataV)

Vue.prototype.$sockt = Socket
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
