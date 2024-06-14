/*
 * @Author: Allan 
 * @Date: 2021-02-01 15:05:15 
 * @explain: 发送验证码
 * @Last Modified time: 2021-02-01 15:05:15 
 */

import request from '@/utils/request';
import Common from '@/utils/Common';
import {API_SMS_MAIL_SEND, API_SMS_MOBILE_SEND} from '@/utils/constant'

// 邮箱验证码发送
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

// 发送手机验证码
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
