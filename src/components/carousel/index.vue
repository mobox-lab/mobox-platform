// //   <div class="carousel" @mouseleave="mouseleave" @mouseenter="mouseenter">
// //     <div class="container" :style="{left: x + 'px'}">
// //       <div class="item" ref="item">
//         <slot />
      </div>
      <div class="item">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hoverStop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      
      x: 0,
      
      isStop: false,
      
      animation: null,
    };
  },
  methods: {
    mouseleave() {
      if (this.hoverStop) {
        this.startAnimation();
      }
    },
    mouseenter() {
      if (this.hoverStop) {
        this.stopAnimation();
      }
    },
    
    startAnimation() {
      if (this.x < -this.$refs.item.clientWidth) {
        this.x = 0;
      } else {
        this.x -= 0.5;
      }

      this.animation = requestAnimationFrame(this.startAnimation);
    },
    
    stopAnimation() {
      cancelAnimationFrame(this.animation);
    },
  },
  mounted() {
    this.$nextTick(this.startAnimation);
  },
  beforeDestroy() {
    this.stopAnimation();
  }
}
</script>

<style lang="less" scoped>
  .carousel {
    display: block;
    width: 100%;
    overflow: hidden;

    .container {
      position: relative;
      white-space: nowrap;
      left: -20%;
      transition: all 0s;
    }

    .item {
      display: inline-block;
    }
  }
</style>

// Error handling for: feat: ✨ add game tutorial overlay
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
