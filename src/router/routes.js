/*
 *@Description: 所有的路由组件
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-20 23:26:53
 *@NO BUG!!! It is better to be clear than to be clever
*/
// import Login from '../pages/Login/Login.vue'
// import Cart from '../pages/Cart/Cart.vue'
// import Home from '../pages/Home/Home.vue'
// import Flush from '../pages/Flush/Flush.vue'
// 首页组件懒加载
let Login = () => import ('../pages/Login/Login.vue')
let Cart  = () => import ('../pages/Cart/Cart.vue')
let Home  = () => import ('../pages/Home/Home.vue')
let Flush = () => import ('../pages/Flush/Flush.vue')


import Sort from '../pages/Sort/Sort.vue'
import Wdetail from '../pages/Wdetail/Wdetail'
import SortList from '../pages/SortList/SortList.vue'
import Purchase from '../pages/Purchase/Purchase.vue'
import WhiteJiu from '../pages/Home/WhiteJiu/WhiteJiu.vue'
import CartList from '../components/CartList/CartList.vue'
import CartEmply from '../components/CartEmply/CartEmply.vue'
import Mine from '../pages/Mine/Mine.vue'
import Search from '../pages/Home/Search/Search.vue'

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
    path:'/whiteJiu',
    component:WhiteJiu,
  },
  {
    path:'/search',
    component:Search,
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
  },
  {
    path: '/wdetail',
    component:Wdetail 
  },

  {path:'/sortList',
    component:SortList
  },

  {
    path:'/',
    redirect: '/sort'
  },
  {
    path:'/mine',
    component:Mine
  }
]