<template>
    <!-- tab头部 -->
    <ul class="tab-bar">
      <li @click="toggleModel(true)" :class="{'active': isEmail}">{{$t('Register_1')}}</li>
    </ul>
    <!-- 内容 -->
    <div class="tab-view">
      <ul
        :style="{
          transform: `translate3d(-${step * 100}%, 0px, 0px)`
        }"
      >
        <!-- 邮箱或手机 -->
        <li>
          <Email ref="email" v-if="isEmail"/>
          <Phone ref="phone" v-if="!isEmail"/>
        </li>
        <!-- 设置密码 -->
        <li>
          <Password />
        </li>
        <!-- 注册成功 -->
        <li>
          <Success />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Email from './Email';
import Phone from './Phone';
import Password from './Password';
import Success from './Success';

export default {
  components: {
    Email,
    Phone,
    Password,
    Success,
  },
  data() {
    return {
      isEmail: true,
      // 当前邮箱步骤
      step: 0,
      // 表单数据
      formData: {},
    };
  },
  methods: {
    // 切换模式
    toggleModel(status) {
      this.isEmail = status;
      this.step = 0;
      this.formData = {};
    },
    // 下一步
    next() {
      this.step++;
    },
    // 返回
    back() {
      this.step--;
    },
    initSource(source){
      console.log('register')
      console.log(source)

      this.$refs.email.initSource(source);
      this.$refs.phone.initSource(source);
    }
  },
}
</script>

<style lang="less" scoped>
  .tab {
    width: 400px;
    background: white;
    padding: 30px 0 0 0;
    border-radius: 15px;

    ul {
      list-style: none;
    }

    .tab-bar {
      list-style: none;
      text-align: center;
      margin-bottom: 18px;

      li {
        padding: 0 12px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: bold;
        display: inline-block;
        cursor: pointer;
        position: relative;
        color: rgba(255, 255, 255, 0.5);
        transition: color 0.3s;
        color: black!important;

        &::after {
          @width: 64px;

          content: '';
          display: inline-block;
          width: @width;
          height: 4px;
          background: #2454C6;
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -(@width / 2);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        // 激活状态
        &.active {
          color: #ffffff;

        &::after {
          transform: scaleX(1);
        }
        }
      }
    }

    .tab-view {
      width: 100%;
      overflow: hidden;

      ul {
        width: auto;
        white-space: nowrap;
        text-overflow: ellipsis;
        transition: transform 0.3s;

        li {
          width: 100%;
          background: #ffffff;
          border-radius: 10px;
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }
</style>console.log('Debug: feat: enhance security against exploits');
