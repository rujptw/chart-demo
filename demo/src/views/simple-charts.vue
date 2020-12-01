<!--
 * @Date: 2020-11-23 15:13:19
 * @LastEditors: sam
 * @LastEditTime: 2020-12-01 17:21:59
 * @FilePath: /chart-demo/demo/src/views/simple-charts.vue
-->
<template>
  <div class="big-screen__container">
    <dv-loading>Loading...</dv-loading>
    <BaseChart
      :data="datas"
      :settings="settings"
      :width="width"
      :height="height"
      :style="styles"
      :extend="extend"
      :loading="loading"
      :empty="dataEmpty"
    >
    </BaseChart>
  </div>
</template>

<script lang="ts">
import BaseChart from '../components/base-chart.vue'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {
    BaseChart,
  },
})
export default class simpleCharts extends Vue {
  datas: object = {
    columns: ['日期', '访问用户', '下单用户', '下单率'],
    rows: [
      { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
      { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
      { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
      { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
      { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
      { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
    ],
  }
  settings: object = { type: 'line' }
  width: string = ''
  height: string = ''
  styles: object = {}
  extend: object = {}
  loading: boolean = false
  dataEmpty: boolean = false
  // count: number = 1
  // @Prop() title?: string
  // // @Prop() isVisible!: boolean;
  // countNum(): void {
  //   this.count++
  // }
  // get compNum(): number {
  //   return this.count
  // }
  // set compNum(val: number) {
  //   this.count += val
  // }
  // @Watch('count')
  // watchCount(nVal: number, oVal: number): void {
  //   console.log('newVal', nVal)
  // }
}
</script>

<style lang="scss">
.big-screen__container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
