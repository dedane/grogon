import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CarDash from '../views/Car Dashboard.vue';
import Carlogin from '../views/Car Login.vue';
import Carregistration from '../views/Car Registration.vue';
import shop from '../views/Shop.vue';
import MechDash from '../views/Mech Dashboard.vue';
import MechLogin from '../views/Mech Login.vue';
import MechRegistration from '../views/Mech Registration.vue';
/* import store from '../store'; */

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
  },
  {
    path: '/Carregistration',
    name: 'Carregistration',
    component: Carregistration,
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop,
  },
  {
    path: '/MechDash',
    name: 'MechDash',
    component: MechDash,
    meta: { requiresAuth: true },
  },
  {
    path: '/MechLogin',
    name: 'MechLogin',
    component: MechLogin,
  },
  {
    path: '/MechRegistration',
    name: 'MechRegistration',
    component: MechRegistration,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/* router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.mech) {
      next({
        name: 'MechLogin',
      });
    } else {
      next();
    }
  }
}); */

export default router;
