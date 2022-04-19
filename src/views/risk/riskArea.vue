<template>
  <div>风险区域模块</div>
</template>
<script>
export default {
  data() {
     return {
       shuju:{}
     }
   },
   created() {
     this.getAreaData();
   },
   methods: {
     async getAreaData() {
      const res = await this.$axios.get('https://diqu.gezhong.vip/api.php');
      if (res.msg === '查询成功') {
        // console.log(res.data.highlist);
      }
    },
   }
}
</script>
<style></style>