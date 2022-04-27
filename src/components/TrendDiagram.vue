<template>
  <div class="local">
    <div
      id="main"
      ref="local_chart"
      style="height:400px;width:100%"
    ></div>
  </div>
</template>
<script>
import echarts from 'echarts';

export default {
  name: 'LocalAdd',
  data() {
    return {};
  },
  props: {
    date: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    data1: { type: Array, default: () => [] },
    data2: { type: Array, default: () => [] },
    title: { type: String, default: '' },
    name: { type: String, default: '' },
    name1: { type: String, default: '' },
    name2: { type: String, default: '' },
    color: { type: String, default: '#ee735f' },
    color1: { type: String, default: '#4e6d9c' },
    color2: { type: String, default: '#4e6d9c' },
  },
  methods: {
    initChart() {
      let myChart = echarts.init(this.$refs.local_chart);
      let option = {
        title: {
          text: this.title,
          subtext: '单位：例',
          padding: [10, 0, 0, 10],
          textStyle: {
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: [this.name, this.name1, this.name2],
        },
        xAxis: [
          {
            type: 'category',
            data: this.date,
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
            },
          },
        ],
        series: [
          {
            name: this.name,
            type: 'line',
            data: this.data,
            symbol: 'none',
            itemStyle: {
              normal: {
                color: this.color, //改变折线点的颜色
                lineStyle: {
                  color: this.color, //改变折线颜色
                },
              },
            },
          },
          {
            name: this.name1,
            type: 'line',
            data: this.data1,
            symbol: 'none',
            itemStyle: {
              normal: {
                color: this.color1, //改变折线点的颜色
                lineStyle: {
                  color: this.color1, //改变折线颜色
                },
              },
            },
          },
          {
            name: this.name2,
            type: 'line',
            data: this.data2,
            symbol: 'none',
            itemStyle: {
              normal: {
                color: this.color2, //改变折线点的颜色
                lineStyle: {
                  color: this.color2, //改变折线颜色
                },
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>