/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-11-30 15:31:32
 * @FilePath: /chart-demo/demo/src/main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import dataV from '@jiaminghi/data-view'
import { io } from './request.config'
Vue.config.productionTip = false

Vue.use(VCharts)
Vue.use(dataV)

console.log('io', io)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
