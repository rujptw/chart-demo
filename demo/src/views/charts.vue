<!--
 * @Date: 2020-11-12 19:30:52
 * @LastEditors: sam
 * @LastEditTime: 2020-11-27 14:56:23
 * @FilePath: /chart-demo/demo/src/views/charts.vue
-->

<template>
  <div class="screen_container">
    <div id="web_bg"></div>
    <div class="screen_title_container">
      <h1 class="screen_title">
        <span class="time-stamp">{{ time }}</span>
        <span>业务分析系统</span>
        <dv-decoration-6 style="width:300px;height:30px;" />
      </h1>
      <dv-decoration-2 style="width:100%;height:5px;" />
    </div>
    <div class="charts_container">
      <ul class="charts_list-container">
        <li class="charts_item-container">
          <div class="charts_item">
            <dv-border-box-1>
              <p class="charts_item-title">用户分析</p>
              <ve-histogram
                :data="histoData"
                :width="subChartsHeight"
                :height="subChartsWidth"
                :extend="extendConfig"
              ></ve-histogram>
            </dv-border-box-1>
          </div>

          <div class="charts_item">
            <dv-border-box-1>
              <p class="charts_item-title">用户分析2</p>
              <ve-bar
                :data="histoData"
                :width="subChartsHeight"
                height="240px"
                :extend="extendConfig"
              ></ve-bar>
            </dv-border-box-1>
          </div>
          <div class="charts_item">
            <dv-border-box-1>
              <p class="charts_item-title">用户访问量</p>
              <ve-pie
                :data="pieData"
                :width="subChartsHeight"
                :height="subChartsWidth"
                :settings="piechartSettings"
                :extend="extendConfig"
              ></ve-pie>
            </dv-border-box-1>
          </div>
        </li>
        <li class="charts_item-container medium">
          <div class="border-container">
            <dv-border-box-12>
              <ul class="sum_container">
                <li class="sum_item">
                  <span class="sum_item-title">销售总额</span
                  ><span class="sum_result_item"
                    ><dv-digital-flop
                      :config="flopConfig1"
                      style="fontSize:34px"
                  /></span>
                </li>
                <li class="sum_item">
                  <span class="sum_item-title">线上成交率</span
                  ><span class="sum_result_item"
                    ><dv-digital-flop
                      :config="flopConfig2"
                      style="fontSize:34px"
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
                <!-- <li class="sum_item"><dv-percent-pond :config="waterHightConfig" style="fontSize:34px;width:200px;height:100px;" /></li> -->

                <!-- <li class="sum_item special-item"><span  class="sum_item-title">销售总额</span><span class="sum_result_item">线上成交率</span></li> -->
                <!-- <li class="sum_item"><span class="sum_item-title"><dv-digital-flop :config="flopConfig1" style="fontSize:34px" /></span><span class="sum_item-title"><dv-digital-flop :config="flopConfig2" style="fontSize:34px" /></span></li>  -->
              </ul>
            </dv-border-box-12>
          </div>
          <div class="medium_container">
            <dv-border-box-8>
              <ve-map
                height="700px"
                :extend="extendMapConfig"
                :judge-width="judgeWidth"
              ></ve-map>
            </dv-border-box-8>
          </div>
        </li>
        <li class="charts_item-container">
          <div class="charts_item">
            <dv-border-box-1>
              <p class="charts_item-title">用户分析3</p>
              <ve-line
                :data="histoData"
                :settings="lineChartSettings"
                :width="subChartsHeight"
                :height="subChartsWidth"
                :extend="extendConfig"
              ></ve-line>
            </dv-border-box-1>
          </div>
          <div class="charts_item">
            <dv-border-box-1>
              <p class="charts_item-title">活动分析</p>
              <ve-waterfall
                :data="waterChartData"
                :width="subChartsHeight"
                :height="subChartsWidth"
                :extend="extendConfig"
              ></ve-waterfall>
            </dv-border-box-1>
          </div>
          <div class="charts_item">
            <dv-border-box-1>
              <p class="charts_item-title">用户访问量2</p>
              <ve-ring
                :data="pieData"
                :settings="circleSettings"
                :width="subChartsHeight"
                :height="subChartsWidth"
                :extend="extendConfig"
              ></ve-ring>
            </dv-border-box-1>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var chinaGeoCoordMap = {
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
}
var chinaDatas = [
  [
    {
      name: '黑龙江',
      value: 4,
    },
  ],
  [
    {
      name: '内蒙古',
      value: 5,
    },
  ],
  [
    {
      name: '吉林',
      value: 8,
    },
  ],
  [
    {
      name: '辽宁',
      value: 3,
    },
  ],
  [
    {
      name: '河北',
      value: 9,
    },
  ],
  [
    {
      name: '天津',
      value: 2,
    },
  ],
  [
    {
      name: '山西',
      value: 8,
    },
  ],
  [
    {
      name: '陕西',
      value: 1,
    },
  ],
  [
    {
      name: '甘肃',
      value: 2,
    },
  ],
  [
    {
      name: '宁夏',
      value: 3,
    },
  ],
  [
    {
      name: '青海',
      value: 0,
    },
  ],
  [
    {
      name: '新疆',
      value: 7,
    },
  ],
  [
    {
      name: '西藏',
      value: 5,
    },
  ],
  [
    {
      name: '四川',
      value: 9,
    },
  ],
  [
    {
      name: '重庆',
      value: 7,
    },
  ],
  [
    {
      name: '山东',
      value: 6,
    },
  ],
  [
    {
      name: '河南',
      value: 5,
    },
  ],
  [
    {
      name: '江苏',
      value: 3,
    },
  ],
  [
    {
      name: '安徽',
      value: 2,
    },
  ],
  [
    {
      name: '湖北',
      value: 6,
    },
  ],
  [
    {
      name: '浙江',
      value: 16,
    },
  ],
  [
    {
      name: '福建',
      value: 10,
    },
  ],
  [
    {
      name: '江西',
      value: 6,
    },
  ],
  [
    {
      name: '湖南',
      value: 5,
    },
  ],
  [
    {
      name: '贵州',
      value: 2,
    },
  ],
  [
    {
      name: '广西',
      value: 1,
    },
  ],
  [
    {
      name: '海南',
      value: 1,
    },
  ],
  [
    {
      name: '上海',
      value: 1,
    },
  ],
]

