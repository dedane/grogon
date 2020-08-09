import vue from 'vue'
import Router from 'vue-router'

import MechDash from '../views/Mech Dashboard.vue';
import MechLogin from '../views/Mech Login.vue';
import MechRegistration from '../views/Mech Registration.vue';

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
        meta: { requiresGuest: true },
      },
      {
        path: '/MechRegistration',
        name: 'MechRegistration',
        component: MechRegistration,
        meta: { requiresGuest: true },
      },
]