<!--
 * @Date: 2020-11-25 15:56:40
 * @LastEditors: sam
 * @LastEditTime: 2020-12-03 13:42:50
 * @FilePath: /chart-demo/demo/src/components/base-chart.vue
-->
<template>
  <ve-chart
    :data="setChart.chartData"
    :settings="setChart.chartSettings"
    :width="setChart.chartWidth"
    :height="setChart.chartHeight"
    :style="setChart.chartStyle"
    :extend="setChart.chartExtend"
    :loading="setChart.chartLoading"
    :data-empty="setChart.chartEmpty"
    class="base_chart--container"
  ></ve-chart>
  <!-- <ve-line :data="setChart.chartData"></ve-line> -->
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
.base_chart--container {
  position: relative;
}
</style>
