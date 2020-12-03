/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-03 17:34:59
 * @FilePath: /chart-demo/demo/src/router/index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
const Charts = () => import('../views/charts.vue')
const simpleCharts = () => import('../views/simple-charts.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts,
  },
  {
    path: '/simple-charts',
    name: 'simpleCharts',
    component: simpleCharts,
  },
]

const router = new VueRouter({
  routes,
})

export default router
