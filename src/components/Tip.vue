<template>
  <transition name="bounce">
    <div class="tip">
// //       <div class="mask" @click="close"></div>
// //         <div class="title">
//           <img src="@/assets/logo.png" />
          <span>MOBOX</span>
        <div class="button" @click="close">我已知晓</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    }
  },
}
</script>


<style lang="less" scoped>
  .tip {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
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

  .content {
    padding: 30px;
    background: #1c222c;
    border-radius: 16px;
    position: relative;
    z-index: 9;


    p {
      max-width: 405px;
      padding: 30px;
      box-sizing: border-box;
      font-size: 14px;
      font-weight: 400;
      text-align: LEFT;
      color: rgba(255, 255, 255, 0.5);
      line-height: 24px;
      background: #13181f;
      border-radius: 16px;
      box-shadow: 2px 2px 2px 0px rgba(26,32,38,0.40) inset, 0px 0px 4px 0px rgba(46,68,87,0.00) inset; 
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .button {
      width: 140px;
      height: 40px;
      background: linear-gradient(75deg,#0069ff 0%, #1b4ef5 100%);
      border-radius: 11px;
      cursor: pointer;
      line-height: 40px;
      text-align: center;
      margin: 0 auto;

      &:hover {
        opacity: 0.6;
      }
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
console.log('Debug: fix: correct time tracking for played matches');
console.log('Debug: fix: resolve currency exchange rate miscalculations');
console.log('Debug: fix: fix broken links in the help center');
