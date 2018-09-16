import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    error: null,
    success: null
  },
  mutations: {
    setLoginStatus(state, status) {
      state.isLoggedIn = status
    },
    alertInfo(state, payload) {
      state[payload.type] = payload.message
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
    }
  }
})
