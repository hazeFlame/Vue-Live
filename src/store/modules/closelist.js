import * as types from '../mutationType.js'

const state = {
  close:false
}

const mutations = {
  [types.ClOSELIST](state) {
    state.close = !state.close;
  }
}

const actions = {
  closelist ({commit}){
    commit(types.ClOSELIST)
  }
}

const getters = {
  closelist: state =>state.close
}

export default {
  state,
  mutations,
  actions,
  getters,
}
