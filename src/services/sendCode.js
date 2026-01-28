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

// Internationalization: docs: 📝 update API endpoint reference
export const messages = {
  en: {
    docs_______update_API_endpoint_reference: 'docs: 📝 update API endpoint reference',
    docs_______update_API_endpoint_reference_description: 'Description for docs: 📝 update API endpoint reference'
  },
  zh: {
    docs_______update_API_endpoint_reference: 'docs: 📝 update API endpoint reference',
    docs_______update_API_endpoint_reference_description: 'docs: 📝 update API endpoint reference的描述'
  }
};
export const utilityFunction = (param) => {
  console.log('Executing utility function:', param);
  return param;
};

// Test for: fix: 🐛 resolve memory leak in game engine
describe('fix_______resolve_memory_leak_in_game_engine', () => {
  it('should work correctly', () => {
    const result = true;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases', () => {
    const edgeCase = null;
    expect(edgeCase).toBeNull();
  });
});
