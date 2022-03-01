<template>
  <div>
    <el-card class="main">
      <p class="title">发表文章</p>
      <label for="tit">文章标题：</label>
      <el-input
        class="title_input"
        v-model="article.title"
        id="tit"
        placeholder="请输入内容"
      ></el-input>
      <quill-editor
        v-model="article.content"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
      <el-button @click="submitAtricle">提交</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      content: "",
      editorOption: {},
    };
  },
  data() {
    return {
      queryInfo: {
        query: "",
        pageNum: 1,
        pageSize: 10,
      },
      total: "",
      newsList: [],
      article: {
        content: "",
        title: "",
      },
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
    },
    onEditorBlur(editor) {
      //失去焦点事件
    },
    onEditorFocus(editor) {
      //获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      //编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      this.article.content = html;
    },

    submitAtricle() {
      if (this.$route.query.article) {
      console.log(this.article);
        this.$API.manage.updateArticle(this.article,this.token).then((res) => {
          if (res.status == 200) {
          }
        });
        this.$router.push("articleList");
      } else {
        this.$API.manage.createArticle(this.article, this.token).then((res) => {
          this.showMsg(res);
          if (res.status == 200) {
            this.article.title = "";
            this.article.content = "";
          }
        });
      }
    },
  },
  created() {
    if (this.$route.query.article) {
      this.article = this.$route.query.article;
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 75%;
  height: 100%;
  margin: 30px auto;
  border-radius: 5px;
  box-shadow: 10px 12px 12px rgba(64, 153, 197, 0.267);
  padding: 0;
  .title_input {
    width: 400px;
  }
  .title {
    text-align: center;
    font-size: 30px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
  }

  .text {
    background-color: rgba(204, 204, 204, 0.068);
    padding: 10px;
    font-size: 16px;
    color: rgba(2, 20, 14, 0.856);
  }
}

.news {
  padding: 5px;
  width: 100%;
  min-height: 60px;
  // border: 1px solid #ccc;
  box-shadow: 4px 4px 5px #ccc;
  margin: 10px 0;
  border-radius: 5px;
}
.el-pagination {
  text-align: center;
}
/deep/.el-collapse-item__header {
  font-size: 20px;
  padding-left: 10px;
  color: rgba(54, 5, 26, 0.767);
}

/deep/.ql-editor {
  min-height: 500px;
}
</style>