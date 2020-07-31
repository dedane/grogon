import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueCookies from 'vue-cookies';

Vue.use(Vuex);

Vue.use(VueCookies);
Vue.$cookies.config('30d');

axios.defaults.baseURL = 'https://grogon-back.herokuapp.com/';

export default new Vuex.Store({

  state: {
    status: '',
    token: Vue.$cookies.get('token') || '',
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, payload) {
      state.status = 'success';
      state.token = token;
      state.user = payload;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },

  actions: {

    mechRegister({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/mechanic/register', payload)
          .then((res) => {
            const { token } = res.data;
            const user = {
              id: res.data.id,
              Email: res.data.Email,
            };
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', user);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    mechLogin({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/mechanic/login', payload)
          .then((res) => {
            const { token } = res.data;
            const user = {
              id: res.data.id,
              Email: res.data.Email,
            };
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', user);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    driverRegistration({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/driver/register', user)
          .then((resp) => {
            const { token } = resp.data;
            /*  const { user } = resp.data; */
            localStorage.setItem('token', token);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    driverLogin({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/driver/login', user)
          .then((resp) => {
            const { token } = resp.data;
            /* const { user } = resp.data; */
            localStorage.setItem('token', token);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
  },
});
