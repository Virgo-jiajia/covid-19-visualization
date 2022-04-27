<template>
  <div class="news">
    <h2>实时播报</h2>
    <div class="item" v-for="(item,index) in newData" :key="index">
      <p>{{item.time}}</p>
      <a class="item-title" :href="item.url">
        <div>
          {{item.title}}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newData:[
        {
          time:'04月27日  15:00',
          url:'https://www.cs.com.cn/sylm/jsbd/202204/t20220427_6264575.html',
          title:'上海：昨日30534例无症状感染者解除集中隔离医学观察'
        },
        {
          time:'04月27日  16:00',
          url:'https://www.sohu.com/a/541716814_120135071',
          title:'疫情烧进部队台湾一军营爆发群聚9人确诊，却未第一时间通知地方 '
        },
        {
          time:'04月27日  16:00',
          url:'https://www.sohu.com/a/541716814_120135071',
          title:'疫情烧进部队台湾一军营爆发群聚9人确诊，却未第一时间通知地方 '
        },
        {
          time:'04月27日  16:00',
          url:'https://www.sohu.com/a/541716814_120135071',
          title:'疫情烧进部队台湾一军营爆发群聚9人确诊，却未第一时间通知地方 '
        }
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.news {
  width:50%;
  margin: 0 auto;
  h2{
    font-size: 18px;
    margin:8px 0;
    font-weight: 700;
  }
  .item{
    margin:15px 0;
    p{
      color:#b8b8bb;
      text-align: left;
      margin:3px 0;
    }
    a{
      div{
        text-align: left;
        color: #4d5054;
        font-size: 16px;
        padding:8px 12px;
        background: #f1f1f5;
        font-weight: 700;
        line-height: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>