<template>
  <div class="details">
    <div class="header">
      <el-input
        size="small"
        placeholder="请输入省份名"
        v-model="province"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-search"
        ></i>
      </el-input>
      <el-input
        size="small"
        placeholder="请输入城市名名"
        v-model="city"
      >
        <i
          slot="prefix"
          class="el-input__icon el-icon-search"
        ></i>
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click="search"
      >搜索</el-button>
    </div>
    <el-table
      class="table-style"
      border
      :data="tableData"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="60"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="update_time"
        label="更新日期"
        :formatter="dateFormat"
        width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="confirm_now"
        label="现有确诊"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="confirmed"
        label="累计确诊"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="confirm_add"
        label="新增确诊"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="crued"
        label="累计治愈"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="dead"
        label="累计死亡"
        align="center"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      background
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="page"
      :page-size="size"
      :page-sizes="pageSizes"
      layout="sizes, prev, pager, next, total"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
// import getValue from 'lodash';
export default {
  data() {
    return {
      page: 1,
      size: 10,
      total: 0,
      pageSizes: [10, 20, 30, 50, 100],
      tableData: [],
      allData: [],
      province: '',
      city: '',
    };
  },
  created() {
    this.getDetailsData();
  },
  methods: {
    dateFormat(row) {
      return row.update_time.substring(0, 10);
    },
    async getDetailsData() {
      const res = await this.$axios.get('api/china/details');
      if (res.code === 200) {
        this.allData = res.message;
        this.tableData = this.allData.slice((this.page - 1) * this.size, this.page * this.size);
        this.total = this.allData.length;
      }
    },
    getTabelData2() {
      let data = JSON.parse(JSON.stringify(this.allData));
      this.tableData = data.splice((this.page - 1) * this.size, this.size);
      this.total = this.allData.length;
    },
    //page改变时的回调函数，参数为当前页码
    currentChange(val) {
      console.log('翻页，当前为第几页', val);
      this.page = val;
      this.getTabelData2();
    },
    //size改变时回调的函数，参数为当前的size
    sizeChange(val) {
      console.log('改变每页多少条，当前一页多少条数据', val);
      this.size = val;
      this.page = 1;
      this.getTabelData2();
    },

    search() {
      console.log(this.province, this.city, 'i9i9');
      let temp = this.allData.filter((item) =>
        (this.province ? item.province === this.province : item)&&
        (this.city ? item.city === this.city : item)
      );
      this.tableData = temp;
      this.total = this.tableData.length;
      // this.sizeChange(10);
    },
  },
};
</script>
<style lang="scss" scoped>
.details {
  .header {
    width: 90%;
    margin: 0px auto 20px auto;
    padding: 16px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 2px rgb(177, 176, 176);
    border-radius: 2px;
    overflow: hidden;
    .el-input {
      width: 150px;
      margin-right: 20px;
      float: left;
    }
    .el-button {
      float: left;
    }
  }
  .table-style {
    min-width: 600px;
    max-width: 90%;
    margin: 0 auto;
  }
  .page {
    margin: 10px 0;
  }
}
::v-deep .el-table .el-table__cell {
  padding: 8px 0;
}
</style>