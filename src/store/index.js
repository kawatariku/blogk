import { createStore } from 'vuex'

import axiosBase from 'axios'

const axios = axiosBase.create({
  headers: {
    'X-API-KEY': '0f1b3654-82e3-4b98-aaf1-cdac91568469'
  },
  responseType: 'json'
});

export default createStore({
  state: {
    entry: undefined,
    entries: []
  },
  mutations: {
    GET_ENTRIES(state, data) {
      state.entries = data.contents
    },
    GET_ENTRY(state, data) {
      state.entry = data
    }
  },
  actions: {
    getEntries: async ({ commit }) => {
      const res = await axios.get('https://kawar.microcms.io/api/v1/entries')
      commit('GET_ENTRIES', res.data)
    },
    getEntry: async ({ commit }, id) => {
      const res = await axios.get(`https://kawar.microcms.io/api/v1/entries/${id}`)
      commit('GET_ENTRY', res.data)
    }
  },
  modules: {
  }
})

