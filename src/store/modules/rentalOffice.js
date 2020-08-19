export default {
  state: {
      items: []
  },

  mutations: {
    addItems (state, data) {
      state.items = data;
    },
    rentItem (state, itemId) {
      const index = state.items.findIndex(item => item.id === itemId);
      state.items[index].status = false;
    },
    returnItem (state, itemId) {
      const index = state.items.findIndex(item => item.id === itemId);
      state.items[index].status = true;
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
