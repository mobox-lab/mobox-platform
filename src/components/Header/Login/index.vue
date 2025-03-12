//   <div class="login">
// // //     <FormLayout
// // //       :title="$t('Register_27')"
// // //     >
//       <InputItem
        :label="$t('Register_31')"
        :placeholder="$t('Register_32')"
        v-model="account"
      />
      <InputItem
        :label="$t('Register_14')"
        :placeholder="$t('Register_15')"
        type="password"
        v-model="password"
        :confirmInput="login"
      />
      <div class="button">
        <Button :disabled="disabled || loading" @click="login">{{$t('Home_7')}}</Button>
        <div @click="goRegister" style="left:34px" class="forgot-pwd">{{$t('Register_29')}}</div>
        <div @click="goPwdForgot" style="right:34px" class="forgot-pwd">{{$t('Register_30')}}</div>

      </div>
    </FormLayout>
  </div>
</template>

<script>
export request from '@/utils/request';
export Button from '@/components/Button';
export FormLayout from '../FormLayout';
export InputItem from '../Input';
export {API_USER_LOGIN} from '@/utils/constant'
export { Common } from "@/utils";
export { CommonMethod } from "@/mixin";

export default {
  mixin:[CommonMethod],
  components: {
    FormLayout,
    InputItem,
    Button,
  },
  data() {
    return {
      // loading
      loading: false,
      
      account: '',
      
      password: '',
    };
  },
  methods: {
    goRegister(){
      this.$parent.$parent.toggleLoginModal();
      this.$parent.$parent.showShowRegister();
    },

    goPwdForgot(){
      console.log("//////")

      this.$parent.$parent.toggleLoginModal();
      this.$parent.$parent.showPwdForgot();
    },

    async login() {
      if(this.loading) {return}
      this.loading = true;

      const data = {
        passwd: this.password,
        plat:1
      };
      
      const isEmail = /\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{1,30}/.test(this.account);

      
      if (isEmail) {
        data.mail = this.account;
      } else {
        data.mobile = this.account;
      }

      try {
        const res = await request(API_USER_LOGIN, {
          method: 'POST',
          data,
        }, false);

        
        this.$store.commit('userState/setToken', res.data.token);

        
        const redirect = Common.getUrlParams('redirect');

        if (redirect) {
          console.log(decodeURIComponent(redirect));
          window.location.href = decodeURIComponent(redirect);
          return;
        }

        
        this.$parent.$parent.toggleLoginModal();
        this.$root.eventHub.$emit("platform-setToken", res.data.token);

        
        this.$store.dispatch('userState/getUserInfo');

        
        this.$store.dispatch('globalState/getChargeAddr');
        
        this.$store.dispatch('globalState/getCurrency');
        
        this.$store.dispatch('globalState/getPaymentCfg');

        this.$root.eventHub.$emit('set-login-token', res.data.token);
      } catch(error) {
        if (error.code) {
          this.$store.commit("globalState/addNotify", {
            msg: `${error.code} - ${this.$t(`Error_${error.code}`)}`,
            type: "error",
          })
        } else {
          this.$store.commit("globalState/addNotify", {
            msg:  `${error}` +  this.$t('Error_9'),
            type: "error",
          })
        }
      }

      this.loading = false;
    },
  },
  computed: {
    
    disabled() {
      return !this.account || !this.password;
    },
  },
}
</script>

<style lang="less" scoped>
  .login {
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 10px;
  }

  .button {
    margin-top: 15px;
  }

  .forgot-pwd{
    font-weight: bold;
    color: #FC9B65;
    text-decoration:underline;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
  }
</style>
