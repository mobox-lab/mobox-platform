<template>
  <div :class="['envelope', isOpen ? 'open' : null]" v-if="isShow">
    <div class="container">
      <div class="body">
        <!-- 内容 -->
        <div class="content-container">
          <div class="content">
            <img class="icon left" src="@/assets/valentines/envelope-border.png" />
            <img class="icon right" src="@/assets/valentines/envelope-border.png" />
            <div class="head">
              <img class="mobox" src="@/assets/valentines/mobox.png" />
              <img class="trust-wallet" src="@/assets/valentines/trust-wallet.png" />
            </div>
            <p>{{$t('Valentine_1')}}</p>
            <img class="momo-image" src="@/assets/valentines/title-image.png" />
          </div>
        </div>
        <!-- 背景 -->
        <div class="background"></div>
        <!-- 信封外壳 -->
        <img class="body-image" src="@/assets/valentines/envelope-body.png" />
        <!-- 关闭状态 -->
        <div class="head-close">
          <img src="@/assets/valentines/envelope-close.png" />
        </div>
        <!-- 打开状态 -->
        <div class="head-open">
          <img src="@/assets/valentines/envelope-open.png" />
        </div>
        <!-- 按钮 -->
        <div class="button" @click="open">
          <img src="@/assets/valentines/envelope-button.png" />
        </div>
        <!-- 确认 -->
        <div class="confirm" @click="close">{{$t('Setting_48')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        isShow: true,
      };
    },
    methods: {
      open() {
        this.isOpen = true;
      },
      close() {
        this.$emit('close');
        this.isShow = false;
      }
    },
  };
</script>

<style lang="less" scoped>
  .envelope {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(65, 41, 44, .93);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    .container {
      position: relative;
    }

    .body {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    .body-image {
      position: relative;
      z-index: 1;
    }

    .background {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -2;
      transition: border-radus .5s;
      background-image: linear-gradient(#C89AAE, #621343);
    }

    .head-close,
    .head-open {
      z-index: -1;
      position: absolute;
      right: 0;
      left: 0;
      transform-origin: top center;
    }

    .head-close {
      transition: transform 0.5s;
    }

    .head-open {
      bottom: 100%;
      transform: scaleY(0);
      transition: transform 1s;
      transition-delay: .2s;
      transform-origin: bottom center;
    }

    .button {
      z-index: 9;
      position: absolute;
      top: 50%;
      left: 50%;
      cursor: pointer;
      animation-name: swing;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      transition: opacity .5s;
    }

    .confirm {
      background: #214E8F;
      font-weight: 800;
      color: #FFFFFF;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: absolute;
      left: 50%;
      z-index: 99;
      transform: translateX(-50%);
      transition: opacity 1s;
      opacity: 0;
    }

    .content-container {
      z-index: 0;
      position: absolute;
      bottom: 0;
      overflow: hidden;
    }
  }

  .content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-image: linear-gradient(#ECB5B6, #e38d87);
    transform: translateY(50%);
    transition: transform 1s, opacity 1s !important;
    transition-delay: .1s !important;

    .icon {
      position: absolute;
    }

    .left {
      left: 10rem;
    }

    .right {
      transform: rotateY(180deg);
    }

    .head {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      font-weight: 400;
      color: #FCF3F2;
    }

    .momo-image {
      margin: 0 auto;
    }
  }

  .open {
    .button {
      opacity: 0;
    }

    .head-close {
      transform: scaleY(0);
    }

    .head-open {
      transform: scaleY(1);
    }

    .background {
      border-radius: 4rem;
    }

    .content {
      transform: translateY(0);
      opacity: 1;
    }

    .confirm {
      opacity: 1;
    }
  }

  @keyframes swing {
    5% {
      transform: rotate(15deg);
    }

    10% {
      transform: rotate(-10deg);
    }

    15% {
      transform: rotate(5deg);
    }

    20% {
      transform: rotate(-5deg);
    }

    25% {
      transform: rotate(0deg);
    }
  }

  @media(min-width: 1024px) {
    .envelope {
      .container {
        width: 447rem;
        height: 456rem;
      }

      .background {
        transform: translateY(-20rem);
        border-radius: 20rem;
        border-left: 25rem solid #ffffff;
        border-right: 25rem solid #ffffff;
      }

      .head-close {
        top: -21rem;
      }

      .head-open {
        margin-bottom: 10rem;
      }

      .button {
        width: 98rem;
        height: 98rem;
        margin-top: -((98rem) / 2);
        margin-left: -(98rem / 2);
      }

      .confirm {
        padding: 0 20rem;
        height: 26rem;
        box-shadow: 0px 1rem 0px 2rem #83B1F4;
        border-radius: 8rem;
        font-size: 13rem;
        bottom: 60rem;
      }

      .content-container {
        top: -115rem;
        right: 40rem;
        left: 40rem;
      }

      .content {
        border-radius: 20rem;

        .icon {
          top: 10rem;
          width: 50rem;
        }

        .right {
          right: 10rem;
        }

        .head {
          padding-top: 20rem;
        }

        .mobox {
          height: 24rem;
          margin-right: 7rem;
        }

        .trust-wallet {
          height: 28rem;
        }

        p {
          font-size: 10rem;
          padding: 10rem 40rem 0 40rem;
        }

        .momo-image {
          width: 112rem;
        }
      }
    }
  }

  @media(max-width: 1024px) {
    .envelope {
      .container {
        width: 1200rem;
        margin-top: 1000rem;
      }

      .background {
        transform: translateY(-110rem);
        border-radius: 40rem;
        border-left: 50rem solid #ffffff;
        border-right: 50rem solid #ffffff;
      }

      .head-close {
        top: -107rem;
      }

      .head-open {
        margin-bottom: 60rem;
      }

      .button {
        width: 220rem;
        height: 220rem;
        margin-top: -((220rem) / 2);
        margin-left: -(220rem / 2);
      }

      .confirm {
        padding: 0 60rem;
        height: 85rem;
        box-shadow: 0px 2rem 0px 4rem #83B1F4;
        border-radius: 16rem;
        font-size: 13px;
        bottom: 150rem;
      }

      .content-container {
        top: -400rem;
        right: 80rem;
        left: 80rem;
      }

      .content {
        border-radius: 40rem;

        .icon {
          top: 20rem;
          width: 100rem;
        }

        .right {
          right: 20rem;
        }

        .head {
          padding-top: 40rem;
        }

        .mobox {
          height: 60rem;
          margin-right: 20rem;
        }

        .trust-wallet {
          height: 70rem;
        }

        p {
          font-size: 12px;
          padding: 20rem 80rem 0 80rem;
        }

        .momo-image {
          width: 224rem;
        }
      }
    }
  }
</style>
return null;
