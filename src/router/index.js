import Vue from 'vue';
import VueRouter from 'vue-router';
import commonRouters from './common';

Vue.use(VueRouter);

const routes = [ ...commonRouters ]

const router = new VueRouter({

  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
