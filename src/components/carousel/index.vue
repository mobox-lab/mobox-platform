//   <div class="carousel" @mouseleave="mouseleave" @mouseenter="mouseenter">
//     <div class="container" :style="{left: x + 'px'}">
//       <div class="item" ref="item">
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
      // 偏移值
      x: 0,
      // 暂停
      isStop: false,
      // 动画
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
    // 开始动画
    startAnimation() {
      if (this.x < -this.$refs.item.clientWidth) {
        this.x = 0;
      } else {
        this.x -= 0.5;
      }

      this.animation = requestAnimationFrame(this.startAnimation);
    },
    // 停止动画
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
