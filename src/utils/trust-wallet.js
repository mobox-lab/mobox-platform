import Axios from "axios";
import Web3 from 'web3';

// const instance = Axios.create({
//   baseURL: 'https://event-v4-api.mobox.io/valentine/',
//   // baseURL: 'http://192.168.5.189:10070/valentine/',
  timeout: 5000,
});

let cache = null;

// 响应拦截
instance.interceptors.response.use((response) => {
  if (response.status == 200) {
    if ('code' in response.data && response.data.code === 200) {
      return response.data;
    }
  }

  return Promise.reject(response.data);
});

export async function getSignHeader() {
  if (!cache) {
    const provider = window.bitkeep.ethereum;

    if (provider) {
      const web3 = new Web3(provider);
      const time = Math.floor(Date.now() / 1000);
      const message = `MOBOX-VALENTINE-${time}`;
      const res = await provider.request({
        method: "eth_requestAccounts",
      });
      const address = res[0];
      // 签名
      const sign = await web3.eth.personal.sign(message, address);

      cache = {
        'x-bits-addr': address,
        'x-bits-ts': time,
        'x-bits-sign': sign,
      };
    }
  }

  return cache;
}

export function clearCache() {
  cache = null;
}

// 注册
export async function register(source) {
  const headers = await getSignHeader();
  return instance.post('bind/addr', { source }, { headers });
}

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

// 获取mohearts数量
export async function getMohearts(address) {
  const { data } = await instance.get('balance', {
    params: {
      addr: address
    }
  });

  return data.balance;
}

// 抽奖
export async function luckDraw(headers) {
  const { data } = await instance.post('molovebox/open', { num: 100 }, { headers });
  return +data[0].gid;
}

// 事件任务
export async function getEventTasks(address) {
  return instance.get('blanket/tasks', {
    params: {
      addr: address,
    },
  })
}

// 每日任务
export async function getDailyTasks(address) {
  return instance.get('daily/tasks', {
    params: {
      addr: address,
    },
  })
}

// 获取日志
export async function getRecords(address) {
  return instance.get('molovebox/logs', {
    params: {
      addr: address,
    },
  });
}
console.log('Debug: feat: enhance cross-platform compatibility');
console.log('Debug: feat: optimize server request handling');
