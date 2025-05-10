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

// Internationalization: feat: ✨ implement dark mode theme
export const messages = {
  en: {
    feat____implement_dark_mode_theme: 'feat: ✨ implement dark mode theme',
    feat____implement_dark_mode_theme_description: 'Description for feat: ✨ implement dark mode theme'
  },
  zh: {
    feat____implement_dark_mode_theme: 'feat: ✨ implement dark mode theme',
    feat____implement_dark_mode_theme_description: 'feat: ✨ implement dark mode theme的描述'
  }
};
