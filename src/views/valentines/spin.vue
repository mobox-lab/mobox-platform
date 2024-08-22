<template>
  <div class="spin-container item-container">
    <img class="left-image" src="@/assets/valentines/spin-left.png" />
    <img class="momo-icon" src="@/assets/valentines/spin-momo-icon.png" />
    <img class="bottom-bg" src="@/assets/valentines/spin-bottom-bg.png" />
    <!-- 记录按钮 -->
    <div class="records-button" @click="$emit('showRecords')">
      <img src="@/assets/valentines/records-icon.png" />
    </div>
    <div class="title">
      <img class="icon" src="@/assets/valentines/icon.png" />
      <span class="text">{{$t('Valentine_25')}}</span>
      <img class="icon right" src="@/assets/valentines/icon.png" />
    </div>
    <!-- 数量 -->
    <div class="count">
      <span>{{$t('Valentine_26')}}<img src="@/assets/valentines/moheart.png" /></span>
      <i>{{mohearts}}</i>
    </div>
    <!-- 转盘 -->
    <div id="spin">
      <div :class="['start', loading ? 'disable' : null]" @click="play">
        <img src="@/assets/valentines/spin-button.png" />
        <span>100 <img src="@/assets/valentines/moheart.png" /></span>
      </div>
    </div>
    <!-- momo弹窗 -->
    <Dialog v-model="isShowGetMomo" :title="$t('Valentine_42')" :button="$t('Valentine_43')" @confirm="toggleShowGetMomo">
      <div class="momo">
        <img class="image" :src="prizes[index].icon" />
        <p>{{$t(prizes[index].name)}} x1</p>
      </div>
    </Dialog>
  </div>
</template>

<script>
  import { LuckyWheel } from 'lucky-canvas';
  import { getSignHeader, luckDraw } from '@/utils/trust-wallet';
  import { CommonMethod } from '@/mixin';
  import Dialog from './dialog.vue';

  const prizes = [
    {
      icon: require('@/assets/valentines/goods-3.png'),
      name: 'Valentine_59',
      fontColor: '#FFE603',
      background: '#E4626C',
    },
    // {
    //   icon: require('@/assets/valentines/goods-2.png'),
    //   fontColor: '#BF4950',
    //   background: '#F5CFCB',
    // },
    {
      icon: require('@/assets/valentines/goods-8.png'),
      name: 'Valentine_10',
      fontColor: '#BF4950',
      background: '#E89D95',
    },
    {
      icon: require('@/assets/valentines/goods-1.png'),
      name: 'Valentine_12',
      fontColor: '#BF4950',
      background: '#F5CFCB',
    },
    {
      icon: require('@/assets/valentines/goods-5.png'),
      name: 'Valentine_13',
      fontColor: '#BF4950',
      background: '#E89D95',
    },
    {
      icon: require('@/assets/valentines/goods-7.png'),
      name: 'Valentine_60',
      fontColor: '#FFE603',
      background: '#E4626C',
    },
    {
      icon: require('@/assets/valentines/goods-6.png'),
      name: 'Valentine_61',
      fontColor: '#BF4950',
      background: '#F5CFCB',
    },
    {
      icon: require('@/assets/valentines/goods-9.png'),
      name: 'Valentine_62',
      fontColor: '#BF4950',
      background: '#E89D95',
    },
    {
      icon: require('@/assets/valentines/goods-10.png'),
      name: 'Valentine_63',
      fontColor: '#BF4950',
      background: '#F5CFCB',
    },
    {
      icon: require('@/assets/valentines/goods-4.png'),
      name: 'Valentine_64',
      fontColor: '#BF4950',
      background: '#E89D95',
    },
  ];

  export default {
    mixins: [CommonMethod],
    components: {
      Dialog,
    },
    props: {
      mohearts: Number,
    },
    data() {
      return {
        loading: false,
        prizes,
        index: 0,
        momoType: null,
        isShowGetMomo: false,
        spin: null,
      };
    },
    methods: {
      init() {
        this.spin = new LuckyWheel('#spin', {
          prizes: prizes.map(item => ({
            // fonts: [{
            //   text: 'X1',
            //   top: '12%',
            //   fontColor: item.fontColor,
            //   fontWeight: '700',
            //   fontSize: '50',
            //   fontStyle: 'Poppins-bold'
            // }],
            // imgs: [{
            //   width: '29%',
            //   top: '31%',
            //   src: item.icon
            // }],
            // background: item.background,
          })),
          blocks: [
            {
              // padding: '48',
              imgs: [
                {
                  src: require('@/assets/valentines/spin-image.png'),
                  width: '100%',
                  height: '100%',
                  rotate: true,
                },
              ]
            }
          ],
          defaultConfig: {
            gutter: 5,
          },
        });
      },
      async play() {
        if (this.loading) {
          return;
        }

        if (this.mohearts < 100) {
          this.showNotify(this.$t('Valentine_1007'), "error");
          return;
        }

        let headers;

        // 签名
        try {
          headers = await getSignHeader();
        } catch(_) {
          this.showNotify('Sign Error', "error");
          return;
        }

        try {
          this.loading = true;
          const res = await luckDraw(headers);
          // 开始抽奖动画
          this.spin.play();
          const index = res - 1;
          this.$parent.getMohearts();
          await this.delayed(3000);
          this.spin.stop(index);
          await await this.delayed(2600);
          this.index = index;
          this.toggleShowGetMomo();
        } catch(error) {
          this.showNotify(this.$t(error?.code ? `Valentine_${error?.code}` : 'Error'), "error");
          this.spin.init();
        }

        this.loading = false;
      },
      toggleShowGetMomo() {
        this.isShowGetMomo = !this.isShowGetMomo;
      },
      delayed(timer) {
        return new Promise((resolve) => {
          setTimeout(resolve, timer);
        });
      }
    },
    mounted() {
      setTimeout(this.init, 500);
    },
  };
