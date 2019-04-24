// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import './assets/css/reset.min.css'
import 'font-awesome/css/font-awesome.min.css'
import request from './utils/request';
import  './utils/util';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.prototype.$http = request;
Vue.config.productionTip = false
NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from, next) => {
  NProgress.done();
  window.scrollTo(0, 0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
