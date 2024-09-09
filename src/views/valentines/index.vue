<template>
  <div class="page">
    <!-- 侧边按钮 -->
    <div class="side-menu">
      <ul>
        <li :class="{'active': activeIndex == 0}" @click="scrollIntoView('rewards')">
          <img src="@/assets/valentines/menu-icon.png" />
          <span>Rewards</span>
        </li>
        <li :class="{'active': activeIndex == 1}" @click="scrollIntoView('social-tasks')">
          <img src="@/assets/valentines/menu-icon.png" />
          <span>{{$t('Valentine_19')}}</span>
        </li>
        <li :class="{'active': activeIndex == 2}" @click="scrollIntoView('spin-box')">
          <img src="@/assets/valentines/menu-icon.png" />
          <span>{{$t('Valentine_25')}}</span>
        </li>
        <li :class="{'active': activeIndex == 3}" @click="scrollIntoView('daily-tasks')">
          <img src="@/assets/valentines/menu-icon.png" />
          <span>{{$t('Valentine_29')}}</span>
        </li>
        <li :class="{'active': activeIndex == 4}" @click="scrollIntoView('event-tasks')">
          <img src="@/assets/valentines/menu-icon.png" />
          <span>{{$t('Valentine_35')}}</span>
        </li>
        <li :class="{'active': activeIndex == 5}" @click="scrollIntoView('event-introduction')">
          <img src="@/assets/valentines/menu-icon.png" />
          <span>{{$t('Valentine_39')}}</span>
        </li>
      </ul>
    </div>
    <Envelope @close="connectWallet" />
    <Rewards id="rewards" />
    <Tasks id="social-tasks" :title="$t('Valentine_19')" :tasks="socialTasks" />
    <Spin id="spin-box" :mohearts="mohearts" @showRecords="toggleShowRecords" />
    <Tasks id="daily-tasks" :title="$t('Valentine_29')" :tasks="dailyTask">
      <p class="describe">{{$t('Valentine_34')}}</p>
    </Tasks>
    <Tasks id="event-tasks" :title="$t('Valentine_35') " :tasks="eventTask" />
    <EventIntroduction id="event-introduction" />
    <!-- 底部云朵 -->
    <div class="footer">
      <img src="@/assets/valentines/rewards-head-bg.png" />
    </div>
    <!-- 底部图片 -->
    <img class="footer-image" src="@/assets/valentines/footer-image.png" />
    <!-- 绑定名称 -->
    <Dialog v-model="isShowSubmitName" :title="$t('Coinbaseloot_8')" :button="$t('Coinbaseloot_7')" @confirm="submitName">
      <div class="name-input">
        <input type="text" :placeholder="$t('Coinbaseloot_9')" v-model="twitterName" />
        <div class="links">
          <a href="https://twitter.com/MOBOX_Official" target="_blank">@MOBOX_Official</a>
          <a href="https://twitter.com/TrustWallet" target="_blank">@TrustWallet</a>
        </div>
      </div>
    </Dialog>
    <!-- 提交链接 -->
    <Dialog class="link-dialog" v-model="isShowSubmitLink" :title="$t('Coinbaseloot_11')" :button="$t('Coinbaseloot_7')" @confirm="submitLink">
      <div class="name-input">
        <input type="text" :placeholder="$t('Coinbaseloot_12')" v-model="link" />
        <div class="links">
          <a href="https://twitter.com/MOBOX_Official/status/1625043320014602240?s=20&t=zFuMEQ8GZinOhv0CeejE6g" target="_blank">{{$t('Valentine_57')}}</a>
        </div>
      </div>
    </Dialog>
    <!-- 邀请 -->
    <Dialog class="invitation-dialog" v-model="isShowInvitation" :title="$t('Valentine_51')" :button="$t('Setting_48')" @confirm="toggleShowInvitation">
      <Invitation :address="address" :amount="invitationAmount" />
    </Dialog>
    <!-- 记录 -->
    <Dialog class="records" v-model="isShowRecords" :title="$t('Valentine_53')">
      <Records :address="address" />
    </Dialog>
    <!-- 安装钱包 -->
    <Dialog v-model="isShowTip" title="Tip" :button="$t('Coinbaseloot_40')" @confirm="toDownloadWallet">
      <p class="tip">{{$t('Valentine_58')}}</p>
    </Dialog>
  </div>
</template>

