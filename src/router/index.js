/*
 *@Description: 管理路由组件
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-20 23:22:34
 *@NO BUG!!! It is better to be clear than to be clever
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用扩展库
Vue.use(VueRouter)

// 管理路由
const router = new VueRouter({
  mode:'hash',//history不带#号
  routes
})

export default router 