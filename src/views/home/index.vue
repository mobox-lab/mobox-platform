  <div class="home">
    <!-- 首屏 -->
    <first-screen />
    <!-- 内容 -->
    <div class="content">
      <div class="new-listings-container">
        <!-- 赛季 -->
        <div class="season">
          <h6 class="module-title">Tournament / Seasons</h6>
          <ul>
            <li v-for="(item, index) in pools" :key="index">
              <div class="icon">
                <img :src="item.icon" />
              </div>
              <div class="name" :label="item.name">{{$t(item.name)}}</div>
              <div class="count">
                <count-to :start-val='0' :end-val='item.balance' :duration='10000' :decimals='2' separator=',' autoplay />
              </div>
              <div class="coin">
                <img src="@/assets/coin-icon/mbox.png" />
              </div>
              <div class="button">
                <more-one size="25" fill="#ffffff" :strokeWidth="1" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MoreOne } from '@icon-park/vue';
import CountTo from 'vue-count-to';
import { mapState } from "vuex";
import FirstScreen from "./first-screen.vue";
import request from "@/utils/request";
import { TOTAL_POOLS } from "@/utils/constant";
import { Common, EventBus } from "@/utils";

const gameInfo = {
  2: {
    name: 'Home_67',
    icon: require('@/assets/home/games/token-master.png')
  },
  5: {
    name: 'Home_109',
    icon: require('@/assets/home/games/block-brawler.png')
  },
  6: {
    name: 'Home_114',
    icon: require('@/assets/home/games/chaincarena.png')
  },
  7: {
    name: 'Home_116',
    icon: require('@/assets/home/games/moland-defense.png')
  },
  8: {
    name: 'Clash of MOland',
    icon: require('@/assets/home/games/clash-of-moland.png')
  },
  9: {
    name: 'MOMOverse',
    icon: require('@/assets/home/games/momoverse.png')
  },
};

export default {
  components: {
    FirstScreen,
    MoreOne,
    CountTo,
  },
  data() {
    return {
      // 流动赤
      pools: [],
      // 是否显示切换链
      isShowSwitchChain: false,
    };
  },
  computed: {
    ...mapState({
      localArea: (state) => state.globalState.data.localArea.value,
    }),
    games() {
      const list = [
        {
          logo: require("@/assets/dragonverse/logo.png"),
          image: require("@/assets/dragonverse/7.jpg"),
          name: "Dragonverse",
          describe: "MODragon World 3D",
          symbol: "dragonverse",
          window: {
            width: 1240,
            height: 760,
          },
        },
        {
          logo: require("@/assets/home/new-listings/dragonmo-logo.svg"),
          image: require("@/assets/home/new-listings/dragonmo.jpg"),
          name: "MODragon",
          describe: "Unleash The Dragons",
          symbol: "dragonmo",
          window: {
            width: 1240,
            height: 760,
          },
        },
        {
          logo: require("@/assets/home/new-listings/momohead.png"),
          image: require("@/assets/home/new-listings/game1.jpg"),
          name: "Home_2",
          describe: "Home_16",
          symbol: "momo-farmer",
          window: {
            width: 1240,
            height: 760,
          },
        },
        {
          logo: require("@/assets/home/new-listings/logo.png"),
          image: require("@/assets/home/new-listings/overview.jpg"),
          name: "Home_114",
          describe: "Home_115",
          symbol: "chainzarena",
          window: {
            width: 1240,
            height: 760,
          },
        },
        {
          logo: require("@/assets/home/new-listings/tdlogo.png"),
          image: require("@/assets/home/new-listings/gametd.jpg"),
          name: "Home_116",
          describe: "Home_117",
          symbol: "mobox_tower_defense",
          window: {
            width: 1240,
            height: 760,
          },
        },
      ];

      if (this.localArea == '82') {
        return list.filter(item => !['tokenmaster', 'block-brawler', 'chainzarena', 'clash-moland', 'mobox_tower_defense'].includes(item.symbol))
      }

      return list;
    }
  },
  methods: {
    // 关闭切换链
    closeSwitchChain() {
      this.isShowSwitchChain = false;
    },
    switchChain(chain) {
      this.closeSwitchChain()
      EventBus.$emit('switch-chain', chain)
    },
    async getPools() {
      const res = await request(TOTAL_POOLS);

      this.pools = res.data.pools.map((item) => ({
        ...gameInfo[item.app_id],
        balance: +item.balance,
      }));
    },
    // 打开轮播
    launch(item) {
      const symbol = item.symbol;

      if (symbol === 'momo-farmer') {
        this.$router.push('/iframe/momo');
      } else if (symbol === 'dragonmo') {
        this.$router.push('/iframe/dragonmo');
      } else if (Common.isMobile()) {
        this.$router.push(`${symbol === 'block-brawler' ? '' : '/iframe'}/${symbol}`);
      } else {
        EventBus.$emit('open-game', symbol);
      }
    }
  },
  created() {
    this.getPools();
  },
  mounted() {
    setTimeout(() => {
      this.isShowSwitchChain = !window.localStorage.getItem('chain')
    }, 3000)
  }
};
</script>

