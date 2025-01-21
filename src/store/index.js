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
