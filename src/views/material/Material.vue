<!--  -->
<template>
  <div class="">
    <el-carousel indicator-position="outside" :height="dataHeight">
      <el-carousel-item v-for="(item, index) in jin_bo" :key="index">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>金箔材料</el-breadcrumb-item>
      </el-breadcrumb>
      <h1>金箔纸介绍</h1>
      <p>
        关于<a
          href="https://baike.baidu.com/item/%E9%87%91%E7%AE%94%E7%BA%B8/3479258?fr=aladdin"
          >金箔纸</a
        >的材料，相信大家或多或少都了解一点了，老板们对金箔纸的材料尤为看重，是否是正宗是衡量一件伟大作品能否能长久流传于世，说我们用的金箔材料不正宗是不可能的，但是我还是要给老板们科普下金箔的材料，为什么会如此正宗，金箔材料正宗原因有哪些呢？
      </p>
      <p>
        金箔纸
        是用黄金锤成的薄片。黄金由于具有良好的延展性和可塑性，一两（31.25克）纯金可锤成万分之一毫米厚、面积为16.2平方米的金箔纸。即一克黄金可以打制成约0.5平方米的纯金箔纸，厚度为0.12um。金箔纸标准规格为9.33*9.33cm，其它常用规格格还有8*8cm，10.9*10.9cm，4.5*1.5cm，2.75*2.75cm。
      </p>
      <p>
        黄金性质稳定，永久不变色、抗氧化、防潮湿、耐腐蚀、防变霉、防虫咬、防辐射，用黄金制成的金箔纸具有广泛的用途。古法制金箔纸是先将金提纯，再经千锤百炼的敲打，成为面积2．5平方厘米的金叶，然后夹在用煤油熏炼成的乌金纸里，再经6-8小时的手工锤打，使金叶成箔，面积相当于金叶的四十倍左右，再裁成方形即成。
      </p>
      <p>
        传统工艺制作金箔纸，是以含金量为99.99%的金条为主要原料，经化涤、锤打、切箔等十多道工序的特殊加工，使其呈现色泽金黄，光亮柔软，轻如鸿毛，薄如蝉翼，厚度不足0.12微米
      </p>
      <p>
        金箔的用途非常广泛，广泛地应用于宗教、古典园林、建筑装饰、医药食品以及文化事业等，并为促进传统工艺和民族工业的发展作出了巨大的贡献。佛像神像贴金、雕梁画栋贴金、牌匾楹联、装饰用贴金是金箔最为广泛的用途。美国费城的华人牌楼、法国的凡尔赛宫、扎伊尔总统官邸、莫斯科北京饭店、北京天安门、人民大会堂、故宫博物院、中央电视台、上海东方明珠、香港大屿山观音寺、西藏布达拉宫、河南少林寺、南京栖霞寺、以及中央人民政府1997年、1999年为庆祝香港、澳门回归所赠送特区政府的大礼—一“永远盛开的紫荆花”、“盛世莲花”等都使用了金箔纸作为装饰。
      </p>
    </div>
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
      jin_bo: [],
      dataHeight: "80vh",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getJinBo() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_JIN_BO)
        .then((res) => {
          console.log(res);
          this.jin_bo = res.data;
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getJinBo();
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
  margin: auto;
  width: 75%;
}
img {
  width: 100%;
  height: 100%;
}
h1 {
  text-align: center;
  color: rgba(187, 187, 8, 0.842);
  font-size: 32px;
}
p {
  font-size: 18px;
  color: rgb(83, 62, 22);
  text-indent: 2em;
}
</style>