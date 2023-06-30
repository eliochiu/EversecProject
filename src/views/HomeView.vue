<template>
  <div id="home">
    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <main-aside></main-aside>
        </el-aside>
        <el-main>
          <main-detail></main-detail>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MainAside from "../components/MainAside.vue";
import MainHeader from "../components/MainHeader";
import MainDetail from "../components/MainDetail";

export default {
  name: 'home-view',
  components: {
    // CommonCard
    MainAside,
    MainHeader,
    MainDetail
  },

  methods: {

  },

  data() {
    return {

    }
  }
}
</script>

<style scoped>
#home  .el-header {
  padding-left: 20px;
  padding-top: 20px;
  color: #333;
  text-align: center;
}

#home  .el-aside {
  padding: 5px;
  margin: 20px;
  border: 0.5px solid #B3C0D1;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  text-align: center;
}

#home  .el-main {
  padding: 0;
  margin: 20px;
  margin-left: 0;
}

#home  .el-container {
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