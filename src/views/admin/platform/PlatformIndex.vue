<template>
  <div>
    <el-container style="height: calc(100vh - 110px)">
      <el-aside width="180px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100%"
          router
        >
          <template v-for="item in menus">
            <el-menu-item
              :key="item.id"
              :index="item.route_url"
              v-if="!item.list"
            >
              <span> {{ item.name }}</span>
            </el-menu-item>
          </template>

          <template v-for="item in menus">
            <el-submenu :key="item.id" :index="item.route_url" v-if="item.list">
              <template slot="title">
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(item, index) in item.list"
                  :key="index"
                  :index="item.route_url"
                  >{{ item.name }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "图片管理",
          route_url: "/admin/platformIndex/imgManage",
          list: [
            {
              name: "轮播图",
              route_url: "/admin/platformIndex/imgManage/carouselImg",
            },
            {
              name: "竖型图片",
              route_url: "/admin/platformIndex/imgManage/showImg",
            },
            {
              name: "佛像贴金",
              route_url: "/admin/platformIndex/imgManage/buddhaGold",
            },
            {
              name: "景观石刻字",
              route_url: "/admin/platformIndex/imgManage/landscapeStone",
            },
            {
              name: "刻字描金漆",
              route_url: "/admin/platformIndex/imgManage/storeGoldPaint",
            },
            {
              name: "刻字贴金箔",
              route_url: "/admin/platformIndex/imgManage/storeGoldCover",
            },
            {
              name: "室内贴金",
              route_url: "/admin/platformIndex/imgManage/indoorGold",
            },
          ],
        },
        {
          name: "聊天室",
          route_url: "/admin/platformIndex/chatRoom",
        },
        {
          name: "留言管理",
          route_url: "/admin/platformIndex/commentManage",
        },
        {
          name: "管理文章",
          route_url: "/admin/platformIndex/articleManage",
          list: [
            {
              name: "所有文章",
              route_url: "/admin/platformIndex/articleManage/articleList",
            },
            {
              name: "发表文章",
              route_url: "/admin/platformIndex/articleManage/createArticle",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.el-menu {
  overflow: hidden;
}
</style>