<script>
  import Envelope from './envelope.vue';
  import Rewards from './rewards.vue';
  import Tasks from './tasks.vue';
  import Spin from './spin.vue';
  import EventIntroduction from './event-introduction.vue';
  import Invitation from './invitation.vue';
  import Records from './records.vue';
  import Dialog from './dialog.vue';
  import { CommonMethod } from '@/mixin';
  import { Common } from "@/utils";
  import { clearCache, register, getStatus, getMohearts, submitName, submitLink, getDailyTasks, getEventTasks } from '@/utils/trust-wallet';

  export default {
    mixins: [CommonMethod],
    components: {
      Envelope,
      Rewards,
      Tasks,
      Spin,
      EventIntroduction,
      Dialog,
      Invitation,
      Records,
    },
    data() {
      return {
        activeIndex: 0,
        timeout: null,
        // 地址
        address: null,
        // 状态
        state: 0,
        momoType: '',
        mohearts: 0,
        twitterName: '',
        link: '',
        isShowSubmitName: false,
        isShowSubmitLink: false,
        isShowInvitation: false,
        isShowRecords: false,
        isShowTip: false,
        dailyTask: [
          {
            id: 901,
            title: this.$t('Valentine_30'),
            count: 10,
            status: false,
            onClick: this.openMomoverse,
          },
          {
            id: 902,
            title: this.$t('Valentine_31'),
            count: 10,
            status: false,
            onClick: this.openMomoverse,
          },
          {
            id: 903,
            title: this.$t('Valentine_32'),
            count: 30,
            status: false,
            onClick: this.openMomoverse,
          },
          {
            id: 904,
            title: this.$t('Valentine_33'),
            count: 80,
            status: false,
            onClick: this.openMomoverse,
          },
        ],
        eventTask: [
          {
            id: 1,
            title: this.$t('Valentine_38'),
            count: 80,
            amount: 0,
            status: false,
            onClick: this.toggleShowInvitation,
          },
          {
            id: 2,
            title: this.$t('Valentine_37'),
            count: 20,
            amount: 0,
            status: false,
            onClick: this.openMomoFarm,
          },
          {
            id: 3,
            title: this.$t('Valentine_36'),
            count: 20,
            amount: 0,
            status: false,
            onClick: this.openMomoFarm,
          },
        ],
      };
    },
    computed: {
      socialTasks() {
        return [
          {
            title: this.$t('Valentine_23'),
            status: (this.state & 1) === 1,
            count: 20,
            onClick: this.checkRegister,
          },
          {
            title: this.$t('Valentine_20'),
            status: (this.state & 2) === 2,
            count: 20,
            onClick: this.toggleShowSubmitName,
          },
          {
            title: this.$t('Valentine_21'),
            status: (this.state & 4) === 4,
            count: 20,
            onClick: this.toggleShowSubmitLink,
          },
          {
            title: this.$t('Valentine_22'),
            status: (this.state & 8) === 8,
            count: 20,
            describe: Common.isMobile() ? this.$t('Valentine_65') : null,
            onClick: this.toBot,
          },
          {
            title: this.$t('Valentine_24'),
            status: (this.state & 16) === 16,
            count: 20,
            onClick: this.openMomoverse,
          },
        ];
      },
      invitationAmount() {
        const data = this.eventTask.find(item => item.id === 1);
        return data.amount;
      }
    },
    methods: {
      setSize() {
        const screenWidth = document.documentElement.clientWidth;
        const fontSize = screenWidth / 1280;
        document.documentElement.style.fontSize = `${fontSize}px`;
      },
      // 初始化
      async init() {
        if (this.address) {
          try {
            await this.loop();
          } catch(_) {}
        }
      },
      // 链接钱包
      async connectWallet() {
        return new Promise(async (resolve) => {
          const provider = window.bitkeep.ethereum;

          if (provider) {
            // 请求地址
            const res = await provider.request({
              method: "eth_requestAccounts",
            });

            this.address = res[0];
            // 监听地址变化
            provider.on('accountsChanged', this.accountsChanged);
            // 获取用户数据
            await this.init();
            resolve();
          } else {
            this.showNotify(this.$t('Valentine_45'), 'error');
          }
        });
      },
      // 钱包账号变化
      accountsChanged(accounts) {
        this.address = accounts[0];
        // 清除缓存
        clearCache();
        // 初始化数据
        this.init();
      },
      // 获取状态
      async getStatus() {
        try {
          const { data } = await getStatus(this.address);
          this.state = data.state;
        } catch(_) {}
      },
      // 切换提交名称显示弹窗
      toggleShowSubmitName() {
        this.isShowSubmitName = !this.isShowSubmitName;
      },
      // 切换提交连接显示
      toggleShowSubmitLink() {
        this.isShowSubmitLink = !this.isShowSubmitLink;
      },
      // 提交名称
      async submitName() {
        if (this.twitterName) {
          try {
            await this.checkRegister();
            await submitName(this.twitterName);
            this.toggleShowSubmitName();
            this.getStatus();
          } catch(error) {
            this.showNotify(this.$t(`Valentine_${error?.code}`), "error");
          }
        }
      },
      // 提交连接
      async submitLink() {
        if (this.link) {
          try {
            await this.checkRegister();
            await submitLink(this.link);
            this.toggleShowSubmitLink();
            this.getStatus();
          } catch(error) {
            this.showNotify(this.$t(`Valentine_${error.code}`), "error");
          }
        }
      },
      // 获取数量
      async getMohearts() {
        try {
          this.mohearts = await getMohearts(this.address);
        } catch(_) {}
      },
      // 每日任务
      async getDailyTasks() {
        const res = await getDailyTasks(this.address);

        const data = res.data.reduce((data, item) => {
          return {
            ...data,
            [item.taskId]: item,
          };
        }, {});

        this.dailyTask.forEach((item) => {
          if (data[item.id]) {
            item.status = data[item.id].state != 0;
          }
        });
      },
      // 事件任务
      async getEventTasks() {
        const res = await getEventTasks(this.address);

        const data = res.data.reduce((data, item) => {
          return {
            ...data,
            [item.taskId]: item,
          };
        }, {});

        this.eventTask.forEach((item) => {
          if (data[item.id]) {
            item.status = data[item.id].state != 0;
            item.amount = data[item.id].amt;
          }
        });
      },
      // 轮训
      async loop() {
        if (this.address) {
          clearTimeout(this.timeout);

          try {
            await Promise.all([
              this.getStatus(),
              this.getMohearts(),
              this.getDailyTasks(),
              this.getEventTasks(),
            ]);
          } catch(_) {
          }

          this.timeout = setTimeout(this.loop, 10000);
        }
      },
      // 跳转下载钱包页面
      toDownloadWallet() {
        const link = 'https://rebrand.ly/tw-mobox';

        if (Common.isMobile()) {
          window.location.href = link;
          return;
        }

        window.open();
      },
      // 检测注册状态
      async checkRegister() {
        if (!this.address) {
          await this.connectWallet();
        }

        if ((this.state & 1) !== 1) {
          const { source } = this.$route.query;
          await register(source);
          // 刷新用户数据
          this.init();
        }
      },
      async openMomoverse() {
        try {
          await this.checkRegister();
          const link = Common.isMobile() ? 'https://www.mobox.io/momoverse?channel=trust-wallet' : 'https://www.mobox.io/#/iframe/momoverse?channel=trust-wallet';
          window.open(link);
        } catch(_) {}
      },
      async openMomoFarm() {
        try {
          await this.checkRegister();
          const link = Common.isMobile() ? 'https://www.mobox.io/momo/' : 'https://www.mobox.io/#/iframe/momo';
          window.open(link);
        } catch(_) {}
      },
      async toBot() {
        if (Common.isMobile()) {
          this.showNotify(this.$t('Valentine_65'), 'error');
          return;
        }

        await this.checkRegister();
        window.open('https://t.me/MOBOX_Verify_bot');
      },
      async toggleShowInvitation() {
        // if (!this.isShowInvitation) {
        //   await this.checkRegister();
        // }

        this.isShowInvitation = !this.isShowInvitation;
      },
      toggleShowRecords() {
        this.isShowRecords = !this.isShowRecords;
      },
      // 导航滚动
      scrollIntoView(id) {
        const element = document.querySelector(`#${id}`);

        window.scrollTo({
          top: element.offsetTop - (window.innerHeight / 3),
          behavior: 'smooth'
        });
      },
      // 窗口滚动
      onScroll() {
        const ids = ['rewards', 'social-tasks', 'spin-box', 'daily-tasks', 'event-tasks', 'event-introduction'];
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop === 0) {
          this.activeIndex = 0;
          return;
        } else if (scrollTop + window.innerHeight === document.body.clientHeight) {
          this.activeIndex = ids.length - 1;
          return;
        }

        for (let index = 0; index < ids.length; index++) {
          const id = ids[index];
          const dom = document.querySelector(`#${id}`);

          if (dom.getBoundingClientRect().top >= window.innerHeight / 2) {
            this.activeIndex = index - 1;
            return;
          }
        }
      },
    },
    created() {
      window.addEventListener('resize', this.setSize);
      window.addEventListener('scroll', this.onScroll);
      this.setSize();
      this.$nextTick(this.onScroll);
    },
    beforeDestroy() {
      clearTimeout(this.timeout);
      window.removeEventListener('resize', this.setSize);
      window.removeEventListener('scroll', this.onScroll);
    }
  };
