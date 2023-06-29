<template>
  <el-container>
    <div class="left-container">
      <h1>工信部移动互联网安全威胁监测与处置系统</h1>
    </div>
    <div class="middle-container">
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
    <div class="right-container">
      <div class="user-image">
        <template>
          <div class="demo-type">
            <div>
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
          </div>
        </template>
      </div>
      <div class="user-name">
        <el-dropdown>
          <span class="el-dropdown-link">
            用户名<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>test</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
.el-container {

  .left-container {
    h1 {
      font-size: 20px;
      text-align: left;
      color: #fff;
      margin-right: 5px;
    }

  }

  .middle-container {
    flex: 5;

    .el-menu {
      background-color: rgba(255, 255, 255, 0);
      border: none;
      display: flex;
      justify-content: space-evenly;

      .el-menu-item {
        font-size: 16px;
        color: #fff;
        border: none;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
      }

      .el-menu-item:hover {
        color: #409EFF;
      }
    }
  }

  .right-container {
    display: flex;
    width: 120px;
    height: 40px;
    justify-content: space-between;

    .demo-type {
      margin-top: 10px;
    }

    .el-dropdown-link  {
      color: #fff;
      font-size: 16px;
    }


  }

}
</style>