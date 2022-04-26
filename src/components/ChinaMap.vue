<template>
  <div class="map">
    <div
      id="main"
      ref="chart"
      style="height:400px;width:100%"
    ></div>
  </div>
</template>
<script>
import echarts from 'echarts';
// import jsonp from 'jsonp';
import 'echarts/map/js/china.js';

export default {
  name: 'ChinaMap',
  data() {
    return {};
  },
  props: {
    dataList: { type: Array, default: () => [] },
    isNow: { type: Boolean, default: false },
  },
  created() {},
  methods: {
    initChart() {
      // console.log(this.dataList, 'u8u811111');
      // 获取存放地图的dom元素
      let myChart = echarts.init(this.$refs.chart);
      // 指定图表的配置项和数据
      let option = {
        // 地图标题
        title: {
          text: `${this.isNow ? '现有确诊' : '新增确诊'}`,
          x: 'center',
        },
        // 放上鼠标后显示的新
        tooltip: {
          trigger: 'item',
          formatter: function (e) {
            return '地区：' + e.name + '<br/>确诊：' + e.value;
          },
          textStyle: {
            align: 'left',
          },
        },
        // 设置地图数据
        series: [
          {
            type: 'map',
            map: 'china',
            label: {
              show: true,
              color: 'black',
              fontsize: 10,
              formatter: (res) => {
                return res.name;
              },
            },
            itemStyle: {
              // borderColor: 'red',
              borderWidth: 0.5,
            },
            // 选中时候显示内容
            emphasis: {
              label: {
                color: 'black',
              },
              itemStyle: {
                // borderColor: '#00FFFF',
                areaColor: '#c7fffd',
              },
            },
            data: this.dataList,
          },
        ],
        visualMap: {
          type: 'piecewise',
          min: 0,
          max: 10000,
          left: 20,
          bottom: 20,
          showLabel: !0,
          pieces: [
            {
              gt: 10000,
              label: '>10000',
              color: '#b80909',
              symbol: 'roundRect',
            },
            {
              gt: 1000,
              lte: 9999,
              label: '1000 - 9999',
              color: '#e64546',
              symbol: 'roundRect',
            },
            {
              gt: 100,
              lte: 999,
              label: '100 - 999',
              color: '#f57567',
              symbol: 'roundRect',
            },
            {
              gte: 10,
              lte: 99,
              label: '10 - 99',
              color: '#ff9985',
              symbol: 'roundRect',
            },
            {
              gte: 1,
              lte: 9,
              label: '1 - 9',
              color: '#ffe5db',
              symbol: 'roundRect',
            },
            {
              value: 0,
              color: '#ffffff',
              symbol: 'roundRect',
            },
          ],
          show: !0,
        },
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    // this.initChart();
  },
};
</script>
<style lang="scss" scoped>
</style>