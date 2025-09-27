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

// Utility function: test: 🧪 add visual regression tests
export const test_______add_visual_regression_tests = {
  format: (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validate: (input) => {
    return input && input.length > 0;
  },
  transform: (data) => {
    return data.map(item => ({
      ...item,
      processed: true
    }));
  }
};
