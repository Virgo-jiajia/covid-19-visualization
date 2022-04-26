<template>
  <div>
    <el-table
      class="table-style"
      border
      :data="highData"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <div class="comms">
            <p
              class="comm"
              v-for="(item,index) in props.row.communitys"
              :key="index"
            >{{item}}</p>
          </div>
        </template>
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
        prop="county"
        label="街道"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    highData: { type: Array, default: () => [] },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.comms {
  display: flex;
  justify-content: space-around;
  align-content: center;
  .comm{
    padding:0 10px;
  }
}
</style>