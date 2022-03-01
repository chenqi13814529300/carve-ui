<template>
  <div>
    <el-carousel indicator-position="outside"  :interval=6000 :height="dataHeight">
      <el-carousel-item v-for="(item, index) in lun_bo_img" :key="index">
        <img  :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <el-divider content-position="left"
      >贴与刻，不仅是一种需求，更是一种态度</el-divider
    >
    <div class="carve_type">
      <div>
        <img src="@/assets/img/miao.png" alt="描金漆" />
      </div>
      <div>
        <img src="@/assets/img/fou.png" alt="佛像贴金" />
      </div>
      <div>
        <img src="@/assets/img/ke.png" alt="大理石刻字" />
      </div>
    </div>
    <el-card class="product_show">
      <div class="show_box">
        <img :src="showing" alt="" class="showing" />
      </div>

      <div class="hang_img">
        <div
          :class="{ change: activeIndex == index }"
          @click="changeColor(index, item.imgUrl)"
          v-for="(item, index) in shu_img"
          :key="index"
        >
          <img :src="item.imgUrl" alt="" />
        </div>
      </div>

      <div class="history">
        <p class="history_title">刻字历史</p>
        <div class="content">
          <p>
            石刻文字是人类历史初期书籍形式之一。在石头上刻字是世界上各个民族都使用过的一种记载方法。在石器时代的人类就会用利器在岩石上雕琢出图案，叫做岩画，图形记录了当时的事迹，逐渐演变成形意文字
          </p>
          <p>刻字有几种叫法</p>
          <p>
            石刻：石刻
            泛指镌刻有文字、图案的碑碣等石制品或摩崖石壁。在书法领域，也有把镌刻后，原来无意作为书法流传的称为“石刻”，一般不表书者姓名，三国六朝以前多为；而有意作为书法流传的称为“刻石”，隋唐以后多为，通常标刻书者姓名。----《古代碑帖鉴赏》
          </p>
          <p>
            石刻文字是人类历史初期书籍形式之一。在石头上刻字是世界上各个民族都使用过的一种记载方法。在石器时代的人类就会用利器在岩石上雕琢出图案，叫做岩画，图形记录了当时的事迹，逐渐演变成形意文字，到了文明时代，石头刻字和摩崖石刻多用来雕刻名山名胜的书法题记，碑文刻字来记录当时发生的事件和功德陈述等
          </p>
        </div>
      </div>

      <el-divider content-position="right">贴与刻，均亲力亲为</el-divider>

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

      <div class="story">
        <div class="father">
          <img src="@/assets/img/admin.jpg" alt="老板和弥勒佛" />
        </div>
        <div class="content">
          <p class="title">刻字与贴金小知识</p>
          <el-collapse accordion v-model="activeStory">
            <el-collapse-item title="仓颉" name="1" class="brief1">
              <p class="brief">
                仓颉，原姓侯冈，名颉，号史皇氏，生于陕西省白水县杨武村鸟羽山（另一说山西临汾人）。
                我国原始象形文字的创造者，我国官吏制度及姓氏的草创人之一。
                首创了“鸟迹书”震惊尘寰，堪称人文始祖。黄帝感他功绩过人，乃赐以“仓”（仓）姓，意为君上一人，人下一君。
              </p>
            </el-collapse-item>
            <el-collapse-item title="入木三分" name="2" class="brief1">
              <p class="brief">
                晋帝时祭北郊，更祝版，工人削之，笔入木三分。”
                当时的皇帝要到北郊去祭祀，让王羲之把祝辞写在一块木板上，再派工人雕刻。雕刻的工人在雕刻时非常惊奇，王羲之写的字，笔力竟然渗入木头三分多。他赞叹地说：“右军将军的字，真是入木三分呀！”
              </p>
            </el-collapse-item>
            <el-collapse-item title="舒文亮" name="3" class="brief1">
              <p class="brief">
                舒文亮，著名佛像贴金工艺大师，中国嵩山少林寺下院月山寺、中国嵩山大法王寺指定首席贴金工艺大师，皈依湖南岳阳市乾明古寺（先有乾明寺后有岳阳城）上明下扬大和尚门下。
              </p>
            </el-collapse-item>
            <el-collapse-item title="贴金演变" name="4" class="brief1">
              <p class="brief">
                5000多年前的新石器时代，考古学家在四川省广汉县三星堆遗址出土文物中，发现并确认其中青铜器用黄金薄片贴饰。可见，我们的祖先在5000多年前已有珍惜黄金的意识，并掌握了贴饰黄金薄片的技术。到了3000多年前的商代，我国贴金技术日臻成熟，且广泛用于皇宫贵族或佛像寺庙的贴饰，以表现其富丽堂皇或尊贵庄重。
              </p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-card>
     <el-divider content-position="left"
      >站在巨人的肩膀上，我们才能看的更远</el-divider
    >
    <my-article></my-article>
  </div>
