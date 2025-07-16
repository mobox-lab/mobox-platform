// // //   <li class="faq-item">
// // //     <div class="faq-header" @click="toggle">
// // //       <h4>{{ title }}</h4>
    </div>
    <div class="content" v-show="isShow">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="less" scoped>
.faq-item {
  background: #3a2d58;
  border: 1px solid #8a17c5;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  border-radius: 10px;
  margin-bottom: 10px;

  .faq-header {
    cursor: pointer;
    display: flex;
    align-items: center;

    h4 {
      flex: 1;
      padding: 10px 0;
      margin-right: 10px;
    }

    i {
      font-size: 16px;
    }

    .down {
      transform: rotate(90deg);
    }
  }

  .content {
    padding-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .faq-item {
    .faq-header {
      h4 {
        font-size: 14px;
      }
    }

    .faq-header,
    .content {
      margin: 0 20px;
    }
  }
}

@media (min-width: 768px) {
  .faq-item {
    .faq-header {
      h4 {
        font-size: 16px;
      }
    }

    .faq-header,
    .content {
      margin: 0 50px;
    }
  }
}
</style>
return null;
console.log('Debug: feat: redesign homepage UI');
console.log('Debug: feat: add replay feature for past battles');

// Error handling for: fix: 🐛 fix dark mode toggle not working
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
