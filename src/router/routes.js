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
<<<<<<< HEAD
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
=======
import SortList from '../pages/SortList/SortList.vue'
import Purchase from '../pages/Purchase/Purchase.vue'

export default[
  {
    path:'/login',
    component:Login
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/home',
    component:Home
    // meta:{//只有一个页面需要底部导航
    //   isShowFooterGuide:true
    // }
  },
  {
    path: '/Purchase',
    component: Purchase
  },
  {
    path:'/flush',
    component:Flush
  },
  {
    path:'/sort',
    component:Sort
>>>>>>> 764a6d2fab0870155e8e3979942c11fa62a85c24
  },
  {
    path:'/sortList',
    component:SortList
  },
  {
    path:'/',
<<<<<<< HEAD
    redirect:'/whileJiu'
=======
    redirect: '/sort'
>>>>>>> 764a6d2fab0870155e8e3979942c11fa62a85c24
  }
]