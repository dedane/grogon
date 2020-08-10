import Vue from 'vue';
import Axios from 'axios';
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

new Vue({
  router,
  Axios,
  store,
  Mapbox,
  vuetify,
  render: (h) => h(App),
})
  .$mount('#app');
