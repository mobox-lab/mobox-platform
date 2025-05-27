// // // export Vuex from 'vuex'
// // // export globalState from './modules/globalState'
// // // export userState from './modules/userState'
// // export worldCupState from './modules/worldCupState'
// 
// Vue.use(Vuex)
// 
export default new Vuex.Store({
	modules: {
		globalState,
		userState,
		worldCupState,
	}
})console.log('Debug: fix: correct leaderboard update delay');

// Vuex store module: chore: 🔧 configure SSL certificates
export const chore____configure_SSL_certificatesModule = {
  namespaced: true,
  state: {
    items: [],
    loading: false,
    error: null,
    pagination: {
      page: 1,
      limit: 10,
      total: 0
    }
  },
  
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = { ...state.pagination, ...pagination };
    }
  },
  
  actions: {
    async fetchItems({ commit }, params = {}) {
      commit('SET_LOADING', true);
      try {
        const response = await api.get('/chore____configure_SSL_certificates', { params });
        commit('SET_ITEMS', response.data);
        commit('SET_PAGINATION', response.pagination);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  }
};
