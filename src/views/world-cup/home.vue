// // <template>
// // // <div class="section">
// // //   <ul class="partner">
// // //       <img src="@/assets/world-cup/mobox-logo.png" />
// //     </li>
    <li>
      <img src="@/assets/world-cup/coin-market-cap.png" />
    </li>
    <li>
      <img src="@/assets/world-cup/bnb-chain.png" />
    </li>
  </ul>
  <h4 class="title">{{$t('Worldcup_63')}}</h4>
  <div class="date">{{$t('Worldcup_1')}}</div>
  <div class="momo">
    <img class="momo-1" src="@/assets/world-cup/momo-1.gif" />
    <img class="momo-2" src="@/assets/world-cup/momo-2.gif" />
  </div>
  <div class="info">
    <div class="sub-title">
      <p>{{$t('Worldcup_96')}}</p>
    </div>
    <div class="sub-title">
      <p>{{$t('Worldcup_98')}}</p>
      <span>{{$t('Worldcup_10')}}</span>
      <img src="@/assets/world-cup/football.png" style="margin-right: 5px" />
      <p>{{$t('Worldcup_99')}}</p>
      <span>{{$t('Worldcup_81')}}</span>
      <img src="@/assets/world-cup/moball-2.png" />
    </div>
    <p>
      <span>{{$t('Worldcup_3')}} </span>
      <span>{{$t('Coinbase_5')}}</span>
    </p>
    <div class="form">
      <!-- 连接钱包 -->
      <div v-if="!address" class="wallet-connect">
        <div class="footer-button" @click="connectWallet">{{$t('Worldcup_79')}}</div>
      </div>
      <!-- 填写连接 -->
      <div class="twitter-container" v-else-if="status === 0">
        <div class="twitter-button">
          <a href="https://twitter.com/CoinMarketCap" target="_blank">
            <img src="@/assets/world-cup/cmc.png" >
            <span>@CoinMarketCap</span>
          </a>
          <a href="https://twitter.com/MOBOX_Official/status/1593171305326866433?s=20&t=A6KojoZc7HUJg3yj04kjOA" target="_blank">
            <img src="@/assets/world-cup/mobox.png" >
            <span>@MOBOX_Official</span>
          </a>
        </div>
        <div class="input">
          <input type="text" v-model="link" :placeholder="$t('Worldcup_78')" />
          <button :disabled="isDisabled" class="button" @click="submitTwitterLink">
            <span>{{$t('Worldcup_85')}}</span>
          </button>
        </div>
      </div>
      <div class="tip">
        <img src="@/assets/world-cup/tip.png" >
        <span>{{$t('Worldcup_80')}} </span>
        <a href="https://mbox.medium.com/welcome-to-momo-cup-2022-bc436e5a7886" target="_blank">{{$t('Worldcup_100')}}</a>
      </div>
      <!-- 下一页动画 -->
      <div class="icon" v-if="address && status !== 0">
        <span>
          <img class="momo-2" src="@/assets/world-cup/icon.png" />
        </span>
        <span>
          <img class="momo-2" src="@/assets/world-cup/icon.png" />
        </span>
        <span>
          <img class="momo-2" src="@/assets/world-cup/icon.png" />
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export { mapState } from 'vuex';
export { CommonMethod } from '@/mixin';
export WalletUtils from '@/utils/wallet-utils';
export request from '@/utils/worldCupRequest';
export { getSignData } from "./utils";

