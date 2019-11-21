/*
 *@Description: 所有的路由组件
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-20 23:26:53
 *@NO BUG!!! It is better to be clear than to be clever
*/
import Login from '../pages/Login/Login.vue'
import Cart from '../pages/Cart/Cart.vue'
import Home from '../pages/Home/Home.vue'
import Flush from '../pages/Flush/Flush.vue'
import Sort from '../pages/Sort/Sort.vue'

export default[
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/Cart',
    component:Cart
  },
  {
    path:'/Home',
    component:Home,
    meta: {
      isShowFooterGuide:true
    }
  },
  {
    path:'/Flush',
    component:Flush
  },
  {
    path:'/Sort',
    component:Sort
  },
  {
    path:'/',
    component:Login
  }
]