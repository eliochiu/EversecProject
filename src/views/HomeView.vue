<template>
  <div class="home">
    <el-container>
      <el-header>
        筛选器
      </el-header>
      <el-container>
        <el-aside width="400px">
          <div class="card-title">
            <div class="title">指令反馈列表</div>
            <div class="number">共 {{ count }} 条</div>
          </div>
          <div class="card-body">

          </div>
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

  },

  data() {
    return {
      count: 12
    }
  }
}
</script>

<style>
.home {
  background-color: #fff;
}

.home .el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.home .el-aside {
  margin: 10px;
  border: 0.5px solid #B3C0D1;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  text-align: center;

  .card-title {
    display: flex;
    justify-content: space-between;
    height: 20px;
    line-height: 20px;
    padding: 20px 0;
    font-size: 16px;

    .title {
      margin: 0 20px;
      padding-left: 5px;
      border-left: 2px solid #409EFF;
    }

    .number {
      margin: 0 20px;
    }
  }
}

.home .el-main {
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