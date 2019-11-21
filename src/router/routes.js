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
import SortList from '../pages/SortList/SortList.vue'
=======
import Purchase from '../pages/Purchase/Purchase.vue'
>>>>>>> 7ab942221576ca71038ecb59470f49fa903431b2

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
<<<<<<< HEAD
    path:'/home',
    component:Home
    // meta:{//只有一个页面需要底部导航
    //   isShowFooterGuide:true
    // }
=======
    path:'/Home',
    component:Home,
  },
  {
    path: '/Purchase',
    component: Purchase
>>>>>>> 7ab942221576ca71038ecb59470f49fa903431b2
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
    path:'/sortList',
    component:SortList
  },
  {
    path:'/',
<<<<<<< HEAD
    redirect:'/sort'
=======
    redirect: '/Purchase'
>>>>>>> 7ab942221576ca71038ecb59470f49fa903431b2
  }
]