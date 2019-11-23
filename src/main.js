import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import '../public/reset.css'
import VueLazyload from 'vue-lazyload'

import router from './router'
import store from './store'
Vue.config.productionTip = false

import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'


Vue.use(VueLazyload,{
  loading: 'dist/loading.gif'
})
// 注册全局组件
Vue.component('HeaderGuide',HeaderGuide)
new Vue({
  components:{
    App
  },
  template:'<App/>',
  // 安装路由器
  router,
  // 集中管理状态store
  store
}).$mount('#app')
