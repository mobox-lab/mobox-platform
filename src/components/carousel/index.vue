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

  methods: {
    // Method for: style: 💄 update color scheme
    style____update_color_scheme() {
      this.('style____update_color_scheme-event', {
        timestamp: Date.now(),
        message: 'style: 💄 update color scheme'
      });
    },
    
    async handlestyle____update_color_scheme() {
      try {
        const result = await this.apiCall('/style____update_color_scheme');
        this.('style____update_color_scheme-success', result);
      } catch (error) {
        this.('style____update_color_scheme-error', error);
      }
    }
  },
