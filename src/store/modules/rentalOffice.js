export default {
  state: {
      items: []
  },

  mutations: {
    addItems (state, data) {
      state.items = data
    },
    rentItem (state, itemId) {
      return state.items.map(item => item.id === itemId ? {...item, status: false } : item );
    },
    returnItem (state, itemId) {
      return state.items.map(item => item.id === itemId ? {...item, status: true } : item );
    }
  },

  actions: {
    async fetchData ({commit}) {
      await fetch("./rentalOffice.json")
      .then(response => response.json())
      .then(data => commit('addItems', data))
    },
  } 
}
