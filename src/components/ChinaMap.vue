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
    return {
      dataList: [
        // { name: '南海诸岛', value: 0 },
        // { name: '北京', value: 54 },
        // { name: '天津', value: 13 },
        // { name: '上海', value: 4000 },
        // { name: '重庆', value: 75 },
        // { name: '河北', value: 1543 },
        // { name: '河南', value: 843 },
        // { name: '云南', value: 151 },
        // { name: '辽宁', value: 19 },
        // { name: '黑龙江', value: 15 },
        // { name: '湖南', value: 69 },
        // { name: '安徽', value: 60 },
        // { name: '山东', value: 39 },
        // { name: '新疆', value: 2 },
        // { name: '江苏', value: 3551 },
        // { name: '浙江', value: 104 },
        // { name: '江西', value: 36 },
        // { name: '湖北', value: 1052 },
        // { name: '广西', value: 33 },
        // { name: '甘肃', value: 744 },
        // { name: '山西', value: 93 },
        // { name: '内蒙古', value: 7 },
        // { name: '陕西', value: 22 },
        // { name: '吉林', value: 4 },
        // { name: '福建', value: 18 },
        // { name: '贵州', value: 5 },
        // { name: '广东', value: 98 },
        // { name: '青海', value: 145 },
        // { name: '西藏', value: 0 },
        // { name: '四川', value: 44 },
        // { name: '宁夏', value: 4554 },
        // { name: '海南', value: 22 },
        // { name: '台湾', value: 3 },
        // { name: '香港', value: 5 },
        // { name: '澳门', value: 5 },
      ],
    };
  },
  created() {},
  methods: {
    initChart() {
      // 获取存放地图的dom元素
      let myChart = echarts.init(this.$refs.chart);
      // 指定图表的配置项和数据
      let option = {
        // 地图标题
        title: {
          text: '中国疫情地图',
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
              color: '#c7fffd',
              symbol: 'roundRect',
            },
          ],
          show: !0,
        },
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    async getMapData() {
      const res = await this.$axios.get('api/china/map');
      if (res.code === 200) {
        let temp = res.message;
        for (let i = 0; i < temp.length; i++) {
          this.dataList.push({
            name: temp[i].city,
            value: temp[i].confirm_now,
          });
        }
      }
    },
  },
  mounted() {
    this.getMapData();
    this.initChart();
  },
};
</script>
<style lang="scss" scoped>
</style>