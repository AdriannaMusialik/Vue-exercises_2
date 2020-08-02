import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';
import counter from "./modules/counter"
import rentalOffice from "./modules/rentalOffice"

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
   modules: {
      counter,
      rentalOffice,
   },
   strict: debug,
   plugins: debug? [ createLogger() ] : [],
})
