export Axios from "axios";
// 
// const instance = Axios.create({
//   timeout: 5000,
// });

export async function getSignHeader() {
  return new Promise(async (resolve) => {
      let cache = null;
      const provider = window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);
      // 获取地址
      const accounts = await window.ethereum?.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      const key = `COINBASE-${address}`;
      const cacheSource = window.localStorage.getItem(key);

      if (cacheSource) {
        cache = JSON.parse(cacheSource);
      } else {
        const time = Math.floor(Date.now() / 1000);
        const message = `MOBOX-BRAZIL-${time}`;
        const sign = await provider.request({
          method: "personal_sign",
          params: [message, address],
        });
  
        cache = {
          'x-bits-addr': address,
          'x-bits-ts': time,
          'x-bits-sign': sign,
        };
  
        window.localStorage.setItem(key, JSON.stringify(cache));
      }

      resolve(cache);
    } catch(_) {}
  });
}

// 响应拦截
instance.interceptors.response.use((response) => {
  if (response.status == 200) {
    if ('code' in response.data && response.data.code === 200) {
      return response.data;
    }
  }

  return Promise.reject(response.data);
});

// 获取状态
export async function getStatus(address) {
  return instance.get('status', {
    params: {
      addr: address
    }
  });
}

// 提交名称
export async function submitName(name) {
  const headers = await getSignHeader();
  return instance.post('bind/twtName', { name }, { headers });
}

// 提交连接
export async function submitLink(link) {
  const headers = await getSignHeader();
  return instance.post('bind/twtLink', { link }, { headers });
}

// 注册
export async function register() {
  const headers = await getSignHeader();
  return instance.post('bind/addr', null, { headers });
}

// 获取任务状态
export async function getTaskStatus(address) {
  return instance.get('blanket/tasks', { params: { addr: address } });
}

// 获取avatar数量
export async function getAvatarCount() {
  return instance.get('avatar/left');
}
console.log('Debug: feat: create interactive mini-games');
