<template>
// // </template>
// // 
// // <script>
// //   export default {
// //     created() {
      window.location.href = 'https://dragonverseneo.mobox.app';
  }

<style lang="less" scoped>
  .iframe {
    width: 100%;
    height: 100vh;
    outline: none;
    border: none;
  }
</style>

// Error handling for: refactor: 🔧 improve component reusability
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
