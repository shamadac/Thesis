import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    error: null,
    success: null,
    user: null,
    communities: null
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isLoggedIn = status
    },
    alertInfo(state, payload) {
      state[payload.type] = payload.message
    },
    setUser(state, payload) {
      state.user = payload
    },
    setData(state, payload) {
      const [ key, data ] = payload
      state[key] = data
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  getters: {
    userFullName: ({ user }) => {
      return `${user.firstname} ${user.lastname}`
    }
  },
  actions: {
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('/api/logout')
          .then(({ data }) => {
            commit('setLoginStatus', data.authenticated)
            resolve()
          })
          .catch(({ response }) => {
            commit('setLoginStatus', response.data.authenticated)
            reject()
          })
      })
    },
    updateAlert({ commit }, payload) {
      commit('alertInfo', payload)
      setTimeout(() => {
        payload.message = null
        commit('alertInfo', payload)
      }, 3000)
    },
    getData({ commit }, route) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/${route}`)
          .then(res => {
            console.log('getData', res)
          })
          .catch(err => {
            console.log('getData', err)
          })
      })
    }
  }
})
