<template>
  <div class="headline">{{$t('Worldcup_17')}}</div>
  <div class="task">
    <div class="title">{{$t('Worldcup_24')}}</div>
    <div class="task-container">
      <div class="head">
        <div class="name">{{$t('Worldcup_25')}}</div>
        <div class="status">{{$t('Worldcup_27')}}</div>
      </div>
      <ul>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/coin-market-cap-task.png" />
            <span>{{$t('Worldcup_29')}}</span>
          </div>
          <div class="rewards">
            <div class="icon">
              <img src="@/assets/world-cup/mbox.png" />
            </div>
          </div>
          <div class="status">
            <div class="button" @click="$emit('show-redeem')">{{$t('Worldcup_105')}}</div>
          </div>
        </li>
        <li class="diamond">
          <div class="name">
            <img src="@/assets/world-cup/cmc.png" />
            <span v-html="$t('Worldcup_93')"></span>
          </div>
          <div class="status">
            <a href="https://coinmarketcap.com/account/rewards/" target="_blank" class="button">Go</a>
          </div>
        </li>
      </ul>
      <!-- <div class="tip">
        <img src="@/assets/world-cup/cmc.png" />
        <p v-html="$t('Worldcup_93')"></p>
      </div> -->
    </div>
  </div>
  <div class="task mingle">
    <div class="title">{{$t('Worldcup_30')}}</div>
    <div class="task-container community">
      <div class="head">
        <div class="name">{{$t('Worldcup_25')}}</div>
        <div class="rewards">{{$t('Worldcup_26')}}</div>
        <div class="status">{{$t('Worldcup_27')}}</div>
      </div>
      <ul>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/invite.png" />
            <span>{{$t('Worldcup_28')}}</span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>100</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <div class="button" @click="$emit('show-invite')">Go</div>
          </div>
        </li>
        <li>
          <div class="name">
            <img src="@/assets/footer/telegram.png" />
            <span v-html="$t('Worldcup_31')"></span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>100</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <img src="@/assets/world-cup/complete.png" v-if="telegram && telegram.state === 2" />
            <a href="https://t.me/mobox_io" target="_blank" class="button" v-else>Go</a>
          </div>
          <div class="tip-icon" @click="$emit('show-bot-tip', 'telegram')">
            <svg t="1668684072115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2672" width="25" height="25">
              <path d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z" p-id="2673" fill="#ffffff"></path>
              <path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z" p-id="2674" fill="#ffffff"></path>
              <path d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z" p-id="2675" fill="#ffffff"></path>
            </svg>
          </div>
        </li>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/cmc.png" />
            <span v-html="$t('Worldcup_101')"></span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>10</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <img src="@/assets/world-cup/complete.png" v-if="cmcTelegram && cmcTelegram.state === 2" />
            <div class="button" @click="openLink(8, 'https://t.me/CoinMarketCapAnnouncements')" v-else>Go</div>
          </div>
        </li>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/discord.png" />
            <span v-html="$t('Worldcup_32')"></span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>100</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <img src="@/assets/world-cup/complete.png" v-if="discord && discord.state === 2" />
            <a href="https://discord.com/invite/mobox" target="_blank" class="button" v-else>Go</a>
          </div>
            <div class="tip-icon" @click="$emit('show-bot-tip', 'discord')">
              <svg t="1668684072115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2672" width="25" height="25">
                <path d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z" p-id="2673" fill="#ffffff"></path>
                <path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z" p-id="2674" fill="#ffffff"></path>
                <path d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z" p-id="2675" fill="#ffffff"></path>
              </svg>
            </div>
        </li>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/cmc.png" />
            <span>{{$t('Worldcup_89')}}</span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>10</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <img src="@/assets/world-cup/complete.png" v-if="cmcInjection && cmcInjection.state === 2" />
            <div class="button" @click="openCoinMarketCap" v-else>Go</div>
          </div>
        </li>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/cmc.png" />
            <span v-html="$t('Worldcup_34')"></span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>10</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <img src="@/assets/world-cup/complete.png" v-if="cmcCommunity && cmcCommunity.state === 2" />
            <div class="button" @click="openCMC" v-else>Go</div>
          </div>
        </li>
        <li>
          <div class="name">
            <img src="@/assets/world-cup/mobox.png" />
            <span v-html="$t('Worldcup_33')"></span>
          </div>
          <div class="rewards">
            <div class="icon">
              <span>100</span>
              <img src="@/assets/world-cup/football.png" />
            </div>
          </div>
          <div class="status">
            <img src="@/assets/world-cup/complete.png" v-if="moboxCommunity && moboxCommunity.state === 2" />
            <a href="https://www.mobox.io/community/" target="_blank" class="button" v-else>Go</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export { mapState } from 'vuex';
export { getSignData } from "../utils";
export request from '@/utils/worldCupRequest';

