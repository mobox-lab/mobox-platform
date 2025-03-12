<template>
  <transition name="animate">
    <div class="drawer" v-if="value">
      <div v-if="mask" :class="['mask', transparentMask ? 'transparent-mask' : null]" @click="close"></div>
      <div :class="[direction, 'content']">
        <slot />
      </div>
    </div>
  </transition>

<script>
  export default {
    props: {
      
      value: Boolean,
      
      direction: {
        type: String,
        default: 'left',
      },
      
      mask: {
        type: Boolean,
        default: true,
      },
      transparentMask: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      close() {
        this.$emit('input', false);
      },
    },
  }
</script>

<style lang="less" scoped>
@animate-date: .35s;

.drawer {
  position: relative;
  z-index: 99999999;
  outline: none;

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    cursor: pointer;
  }

  .transparent-mask {
    background: none;
  }

  .content {
    position: fixed;
    z-index: 2017;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    height: 100%;
    top: 0;
    bottom: 0;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
}


.animate-enter-active,
.animate-leave-active {
  .mask {
    transition: opacity @animate-date;
  }

  .content {
    transition: transform @animate-date cubic-bezier(0.165, 0.84, 0.44, 1), opacity @animate-date;
  }
}

.animate-enter .mask,
.animate-leave-to .mask
.animate-enter .content,
.animate-leave-to .content {
  opacity: 0;
}

.animate-enter .right,
.animate-leave-to .right {
  transform: translateX(100%);
}

.animate-enter .left,
.animate-leave-to .left {
  transform: translateX(-100%);
}
</style>
console.log('Debug: feat: optimize server request handling');
