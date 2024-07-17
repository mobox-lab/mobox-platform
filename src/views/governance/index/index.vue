  <div class="page">
//     <div class="governance">
//       <div class="header">
//         <div class="info">
//           <h4>{{$t('Governance_4')}}</h4>
        </div>
        <!-- 按钮 -->
        <div class="button" @click="openConnectWallet">
          {{ address ? addressString : $t('Home_9') }}
        </div>
      </div>
      <!-- 数据 -->
      <div class="data">
        <div class="data-item">
          <ul>
            <li>
              <div class="layout">
                <h4>{{mboxFormat}}({{circulatingRatio}}%)</h4>
                <p>{{$t('Home_89')}}(% in circulation)</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="layout">
                <h4>{{ vembox }}</h4>
                <p>{{$t('Home_90')}}</p>
              </div>
            </li>
            <li>
              <div class="layout">
                <h4>{{avglockdays}}</h4>
                <p>{{$t('Home_91')}}</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- veMBOX -->
        <div class="vembox">
          <div class="info">
            <h4>-</h4>
            <p>{{$t('Governance_6')}}</p>
            <p>{{$t('Governance_7')}}</p>
          </div>
          <!-- vembox logo -->
          <div class="logo">
            <img src="@/assets/governance/vemobox.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
    <!-- 连接钱包 -->
    <Dialog v-model="isShowConnectWallet">
      <div class="connect-wallet wallet-dialog">
        <h4 class="title">{{$t('Home_9')}}</h4>
        <ul>
          <li
            v-for="item in wallets"
            :key="item.type"
            @click="connectWallet(item.type)"
          >
            <h5>{{ item.name }}</h5>
            <div class="icon">
              <img :src="item.icon" />
            </div>
          </li>
        </ul>
        <!-- 关闭按钮 -->
        <div class="close" @click="closeConnectWallet">
          <i class="iconfont">&#xe615;</i>
        </div>
      </div>
    </Dialog>
    <!-- 退出钱包 -->
    <Dialog v-model="isShowDisconnect">
      <div class="disconnect-wallet wallet-dialog">
        <h4 class="title">断开连接</h4>
        <!-- 关闭按钮 -->
        <div class="close" @click="closeDisconnect">
          <i class="iconfont">&#xe615;</i>
        </div>
        <div class="address">{{ address }}</div>
        <div class="button" @click="onDisconnect">断开</div>
      </div>
    </Dialog>
  </div>
</template>

<script>
export axios from "axios";
export Dialog from "@/components/Dialog";
export { Common } from "@/utils/index";

