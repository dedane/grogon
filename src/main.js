import Vue from 'vue';
import Axios from 'axios';
import firebase from 'firebase';
import VueCookies from 'vue-cookies';
import Mapbox from 'mapbox-gl-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token;
}
Vue.config.productionTip = false;
Vue.use(VueCookies);

const firebaseConfig = {
  apiKey: 'AIzaSyDhZGdLSLjPIhl6gH7hO3MogkYpTuwoSmI',
  authDomain: 'grogon-49d92.firebaseapp.com',
  databaseURL: 'https://grogon-49d92.firebaseio.com',
  projectId: 'grogon-49d92',
  storageBucket: 'grogon-49d92.appspot.com',
  messagingSenderId: '783487780109',
  appId: '1:783487780109:web:eb6c77807080fa96259c44',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  Axios,
  store,
  Mapbox,
  vuetify,
  render: (h) => h(App),
})
  .$mount('#app');
