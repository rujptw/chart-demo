/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-01 14:06:48
 * @FilePath: /chart-demo/demo/src/shims-vue.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// ts引入模块要下载类型文件，类似于 @types/v-charts，否则就要自己在.d.ts文件里声明模块
declare module 'v-charts'
declare module '@jiaminghi/data-view'
declare module 'socket.io-client'
