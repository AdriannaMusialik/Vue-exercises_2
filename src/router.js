import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './components/Counter';

Vue.use(VueRouter);

const routes = [
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
