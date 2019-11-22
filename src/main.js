import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
<<<<<<< HEAD
import './vuevalidate'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
=======
import '../public/reset.css'
>>>>>>> 25ee236634ef15cd1fa8f8b4ac4c5b51a0e1b6a6

import router from './router'
import store from './store'
Vue.config.productionTip = false

import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'

// 注册全局组件
Vue.component('HeaderGuide',HeaderGuide)
Vue.component(Button.name, Button)

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


