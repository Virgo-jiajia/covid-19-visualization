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
          time: '05-01 15:26',
          url: 'https://www.piyao.org.cn/2022-04/27/c_1211641375.htm',
          title: '山东菏泽组织接回滞留上海人员？',
        },
        {
          time: '05-01 11:20',
          url: 'https://www.piyao.org.cn/2022-04/26/c_1211641000.htm',
          title: '山东济宁组织接回滞留上海人员？',
        },
        {
          time: '04-30 21:30',
          url: 'https://www.piyao.org.cn/2022-04/26/c_1211641004.htm',
          title: '到浙大二院临平院区会变黄码？医院被封？',
        },
        {
          time: '04-30 19:23',
          url: 'https://www.piyao.org.cn/2022-04/25/c_1211640611.htm',
          title: '网传杭州“来福士阳性母女23日被正式逮捕”？',
        },
        {
          time: '04-30 16:12',
          url: 'https://www.piyao.org.cn/2022-04/25/c_1211640605.htm',
          title: '关于网传商丘“停水三天备水备水”通知为不实信息',
        },
        {
          time: '04-29 14:25',
          url: 'https://www.piyao.org.cn/2022-04/29/c_1211642436.htm',
          title: '烟台市黄码医院将接收从上海分流的新冠肺炎患者',
        },
        {
          time: '04-29 11:20',
          url: 'https://www.piyao.org.cn/2022-04/29/c_1211642206.htm',
          title: '网传“济南某小区请神婆做法抗疫”视频为不实信息！',
        },
        {
          time: '04-29 09:41',
          url: 'https://www.piyao.org.cn/2022-04/29/c_1211642222.htm',
          title: '网友发帖自称是密接并注销手机号，警方：系谣言，已将其依法处理',
        },
        {
          time: '04-28 20:42',
          url: 'https://www.piyao.org.cn/2022-04/28/c_1211641857.htm',
          title: '造谣传谣，上海13个群组被封停！13人被处罚！',
        },
        {
          time: '04-28 15:46',
          url: 'https://www.piyao.org.cn/2022-04/28/c_1211641852.htm',
          title: '一男子因散布涉疫不实信息被江苏句容警方处罚',
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
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>