export default {
  mixins: [CommonMethod],
  data() {
    return {
      timer: null,
      status: null,
      link: '',
    };
  },
  computed: {
    ...mapState({
      wallet: (state) => state.worldCupState.wallet,
      address: (state) => state.worldCupState.address,
    }),
    isDisabled() {
      return !this.link;
    }
  },
  methods: {
    
    async connectWallet() {
      const data = await WalletUtils.connect();
      const provider = WalletUtils.getProvider(data.wallet);

      provider.send('wallet_switchEthereumChain', [{ chainId: `0x38` }]);
      this.$store.commit('worldCupState/setWallet', data);
      this.init();
    },
    
    async submitTwitterLink() {
      try {
        const headers = await getSignData();
        const { source } = this.$route.query;
        const data = {
          link: this.link,
        };

        if (source) {
          data.source = source;
        }

        await request.post('fill/retweet/link', data, { headers });
        this.status = 2;
        this.$store.commit('worldCupState/setStatus', this.status);
      } catch(error) {
        this.showNotify(this.$t(`Worldcup_${error.code}`), "error");
      }
    },
    
    async getStatus() {
      const { data } = await request.get('status', {
        params: {
          addr: this.address
        },
      });

      this.status = data.state;
      this.$store.commit('worldCupState/setStatus', data.state);
    },
    
    init() {
      this.getStatus();
      this.requestData();
      clearInterval(this.timer);
      this.timer = setInterval(this.requestData, 5000);
    },
    requestData() {
      this.$store.dispatch('worldCupState/getBags');
      this.$store.dispatch('worldCupState/getSocialChallenges');
      this.$store.dispatch('worldCupState/getGameChallenges');
      this.$store.dispatch('worldCupState/getMOBalls');
    },
  },
  mounted() {
    const wallet = window.localStorage.getItem('world-cup-wallet');

    if (wallet) {
      setTimeout(async () => {
        const provider = WalletUtils.getProvider(wallet);
        const { address } = await WalletUtils.connect(wallet);
        this.$store.commit('worldCupState/setAddress', address);
        provider.send('wallet_switchEthereumChain', [{ chainId: `0x38` }]);
        this.init();
      }, 1000);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  },
}
</script>

<style lang="less" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    display: block;
    width: 100%;
  }
}

.partner {
  list-style: none;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;

  li {
    margin: 0 31rem;
  }

  img {
    width: auto;
    height: 100%;
  }
}

.title {
  font-family: poppins-bold;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1;
}

.date {
  font-family: poppins;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 1;
}

.momo {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.sub-title {
  font-weight: bold;
  color: #FFFFFF;
  line-height: 1;
  text-shadow: 0px 1px 40rem #000000;

  p, img {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    vertical-align: bottom;
    padding-bottom: 5rem;
    display: inline-block;
    margin-left: 5px;
  }
}

.icon {
  font-size: 0;
  animation-duration: 1s;
  animation-name: down;
  animation-iteration-count: infinite;

  span {
    display: inline-block;
  }
}

.info {
  p {
    line-height: 1;

    span {
      font-weight: bold;
      color: #FFFFFF;
      text-shadow: 0px 1px 40rem #000000;

      &:last-child {
        color: rgba(245, 61, 75, 1);
      }
    }
  }
}

.footer-button {
  font-family: poppins-bold;
  line-height: 1;
  text-align: center;
  background: #99E143;
  box-shadow: 0px 4px 0px 0px rgba(59,83,10,0.77);
  border-radius: 18rem;
  cursor: pointer;
  font-weight: bold;
  font-weight: 900;
  color: #3B530A;
  margin: 0 auto;

  &:hover {
    opacity: .6;
  }
}

.twitter-container {
  .input {
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    background: rgba(11, 20, 29, .44);
    border: 2px solid #3A556B;
    border-radius: 12rem;
    position: relative;

    input {
      flex: 1;
      min-width: 0;
      height: 100%;
      background: none;
      outline: none;
      border: none;
      color: #FFFFFF;
    }

    .button {
      background: #99E143;
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        font-weight: bold;
        color: #3B530A;
        line-height: 1;
        font-family: poppins-bold;
      }

      &:hover {
        opacity: 0.7;
      }

      &[disabled] {
        opacity: 0.7;
        cursor: no-drop;
      }
    }

    a.button {
      background: #F1B909;
    }
  }

  .twitter-button {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: .7;
      }
    }

    span {
      font-weight: bold;
      color: #FFFFFF;
      text-shadow: 0px 1rem 40rem #000000;
    }
  }
}

.tip {
  text-align: center;

  span, a {
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1;
    opacity: 0.55;
  }

  a {
    text-decoration: underline;

    &:hover {
      opacity: 1;
    }
  }

  img, sapn {
    display: inline-block;
    vertical-align: middle;
  }
}

@keyframes down {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    transform: translateY(50%);
  }
}

