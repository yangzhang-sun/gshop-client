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
})

=======
>>>>>>> 362663c7422bb8510049e8c524b52cea27be9ca7
export const getProducts = () => ajax({
  url:'/Products'

})