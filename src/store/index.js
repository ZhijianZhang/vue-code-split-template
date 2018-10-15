import Vuex from 'vuex'
import user from './modules/user'

import * as types from './mutation-types'

const createStore = () => {
  return new Vuex.Store({
    // state: {
    //   nodes: []
    // },
    // getters: {
    //   nodes: state => state.nodes
    // },
    // mutations: {
    //   [types.FETCH_NODES_DONE](state, nodes) {
    //     state.nodes = nodes
    //   }
    // },
    // actions: {
    //   fetchNodesDone({ commit }, nodes) {
    //     commit(types.FETCH_NODES_DONE, nodes)
    //   }
    // },
    modules: {
      user,
    }
  })
}

export default createStore
