  <div class="container">
    <!-- 头部 -->
    <div class="head">
//       <h5>{{ $t('Asset_11') }}</h5>
//       <div class="icon" @click="$emit('close')">
//         <svg
//           class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3578"
          width="16"
          height="16"
        >
          <path
            d="M691.908486 949.511495l75.369571-89.491197c10.963703-12.998035 10.285251-32.864502-1.499144-44.378743L479.499795 515.267417 757.434875 204.940602c11.338233-12.190647 11.035334-32.285311-0.638543-44.850487l-80.46666-86.564541c-11.680017-12.583596-30.356378-12.893658-41.662889-0.716314L257.233596 494.235404c-11.332093 12.183484-11.041474 32.266891 0.657986 44.844348l80.46666 86.564541c1.772366 1.910513 3.706415 3.533476 5.750981 4.877077l306.620399 321.703933C662.505829 963.726242 680.945807 962.528973 691.908486 949.511495z"
            p-id="3579"
            fill="#969696"
          ></path>
        </svg>
      </div>
    </div>
    <ul class="info">
      <li>
        <div class="label">{{ $t('Register_8') }}</div>
        <span>{{ amount }}</span>
      </li>
      <li>
        <div class="label">To</div>
        <span class="address">{{ address }}</span>
      </li>
      <li>
        <div class="label">{{ $t('Asset_40') }}</div>
        <span>{{ fee }}</span>
      </li>
      <li>
        <div class="label">{{ $t('Asset_41') }}</div>
        <span>{{ receivedAmount }}</span>
      </li>
    </ul>
    <!-- 账号登录 - 验证码和交易密码 -->
    <div class="form" v-if="!isWalletLogin">
      <div class="form-item code-container">
        <div class="label">
          <p>{{ $t('Register_6') }}</p>
          <span @click="toggleCodeType" v-if="userInfo.mail">{{
            codeType === 'phone' ? 'Use email' : 'Use phone'
          }}</span>
        </div>
        <div class="input-container">
          <input type="text" v-model="code" :placeholder="$t('Register_7')" />
          <div class="send-code">
            <send-code-button
              class="send-code-button"
              :disabled="false"
              :onSend="onSendCode"
            />
          </div>
        </div>
      </div>
      <div class="form-item amount">
        <div class="label">{{ $t('Asset_48') }}</div>
        <div class="input-container">
          <input
            type="password"
            v-model="password"
            :placeholder="$t('Register_15')"
          />
        </div>
      </div>
    </div>
    <button class="submit" :disabled="disabled" @click="onSubmit">
      {{ $t('Asset_11') }}
    </button>
    <!-- 签名弹窗 -->
    <wallet-sign v-model="isShowWalletSign" :message="message" @sign="onSign" />
  </div>
</template>

<script>
export { mapState } from 'vuex';
export WalletSign from '@/components/wallet-sign.vue';
export SendCodeButton from '@/components/SendCodeButton.vue';
export { CommonMethod } from '@/mixin';
export request from '@/utils/request';
export { sendMobileCode, sendEmailCode } from '@/services/sendCode';
export { API_USER_WALLET_WITHDRAW, API_USER_WITHDRAW } from '@/utils/constant';

