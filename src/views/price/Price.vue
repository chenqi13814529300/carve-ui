<!--  -->
<template>
  <div class="main">
     <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>价格收费</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="title">价格收费</p>
    <p> 关于贴金箔的价格，相信老板们都非常关心，但是每个厂家都有不同的金箔价格，说他们不为自己获利是不可能的，是骗人的，但是正宗的金箔价格还是比较透明的， 不同品质的金箔价格有些许差别，前段时间我们又进行了市场调查，让老板们看看金箔收费现在又是怎么样的。</p>
    <p>
      至2020年7月，价格为1300元-1500元/平米。
      金箔材质根据原材料成分的不同，会分为各种不同的等级，其中普通的金箔，市场售价在800元-1000元/平米左右，中等的金箔，价格在1300元-1500元/平米，高档的金箔，价格在2000元-3000元/平米。金箔材质纯度越高，金箔的价格也会越高，具体金箔材质价格，需要根据成分来看。
    </p>

    <p>
      贴金箔价格还要根据当地所在地区人工收费情况，进一步了解金箔铺贴的人工价格。一线城市和二三线城市的发展不同，经济发展水平也是不一样，故贴金箔人工收费也是不同的，一线城市贴金箔价格在2200元/平方，二三线城市价格在1500元/平方左右。具体贴金箔人工收费价格，还要根据地区实际看。
    </p>
    <p>
      贴金箔收费还要看施工的工艺情况，制作难度不同，导致金箔施工收费也是不一样的。对于高端酒店或是大型KTV场所，考虑到贴金箔面积范围，以及施工难度的问题，价格上面和普通家装贴金箔收费也是不一样的。
    总结:综合以上几方面因素来看，贴金箔多少钱一平方不可控条件比较多，故而目前并未有固定的价格供了解。以上介绍的价格仅供参考，具体根据实际情况来看。
    </p>
    <p>我们作为经营【十】余年的老厂，诚信经营是不用想的，不然我们也不会一直经营到现在，能维持生计一半都靠老顾客的照顾。网站上贴金刻字的图片均【无P】、【真实】，我们都是老实人，也不会营销，网站也是儿子帮忙做的。</p>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
  padding-top: 15px;
  width: 75%;
}
.title {
  font-size: 30px;
  text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
  color: rgb(87, 40, 40);
  text-align: center;
}
p {
  font-size: 18px;
  color: rgb(83, 62, 22);
  text-indent: 2em;
}
</style>