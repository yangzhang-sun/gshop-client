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
import CartList from '../components/CartList/CartList.vue'
import CartEmply from '../components/CartEmply/CartEmply.vue'
import WhileJiu from '../pages/Home/WhiteJiu/WhiteJiu.vue'

export default[
  {
    path:'/Login',
    component:Login,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/Cart',
    component:Cart,
    children:[
      {
        path:'/Cart/CartList',
        component:CartList,
      },
      {
        path:'/Cart/CartEmply',
        component:CartEmply,
      }
    ]
  },
  {
    path:'/Home',
    component:Home,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/whileJiu',
    component:WhileJiu,
  },
  {
    path:'/Flush',
    component:Flush,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/Sort',
    component:Sort,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/',
    redirect:'/whileJiu'
  }
]