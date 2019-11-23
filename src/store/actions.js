/*
 *@Description: 间接更改数据.调用commit
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:33:46
 *@NO BUG!!! It is better to be clear than to be clever
*/
import {
  getWines,
  getProducts
} from '../api'

import { 
  SAVE_WINES ,
  SAVE_PRODUCTS
} from './mutation-type'

export default {
  async getWinesAction({commit}){
    let result = await getWines()
    if(result.code === 0){ 
      commit(SAVE_WINES,{wines:result.data})
    }
  },
  async gitProductAction({commit}){
    //1.发送请求
    let result = await getProducts()
    if (result.code ===0) {
      commit(SAVE_PRODUCTS,{products:result.data})
    }
    //2.diaoyong mutation,将数据交给mutation
  }
}