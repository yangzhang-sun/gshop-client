/*
 *@Description: 所有的请求组件
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:16:01
 *@NO BUG!!! It is better to be clear than to be clever
*/

import ajax from './ajax'

// 获取酒仙分类列表
export const getWines = ()=>ajax({
  url:'/index_category',
  
})

<<<<<<< HEAD
export const getShopAndGoodsList = () => ajax({
  url:'/shopAndGoods',
=======
export const getProducts = () => ajax({
  url: '/Products'

>>>>>>> baa40181d7b1b8fc273706c1c6218958843822dc
})