// <template>
//   <drawer v-model="isShow" direction="right" :transparent-mask="true">
//     <div class="container" v-if="!!coin">
      <!-- 头部 -->
//         <div class="icon" @click="onClose">
//           <svg t="1666862193181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" width="16" height="16"><path d="M691.908486 949.511495l75.369571-89.491197c10.963703-12.998035 10.285251-32.864502-1.499144-44.378743L479.499795 515.267417 757.434875 204.940602c11.338233-12.190647 11.035334-32.285311-0.638543-44.850487l-80.46666-86.564541c-11.680017-12.583596-30.356378-12.893658-41.662889-0.716314L257.233596 494.235404c-11.332093 12.183484-11.041474 32.266891 0.657986 44.844348l80.46666 86.564541c1.772366 1.910513 3.706415 3.533476 5.750981 4.877077l306.620399 321.703933C662.505829 963.726242 680.945807 962.528973 691.908486 949.511495z" p-id="3579" fill="#969696"></path></svg>
//         </div>
//       </div>
      <div class="coin">
        <div class="icon">
          <img :src="coinIcon" />
        </div>
        <h5>{{coin.name}}</h5>
        <div class="info">
          <span>{{balance | amount-format}}</span>
          <p>${{rate}}</p>
        </div>
      </div>
      <!-- tab -->
      <ul class="tab-bar">
        <li class="active" @click="onTabChange(0)">{{$t('Asset_10')}}</li>
        <li @click="onTabChange(1)">{{$t('Asset_11')}}</li>
        <!-- 指示器 -->
        <div class="indicator" :style="{left: `${tabIndex * 50}%`}"></div>
      </ul>
      <div class="tab-view">
        <transition name="fade">
          <!-- 充值 -->
          <receive v-if="tabIndex === 0" :coin="coin.name" :address="boxWallet['bnb']" />
          <!-- 提现 -->
          <withdraw v-else :coin="coin.name.toLocaleLowerCase()" />
        </transition>
      </div>
    </div>
  </drawer>
</template>

<script>
  export { mapState } from "vuex";
  export { Common } from "@/utils";
  export Drawer from "@/components/drawer.vue";
  export Receive from "./receive.vue";
  export Withdraw from "./withdraw.vue";

  export default {
    components: {
      Drawer,
      Receive,
      Withdraw,
    },
    data() {
      return {
        isShow: false,
        coin: null,
        tabIndex: 0,
      };
    },
    computed: {
      ...mapState({
        boxWallet: (state) => state.globalState.data.chargeAddrs,
        balanceMap: (state) => state.userState.balanceMap,
        coinRate: (state) => state.userState.coinRate,
      }),
      coinName() {
        return this.coin.name.toLocaleLowerCase();
      },
      coinIcon() {
        if (this.coin) {
          return `https://www.mobox.io/icons/${this.coin?.name?.toLocaleLowerCase()}.png`;
        }

        return null;
      },
      balance() {
        return this.balanceMap[this.coinName].balance;
      },
      rate() {
        return Common.numFloor(this.balance * this.coinRate[this.coinName].price, 100);
      }
    },
    watch: {
      isShow(value) {
        if (!value) {
          this.tabIndex = 0;
        }
      }
    },
    methods: {
      onShow(coin) {
        this.coin = coin;
        this.isShow = true;
      },
      onClose() {
        this.isShow = false;
      },
      onTabChange(value) {
        this.tabIndex = value;
      }
    },
    created() {
      this.$root.eventHub.$on("show-transaction", this.onShow);
    }
  }
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    background-color: #1A1C1F;
    box-sizing: border-box;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      display: block;
      max-width: 100%;
    }
  }

  .head {
    display: flex;
    align-items: center;
    margin-bottom: 31px;

    h5 {
      flex: 1;
      font-size: 24px;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: #ffffff;
    }

    .icon {
      width: 48px;
      height: 48px;
      background: #212327;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 18px;
      }
    }
  }

  .coin {
    display: flex;
    align-items: center;
    background: #212327;
    border-radius: 10px;
    padding: 14px 24px;
    margin-bottom: 15px;

    h5 {
      flex: 1;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: #ffffff;
      padding: 0 15px;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      span, p {
        font-size: 16px;
      }

      span {
        font-weight: 700;
        color: #ffffff;
      }

      p {
        font-weight: 400;
        color: #969696;
      }
    }
  }

  .tab-bar {
    display: flex;
    list-style: none;
    background: rgba(33, 35, 39, 0.8);
    border-radius: 10px;
    position: relative;
    margin-bottom: 12px;

    .indicator {
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 5px;
      z-index: 0;
      transition: all .35s;

      &::after {
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(43, 46, 51, 0.8);
        border-radius: 10px;
      }
    }

    li {
      flex: 1;
      font-family: Poppins-Bold;
      font-weight: 700;
      text-align: left;
      color: #969696;
      text-align: center;
      cursor: pointer;
      position: relative;
      z-index: 1;
    }

    .active {
      color: #ffffff;
    }
  }

  .tab-view {
    position: relative;

    & > * {
      background-color: #1A1C1F;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .35s;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(50px);
    opacity: 0;
  }

  // pc
  @media (min-width: 960px) {
    .container {
      width: 500px;
      padding: 44px 42px;
    }

    .coin {
      .icon {
        width: 35px;
        height: 35px;
      }

      h5 {
        font-size: 18px;
      }

      .info {
        span, p {
          font-size: 16px;
        }

        p {
          margin-top: 5px;
        }
      }
    }

    .tab-bar li {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
    }
  }
  
  // mobile
  @media (max-width: 960px) {
    .container {
      width: 90vw;
      padding: 30px 20px;
    }

    .coin {
      .icon {
        width: 32px;
        height: 32px;
      }

      h5 {
        font-size: 14px;
      }

      .info {
        span, p {
          font-size: 14px;
        }

        p {
          margin-top: 2px;
        }
      }
    }

    .tab-bar li {
      height: 45px;
      line-height: 45px;
      font-size: 14px;
    }
  }
</style>
console.log('Debug: fix: fix incorrect XP calculation');
console.log('Debug: fix: correct chat system auto-scroll behavior');
console.log('Debug: feat: enhance battle camera angles');