export default {
  computed: {
    ...mapState({
      telegram: (state) => state.worldCupState.socialChallenges[2],
      discord: (state) => state.worldCupState.socialChallenges[3],
      moboxCommunity: (state) => state.worldCupState.socialChallenges[4],
      cmcCommunity: (state) => state.worldCupState.socialChallenges[5],
      cmcInjection: (state) => state.worldCupState.socialChallenges[7],
      cmcTelegram: (state) => state.worldCupState.socialChallenges[8],
    }),
  },
  methods: {
    async openCMC() {
      this.openLink(5, 'https://coinmarketcap.com/community');
    },
    async openCoinMarketCap() {
      this.openLink(7, 'https://coinmarketcap.com/community/profile/MOBOX_io');
    },
    async openLink(id, link) {
      try {
        const headers = await getSignData();
        await request.post('task/mark', { taskId: id }, { headers });
      } catch(error) {}

      window.open(link);
    }
  },
};
</script>

<style lang="less" scoped>
.social-activities {
  box-sizing: border-box;
  position: relative;
  background-image: url('~@/assets/world-cup/social-background.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top left;
  background-color: #0A1F30;

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
}

.headline {
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
  font-family: Poppins-Bold;
}

.task {
  .title {
    font-family: Poppins-Bold;
    font-weight: 900;
    color: #7CB0D3;
    text-align: center;
  }
}

.task-container {
  background: rgba(6, 18, 29, .6);
  border-radius: 16rem;

  .head,
  li {
    display: flex;
    display: flex;
    align-items: center;

    .name {
      flex: 1;
      display: flex;
      align-items: center;
      min-width: 0;
    }
  }

  .head {
    font-weight: 400;
    color: #7CB0D3;

    .status {
      text-align: right;
    }
  }

  li {
    background: rgba(15, 42, 61, 1, .7);
    border-radius: 16rem;
    position: relative;

    .tip-icon {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-30%);
      cursor: pointer;
    }

    &:first-child {
      margin-top: 0;
    }

    .name {
      img, span {
        display: inline-block;
        vertical-align: middle;
      }

      span {
        font-weight: 400;
        color: #FFFFFF;
      }
    }

    .rewards {
      .icon {
        display: block;
        margin: 0 auto;
        position: relative;

        span {
          font-size: 12px;
          font-family: Poppins-Bold;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(70%, -35%);
        }
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
        border-radius: 9rem;
        font-weight: bold;
        color: #081725 !exportant;
        cursor: pointer;

        &:hover {
          opacity: .7;
        }
      }
    }
  }

  .diamond {
    height: auto;
    background: none;
  }
}

.community ul {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
}

.mingle {
  margin-top: 20px;
}

@media (min-width: 960px) {
  .social-activities {
    padding: 50rem 43rem 40rem 43rem;
    width: 978rem;
  }

  .headline {
    font-size: 50rem;
    margin-bottom: 20rem;
  }

  .task {
    .title {
      font-size: 28rem;
      margin-bottom: 18rem;
    }
  }

  .task-container {
    padding: 0 20rem 20rem 20rem;

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
      height: 52rem;
      line-height: 52rem;
      font-size: 24rem;
    }

    li {
      height: 85rem;
      margin-top: 20rem;
    }

    .name {
      img {
        width: 40rem;
      }

      span {
        font-size: 20rem;
        margin-left: 20rem;
      }
    }

    .rewards {
      .icon {
        width: 42rem;
      }
    }

    .button {
      height: 38rem;
      line-height: 38rem;
      font-size: 20rem;
    }
  }

  .community ul {
    max-height: 500rem;
  }
}

@media (max-width: 960px) {
  .social-activities {
    padding: 120rem 80rem 70rem 80rem;
    width: 96vw;
  }

  .headline {
    font-size: 85rem;
    margin-bottom: 40rem;
  }

  .task {
    .title {
      font-size: 90rem;
      margin-bottom: 24rem;
    }
  }

  .task-container {
    padding: 0 60rem 60rem 60rem;

    .head,
    li {
      padding-left: 80rem;
      padding-right: 80rem;


      .rewards {
        width: 400rem;
        text-align: center;
      }

      .status {
        width: 300rem;
        margin-left: 60rem;

        img {
          width: 125rem;
        }
      }
    }

    .head {
      height: 300rem;
      line-height: 300rem;
      font-size: 24rem;
    }

    li {
      height: 500rem;
      margin-top: 60rem;
    }

    .name {
      img {
        width: 200rem;
      }

      span {
        font-size: 80rem;
        margin-left: 50rem;
      }
    }

    .rewards {
      .icon {
        width: 150rem;
      }
    }

    .button {
      height: 170rem;
      line-height: 170rem;
      font-size: 90rem;
    }
  }

  .community ul {
    max-height: 1500rem;
  }
}
</style>
console.log('Debug: fix: fix broken animation frames in combat');
console.log('Debug: feat: introduce in-game achievements and medals');
