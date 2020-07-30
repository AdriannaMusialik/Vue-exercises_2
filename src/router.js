import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Counter from './components/Counter';

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
];

const router = new VueRouter({
  routes,
});

export default router;
