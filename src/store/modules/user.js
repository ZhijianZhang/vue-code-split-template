import { generateState, generateActions, generateMutations, generateGetters } from '../generator'
import { getTodo } from '@/apis'

const STATE_NAME = {
  GET_TODOS: 'getTodos',
}

const state = {
  [STATE_NAME.GET_TODOS]: generateState(STATE_NAME.GET_TODOS),
  currentTab: {
    key: 0,
  }
}

const getters = {
  ...generateGetters(STATE_NAME.GET_TODOS),
  getCurrentTab: state => {
    return state.currentTab;
  }
}

const mutations = {
  ...generateMutations(STATE_NAME.GET_TODOS),
  changeTab(state, payload) {
    state.currentTab.key = payload.key;
  },
}

const actions = {
  ...generateActions(STATE_NAME.GET_TODOS, {
    createPerformPromise: getTodo
  })
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
