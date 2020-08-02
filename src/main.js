import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import store from "./store/index.js"

Vue.use(Vuetify);

Vue.config.productionTip = false;
const vuetifyOptions = { };

new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App),
}).$mount('#app');

