import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
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
    reset() {
        this.state.counter = 0;
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
})

export default store;