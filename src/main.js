import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
Vue.config.productionTip = false

import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'

// 注册全局组件
Vue.component('HeaderGuide',HeaderGuide)

new Vue({
  components:{
    App
  },
  template:'<App/>',
  // 安装路由器
  router
}).$mount('#app')
