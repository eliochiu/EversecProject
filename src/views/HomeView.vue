<template>
  <div class="home">
    <el-container>
      <el-header>
        筛选器
      </el-header>
      <el-container>
        <el-aside width="500px">
          <div class="card-title">
            <div class="title">指令反馈列表</div>
            <div class="number">共 {{ instructions.length }} 条</div>
          </div>
          <div class="card-body">
            <common-card v-for="item in instructions" :key="item.id" :ins="item"></common-card>
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
import CommonCard from "../components/CommonCard.vue"

export default {
  name: 'home-view',
  components: {
    CommonCard
  },

  data() {
    return {
      instructions: [
        {
          id: 12345678,
          type: 1,
          provinceNumber: 31,
          resultNumber: 1231
        },

        {
          id: 87654321,
          type: 2,
          provinceNumber: 31,
          resultNumber: 563
        },

        {
          id: 87654321,
          type: 2,
          provinceNumber: 31,
          resultNumber: 52
        },

        {
          id: 87654321,
          type: 1,
          provinceNumber: 30,
          resultNumber: 77
        },

        {
          id: 87654321,
          type: 2,
          provinceNumber: 31,
          resultNumber: 1774
        },

        {
          id: 87654321,
          type: 2,
          provinceNumber: 31,
          resultNumber: 982
        },

        {
          id: 87654321,
          type: 1,
          provinceNumber: 31,
          resultNumber: 155
        },

        {
          id: 87654321,
          type: 2,
          provinceNumber: 31,
          resultNumber: 155
        },

        {
          id: 87654321,
          type: 1,
          provinceNumber: 31,
          resultNumber: 155
        }
      ]
    }
  }
}
</script>

<style scoped>
.home .el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.home .el-aside {
  padding: 5px;
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
    padding: 20px 0 10px;
    font-size: 16px;

    .title {
      margin: 0 20px;
      padding-left: 10px;
      border-left: 3px solid #409EFF;
    }

    .number {
      margin: 0 20px;
    }
  }

  .card-body {
    margin: 10px;
  }
}

.home .el-main {
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