<template>
  <div class="news">
    <div class="header">
    <h2>辟谣信息</h2>
    <el-button
      type="primary"
      size="mini"
      icon="el-icon-search"
      @click="search"
    >点击查询</el-button>
    </div>
    <div
      class="item"
      v-for="(item,index) in newData"
      :key="index"
    >
      <p>{{item.time}}</p>
      <a
        class="item-title"
        :href="item.url"
      >
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
      url:'https://www.piyao.org.cn/2020yqpy/',
      newData: [
        {
          time: '04-27 15:26:19',
          url: 'https://www.piyao.org.cn/2022-04/27/c_1211641375.htm',
          title: '山东菏泽组织接回滞留上海人员？',
        },
        {
          time: '04-26 10:53:15',
          url: 'https://www.piyao.org.cn/2022-04/26/c_1211641000.htm',
          title: '山东济宁组织接回滞留上海人员？',
        },
        {
          time: '04-26 11:00:12',
          url: 'https://www.piyao.org.cn/2022-04/26/c_1211641004.htm',
          title: '到浙大二院临平院区会变黄码？医院被封？',
        },
        {
          time: '04-25 10:25:59',
          url: 'https://www.piyao.org.cn/2022-04/25/c_1211640611.htm',
          title: '网传杭州“来福士阳性母女23日被正式逮捕”？',
        },
        {
          time: '04-25 10:25:59',
          url: 'https://www.piyao.org.cn/2022-04/25/c_1211640605.htm',
          title: '关于网传商丘“停水三天备水备水”通知为不实信息',
        },
      ],
    };
  },
  created() {
  },
  methods: {
    search(){
      window.location.href = this.url;
    }
  },
};
</script>
<style lang="scss" scoped>
.news {
  width: 50%;
  margin: 0 auto;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 18px;
      margin: 8px 0;
      font-weight: 700;
    }
  }
  .item {
    margin: 15px 0;
    p {
      color: #b8b8bb;
      text-align: left;
      margin: 3px 0;
    }
    a {
      div {
        text-align: left;
        color: #4d5054;
        font-size: 16px;
        padding: 8px 12px;
        background: #f1f1f5;
        font-weight: 700;
        line-height: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>