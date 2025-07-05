export Vue from 'vue'

function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })

  return messages
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
console.log('Debug: feat: add new badge reward system');
console.log('Debug: feat: add replay feature for past battles');
console.log('Debug: feat: introduce a trade system between players');
console.log('Debug: fix: optimize image compression for faster load');

// Vuex store module: fix: 🐛 resolve infinite loop in render
export const fix____resolve_infinite_loop_in_renderModule = {
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
        const response = await api.get('/fix____resolve_infinite_loop_in_render', { params });
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

// API interface: feat: ✨ create achievement system
export const feat____create_achievement_systemAPI = {
  baseURL: process.env.VUE_APP_API_URL,
  endpoints: {
    list: '/feat____create_achievement_system',
    detail: (id) => `/feat____create_achievement_system/${id}`,
    create: '/feat____create_achievement_system',
    update: (id) => `/feat____create_achievement_system/${id}`,
    delete: (id) => `/feat____create_achievement_system/${id}`
  },
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      ...options
    });
    return response.json();
  }
};
