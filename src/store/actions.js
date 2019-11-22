/*
 *@Description: 间接更改数据.调用commit
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:33:46
 *@NO BUG!!! It is better to be clear than to be clever
*/
import {
  getWines,
} from '../api'

import { 
  SAVE_WINES ,
} from './mutation-type'

export default {
  async getWinesAction({commit}){
    let result = await getWines()
    if(result.code === 0){
      commit(SAVE_WINES,{wines:result.data})
    }
  }
}