<style lang="less" scoped>
@import '~@/assets/less/var.less';

.home {
  background: #070707;
  min-height: 100vh;
  font-family: Poppins-bold;

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
}

// 模块标题
/deep/ .module-title {
  font-size: 27px;
  font-weight: 900;
  color: #2446ed;
  margin-bottom: 15px;
}

// 最新发布
.new-listings {
  li {
    cursor: pointer;

    &:hover {
      .image img {
        transform: scale(1.1);
      }
    }

    .image-box {
      background: #535353;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      width: 100%;

      span {
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.9);
        font-size: 12px;
        color: #ffffff;
        padding: 4px 10px;
        z-index: 9;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      img {
        width: 100%;
        display: block;
        transition: transform .2s;
      }
    }

    .logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 120px;
        height: auto;
      }
    }

    h6 {
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
    }

    span {
      font-size: 12px;
      color: #9A9A9A;
      overflow: hidden;
      white-space: nowrap;
      display: block;
      text-overflow: ellipsis;
    }
  }
}

// 赛季
.season {
  padding-top: 20px;

  ul {
    li {
      display: flex;
      align-items: center;
      padding: 8px 20px;

      &:nth-child(odd) {
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.08);
      }

      .icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        overflow: hidden;
        background: #535353;
      }

      .name {
        flex: 1;
        min-width: 0;
        font-size: 15px;
        opacity: 0.6;
        margin-left: 10px;
        color: #969696;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .count {
        font-size: 14px;
        color: #ffffff;
        margin-right: 10px;
      }

      .coin {
        width: 25px;
        height: 25px;
        background: #535353;
        border-radius: 100%;
      }

      .button {
        line-height: 0;
        margin-left: 5px;
        padding: 0 5px;
        cursor: pointer;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}

@media (min-width: 1840px) {
  .new-listings-container {
    display: flex;

    .season {
      width: 100%;
    }
  }

  .new-listings {
    ul li:last-child {
      margin-right: 0;
    }
  }
}

// 切链
.chain-card {
  width: 500px;
  height: 303px;
  background: #1a1c1f;
  border: 1px solid #1846cb;
  border-radius: 16px;
  box-shadow: 0px 4px 30px 0px #000000;
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 22px;
  z-index: 999999;

  .head {
    display: flex;
    align-items: center;
  }

  .link {
    width: 29px;
  }

  h6 {
    flex: 1;
    font-size: 28px;
    font-family: Poppins-Bold;
    font-weight: 700;
    text-align: left;
    color: #1751f6;
    line-height: 1;
    margin-left: 8px;
  }

  .close {
    width: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  p {
    font-size: 16px;
    font-family: Poppins-Regular;
    font-weight: 400;
    text-align: left;
    color: #969696;
    line-height: 24px;
    margin-top: 8px;
    margin-bottom: 21px;
  }

  ul {
    display: flex;

    li {
      height: 154px;
      background: #212327;
      border-radius: 10px;
      border: 2px solid #212327;
      flex: 1;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background: #072067;
        border-color: #1751f6;
      }

      &:last-child {
        margin-left: 14px;
      }
    }

    .logo {
      height: 80px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 10px 0;

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }

  .footer {
    display: flex;
    margin-top: 11px;

    img {
      height: 36px;
    }

    .info {
      margin-left: 11px;
      font-size: 15px;
      font-weight: 700;
      line-height: 1;
    }

    .chain {
      color: #ffffff;
    }

    .name {
      margin-top: 3px;
      color: #969696;
    }
  }
}

@media (max-width: 1840px) {
  .new-listings {
    ul {
      margin-bottom: 20px;

       li:last-child {
        margin-right: 0;
      }
    }
  }
}

@media (min-width: 1920px) {
  .content {
    padding: 0 150px 80px 150px;
  }
}

@media (max-width: 1920px) and (min-width: 1200px) {
  .content {
    padding: 0 80px 80px @sidebar-width + 80px;
  }
}

@media (max-width: 1200px) {
  .chain-card {
    display: none !important;
  }

  .content {
    padding: 0 40px 80px @sidebar-width + 40px;
  }
}

@media (min-width: 960px) {
  .new-listings {
    padding-left: 310px;
    flex: 1;
    min-width: 0;

    ul {
      display: flex;
      white-space: nowrap;

      li {
        flex: 1;
        min-width: 0;
        margin-right: 30px;
      }
    }
  }
}

@media (max-width: 960px) {
  .content {
    padding: 0 15px 80px 15px;
  }

  .new-listings {
    ul {
      overflow: hidden;

      li {
        width: 50%;
        display: inline-block;
        margin-bottom: 15px;

        &:nth-child(odd) {
          padding-right: 10px;
        }
  
        &:nth-child(even) {
          padding-left: 10px;
        }
      }
    }
  }

  .season {
    li .button {
      display: none;
    }
  }
}

.move-enter-active,
.move-leave-active {
  transition: transform 0.25s, opacity 0.25s;
}

.move-enter,
.move-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
