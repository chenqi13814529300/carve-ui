<template>
  <div class="body">
    <el-container style="min-height: 85%">
      <el-header style="padding: 0; height: 100%">
        <header-top />
      </el-header>
      <el-main class="main" style="padding: 0; height: 100%"
        ><router-view />
      </el-main>
      <el-footer style="padding: 0; margin-top: 20px"
        >
        <carve-footer
      /></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderTop from "@/components/header_top/HeaderTop";
import CarveFooter from "@/components/footer/CarveFooter";
export default {
  components: {
    HeaderTop,
    CarveFooter,
  },
};
</script>

<style lang="less" scoped>
.body {
  height: 100%;
}
</style>>