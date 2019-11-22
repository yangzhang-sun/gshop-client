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
import Wdetail from '../pages/Wdetail/Wdetail'
=======
import SortList from '../pages/SortList/SortList.vue'
import Purchase from '../pages/Purchase/Purchase.vue'
>>>>>>> 764a6d2fab0870155e8e3979942c11fa62a85c24

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
  }
]