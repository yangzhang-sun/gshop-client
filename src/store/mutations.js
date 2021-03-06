/*
 *@Description: mutations用于直接修改state状态
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:30:10
 *@NO BUG!!! It is better to be clear than to be clever
*/

import {
  SAVE_WINES,
  SAVE_GOODS_SHOPS,
  SAVE_PRODUCTS,
  SAVE_FLUSHDATAS,
  SAVE_CUXIAO1,
  SAVE_CUXIAO2,
  SAVE_ADD_GOOD,
  SAVE_REDUCE_GOOD,
  SAVE_DETELE_GOOD,
  SAVE_CHECK_GOOD
} from './mutation-type'



export default{
  [SAVE_WINES](state,{wines}){
    state.wines = wines
  },
  [SAVE_GOODS_SHOPS](state,goods) {
    state.goods = goods
    // console.log('mutations',state.wines)
  },
  [SAVE_PRODUCTS](state,{products}){
    state.products = products
  },
  [SAVE_FLUSHDATAS](state,{flushdatas}){
    state.flushdatas = flushdatas
  },
  [SAVE_CUXIAO1](state,{cuxiao1}){
    state.cuxiao1 = cuxiao1
  },
  [SAVE_CUXIAO2](state,{cuxiao2}){
    state.cuxiao2 = cuxiao2
  }, 
  [SAVE_ADD_GOOD](state,itemId){
    state.goods.forEach(elements => {
      // console.log(elements.jiuxianziying)
      elements.jiuxianziying.forEach(element => {
        // console.log(element)
        if(element.count >= 1 && element.id === itemId){
          // console.log(element.count)
          element.count++
        }
      })
    })
  },
  [SAVE_REDUCE_GOOD](state,itemId){
    state.goods.forEach(elements => {
      // console.log(elements.jiuxianziying)
      elements.jiuxianziying.forEach(element => {
        // console.log(element)
        if(element.count <= 1){
          return
        }
        if(element.id === itemId){
          // console.log(element.count)
          element.count--
        }
      })
    })
  },
  [SAVE_DETELE_GOOD](state, {ItemId, goodId}){
    state.goods.forEach((elements,index) => {
          if(elements.jiuxianziying.length <= 1 && elements.id === goodId) {
             state.goods.splice(index,1)
          }
          elements.jiuxianziying.forEach((element,index) => {
            if(element.id === ItemId){
              elements.jiuxianziying.splice(index,1)
            }
          })
      })
  },
  [SAVE_CHECK_GOOD](state, {ItemId, goodId,flagItem}){
    // console.log(ItemId, goodId,flagItem)
    state.goods.forEach((elements,index) => {
          // if(elements.jiuxianziying.length <= 1 && elements.id === goodId) {
          //    state.goods.splice(index,1)
          // }
          elements.jiuxianziying.forEach((element,index) => {
            if(element.id === ItemId){
              element.isCheckedItem = true
            }
          })
      })
      flagItem(ItemId, goodId)
  }
}


