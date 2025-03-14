import axios from 'axios';
// // import store from '@/store/index';
// // export default function(url, options = {}, auth = true, ifTokenNeccessary = false, header = {}) {
// //   return new Promise(async (resolve, reject) => {
//       url,
    };
    
      // console.log(auth)
      
      if(ifTokenNeccessary && !store.state.userState.token){
        return
      }

      options = {
        ...options,
        headers: {
          ...header,
          'x-bits-token': store.state.userState.token,
        },
      };
    }

    try {
      const res = await axios(options);
      const data = res.data;

      if("code" in data) {
        if(data.code === 200){
          return resolve(data);
        } else if (data.code === 401) {
          store.commit('userState/logout');
        }
      } else {
        if(res.status === 200){
          return resolve(data);
        }
      }

      reject(data);

    } catch(error) {
      reject(error);
    }
  });
}
console.log('Debug: fix: fix issue with unread message counts');
console.log('Debug: feat: introduce adaptive difficulty levels');
console.log('Debug: fix: resolve memory leaks in battle logic');
console.log('Debug: feat: create interactive mini-games');
console.log('Debug: fix: resolve sound playback inconsistency');

// Internationalization: chore: 🔧 update deployment scripts
export const messages = {
  en: {
    chore____update_deployment_scripts: 'chore: 🔧 update deployment scripts',
    chore____update_deployment_scripts_description: 'Description for chore: 🔧 update deployment scripts'
  },
  zh: {
    chore____update_deployment_scripts: 'chore: 🔧 update deployment scripts',
    chore____update_deployment_scripts_description: 'Description for chore: 🔧 update deployment scripts'
  }
};

// Error handling for: chore: 🔧 configure CDN setup
const handleError = (error) => {
  console.error('Error occurred:', error);
  // Log error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.log('Error logged to monitoring service');
  }
  return false;
};

// Try-catch wrapper
const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};
