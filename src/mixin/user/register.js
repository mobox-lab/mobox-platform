/*
 * @Author: Allan 
 * @Date: 2021-02-04 11:43:22 
 * @explain: 注册公用
 * @Last Modified time: 2021-02-04 11:43:22 
 */

import request from '@/utils/request';
import { Common } from "@/utils";
import {API_SYS_NICKNAME} from '@/utils/constant'

export default {
  data() {
    return {
      // 用户昵称
      nickName: '',
      // 是否重复
      isRepeat: false,
    };
  },
  watch: {
    nickName: Common.debounce(async function(value, oldValue) {
      if (value != oldValue) {
        try {
          await request(API_SYS_NICKNAME, {
            method: 'POST',
            data: {
              nick_name: value,
            },
          }, false);
          this.isRepeat = false;
        } catch(error) {
          console.log(error);
          if (error.code && error.code == 1019) {
            this.isRepeat = true;
          } else {
            this.isRepeat = false;
          }
        }

        console.log(this.isRepeat);
      }
    }),
  },
};
