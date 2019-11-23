/*
 *@Description: mutations用于直接修改state状态
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:30:10
 *@NO BUG!!! It is better to be clear than to be clever
*/

import {
  SAVE_WINES,
  SAVE_PRODUCTS
} from './mutation-type'



export default{
  [SAVE_WINES](state,{wines}){
    state.wines = wines
    console.log('mutations',state.wines)
  },
  [SAVE_PRODUCTS](state,{products}){
    state.products = products
  }
}