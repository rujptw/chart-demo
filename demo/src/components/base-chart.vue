<!--
 * @Date: 2020-11-25 15:56:40
 * @LastEditors: sam
 * @LastEditTime: 2020-12-01 17:07:52
 * @FilePath: /chart-demo/demo/src/components/base-chart.vue
-->
<template>
  <div class="test-container">
    <ve-chart
      :data="setChart.chartData"
      :settings="setChart.chartSettings"
      :width="setChart.chartWidth"
      :height="setChart.chartHeight"
      :style="setChart.chartStyle"
      :extend="setChart.chartExtend"
      :loading="setChart.chartLoading"
      :data-empty="setChart.chartEmpty"
    ></ve-chart>
    <!-- <ve-line :data="setChart.chartData"></ve-line> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import chartMixin from '../mixins/chart.mixin'
@Component
export default class baseChart extends mixins(chartMixin) {
  get setChart(): object {
    return {
      chartData: this.data,
      chartSettings: this.settings,
      chartWidth: this.width,
      chartHeight: this.height,
      chartStyle: this.styles,
      chartExtend: this.extend,
      chartLoading: this.loading,
      chartEmpty: this.empty,
    }
  }
  set setChart(output) {}
  mounted() {
    console.log('setChart', this.setChart)
  }
}
</script>

<style lang="scss">
@import '../assets/test';
</style>
