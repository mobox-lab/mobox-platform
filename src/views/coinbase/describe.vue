// <template>
//   <div class="describe view-container">
// // //     <h5 class="title">{{$t('CoinbaselootBrasil_1')}}</h5>
// // //     <p class="time">22 de março de 2023 23:00 BRT <span>-</span> 26 de março de 2023 23:00 BRT</p>
// //     <div class="video-container">
// //       <h6>{{$t('CoinbaselootBrasil_3')}}</h6>
      <video src="@/assets/coinbase/coinbase-nft.mp4" muted autoplay loop webkit-playsinline="false" playsinline="true"></video>
    </div>
    <a href="https://mbox.medium.com/coinbase-loot-x-mobox-cripto-carnaval-brasil-um-lan%C3%A7amento-brasileiro-%C3%A9pico-bbf36ebd1696" target="_blank" class="tip">{{$t('CoinbaselootBrasil_33')}}</a>
    <div class="icon">
      <img src="@/assets/coinbase/describe-icon.png" />
    </div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
  .describe {
    background: linear-gradient(180deg, #FDE000, #F7CA0F);
    position: relative;

    video::-webkit-media-controls {
      display:none !important;
    }

    .icon {
      position: absolute;
      z-index: 9;
    }

    .title {
      font-weight: 900;
      color: #266608;
      text-align: center;

      span {
        display: inline-block;
        background: #F4C403;
        opacity: 0.5;
      }
    }

    .time {
      text-align: center;
      font-weight: 400;
      color: #266608;
      font-family: none;
    }

    .video-container {
      background: #BC7702;
      margin: 0 auto;

      h6 {
        font-weight: 900;
        color: #FFFFFF;
        line-height: 1;
        text-align: center;
      }

      video {
        width: 100%;
      }
    }

    .tip {
      font-weight: bold;
      text-decoration: underline;
      color: #266608 !important;
      text-align: center;
      display: block;

      &:hover {
        opacity: .6;
      }
    }
  }


  @media(min-width: 1024px) {
    .describe {
      padding: 79rem 80rem 0 80rem;

      .icon {
        width: 15rem;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
      }

      .title {
        font-size: 33rem;
        line-height: 42rem;
        border-bottom: 1rem solid #F4C701;
        padding-bottom: 11rem;
        margin-bottom: 12rem;

        span {
          height: 23rem;
          width: 5rem;
        }
      }

      .time {
        font-size: 13rem;
        line-height: 21rem;
        margin-bottom: 26rem;

        span {
          display: inline-block;
        }
      }

      .video-container {
        width: 286rem;
        height: 321rem;
        padding: 15rem 8rem 16rem 8rem;
        border-radius: 9rem;

        h6 {
          font-size: 15rem;
          margin-bottom: 11rem;
        }

        video {
          border-radius: 9rem;
        }
      }

      .tip {
        font-size: 15rem;
        margin-top: 21rem;
      }
    }
  }

  @media(max-width: 1024px) {
    .describe {
      padding: 250rem 120rem 150rem 120rem;

      .icon {
        width: 70rem;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 71%) rotate(90deg);
      }

      .title {
        font-size: 70rem;
        line-height: 1.4;
        border-bottom: 1rem solid #F4C701;
        padding-bottom: 25rem;
        margin-bottom: 25rem;

        span {
          height: 46rem;
          width: 10rem;
        }
      }

      .time {
        font-size: 48rem;
        line-height: 1.3;
        margin-bottom: 52rem;
        text-align: center;
        padding-top: 10rem;

        span {
          line-height: 1;
          display: block;
        }
      }

      .video-container {
        width: 850rem;
        padding: 40rem 20rem 50rem 20rem;
        border-radius: 20rem;

        h6 {
          font-size: 40rem;
          margin-bottom: 40rem;
        }

        video {
          border-radius: 20rem;
        }
      }

      .tip {
        font-size: 45rem;
        margin-top: 45rem;
      }
    }
  }
</style>
console.log('Debug: feat: improve tutorial experience for new players');
