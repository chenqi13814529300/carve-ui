import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui';
import storage from '@/utils/storage'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'home',
      component: () => import('@/views/index/Index'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import("@/views/home/Home"),
          meta: {
            content: {
              keywords: '首页',
              description: '最近新闻'
            }
          },
        },

        {
          path: 'case',
          name: 'case',
          component: () => import("@/views/case/Case"),
        },

        {
          path: 'price',
          name: 'price',
          component: () => import("@/views/price/Price"),

        },
        {
          path: 'material',
          name: 'material',
          component: () => import("@/views/material/Material"),

        },
        {
          path: 'dataCharts',
          name: 'dataCharts',
          component: () => import("@/views/vCharts/DataCharts"),

        },
        {
          path: 'question',
          name: 'question',
          component: () => import("@/views/question/Question"),
          redirect: 'question/questionList',
          children: [
            {
              path: 'details/:id',
              name: 'questionDetails',
              component: () => import("@/views/question/QuestionDetails"),
            },
            {
              path: 'questionList',
              name: 'questionList',
              component: () => import("@/views/question/QuestionList"),
            }
          ]
        },
        {
          path: 'news',
          name: 'news',
          component: () => import("@/views/news/News"),
          meta: {
            content: {
              keywords: '最近新闻',
              description: '最近新闻'
            }
          }

        },
        {
          path: 'comment',
          name: 'comment',
          component: () => import("@/views/comment/Comment"),
          meta: {
            content: {
              keywords: '留言',
              description: '最近留言'
            }
          }
        },
        {
          path: 'introduce',
          name: 'introduce',
          component: () => import("@/views/introduce/Introduce"),
          meta: {
            content: {
              keywords: '南京市江宁区金瑞祥贴金工艺厂',
              description: '金瑞祥工艺厂介绍'
            }
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import("@/views/contact/Contact"),
          meta: {
            content: {
              keywords: '联系方式',
              description: '老板的联系方式:13951638402'
            }
          }
        },

      ]
    },
    {
      path: "/admin",
      name: 'admin',
      component: () => import("@/views/admin/Admin"),
      redirect: '/admin/login',
      children: [
        {
          path: "login",
          name: 'login',
          component: () => import("@/views/login/Login")
        },
        {
          path: 'platformIndex',
          name: 'platformIndex',
          component: () => import("@/views/admin/platform/PlatformIndex"),
          redirect: 'platformIndex/commentManage',
          children: [
            {
              path: 'commentManage',
              name: 'commentManage',
              component: () => import("@/views/admin/platform/CommentManage")
            },
            {
              path: 'articleManage',
              name: 'articleManage',
              component: () => import("@/views/admin/platform/ArticleManage"),
              children: [
                {
                  path: 'createArticle',
                  name: 'createArticle',
                  component: () => import("@/views/admin/platform/CreateArticle"),
                },
                {
                  path: 'articleList',
                  name: 'articleList',
                  component: () => import("@/views/admin/platform/ArticleList"),
                },
              ]
            },
            {
              path: 'chatRoom',
              name: 'chatRoom',
              component: () => import("@/views/admin/platform/ChatRoom")
            },
            {
              path: 'imgManage',
              name: 'imgManage',
              component: () => import("@/views/admin/platform/imgManage"),
              children: [
                {
                  path: 'carouselImg',
                  name: 'carouselImg',
                  component: () => import("@/views/admin/platform/CarouselImg"),
                },
                {
                  path: 'showImg',
                  name: 'showImg',
                  component: () => import("@/views/admin/platform/ShowImg"),
                },
                {
                  path: 'buddhaGold',
                  name: 'buddhaGold',
                  component: () => import("@/views/admin/platform/BuddhaGold"),
                },
                {
                  path: 'landscapeStone',
                  name: 'landscapeStone',
                  component: () => import("@/views/admin/platform/LandscapeStone"),
                }, {
                  path: 'storeGoldPaint',
                  name: 'storeGoldPaint',
                  component: () => import("@/views/admin/platform/StoreGoldPaint"),
                },
                {
                  path: 'storeGoldCover',
                  name: 'storeGoldCover',
                  component: () => import("@/views/admin/platform/storeGoldCover"),
                },
                {
                  path: 'indoorGold',
                  name: 'indoorGold',
                  component: () => import("@/views/admin/platform/IndoorGold"),
                }



              ]
            }
          ]
        }
      ]
    }
  ]
})
// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  // 访问登录页面 如果有token就 直接放行  否则就登录
  if (to.path === '/admin/login'){
    if(localStorage.getItem("token")){
      return next('/admin/platformIndex')
    }else{
      return next()
    }
  }
  // 访问登录页面里面的子页面http://localhost:8081/admin/platformIndex/commentManage
  // 都是在platformIndex下，只要判断下路径中是否有这个字符串
  if (to.path.includes("platformIndex")) {
    // 是否有token，我后端用了shiro
    const token = localStorage.getItem("token");
    if (!token) {
      Message({
        showClose: true,
        message: "请先登录",
        type: "error",
        duration: "3000"
      });
      return next('/admin/login')
    }
    return next()
  }
  next()
})


export default router
