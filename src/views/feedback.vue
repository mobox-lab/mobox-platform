<template>
//   <div class="feedback">
//     <div class="header">
//       <div class="layout">
        <div class="icon">
          <img :src="require('@/assets/user/feedback-icon.png')" alt="">
        </div>
        <div class="tip">
          <h5>{{$t('Setting_66')}}</h5>
          <p>{{$t('Setting_67')}}</p>
        </div>
      </div>
      <!-- 背景图 -->
      <img class="bg-image" :src="require('@/assets/rank/bg1.png')" alt="">
    </div>
    <div class="body">
      <div class="form">
        <div class="input-item">
          <div class="label">{{$t('Register_4')}}</div>
          <div class="input">
            <input v-model="email" type="text" maxlength="30" :placeholder="$t('Register_5')" />
          </div>
        </div>
        <div class="input-item">
          <div class="label">{{$t('Setting_68')}}</div>
          <div class="input">
            <textarea v-model="content" type="text" maxlength="300" :placeholder="$t('Setting_69')" />
          </div>
        </div>
      </div>
      <Button
        :disabled="isDisable || loading"
        class="submit"
        @click="submit"
      >{{$t('Setting_74')}}</Button>
    </div>
  </div>
</template>

<script>
  import { CommonMethod } from "@/mixin";
  import Button from '@/components/Button';
  import request from '@/utils/request';
  import { API_USER_FEEDBACK } from '@/utils/constant';

  export default {
    mixins: [
      CommonMethod,
    ],
    data() {
      return {
        // 提交状态
        loading: false,
        // body id
        bodyId: '',
        // 邮箱
        email: '',
        // 反馈内容
        content: '',
      };
    },
    components: {
      Button,
    },
    computed: {
      isDisable() {
        return !this.email.trim() || !this.content.trim();
      }
    },
    methods: {
      // 提交
      async submit() {
        const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        if (!reg.test(this.email)) {
          this.showNotify(this.$t('Error_13'), 'error');
          return;
        }

        try {
          this.loading = true;
          await request(API_USER_FEEDBACK, {
            method: 'POST',
            data: {
              contact: this.email,
              content: this.content,
            },
          }, false);
          this.showNotify(this.$t('Home_49'), 'success');
          this.email = this.content = '';
        } catch(err) {
          this.showNotify(this.$t('Home_50'), 'error');
        } finally {
          this.loading = false;
        }
      }
    },
    // mounted() {
    //   this.bodyId = document.body.id;
    //   document.body.id = '';
    //   console.log(this.bodyId);
    // },
    // beforeDestroy() {
    //   console.log(121231231);
    //   document.body.id = this.bodyId;
    // }
  }
</script>

<style lang="less" scoped>
  .feedback {
    padding-top: 70px;
    background: white;
    color: black;
    height: 100vh;

    * {
      transition: none !important;
    }

    // 头部
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 145px;
      background: linear-gradient(0deg, #EEF0FD 0%, #FFFFFF 100%);
      position: relative;
      margin-bottom: 76px;

      .icon {
        margin-right: 18px;
        width: 36px;
        display: flex;
        align-items: center;

        img {
          width: 100%;
        }
      }

      .layout {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 9;
      }

      .tip {
        h5 {
          font-size: 20px;
          color: #264498;
        }

        p {
          font-size: 12px;
          color: #343434;
        }
      }

      // 背景图
      .bg-image {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
        z-index: 0;
      }
    }

    // 内容
    .body {
      .form {
        border: 1px solid #F5F5F5;
      }

      .input-item {
        margin-bottom: 28px;
      
        .label {
          font-size: 14px;
          font-weight: bold;
          position: relative;
          padding-left: 7px;
          margin-bottom: 10px;

          &::after {
            @height: 13px;

            content: '';
            width: 3px;
            height: @height;
            margin-top: -(@height / 2);
            border-radius: 2px;
            display: inline-block;
            background: #FF9959;
            position: absolute;
            top: 50%;
            left: 0;
          }
        }

        textarea,
        input {
          width: 100%;
          box-sizing: border-box;
          border-radius: 10px;
          background: #FFFFFF;
          box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
          border: none;
          outline: none;
          font-size: 14px;
        }

        input {
          padding: 0 15px;
          height: 50px;
        }

        textarea {
          padding: 15px;
          height: 200px;
          font-weight: bold;
          resize: none;
        }
      }

      // 提交按钮
      .submit {
        width: 327px;
        height: 44px;
        display: block;
        margin: 0 auto 30px auto;
      }
    }
  }

  @media (min-width: 768px) {
    .feedback {
      .header .layout,
      .body {
        width: 60%;
        margin: 0 auto;
      }

      .form {
        padding: 45px 54px;
        margin-bottom: 56px;
      }
    }
  }

  @media (max-width: 768px) {
    .feedback {
      .header .layout,
      .body {
        width: 90%;
        margin: 0 auto;
      }

      .form {
        padding: 25px 35px;
        margin-bottom: 40px;
      }
    }
  }
</style>