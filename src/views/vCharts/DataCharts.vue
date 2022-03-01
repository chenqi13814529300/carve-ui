<!--  -->
<template>
  <div class="box">
    <ve-histogram
      :data="chartData"
      :colors="chartColor"
      :legend-visible="true"
      :loading="loading"
      :data-empty="dataEmpty"
      :extend="extend"
      :settings="chartSettings"
    >
    </ve-histogram>
    <ve-line :data="chartData"></ve-line>
    <ve-pie :data="chartData"></ve-pie>
    <ve-map
      height="120vh"
      :settings="mapSettings"
      :colors="mapColor"
      :data="mapData"
    ></ve-map>
    <ve-funnel :data="chartData"></ve-funnel>
    <ve-ring :data="chartData"></ve-ring>
    <ve-waterfall :data="chartData"></ve-waterfall>
    <ve-radar :data="chartData"></ve-radar>
    <ve-heatmap :data="chartData"></ve-heatmap>
    <ve-scatter :data="chartData"></ve-scatter>
    <ve-candle :data="chartData"></ve-candle>
    <ve-gauge :data="mapData"> </ve-gauge>
    <!-- <ve-tree :data="mapData"></ve-tree> -->
    <!-- <ve-bmap :settings="baiduSetting" ></ve-bmap> -->

  </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/echarts-amap/dist/echarts-amap.min.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"></script>
<script>
import "v-charts/lib/style.css";
import "echarts/extension/bmap/bmap";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      options:{

      },
      chartSettings: {
        xAxisType: "time",
        area: true,
        yAxisName: ["订单总数", "订单金额"],
        axisSite: { right: ["orderAmount"] },
        labelMap: { orderCount: "订单数量", orderAmount: "订单金额" },
      },
      extend: {
        series: {
          symbolSize: 10,
          label: {
            normal: {
              show: true,
            },
          },
        },
      },
      chartColor: ["#89dd47", "#3cabf4"],
      loading: false,
      dataEmpty: false,
      chartData: {
        columns: ["date", "orderCount", "orderAmount"],
        rows: [
          { date: "2018-11-01", orderCount: 10, orderAmount: 1093 },
          { date: "2018-11-02", orderCount: 20, orderAmount: 2230 },
          { date: "2018-11-03", orderCount: 33, orderAmount: 3623 },
          { date: "2018-11-04", orderCount: 50, orderAmount: 6423 },
          { date: "2018-11-05", orderCount: 80, orderAmount: 8492 },
          { date: "2018-11-06", orderCount: 60, orderAmount: 6293 },
          { date: "2018-11-07", orderCount: 20, orderAmount: 2293 },
          { date: "2018-11-08", orderCount: 60, orderAmount: 6293 },
          { date: "2018-11-09", orderCount: 50, orderAmount: 5293 },
          { date: "2018-11-10", orderCount: 30, orderAmount: 3293 },
          { date: "2018-11-11", orderCount: 20, orderAmount: 2293 },
          { date: "2018-11-12", orderCount: 80, orderAmount: 8293 },
          { date: "2018-11-13", orderCount: 100, orderAmount: 10293 },
          { date: "2018-11-14", orderCount: 10, orderAmount: 1293 },
          { date: "2018-11-15", orderCount: 40, orderAmount: 4293 },
        ],
      },
      //   map开始
      mapData: {
        columns: ["位置", "税收", "人口", "面积"],
        rows: [
          { 位置: "吉林", 税收: 123, 人口: 123, 面积: 92134 },
          { 位置: "北京", 税收: 1223, 人口: 2123, 面积: 29234 },
          { 位置: "上海", 税收: 2123, 人口: 1243, 面积: 94234 },
          { 位置: "浙江", 税收: 4123, 人口: 5123, 面积: 29234 },
        ],
      },
      mapColor: ["#89dd47", "#3cabf4", "red"],
      mapSettings: {
        selectData: true,
        selectedMode: "multiple",
        roam: false,
      },
      //   百度地图
      baiduSetting: {
        key: "WZvBFAWXmCmAdEMICaNGUi0eItVdGteB",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.options = {
      bmap: {
        key: "WZvBFAWXmCmAdEMICaNGUi0eItVdGteB",
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyle: {},
      },
    };
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="less">
</style>