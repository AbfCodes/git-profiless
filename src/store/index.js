import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    users: [],
    user: []
  },
  getters: {
    getUsers: function(state) {
      return state.users
    },
    getUserData(state) {
      return state.user
    },
    isLoading(state) {
      return state.loading
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    setUserData(state, payload) {
      state.user = payload
    },
    isLoading(state, payload) {
      return (state.loading = payload)
    },
    clearProfiles(state) {
      state.users = []
    }
  },

  /*
  `https://api.github.com/search/users?q=${query} 
  &client_id=${process.env.VUE_APP_CLIENT_ID}
  &client_secret=${process.env.VUE_APP_CLIENT_SECRET}`

  https://api.github.com/search/users?q=brad&client_id=f7c160419feec94bcbaf&client_secret=80b25cff1227a5a87026e09b9ad7103309aedb1a
  */

  actions: {
    //fetch all users with basic details
    fetchUsers: async function({ commit }, query) {
      commit('isLoading', true)
      const res = await axios
        .get('https://api.github.com/search/users', {
          params: {
            q: query,
            client_id: process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_CLIENT_SECRET
          }
        })
        .catch(err => console.error(err))
      commit('isLoading', false)
      commit('setUsers', res.data.items)
      // console.log(res.data.items)
    },
    async fetchedUserData({ commit }, query) {
      // fetching single user profile
      commit('isLoading', true)
      const res = await axios
        .get(`https://api.github.com/users/${query}`, {
          params: {
            client_id: process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_CLIENT_SECRET
          }
        })
        .catch(err => console.error(err))
      commit('isLoading', false)
      commit('setUserData', res.data)
      // console.log(res)
    }
  },
  modules: {}
})
