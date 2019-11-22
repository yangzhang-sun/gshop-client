/*
 *@Description: 核心store对象
 *@ClassAuthor: 卡奇007
 *@Date: 2019-11-22 13:21:58
 *@NO BUG!!! It is better to be clear than to be clever
*/

  import Vue from 'vue'
  import Vuex from 'vuex'

  import state from './state'
  import mutations from './mutations'
  import actions from './actions'
  import getters from './getters'

  Vue.use(Vuex)

  // 向外暴露一个store对象
  export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })