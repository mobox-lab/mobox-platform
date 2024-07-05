import Axios from "axios";

const instance = Axios.create({
  // baseURL: 'http://192.168.5.189:10070/user/',
  // baseURL: 'https://test-event-api.momoland.io/user/',
  timeout: 5000,
});

// 响应拦截
instance.interceptors.response.use((response) => {
  if (response.status == 200) {
    if ('code' in response.data && response.data.code === 200) {
      return response.data;
    }
  }

  return Promise.reject(response.data);
});

export default instance;