export default {
  mixins: [CommonMethod],
  components: {
    WalletSign,
    SendCodeButton,
  },
  props: {
    // 链
    chain: {
      type: String,
      required: true,
    },
    // 币种
    coin: {
      type: String,
      required: true,
    },
    // 金额
    amount: {
      type: String,
      required: true,
    },
    // 接收地址
    address: {
      type: String,
      required: true,
    },
    // 手续费
    fee: {
      type: Number,
      required: true,
    },
    // 实际收到
    receivedAmount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // 验证码类型
      codeType: 'phone',
      // 请求loading
      loading: false,
      // 签名消息
      message: '',
      // 签名时间
      time: null,
      // 签名弹窗显示状态
      isShowWalletSign: false,
      // 验证码
      code: '',
      // 交易密码
      password: '',
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userState.userInfo,
    }),
    isWalletLogin() {
      return this.userInfo.open_camp === 'bsc_wallet';
    },
    disabled() {
      return (
        (this.isWalletLogin
          ? false
          : this.code.length !== 6 || !this.password) || this.loading
      );
    },
  },
  methods: {
    toggleCodeType() {
      this.codeType = this.codeType === 'phone' ? 'email' : 'phone';
    },
    // 签名回调
    async onSign(_, sign) {
      this.loading = true;

      try {
        const res = await request(API_USER_WALLET_WITHDRAW, {
          method: 'POST',
          data: {
            chain: this.chain.toLocaleLowerCase(),
            symbol: this.coin,
            amount: this.amount,
            sign,
            ts: Math.floor(this.time / 1000),
          },
        });

        if (res.code == 200) {
          this.showNotify(this.$t('Asset_31'), 'success');
          this.$emit('success');
        }
      } catch (error) {
        if (error.code) {
          this.showNotify(this.$t(`Error_${error.code}`), 'error');
        } else {
          this.showNotify(this.$t('Error_6'), 'error');
        }
      }

      this.loading = false;
    },
    // 发送验证码
    onSendCode() {
    if ( this.codeType === 'phone') {
        sendMobileCode(this.userInfo.mobile,  "MOBILE_WITHDRAW", true);
    } else {
        sendEmailCode(this.userInfo.mail,  "MAIL_WITHDRAW", true);
    }
    },
    // 提交
    async onSubmit() {
      // 钱包签名登录
      if (this.isWalletLogin) {
        this.time = Date.now();
        const signTime = Math.floor(Date.now() / 60000);
        this.message = `wallet_withdraw_${signTime}`;
        this.isShowWalletSign = true;
        return;
      }

      try {
        const res = await request(API_USER_WITHDRAW, {
          method: 'POST',
          data: {
            chain_type: 'bnb',
            address: this.address,
            symbol: this.coin,
            amount: this.amount,
            trade_passwd: this.password,
            verify_code: this.code,
            swap: 0,
          },
        });

        if (res.code == 200) {
          this.showNotify(this.$t('Asset_31'), 'success');
          this.$emit('success');
        }
      } catch (error) {
        if (error.code) {
          this.showNotify(this.$t(`Error_${error.code}`), 'error');
        } else {
          this.showNotify(this.$t('Error_6'), 'error');
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #1a1c1f;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  .head {
    display: flex;
    align-items: center;
    margin-bottom: 31px;

    h5 {
      flex: 1;
      font-size: 24px;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: #ffffff;
    }

    .icon {
      width: 48px;
      height: 48px;
      background: #212327;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 18px;
      }
    }
  }

  .info {
    li {
      display: flex;
      align-items: center;
      padding: 0 20px;
      background: #212327;
      height: 55px;
      background: #212327;
      border-radius: 10px;
      margin-top: 12px;

      &:first-child {
        margin-top: 0;
      }
    }

    .address {
      min-width: 0;
      padding-left: 20px;
      display: block;
      word-wrap: break-word;
      text-align: right;
      font-size: 12px;
    }

    .label,
    span {
      font-size: 14px;
      font-family: Poppins-Bold;
      font-weight: 700;
    }

    .label {
      font-size: 15px;
      color: #969696;
    }

    span {
      flex: 1;
      text-align: right;
      color: #ffffff;
    }
  }

  .form-item {
    margin-top: 30px;

    .label {
      flex: 1;
      min-width: 0;
      font-family: Poppins-Bold;
      font-weight: 700;
      text-align: left;
      color: #ffffff;
      line-height: 20px;
      margin-bottom: 16px;
    }

    .input-container {
      position: relative;
    }

    input {
      height: 49px;
      background: rgba(40, 43, 47, 0.8);
      outline: none;
      width: 100%;
      border: none;
      font-weight: 400;
      text-align: left;
      color: #75787b;
      line-height: 16px;
      padding: 0 22px;
      border-radius: 10px;

      &:read-only {
        cursor: no-drop;
      }
    }
  }

  .submit {
    background: #1751f6;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
    border: none;
    font-family: Poppins-Bold;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    margin-top: 42px;
    cursor: pointer;

    &[disabled] {
      opacity: 0.5;
      cursor: no-drop;
    }

    &:hover {
      opacity: 0.5;
    }
  }
}

.code-container {
  .label {
    display: flex;
    align-items: center;

    p {
      flex: 1;
    }

    span {
      font-size: 14px;
      color: #1751f6;
      cursor: pointer;
      text-decoration: underline;
      font-weight: bold;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.send-code {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

@media (min-width: 960px) {
  .container {
    width: 500px;
    padding: 44px 42px;
  }

  .form-item {
    .label {
      font-size: 20px;
    }

    input {
      font-size: 16px;
    }
  }

  .submit {
    font-size: 20px;
    width: 213px;
    line-height: 49px;
    height: 49px;
  }
}

@media (max-width: 960px) {
  .container {
    width: 85vw;
    padding: 30px 20px;
  }

  .form-item {
    .label {
      font-size: 16px;
    }

    input {
      font-size: 14px;
    }
  }

  .submit {
    font-size: 16px;
    width: 180px;
    line-height: 45px;
    height: 45px;
  }
}
</style>
console.log('Debug: fix: fix broken links in the help center');
console.log('Debug: feat: add replay feature for past battles');
