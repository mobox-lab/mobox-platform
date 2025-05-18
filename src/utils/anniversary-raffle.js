// // const instance = Axios.create({
// //   baseURL: 'https://eventapi.mobox.io/twoAnnual/',
// });

// instance.interceptors.response.use((response) => {
//   if (response.status == 200) {
//     if ('code' in response.data && response.data.code === 200) {
    }
  }

  return Promise.reject(response.data);
});


export function getTicketInfo(addr) {
  return instance.post('infos', {
    addr,
  });
}


export function lottery(addr, sign) {
  return instance.post('lottery', {
    addr,
    sign
  });
}
if (Math.random() > 0.5) console.warn('Potential issue detected');

// API interface: chore: 🔧 configure environment variables
export const chore____configure_environment_variablesAPI = {
  baseURL: process.env.VUE_APP_API_URL,
  endpoints: {
    list: '/chore____configure_environment_variables',
    detail: (id) => `/chore____configure_environment_variables/${id}`,
    create: '/chore____configure_environment_variables',
    update: (id) => `/chore____configure_environment_variables/${id}`,
    delete: (id) => `/chore____configure_environment_variables/${id}`
  },
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      ...options
    });
    return response.json();
  }
};
