const MUTATIONS = {
  START: 'start',
  PERFORM: 'perform',
  DONE: 'done',
  FAIL: 'fail',
  CANCEL: 'cancel'
}

export const STAGES = {
  PENDING: 'Pending',
  STARTED: 'Started',
  LOADING: 'Loading',
  DONE: 'Done',
  FAIL: 'Fail'
}

const getMutationTypes = (stateName) => {
  return {
    START: `${stateName}_${MUTATIONS.START}`,
    PERFORM: `${stateName}_${MUTATIONS.PERFORM}`,
    DONE: `${stateName}_${MUTATIONS.DONE}`,
    FAIL: `${stateName}_${MUTATIONS.FAIL}`,
    CANCEL: `${stateName}_${MUTATIONS.CANCEL}`
  }
}

export const generateState = (stateName) => {
  return {
    stage: STAGES.PENDING,
    params: null,
    data: null,
    error: null
  }
}

export const generateGetters = (stateName) => {
  return {
    [`${stateName}_data`]: state => state[stateName].data,
    [`${stateName}_stage`]: state => state[stateName].stage,
    [`${stateName}_params`]: state => state[stateName].params,
    [`${stateName}_error`]: state => state[stateName].error
  }
}

export const generateMutations = (stateName) => {
  const types = getMutationTypes(stateName)
  return {
    [types.START]: (state, params) => {
      state[stateName].error = null
      state[stateName].stage = STAGES.STARTED
      if (params) {
        state[stateName].params = params
      }
    },
    [types.PERFORM]: (state, params) => {
      state[stateName].error = null
      state[stateName].stage = STAGES.LOADING
      if (params) {
        state[stateName].params = params
      }
    },
    [types.CANCEL]: (state) => {
      state[stateName].stage = STAGES.PENDING
    },
    [types.DONE]: (state, data) => {
      state[stateName].stage = STAGES.DONE
      state[stateName].data = data
    },
    [types.FAIL]: (state, err) => {
      state[stateName].stage = STAGES.FAIL
      state[stateName].error = err
    }
  }
}

export const generateActions = (stateName, {
    createPerformPromise
  }) => {
  const types = getMutationTypes(stateName)
  return {
    [`${stateName}_start`]({ commit, state }, params) {
      commit(types.START, params)
    },
    [`${stateName}_perform`]({ commit, state }, params) {
      commit(types.PERFORM, params)
      createPerformPromise(params)
        .then((data) => {
          commit(types.DONE, data)
          // console.log(state[stateName].data)
        })
        .catch((err) => {
          commit(types.FAIL, err)
        })
    },
    // 手动更新action, 直接替换state tree里的data字段
    [`${stateName}_update`]({ commit, state }, data) {
      commit(types.DONE, data)
    },
    [`${stateName}_cancel`]({ commit, state }) {
      if (state[stateName].stage === STAGES.LOADING) return;
      commit(types.CANCEL)
    }
  }
}
