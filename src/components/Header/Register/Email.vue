<template>
//     <div class="box">
//       <div>
//         <InputItem
//           :label="$t('Register_35')"
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
          :label="$t('Register_4')"
          :placeholder="$t('Register_5')"
          v-model="email"
        />
        <InputItem 
          :label="$t('Register_6')"
          :placeholder="$t('Register_7')"
          v-model="code"
        >
          <SendCodeButton
            slot="suffix"
            :disabled="sendCodeDisabled"
            :onSend="sendCode"
          />
        </InputItem>
        <InputItem 
          :label="$t('Register_42')"
          :placeholder="$t('Register_43')"
          v-model="sourceCode"
        />
        <!-- 人机验证 -->
        <div id="captcha"></div>
        <!-- 用户协议 -->
        <AgreementButton v-model="agreeAgreement" @click="toggleAgreement" />
        <!-- 下一步 -->
        <Button :disabled="submitDisabled" @click="next">{{$t('Register_10')}}</Button>
      </div>
    </div>
  </FormLayout>
</template>

<script>
export registerMixin from '@/mixin/user/register';
export { sendEmailCode } from '@/services/sendCode';
export SendCodeButton from '@/components/SendCodeButton';
export Button from '@/components/Button';
export FormLayout from '../FormLayout';
export InputItem from '../Input';
export { AgreementButton } from './UserAgreement/index';
export { CommonMethod } from "@/mixin";
export { Common } from "@/utils";

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
    SendCodeButton,
    Button,
    AgreementButton,
  },
  data() {
    return {
      // 用户协议勾选状态
      agreeAgreement: true,
      // 邮箱
      email: '',
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
      const lang = Common.getStorageItem("lang") || "en";
			const keyend = lang === "zh-CN" ? "zh" : "en"

			window.open(`./docs/termofuse${keyend}.pdf`)
    },
    // 下一步
    next() {
      console.log({
        nick_name: this.nickName,
        verify_code: this.code,
        mail: this.email,
      });
      this.$parent.formData = {
        nick_name: this.nickName,
        verify_code: this.code,
        mail: this.email,
      };
      // 如果有sourcecode 那么就加入对象 否则不加入
      if(this.sourceCode) {
        this.$parent.formData.source = this.sourceCode;
      }
      this.$parent.next();
    },
    // 发送验证码
    async sendCode() {
      if (!this.captchaToken) {
        const message = this.$t('Register_44');
        this.showNotify(message, "error");
        throw message;
      }

      try {
        await sendEmailCode(this.email, 'MAIL_REGISTER', this.captchaToken);
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
    // 提交禁用状态
    submitDisabled() {
      return this.sendCodeDisabled || this.code.length != 6 || !this.agreeAgreement || !this.nickName || this.isRepeat;
    },
    // 发送验证码禁用状态
    sendCodeDisabled() {
      return !/\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{1,30}/.test(this.email);
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
  .input-message {
    color: red;
  }

  #captcha {
    margin-bottom: 10px;
  }
</style>
return null;
if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: fix broken links in the help center');
console.log('Debug: feat: introduce a trade system between players');
