/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-03 17:29:36
 * @FilePath: /chart-demo/demo/src/main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import VCharts from 'v-charts'
import dataV from '@jiaminghi/data-view'
import { Socket } from './request.config'
Vue.config.productionTip = false

Vue.use(VCharts)
Vue.use(dataV)

Vue.prototype.$socket = Socket
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
