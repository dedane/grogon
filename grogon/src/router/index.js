import Vue from 'vue';
import VueRouter from 'vue-router';
import DriverRoute from './modules/Driver/Driver';
import MechanicRoute from './modules/mechanic/Mechanic';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      refresh: false,
    },
  },
];
const routes = baseRoutes.concat(DriverRoute, MechanicRoute);

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next({
        path: 'MechLogin',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