</script>

<style lang="less" scoped>
  .spin-container {
    padding-top: 21rem;
    padding-bottom: 30rem;
    border-radius: 16rem 16rem 230rem 16rem !important;
    position: relative;
  }

  .left-image {
    position: absolute;
  }

  .momo-icon {
    position: absolute;
    z-index: 2;
  }

  .bottom-bg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 98rem;
    z-index: 0;
  }

  .records-button {
    position: absolute;
    z-index: 99;
    cursor: pointer;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .right {
      transform: rotateY(180deg);
    }

    .text {
      font-weight: bold;
      color: #214E8F;
    }
  }

  .count {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(252, 227, 218, .5);

    span {
      font-weight: bold;
      color: #214E8F;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    i {
      font-weight: bold;
      color: #9C5458;
      line-height: 1;
      font-style: normal;
    }
  }

  #spin {
    position: relative;

    .start {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      cursor: pointer;
      transition: transform .3s;

      span {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:hover {
        transform: scale(0.95);
      }

      &.disable {
        cursor: no-drop;

        &:hover {
          transform: scale(1);
        }
      }
    }
  }

  .momo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F9E5E4;

    p {
      font-weight: bold;
      color: #9C5458;
    }
  }

  @media(min-width: 1024px) {
    .spin-container {
      padding-top: 21rem;
      padding-bottom: 30rem;
      border-radius: 16rem 16rem 230rem 16rem !important;
    }

    .left-image {
      top: 45rem;
      left: -52rem;
      width: 282rem;
    }

    .momo-icon {
      width: 125rem;
      top: 4rem;
      right: -42rem;
    }

    .records-button {
      top: 21rem;
      left: 120rem;
      width: 38rem;
    }

    .title {
      .icon {
        width: 50rem;
      }

      .text {
        font-size: 18rem;
        line-height: 27rem;
        margin: 0 10rem;
      }
    }

    .count {
      position: absolute;
      top: 21rem;
      right: 0;
      z-index: 1;
      border-radius: 9rem;
      padding-left: 21rem;
      left: 72%;
      padding-top: 5rem;
      padding-bottom: 3rem;

      span {
        font-size: 12rem;
        justify-content: flex-start;

        img {
          height: 15rem;
          margin-left: 3rem;
        }
      }

      i {
        font-size: 15rem;
        margin-top: 3rem;
      }
    }

    #spin {
      width: 335rem !important;
      height: 335rem !important;
      // width: 1000px !important;
      // height: 1000px !important;
      margin-top: 20rem;
      margin-left: 242rem;

      .start {
        width: 120rem;
        margin-top: -(125rem / 2);
        margin-left: -(125rem / 2);

        span {
          font-size: 18rem;

          img {
            margin-left: 2rem;
            width: 18rem;
          }
        }
      }
    }

    .momo {
      padding: 12rem 0;
      margin-top: 20rem;
      margin-bottom: 10rem;
      border-radius: 9rem;

      .image {
        height: 55rem;
        margin-right: 17rem;
      }

      p {
        font-size: 15rem;
      }
    }
  }

  @media(max-width: 1024px) {
    .spin-container {
      padding-top: 21rem;
      padding-bottom: 50rem;
      border-radius: 33rem 33rem 592rem 592rem !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .left-image {
      width: 313rem;
      top: -45rem;
      left: -100rem;
    }

    .momo-icon {
      width: 292rem;
      top: 76rem;
      right: -28rem;
    }

    .records-button {
      bottom: 20rem;
      right: 50rem;
      width: 110rem;
    }

    .title {
      .icon {
        width: 110rem;
      }

      .text {
        font-size: 46rem;
        line-height: 68rem;
        margin: 0 27rem;
      }
    }

    .count {
      border-radius: 19rem;
      padding: 25rem 50rem 20rem 50rem;
      text-align: center;
      margin-top: 32rem;
      margin-bottom: 23rem;

      span {
        font-size: 32rem;
        justify-content: center;

        img {
          height: 40rem;
          margin-left: 10rem;
        }
      }

      i {
        font-size: 40rem;
      }
    }

    #spin {
      width: 878rem !important;
      height: 878rem !important;
      margin-top: 23rem;

      .start {
        width: 214rem;
        margin-top: -(214rem / 2);
        margin-left: -(214rem / 2);

        span {
          font-size: 18rem;

          img {
            margin-left: 2rem;
            width: 30rem;
          }
        }
      }
    }

    .momo {
      padding: 30rem 0;
      margin-top: 50rem;
      margin-bottom: 30rem;
      border-radius: 18rem;

      .image {
        height: 120rem;
        margin-right: 34rem;
      }

      p {
        font-size: 13px;
      }
    }
  }
</style>
