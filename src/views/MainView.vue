<template>
  <div id="main">
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <common-aside></common-aside>
        </el-aside>
        <el-main>
          <home-view></home-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import CommonAside from "../components/CommonAside.vue"
import CommonHeader from "../components/CommonHeader.vue"
import HomeView from "./HomeView.vue";

export default {
  components: {
    CommonAside,
    CommonHeader,
    HomeView
  }

}
</script>

<style scoped>
#main {
  background-image: url("../assets/image/bg1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.el-header {
  margin: 10px;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #000;
  text-align: center;
  line-height: 200px;
  margin: 10px 10px 0;
}

.el-main {
  padding: 0 !important;
  margin-top: 40px;
  margin-right: 30px;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  color: #333;
  text-align: center;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>