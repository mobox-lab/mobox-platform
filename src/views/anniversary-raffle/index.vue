// <template>
//   <div class="anniversary-raffle">
//     <!-- logo -->
    <div class="logo">
    </div>
    <!-- 标题 -->
    <div class="title">
      <img class="fireworks left" src="@/assets/anniversary-raffle/fireworks.png" />
      <span>{{ $t('Anniversary_1') }}</span>
      <img class="fireworks right" src="@/assets/anniversary-raffle/fireworks.png" />
    </div>
    <h6 class="sub-title">{{ $t('Anniversary_2') }}</h6>
    <!-- 信息 -->
    <div class="info" v-if="!address">
      <img class="image" src="@/assets/anniversary-raffle/image-1.png" />
      <!-- 连接钱包按钮 -->
      <div class="button" @click="init">{{ $t('Home_9') }}</div>
    </div>
    <!-- 抽奖 -->
    <div class="turntable" id="spin" v-else>
      <div class="button" @click="luckDraw">Start</div>
    </div>
    <!-- faq -->
    <div class="faq">
      <div class="faq-title">- {{ $t('Anniversary_3') }} - </div>
      <ul>
        <li v-for="(item, index) in faq" :key="index" @click="toggleShowFAQ(index)" :class="{'active': index === showFAQIndex}">
          <div class="head">
            <img class="icon" src="@/assets/anniversary-raffle/faq-icon.png" />
            <span>{{ $t(item.title) }}</span>
            <img class="fold-icon" src="@/assets/anniversary-raffle/fold.png" />
          </div>
          <p class="text" v-if="index === showFAQIndex">{{ $t(item.content) }}</p>
        </li>
      </ul>
    </div>
    <!-- 右下角地图 -->
    <div class="map">
      <img src="@/assets/anniversary-raffle/map.png" />
    </div>
    <!-- 中奖结果 -->
    <Dialog class="winning-result" v-model="isShowDialog" :prize="prize" />
  </div>
</template>

<script>
  import { LuckyWheel } from 'lucky-canvas';
  import Dialog from './dialog.vue';
  import { CommonMethod } from "@/mixin";
  import WalletUtils from '@/utils/wallet-utils';
  import { getTicketInfo, lottery } from '@/utils/anniversary-raffle';

  const prizes = [
    {
      id: 1,
      icon: require('@/assets/anniversary-raffle/item/2.png'),
      name: 'x1',
    },
    {
      id: 2,
      icon: require('@/assets/anniversary-raffle/item/1.png'),
      name: 'x1',
    },
    {
      id: 3,
      icon: require('@/assets/anniversary-raffle/item/4.png'),
      name: 'x1',
    },
    {
      id: 4,
      icon: require('@/assets/anniversary-raffle/item/3.png'),
      name: 'x500',
    },
    {
      id: 5,
      icon: require('@/assets/anniversary-raffle/item/3.png'),
      name: 'x200',
    },
    {
      id: 6,
      icon: require('@/assets/anniversary-raffle/item/3.png'),
      name: 'x100',
    },
  ];

  export default {
    mixins: [ CommonMethod ],
    components: {
      Dialog,
    },
    data() {
      return {
        spin: null,
        // 钱包
        wallet: window.localStorage.getItem('anniversary-raffle-wallet'),
        // 地址
        address: '',
        // 票数
        ticket: 0,
        // 抽奖loading
        loading: false,
        // 弹窗显示状态
        isShowDialog: false,
        // 中奖物品
        prize: null,
        // 帮助
        faq: [
          {
            title: 'Anniversary_4',
            content: 'Anniversary_5'
          },
          {
            title: 'Anniversary_6',
            content: 'Anniversary_7'
          },
        ],
        showFAQIndex: 0,
        test: 53,
      };
    },
    methods: {
      setSize() {
        const fontSize = document.documentElement.clientWidth / 1280;
        document.documentElement.style.fontSize = `${fontSize}px`;
      },
      initLuckyWheel() {
        this.spin = new LuckyWheel('#spin', {
          prizes: prizes.map(item => ({
            // fonts: [{
            //   text: item.name,
            //   top: '16%',
            //   fontColor: '#582B19',
            //   fontWeight: '700',
            //   fontSize: '70',
            //   fontStyle: 'Poppins-bold',
            // }],
            // imgs: [{
            //   width: '18%',
            //   top: '36%',
            //   src: item.icon
            // }],
          })),
          blocks: [
            {
              imgs: [
                {
                  // src: require('@/assets/anniversary-raffle/spin-background.png'),
                  src: require('@/assets/anniversary-raffle/spin.png'),
                  width: '100%',
                  height: '100%',
                  rotate: true,
                },
              ]
            }
          ],
          defaultConfig: {
            offsetDegree: -((360 / 6) / 2),
            gutter: 5,
          },
        });
      },
      // 切换显示faq
      toggleShowFAQ(index) {
        this.showFAQIndex = index === this.showFAQIndex ? -1 : index;
      },
      // 抽奖
      async luckDraw() {
        if (this.loading) {
          return;
        }

        if (this.ticket <= 0) {
          this.showNotify(this.$t('Anniversary_8'), "error");
          return;
        }

        this.loading = true;

        try {
          const time = Math.floor(Date.now() / 3600000);
          const message = `momo_event_${time}`;
          const sign = await WalletUtils.sign(this.address, this.wallet, message);
          // 调用抽奖
          const { data } = await lottery(this.address, sign);
          this.spin.play();
          await this.delayed(4000);

          const prize = prizes.find(item => item.id === data.luckyIdx);
          const index = prizes.indexOf(prize);

          this.prize = prize;
          this.spin.stop(index);

          await this.delayed(3000);

          this.isShowDialog = true;
          this.ticket -= 1;
          this.loading = false;
        } catch(error) {
          this.showNotify(this.$t(error?.code ? `Valentine_${error?.code}` : 'Error'), "error");
          this.loading = false;
        }
      },
      // 延迟
      delayed(timer) {
        return new Promise((resolve) => {
          setTimeout(resolve, timer);
        });
      },
      // 连接钱包
      async connectWallet() {
        const name = window.localStorage.getItem('anniversary-raffle-wallet');
        const { address, wallet } = await WalletUtils.connect(name);

        this.wallet = wallet;
        this.address = address;
      },
      // 获取票据信息
      async getTicketInfo() {
        const { data } = await getTicketInfo(this.address);
        this.ticket = data.ticket;
      },
      // 初始化
      async init() {
        // 连接钱包
        await this.connectWallet();

        if (!this.address) {
          return;
        }

        window.localStorage.setItem('anniversary-raffle-wallet', this.wallet);
        // 初始化抽奖
        this.$nextTick(this.initLuckyWheel);
        // 获取票数
        await this.getTicketInfo();
      },
    },
    created() {
      // 监听窗口大小变化
      window.addEventListener('resize', this.setSize);
      // 设置字体大小
      this.setSize();

      if (this.wallet) {
        // 初始化
        this.init();
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setSize);
    },
  }
