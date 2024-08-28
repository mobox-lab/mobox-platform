<template>
  <div class="coinbase">
      <img src="@/assets/coinbase/head-logo.png" />
    </div>
//     <!-- 描述 -->
//     <Describe />
//     <!-- 活动 -->
//     <Activity />
//     <!-- 底部提示 -->
    <div class="footer-tip">
      <img src="../../assets/coinbase/tip.png" />
      <p>ESTA PROMOÇÃO NÃO É PATROCINADA OU<br />ADMINISTRADA POR COINBASE OU COINBASE WALLET</p>
    </div>
    <!-- 安装钱包提示 -->
    <Dialog v-model="isShowInstallTip">
      <DialogContainer @confirm="toInstallWallet" @close="toggleShowInstallTip">
        <div class="tip">
          <p>{{$t('CoinbaselootBrasil_38')}}</p>
        </div>
        <template slot="footer">{{$t('CoinbaselootBrasil_31')}}</template>
      </DialogContainer>
    </Dialog>
    <!-- 奖励领取结束 -->
    <Dialog v-model="isShowollectionEnded">
      <DialogContainer @confirm="toggleShowollectionEnded" @close="toggleShowollectionEnded">
        <div class="tip">
          <p>{{$t('CoinbaselootBrasil_43')}}</p>
        </div>
        <template slot="footer">Confirme</template>
      </DialogContainer>
    </Dialog>
  </div>
</template>

<script>
  import Describe from './describe.vue';
  import Activity from './activity.vue';
  import Dialog from './dialog.vue';
  import DialogContainer from './dialog-container.vue';
  import { getAvatarCount } from '@/utils/coinbase';

  export default {
    components: {
      Describe,
      Activity,
      Dialog,
      DialogContainer
    },
    data() {
      const provider = window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);

      return {
        isShowollectionEnded: false,
        isShowInstallTip: !provider,
      };
    },
    methods: {
      setSize() {
        const fontSize = document.documentElement.clientWidth / 1280;
        document.documentElement.style.fontSize = `${fontSize}px`;
      },
      toggleShowInstallTip() {
        this.isShowInstallTip = !this.isShowInstallTip;
      },
      toInstallWallet() {
        window.open('https://www.coinbase.com/wallet/downloads');
      },
      toggleShowollectionEnded() {
        this.isShowollectionEnded = !this.isShowollectionEnded;
      },
      async getAvatarCount() {
        try {
          const { data } = await getAvatarCount();

          if (!data.left) {
            this.toggleShowollectionEnded();
          }
        } catch(_) {}
      }
    },
    created() {
      window.addEventListener('resize', this.setSize);
      this.setSize();
      this.getAvatarCount();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setSize);
    },
  };
</script>

<style lang="less" scoped>
  .coinbase,
  /deep/ * {
    transition: none;
    font-family: none;
  }

  .coinbase {
    background: #266608;

    /deep/img {
      display: block;
      max-width: 100%;
    }

    /deep/ li {
      list-style: none;
    }
  }

  .title,
  .footer-tip {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    top: 0;
    background: #266608;
  }

  .footer-tip {
    bottom: 0;
    background: #F8CC0D;

    p {
      font-family: none;
      font-weight: 400;
      color: #266608;
    }
  }

  .tip {
    p {
      text-align: center;
      font-weight: bold;
      color: #94DB73;
    }
  }

  @media(min-width: 1024px) {
    .coinbase {
      width: 100vw;
      height: 100vh;
      display: flex;
      overflow: hidden;

      /deep/ .view-container {
        width: 50%;
        box-sizing: border-box;
        height: 100%;
      }
    }

    .title,
    .footer-tip {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    .title {
      width: 368rem;
      height: 49rem;
      border-radius: 0px 0px 40rem 40rem;

      img {
        height: 24rem;
      }
    }

    .footer-tip {
      width: 368rem;
      height: 42rem;
      border-radius: 0 40rem 0 0;

      img {
        width: 16rem;
        margin-right: 9rem;
      }

      p {
        font-size: 10rem;
        line-height: 13rem;
      }
    }

    .tip {
      padding: 30rem;

      p {
        font-size: 14rem;
      }
    }
  }

  @media(max-width: 1024px) {
    .title {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      width: 900rem;
      height: 130rem;
      padding-bottom: 10rem;
      border-radius: 0px 0px 90rem 90rem;

      img {
        height: 60rem;
      }
    }

    .footer-tip {
      width: 1050rem;
      box-sizing: border-box;
      margin: 200rem auto 0 auto;
      border-radius: 40rem 40rem 0 0;
      padding: 20rem 50rem;

      img {
        width: 60rem;
        margin-right: 25rem;
      }

      p {
        font-size: 40rem;
        line-height: 1.4;
        text-align: left;
      }
    }

    .tip {
      padding: 80rem 60rem;

      p {
        font-size: 40rem;
      }
    }
  }
</style>
