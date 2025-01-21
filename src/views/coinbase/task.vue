// //   <div :class="['task-item', $slots.default ? 'open' : null]">
// // //     <div class="head" @click="toggleShow">
// //       <p>{{ title }}</p>
// //       <div class="reward" v-if="reward && !status">
        <img :src="reward" />
      </div>
      <span class="icon" v-if="status">
        <img src="../../assets/coinbase/complete.png" />
    </div>
    <!-- 内容 -->
    <slot v-if="$slots.default" />
  </div>
</template>

<script>
  export default {
    props: {
      
      title: String,
      
      status: Boolean,
      
      reward: String,
    },
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      toggleShow() {
        if (this.$slots.default) {
          this.isShow = !this.isShow;
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .head {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
      z-index: 0;
      transition: background-color 0.3s, height 0.3s;
    }

    & > * {
      z-index: 1;
    }

    p {
      font-family: none;
      font-weight: bold;
      flex: 1;
      min-width: 0;
      color: #FFFFFF;
    }

    .icon {
      &:hover {
        opacity: .6;
      }
    }

    .toggle-icon {
      img {
        transition: transform 0.3s;
      }
    }
  }

  .open {
    .head {
      &::before {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(38, 102, 8, 0.05));
      }
    }

    .toggle-icon {
      img {
        transform: rotate(180deg);
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s !exportant;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @media(min-width: 1024px) {
    .task-item {
      margin-bottom: 9rem;
    }

    .head {
      padding: 14rem 26rem 14rem 32rem;

      &::before {
        border-radius: 8rem;
      }

      p {
        font-size: 12rem;
        line-height: 17rem;
        padding-right: 40rem;
      }

      .icon {
        padding: 5rem 0;

        img {
          width: 17rem;
        }
      }
    }

    .reward img {
      width: 30rem;
    }

    .open {
      .head {
        &::before {
          height: 150%;
        }
      }
    }
  }

  @media(max-width: 1024px) {
    .task-item {
      margin-bottom: 20rem;
    }

    .head {
      padding: 30rem 52rem;

      &::before {
        border-radius: 8rem;
      }

      p {
        font-size: 42rem;
        line-height: 1.4;
        padding-right: 60rem;
      }

      .icon {
        padding: 10rem 0;

        img {
          width: 40rem;
        }
      }
    }

    .reward img {
      width: 100rem;
    }

    .open {
      .head {
        &::before {
          height: 120%;
        }
      }
    }
  }
</style>