</script>

<style lang="less" scoped>
  .anniversary-raffle {
    width: 100vw;
    background: url(../../assets/anniversary-raffle/background.png) no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: none;

    /deep/ * {
      transition: none;
    }

    img {
      display: block;
      max-width: 100%;
    }

    ul {
      list-style: none;
    }
  }

  .title,
  .sub-title {
    font-weight: normal;
    line-height: 1;
  }

  .title span,
  .sub-title {
    font-family: "poppins-blackitalic";
  }

  .title {
    position: relative;

    span {
      color: #FAB209;
      position: relative;
      z-index: 2;
    }
  }

  .fireworks {
    position: absolute;

    &.right {
      transform: rotateY(180deg);
    }
  }

  .sub-title {
    color: #FFFFFF;
    position: relative;
    z-index: 1;
  }

  .info {
    .button {
      background: url(../../assets/anniversary-raffle/button.png) no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: #592C05;
      cursor: pointer;

      &:hover {
        opacity: .5;
      }
    }
  }

  .tip {
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1;
    text-align: center;
  }

  .turntable {
    position: relative;

    .button {
      z-index: 1;
      background: url(../../assets/anniversary-raffle/spin-button.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #214E8F;
      font-family: "poppins-blackitalic";
    }
  }

  .faq {
    background: #020711;
    border: 1px solid rgba(99, 79, 36, 0.43);
    position: relative;

    .fold-icon {
      transition: transform 0.3s;
    }

    .active .fold-icon {
      transform: rotate(180deg);
    }

    ul {
      li {
        border-bottom: 1px solid #281905;
        cursor: pointer;
      }
    }
  }

  .faq-title {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(../../assets/anniversary-raffle/title-background.png) no-repeat;
    background-size: 100% 100%;
    font-weight: bold;
    color: #CD8001;
    z-index: 1;
    transform: translate(-50%, -50%);
  }

  .head {
    display: flex;
    align-items: center;

    span {
      display: block;
      flex: 1;
      color: #CD8001;
      font-weight: bold;
      color: #CD8001;
    }
  }

  .text {
    font-weight: 400;
    color: #9E7617;
  }
</style>
<style src="./mobile.less" lang="less" scoped></style>
<style src="./pc.less" lang="less" scoped></style>console.log('Debug: feat: introduce in-game achievements and medals');
