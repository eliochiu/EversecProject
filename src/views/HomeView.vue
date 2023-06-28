<template>
  <div class="home">
    <el-container>
      <el-header>
        筛选器
      </el-header>
      <el-container>
        <el-aside width="200px">
          指令反馈列表
        </el-aside>
        <el-main>
          详情
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {
  name: 'home-view',
  components: {

  }
}
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  .home .el-container {
    height: 97vh;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>