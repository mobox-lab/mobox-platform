import axios from 'axios';
// import store from '@/store/index';
// export default function(url, options = {}, auth = true, ifTokenNeccessary = false, header = {}) {
//   return new Promise(async (resolve, reject) => {
    options = {
      url,
    };
    // 添加token
      // console.log(auth)
      // 如果是必要token请求的接口 没有登录的玩家无法请求
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