var convertData = function(data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = chinaGeoCoordMap[dataItem[0].name]
    var toCoord = [116.4551, 40.2539]
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: fromCoord,
          value: dataItem[0].value,
        },
        {
          coord: toCoord,
        },
      ])
    }
  }
  return res
}
var series = []
;[['北京市', chinaDatas]].forEach(function(item) {
  console.log(item)
  series.push(
    {
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'arrow', //箭头图标
        symbolSize: 3, //图标大小
      },
      lineStyle: {
        normal: {
          width: 1, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: 0.3, //尾迹线条曲直度
        },
      },
      data: convertData(item[1]),
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        //涟漪特效
        period: 5, //动画时间，值越小速度越快
        brushType: 'stroke', //波纹绘制方式 stroke, fill
        scale: 2, //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        normal: {
          show: true,
          position: 'right', //显示位置
          offset: [5, 0], //偏移设置
          formatter: function(params) {
            //圆环显示文字
            return params.data.name
          },
          fontSize: 13,
        },
        emphasis: {
          show: true,
        },
      },
      symbol: 'circle',
      symbolSize: function(val) {
        return 5 + val[2] * 1 //圆环大小
      },
      itemStyle: {
        normal: {
          show: false,
          color: '#f00',
        },
      },
      data: item[1].map(function(dataItem) {
        return {
          name: dataItem[0].name,
          value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
        }
      }),
    },
    //被攻击点
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        period: 4,
        brushType: 'stroke',
        scale: 4,
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          //offset:[5, 0],
          color: '#0f0',
          formatter: '{b}',
          textStyle: {
            color: '#0f0',
          },
        },
        emphasis: {
          show: true,
          color: '#f60',
        },
      },
      symbol: 'pin',
      symbolSize: 50,
      data: [
        {
          name: item[0],
          value: chinaGeoCoordMap[item[0]].concat([10]),
        },
      ],
    }
  )
})
export default {
  data() {
    this.chartSettings = {
      showLine: ['下单用户'],
    }
    this.piechartSettings = {
      offsetY: 120,
      radius: 50,
    }
    this.circleSettings = {
      dimension: '日期',
      metrics: '访问用户',
      radius: [20, 40],
      //offsetParent：获取带有定位的最近父元素
      offsetY: 120,
    }
    //     this.mapchartSettings = {
    //         position: 'china',
    //         dimension: '位置',
    //         metrics: ['人口', '面积'],
    //         dataType: {
    //         '面积': 'KMB'
    //         }
    //   }
    this.lineChartSettings = {
      metrics: ['访问用户', '下单用户', '下单率'],
      dimension: ['日期'],
    }
    return {
      time: null,
      subChartsHeight: '90%',
      subChartsWidth: '100%',
      extendConfig: {
        textStyle: {
          color: '#fff',
        },
        legend: {
          textStyle: {
            color: '#fff',
          },
          algin: 'center',
          left: '15%',
        },
        series: {
          smooth: false,
        },
        grid: {
          algin: 'center',
          left: '15%',
        },
      },
      extendMapConfig: {
        title: {
          text: '各省份用户数(万人)',
          left: '40%',
          top: '7%',
          textStyle: {
            color: '#fff',
            fontSize: 25,
          },
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(166, 200, 76, 0.82)',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          // ticket, callback ⬇️，这个函数的参数
          formatter: function(params) {
            //根据业务自己拓展要显示的内容
            var res = ''
            var name = params.name
            var value = params.value[params.seriesIndex + 1]
            res =
              "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value
            return res
          },
        },
        backgroundColor: '#013954',
        visualMap: {
          //图例值控制
          min: 0,
          max: 20,
          calculable: true,
          show: true,
          color: ['#f00', '#fc9700', '#ffde00', '#00eaff'],
          textStyle: {
            color: '#fff',
          },
        },
        geo: {
          map: 'china',
          zoom: 1.2,
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false, //是否允许缩放
          itemStyle: {
            normal: {
              color: 'rgba(51, 69, 89, .5)', //地图背景色
              borderColor: '#516a89', //省市边界线00fcff 516a89
              borderWidth: 1,
            },
            emphasis: {
              color: 'rgba(37, 43, 61, .5)', //悬浮背景
            },
          },
        },
        series: series,
      },
      mapData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          { 位置: '吉林', 税收: 123, 人口: 123, 面积: 92134 },
          { 位置: '北京', 税收: 1223, 人口: 2123, 面积: 29234 },
          { 位置: '上海', 税收: 2123, 人口: 1243, 面积: 94234 },
          { 位置: '浙江', 税收: 4123, 人口: 5123, 面积: 29234 },
        ],
      },
      histoData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
      pieData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 },
        ],
      },
      waterChartData: {
        columns: ['活动', '时间'],
        rows: [
          { 活动: '吃饭', 时间: 4 },
          { 活动: '睡觉', 时间: 10 },
          { 活动: '打豆豆', 时间: 5 },
        ],
      },
      flopConfig1: {
        number: [30],
        content: '{nt}万',
      },
      flopConfig2: {
        number: [40],
        content: '{nt}%',
      },
      judgeWidth: true,
      waterHightConfig: {
        value: 35,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
        localGradient: true,
      },
    }
  },
  mounted() {
    setInterval(() => {
      this.change()
    }, 5000)
    setInterval(() => {
      this.getNow()
    }, 1000)
  },
  methods: {
    getNow() {
      let dt = new Date()
      let y = dt.getFullYear()
      let mt = dt.getMonth() + 1
      let day = dt.getDate()
      let h = dt.getHours() //获取时
      let m = dt.getMinutes() //获取分
      let s = dt.getSeconds() //获取秒
      this.time =
        y + '年' + mt + '月' + day + '日' + '-' + h + '时' + m + '分' + s + '秒'
      console.log('time', this.time)
    },
    change() {
      let row = [
        { 日期: '1/1', 访问用户: 7393, 下单用户: 293, 下单率: 0.56 },
        { 日期: '1/2', 访问用户: 8530, 下单用户: 3930, 下单率: 0.78 },
        { 日期: '1/3', 访问用户: 8923, 下单用户: 2923, 下单率: 0.98 },
        { 日期: '1/4', 访问用户: 9723, 下单用户: 1623, 下单率: 0.45 },
        { 日期: '1/5', 访问用户: 6792, 下单用户: 3992, 下单率: 0.5 },
        { 日期: '1/6', 访问用户: 2593, 下单用户: 2493, 下单率: 0.7 },
      ]
      let pieRow = [
        { 日期: '1/1', 访问用户: 1393 },
        { 日期: '1/2', 访问用户: 3530 },
        { 日期: '1/3', 访问用户: 2923 },
        { 日期: '1/4', 访问用户: 1723 },
        { 日期: '1/5', 访问用户: 3792 },
        { 日期: '1/6', 访问用户: 4593 },
      ]
      let waterRow = [
        { 活动: '吃饭', 时间: 4 },
        { 活动: '睡觉', 时间: 10 },
        { 活动: '打豆豆', 时间: 5 },
      ]
      let newRow = row.map(item => {
        for (const key in item) {
          if (key !== '日期') {
            let random = Math.random()
            item[key] = item[key] * random
            return item
          }
        }
      })
      let newPieRow = pieRow.map(item => {
        for (const key in item) {
          if (key !== '日期') {
            let random = Math.random()
            item[key] = item[key] * random
            return item
          }
        }
      })
      let newWaterRow = waterRow.map(item => {
        for (const key in item) {
          if (key !== '活动') {
            let random = Math.random()
            item[key] = item[key] * random
            return item
          }
        }
      })

      this.histoData = { ...this.histoData, rows: newRow }
      this.pieData = { ...this.pieData, rows: newPieRow }
      this.waterChartData = { ...this.waterChartData, rows: newWaterRow }
      let random = Math.floor(Math.random() * 100)
      this.flopConfig1 = { ...this.flopConfig1, number: [random] }
      this.flopConfig2 = { ...this.flopConfig2, number: [random] }
      this.waterHightConfig = { ...this.waterHightConfig, value: random }
    },
  },
}
</script>

