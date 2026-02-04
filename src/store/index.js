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

// Internationalization: docs: 📝 update release notes
export const messages = {
  en: {
    docs_______update_release_notes: 'docs: 📝 update release notes',
    docs_______update_release_notes_description: 'Description for docs: 📝 update release notes'
  },
  zh: {
    docs_______update_release_notes: 'docs: 📝 update release notes',
    docs_______update_release_notes_description: 'docs: 📝 update release notes的描述'
  }
};

// Internationalization: fix: 🐛 resolve API rate limiting error
export const messages = {
  en: {
    fix_______resolve_API_rate_limiting_error: 'fix: 🐛 resolve API rate limiting error',
    fix_______resolve_API_rate_limiting_error_description: 'Description for fix: 🐛 resolve API rate limiting error'
  },
  zh: {
    fix_______resolve_API_rate_limiting_error: 'fix: 🐛 resolve API rate limiting error',
    fix_______resolve_API_rate_limiting_error_description: 'fix: 🐛 resolve API rate limiting error的描述'
  }
};
