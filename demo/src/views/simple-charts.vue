<!--
 * @Date: 2020-11-23 15:13:19
 * @LastEditors: sam
 * @LastEditTime: 2020-12-03 17:30:17
 * @FilePath: /chart-demo/demo/src/views/simple-charts.vue
-->
<template>
  <dv-full-screen-container>
    <div class="big-screen__container">
      <div class="bg-container"></div>
      <div class="nav">
        <span>实时监控系统</span>
      </div>
      <dv-loading class="big-loading" v-if="bigLoading">Loading...</dv-loading>
      <ul class="main-container">
        <li class="main-item__container">
          <ul class="item-list">
            <li class="item-small">
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
              <div class="corner__helper"></div>
            </li>
            <li class="item-small">
              <BaseChart
                :data="datas"
                :settings="settings2"
                :width="width"
                :height="height"
                :style="styles"
                :extend="extend"
                :loading="loading"
                :empty="dataEmpty"
              >
              </BaseChart>
              <div class="corner__helper"></div>
            </li>
            <li class="item-small">
              <BaseChart
                :data="datas"
                :settings="settings2"
                :width="width"
                :height="height"
                :style="styles"
                :extend="extend"
                :loading="loading"
                :empty="dataEmpty"
              >
              </BaseChart>
              <div class="corner__helper"></div>
            </li>
          </ul>
        </li>
        <li class="main-item__container medium">
          <ul class="sum_container">
            <li class="sum_item">
              <span class="sum_item-title">销售总额</span
              ><span class="sum_result_item"
                ><dv-digital-flop :config="flopConfig1" style="fontSize:34px"
              /></span>
            </li>
            <li class="sum_item">
              <span class="sum_item-title">线上成交率</span
              ><span class="sum_result_item"
                ><dv-digital-flop :config="flopConfig2" style="fontSize:34px"
              /></span>
            </li>
            <li class="sum_item task_finish">
              <span class="sum_item-title">任务完成率</span
              ><span class="sum_result_item"
                ><dv-percent-pond
                  :config="waterHightConfig"
                  style="fontSize:34px;width:200px;height:100px;"
              /></span>
            </li>
          </ul>
          <ul>
            <li>
              <BaseChart
                :data="datas"
                :settings="settings5"
                :style="styles"
                :extend="extend"
                :loading="loading"
                :empty="dataEmpty"
              >
              </BaseChart>
            </li>
            <div class="corner__helper">11</div>
          </ul>
        </li>
        <li class="main-item__container">
          <ul class="item-list">
            <li class="item-small">
              <BaseChart
                :data="datas2"
                :settings="settings4"
                :width="width"
                :height="height"
                :style="styles"
                :extend="extend"
                :loading="loading"
                :empty="dataEmpty"
              >
              </BaseChart>
              <div class="corner__helper"></div>
            </li>
            <li class="item-small">
              <dv-scroll-ranking-board
                :config="config"
                style="height:280px;width:330px;"
              />
              <div class="corner__helper"></div>
            </li>
            <li class="item-small">
              <dv-capsule-chart
                :config="config"
                style="height:280px;width:330px;"
              />
              <div class="corner__helper"></div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </dv-full-screen-container>
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
      { 日期: '1/7', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/8', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/9', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/10', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/11', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
    ],
  }
  datas2: object = {
    columns: ['日期', '访问用户', '下单用户', '下单率'],
    rows: [
      { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
      { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
      { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
      { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
      { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
      { 日期: '1/7', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/8', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/9', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/10', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/11', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/12', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/13', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/14', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
      { 日期: '1/15', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
    ],
  }
  settings: object = { type: 'line' }
  settings2: object = { type: 'bar' }
  settings3: object = { type: 'histogram' }
  settings4: object = { type: 'pie' }
  settings5: object = {
    type: 'histogram',
    axisSite: { right: ['下单率'] },
    yAxisType: ['KMB', 'percent'],
    yAxisName: ['数值', '比率'],
  }
  width: string = '350px'
  height: string = '300px'
  styles: object = {}
  extend: object = {
    textStyle: {
      color: '#fff',
    },
    legend: {
      textStyle: {
        color: '#fff',
      },
      algin: 'center',
      // left: '15%',
    },
    series: {
      // smooth: false,
    },
    grid: {
      algin: 'center',
    },
  }
  loading = false
  dataEmpty = false

  //配置
  bigLoading: boolean = false

  //dataV配置
  config: object = {
    data: [
      {
        name: '周口',
        value: 55,
      },
      {
        name: '南阳',
        value: 120,
      },
      {
        name: '西峡',
        value: 78,
      },
      {
        name: '驻马店',
        value: 66,
      },
      {
        name: '新乡',
        value: 80,
      },
      {
        name: '信阳',
        value: 45,
      },
      {
        name: '漯河',
        value: 29,
      },
    ],
  }
  subChartsHeight: string = '90%'
  subChartsWidth: string = '100%'
  flopConfig1: object = {
    number: [30],
    content: '{nt}万',
  }
  flopConfig2: object = {
    number: [40],
    content: '{nt}%',
  }
  judgeWidth: boolean = true

  waterHightConfig: object = {
    value: 35,
    borderWidth: 5,
    borderRadius: 10,
    borderGap: 5,
    localGradient: true,
  }
  mounted(): void {
    this.testSocket()
  }

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
  testSocket(): void {
    console.log('simple', this.$socket)
  }
}
</script>

<style lang="scss" scoped>
.big-screen__container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: #fff;
  .bg-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    //TODO:使用prettier-ignore忽略下一行的格式化
    /* prettier-ignore */
    min-width: 1000PX;
    zoom: -1;
    background: url(../assets/images/bg.jpg) no-repeat center 0;
    background-size: cover;
  }
  .nav {
    position: relative;
    font-size: 30px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .big-loading {
    position: relative;
  }
  .main-container {
    // 设置position为relative,防止被背景覆盖
    position: relative;
    display: flex;
  }
}
.main-container {
  margin-left: 15px;
  margin-right: 15px;
  /* prettier-ignore */
  min-width: 1000PX;
  .main-item__container {
    display: flex;
    flex: 1;
    // justify-content: space-between;
    flex-basis: 350px;
    // border: 1px solid orange;
    // align-items: stretch;
    .item-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .main-item__container + .main-item__container {
    margin-left: 20px;
  }
  .medium {
    /* prettier-ignore */
    position:relative;
    min-width: 700px;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid greenyellow;
    .sum_container {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      color: #fff;
      font-size: 24px;
    }
    .sum_container .sum_item {
      flex: 1;
      padding: 15px 5px 0 5px;
      text-align: center;
      .sum_item-title {
      }
      .sum_result_item {
      }
    }
    .sum_item.task_finish {
      display: flex;
      flex-direction: column;
      align-items: center;
      .sum_item-title {
        padding-bottom: 20px;
      }
    }
  }
  .medium::before {
    display: block;
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    /* prettier-ignore */
    border-top: 3PX solid orangered;
    /* prettier-ignore */
    border-left: 3PX solid orangered;
  }
  .medium::after {
    display: block;
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    /* prettier-ignore */
    width: 15PX;
    /* prettier-ignore */
    height: 15PX;
    /* prettier-ignore */
    border-top: 3PX solid orangered;
    /* prettier-ignore */
    border-right: 3PX solid orangered;
  }
  .item-list > .item-small {
    position: relative;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid grey;
  }
  .item-small + .item-small {
    margin-top: 15px;
  }
  .item-small::after {
    display: block;
    content: '';
    position: absolute;
    top: 1px;
    right: 1px;
    /* prettier-ignore */
    width: 15PX;
    /* prettier-ignore */
    height: 15PX;
    /* prettier-ignore */
    border-top: 3PX solid orangered;
    /* prettier-ignore */
    border-right: 3PX solid orangered;
    // transform: translateY(100%);
  }
  .item-small::before {
    display: block;
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    /* prettier-ignore */
    width: 15PX;
    /* prettier-ignore */
    height: 15PX;
    /* prettier-ignore */
    border-top: 3PX solid orangered;
    /* prettier-ignore */
    border-left: 3PX solid orangered;
  }
}
// 边框样式帮助样式
.corner__helper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.corner__helper::after {
  display: block;
  content: '';
  position: absolute;
  bottom: 1px;
  right: 1px;
  /* prettier-ignore */
  width: 15PX;
  /* prettier-ignore */
  height: 15PX;
  /* prettier-ignore */
  border-bottom: 3PX solid orangered;
  /* prettier-ignore */
  border-right: 3PX solid orangered;
}
.corner__helper::before {
  display: block;
  content: '';
  position: absolute;
  bottom: 1px;
  left: 1px;
  /* prettier-ignore */
  width: 15PX;
  /* prettier-ignore */
  height: 15PX;
  /* prettier-ignore */
  border-bottom: 3PX solid orangered;
  /* prettier-ignore */
  border-left: 3PX solid orangered;
}
</style>
