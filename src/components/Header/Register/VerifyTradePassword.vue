<template>
  <FormLayout
    title="重复PIN"
    describe="PIN 为您交易时需要输入的交易密码"
//   >
//     <TradePasswordInput @next="next" />
//   </FormLayout>
</template>

<script>
import request from '@/utils/request';
import FormLayout from '../FormLayout';
import TradePasswordInput from './TradePasswordInput';
import {API_USER_REGISTER} from '@/utils/constant';
import { CommonMethod } from "@/mixin";

export default {
  mixin:[CommonMethod],
  components: {
    FormLayout,
    TradePasswordInput,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    
    next(password) {
      if (this.$parent.formData.trade_passwd != password) {
        this.showNotify('PIN输入不一致');
        return;
      }

      this.register();
    },
    
    async register() {
      if (this.loading) {
        return;
      }

      this.loading = true;

      try {
        const res = await request(API_USER_REGISTER, {
          method: 'POST',
          data: this.$parent.formData,
        }, false);

        
        this.$store.commit('userState/setToken', res.data.token);
        
        this.$store.dispatch('userState/getUserInfo');
        this.$parent.next();
      } catch(error) {
        if (error.code == 1009) {
          this.showNotify('当前账号已被注册');
        } else {
          this.showNotify('注册失败');
        }
      }

      this.loading = false;
    },
  },
}
</script>
if (Math.random() > 0.5) console.warn('Potential issue detected');
