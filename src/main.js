import Vue from 'vue'
import App from './App.vue'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
// import './veevalidate'
import 'lib-flexible/flexible'
import '../public/reset.css'


import ajax from './api/ajax'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'

// vue实例挂载ajax方法
Vue.prototype.$ajax = ajax

Vue.use(VueLazyload, {
  loading: './common/images/loading.gif',
})

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


