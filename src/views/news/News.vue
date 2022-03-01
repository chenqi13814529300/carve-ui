<template>
  <div>
    <el-card class="main">
       <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
    </el-breadcrumb>
      <p class="title">今日头条</p>
      <el-collapse accordion>
        <el-collapse-item
          class="text_title"
          :title="item.title"
          v-for="(item, index) in newsList"
          :key="index"
        >
          <div class="text" v-html="item.content">
            {{ item.content }}
          </div>
        </el-collapse-item>
      </el-collapse>
      <el-pagination
        :page-size="queryInfo.pageSize"
        layout="prev, pager, next"
        :total="50"
        @current-change="changePage"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "keywords",
          content: "最新新闻",
        },
        {
          name: "description",
          content:
            "法人名称:南京市江宁区金瑞祥贴金工艺厂 注册时间2013年1月16日 主要经营产品:贴金装潢、佛像贴金、大理石贴金、庙宇装潢、酒店贴金、金字招牌、贴金工艺品、网站制作。联系电话：13814529300 ",
        },
      ],
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
    };
  },
  methods: {
    getAllNews() {
      this.$API.news.getAllNews(this.queryInfo).then((res) => {
        this.newsList = res.data.result.list;
      });
    },
    changePage(num) {
      this.queryInfo.pageNum = num;
      this.getAllNews();
    },
  },
  mounted() {
    this.getAllNews();
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
</style>