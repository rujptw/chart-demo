/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-04 13:54:45
 * @FilePath: /chart-demo/demo/src/shims-vue.d.ts
 */

declare module '*.vue' {
  import Vue from 'vue'
  // 需要声明接口，才能在原型上挂载
  interface Vue {
    $socket: any
  }
  export default Vue
}

// ts引入模块要下载类型文件，类似于 @types/v-charts，否则就要自己在.d.ts文件里声明模块
declare module 'v-charts'
declare module '@jiaminghi/data-view'
declare module 'socket.io-client'
declare module 'eslint-plugin-vue'
