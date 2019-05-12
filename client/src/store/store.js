import Vue from 'vue'
import Vuex from 'vuex'

// tell Vue to use vuex
Vue.use(Vuex)

export default new Vuex.Store({
  // strict means state cannot be modified outside action or mutation
  strict: true,
  state: {
    token: null,
    user: null,
    // add functionality for logged in users
    isLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    }
  }
})
