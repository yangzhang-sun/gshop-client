import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import 'lib-flexible/flexible'
import '../public/reset.css'
import { Button } from 'mint-ui'
import { MessageBox } from 'mint-ui';
import 'mint-ui/lib/style.css'

import router from './router'
import store from './store'
Vue.config.productionTip = false
import './vuevalidate'

import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'


Vue.use(VueLazyload,{
  loading: 'dist/loading.gif'
})
// 注册全局组件
Vue.component('HeaderGuide',HeaderGuide)
Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading: './common/images/loading.gif',
})

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


