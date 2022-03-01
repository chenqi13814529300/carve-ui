<template>
  <div class="introduce">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>关于我们</el-breadcrumb-item>
    </el-breadcrumb>
    <p class="title">公司介绍</p>
    <p>
      南京市江宁区金瑞祥贴金工艺厂是从事刻字与贴金的企业，属于夫妻合作经营，已经营十余年，网站上的图片均是真实场景下的抓拍。
    </p>
    <p>
      公司承接宾馆酒店、景观石刻字、大理石贴金箔、大理石描金漆、寺院佛像庙宇、高档饰材、豪华别墅、家私的贴金及彩绘等装饰工程业务。
    </p>
    <p>
      金瑞祥贴金施工过程中使用的纯金箔标准规格为9.33*9.33cm。纯金箔就是用纯金制成的薄片，传统工艺制作金箔，是以含金量为99．99%的金条为主要原料，经化涤、锤打、切箔等十多道工序的特殊加工，使其呈现色泽金黄，光亮柔软，轻如鸿毛，薄如蝉翼，厚度不足0.12微米。
    </p>
    <p>
      金瑞祥贴金的顾客多半是老顾客，他们的肯定是我们毕生的追求，随着时间，我们的手艺会得到越来越多人的肯定。
    </p>
    <p>我们的优势：技术稳定，质量可靠，价格优惠。</p>
    <p>
      我们可以根据客户的需要随时提供样品，方便客户比较，我的微信和抖音里面有很多动态都是最近刻字和贴金记录下来的。
    </p>
    <p>
      我们作为经营【十】余年的老厂，诚信经营是不用想的，不然我们也不会一直经营到现在，能维持生计一半都靠老顾客的照顾。网站上贴金刻字的图片均【无P】、【真实】，我们都是老实人，也不会营销，网站也是儿子帮忙做的。
    </p>
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
          content: "公司介绍",
        },
        {
          name: "description",
          content:
            "法人名称:南京市江宁区金瑞祥贴金工艺厂 注册时间2013年1月16日 主要经营产品:贴金装潢、佛像贴金、大理石贴金、庙宇装潢、酒店贴金、金字招牌、贴金工艺品、网站制作。联系电话：13814529300 ",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.introduce {
  padding-top: 15px;
  width: 75%;
  margin: auto;
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
}
</style>>
