/*
 *@Description: 间接更改数据.调用commit
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:33:46
 *@NO BUG!!! It is better to be clear than to be clever
*/
import {
  getWines,
  getShopAndGoodsList,
  getProducts,
  getFlushdatas,
  getCuXiao1,
  getCuXiao2
} from '../api'

import { 
  SAVE_WINES ,
  SAVE_GOODS_SHOPS,
  SAVE_PRODUCTS,
  SAVE_FLUSHDATAS,
  SAVE_CUXIAO1,
  SAVE_CUXIAO2
} from './mutation-type'

export default {
  async getWinesAction({commit}){
    let result = await getWines()
    if(result.code === 0){ 
      commit(SAVE_WINES,{wines:result.data})
    }
  },
  async getGoodsAddShopsAction({commit}){
    let result = await getShopAndGoodsList()
    if(result.code === 0){
       commit(SAVE_GOODS_SHOPS,result.data)
    }
  },
  async getProductAction({commit}){
    //1.发送请求
    let result = await getProducts()
    if (result.code ===0) {
      //2.diaoyong mutation,将数据交给mutation
      commit(SAVE_PRODUCTS,{products:result.data})
    }
  },
  async getFlushdatasAction({commit}){
    //1.发送请求
    let result = await getFlushdatas()
    if (result.code ===0) {
      //2.diaoyong mutation,将数据交给mutation
      commit(SAVE_FLUSHDATAS,{flushdatas:result.data})
    }
  },
  async getCuXiao1Action({commit}){
    let result = await getCuXiao1()
    if (result.code ===0) {
      commit(SAVE_CUXIAO1,{cuxiao1:result.data})
    }
  },
  async getCuXiao2Action({commit}){
    let result = await getCuXiao2()
    if (result.code ===0) {
      commit(SAVE_CUXIAO2,{cuxiao2:result.data})
    }
  }
}