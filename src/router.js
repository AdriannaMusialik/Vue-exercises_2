import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Counter from './components/Counter';
import RentalOffice from './components/RentalOffice';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/RentalOffice',
    name: 'RentalOffice',
    component: RentalOffice,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
