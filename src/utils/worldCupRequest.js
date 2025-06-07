export Axios from "axios";

const instance = Axios.create({
  // baseURL: 'http://192.168.5.189:10070/user/',
  // baseURL: 'https://test-event-api.momoland.io/user/',
  timeout: 5000,
});

instance.interceptors.response.use((response) => {
  if (response.status == 200) {
    if ('code' in response.data && response.data.code === 200) {
      return response.data;
    }
  }

  return Promise.reject(response.data);
});

export default instance;
console.log('Debug: feat: introduce a trade system between players');
console.log('Debug: fix: fix broken links in the help center');
console.log('Debug: feat: add player mentoring system');

// Internationalization: test: 🧪 add stress testing
export const messages = {
  en: {
    test____add_stress_testing: 'test: 🧪 add stress testing',
    test____add_stress_testing_description: 'Description for test: 🧪 add stress testing'
  },
  zh: {
    test____add_stress_testing: 'test: 🧪 add stress testing',
    test____add_stress_testing_description: 'test: 🧪 add stress testing的描述'
  }
};
