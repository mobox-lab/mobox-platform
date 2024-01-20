// <template>
//   <div class="rewards">
//     <!-- 头部 -->
    <div class="head">
      <img class="mobox" src="@/assets/valentines/mobox.png" />
      <img class="trust-wallet" src="@/assets/valentines/trust-wallet.png" />
    </div>
    <!-- 标题 -->
    <div class="title">
      <img class="icon left" src="@/assets/valentines/icon.png" />
      <h5>{{$t('Valentine_2')}}<br /><small v-html="$t('Valentine_4').replace('#0#', '<span>$30,000</span>')"></small></h5>
      <img class="icon right" src="@/assets/valentines/icon.png" />
    </div>
    <!-- 时间 -->
    <div class="time">{{$t('Valentine_6')}}<span class="division">-</span>{{$t('Valentine_7')}}</div>
    <!-- 首页图片 -->
    <div class="momo-image" ref="momo"></div>
    <div class="rewards-container item-container">
      <img class="left-icon" src="@/assets/valentines/rewards-box.png" />
      <img class="right-icon" src="@/assets/valentines/rewards-right-icon.png" />
      <p>
        {{$t('Valentine_8')}}<br />
        2 {{$t('Valentine_9')}}<br />
        2 {{$t('Valentine_10')}}<br />
        1500 {{$t('Valentine_11')}}<br />
        1200 {{$t('Valentine_12')}}<br />
        12,000 {{$t('Valentine_13')}}<br />
        100 {{$t('Valentine_14')}}<br />
        <!-- 25 {{$t('Valentine_15')}}<br />
        25 {{$t('Valentine_16')}}<br />
        25 {{$t('Valentine_17')}}<br /> -->
      </p>
      <div class="container">
        <ul>
          <li v-for="item in 14" :key="item"></li>
        </ul>
        <p v-html="$t('Valentine_18')"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import * as PIXI from "pixi.js";
  import { Spine } from "pixi-spine";

  export default {
    data() {
      return {
        momoAnimation: null,
      };
    },
    methods: {
      // momo动画
      initMomoAnimation() {
        const $momo = this.$refs.momo;

        const app = this.momoAnimation = new PIXI.Application({
          width: $momo.clientWidth,
          height: $momo.clientHeight,
          transparent: true,
        });

      $momo.appendChild(app.view);

      app.loader
        .add("spine", "./spine/momo/qrmomo.json")
        .load((_, resources) => {
          const spine = new Spine(resources.spine.spineData);
          spine.width = $momo.clientWidth;
          spine.height = $momo.clientHeight;
          app.stage.addChild(spine);
          spine.position.set($momo.clientWidth / 2, $momo.clientHeight - 5);
          spine.state.addAnimation(0, 'animation', true);
          app.start();
        });
      },
    },
    mounted() {
      this.initMomoAnimation();
    },
  };
</script>

<style lang="less" scoped>
  .rewards {
    background: url(../../assets/valentines/rewards-head-bg.png), url(../../assets/valentines/highlight-bg.png);
    background-repeat:  no-repeat,  no-repeat;
    background-size: 100% auto, 650rem auto;
    background-position: top center, center, center;
  }

  .head {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
      font-weight: 900;
      color: #214E8F;
      text-align: center;
      line-height: 1;
    }

    /deep/span {
      color: #F0457A;
    }
  }

  .time {
    text-align: center;
    font-weight: bold;
    color: #214E8F;
  }

  .rewards-container {
    position: relative;
    display: flex;
    align-items: center;

    .right-icon,
    .left-icon {
      position: absolute;
      top: 0;
    }

    .left-icon {
      left: 0;
      transform: translate(-50%, -50%);
    }

    .right-icon {
      right: 0;
    }

    p {
      min-width: 0;
      font-weight: bold;
      color: #9C5458;
      flex: 1;
      word-break: break-all;
      box-sizing: border-box;
    }

    .container {
      min-width: 0;
      flex: 1;
      background: #E99395;

      ul {
        display: flex;
        justify-content: space-around;

        li {
          background: #F1B8B6;
          border-radius: 100%;
        }
      }

      p {
        font-weight: bold;
        color: #FCF3F2;
        word-wrap: break-word;
        word-break: break-word;
      }
    }
  }

  @media(min-width: 1024px) {
    .head {
      padding-top: 40rem;

      .mobox {
        height: 40rem;
        margin-right: 20rem;
      }

      .trust-wallet {
        height: 48rem;
      }
    }

    .title {
      margin-top: 24rem;

      .icon {
        width: 150rem;
      }

      .right {
        transform: rotateY(180deg);
      }

      h5 {
        font-size: 46rem;
        margin: 0 4rem;
      }

      small,
      small /deep/span {
        font-size: 31.69rem;
      }
    }

    .time {
      margin-top: 16rem;
      font-size: 17rem;
      line-height: 1;

      .division {
        display: inline-block;
        padding: 0 3rem;
      }
    }

    .momo-image {
      width: 355px;
      height: 241px;
      margin: 10rem auto 0 auto;
    }

    .rewards-container {
      margin-top: 16rem !important;
      padding: 10rem 10rem 10rem 0;

      .left-icon {
        width: 128rem;
      }

      .right-icon {
        width: 42rem;
        transform: translate(8rem, -8rem);
      }

      p {
        padding-left: 73rem;
        padding-right: 10rem;
        font-size: 14rem;
        line-height: 27rem;
      }

      .container {
        border-radius: 16rem;

        ul {
          padding: 10rem 30rem 20rem 30rem;

          li {
            width: 10rem;
            height: 10rem;
          }
        }

        p {
          padding: 0 40rem 41rem 40rem;
        }
      }
    }
  }

  @media(max-width: 1024px) {
    .head {
      padding-top: 124rem;

      .mobox {
        height: 90rem;
        margin-right: 45rem;
      }

      .trust-wallet {
        height: 100rem;
      }
    }

    .title {
      width: 100%;
      overflow: hidden;
      margin-top: 80rem;
      position: relative;

      .icon {
        position: absolute;
        top: 50%;
        height: 250rem;
      }

      .left {
        left: 0;
        transform: translate(-50%, -50%);
      }

      .right {
        right: 0;
        transform: translate(50%, -50%) rotateY(180deg);
      }

      h5 {
        font-size: 109rem;
        margin: 0 4rem;
        position: relative;
        z-index: 99;
      }

      small,
      small /deep/span {
        font-size: 75rem;
      }
    }

    .time {
      margin-top: 40rem;
      font-size: 42rem;
      line-height: 1;

      .division {
        display: block;
        line-height: 1;
        text-align: center;
      }
    }

    .momo-image {
      width: 198px;
      height: 135px;
      margin: 50rem auto 0 auto;
    }

    .rewards-container {
      margin-top: 60rem !important;
      padding: 50rem 50rem 50rem 0;

      .left-icon {
        width: 250rem;
      }

      .right-icon {
        width: 150rem;
        transform: translate(20rem, -52rem);
      }

      p {
        padding-left: 73rem;
        padding-right: 59rem;
        font-size: 34rem;
        line-height: 62rem;
      }

      .container {
        border-radius: 35rem;

        ul {
          padding: 30rem 60rem 30rem 30rem;

          li {
            width: 20rem;
            height: 20rem;
          }
        }

        p {
          padding: 0 52rem 41rem 52rem;
        }
      }
    }
  }
</style>
console.log('Debug: fix: resolve issue with player movement lag');
