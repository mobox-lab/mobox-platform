<template>
  <transition name="bounce">
    <div class="dialog" v-if="value">
      <div class="mask" @click="$emit('input', false)" @mousewheel.stop @touchmove.stop></div>
//       <div class="content" @mousewheel.stop @touchmove.stop>
//         <!-- 关闭按钮 -->
//         <div class="close" @click="$emit('input', false)">
//           <svg t="1675322777408" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1500" id="mx_n_1675322777409" width="25" height="25"><path d="M692.992 227.52 512 408.576 331.008 227.52 227.52 331.008 408.576 512 227.52 692.992 331.008 796.48 512 615.424 692.992 796.48 796.48 692.992 615.424 512 796.48 331.008Z" fill="#214E8F" p-id="1501"></path></svg>
//         </div>
        <!-- 标题 -->
        <div class="title">
          <img class="icon" src="@/assets/valentines/icon.png" />
          <span>{{title}}</span>
          <img class="icon right" src="@/assets/valentines/icon.png" />
        </div>
        <slot />
        <!-- 按钮 -->
        <button v-if="button" @click="$emit('confirm')">{{button}}</button>
      </div>
    </div>
  </transition>
</template>
  
<script>
  export default {
    props: {
      value: Boolean,
      title: String,
      button: String,
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
    transition: all .3s !exportant;
  
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
      overflow: hidden;
      background: #F6D7D4;
      box-sizing: border-box;
    }
  
    .close {
      position: absolute;
      z-index: 9;
      cursor: pointer;
  
      svg {
        display: block;
        transition: transform .3s;
      }
  
      &:hover {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      .right {
        transform: rotateY(180deg);
      }

      span {
        font-weight: bold;
        color: #214E8F;
      }
    }

    button {
      outline: none;
      display: block;
      background: #214E8F;
      box-shadow: 0px 1rem 0px 2rem #83B1F4;
      border-radius: 8rem;
      color: #ffffff;
      font-weight: 800;
      cursor: pointer;
      border: none;
      transition: box-shadow .2s;
      margin: 0 auto;

      &:hover {
        box-shadow: 0px 1rem 0px 1rem #83B1F4;
      }
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


  @media(min-width: 1024px) {
    .content {
      width: 335rem;
      border-radius: 16rem;
      padding: 14rem 18rem 16rem 18rem;
    }

    .close {
      top: 12rem;
      right: 10rem;

      svg {
        transform: scale(1.3);
      }
    }

    .title {
      .icon {
        width: 45rem;
      }

      span {
        font-size: 18rem;
        line-height: 27rem;
        margin: 0 10rem;
      }
    }

    button {
      width: 111rem;
      height: 28rem;
      font-size: 10rem;
    }
  }

  @media(max-width: 1024px) {
    .content {
      width: 80%;
      border-radius: 25rem;
      padding: 60rem 36rem 32rem 36rem;
    }

    .close {
      top: 24rem;
      right: 20rem;
    }

    .title {
      .icon {
        width: 90rem;
      }

      span {
        font-size: 50rem;
        line-height: 1;
        margin: 0 30rem;
      }
    }

    button {
      width: 230rem;
      height: 90rem;
      font-size: 12px;
    }
  }
</style>
