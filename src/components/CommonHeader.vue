<template>
  <el-container>
    <div class="left-container">
      <h1>工信部移动互联网安全威胁监测与处置系统</h1>
    </div>
    <div class="right-container">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <el-menu-item index="1">数据统计</el-menu-item>
        <el-menu-item index="2">常态化上报</el-menu-item>
        <el-menu-item index="4">指令协同</el-menu-item>
        <el-menu-item index="5">知识库管理</el-menu-item>
        <el-menu-item index="6">数据大屏</el-menu-item>
        <el-menu-item index="7">盖亚监控</el-menu-item>
        <el-menu-item index="8">可视化管理</el-menu-item>
        <el-menu-item index="9">接口管理</el-menu-item>
        <el-menu-item index="10">700号文件指令</el-menu-item>
        <el-menu-item index="11">数据中台</el-menu-item>
      </el-menu>
    </div>
  </el-container>
</template>


          
<script>
export default {
  name: "common-header",
  data() {
    return {
      activeIndex: '',
      activeIndex2: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>

.left-container {
  flex: 1;

  h1 {
    font-size: 16px;
    text-align: left;
    color: #fff;
  }

}

.right-container {
  flex: 3;
  .el-menu {
    background-color: rgba(255, 255, 255, 0);
    border: none;

    .el-menu-item {
      font-size: 12px;
      color: #fff;
      border: none;
    }
  }
}



</style>