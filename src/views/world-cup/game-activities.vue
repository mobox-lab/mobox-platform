// <template>
// // <div class="game-activities">
// //   <div class="title">{{$t('Worldcup_18')}}</div>
// //   <p class="sub-title">{{$t('Worldcup_46')}}</p>
  <div class="container" @mousewheel.stop>
    <div class="task-container" v-for="(item, index) in tasks" :key="index">
      <div class="head">
        <div class="name">
          <img :src="item.icon" @click="openGame(item.link)" />
        </div>
        <div class="rewards">{{$t('Worldcup_26')}}</div>
        <div class="status">{{$t('Worldcup_27')}}</div>
      </div>
      <ul>
        <li v-for="task in item.task" :key="task.id">
          <div class="name">
            <span>{{$t(task.name)}}</span>
          </div>
          <div class="rewards">
            <div class="icon">
              <img src="@/assets/world-cup/football.png" />
              <div class="count">x{{task.reward}}</div>
            </div>
          </div>
          <div class="status">
            <div class="button" v-if="!gameChallenges[task.id] || gameChallenges[task.id].state != 2" @click="openGame(item)">
              <span v-if="!gameChallenges[task.id]">Go</span>
              <span v-else>{{gameChallenges[task.id].amt}} / {{task.count}}</span>
            </div>
            <img src="@/assets/world-cup/complete.png" v-else />
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- 倒计时 -->
  <div class="timer">
    <div class="label">{{$t('Coinbase_20')}}</div>
    <ul>
      <li>{{hour}}</li>
      <span>:</span>
      <li>{{minute}}</li>
      <span>:</span>
      <li>{{second}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      timer: null,
      hour: '00',
      minute: '00',
      second: '00',
      tasks: [
        {
          icon: require('@/assets/chainzarena/logo.png'),
          link: 'https://www.mobox.io/#/iframe/chainzarena',
          game: 'https://www.mobox.io/chainzarena',
          task: [
            {
              id: 601,
              name: 'Worldcup_47',
              count: 12,
              reward: 30,
            },
            {
              id: 602,
              name: 'Worldcup_48',
              count: 3,
              reward: 40,
            },
            {
              id: 603,
              name: 'Worldcup_49',
              count: 2,
              reward: 30,
            },
          ]
        },
        {
          icon: require('@/assets/clash-moland/logo.png'),
          link: 'https://www.mobox.io/#/iframe/clash-moland',
          game: 'https://www.mobox.io/clashofmoland',
          task: [
            {
              id: 803,
              name: 'Worldcup_50',
              count: 100,
              reward: 40,
            },
            {
              id: 801,
              name: 'Worldcup_51',
              count: 10,
              reward: 20,
            },
            {
              id: 802,
              name: 'Worldcup_52',
              count: 2,
              reward: 40,
            },
          ]
        },
        {
          icon: require('@/assets/towerdefense/logo.png'),
          link: 'https://www.mobox.io/#/iframe/mobox_tower_defense',
          game: 'https://www.mobox.io/towerdefence/webIndex.html',
          task: [
            {
              id: 701,
              name: 'Worldcup_53',
              count: 1,
              reward: 40,
            },
            {
              id: 702,
              name: 'Worldcup_54',
              count: 1,
              reward: 30,
            },
            {
              id: 703,
              name: 'Worldcup_55',
              count: 1,
              reward: 30,
            },
          ]
        },
        {
          icon: require('@/assets/block-brawler-logo.png'),
          link: 'https://www.mobox.io/#/block-brawler',
          game: 'https://www.mobox.io/blockbrawler',
          task: [
            {
              id: 501,
              name: 'Worldcup_56',
              count: 12,
              reward: 30,
            },
            {
              id: 502,
              name: 'Worldcup_57',
              count: 2,
              reward: 30,
            },
            {
              id: 503,
              name: 'Worldcup_58',
              count: 1,
              reward: 40,
            },
          ]
        },
        {
          icon: require('@/assets/tokenmaster/logo.png'),
          link: 'https://www.mobox.io/#/iframe/tokenmaster',
          game: 'https://www.mobox.io/tokenmaster',
          task: [
            {
              id: 201,
              name: 'Worldcup_59',
              count: 12,
              reward: 30,
            },
            {
              id: 202,
              name: 'Worldcup_60',
              count: 20,
              reward: 40,
            },
            {
              id: 203,
              name: 'Worldcup_61',
              count: 2,
              reward: 30,
            },
          ]
        }
      ],
    };
  },
  computed: {
    ...mapState({
      gameChallenges: (state) => state.worldCupState.gameChallenges,
    }),
  },
  methods: {
    padLeft(value) {
      if (value < 10) {
        return `0${value}`;
      }

      return value;
    },
    openGame(item) {
      if (window.RECHARGE_MBOX) {
        const { lang, token } = this.$route.query;
        window.location.href = `${item.game}?lang=${lang}&token=${token}`;
        return;
      }

      window.open(item.link);
    },
    interval() {
      const date = 86400 - (parseInt(Date.now() / 1000) - 1668330000) % 86400;
      this.hour = this.padLeft(Math.floor(date / 60 / 60));
      this.minute = this.padLeft(Math.floor(date / 60 % 60));
      this.second = this.padLeft(Math.floor(date % 60));
    }
  },
  created() {
    this.timer = setInterval(this.interval, 1000);
  },
  destroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.game-activities {
  background-image: url('~@/assets/world-cup/game-activities-background.png');
  background-size: 100% 100%;
  box-sizing: border-box;
        
  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }
}