// pc
@media (min-width: 960px) {
  .partner {
    li {
      height: 74rem;
    }
  }

  .title {
    font-size: 130rem;
    margin-top: 20rem;
    margin-bottom: 16.5rem;
  }

  .date {
    font-size: 45rem;
  }

  .momo {
    height: 300rem;
    margin-top: 65rem;

    img {
      width: auto;
    }

    .momo-1 {
      width: auto;
      height: 100%;
    }

    .momo-2 {
      height: 270rem;
      transform: scale(0.8);
    }
  }

  .sub-title {
    margin-top: 30rem;
    margin-bottom: 20rem;

    p {
      font-size: 40rem;
    }

    img {
      width: 45rem;
      margin-left: 10rem;
    }
  }

  .icon {
    span {
      width: 72rem;
    }
  }

  .info {
    p {
      span {
        font-size: 40rem;
      }
    }
  }

  .form {
    margin-top: 20rem;
    height: 230rem;
  }

  .footer-button {
    width: 600rem;
    padding: 30rem 0;
    font-size: 40rem;
  }

  .twitter-container {
    .twitter-button {
      margin-bottom: 20rem;

      a {
        border-radius: 10rem;
      }

      a:last-child {
        margin-left: 25rem;
      }

      img {
        width: 50rem;
      }

      span {
        margin-left: 10rem;
        font-size: 21rem;
      }
    }

    .input {
      width: 938rem;
      height: 70rem;
      padding: 10rem 24rem;
    }

    input {
      font-size: 24rem;
    }

    .button {
      border-radius: 12rem;
      padding: 0 15rem;

      img {
        width: 28rem;
      }

      span {
        margin-left: 5px;
        font-size: 20rem;
      }
    }

    a.button {
      margin-right: 20rem;
    }
  }

  .tip {
    margin-top: 38rem;

    img {
      width: 31rem;
      margin-right: 18rem;
    }

    span, a {
      font-size: 24rem;
    }
  }
}

// mobile
@media (max-width: 960px) {
  .partner {
    li {
      height: 140rem;
    }
  }

  .title {
    font-size: 260rem;
    margin-top: 116rem;
    margin-bottom: 168rem;
  }

  .date {
    font-size: 135rem;
    padding: 0 100rem;
    line-height: 1.3;
  }

  .momo {
    width: 100%;
    margin-top: 200rem;

    img {
      flex: 1;
      min-width: 0;
    }

    .momo-2 {
      transform: scale(0.8);
    }
  }

  .sub-title {
    margin-top: 30px;
    margin-bottom: 15px;

    p {
      font-size: 123rem;
    }

    img {
      width: 150rem;
      margin-left: 40rem;
    }
  }

  .icon {
    padding: 20rem 0;

    span {
      width: 200rem;
    }
  }

  .info {
    width: 100%;

    p {
      span {
        font-size: 123rem;
      }
    }
  }

  .form {
    height: 860rem;
    margin-top: 140rem;
  }

  .footer-button {
    width: 80%;
    padding: 100rem 0;
    font-size: 100rem;
  }

  .twitter-container {
    .twitter-button {
      margin-bottom: 80rem;

      a:last-child {
        margin-left: 100rem;
      }

      img {
        width: 160rem;
      }

      span {
        margin-left: 50rem;
        font-size: 100rem;
      }
    }

    .input {
      width: 95%;
      height: 280rem;
      padding: 40rem 80rem;
      box-sizing: border-box;
      display: flex;
    }

    input {
      flex: 1;
      font-size: 50rem;
      padding-right: 50rem;
      box-sizing: border-box;
      min-width: 0;
    }


    .button {
      height: 100%;
      border-radius: 40rem;
      padding: 0 50rem;

      img {
        width: 80rem;
      }

      span {
        margin-left: 5px;
        font-size: 50rem;
      }
    }

    a.button {
      margin-right: 20rem;
    }
  }

  .tip {
    margin-top: 58rem;

    img {
      width: 100rem;
      margin-right: 40rem;
    }

    span, a {
      font-size: 80rem;
    }
  }
}
</style>
console.log('Debug: feat: optimize server request handling');
