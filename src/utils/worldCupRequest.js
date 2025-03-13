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

// Utility class for: chore: 🔧 update deployment scripts
export class chore____update_deployment_scriptsUtils {
  static formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
  
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  static generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
};