.title {
  font-family: Poppins-Bold;
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
}

.sub-title {
  font-weight: 400;
  color: #FFFFFF;
  text-align: center;
}

.container {
  overflow-x: auto;
  background: rgba(6, 18, 29, .6);
  border-radius: 16rem;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
}

.task-container {
  background: rgba(6, 18, 29, .6);

  .head,
  li {
    display: flex;
    display: flex;
    align-items: center;

    .name {
      flex: 1;
      min-width: 0;
    }

    .status {
      margin-left: 37rem;
    }
  }

  .head {
    font-weight: 400;
    color: #7CB0D3;
    padding-left: 0;

    .name {
      img {
        cursor: pointer;
        display: block;
      }
    }

    .status {
      text-align: right;
    }
  }

  li {
    background: rgba(15, 42, 61, 1, .7);

    &:first-child {
      margin-top: 0;
    }

    .name {
      span {
        font-weight: 400;
        color: #FFFFFF;
      }
    }

    .rewards {
      .icon {
        margin: 0 auto;
        position: relative;
      }

      .count {
        font-size: 12px;
        font-family: Poppins-Bold;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(70%, -35%);
      }
    }

    .status {
      img {
        display: block;
        margin: 0 auto;
      }

      .button {
        display: block;
        width: 100%;
        text-align: center;
        background: #7CB0D3;
        font-weight: bold;
        color: #081725 !important;
        cursor: pointer;

        &:hover {
          opacity: .7;
        }
      }
    }
  }
}

.timer {
  text-align: center;

  .label,
  ul,
  ul li {
    display: inline-block;
    font-family: Poppins-Bold;
  }

  ul {
    li {
      text-align: center;
      background: rgba(6, 18, 29, 0.6);
    }
  }
}

@media (min-width: 960px) {
  .game-activities {
    width: 978rem;
    padding: 59rem 42rem 44rem 42rem;
  }

  .title {
    font-size: 60rem;
  }

  .sub-title {
    margin-top: 10rem;
    font-size: 26rem;
    margin-bottom: 51rem;
  }

  .container {
    height: 700rem;
  }

  .task-container {
    padding: 27rem 49rem 20rem 49rem;
    border-radius: 16rem;

    .head,
    li {
      padding-left: 38rem;
      padding-right: 21rem;

      .rewards {
        width: 100rem;
      }

      .status {
        width: 91rem;
        margin-left: 37rem;

        img {
          width: 50rem;
        }
      }
    }

    .head {
      font-size: 24rem;
      margin-bottom: 15rem;

      .name {
        img {
          height: 74rem;
        }
      }
    }

    li {
      height: 70rem;
      border-radius: 16rem;
      margin-top: 20rem;
    }

    .name {
      span {
        font-size: 25rem;
      }
    }

    .rewards {
      .icon {
        width: 42rem;
      }
    }

    .status {
      img {
        width: 35rem;
      }

      .button {
        height: 38rem;
        line-height: 38rem;
        border-radius: 9rem;
        font-size: 20rem;
      }
    }
  }

  .timer {
    margin-top: 30rem;
    font-size: 20rem;

    ul {
      margin-left: 20rem;

      span {
        font-size: 30rem;
        margin: 0 10rem;
      }

      li {
        width: 70rem;
        height: 50rem;
        border-radius: 10rem;
        line-height: 50rem;
      }
    }
  }
}

@media (max-width: 960px) {
  .game-activities {
    width: 96vw;
    padding: 150rem 42rem 150rem 42rem;
  }

  .title {
    font-size: 120rem;
  }

  .sub-title {
    font-size: 90rem;
    margin-top: 20rem;
    margin-bottom: 60rem;
  }

  .container {
    height: 2500rem;
  }

  .task-container {
    padding: 100rem 50rem 20rem 50rem;
    border-radius: 60rem;

    .head,
    li {
      padding-left: 73rem;
      padding-right: 77rem;

      .rewards {
        width: 290rem;
      }

      .status {
        width: 300rem;
        margin-left: 150rem;
      }
    }

    .head {
      font-size: 75rem;
      margin-bottom: 70rem;

      .name {
        img {
          height: 218rem;
        }
      }
    }

    li {
      height: 280rem;
      border-radius: 16rem;
      margin-top: 50rem;
    }

    .name {
      span {
        font-size: 85rem;
      }
    }

    .rewards {
      .icon {
        width: 150rem;
      }
    }

    .status {
      img {
        width: 125rem;
      }

      .button {
        height: 120rem;
        line-height: 120rem;
        border-radius: 34rem;
        font-size: 80rem;
      }
    }
  }

  .timer {
    margin-top: 100rem;
    font-size: 100rem;

    .label {
      font-size: 100rem;
    }

    ul {
      margin-left: 120rem;

      span {
        font-size: 150rem;
        margin: 0 50rem;
      }

      li {
        width: 300rem;
        height: 250rem;
        border-radius: 60rem;
        line-height: 250rem;
      }
    }
  }
}
</style>
console.log('Debug: feat: improve AI bot strategies in battle');
