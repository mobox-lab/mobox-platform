<template>
  <transition name="bounce">
    <div class="dialog" v-if="value">
      <div class="mask" @click="$emit('input', false)" @mousewheel.stop @touchmove.stop></div>
//       <div class="content" @mousewheel.stop @touchmove.stop>
//         <div class="icon">
//           <img v-if="prize" :src="prize.icon" >
//         </div>
//         <h6 class="title">{{ prize.name }}</h6>
        <div class="button" @click="$emit('input', false)">Confirm</div>
      </div>
    </div>
  </transition>
</template>
  
<script>
  export default {
    props: {
      value: Boolean,
      // 奖品
      prize: Object,
    },
  };
</script>
  
<style lang="less" scoped>
  .dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s !important;
  
    // 遮罩层
    .mask {
      position: fixed;
      background: rgba(4, 15, 26, .9);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      z-index: 0;
      cursor: pointer;
    }
  
    // 内容
    .content {
      position: relative;
      z-index: 1;
    }
  
    .close {
      position: absolute;
      cursor: pointer;
  
      img {
        display: block;
        width: 100%;
        transition: transform .3s;
      }
  
      &:hover {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }

  .content {
    background-color: #020711;
    background-image: url(.././../assets/anniversary-raffle/dialog-background.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;

    .icon {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(../../assets/anniversary-raffle/dialog-icon-background.png) no-repeat;
      background-size: cover;
    }

    .title {
      color: #CD8001;
      font-weight: 900;
    }

    .button {
      background: url(../../assets/anniversary-raffle/button.png) no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #592C05;
      cursor: pointer;
      &:hover {
        opacity: .9;
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      border: 1rem solid rgba(99, 79, 36, 0.43);
      width: 253rem;
      height: 149rem;
      padding-top: 32rem;
      box-shadow: 0px 5px 0px 0px #281905;
      border-radius: 5rem;
    }

    .icon {
      width: 114rem;
      height: 113.5rem;
      top: -70rem;

      img {
        max-width: 65rem;
        max-height: 70%;
      }
    }

    .title {
      margin-top: 10rem;
      margin-bottom: 20rem;
      font-size: 25rem;
    }

    .button {
      width: 125rem;
      height: 35rem;
      font-size: 13rem;
    }
  }

  @media(max-width: 1024px) {
    .content {
      border: 2rem solid rgba(99, 79, 36, 0.43);
      width: 800rem;
      padding-top: 120rem;
      padding-bottom: 70rem;
      box-shadow: 0px 6px 0px 0px #281905;
      border-radius: 15rem;
    }

    .icon {
      width: 342rem;
      height: 340.5rem;
      top: -180rem;

      img {
        max-width: 140rem;
        max-height: 70%;
      }
    }

    .title {
      margin-top: 50rem;
      margin-bottom: 60rem;
      font-size: 80rem;
    }

    .button {
      width: 400rem;
      height: 120rem;
      font-size: 55rem;
    }
  }
  
  // 过度动画
  .bounce-enter-active,
  .bounce-leave-active {
    transition: opacity 0.3s;
  
    .mask {
      transition: opacity 0.3s;
    }
  
    .content {
      transition: transform 0.3s, opacity 0.3s;
    }
  }
  
  .bounce-enter .content,
  .bounce-leave-to .content,
  .bounce-enter .mask,
  .bounce-leave-to .mask {
    opacity: 0;
  }
  
  .bounce-enter .content,
  .bounce-leave-to .content {
    transform: translateY(-30px);
  }
</style>
  