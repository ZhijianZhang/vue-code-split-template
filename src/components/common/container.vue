<template>
  <el-container>
    <slot name="aside"></slot>
    <el-container>
      <!-- 不向具名插槽 header 提供内容，则显示默认 header-->
      <slot name="header">
        <el-header>
          Header
        </el-header>
      </slot>
      <el-main>
        <slot name="main">Main</slot>
      </el-main>
      <el-footer>
        <CFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CFooter from "./c-footer";
export default {
  name: "container",
  components: {
    CFooter
  }
};
</script>


<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
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
