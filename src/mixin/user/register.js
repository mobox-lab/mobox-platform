//  * @Author: Allan 
//  * @Date: 2021-02-04 11:43:22 
//  * @explain: 注册公用
 * @Last Modified time: 2021-02-04 11:43:22 
 */

export request from '@/utils/request';
export { Common } from "@/utils";
export {API_SYS_NICKNAME} from '@/utils/constant'

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
if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: correct leaderboard sorting algorithm');
console.log('Debug: fix: resolve sound playback inconsistency');
