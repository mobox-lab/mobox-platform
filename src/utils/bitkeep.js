export Axios from "axios";
export Web3 from 'web3';
// 
// const instance = Axios.create({
//   baseURL: 'https://event-v4-api.mobox.io/',
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
  const provider = window.bitkeep.ethereum;
  
  const web3 = new Web3(provider);
  const res = await provider.request({
    method: "eth_requestAccounts",
  });
  const address = res[0];

  // 本地缓存
  var data = JSON.parse(window.localStorage.getItem(`bitkeep-${address}`) || 'null');

  if (!data) {
    // 签名
    const time = Math.floor(Date.now() / 1000);
    const message = `MOBOX-BITKEEP-${time}`;
    const sign = await web3.eth.personal.sign(message, address);

    data = {
      'x-bits-addr': address,
      'x-bits-ts': time,
      'x-bits-sign': sign,
    };

    // 保存本地
    window.localStorage.setItem(`bitkeep-${address}`, JSON.stringify(data))
  }

  return data;
}

export function clearCache() {
  cache = null;
}

// 注册
export async function register(source) {
  const headers = await getSignHeader();
  return instance.post('event/bind/addr', { source }, { headers });
}

// 获取状态
export async function getStatus(address) {
  return instance.get('event/status', {
    params: {
      addr: address
    }
  });
}

// 提交名称
export async function submitName(name) {
  const headers = await getSignHeader();
  return instance.post('event/bind/twtName', { name }, { headers });
}

// 提交连接
export async function submitLink(link) {
  const headers = await getSignHeader();
  return instance.post('event/bind/twtLink', { link }, { headers });
}

// 提交钱包uid
export async function submitWalletID(uid) {
  const headers = await getSignHeader();
  return instance.post('event/uid/upload', { uid }, { headers });
}

// 获取mohearts数量
export async function getTicket(address) {
  const { data } = await instance.get('event/balance', {
    params: {
      addr: address
    }
  });

  return data.balance;
}

// 抽奖
export async function luckDraw(headers) {
  const { data } = await instance.post('event/molucks/open', { num: 100 }, { headers });
  return +data[0].gid;
}

// 事件任务
export async function getEventTasks(address) {
  return instance.get('event/blanket/tasks', {
    params: {
      addr: address,
    },
  })
}

// 每日任务
export async function getDailyTasks(address) {
  return instance.get('event/daily/tasks', {
    params: {
      addr: address,
    },
  })
}

// 获取日志
export async function getRecords(address) {
  return instance.get('event/molucks/logs', {
    params: {
      addr: address,
    },
  });
}
