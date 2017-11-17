import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// 将所有页面组件一次性加载是一个很浪费资源和考验用户耐心的做法，尤其在移动端。

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // 当切换到特定路由时才加载代码。
      component: function (resolve) {
        require(['../components/HelloWorld.vue'],resolve)
      }
    }
  ]
})
