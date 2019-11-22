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
import SortList from '../pages/SortList/SortList.vue'
import Purchase from '../pages/Purchase/Purchase.vue'


export default[
  {
    path:'/login',
    component:Login,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/cart',
    component:Cart,
    children:[
      {
        path:'/cart/cartList',
        component:CartList,
      },
      {
        path:'/cart/cartEmply',
        component:CartEmply,
      }
    ]
  },
  {
    path:'/home',
    component:Home,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/purchase',
    component: Purchase
  },
  {
    path:'/whileJiu',
    component:WhileJiu,
  },
  {
    path:'/flush',
    component:Flush,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path:'/sort',
    component:Sort,
    meta: {
      isShowFooterGuide: true
    }
  }
]