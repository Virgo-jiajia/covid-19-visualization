<template>
  <div class="area">
    <el-tabs
      type="card"
      v-model="activeName"
    >
      <el-tab-pane
        label="高风险地区"
        name="first"
      >
        <high-area v-loading="loading" :highData="highList"></high-area>
      </el-tab-pane>
      <el-tab-pane
        label="中风险地区"
        name="second"
      >
        <high-area v-loading="loading" :highData="middelList"></high-area>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import HighArea from '@/components/HighMiddleArea.vue';
export default {
  components: { HighArea },
  data() {
    return {
      activeName: 'first',
      highList: [],
      middelList: [],
      loading:false,
    };
  },
  created() {
    this.getAreaData();
  },
  methods: {
    async getAreaData() {
      this.loading = true;
      const res = await this.$axios.get('https://diqu.gezhong.vip/api.php');
      if (res.msg === '查询成功') {
        this.highList = res.data.highlist;
        this.middelList = res.data.middlelist;
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.area {
}
</style>