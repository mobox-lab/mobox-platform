<template>
    <div class="form-bg">
        <FormLayout :title="getTitle" describe="  ">
            <div class="box">
                <!-- <div v-if="type==='password'">
                  <div class="user-findback">
                      <div class="icon" @click="chooseSetPwd(0)">
                      <i v-if="selectSetPws===0" class="iconfont">&#xe62a;</i>
                      <i v-else class="iconfont">&#xe627;</i>
                      </div>
                      <span>{{$t('Register_33')}}</span>
                  </div>
                  <div class="user-findback">
                      <div class="icon" @click="chooseSetPwd(1)">
                      <i v-if="selectSetPws===1" class="iconfont">&#xe62a;</i>
                      <i v-else class="iconfont">&#xe627;</i>
                      </div>
                      <span>{{$t('Register_34')}}</span>
                  </div>
                </div> -->

                <InputItem
                v-if="type==='mail' || (type==='password' && selectSetPws ===0)"
                :label="$t('Register_4')"
                :placeholder="$t('Register_5')"
                v-model="email"
                />
                <InputItem
                v-else-if="type==='mobile' || (type==='password' && selectSetPws ===1)"
                :label="$t('Register_25')"
                :placeholder="$t('Register_26')"
                v-model="mobile"
                >
                <!-- 选择区号 -->
                <div
                    slot="prefix"
                    :class="['area-button', isShowArea ? 'area-button-show' : '']" @click="toggleShowAreaList">
                    <span>+{{area.value}}</span>
                    <i class="iconfont">&#xe6b4;</i>
                </div>

                </InputItem>

                <!-- 区号列表 -->
                <div :class="['area-list', isShowArea ? '' : 'area-list-hide']">
                <ul>
                    <li
                    v-for="(item, index) in areas"
                    :key="index"
                    :class="{'active': area == item}"
                    @click="selectArea(item)"
                    >
                    <span class="name">{{item.name}}</span>
                    <span>{{item.value}}</span>
                    </li>
                </ul>
                </div>

                <InputItem 
                  :label="$t('Register_6')"
                  :placeholder="$t('Register_7')"
                  v-model="code"
                >
                <SendCodeButton
                    v-if="type==='mail' || (type==='password' && selectSetPws ===0)"
                    slot="suffix"
                    :disabled="sendMailCodeDisabled"
                    :onSend="sendMailCode"
                />
                <SendCodeButton
                    v-if="type==='mobile' || (type==='password' && selectSetPws === 1)"
                    slot="suffix"
                    :disabled="sendMobileCodeDisable"
                    :onSend="sendPhoneCode"
                />
                </InputItem>

                <div v-if="type==='password'">
                    <InputItem
                    :label="$t('Register_14')"
                    type="password"
                    :placeholder="$t('Register_15')"
                    v-model="password"
                    />
                    <InputItem
                    class="validation-password"
                    :label="$t('Register_16')"
                    type="password"
                    :placeholder="$t('Register_17')"
                    v-model="confirmPassword"

                    />
                    <!-- 规则 -->
                    <ul class="rules">
                    <li
                        v-for="(item, index) in rules"
                        :key="index"
                        :class="{success: item.status}"
                    >
                        <span>{{item.message}}</span>
                    </li>
                    </ul>
                </div>

                <!-- 下一步 -->
                <Button v-if="type==='mail'" :disabled="submitMailDisabled" @click="next">{{$t('Register_10')}}</Button>
                <Button v-if="type==='mobile'" :disabled="submitMobileDisabled" @click="next">{{$t('Register_10')}}</Button>

                <Button style="margin-top:20px;" v-if="type==='password'" :disabled="submitPwsDisabled" @click="next">{{$t('Register_10')}}</Button>
            </div>
            </div>
        </FormLayout>
    </div>
</template>

<script>
import { CommonMethod } from "@/mixin";
import registerMixin from '@/mixin/user/register';
import { sendEmailCode, sendMobileCode } from '@/services/sendCode';
import SendCodeButton from '@/components/SendCodeButton';
import Button from '@/components/Button';
import FormLayout from '../FormLayout';
import InputItem from '../Input';

import request from '@/utils/request';
import { API_BIND_MOBILE, API_BIND_MAIL, API_PWD_FORGOT } from '@/utils/constant';
import { mapState } from "vuex";
// import { AgreementButton, AgreementContent } from './UserAgreement/index';

