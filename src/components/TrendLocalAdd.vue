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
    return {
      dataList: [],
      date: [],
      data: [],
    };
  },
  props: {},
  created() {
    this.getLocalAdd();
  },
  methods: {
    async getLocalAdd() {
      const res = await this.$axios.get('api/trend/trends');
      if (res.code === 200) {
        this.dataList = res.message;
        for (let i = 0; i < res.message.length; i++) {
          let temp = res.message[i].update_date;
          temp = temp.slice(5, 10);
          this.date.push(temp);
          this.data.push(res.message[i].local_add);
        }
      }
      this.initChart();
    },
    initChart() {
      let myChart = echarts.init(this.$refs.local_chart);
      let option = {
        title: {
          text: '新增本土趋势',
          subtext: '单位：例',
          padding: [10,0,0,10],
          textStyle: {
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['新增本土'],
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
            name: '新增本土',
            type: 'line',
            data: this.data,
            symbol: "none",
            itemStyle: {
              normal: {
                color: '#ee735f', //改变折线点的颜色
                lineStyle: {
                  color: '#ee735f', //改变折线颜色
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