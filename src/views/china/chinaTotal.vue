<template>
  <div class="total">
    <div class="total-digit">
      <div
        class="digit-item"
        v-for="(item) in digitData"
        :key="item.title"
        :style="{color:item.color}"
      >
        <p class="digit-item-title">{{item.title}}</p>
        <p class="digit-item-number">{{item.number}}</p>
      </div>
    </div>
    <div class="total-diagram">
      <div class="diagram-map">
        <china-map
          ref="map1"
          :dataList="dataListNow"
          isNow
        ></china-map>
      </div>
      <div class="diagram-map">
        <china-map
          ref="map2"
          :dataList="dataListAdd"
        ></china-map>
      </div>
      <div class="diagram-map">
        <trend-diagram
          ref="trend1"
          :date="date"
          :data="localAddData"
          title="新增本土趋势"
          name="新增本土"
          color="#ee735f"
        ></trend-diagram>
      </div>
      <div class="diagram-map">
        <trend-diagram
          ref="trend2"
          :date="date"
          :data="overseaAddData"
          title="境外输入新增趋势"
          name="新增境外输入"
          color="#811d17"
        ></trend-diagram>
      </div>
      <div class="diagram-map">
        <trend-diagram
          ref="trend3"
          :date="date"
          :data="confirmAdd"
          :data1="overseaAdd"
          title="全国疫情新增趋势"
          name="新增确诊"
          name1="新增境外输入"
          color="#ee735f"
          color1="#4e6d9c"
        ></trend-diagram>
      </div>
      <div class="diagram-map">
        <trend-diagram
          ref="trend4"
          :date="date"
          :data="crued"
          :data1="died"
          title="全国累计治愈/死亡趋势"
          name="累计治愈"
          name1="累计死亡"
          color="#4eabb3"
          color1="#4d5054"
        ></trend-diagram>
      </div>
    </div>
  </div>
</template>
<script>
import TrendDiagram from '@/components/TrendDiagram.vue';
import ChinaMap from '../../components/ChinaMap.vue';

export default {
  data() {
    return {
      digitData: [],
      total: [],
      lastData: {},
      dataListNow: [],
      dataListAdd: [],
      date: [],
      localAddData: [],
      overseaAddData: [],
      confirmAdd: [],
      overseaAdd: [],
      crued:[],
      died:[]
    };
  },
  components: {
    ChinaMap,
    TrendDiagram,
  },
  created() {
    this.getHeadData();
    this.getMapData();
    this.getTrendData();
  },
  methods: {
    async getHeadData() {
      const res = await this.$axios.get('api/china/total');
      if (res.code === 200) {
        this.total = res.message;
        this.lastData = this.total[this.total.length - 1];
        this.digitData.push(
          {
            title: '现有确诊',
            number: this.lastData.confirm_now,
            color: '#ee735f',
          },
          {
            title: '累计确诊',
            number: this.lastData.confirmed,
            color: '#d7433c',
          },
          {
            title: '新增确诊',
            number: this.lastData.confirm_add,
            color: '#da7352',
          },
          {
            title: '累计治愈',
            number: this.lastData.cured,
            color: '#4eabb3',
          },
          {
            title: '累计死亡',
            number: this.lastData.died,
            color: '#4e6d9c',
          },
        );
      }
    },
    async getMapData() {
      const res = await this.$axios.get('api/china/map');
      if (res.code === 200) {
        let temp = res.message;
        for (let i = 0; i < temp.length; i++) {
          this.dataListNow.push({
            name: temp[i].city,
            value: temp[i].confirm_now,
          });
          this.dataListAdd.push({
            name: temp[i].city,
            value: temp[i].confirm_add,
          });
        }
      }
      this.$refs.map1.initChart();
      this.$refs.map2.initChart();
    },
    async getTrendData() {
      const res = await this.$axios.get('api/trend/trends');
      if (res.code === 200) {
        this.dataList = res.message;
        for (let i = 0; i < res.message.length; i++) {
          let temp = res.message[i].update_date;
          temp = temp.slice(5, 10);
          this.date.push(temp);
          this.localAddData.push(res.message[i].local_add);
          this.overseaAddData.push(res.message[i].oversea_add);
          this.confirmAdd.push(res.message[i].confirm_add);
          this.overseaAdd.push(res.message[i].oversea_add);
          this.crued.push(res.message[i].crued);
          this.died.push(res.message[i].died);
        }
      }
      this.$refs.trend1.initChart();
      this.$refs.trend2.initChart();
      this.$refs.trend3.initChart();
      this.$refs.trend4.initChart();
    },
  },
};
</script>
<style lang="scss" scoped>
.total {
  padding: 10px;
  .total-digit {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .digit-item {
      padding: 25px 60px;
      background-color: white;
      box-shadow: 0 0 5px rgb(177, 176, 176);
      border-radius: 5px;
      .digit-item-title {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: bold;
      }
      .digit-item-number {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .total-diagram {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .diagram-map {
      margin-top: 20px;
      flex: 0 0 48%;
      background-color: white;
      box-shadow: 0 0 5px rgb(177, 176, 176);
      border-radius: 5px;
    }
  }
}
</style>