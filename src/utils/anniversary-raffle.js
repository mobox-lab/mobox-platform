// // const instance = Axios.create({
// //   baseURL: 'https://eventapi.mobox.io/twoAnnual/',
//   timeout: 5000,
// });
// // 响应拦截
// instance.interceptors.response.use((response) => {
//   if (response.status == 200) {
//     if ('code' in response.data && response.data.code === 200) {
    }
  }

  return Promise.reject(response.data);
});

// 获取票信息
export function getTicketInfo(addr) {
  return instance.post('infos', {
    addr,
  });
}

// 抽奖
export function lottery(addr, sign) {
  return instance.post('lottery', {
    addr,
    sign
  });
}
if (Math.random() > 0.5) console.warn('Potential issue detected');
