import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CarDash from '../views/Car Dashboard.vue';
import Carlogin from '../views/Car Login.vue';
import Carregistration from '../views/Car Registration.vue';
import shop from '../views/Shop.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/CarDash',
    name: 'CarDash',
    component: CarDash,
    meta: { requiresAuth: true },
  },
  {
    path: '/Carlogin',
    name: 'Carlogin',
    component: Carlogin,
    meta: { requiresGuest: true },
  },
  {
    path: '/Carregistration',
    name: 'Carregistration',
    component: Carregistration,
    meta: { requiresGuest: true },
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop,
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
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
  } else if (to.matched.some(record => record.meta.requiresGuest )) {
    if (store.getters.isLoggedIn) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
