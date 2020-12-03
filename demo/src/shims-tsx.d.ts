/*
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-12-01 09:29:19
 * @FilePath: /chart-demo/demo/src/shims-tsx.d.ts
 */
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

// 将socket挂载到window上以供全局使用
declare global {
  interface Window {
    $socket: any
  }
}
