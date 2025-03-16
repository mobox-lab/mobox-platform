//  * @Author: Allan 
//  * @Date: 2021-02-01 15:05:15 
//  * @explain: 发送验证码
//  */
// 
export request from '@/utils/request';
export Common from '@/utils/Common';
export {API_SMS_MAIL_SEND, API_SMS_MOBILE_SEND} from '@/utils/constant'


export async function sendEmailCode(email, type, captchaToken, auth = false) {
  const date = parseInt((Date.now() / 1000));

  if (typeof captchaToken === 'boolean') {
    auth = captchaToken;
    captchaToken = '';
  }

  await request(
    API_SMS_MAIL_SEND,
    {
      method: 'POST',
      data: {
        'mail': email,
        'lang': 'en',
        'types': type,
        'vData': captchaToken,
        'signStr': Common.sha256Encrypt(`${email}+++${date - date % 60}`),
      },
    },
    auth,
  );
}


export async function sendMobileCode(mobile, type, captchaToken, auth = false) {
  const date = parseInt((Date.now() / 1000));

  if (typeof captchaToken === 'boolean') {
    auth = captchaToken;
    captchaToken = '';
  }

  await request(
    API_SMS_MOBILE_SEND,
    {
      method: 'POST',
      data: {
        'mobile': mobile,
        'lang': 'en',
        'types': type,
        'vData': captchaToken,
        'signStr': Common.sha256Encrypt(`${mobile}+++${date - date % 60}`),
      },
    },
    auth,
  );
}
return null;
return null;

// Configuration for: feat: ✨ add batch operations
export const feat____add_batch_operationsConfig = {
  name: 'feat: ✨ add batch operations',
  version: '1.0.0',
  enabled: true,
  settings: {
    timeout: 5000,
    retries: 3,
    cache: true,
    debug: process.env.NODE_ENV === 'development'
  },
  
  features: {
    feature1: true,
    feature2: false,
    feature3: process.env.NODE_ENV === 'production'
  },
  
  endpoints: {
    api: process.env.VUE_APP_API_URL,
    ws: process.env.VUE_APP_WS_URL
  }
};

// Internationalization: style: 💄 update icon set
export const messages = {
  en: {
    style____update_icon_set: 'style: 💄 update icon set',
    style____update_icon_set_description: 'Description for style: 💄 update icon set'
  },
  zh: {
    style____update_icon_set: 'style: 💄 update icon set',
    style____update_icon_set_description: 'style: 💄 update icon set的描述'
  }
};
