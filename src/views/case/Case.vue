<!--  -->
<template>
  <div class="main">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>工程案例</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="title">工程案例</p>
    <el-tabs
      tab-position="left"
      style="height: 400px"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane :label="item" v-for="(item, index) in labels" :key="index">
        <div class="type_img_list">
          <div v-for="(imgItem, index) in various_img" :key="index">
            <el-image
              :src="imgItem.imgUrl"
              alt="该类型下的图片"
              :preview-src-list="previewList"
            ></el-image>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
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
      labels: [
        "室内贴金",
        "佛像贴金",
        "景观石刻字",
        "刻字描金漆",
        "刻字贴金箔",
      ],
      activeName: "",
      various_img: [],
      previewList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getVariousImg() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_TIE_JIN_BO)
        .then((res) => {
          this.various_img = res.data;
          for (let i = 0; i < this.various_img.length; i++) {
            this.previewList[i] = this.various_img[i].imgUrl;
          }
        });
    },
    handleClick(tab, event) {
      switch (tab.index) {
        case "0":
          this.imgType = this.$constant.IMG_TYPE.IMG_TIE_JIN_BO;
          break;
        case "1":
          this.imgType = this.$constant.IMG_TYPE.IMG_FOU_XIANG;
          break;
        case "2":
          this.imgType = this.$constant.IMG_TYPE.IMG_JIN_GUN;
          break;
        case "3":
          this.imgType = this.$constant.IMG_TYPE.IMG_MIAO_JIN_QI;
          break;
        case "4":
          this.imgType = this.$constant.IMG_TYPE.IMG_SHI_NEI_TIE;
          break;
      }
      this.$API.image.getHomeImg(this.imgType).then((res) => {
        this.various_img = res.data;
        for (let i = 0; i < this.various_img.length; i++) {
          this.previewList[i] = this.various_img[i].imgUrl;
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getVariousImg();
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
<style scoped lang="less">
/*@import url(); 引入公共css类*/

.main {
   padding-top: 15px;
  width: 75%;
  margin: auto;
  .title {
    font-size: 30px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
    text-align: center;
  }
  .content {
    font-size: 19px;
    color: rgb(87, 28, 17);
  }
}
.type_img_list {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 23%;
    // background-color: red;
    margin: 1%;
    .el-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>