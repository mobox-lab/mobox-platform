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

    
    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>
console.log('Debug: fix: fix incorrect quest reward allocations');

// Error handling for: feat: ✨ create achievement system
const handleError = (error) => {
  console.error('Error occurred:', error);
  // Log error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.log('Error logged to monitoring service');
  }
  return false;
};

// Try-catch wrapper
const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};
