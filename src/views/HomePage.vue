<template>
  <div>
    <el-container class="main-container">
      <el-header>
        <p style="fontSize:16px">疫情数据平台</p>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="this.$route.path"
            router
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1-1">
              <template slot="title">
                <i class="el-icon-data-line"></i>
                <span>国内疫情</span>
              </template>
              <el-menu-item index="/china/total">总体趋势</el-menu-item>
              <el-menu-item index="/china/data">数据概览</el-menu-item>
            </el-submenu>

            <el-submenu index="1-2">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span>国外疫情</span>
              </template>
              <el-menu-item index="/abroad/total">总体趋势</el-menu-item>
            </el-submenu>

            <el-submenu index="1-3">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>风险查询</span>
              </template>
              <el-menu-item index="/risk/area">风险区域</el-menu-item>
              <el-menu-item index="/risk/policy">出行政策</el-menu-item>
            </el-submenu>

            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-notebook-2"></i>
                <span>实时播报</span>
              </template>
              <el-menu-item index="/realtime/news">实时播报</el-menu-item>
              <el-menu-item index="/realtime/rumor">辟谣信息</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view class="container"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
.main-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .el-header {
    background-color: #333744;
    color: white;
    text-align: center;
    line-height: 60px;
  }
  .el-container {
    .el-aside {
      background-color: #333744;
      color: #333;
      text-align: left;
      .el-menu {
        border-right: 0;
      }
    }
    .el-main {
      background-color: #f9fbfc;
      padding:0;
      .el-breadcrumb {
        width: 100%;
        padding: 10px;
        position: fixed;
        top:60px;
        background: #f1f3f6;
        border-bottom: 1px solid #dfe3e9;
        z-index: 9999;
      }
      .container {
        padding:20px;
        margin-top: 35px;
        color: #333;
        text-align: center;
        height: calc(100vh - 120px);
        overflow: scroll;
      }
    }
  }
}
</style>
