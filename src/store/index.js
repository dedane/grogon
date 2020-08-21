// eslint-disable-file
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueCookies from 'vue-cookies';
import * as firebase from 'firebase';

Vue.use(Vuex);

Vue.use(VueCookies);
Vue.$cookies.config('30d');

axios.defaults.baseURL = 'https://grogon-back.herokuapp.com/';

export default new Vuex.Store({

  state: {
    status: '',
    token: Vue.$cookies.get('token') || '',
    mech: [
      {
        Batterypower: "14",
        Engineoil: "15",
        Fuel: "12",
        Milleage: "12",
        Nextservice: "12",
        Wheelhealth: "12"
      },
      {
        Batterypower: "15",
        Engineoil: "16",
        Fuel: "72",
        Milleage: "42",
        Nextservice: "82",
        Wheelhealth: "62"
      }
    ],
    // eslint-disable-next-line no-dupe-keys
    // eslint-disable-next-line no-dupe-keys
    driver: [
      {
        Batterypower: "14",
        Engineoil: "15",
        Fuel: "12",
        Milleage: "12",
        Nextservice: "12",
        Wheelhealth: "12"
      },
      {
        Batterypower: "15",
        Engineoil: "16",
        Fuel: "72",
        Milleage: "42",
        Nextservice: "82",
        Wheelhealth: "62"
      }
    ],
    user: null,
    loading: false,
    error: null,
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
    setDriver(state, payload) {
      state.driver = payload;
    },
    driver(state){
      return state.driver
    },
    error (state){
      return state.status = 'error'
    },
    setMechanic(state, payload) {
      state.Mech = payload;
    },
    setLoadedDrivers(state, payload) {
      state.driver = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    updateDrivers(state, payload) {
      /* state.driver = state.driver.map((d) => { */
      /* if (d.id === payload.id) { */
      /* eslint no-param-reassign: "error" */
      /* const Payload = {
            ...payload, driver: state.driver.filter((x) => x.id === payload.driver)[0],
          };
          return Payload;
        }
        return d; */
        const drivers = state.driver.find(drivers => {
          return drivers.id === payload.id
        })
        if (payload.Batterypower) {
          drivers.Batterypower = payload.Batterypower
        }
        if (payload.Engineoil) {
          drivers.Engineoil = payload.Engineoil
        }
        if (payload.Fuel) {
          drivers.Fuel = payload.Fuel
        }
        if (payload.Milleage) {
          drivers.Milleage = payload.Milleage
        }
        if (payload.Nextservice) {
          drivers.Nextservice = payload.Nextservice
        }
        if (payload.Nextservice) {
          drivers.Nextservice = payload.Nextservice 
        }
    },
    updateDriver_success(state, payload) {
      state.status = 'success';
      state.driver.push(payload);
    },
    /* updateDriver_success(state, payload){
    } */
  },
  getters: {
    isLoggedIn: (state) => state.token,
    authStatus: (state) => state.status,
    driver: (state) => state.driver,
    Mech: (state) => state.Mech,
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    loadedDriver (state) {
      return (driverId) => {
        return state.driver.find((driver) => {
          return driver.id === driverId
        })
      }
    },
  },

  actions: {

    mechRegister({ commit }, payload) {
      /* return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/mechanic/register', payload)
          .then((res) => {
            const token = res.data;
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
      }); */
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          mech => {
            commit('setLoading', false)
            const newMech = {
              id: mech.uid,
             // registeredMeetups: []
            }
            commit('setMechanic', newMech)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    mechLogin({ commit }, payload) {
    /*  return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/mechanic/login', payload)
          .then((res) => {
            const { token } = res.data;
            const id = res.data.id; // eslint-disable-line prefer-destructuring
            const Email = res.data.Email; // eslint-disable-line prefer-destructuring
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('user', id, Email);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, id, Email);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      }); */
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          mech => {
            commit('setLoading', false)
            const newMech = {
              id: mech.uid,
             // registeredMeetups: []
            }
            commit('setMechanic', newMech)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    driverRegistration({ commit }, payload) {
      /* return new Promise((resolve, reject) => {
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
            reject(err);
          });
      }); */
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          driver => {
            commit('setLoading', false)
            const newDriver = {
              id: driver.uid,
              // registeredMeetups: []
            }
            commit('setDriver', newDriver)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    driverLogin({ commit }, payload) {
      /* return new Promise((resolve, reject) => {
        commit('auth_request');
        axios.post('https://grogon-back.herokuapp.com/driver/login', payload)
          .then((res) => {
            const { token } = res.data;
            // eslint-disable-next-line prefer-destructuring
            const id = res.data._id; // eslint-disable-line no-underscore-dangle
            // eslint-disable-next-line prefer-destructuring
            const Email = res.data.Email;
            Vue.$cookies.set('token', token);
            Vue.$cookies.set('driver', id);
            console.log(typeof 'driver');
            Vue.$cookies.set('Email', Email);

            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, id);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      }); */
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          driver => {
            commit('setLoading', false)
            const newDriver = {
              id: driver.uid,
              // registeredMeetups: []
            }
            commit('setDriver', newDriver)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    EditDriver({ commit }, payload) {
      /* return new Promise((resolve, reject) => {
        commit('auth_success');
        // eslint-disable-next-line no-template-curly-in-string
        // eslint-disable-line no-underscore-dangle
        axios.patch(`/driver/register/${payload.Id}`, payload) // eslint-disable-line
        console.log(payload._id) // eslint-disable-line no-underscore-dangle
          .then((resp) => {
            /* const { user } = resp.data; */
      /* const { token } = resp.data; // eslint-disable-line no-shadow
            commit('updateDriver', resp.data);
            Vue.$cookies.set('driver', resp.data);
            axios.defaults.headers.common.Authorization = token;
          }) */
    /* .catch((err) => {
            commit('auth_error');
            reject(err);
          }); */
     // }); */
        /* const updateDriver = {
          Batterypower: payload.Batterypower,
          Engineoil: payload.Engineoil,
          Fuel: payload.Fuel,
          Milleage: payload.Milleage,
          Nextservice: payload.Nextservice,
          Wheelhealth: payload.Wheelhealth,
        }
        firebase.database( ).ref('drivers').push(updateDriver)
          .then((data) => {
            console.log(data)
            const key = data.key
            commit('updateDrivers', {
              ...updateDriver,
              id: key
            })
          })
          .catch((error) => {
            console.log(error)
          }) */
      commit('setLoading', true)
      const updateObj = {}
      if (payload.Batterypower) {
        updateObj.Batterypower = payload.Batterypower
      }
      if (payload.Engineoil) {
        updateObj.Engineoil = payload.Engineoil
      }
      if (payload.Fuel) {
        updateObj.Fuel = payload.Fuel
      }
      if (payload.Milleage) {
        updateObj.Milleage = payload.Milleage
      }
      if (payload.Nextservice) {
        updateObj.Nextservice = payload.Nextservice
      }
      if (payload.Wheelhealth) {
        updateObj.Wheelhealth = payload.Wheelhealth
      }

      firebase.database().ref('drivers').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateDrivers', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    loadDrivers ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('drivers').once('value')
        .then((data) => {
          const drivers = []
          const obj = data.val()
          for (let key in obj) {
            drivers.push({
              id: key,
              Batterypower: obj[key].Batterypower,
              Engineoil: obj[key].Engineoil,
              Fuel: obj[key].Fuel,
              Milleage: obj[key].Milleage,
              Nextservice: obj[key].Nextservice,
              Wheelhealth: obj[key].Wheelhealth
            })
          }
          commit('setLoadedDrivers', drivers)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
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
    // eslint-disable-next-line no-unused-vars
  },
});
