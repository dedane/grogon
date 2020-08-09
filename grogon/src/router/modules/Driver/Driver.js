import vue from 'vue';
import Router from 'vue-router';
import CarDash from '@/views/Car Dashboard.vue';
import Carlogin from '@/views/Car Login.vue';
import Carregistration from '@/views/Car Registration.vue';
import Car from '@/views/Car.vue';

vue.use(Router);

export default [
  {
    path: '/Car',
    name: 'Car',
    component: Car,
    beforeEnter(to, from, next) {
      const currentUser = JSON.parse(window.localStorage.currentUser);
      if (currentUser) {
        next();
      } else {
        next('/');
      }
    },
    children: [
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
    ],
  },
];
