<!--
 * @Date: 2020-11-23 15:13:19
 * @LastEditors: sam
 * @LastEditTime: 2020-11-27 17:09:22
 * @FilePath: /chart-demo/demo/src/views/simple-charts.vue
-->
<template>
  <div class="big-screen__container" @click="countNum">
    <div>test组件</div>
    <Test></Test>
    <p>事件: {{ count }}</p>
    <p>computed: {{ compNum }}</p>
  </div>
</template>

<script lang="ts">
import Test from '../components/test.vue'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {
    Test,
  },
})
export default class extends Vue {
  count: number = 1
  @Prop() title?: string

  // @Prop() isVisible!: boolean;
  countNum(): void {
    this.count++
  }
  get compNum(): number {
    return this.count
  }
  set compNum(val: number) {
    this.count += val
  }
  @Watch('count')
  watchCount(nVal: number, oVal: number): void {
    console.log('newVal', nVal)
  }
}
</script>

<style lang="scss"></style>
