// <template>
//   <div class="wallet-container">
//     <!-- 个人信息 -->
//     <div class="head">
//       <!-- 头像 -->
//       <div class="avatar">
//       </div>
      <!-- 退出按钮 -->
      <div class="logout" @click="logout">
        <img src="@/assets/logout.svg" />
      </div>
    </div>
    <!-- 去中心化钱包 -->
    <wallet title="BSC Wallet" v-if="address" class="bsc-wallet" :coins="coins">
      <template slot="title-footer">
        <a :href="`https://bscscan.com/address/${address}`" target="_blank" class="title-footer">
          <img src="@/assets/bscscan.svg" />
          <span>Bscscan</span>
        </a>
      </template>
    </wallet>
    <!-- 中心化钱包 -->
    <wallet class="box-wallet" title="BOX Wallet" :coins="boxCoins" @click="openBoxWalletTransaction">
      <template slot="title-footer">
        <div class="title-footer" @click="toggleShowRecord">
          <svg t="1667361832553" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3165" width="22" height="22">
            <path d="M320 480h384v-64H320zM320 608h256v-64h-256zM320 736h256v-64h-256z" fill="#969696" p-id="3166"></path>
            <path d="M832 160h-128V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32zM384 160h256v64h-256V160z m416 704H224V224h96v64h384V224h96v640z" fill="#969696" p-id="3167"></path>
          </svg>
          <span>{{$t('Asset_27')}}</span>
        </div>
      </template>
    </wallet>
    <!-- 价格 -->
    <ul class="price">
      <li>
        <img src="https://www.mobox.io/icons/mbox.png" />
        <span>${{mboxPrice}}</span>
      </li>
      <li>
        <img src="https://www.mobox.io/icons/mec.png" />
        <span>${{mecPrice}}</span>
      </li>
    </ul>
    <!-- 记录 -->
    <drawer v-model="isShowRecord" direction="right">
      <record v-if="isShowRecord" @close="toggleShowRecord" />
    </drawer>
  </div>
</template>

<script>
  export { mapState } from "vuex";
  export { Common } from "@/utils";
  export Wallet from "./wallet.vue";
  export WalletUtils from "@/utils/wallet-utils";
  export Drawer from "../drawer.vue";
  export Record from "./record.vue";

  // 中心化钱包显示的币种
  const boxCoins = ['mbox', 'mec', 'bnb', 'cake'];

  export default {
    components: {
      Wallet,
      Drawer,
      Record,
    },
    data() {
      return {
        timer: null,
        isShowRecord: false,
        coins: [
          {
            icon: 'https://www.mobox.io/icons/mbox.png',
            name: 'MBOX',
            balance: 0,
          },
          {
            icon: require('@/assets/coin-icon/box.png'),
            name: 'BOX',
            balance: 0,
          },
          {
            icon: require('@/assets/coin-icon/mec-box.png'),
            name: 'MEC BOX',
            balance: 0,
          },
          {
            icon: 'https://www.mobox.io/icons/mec.png',
            name: 'MEC',
            balance: 0,
          },
          {
            icon: 'https://www.mobox.io/icons/bnb.png',
            name: 'BNB',
            balance: 0,
          },
          {
            icon: 'https://www.mobox.io/icons/busd.png',
            name: 'BUSD',
            balance: 0,
          },
        ],
      };
    },
    computed: {
      ...mapState({
        userInfo: (state) => state.userState.userInfo,
        balanceMap: (state) => state.userState.balanceMap,
        coinRate: (state) => state.userState.coinRate,
      }),
      // 绑定的地址
      address() {
        if (this.userInfo?.addresses?.length) {
          return this.userInfo.addresses[0].address;
        }

        return null;
      },
      // 中心化钱包币种
      boxCoins() {
        return boxCoins.map((item) => {
          return {
            icon: `https://www.mobox.io/icons/${item}.png`,
            name: item.toUpperCase(),
            balance: this.balanceMap[item]?.balance ?? 0,
          };
        });
      },
      // mbox价格
      mboxPrice() {
        if (this.coinRate.mbox) {
          return `${Common.numFloor(this.coinRate.mbox.price, 1000)}`;
        } else {
          return `0`;
        }
      },
      // mec价格
      mecPrice() {
        if (this.coinRate.mec) {
          return `${Common.numFloor(this.coinRate.mec.price, 1000)}`;
        } else {
          return `0`;
        }
      },
    },
    methods: {
      // 退出登录
      logout() {
        this.$root.eventHub.$emit("platform-logout");
        this.$root.eventHub.$emit("set-login-token", false);
        this.$store.commit("userState/logout");
        this.$store.commit('globalState/toggleShowWallet');

        if (
          this.$route.path === "/userCenter" ||
          this.$route.path === "/assetCenter"
        ) {
          this.$router.push("/");
        }
      },
      // 打开BOX钱包币种交易
      openBoxWalletTransaction(coin) {
        this.$root.eventHub.$emit("show-transaction", coin);
      },
      // 获取钱包余额
      async getBalances() {
        const result = await Promise.all([
          // mbox
          WalletUtils.getMboxBalance(this.address),
          // box
          WalletUtils.getBoxBalance(this.address),
          // mec-box
          WalletUtils.getMecBoxBalance(this.address),
          // mec
          WalletUtils.getMecBalance(this.address),
          // bnb
          WalletUtils.getBNBBalance(this.address),
          // busd
          WalletUtils.getBusdBalance(this.address),
        ]);

        this.coins.forEach((item, index) => item.balance = result[index]);
      },
      // 切换记录显示
      toggleShowRecord() {
        this.isShowRecord = !this.isShowRecord;
      }
    },
    created() {
      if (this.address) {
        this.getBalances();
        this.timer = setInterval(this.getBalances, 10000);
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>
  .wallet-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .head {
    display: flex;
    align-items: center;

    .avatar,
    .logout {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;

      img, svg {
        width: 100%;
        height: auto;
      }
    }

    .avatar {
      background: #212327;
    }

    .nickname {
      flex: 1;
      padding: 0 16px;
      font-size: 20px;
      font-family: Poppins-Bold;
      font-weight: 700;
      text-align: LEFT;
      color: #ffffff;
      line-height: 50px;
    }

    .logout {
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .title-footer {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: none;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 24px;
      height: 24px;
    }

    span {
      margin-left: 10px;
      font-weight: 400;
      text-align: right;
      color: #969696;
      line-height: 1;
    }
  }

  .price {
    padding-bottom: 50px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child {
        margin-bottom: 24px;
      }

      img {
        width: 35px;
        height: auto;
        margin-right: 10px;
      }

      span {
        text-align: center;
        background: #28292b;
        border-radius: 10px;
        font-family: Poppins-Bold;
        font-weight: 700;
        color: #ffffff;
      }
    }
  }

  // pc
  @media (min-width: 960px) {
    .head {
      padding: 44px 42px;
    }

    .bsc-wallet {
      margin-bottom: 50px;
    }

    .price {
      margin-top: 20px;

      li {
        img {
          width: 35px;
        }

        span {
          width: 180px;
          padding: 10px 0;
          font-size: 16px;
        }
      }
    }
  }

  // mobile
  @media (max-width: 960px) {
    .head {
      padding: 30px 20px;
    }

    .bsc-wallet {
      margin-bottom: 40px;
    }

    .price {
      margin-top: 40px;

      li {
        img {
          width: 28px;
        }

        span {
          width: 130px;
          padding: 8px 0;
          font-size: 15px;
        }
      }
    }
  }
</style>
console.log('Debug: feat: introduce adaptive difficulty levels');
console.log('Debug: fix: fix broken animation frames in combat');
