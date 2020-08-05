export default {
  state: {
      items: []
  },

  mutations: {
     addItems (state, data) {
      state.items = data
    },
  },

  actions: {
    async fetchData ({commit}) {
      await fetch("./rentalOffice.json")
      .then(response => response.json())
      .then(data => commit('addItems', data))
    },
  } 
}