export default {
  data() {
    return {
      // 钱包列表
      wallets: [
        {
          name: "MOBOX Wallet (recommended)",
          icon: require("@/assets/wallet-icon/mobox.png"),
          type: "mobox",
        },
        {
          name: "Binance Chain Wallet",
          icon: require("@/assets/wallet-icon/binance.svg"),
          type: "binance",
        },
        {
          name: "Metamask",
          icon: require("@/assets/wallet-icon/metamask.svg"),
          type: "metamask",
        },
      ],
      // 当前钱包类型
      wallet: "",
      // 当前钱包地址
      address: "",
      // 连接钱包弹窗显示状态
      isShowConnectWallet: false,
      // 取消连接
      isShowDisconnect: false,
      // 平台总vembox
      vembox: 0,
      // 总冻结mbox
      mbox: 0,
      // 平均时间
      avglockdays: 0,
      // 流通量
      circulating: 0,
    };
  },
  components: {
    Dialog,
  },
  methods: {
    // 获取平台总veMBOX
    async getVembox() {
      const res = await axios.get(
        "https://nftapi.mobox.io/vemobox/avglockdays"
      );

      this.vembox = Common.formatMoney(res.data.totalVemobox);
      this.mbox = res.data.totalMobox;
      this.avglockdays = parseInt(res.data.avglockdays);
    },
    // 获取流通量
    async getCirculation() {
      const res = await axios.get('https://nftapi.mobox.io/buybackpool/amount');
      this.circulating = Number(res.data.circulating) / 1e18;
    },
    // 初始化钱包
    initWallet() {
      const wallet = window.localStorage.getItem("wallet");

      if (wallet) {
        this.connectWallet(wallet);
      }
    },
    // 关闭连接钱包弹窗
    closeConnectWallet() {
      this.isShowConnectWallet = false;
    },
    // 打开连接钱包弹窗
    openConnectWallet() {
      if (this.address) {
        this.isShowDisconnect = true;
      } else {
        this.isShowConnectWallet = true;
      }
    },
    // 关闭断开连接弹窗
    closeDisconnect() {
      this.isShowDisconnect = false;
    },
    // 断开连接
    onDisconnect() {
      window.localStorage.removeItem("wallet");
      this.address = '';
      this.closeDisconnect();
    },
    // 连接钱包
    async connectWallet(type) {
      this.wallet = type;

      switch (type) {
        case "mobox":
          await this.connectMobox();
          break;
        case "binance":
          await this.connectBinance();
          break;
        case "metamask":
          await this.connectMetamask();
          break;
      }

      this.closeConnectWallet();
    },
    // 连接mobox
    async connectMobox() {
      if (window.mbox) {
        const wallets = await window.mbox?.BinanceChain.enable();
        this.address = wallets[0];
      }
    },
    // 连接metamask
    async connectMetamask() {
      if (typeof window.ethereum !== "undefined" && window.ethereum.request) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          this.address = accounts[0];
        } catch (error) {
          console.log(error);
        }
      }
    },
    // 连接币安钱包
    async connectBinance() {
      if (typeof window.BinanceChain !== "undefined") {
        try {
          const accounts = await window.BinanceChain.request({
            method: "eth_requestAccounts",
          });
          this.address = accounts[0];
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  computed: {
    // 格式化的mbox
    mboxFormat() {
      return Common.formatMoney(this.mbox);
    },
    // 流通量占比
    circulatingRatio() {
      if (this.mbox && this.circulating) {
        return ((this.mbox / this.circulating) * 100).toFixed(2);
      }

      return 0;
    },
    // 地址
    addressString() {
      return `${this.address.substring(0, 6)}....${this.address.substring(
        this.address.length - 4,
        this.address.length
      )}`;
    },
  },
  watch: {
    wallet(value) {
      window.localStorage.setItem("wallet", value);
    },
  },
  mounted() {
    this.getVembox();
    this.getCirculation();
    this.initWallet();
  },
};
</script>

<style lang="less" scoped>
@export "@/assets/less/var.less";
@export "./mobile.less";
@export "./pc.less";

.page {
  min-height: 100vh;
  color: #ffffff;
  background-color: #070d14;
  background-image: url(../../../assets/governance/governance-bg-1.svg), url(../../../assets/governance/governance-bg-2.svg);
  background-repeat: no-repeat, no-repeat;
  background-size: 50% auto, 50% auto;
  background-position: top right, top left;

  img {
    display: block;
    max-width: 100%;
  }

  * {
    transition: none;
  }

  // 按钮通用
  .button {
    padding: 8px 20px;
    background: linear-gradient(74deg, #12dae7 0%, #1b4ef5 100%);
    border-radius: 11px;
    cursor: pointer;
  }

  // 钱包弹窗样式
  .wallet-dialog {
    width: 400px;
    border-radius: 10px;
    background: #13181f;
    border: 1px solid #36383a;
    padding: 0 20px;
    position: relative;

    // 关闭按钮
    .close {
      @size: 32px;
      width: @size;
      height: @size;
      margin-right: -(@size / 2);
      margin-top: -(@size / 2);
      background: #0d121a;
      border-radius: 100%;
      text-align: center;
      line-height: 32px;
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid #36383a;
      cursor: pointer;

      i {
        line-height: 1;
        font-size: 18px;
      }
    }

    .title {
      text-align: center;
      padding: 25px 0;
      font-size: 18px;
      margin-top: 10px;
    }
  }

  // 连接钱包
  .connect-wallet {
    ul {
      list-style: none;

      li {
        height: 55px;
        padding: 0 20px;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
        display: flex;
        background: #0d121a;
        margin-bottom: 20px;

        &:hover {
          opacity: 0.6;
        }

        h5 {
          flex: 1;
        }

        .icon {
          width: 30px;
        }
      }
    }
  }

  // 断开连接
  .disconnect-wallet {

    .button {
      width: 100px;
      text-align: center;
      margin: 20px auto;
    }
  }
}

.governance {
  padding-top: @header-pc-height + 50px;

  // 头部
  .header {
    display: flex;
    align-items: center;

    .info {
      flex: 1;
      padding: 20px 0;

      h4 {
        font-size: 40px;
        font-weight: 900;
      }

      p {
        opacity: 0.5;
      }
    }
  }

  // 数据
  .data {
    display: flex;
    margin-top: 50px;
    .data-item {
      display: flex;
    }

    ul {
      display: flex;
      list-style: none;

      li {
        flex: 1;
        height: 110px;
        position: relative;
        background-clip: padding-box;
        z-index: 0;
        padding: 1px;
        border-radius: 16px;
        border: 1px solid transparent;

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 16px;
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0.57) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .layout {
          display: flex;
          position: relative;
          z-index: 9;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0d121a;
          color: #ffffff;
        }

        h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        p {
          opacity: 0.5;
          font-size: 13px;
        }
      }
    }

    .vembox {
      .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
          line-height: 1;
          font-size: 36px;
          color: #fab408;
          margin-bottom: 15px;
        }

        p {
          opacity: 0.5;
        }
      }

      .logo {
        width: 32px;
        height: 32px;
        // cursor: pointer;

        // &:hover {
        //   opacity: 0.7;
        // }
      }
    }
  }
}
</style>
console.log('Debug: feat: implement better particle effects');
