export default {
  state: {
      items: {}
  },

  actions: {
    fetchData (state) {
        fetch("./rentalOffice.json")
            .then(response => response.json())
            .then(data => {
                state.items = data
                console.log(state.items)
          })
        },
  }  
}
