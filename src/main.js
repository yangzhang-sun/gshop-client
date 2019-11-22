import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './vuevalidate'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'

import router from './router'
import stroe from './store'
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
  stroe
}).$mount('#app')


