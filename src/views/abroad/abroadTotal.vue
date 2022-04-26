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
        <foreign-map ref="map1" :dataList="dataListNow" isNow></foreign-map>
      </div>
      <div class="diagram-map">
        <foreign-map ref="map2" :dataList="dataListAdd" isNow></foreign-map>
      </div>
    </div>
  </div>
</template>
<script>
import ForeignMap from '@/components/ForeignMap.vue';

export default {
  data() {
    return {
      digitData: [],
      total: [],
      lastData: {},
      dataListNow:[],
      dataListAdd:[],
    };
  },
  components: {
    ForeignMap,
  },
  created() {
    this.getHeadData();
    this.getMapData();
  },
  methods: {
    async getHeadData() {
      const res = await this.$axios.get('api/aborad/total');
      if (res.code === 200) {
        this.total = res.message;
        this.lastData = this.total[this.total.length - 1];
        this.digitData.push(
          {
            title: '现有确诊',
            number: this.lastData.confirm_now,
            color:'#ee735f'
          },
          {
            title: '累计确诊',
            number: this.lastData.confirmed,
            color:'#d7433c'
          },
          {
            title: '新增确诊',
            number: this.lastData.confirm_add,
            color:'#da7352'
          },
          {
            title: '累计治愈',
            number: this.lastData.cured,
            color:'#4eabb3'
          },
          {
            title: '累计死亡',
            number: this.lastData.died,
            color:'#4e6d9c'
          },
        );
      }
    },
    async getMapData() {
      const res = await this.$axios.get('api/aborad/map');
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
  },
};
</script>
<style lang="scss" scoped>
.total {
  padding: 10px;
  .total-digit {
    width:1200px;
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
    width:1200px;
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