</template>

<script>
import myArticle from "@/components/common/Article";
export default {
  data() {
    return {
      dataHeight: "90vh",
      lun_bo_img: [],
      shu_img: [],
      various_img: [],
      activeIndex: 0,
      activeName: "",
      labels: [
        "室内贴金",
        "佛像贴金",
        "景观石刻字",
        "刻字描金漆",
        "刻字贴金箔",
      ],
      imgType: "",
      previewList: [],
      activeStory: ["1"],
      showing: "",
    };
  },
  components: {
    myArticle,
  },
  methods: {
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
    getLunBoImg() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_LUN_BO)
        .then((res) => {
          this.lun_bo_img = res.data;
        });
    },
    getShuImg() {
      this.$API.image
        .getHomeImg(this.$constant.IMG_TYPE.IMG_SHU)
        .then((res) => {
          this.shu_img = res.data;
          this.showing = this.shu_img[0].imgUrl;
        });
    },

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

    changeColor(index, url) {
      this.showing = url;
      this.activeIndex = index;
    },
  },
  computed: {},
  mounted() {
    this.getLunBoImg();
    this.getShuImg();
    this.getVariousImg();
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
.main {
  padding: 0;
  margin: auto;
}

.carve_type {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  div {
    width: 22%;
    height: 18%;
  }
}

.product_show {
  margin: auto;
  width: 75%;
  height: 100%;
  background: rgba(128, 120, 75, 0.021);
  .show_box {
    display: flex;
    justify-content: center;
    .showing {
      background: #ffc;
      border-top: 12px solid rgba(5, 247, 5, 0.377);
      border-right: 12px solid rgba(0, 153, 204, 0.26);
      border-bottom: 12px solid rgba(153, 255, 153, 0.288);
      border-left: 12px solid rgba(255, 204, 51, 0.247);
      width: 45%;
      height: 80vh;
    }
  }
}

.hang_img {
  // margin-top: 10px;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  div {
    width: 13%;
    height: 24vh;
    box-sizing: border-box;
    margin: 0 1px;
    cursor: pointer;
    img {
      vertical-align: top;
    }
  }
  // 动态样式修改
  .change {
    border: 3px solid rgba(141, 243, 7, 0.986);
  }
}

.history {
  padding-right: 15px;
  width: 100%;
  height: 400px;
  box-shadow: 4px 4px 5px #888888;
  .history_title {
    text-align: center;
    font-size: 25px;
    text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
    color: rgb(87, 40, 40);
  }
  .content {
    .title {
      color: tomato;
      text-shadow: 2px 2px 5px rgb(105, 41, 41);
    }
    p {
      text-indent: 2em;
      color: rgb(105, 76, 22);
    }
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

// 故事
.story {
  margin-top: 50px;
  display: flex;
  .father {
    flex: 1;
  }
  .content {
    flex: 1;
    padding-left: 10px;
    .title {
      text-shadow: 1px 1px rgba(243, 12, 12, 0.404);
      color: rgb(87, 40, 40);
    }
    .brief_ist {
      .brief {
        border-radius: 5px;
        padding-left: 10px;
        box-shadow: 4px 4px 6px #ccc;
        width: 97%;
        background-color: rgba(72, 93, 105, 0.048);
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}


/deep/.el-collapse-item__content {
  padding: 5px;
}
</style>>