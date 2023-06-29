<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1" class="first-line">
      <i class="el-icon-s-data"></i>
      <span slot="title">数据上报情况概览</span>
    </el-menu-item>

    <el-menu-item index="2">
      <i class="el-icon-data-line"></i>
      <span slot="title">事件上报情况概览</span>
    </el-menu-item>

    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">数据考核四性统计</span>
    </el-menu-item>

    <el-menu-item index="4">
      <i class="el-icon-s-check"></i>
      <span slot="title">数据稽核</span>
    </el-menu-item>

    <el-submenu index="5" class="multi-index">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span>设备监测统计</span>
      </template>
      <el-menu-item index="5-1">设备监测</el-menu-item>
      <el-menu-item index="5-2">设备查询</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


  
<script>
export default {
  name: "common-aside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  text-align: left;
  height: 100vh;
  border-right: none;
  border-radius: 10px 10px 0 0;
  margin: 0 20px;
  /* margin-top: 20px; */
  color: #000;

  .el-menu-item {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
  }

  .first-line {
    margin-top: 10px;
  }
}
</style>

<style>
.el-submenu__title {
  height: 60px !important;
  line-height: 60px !important;
  font-size: 16px !important;
}
</style>