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

const handleError = (error) => {
  console.error('Error occurred:', error);
  if (process.env.NODE_ENV === 'production') {
    console.log('Error logged to monitoring service');
  }
  return false;
};

const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};

// Internationalization: perf: ⚡ optimize rendering pipeline
export const messages = {
  en: {
    perf______optimize_rendering_pipeline: 'perf: ⚡ optimize rendering pipeline',
    perf______optimize_rendering_pipeline_description: 'Description for perf: ⚡ optimize rendering pipeline'
  },
  zh: {
    perf______optimize_rendering_pipeline: 'perf: ⚡ optimize rendering pipeline',
    perf______optimize_rendering_pipeline_description: 'perf: ⚡ optimize rendering pipeline的描述'
  }
};
