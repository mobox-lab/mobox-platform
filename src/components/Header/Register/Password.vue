<template>
  <FormLayout
//   >
//     <InputItem
      :label="$t('Register_14')"
      type="password"
      :placeholder="$t('Register_15')"
      v-model="password"
    />
    <InputItem
      class="validation-password"
      :label="$t('Register_16')"
      type="password"
      :placeholder="$t('Register_15')"
      v-model="confirmPassword"

    />
    <!-- 规则 -->
    <ul class="rules">
      <li
        v-for="(item, index) in rules"
        :key="index"
        :class="{success: item.status}"
      >
        <span>{{$t(item.message)}}</span>
      </li>
    </ul>
    <div class="button-box">
      <Button :disabled="disabled" @click="next">{{$t('Register_10')}}</Button>
    </div>
  </FormLayout>
</template>

<script>
import request from '@/utils/request';
import Button from '@/components/Button';
import {API_USER_REGISTER} from '@/utils/constant';
import { CommonMethod } from "@/mixin";
import FormLayout from '../FormLayout';
import InputItem from '../Input';

export default {
	mixins: [CommonMethod],
  components: {
    FormLayout,
    InputItem,
    Button,
  },
  data() {
    return {
      // 密码
      password: '',
      // 确认密码
      confirmPassword: '',
    };
  },
  methods: {
    // 下一步
    next() {
      this.$parent.formData.passwd = this.password;
      this.register();
    },
    // 注册
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

        // 保存token
        this.$store.commit('userState/setToken', res.data.token);
        this.$root.eventHub.$emit("platform-setToken", res.data.token);
        // 获取用户信息
        this.$store.dispatch('userState/getUserInfo');
        this.$parent.next();
      } catch(error) {
        if (error.code) {
          this.showNotify(`${error.code} - ${this.$t(`Error_${error.code}`)}`,"error");
        } else {
          this.showNotify(`${error}` + this.$t(`Error_10`), "error");
        }
      }

      this.loading = false;
    },
  },
  computed: {
    // 规则
    rules() {
      return [
        {
          message: 'Register_18',
          status: this.verifyLength,
        },
        {
          message: 'Register_37',
          status: this.existCapitial,
        },
        {
          message: 'Register_38',
          status: this.existNumber,
        },
        {
          message: 'Register_39',
          status: this.notSpace,
        },
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
    // 按钮禁用状态
    disabled() {
      return [
        this.verifyLength,
        this.existCapitial,
        this.existNumber,
        this.notSpace,
      ].indexOf(false) >= 0 || this.password != this.confirmPassword;
    }
  },
}
</script>

<style lang="less" scoped>
  .button-box {
    margin-top: 34px;
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

<style lang="less">
  .validation-password {
    margin-bottom: 3px !important;
  }
</style>


Minimum of 8 characters.
One capitial letter.
One number.
One special character
Cannot include your name,part of your name,
username or spaces console.log('Debug: fix: fix broken animation frames in combat');
