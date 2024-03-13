import Vue from 'vue'
import VueI18n from 'vue-i18n'

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
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
