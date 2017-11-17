// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { AlertPlugin, ToastPlugin, WechatPlugin,AjaxPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)


// 通过 this.$wechat 访问到 wx 对象。
Vue.use(WechatPlugin);

// AjaxPlugin 插件依赖于 axios，需要注意的是axios是基于Promise的，因此如果你需要兼容低版本浏览器(caniuse)，需要引入polyfill。
require('es6-promise').polyfill();

// 发送 ajax 请求
Vue.use(AjaxPlugin);

// 添加Fastclick移除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)


Vue.config.productionTip = false;


// main.js 里，如果你使用了 vue-router
/*router.afterEach(function (to) {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
    window.ga('send', 'pageview')
  }
});*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
