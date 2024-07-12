<template>
  <Button :disabled="disabled" class="button" @click="$emit('click')">
    <slot></slot>
// </template>
// 
// <script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="less" scoped>
  .button {
    width: 135px;
    height: 33px;
    background: #FC9B65;
    border: none;
    font-size: 14px;
    color: #ffffff;
    border-radius: 17px;
    outline: none;
    cursor: pointer;
    transition: opacity 0.3s;
    margin: 0 auto;

    &:active {
      opacity: 0.7;
    }

    // 禁用
    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>
console.log('Debug: fix: fix incorrect quest reward allocations');
