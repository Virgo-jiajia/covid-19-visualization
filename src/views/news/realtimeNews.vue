<template>
  <div class="news">
    <h2>实时播报</h2>
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
      newData: [
        {
          time: '05月03日  14:14',
          url: 'https://www.sohu.com/a/543409126_162758',
          title: '山东自5月4日起核酸检测对所有人员免费',
        },
        {
          time: '05月03日  14:10',
          url: 'https://www.jiemian.com/article/7416348.html',
          title: '台媒：台湾新增23102例本土新冠病例，新增5例死亡病例',
        },
        {
          time: '05月03日  13:59',
          url: 'https://www.sohu.com/a/541716814_120135071',
          title: '5月3日起北京迎风街道四里社区核酸检测重要通知',
        },
        {
          time: '05月03日  13:23',
          url: 'http://bj.bendibao.com/news/202253/314028.shtm',
          title: '5月3日起三天北京星城街道第五社区核酸检测最新通知',
        },
        {
          time: '05月03日  13:00',
          url: 'https://baijiahao.baidu.com/s?id=1731779993326826660&wfr=spider&for=pc',
          title: '山东5月5日起进各类场所和参加聚集性活动全部查验核酸检测证明',
        },
        {
          time: '05月03日  12:54',
          url: 'https://baijiahao.baidu.com/s?id=1731779532430783668&wfr=spider&for=pc',
          title: '山西省太行山国有林管理局统筹疫情防控全力推进造林绿化工作',
        },
        {
          time: '05月03日  12:50',
          url: 'https://www.163.com/dy/article/H6EOFK4O0537RI7E.html',
          title: '山东老人因疫情被困家中',
        },
        {
          time: '05月03日  12:38',
          url: 'https://m.gmw.cn/baijia/2022-05/03/1302928843.html',
          title: '5月2日河南省新增本土确诊病例2例、新增本土无症状感染者4例',
        },
        {
          time: '05月03日  12:32',
          url: 'https://www.sohu.com/a/543383743_121106854',
          title: '内蒙古第一女子监狱创新疫情期间罪犯教育改造新模式 ',
        },
        {
          time: '05月03日  11:43',
          url: 'http://bj.bendibao.com/news/202253/314015.shtm',
          title: '5月3日至5日北京万寿路街道西街16号社区免费核酸检测通知',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.news {
  width: 50%;
  height: 80vh;
  margin: 0 auto;
  h2 {
    font-size: 18px;
    margin: 8px 0;
    font-weight: 700;
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