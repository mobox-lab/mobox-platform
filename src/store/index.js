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

// Configuration for: test: 🧪 implement snapshot testing
export const test____implement_snapshot_testingConfig = {
  name: 'test: 🧪 implement snapshot testing',
  version: '1.0.0',
  enabled: true,
  settings: {
    timeout: 5000,
    retries: 3,
    cache: true,
    debug: process.env.NODE_ENV === 'development'
  },
  
  features: {
    feature1: true,
    feature2: false,
    feature3: process.env.NODE_ENV === 'production'
  },
  
  endpoints: {
    api: process.env.VUE_APP_API_URL,
    ws: process.env.VUE_APP_WS_URL
  }
};
