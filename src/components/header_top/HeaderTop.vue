<!--  -->
<template>
  <div class="header_top">
    <div class="header_introduce">
      <div class="text1">
        <p>
          您好，欢迎来到南京市江宁区金瑞祥贴金工艺厂--专业贴金箔-贴金箔多少钱一平方米-刻字精湛工艺-十余年老厂！！
        </p>
      </div>
      <div class="text2">
        <span @click="bnt1">设为主页｜</span>
        <span @click="bnt2">收藏本站｜</span>
        <span @click="bnt3">返回主页</span>
      </div>
    </div>
    <div class="header_content">
      <img
        src="@/assets/img/logo.png"
        alt="南京市江宁区金瑞祥贴金工艺厂的logo"
      />
      <div class="before_login" @click="isAdmin" v-if="!token">
        <i class="el-icon-user before_login">管理员登录</i>
      </div>

      <div class="after_login" v-else>
        <p class="after_login welcome">
          xxxxxxxx登录中 <span class="loginout" @click="loginout">退出</span>
        </p>
        <i class="el-icon-s-tools goManage" @click="goManage"></i>
      </div>
    </div>

    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item
        v-for="item in carve_menu"
        :key="item.id"
        :index="item.route_url"
      >
        <span> {{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>



<script>
import Vuex from 'vuex'

export default {
  components: {},
  data() {
    return {
      token: null,
      carve_menu: [
        // 首页/工程案例/收费价格/金箔材料/关于我们/新闻中心/在线留言/联系我们
        {
          name: "首页",
          route_url: "/home",
        },
        {
          name: "工程案例",
          route_url: "/case",
        },
        {
          name: "价格收费",
          route_url: "/price",
        },
        {
          name: "金箔材料",
          route_url: "/material",
        },
        {
          name: "关于我们",
          route_url: "/introduce",
        },
        {
          name: "新闻中心",
          route_url: "/news",
        },
        {
          name: "常见问题",
          route_url: "/question/questionList",
        },
        {
          name: "在线留言",
          route_url: "/comment",
        },
        {
          name: "联系我们",
          route_url: "/contact",
        },
        {
          name: "数据可视化",
          route_url: "/dataCharts",
        },
      ],
    };
  },
//     computed: { ...mapState({
// loginInfo: state => state.loginInfo
//   }) },
  computed: {
    ...Vuex.mapGetters(
     ['getLoginInfo']
    )
  },
  watch: {},
  methods: {
    isAdmin() {
      this.$router.push("/admin/login");
    },
    goManage() {
      this.$router.push("/admin/platformIndex/");
    },
    loginout() {
      this.$API.login.loginout(this.token).then((res) => {
        localStorage.removeItem("token");
      });
    },
    bnt1() {
      alert("设置首页失败，请手动设置");
    },
    bnt2() {
      alert("加入收藏失败，请使用Ctrl+D或者command+D进行添加");
    },
    bnt3() {
      this.$router.push("/home");
    },
  },
  created() {},
  mounted(){

  }
  //  watch: {
  //    $route(to, from) {
  //      console.log(to);
  //      console.log(from);
  //     this.token = this.getToken();
  //   },
  // },
};
</script>
<style scoped lang='less'>
// @font_size1:100px;
.header_top {
  height: 100%;
  width: 100%;
}
.header_introduce {
  height: 34px;
  width: 100%;
  background-color: rgba(11, 15, 2, 0.685);
  display: flex;
  div {
    font-size: 9px;
    color: white;
  }
  .text1 {
    flex: 3;
    padding-left: 10%;
  }
  .text2 {
    flex: 1;
    span {
      line-height: 34px;
      cursor: pointer;
    }
  }
}
.header_content {
  width: 100%;
  height: 110px;
  position: relative;
  //   background-color: rgb(250, 252, 252);
  img {
    height: 100%;
    cursor: pointer;
  }
  .before_login,
  .after_login {
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 40%;
  }
  .before_login {
    font-size: 20px;
    width: 120px;
    height: 20px;
    color: rgb(17, 110, 59);
  }
  .after_login {
    text-align: right;
    width: 200px;
    font-size: 40px;
    .welcome,
    .loginout {
      font-size: 16px;
    }
    .loginout {
      color: red;
      font-size: 14px;
    }
    .goManage {
      position: absolute;
      top: 0;
      right: -20px;
    }
  }
}

.top_left img {
  width: 40px;
  vertical-align: middle;
}

.el-menu {
  display: flex;
  justify-content: center;
  .el-menu-item {
    // font-size:@font_size1;
    font-size: 19px;
    padding: 0 20px;
  }
}
</style>
