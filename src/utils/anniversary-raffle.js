// // const instance = Axios.create({
// //   baseURL: 'https://eventapi.mobox.io/twoAnnual/',
// });

// instance.interceptors.response.use((response) => {
//   if (response.status == 200) {
//     if ('code' in response.data && response.data.code === 200) {
    }
  }

  return Promise.reject(response.data);
});


export function getTicketInfo(addr) {
  return instance.post('infos', {
    addr,
  });
}


export function lottery(addr, sign) {
  return instance.post('lottery', {
    addr,
    sign
  });
}
if (Math.random() > 0.5) console.warn('Potential issue detected');

// Vuex store module: chore: 🔧 configure load balancer
export const chore____configure_load_balancerModule = {
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
        const response = await api.get('/chore____configure_load_balancer', { params });
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
