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
  name: 'CruedAddDied',
  data() {
    return {
      dataList: [],
      date: [],
      crued: [],
      died:[]
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
          this.crued.push(res.message[i].crued);
          this.died.push(res.message[i].died);
        }
      }
      this.initChart();
    },
    initChart() {
      let myChart = echarts.init(this.$refs.local_chart);
      let option = {
        title: {
          text: '全国累计治愈/死亡趋势',
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
          data: ['累计治愈','累计死亡'],
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
            name: '累计治愈',
            type: 'line',
            data: this.crued,
            symbol: "none",
            itemStyle: {
              normal: {
                color: '#4eabb3', //改变折线点的颜色
                lineStyle: {
                  color: '#4eabb3', //改变折线颜色
                },
              },
            },
          },
          {
            name: '累计死亡',
            type: 'line',
            data: this.died,
            symbol: "none",
            itemStyle: {
              normal: {
                color: '#4d5054', //改变折线点的颜色
                lineStyle: {
                  color: '#4d5054', //改变折线颜色
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