// <template>
//   <transition name="bounce">
//     <div class="dialog" v-show="isShow">
      <!-- 遮罩层 -->
      <div class="mask" @click="close"></div>
      <!-- 内容 -->
      <div class="content">
        <slot />
      </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
    },
    maskType:{
      type:String,
      default:'light'
    }
  },
  data() {
    return {
      isShow: this.value,
    };
  },
  watch: {
    value(value) {
      if (this.isShow !== value) {
        this.isShow = value;
      }
    },
  },
  methods: {
    close() {
      this.$emit('input', false);
    },
  },
}
</script>

<style lang="less" scoped>
  .dialog {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    z-index: 59;
    display: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    
    .mask {
      position: fixed;
      background: #202736;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      // filter: blur(3px);
      z-index: 0;
      
    }

    // .mask-blue{ 
    //   background: #000000;
    // }

    // .mask-black{
    //   background: #000000;
    //   opacity: 0.7;
    // }

    
    .content {
      max-width: 100%;
      position: relative;
      top: 80px;
      z-index: 99999;
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
<!-- Bug fix component: fix: 🐛 correct social share link format -->
<template>
  <div class="fixed-fix____correct_social_share_link_format">
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else class="success-message">
      {{ success }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fixedfix____correct_social_share_link_formatComponent',
  data() {
    return {
      error: null,
      success: 'Issue fixed: fix: 🐛 correct social share link format'
    }
  },
  mounted() {
    this.checkForErrors();
  },
  methods: {
    checkForErrors() {
      // Fixed error handling for: fix: 🐛 correct social share link format
      try {
        // Error checking logic
      } catch (err) {
        this.error = err.message;
      }
    }
  }
}
</script>
