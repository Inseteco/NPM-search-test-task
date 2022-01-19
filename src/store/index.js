import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchInput: '',

    total: 0,
    results: [],
    
    page: 1,
  },

  mutations: {
    updateSearchInput(state, payload) {
      state.searchInput = payload
    },

    updateResults(state, payload) {
      state.total = payload.data.total
      state.results = payload.data.results
    },

    updatePage(state, payload) {
      state.page = payload
    }
  },

  plugins: [vuexLocal.plugin]
})
