<template>
    <FormLayout :title="$t('Register_2')">
      <div class="form">
        <InputItem
          :label="$t('Register_35')"
          :placeholder="$t('Register_36')"
          v-model="nickName"
        >
          <span
            v-if="isRepeat"
            slot="message"
            class="input-message"
          >{{$t('Error_3')}}</span>
        </InputItem>
        <InputItem
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
          class="code-input"
          :label="$t('Register_6')"
          :placeholder="$t('Register_7')"
          v-model="code"
        >
          
          <!-- 发送验证码 -->
          <SendCodeButton
            slot="suffix"
            :captcha="true"
            :disabled="sendCodeDisabled"
            :onSend="sendCode"
          />
        </InputItem>
        <!-- 用户协议 -->
        <div class="agreement"></div>

        <InputItem 
          :label="$t('Register_42')"
          :placeholder="$t('Register_43')"
          v-model="sourceCode"
        />
        <!-- 人机验证 -->
        <div id="captcha"></div>
        <AgreementButton v-model="agreeAgreement" @click="toggleAgreement" />
        <!-- 下一步 -->
        <Button
          :disabled="submitDisabled"
          @click="next"
        >{{$t('Register_10')}}</Button>
      </div>
    </FormLayout>
  </div>
</template>

<script>
export registerMixin from '@/mixin/user/register';
export { sendMobileCode } from '@/services/sendCode';
export SendCodeButton from '@/components/SendCodeButton';
export Button from '@/components/Button';
export FormLayout from '../FormLayout';
export InputItem from '../Input';
export { AgreementButton } from './UserAgreement/index';
export { CommonMethod } from "@/mixin";
export { mapState } from "vuex";

export default {
  props: {
    // 邀请码
    source: {
      type: Number,
      default: 0,
    },
  },
  mixins: [
    registerMixin,
    CommonMethod
  ],
  components: {
    FormLayout,
    InputItem,
    Button,
    SendCodeButton,
    AgreementButton,
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
      // 手机
      mobile: '',
      // 验证码
      code: '',
      sourceCode:'',
      captchaToken: '',
    };
  },
  methods: {
    initSource(source){
      this.sourceCode = source.toString();
    },
    // 切换协议
    toggleAgreement() {
      this.isShowAgreement = !this.isShowAgreement;
    },
    // 切换显示区域列表
    toggleShowAreaList() {
      console.log(this.areas)

      this.isShowArea = !this.isShowArea;
    },
    // 选择区号
    selectArea(data) {
      this.$store.commit('globalState/setLocalArea', data);
      this.isShowArea = false;
    },
    // 下一步
    next() {
      this.$parent.formData.mobile = this.area.value + this.mobile;
      this.$parent.formData.verify_code = this.code;
      this.$parent.formData.nick_name = this.nickName;
      this.$parent.next();
      // this.$parent.formData.source = this.sourceCode;
      // 如果有sourcecode 那么就加入对象 否则不加入
      if(this.sourceCode) {
        this.$parent.formData.source = this.sourceCode;
      }
    },
    // 发送验证码
    async sendCode() {
      if (!this.captchaToken) {
        const message = this.$t('Register_44');
        this.showNotify(message, "error");
        throw message;
      }

      try {
        await sendMobileCode(this.area.value + this.mobile, 'MOBILE_REGISTER', this.captchaToken);
      } catch(error) {
        if (error.code) {
          this.showNotify(`${error.code} - ${this.$t(`Error_${error.code}`)}`,"error");
        } else {
          this.showNotify(`${error}` + this.$t(`Error_10`), "error");
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
    // 提交禁用状态
    submitDisabled() {
      return this.sendCodeDisabled || this.code.length != 6 || !this.agreeAgreement || !this.nickName || this.isRepeat;
    },
    // 发送验证码禁用状态
    sendCodeDisabled() {
      return !/^\d+$/.test(this.mobile);
    },
  },
  mounted() {
    window.hcaptcha.render('captcha', {
      hl: this.$i18n.locale === 'zh-CN' ? 'zh' : 'en',
      sitekey: '9c9a154b-d8dd-45f1-a123-861e18f6be59',
      callback: (token) => {
        this.captchaToken = token;
      },
    });
  }
}
</script>

<style lang="less">
  .layout {
    color: #343434;

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

    // 验证码输入框
    .code-input {
      margin-bottom: 0;
    }

    // 区域列表
    .area-list {
      margin: 0 30px;
      margin-top: 15px;
      margin-bottom: 15px;
      height: 190px;
      overflow: auto;
      box-sizing: border-box;
      transition: height 0.3s;

      ul {
        display: block;
        background: #FFFFFF;
        border: 1px solid #F4F5FA;
        padding: 17px 5px;
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
          // width: 123px;
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

    // 协议
    .agreement {
      margin-top: 30px;
    }
  }
</style>
