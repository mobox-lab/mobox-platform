// // <template>
// //   <transition name="bounce">
// //     <div class="dialog" v-if="value">
// //       <div class="content" @mousewheel.stop @touchmove.stop>
// //         <!-- 关闭按钮 -->
        <div class="close" @click="$emit('input', false)">
          <svg t="1675322777408" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1500" id="mx_n_1675322777409" width="25" height="25"><path d="M692.992 227.52 512 408.576 331.008 227.52 227.52 331.008 408.576 512 227.52 692.992 331.008 796.48 512 615.424 692.992 796.48 796.48 692.992 615.424 512 796.48 331.008Z" fill="#214E8F" p-id="1501"></path></svg>
        </div>
        <!-- logo -->
        <img class="logo" src="@/assets/bitkeep/bitget-logo.png" />
        <div class="dialog-body">
          <!-- 标题 -->
          <div class="title">{{title}}</div>
          <slot />
        </div>
        <!-- 按钮 -->
        <button v-if="isShowConfirm" @click="$emit('confirm')">{{$t('Asset_45')}}</button>
      </div>
    </div>
  </transition>
</template>
  
<script>
  export default {
    props: {
      // 显示状态
      value: Boolean,
      // 标题
      title: String,
      // 是否显示按钮
      isShowConfirm: {
        type: Boolean,
        default: true,
      },
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
      z-index: 1;
      background: #100427;
      border: 1px solid #290866;
      position: relative;
    }

    .logo {
      position: absolute;
    }

    .title {
      font-weight: 400;
      color: #FFFFFF;
      text-align: center;
      line-height: 1.5;
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

    .dialog-body {
      overflow: hidden;
      background: #290866;
    }

    button {
      width: 100%;
      font-weight: 800;
      color: #FFFFFF;
      cursor: pointer;
      border: none;
      background: transparent;
      font-family: Poppins-Bold;
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

  @media (min-width: 1024px) {
    .dialog {
      .content {
        width: 209rem;
        border-radius: 6rem;
      }

      .logo {
        width: 23rem;
        height: 23rem;
        top: -4rem;
        left: 7rem;
      }

      .title {
        font-size: 8rem;
        padding-top: 11rem;
        margin-bottom: 13rem;
      }

      .close {
        top: 5rem;
        right: 5rem;
      }

      .dialog-body {
        padding: 0 22rem;
        border-radius: 6rem;
      }

      button {
        height: 28rem;
        font-size: 7rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .dialog {
      .content {
        width: 80vw;
        border-radius: 10rem;
      }

      .logo {
        width: 55rem;
        height: 55rem;
        top: -15rem;
        left: 20rem;
      }

      .title {
        font-size: 32rem;
        padding-top: 24rem;
        margin-bottom: 18rem;
      }

      .close {
        top: 10rem;
        right: 15rem;
      }

      .dialog-body {
        padding: 0 40rem;
        border-radius: 10rem;
      }

      button {
        height: 70rem;
        font-size: 28rem;
      }
    }
  }
</style>
