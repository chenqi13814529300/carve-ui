<template>
  <div>
    <div class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/question' }"
          >常见问题</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ article.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <p class="title">{{ article.title }}</p>

      <div class="content">
        <div class="header">
          <span>发布时间：{{ article.createTime }} </span>
          <span>文章作者：{{ article.author }} </span>
          <span>文章来源：{{ article.origin }} </span>
          <span>阅读次数：{{ article.readTimes }}</span>
        </div>
        <div v-html="article.content"></div>
        <div class="footer">
          <span class="pre"
            >上一篇:<em @click="preDetails">{{ preArticle.title }}</em></span
          >
          <span class="next"
            >下一篇:<em @click="nextDetails">{{ nextArticle.title }}</em></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        id: null,
        content: "",
        title: "",
      },
      nextArticle: {},
      preArticle: {},
    };
  },
  methods: {
    getArticleDetails(id) {
      this.$API.article.getArticleDetails(id).then((res) => {
        if (res.status == 200) {
          this.article = res.data.article;
          console.log(res);
          if (res.data.nextArticle!==null) {
            this.nextArticle = res.data.nextArticle;
          } else {
            this.nextArticle.title = "已经是最后一篇了";
          }
          if (res.data.preArticle!==null) {
            this.preArticle = res.data.preArticle;
          } else {
            this.preArticle.title = "已经是第一篇了";
          }
        }

        console.log(this.preArticle);
        console.log(this.nextArticle);
      });
    },
    preDetails() {
      this.article = this.preArticle;
      this.getArticleDetails(this.article.id);
    },
    nextDetails(item) {
      this.article = this.nextArticle;
      this.getArticleDetails(this.article.id);
    },
  },
  mounted() {
    this.getArticleDetails(this.$route.params.id);
  },
  created() {},
};
</script>

<style lang="less" scoped>
.main {
  width: 75%;
  height: 100%;
  margin: 30px auto;
  border-radius: 5px;
  padding: 0;
  border: 1px dashed #ccc;
  padding: 10px;
  .title {
    text-align: center;
    font-size: 30px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
  }
}
.header {
  text-align: center;
  font-size: 12px;
  color: rgb(50, 61, 61);
}
/deep/p {
  font-size: 18px;
  color: rgb(83, 62, 22);
  text-indent: 2em;
  color: rgb(4, 51, 14);
  padding: 5px;
}
.footer {
  display: flex;

  cursor: pointer;
  .pre {
    flex: 1;
    text-align: left;
  }
  .next {
    flex: 1;

    text-align: right;
  }
  em {
    color: rgb(160, 65, 65);
  }
}
</style>