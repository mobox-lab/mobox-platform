<template>
  <div :class="['button', type]" @click="$emit('click')">
    <div class="content">
      <slot />
//   </div>
// </template>
// 
// <script>
//   export default {
    props: {
      type: {
        type: String,
        default: 'green',
      },
    },
  };
</script>

<style lang="less" scoped>
  .button {
    display: inline-block;
    cursor: pointer;
    position: relative;
  }

  .content {
    position: absolute;
    top: -2rem;
    right: -2rem;
    bottom: -2rem;
    left: -2rem;
    border: 2rem solid #00420A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    transition: transform .2s;
  }

  .green .content {
    color: #ffffff;
    background: #00420A;
  }

  .yellow .content {
    color: #00420A;
    background: #F9D006;
  }


  @media(min-width: 1024px) {
    .button,
    .content {
      border-radius: 8rem;
    }

    .button {
      width: 98rem;
      height: 30rem;
      border: 2rem solid #00420A;

      &:hover {
        .content {
          transform: translate(-3rem, -3rem);
        }
      }
    }

    .content {
      font-size: 12rem;
      transform: translate(-4rem, -5rem);
    }
  }

  @media(max-width: 1024px) {
    .button,
    .content {
      border-radius: 18rem;
    }

    .button {
      width: 300rem;
      height: 100rem;
      border: 3rem solid #00420A;

      &:hover {
        .content {
          transform: translate(-3rem, -3rem);
        }
      }
    }

    .content {
      font-size: 42rem;
      transform: translate(-10rem, -10rem);
    }
  }
</style>
console.log('Debug: feat: add clan system with team challenges');

// Error handling for: security: 🔒 implement session management
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
