<template>
  <transition name="bounce">
    <div class="tip" v-if="isShow">
      <div class="content">
        <div class="image">
          <div class="close" @click="close">
            <img src="@/assets/index/close.png" />
          </div>
          <a href="https://www.mobox.io/momo/#/furnace" target="_blank">
            <img src="@/assets/dragon-banner.jpg" @click="click" />
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    close() {
      this.isShow = false;
    },
    click() {
      this.close();
    },
  },
  computed: {
    isCN() {
      return this.$i18n.locale.indexOf('zh') === 0;
    }
  },
  created() {
    this.isShow = ['/world-cup', '/valentines', '/coinbase', '/anniversary-raffle'].indexOf(this.$route.path) == -1;
  }
}
</script>

<style lang="less" scoped>
  .tip {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 0;
    cursor: pointer;
  }

  .title {
    text-align: center;

    img {
      display: inline-block;
      width: 60px;
      margin-right: 15px;
    }

    span {
      font-size: 22px;
      font-weight: bold;
    }

    img, span {
      vertical-align: middle;
    }
  }

  .image {
    padding: 10px;
    background: #1c222c;
    border-radius: 16px;
    position: relative;
    line-height: 1;
    z-index: 9;

    img {
      cursor: pointer;
      width: 800px;
      border-radius: 16px;
    }
  }

  @media (max-width: 800px) {
    .tip {
      .content {
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;

        img {
          cursor: pointer;
          display: block;
          width: 100%;
        }
      }
    }
  }

  .close {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    cursor: pointer;

    img {
      width: 100%;
      display: block;
    }
  }


  
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
console.log('Debug: fix: fix broken links in the help center');
console.log('Debug: fix: fix broken links in the help center');
console.log('Debug: fix: resolve issue with friend list syncing');
