<template>
  <div class="policy">
    <h3>出行政策查询</h3>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="search"
    >点击查询</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:'https://wx.wind.com.cn/unitedweb/cmsapp/Sites/TravelPolicy/index.html#/'
    };
  },
  created() {},
  methods: {
    search(){
      window.location.href = this.url;
    }
  },
};
</script>
<style lang="scss" scoped>
.policy {
  h3 {
    font-size: 20px;
    margin: 25px;
  }
}
</style>