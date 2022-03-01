<!--  -->
<template>
  <div class="">
    <el-table :data="articleList" stripe style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column prop="readTimes" label="阅读次数"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick1(scope.row)" type="text" size="small"
            >修改</el-button
          >
          <el-button @click="handleClick2(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="queryInfo.pageSize"
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      articleList: [],
      queryInfo: {
        query: "",
        pageNum: 1,
        pageSize: 10,
      },
      total: null,
      token: this.getToken(),
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showMsg(result) {
      if (result.status === 200) {
        const data = result.data;
        if (data.status === 200) {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "success",
            duration: "600",
          });
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "error",
            duration: "3000",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "操作失败，请联系管理员",
          type: "error",
          duration: "3000",
        });
      }
    },
    changePage(num) {
      this.queryInfo.pageNum = num;
      this.getArticleList();
    },
    getArticleList() {
      this.$API.manage
        .getArticleList(this.queryInfo, this.token)
        .then((res) => {
          this.showMsg(res);
          console.log(res);
          if (res.status == 200) {
            this.articleList = res.data.list;
          }
        });
    },
      handleClick1(row) {
      console.log(row);
      this.$router.push({
        path:"createArticle",
        query:{
          article:row
        }
      })
    },
    handleClick2(row) {
      console.log(row.id);
      this.$API.manage.deleteArticle(this.token, row.id).then((res) => {
        this.showMsg(res);
        console.log(res);
        if (res.status == 200) {
          this.getArticleList()
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getArticleList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
</style>