<style lang="scss">
.screen_container {
  width: 100%;
  height: 100%;
  font-family: PingFang SC;
  // background-position: center;
  // background-image :url(../assets/bg.jpg);
  // background-repeat: repeat-y;
  // background-attachment:fixed;//设置背景图片是否会随页面滚动或固定;
  // background-size:contain;//设置背景图片的大小
  #web_bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    z-index: -10;
    zoom: 1;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/images/bg.jpg);
    background-position: center 0;
  }
  .screen_title_container {
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
  }
  .screen_title {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: 80px;
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 36px;
    font-weight: 500;
    color: #fff;
    .time-stamp {
      position: absolute;
      right: 50px;
      bottom: 30px;
      font-size: 18px;
      color: #ccc;
    }
  }
  .charts_container {
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
  }
}
.charts_list-container {
  display: flex;
  justify-content: space-between;
}
.charts_item-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0;
  flex-basis: 400px;
  .charts_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 275px;
  }
  .charts_item + .charts_item {
    margin-top: 15px;
  }
}
.charts_item-container.medium {
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  min-width: 600px;
  height: 100%;
  .border-container {
    margin-bottom: 20px;
  }
  .sum_container {
    display: flex;
    color: #fff;
    font-size: 24px;
  }
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
// .sum_item + .sum_item{
//     border-left:2px solid #ccc;
// }
.charts_item {
  .charts_item-title {
    text-align: center;
    font-size: 18px;
    color: #fff;
    padding-bottom: 10px;
  }
}
</style>
