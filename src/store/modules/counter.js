export default {
  state: {
    counter: 0
  },

  mutations: {
    increment (state) {
        state.counter++;
    },
    decrement (state) {
        state.counter--;
    },
    reset(state) {
        state.counter = 0;
    }
  },

  actions: {
    asyncIncrement ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 3000)
      })
    },
    asyncDecrement ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('decrement')
          resolve()
        }, 3000)
      })
    },

    asyncReset ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('reset')
          resolve()
        }, 3000)
      })
    }
  }
}