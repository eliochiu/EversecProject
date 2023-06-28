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
          Main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import CommonAside from "../components/CommonAside.vue"
import CommonHeader from "../components/CommonHeader.vue"

export default {
  components: {
    CommonAside,
    CommonHeader
  }

}
</script>

<style>
#main {
  background-image: url("../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #000;
  text-align: center;
  line-height: 200px;
}

.el-main {
  padding: 0 !important;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  text-align: center;
  line-height: 160px;
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