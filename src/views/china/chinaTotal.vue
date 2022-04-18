<template>
  <div class="total">
    <div class="total-digit">
      <div
        class="digit-item"
        v-for="(item) in digitData"
        :key="item.title"
      >
        <p class="digit-item-title">{{item.title}}</p>
        <p class="digit-item-number">{{item.number}}</p>
      </div>
    </div>
    <div class="total-diagram">
      <div class="diagram-map">
        <china-map></china-map>
      </div>
      <div class="diagram-map">
        <div
          ref="china_confirm"
          style="width: 100%;height: 400px"
        ></div>
      </div>
      <div class="diagram-map">
        <div
          ref="china_confirm"
          style="width: 100%;height: 400px"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ChinaMap from '../../components/ChinaMap.vue'

export default {
  data() {
    return {
      digitData: [],
      total: [],
      lastData: {},
    };
  },
  components:{
    ChinaMap,
  },
  created() {
    this.getHeadData();
  },
  methods: {
    // 'https://interface.sina.cn/news/wap/fymap2020_data.d.json'
    getHeadData() {
      axios
        .get('http://localhost:3000/china/map')
        .then((response) => {
          if (response.code === 200) {
            this.total = response.message;
            this.lastData = this.total[this.total.length - 1];
            this.digitData.push(
              {
                title: '现有确诊',
                number: this.lastData.confirm_now,
              },
              {
                title: '累计确诊',
                number: this.lastData.confirmed,
              },
              {
                title: '新增确诊',
                number: this.lastData.confirm_add,
              },
              {
                title: '累计治愈',
                number: this.lastData.cured,
              },
              {
                title: '累计死亡',
                number: this.lastData.died,
              },
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.total {
  padding: 10px;
  .total-digit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .digit-item {
      padding: 25px 60px;
      background-color: white;
      box-shadow: 0 0 5px rgb(177, 176, 176);
      border-radius: 3px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .diagram-map {
      margin-top: 20px;
      flex: 0 0 48%;
      border: 1px solid #000;
    }
  }
}
</style>