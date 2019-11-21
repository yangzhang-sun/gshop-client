import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import '../public/reset.css'

import router from './router'
Vue.config.productionTip = false

new Vue({
  components:{
    App
  },
  template:'<App/>',
  // 安装路由器
  router
}).$mount('#app')