export default {
  mixins: [
    registerMixin,
    CommonMethod
  ],
  props: {
      type: String,
      sign: String,
      signTs : Number
  },
  components: {
    FormLayout,
    InputItem,
    SendCodeButton,
    Button,
    // AgreementButton,
    // AgreementContent,
  },
  data() {
    return {
      // 当前选择的区号
      // area: areas[0],
      // 区号列表
      // areas: areas,

      // 用户协议勾选状态
      agreeAgreement: true,
      // 是否显示区号列表
      isShowArea: false,
      // 邮箱
      email: '',
      // 手机
      mobile: '',
      // 验证码
      code: '',

      // 修改密码选择
        selectSetPws:1,

        // 密码
      password: '',
      // 确认密码
      confirmPassword: '',
    };
  },
  
  methods: {
// 选择区号
    selectArea(data) {
      this.$store.commit('globalState/setLocalArea', data);
      this.isShowArea = false;
    },
    // 切换显示区域列表
    toggleShowAreaList() {
      this.isShowArea = !this.isShowArea;
    },
    chooseSetPwd(idx) {
        this.selectSetPws = idx;
    },
    // 下一步
    async next() {

        // console.log(this.password)
        // console.log(this.confirmPassword)
        // console.log(this.email)
        // console.log(this.code)

    //   console.log({
    //     nick_name: this.nickName,
    //     verify_code: this.code,
    //     mail: this.email,
    //   });
    //   this.$parent.formData = {
    //     nick_name: this.nickName,
    //     verify_code: this.code,
    //     mail: this.email,
    //   };
    //   this.$parent.next();

        // const data = {
            
        // }
        // const res = await request(API_BIND_MOBILE, {
        //     method: 'POST',
        //     data
        // }, false);

        // console.log(res)
  this.$parent.$parent.closeModal();

        if(this.type === "mail"){
            const data = {
                mail: this.email,
                verify_code:this.code
            }
            const res = await request(API_BIND_MAIL, {
                method: 'POST',
                data
            });
            this.$parent.$parent.closeModal();

            // 保存用户信息
            this.$store.commit('userState/setUserInfo', res.data);
        } else if(this.type === "mobile"){
            const data = {
                mobile: this.area.value +  this.mobile,
                verify_code:this.code
            }
            const res = await request(API_BIND_MOBILE, {
                method: 'POST',
                data
            });

            this.$parent.$parent.closeModal();
            // 保存用户信息
            this.$store.commit('userState/setUserInfo', res.data);

        } else if(this.type === "password"){
            const data = {
                passwd : this.password,
                verify_code : this.code
            }
            if(this.selectSetPws === 0){
                data.mail = this.email
            } else if(this.selectSetPws === 1){
                data.mobile = this.area.value + this.mobile
            }

            console.log(data)

            const res = await request(API_PWD_FORGOT, {
                method: 'POST',
                data
            });

            if(res.code === 200){
                this.$parent.$parent.closeModal();
            }
        }

    },
    // async sendCode() {
    //     switch(this.type){
    //         case "mail":
    //             this.sendMailCode();
    //             break;
    //         case "mobile":
    //             this.sendPhoneCode();
    //             break;
    //         case "password":
    //             break;
    //         default:
    //             break;
    //     }
    // },

    // 发送验证码
    async sendMailCode() {
      try {
        const isPassword = this.type == 'password';
        await sendEmailCode(this.email, isPassword ? 'MAIL_PWD_FORGOT' : 'MAIL_BIND', !isPassword);
      } catch(error) {
        if (error.code) {
          this.showNotify(this.$t(`Error_${error.code}`), 'error');
        } else {
          this.showNotify(this.$t('Error_6'), 'error');
        }

        throw error;
      }
    },

    // 发送验证码
    async sendPhoneCode() {
      try {
        const isPassword = this.type == 'password';
        await sendMobileCode(this.area.value + this.mobile, isPassword ? 'MOBILE_PWD_FORGOT' : 'MOBILE_BIND', !isPassword);
      } catch(error) {
        if (error.code) {
          this.showNotify(this.$t(`Error_${error.code}`), 'error');
        } else {
          this.showNotify(this.$t('Error_6'), 'error');
        }

        throw error;
      }
    },
  },
  computed: {
    ...mapState({
			areas: (state) => state.globalState.data.areas,
			localArea: (state) => state.globalState.data.localArea,
    }),
    area(){
      return this.localArea;
    },
    // 返回title
    getTitle() {
        if(this.type === "mail"){
            return this.$t('Setting_22')
        } else if(this.type === "mobile"){
            return this.$t('Setting_24')
        } else if(this.type === "password"){
            return this.$t('Setting_37')
        } else {
            return ""
        }
    },
    // 提交邮箱禁用状态
    submitMailDisabled() {
      return this.sendMailCodeDisabled || this.code.length != 6 ;
    },
    // 提交手机禁用状态
    submitMobileDisabled() {
      return this.sendMobileCodeDisable || this.code.length != 6 ;
    },
    // 发送邮箱验证码禁用状态
    sendMailCodeDisabled() {
      // return !/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.email);
      return !/\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{1,30}/.test(this.email);
    },

    // 发送手机验证码禁用状态
    sendMobileCodeDisable() {
      return !/^\d+$/.test(this.mobile);
    },


    rules() {
      return [
        {
          message: this.$t('Register_18'),
          status: this.verifyLength,
        },
        {
          message: this.$t('Register_37'),
          status: this.existCapitial,
        },
        {
          message: this.$t('Register_38'),
          status: this.existNumber,
        },
        {
          message: this.$t('Register_39'),
          status: this.notSpace,
        },
        {
          message: this.$t('Setting_112'),
          status: this.shouldBeSame,
        }
      ];
    },
    // 长度验证
    verifyLength() {
      return this.password.length >= 8;
    },
    // 包含大写
    existCapitial() {
      return /^.*[A-Z]+.*$/.test(this.password);
    },
    // 存在数字
    existNumber() {
      return /^.*[0-9]+.*$/.test(this.password);
    },
    // 不存在空格
    notSpace() {
      return this.password && this.password.indexOf(' ') == -1;
    },
    shouldBeSame() {
      return this.password === this.confirmPassword && this.password;
    },
    // 按钮禁用状态
    submitPwsDisabled() {
        if(this.selectSetPws === 0){
            return ([
              this.verifyLength,
              this.existCapitial,
              this.existNumber,
              this.notSpace,
              this.shouldBeSame,
            ].indexOf(false) >= 0 )
            // || this.password != this.confirmPassword
            || this.sendMailCodeDisabled 
            || this.code.length != 6;
        } else if(this.selectSetPws === 1){
            return ([
              this.verifyLength,
              this.existCapitial,
              this.existNumber,
              this.notSpace,
              this.shouldBeSame,
            ].indexOf(false) >= 0 )
            // || this.password != this.confirmPassword
            || this.sendMobileCodeDisable 
            || this.code.length != 6;
        } else {
            return true
        }
    }
  },
}
</script>