</script>

<style lang="less" scoped>
  .page {
    background-color: #F4C7C2;
    min-width: 100%;
    color: #9C5458;
    position: relative;
    padding-bottom: 180rem;

    /deep/ ul {
      list-style: none;
    }

    /deep/ img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    /deep/ * {
      transition: none;
      font-family: "Poppins-bold";
    }

    /deep/ .item-container {
      background: rgba(246, 215, 212, 0.5);
    }
  }

  .side-menu {
    position: fixed;
    left: 27rem;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);

    li {
      display: flex;
      align-items: center;
      overflow: hidden;
      font-size: 15rem;
      font-weight: bold;
      color: #BE484F;
      line-height: 35rem;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity .3s;
    }

    img {
      width: 13rem;
      transform: translateX(-100%);
      opacity: 0;
      transition: transform .3s, opacity .3s;
    }

    span {
      padding-left: 5rem;
    }

    li:hover,
    .active {
      opacity: 1;
    }

    .active {
      img {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    transform: rotateY(180deg) rotateX(180deg);
    z-index: 0;
  }

  .name-input {
    background: rgba(242, 199, 195, .5);

    input {
      width: 100%;
      box-sizing: border-box;
      outline: none;
      border: none;
      background: #F9E5E4;
      font-weight: 500;
      color: #CB8F88;
    }

    .links {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        color: #214E8F !important;
      }
    }
  }

  .describe {
    color: #214E8F;
    text-align: center;
    font-weight: bold;
  }

  .tip {
    text-align: center;
    font-weight: bold;
  }

  @media(min-width: 1024px) {
    /deep/ .item-container {
      width: 614rem;
      margin: 24rem auto 0 auto;
      border-radius: 16rem;
    }

    .footer-image {
      width: 260rem;
      position: absolute;
      right: 0;
      bottom: 170rem;
    }

    .name-input {
      margin-top: 20rem;
      margin-bottom: 10rem;
      padding: 34rem 19rem 20rem 19rem;
      border-radius: 9rem;

      input {
        padding: 0 10rem;
        height: 31rem;
        border-radius: 5rem;
        font-size: 12rem;
      }

      .links {
        margin-top: 20rem;

        a {
          font-size: 10rem;
          padding: 0 10rem;

          &:hover {
            text-decoration: revert;
          }
        }
      }
    }

    .describe {
      font-size: 13rem;
      margin-top: 30rem;
    }

    .tip {
      font-size: 13rem;
      padding: 20rem 0;
    }

    .invitation-dialog {
      /deep/.content {
        width: 380rem;
      }
    }
  }

  @media(max-width: 1024px) {
    .side-menu {
      display: none;
    }

    /deep/ .item-container {
      width: 1214rem;
      margin: 73rem auto 0 auto;
      border-radius: 35rem;
    }

    .footer-image {
      width: 958rem;
      margin: 50rem auto 0 auto;
    }

    .name-input {
      margin-top: 50rem;
      margin-bottom: 40rem;
      padding: 34rem 19rem;
      border-radius: 9rem;

      input {
        padding: 0 20rem;
        height: 100rem;
        border-radius: 18rem;
        font-size: 12px;
      }

      .links {
        margin-top: 50rem;

        a {
          padding: 0 20rem;
          font-size: 12px;
        }
      }
    }

    .describe {
      font-size: 12px;
      margin-top: 50rem;
    }

    .tip {
      font-size: 12px;
      padding: 50rem 0;
    }

    .records,
    .link-dialog,
    .invitation-dialog {
      /deep/.content {
        width: 90%;
      }
    }
  }
</style>
return null;
console.log('Debug: feat: introduce in-game tutorial system');
