import vue from 'vue';
import Router from 'vue-router';

const MechDash = () => import('@/views/Mech Dashboard.vue');
const MechLogin = () => import('@/views/Mech Login.vue');
const MechRegistration = () => import('@/views/Mech Registration.vue');

vue.use(Router);

export default [
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
    meta: { requiresAuth: false },
  },
  {
    path: '/MechRegistration',
    name: 'MechRegistration',
    component: MechRegistration,
    meta: { requiresAuth: false },
  },
];