<style lang="less" scoped>
    .input-message {
        color: red;
    }

    .form-bg{
        padding: 20px;
        border-radius: 15px;
        background:white;
    }

    // 选择区域按钮
    .area-button {
      height: 28px;
      font-size: 14px;
      color: #264498;
      border-right: 1px solid #DAE5FF;
      display: flex;
      align-items: center;
      padding-right: 15px;
      margin-right: 15px;
      position: relative;
      cursor: pointer;

      i {
        color: #FF9959;
        font-size: 12px;
        line-height: 1;
        margin-left: 6px;
      }
    }

    // 区域列表
    .area-list {
      margin: 0 30px;
      height: 190px;
      overflow: auto;
      box-sizing: border-box;
      transition: height 0.3s;
      color: black;
      margin-bottom: 15px;

      ul {
        display: block;
        background: #FFFFFF;
        border: 1px solid #F4F5FA;
        padding: 17px 10px;
        margin: 8px 5px;
        box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
        zoom: 1;

        &:after{
          content: ''; 
          display: block; 
          height: 0; 
          clear: both; 
          visibility: hidden;  
        }

        li {
          width: 100%;
          height: 23px;
          display: flex;
          align-items: center;
          padding: 0 13px;
          margin: 0 auto;
          float: left;
          cursor: pointer;
          position: relative;
          transition: color 0.3s;

          &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            border-radius: 10px;
            background: #2454C6;
            transform: scaleX(0);
            transition: transform 0.3s;
          }

          // 激活状态
          &.active {
            color: #FFFFFF;

            &::after {
              transform: scaleX(1);
            }
          }

          .name {
            flex: 1;
            text-align: left;
          }

          span {
            font-size: 12px;
            display: inline-block;
            position: relative;
            z-index: 99999;
          }
        }
      }
    }

    // 隐藏
    .area-list-hide {
      height: 0;
    }

    .user-findback {
        height: 16px;
        color: #343434;
        line-height: 16px;
        display: inline-block;
        font-size: 12px;
        margin: 0 18px 25px 18px;

        .icon {
        display: inline-block;
        }

        .icon,
        span {
        vertical-align: middle;
        }

        i,
        .agreement {
        color: #FC9B65;
        cursor: pointer;
        }

        i {
        margin-right: 3px;
        }
    }

    .rules {
        margin: 0 34px;
        padding: 20px;
        background: rgba(255, 151, 69, 0.1);
        border-radius: 0px 10px 10px 10px;

        li {
        display: flex;
        align-items: flex-start;
        padding: 4px 0;

        &::before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url('../../../assets/icon/userSystem/warning.png');
            background-size: 100%;
        }

        span {
            flex: 1;
            text-align: left;
            display: block;
            line-height: 16px;
            font-weight: bold;
            font-size: 12px;
            color: #9B9B9B;
            padding-left: 9px;
            white-space: normal;
        }

        // 成功状态
        &.success {
            &::before {
            background-image: url('../../../assets/icon/userSystem/success.png');
            background-size: 100%;
            }
        }
        }
    }
</style>
return null;
console.log('Debug: feat: introduce adaptive difficulty levels');
