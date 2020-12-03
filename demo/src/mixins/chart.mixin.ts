/*
 * @Date: 2020-12-01 10:11:25
 * @LastEditors: sam
 * @LastEditTime: 2020-12-03 17:10:08
 * @FilePath: /chart-demo/demo/src/mixins/chart.mixin.ts
 */
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class chartMixin extends Vue {
  @Prop() data!: object
  @Prop() settings!: object
  @Prop() width!: string
  @Prop() height!: string
  @Prop() styles?: object
  @Prop() extend?: object
  @Prop() loading!: boolean
  @Prop() empty!: boolean
  test(): void {
    console.log('test')
  }
}
