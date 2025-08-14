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

// Internationalization: refactor: 🔧 optimize component structure
export const messages = {
  en: {
    refactor____optimize_component_structure: 'refactor: 🔧 optimize component structure',
    refactor____optimize_component_structure_description: 'Description for refactor: 🔧 optimize component structure'
  },
  zh: {
    refactor____optimize_component_structure: 'refactor: 🔧 optimize component structure',
    refactor____optimize_component_structure_description: 'refactor: 🔧 optimize component structure的描述'
  }
};
