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
    mech: {},
    // eslint-disable-next-line no-dupe-keys
    mech: {},
    driver: {},
    // eslint-disable-next-line no-dupe-keys
    driver: [],
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, payload) {
      state.status = 'success';
      state.token = token;
      state.mech = payload;
      state.driver = payload;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
    updateDriver(state, payload) {
      /* state.driver = state.driver.map((d) => { */
      /* if (d.id === payload.id) { */
      /* eslint no-param-reassign: "error" */
      /* const Payload = {
            ...payload, driver: state.driver.filter((x) => x.id === payload.driver)[0],
          };
          return Payload;
        }
        return d; */
      state.driver.push(payload);
    },
    /* updateDriver_success(state, payload){
    } */
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
            const mech = {
              id: res.data.id,
              Email: res.data.Email,
            };
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', mech);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, mech);
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
            const mech = {
              id: res.data.id,
              Email: res.data.Email,
            };
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', mech);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, mech);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    driverRegistration({ commit }, driver) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/driver/register', driver)
          .then((res) => {
            const { token } = res.data;
            const mech = {
              id: res.data.id,
              Email: res.data.Email,
            };
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', mech);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, mech);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    driverLogin({ commit }, driver) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/driver/login', driver)
          .then((res) => {
            const { token } = res.data;
            const mech = {
              id: res.data.id,
              Email: res.data.Email,
            };
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', mech);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, mech);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    Logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        /* Location.reload();
        Vue.$cookies.remove('_token');
        Vue.$cookies.remove('mech');
        Vue.$cookies.remove('driver'); */

        delete axios.defaults.headers.common.Authorization;
        resolve();
      });
    },
    EditDriver({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('updateDriver');
        // eslint-disable-next-line no-template-curly-in-string
        axios.patch('/driver/register/${payload._id}', payload)
          .then((resp) => {
            const { token } = resp.data;
            /* const { user } = resp.data; */
            Vue.$cookies.setItem('token', token);
            commit('updateDriver', resp.data);
            axios.defaults.headers.common.Authorization = token;
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
