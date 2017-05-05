import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

import CloseList from './modules/closelist.js'

export default new Vuex.Store({
  modules:{
    CloseList
  }
})
