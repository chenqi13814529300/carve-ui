<template>
  <div class="body">
    <div class="header_content">
      <img
        src="@/assets/img/logo.png"
        alt="南京市江宁区金瑞祥贴金工艺厂的logo"
      />
      <i class="el-icon-user before_login" v-if="!token"></i>
      <div class="after_login" v-else>
        <router-link to="/home" class="back">返回主页</router-link>
        <p class="after_login welcome">
          管理员登录中 <span class="loginout" @click="loginout">退出</span>
        </p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      token: null,
    };
  },
  computed: {
    ...mapGetters(["getLoginInfo"]),
  },
  methods: {
    loginout() {
      this.$API.login.loginout(this.token).then((res) => {
        localStorage.removeItem("token");
        this.$router.push("/home");
      });
    },
  },
  created() {
      this.token =localStorage.getItem("token")
  },
  mounted() {},
  watch: {
    $route(to, from) {
      this.token = this.getToken();
    },
  },
};
</script>
<style lang="less" scoped>
.body {
  height: 100%;
  background-color: rgba(215, 224, 214, 0.123);
}
.header_top {
  height: 100%;
  width: 100%;
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
  .back{
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    top: -25px;
    right: 30px;
    font-size: 18px;
    color: rgb(223, 91, 14);
  }
  .before_login,
  .after_login {
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 40%;
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
    font-size: 19px;
    padding: 0 40px;
  }
}
</style>