// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import API from './api'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VCharts from 'v-charts'
import VeMap from 'v-charts/lib/map.common'
import store from './store'
import ECharts from 'vue-echarts'

import Storage from './utils/storage'
Vue.prototype.$storage=Storage


Vue.component(VeMap.name, VeMap)
Vue.use(VueQuillEditor)
Vue.use(VCharts)
Vue.use(ElementUI)
// 导入iconfront
import './assets/font/iconfont.css'
import token from './token/token.js'
import constant from './constant/index.js'
import filters from './filters/index.js'

Vue.prototype.getToken = token.isLoginToken
Vue.prototype.setToken = token.setToken
Vue.prototype.$constant = constant
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.prototype.$API = API
// Vue.prototype.$echarts = echarts // 图表
Vue.component('my-chart', ECharts)

Vue.config.productionTip = false
// Vue.use(VueMeta, {
//   refreshOnceOnNavigation: true
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
// document.title = "金瑞祥贴金首页-专业贴金箔-贴金箔多少钱一平方米-刻字精湛工艺[十余年老厂]"
// let meta1 = document.createElement('meta');
// let meta2 = document.createElement('meta');
// meta1.name = 'description'
// meta1.content = '「经营范围～地道」:【贴金装潢】｜【佛像贴金】｜【大理石贴金】｜【大理石刻字】｜【庙宇装潢】｜【酒店贴金】｜【金字招牌】｜【网站工程】 「注册时间2013年1月16日」 「联系电话」:13951638402'
// document.getElementsByTagName('head')[0].appendChild(meta1);
// meta2.name = 'keywords'
// meta2.content = '南京江宁贴金箔,南京江宁大理石刻字'
// document.getElementsByTagName('head')[0].appendChild(meta2);

// router.beforeEach((to, from, next) => {
//   if (to.meta.content) {
//     let meta1 = document.createElement('meta');
//     let meta2 = document.createElement('meta');
//     meta1.content = to.meta.content.description
//     meta1.name = 'description'
//     document.getElementsByTagName('head')[0].appendChild(meta1);
//     meta2.content = to.meta.content.description
//     meta2.name = 'description'
//     document.getElementsByTagName('head')[0].appendChild(meta2);
//   }
//   next()
// });
