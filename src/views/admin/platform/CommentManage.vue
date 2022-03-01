<template>
  <div>
    <el-table :data="comments" stripe style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="content" label="内容" width="700">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
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
export default {
  data() {
    return {
      comments: [],
      queryInfo: {
        query: "",
        pageNum: 1,
        pageSize: 13,
      },
      total: null,
      token: this.getToken(),
    };
  },
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
      this.getComment();
    },
    getAllComments() {
      this.$API.manage
        .getAllComments(this.queryInfo)
        .then((res) => {
          if (res.status == 200) {
            this.comments = res.data.list;
            this.total = res.data.total;
          }
        });
    },
    handleClick(row) {
      this.$API.manage.delComment(row.commentId, this.token).then((res) => {
        this.showMsg(res);
        if (res.status == 200) {
          this.getAllComments();
        }
      });
    },
  },
  mounted() {
    this.getAllComments();
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: center;
  background-color: rgba(148, 128, 14, 0.041);
}
</style>