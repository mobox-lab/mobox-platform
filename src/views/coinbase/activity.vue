// <template>
//     <h5 class="title">{{$t('CoinbaselootBrasil_40')}}</h5>
//     <!-- 时间 -->
//     <div class="time">
      <li>
        <span>{{times.days}}</span>
        <p>{{$t('CoinbaselootBrasil_27')}}</p>
      </li>
      <li>
        <span>{{times.hours}}</span>
        <p>{{$t('CoinbaselootBrasil_28')}}</p>
      </li>
      <li>
        <span>{{times.minutes}}</span>
        <p>{{$t('CoinbaselootBrasil_29')}}</p>
      </li>
      <li>
        <span>{{times.seconds}}</span>
        <p>{{$t('CoinbaselootBrasil_30')}}</p>
      </li>
    </div>
    <!-- tab -->
    <ul class="tab-bar">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        :class="{active: tabIndex == index}"
        @click="tabChange(index)"
      >{{$t(item)}}</li>
    </ul>
    <!-- tab内容 -->
    <ul class="tab-body">
      <transition name="fade-in">
        <li v-if="tabIndex == 0" key="0">
          <Task :title="$t('CoinbaselootBrasil_19')" @click.native="register" :status="(state & 1) === 1" />
          <Task :title="$t('CoinbaselootBrasil_5')" :status="(state & 2) === 2">
            <div class="footer-button">
              <Button type="green" @click="toLink('https://twitter.com/CoinbaseWallet?s=20')">{{$t('CoinbaselootBrasil_6')}} <img class="coinbase" src="@/assets/wallet-icon/coinbase.svg" /></Button>
              <Button type="green" @click="toLink('https://twitter.com/MOBOX_Official')">{{$t('CoinbaselootBrasil_6')}} <img class="mobox" src="@/assets/logo.png" /></Button>
              <Button type="yellow" @click="toggleShowSubmitName">{{$t('CoinbaselootBrasil_7')}}</Button>
            </div>
          </Task>
          <Task :title="$t('CoinbaselootBrasil_10')" :status="(state & 4) === 4">
            <div class="footer-button">
              <Button type="green" @click="toLink('https://twitter.com/mobox_official/status/1638723473551007744?s=46&t=ff6RPFYIn_YwEfiOZ7rb7w')">
                <img class="twitter" src="@/assets/footer/twitter.png" />
                {{$t('CoinbaselootBrasil_18')}}
              </Button>
              <Button type="yellow" @click="toggleShowSubmitLink">{{$t('CoinbaselootBrasil_7')}}</Button>
            </div>
          </Task>
          <Task :title="$t('CoinbaselootBrasil_13')" :status="(state & 8) === 8">
            <div class="footer-button">
              <Button type="green" @click="toBot">
                <img class="telegram" src="@/assets/index/telegram.webp" />
                Telegram</Button>
              <Button type="yellow" @click="verificationBot">{{$t('CoinbaselootBrasil_7')}}</Button>
            </div>
          </Task>
          <Task :title="$t('CoinbaselootBrasil_20')" :status="(state & 16) === 16" @click.native="openMomoverse" />
        </li>
        <li v-else-if="tabIndex == 1" key="1">
          <Task :title="$t('CoinbaselootBrasil_21')" :status="(tasksState & 1) === 1" :reward="require('@/assets/coinbase/treasure.png')" @click.native="toGameTask" />
          <Task :title="$t('CoinbaselootBrasil_22')" :status="(tasksState & 2) === 2" :reward="require('@/assets/coinbase/ball4.png')" @click.native="toGameTask" />
          <Task :title="$t('CoinbaselootBrasil_23')" :status="(tasksState & 4) === 4" :reward="require('@/assets/coinbase/flower1.png')" @click.native="toGameTask" />
        </li>
        <li v-else-if="tabIndex == 2" key="2">
          <p class="introduction">
            <span>Você está pronto? Brasil!</span>
Bem-vindo ao "Coinbase Loot MOBOX Cripto Carnaval Brasil". MOBOX, o principal dApp para jogos da Binance Smart Chain (BNB), está mais uma vez em parceria com a Coinbase Wallet no Brasil para um incrível e empolgante evento Coinbase Loot para celebrar o lançamento da Coinbase no Brasil.
<span>Recompensas</span>
A extravagância de cinco dias, que acontecerá de 22 a 26 de março, premiará 2,000 Avatares com temas brasileiros para os primeiros 2,000 jogadores a participar. Durante o evento, a MOBOX apresentará sua plataforma de jogos, bem como o impressionante MOMOverse. Este é um mundo de jogo que permite aos jogadores explorar um mundo virtual e completar missões para ganhar recompensas. O MOMOverse tem uma variedade de jogos e desafios que você pode usar sua carteira Coinbase para explorar o MOMOVerse em profundidade. Aja, conclua a tarefa e ganhe as recompensas da edição limitada!<br />

<span>Avatares temáticos do Brasil</span>
O MOBOX Avatar é um NFT especial que permite aos jogadores personalizar seu personagem do jogo MOBOX. Um total de 2,000 Avatares MOBOX serão enviados para os usuários que concluírem as tarefas de qualificação durante o evento.<br /><br />
Todo esse evento visa criar uma experiência empolgante e envolvente para todos os envolvidos e mostrar ao mundo o que é possível quando você combina o poder do blockchain com a magia dos jogos.</p>
        </li>
      </transition>
    </ul>
    <!-- 提交名称 -->
    <Dialog v-model="isShowSubmitName">
      <DialogContainer @confirm="submitName" @close="toggleShowSubmitName">
        <div class="dialog-form">
          <div class="title">
            <img src="@/assets/coinbase/twitter.png" />
            <span>{{$t('CoinbaselootBrasil_8')}}</span>
          </div>
          <div class="input">
            <input type="text" :placeholder="$t('CoinbaselootBrasil_9')" autofocus v-model="twitterName" />
          </div>
        </div>
        <template slot="footer">{{$t('CoinbaselootBrasil_7')}}</template>
      </DialogContainer>
    </Dialog>
    <!-- 提交连接 -->
    <Dialog v-model="isShowSubmitLink">
      <DialogContainer @confirm="submitLink" @close="toggleShowSubmitLink">
        <div class="dialog-form">
          <div class="title">
            <img src="@/assets/coinbase/twitter.png" />
            <span>{{$t('CoinbaselootBrasil_11')}}</span>
          </div>
          <div class="input">
            <div class="icon">
              <img src="@/assets/coinbase/link.png" />
            </div>
            <input type="text" :placeholder="$t('CoinbaselootBrasil_12')" autofocus v-model="link" />
          </div>
        </div>
        <template slot="footer">{{$t('CoinbaselootBrasil_7')}}</template>
      </DialogContainer>
    </Dialog>
    <!-- 社交任务未完成提示 -->
    <Dialog v-model="isShowUnfinished">
      <DialogContainer @confirm="toggleShowUnfinished" @close="toggleShowUnfinished">
        <div class="tip">
          <p v-html="$t('CoinbaselootBrasil_42')"></p>
        </div>
        <template slot="footer">{{$t('CoinbaselootBrasil_7')}}</template>
      </DialogContainer>
    </Dialog>
    <!-- 下一步弹窗 -->
    <Dialog v-model="isShowNext">
      <DialogContainer @confirm="toNextTab" @close="toggleShowNext">
        <div class="tip">
          <p v-html="nextTip"></p>
        </div>
        <template slot="footer">Confirme</template>
      </DialogContainer>
    </Dialog>
    <!-- 机器人验证弹窗 -->
    <Dialog v-model="isShowoBotTip">
      <DialogContainer @confirm="toggleShowBotTip" @close="toggleShowBotTip">
        <div class="tip">
          <p>{{$t('CoinbaselootBrasil_39')}}</p>
        </div>
        <template slot="footer">{{$t('CoinbaselootBrasil_7')}}</template>
      </DialogContainer>
    </Dialog>
    <!-- 验证弹窗提示 -->
    <Dialog v-model="isShowoVerifyBotTip">
      <DialogContainer @confirm="toggleShowoVerifyBotTip" @close="toggleShowoVerifyBotTip">
        <div class="tip">
          <p>{{$t('CoinbaselootBrasil_39')}}</p>
        </div>
        <template slot="footer">{{$t('CoinbaselootBrasil_7')}}</template>
      </DialogContainer>
    </Dialog>
  </div>
</template>

<script>
  export Task from './task.vue';
  export Button from './button.vue';
  export Dialog from './dialog.vue';
  export DialogContainer from './dialog-container.vue';
  export { CommonMethod } from '@/mixin';
  export { Common } from '@/utils/';
  export { register, getStatus, submitLink, submitName, getTaskStatus } from '@/utils/coinbase';

  export default {
    mixins: [CommonMethod],
    components: {
      Task,
      Button,
      Dialog,
      DialogContainer,
    },
    data() {
      return {
        // 下一步提示
        nextTip: 'Sim! Você está qualificado para reivindicar seu MOBOX Avatar!<br/><br/>Acesse o MOMOverse, abra o Avatar BOX e conclua as tarefas do jogo para receber outras recompensas.',
        // 钱包地址
        address: null,
        // 下一步
        isShowNext: false,
        // 绑定昵称
        isShowSubmitName: false,
        // 绑定连接
        isShowSubmitLink: false,
        // 机器人验证提示
        isShowoBotTip: false,
        // 验证机器人提示
        isShowoVerifyBotTip: false,
        // 昵称
        twitterName: '',
        // 连接
        link: '',
        // 计时器
        timer: null,
        // 活动任务未完成弹窗
        isShowUnfinished: false,
        // 轮训计时器
        timeout: null,
        // 活动结束时间
        endTime: 1679882400000,
        // 时间
        times: {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        },
        tabs: [
          'CoinbaselootBrasil_4',
          'CoinbaselootBrasil_41',
          'CoinbaselootBrasil_15',
        ],
        // 当前tab
        tabIndex: 0,
        // 状态
        state: 0,
        // 任务状态
        tasksState: 0,
      };
    },
    methods: {
      // 连接钱包
      async connectWallet() {
        const provider = window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);

        if (!provider) {
          this.$parent.isShowInstallTip = true;
          return;
        }

        // 监听地址变化
        provider.on('accountsChanged', this.accountsChanged);

        await provider.enable();
        // 切换链
        await provider.send('wallet_switchEthereumChain', [{ chainId: '0x38' }]);
        // 获取地址
        const accounts = await window.ethereum?.request({
          method: "eth_requestAccounts",
        });

        this.address = accounts[0];
        // 轮训用户数据
        this.loop();
      },
      // 地址变化
      accountsChanged(accounts) {
        this.address = accounts[0];
        // 初始化数据
        this.loop();
      },
      // 切换验证提示弹窗
      toggleShowoVerifyBotTip() {
        this.isShowoVerifyBotTip = !this.isShowoVerifyBotTip;
      },
      // tab切换
      tabChange(index) {
        this.tabIndex = index;
      },
       // 切换提交名称显示弹窗
      toggleShowSubmitName() {
        this.isShowSubmitName = !this.isShowSubmitName;
      },
      // 切换提交连接显示
      toggleShowSubmitLink() {
        this.isShowSubmitLink = !this.isShowSubmitLink;
      },
      // 切换机器人验证提示
      toggleShowBotTip() {
        this.isShowoBotTip = !this.isShowoBotTip;
      },
      // 切换显示活动任务提示
      toggleShowUnfinished() {
        this.isShowUnfinished = !this.isShowUnfinished;
      },
      // 结束倒计时
      countDown() {
        const time = this.endTime - Date.now();

        if (time > 0) {
          const days = parseInt(time / (1000 * 60 * 60 * 24));
          const hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = parseInt((time % (1000 * 60)) / 1000);

          this.times = {
            days: this.addZero(days),
            hours: this.addZero(hours),
            minutes: this.addZero(minutes),
            seconds: this.addZero(seconds),
          };
        } else {
          this.times = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
          };

          clearInterval(this.timer);
        }
      },
      addZero(value) {
        return value < 10 ? "0" + value : value;
      },
      // 轮训
      async loop() {
        if (this.address) {
          clearTimeout(this.timeout);

          try {
            await Promise.all([
              this.getStatus(),
              this.getTaskStatus(),
            ]);
          } catch(_) {
          }

          this.timeout = setTimeout(this.loop, 10000);
        }
      },
      // 获取状态
      async getStatus() {
        try {
          const { data } = await getStatus(this.address);
          this.state = data.state;
        } catch(_) {}
      },
      // 获取任务状态
      async getTaskStatus() {
        const { data } = await getTaskStatus(this.address);
        this.tasksState = data.state;
      },
      // 提交名称
      async submitName() {
        if (this.twitterName.trim()) {
          try {
            await this.checkRegister();
            await submitName(this.twitterName);
            this.toggleShowSubmitName();
            this.getStatus();
          } catch(error) {
            this.showNotify(this.$t(`CoinbaselootBrasil_${error?.code}`), "error");
          }
        }
      },
      // 注册
      async register() {
        try {
          await this.checkRegister();
        } catch(error) {
          this.showNotify(this.$t(`CoinbaselootBrasil_${error?.code}`), "error");
        }
      },
      // 提交连接
      async submitLink() {
        if (this.link.trim()) {
          try {
            await this.checkRegister();
            await submitLink(this.link);
            this.toggleShowSubmitLink();
            this.getStatus();
          } catch(error) {
            this.showNotify(this.$t(`CoinbaselootBrasil_${error?.code}`), "error");
          }
        }
      },
      // 下一步
      toNextTab() {
        this.tabIndex = 1;
        this.toggleShowNext();
      },
      // 切换下一步弹窗显示
      toggleShowNext() {
        this.isShowNext = !this.isShowNext;
      },
      // 检测注册状态
      async checkRegister() {
        if (!this.address) {
          await this.connectWallet();
        }

        if ((this.state & 1) !== 1) {
          await register();
          await this.loop();
        }
      },
      // 打开momoverse
      async openMomoverse() {
        try {
          // await this.checkRegister();
          const link = Common.isMobile() ? 'https://www.mobox.io/momoverse?channel=coinbase-wallet' : 'https://www.mobox.io/#/iframe/momoverse?channel=coinbase-wallet';
          window.open(link);
        } catch(error) {
          this.showNotify(this.$t(`CoinbaselootBrasil_${error?.code}`), "error");
        }
      },
      // 打开链接
      toLink(link) {
        window.open(link);
      },
      // 跳转机器人验证
      async toBot() {
        try {
          await this.checkRegister();
          window.open('https://t.me/Mobox_Br');
        } catch(error) {
          this.showNotify(this.$t(`CoinbaselootBrasil_${error?.code}`), "error");
        }
      },
      // 验证
      async verificationBot() {
        try {
          await this.checkRegister();
          window.open('https://t.me/MOBOX_Verify_bot');
        } catch(error) {
          this.showNotify(this.$t(`CoinbaselootBrasil_${error?.code}`), "error");
        }
      },
      // 跳转游戏任务
      toGameTask() {
        if (this.isCompleteActivityTask) {
          this.openMomoverse();
          return;
        }

        this.showNotify("Conclua todas as tarefas de 'Critérios do evento' primeiro", "error");
      }
    },
    computed: {
      // 是否完成活动任务
      isCompleteActivityTask() {
        const state = this.state;
        return (state & 1) === 1 && (state & 2) === 2 && (state & 4) === 4 && (state & 8) === 8 && (state & 16) === 16;
      },
    },
    async created() {
      this.timer = setInterval(this.countDown, 1000);

      try {
        await this.connectWallet();
        await this.getStatus();

        if (this.isCompleteActivityTask) {
          this.toggleShowNext();
        }
      } catch(_) {}
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  };
</script>

<style lang="less" scoped>
  .activity {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(../../assets/coinbase/active-bg.png);
    background-repeat: no-repeat;
    background-position: top 5rem right;
  }

  .title {
    font-weight: bold;
    color: #94DB73;
    line-height: 1;
    text-align: center;
  }

  .time {
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      text-align: center;
    }

    span {
      font-weight: 900;
      color: #94DB73;
      line-height: 1;
    }

    p {
      font-weight: bold;
      font-family: none;
      font-weight: 400;
      color: #94DB73;
      line-height: 1;
      opacity: 0.3;
    }
  }

  .tab-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #3C7621;

    li {
      font-weight: 900;
      color: #94DB73;
      line-height: 1;
      position: relative;
      cursor: pointer;

      &:hover {
        color: #94DB73;
      }

      &::after {
        content: '';
        display: block;
        background: #94DB73;
        position: absolute;
        left: 50%;
        transition: transform .3s;
        transform: scaleX(0);
      }
    }

    .active {
      color: #94DB73;

      &::after {
        transform: scaleX(1);
      }
    }
  }

  .tab-body {
    width: 100%;
    position: relative;
  }

  // 简介
  .introduction {
    font-family: none;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.05);

    span {
      display: block;
      font-weight: 600;
    }
  }

  .footer-button {
    img {
      display: inline-block;
    }

    /deep/.button {
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .dialog-form {
    .title {
      display: flex;
      align-items: center;

      span {
        font-weight: 400;
        color: #94DB73;
      }
    }

    .input {
      display: flex;
      background: #1A4904;
      margin: 0 auto;
      box-sizing: border-box;
      position: relative;

      .icon {
        display: flex;
        align-items: center;
        z-index: 1;
      }

      input {
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        background: none;
        color: #ffffff;
      }
    }
  }

  .tip {
    h5,
    p {
      text-align: center;
      font-weight: bold;
      color: #94DB73;
    }
  }

  @media(min-width: 1024px) {
    .activity {
      background-size: 264rem 264rem;
      padding: 76rem 81rem 0 81rem;
    }

    .title {
      font-size: 24rem;
    }

    .time {
      width: 386rem;
      height: 76rem;
      margin-top: 10rem;
      border-radius: 18rem;

      li {
        width: 80rem;
      }

      span {
        font-size: 33rem;
      }

      p {
        font-size: 13rem;
        margin-top: 5rem;
      }
    }

    .tab-bar {
      margin-top: 40rem;
      margin-bottom: 19rem;

      li {
        font-size: 15rem;
        padding: 0 14rem 12rem 14rem;

        &::after {
          width: 60rem;
          height: 4rem;
          border-radius: 2rem;
          bottom: -2rem;
          margin-left: -30rem;
        }
      }
    }

    .tab-body {
      flex: 1;

      li {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 45rem;
        left: 0;
        overflow-y: auto;
        overflow-x: hidden;
        overscroll-behavior: contain;
        -ms-scroll-chaining: contain;
      }
    }

    .introduction {
      font-size: 11rem;
      line-height: 22rem;
      padding: 14rem 51rem;
      border-radius: 8px;

      span {
        font-size: 15rem;
        margin-bottom: 3rem;
        margin-top: 15rem;
      }
    }

    .footer-button {
      padding: 15rem 0 19rem 32rem;

      img {
        margin-left: 5rem;
      }

      .mobox {
        width: 25rem;
      }

      .telegram {
        width: 15rem;
        margin-right: 5rem;
      }

      .twitter {
        width: 23rem;
      }

      .coinbase {
        width: 16rem;
      }

      /deep/.button {
        margin-right: 39rem;
      }
    }

    .dialog-form {
      padding-bottom: 38rem;

      .title {
        padding: 17rem 12rem 30rem 12rem;

        img {
          width: 20rem;
        }

        span {
          font-size: 14rem;
          margin-left: 10rem;
        }
      }

      .input {
        width: 279rem;
        height: 30rem;
        border-radius: 6rem;
        padding: 0 10rem;

        .icon {
          width: 13rem;
          margin-right: 8rem;
        }

        input {
          font-size: 10rem;
        }
      }
    }

    .tip {
      padding: 30rem;

      h5 {
        font-size: 24rem;
        margin-bottom: 5rem;
      }

      p {
        font-size: 14rem;
      }
    }

    .fade-in-enter-active,
    .fade-in-leave-active {
      transition: all .5s !exportant;
    }

    .fade-in-enter,
    .fade-in-leave-to {
      position: absolute;
      top: 0;
      opacity: 0;
      transform: translateY(200px);
    }
  }

  @media(max-width: 1024px) {
    .activity {
      background-size: 600rem 600rem;
      padding: 200rem 80rem 0 80rem;
    }

    .title {
      font-size: 60rem;
    }

    .time {
      padding: 0 30rem;
      height: 180rem;
      margin-top: 35rem;
      border-radius: 38rem;

      li {
        width: 200rem;
      }

      span {
        font-size: 60rem;
      }

      p {
        font-size: 40rem;
        margin-top: 3rem;
      }
    }

    .tab-bar {
      margin-top: 120rem;
      margin-bottom: 50rem;

      li {
        font-size: 42rem;
        padding: 0 35rem 26rem 35rem;

        &::after {
          width: 200rem;
          height: 16rem;
          border-radius: 6rem;
          bottom: -8rem;
          margin-left: -100rem;
        }
      }
    }

    .introduction {
      font-size: 45rem;
      line-height: 1.4;
      padding: 30rem 60rem;
      border-radius: 16px;

      span {
        font-size: 50rem;
        margin-bottom: 20rem;
        margin-top: 60rem;
      }
    }

    .footer-button {
      padding: 30rem 0 40rem 52rem;

      img {
        margin-left: 10rem;
      }

      .mobox {
        width: 70rem;
      }

      .telegram {
        width: 50rem;
        margin-right: 20rem;
      }

      .twitter {
        width: 75rem;
      }

      .coinbase {
        width: 60rem;
      }

      /deep/.button {
        margin-right: 39rem;
      }
    }

    .dialog-form {
      padding-bottom: 60rem;

      .title {
        padding: 80rem 60rem 60rem 60rem;

        img {
          width: 100rem;
        }

        span {
          font-size: 16px;
          margin-left: 40rem;
        }
      }

      .input {
        margin: 0 60rem;
        height: 140rem;
        border-radius: 20rem;
        padding: 0 50rem;

        .icon {
          width: 60rem;
          margin-right: 30rem;
        }

        input {
          font-size: 14px;
        }
      }
    }

    .tip {
      padding: 80rem 60rem;

      h5 {
        font-size: 70rem;
        margin-bottom: 10rem;
      }

      p {
        font-size: 40rem;
      }
    }

    .fade-in-enter-active,
    .fade-in-leave-active {
      transition: all .5s !exportant;
    }

    .fade-in-enter,
    .fade-in-leave-to {
      position: absolute;
      top: 0;
      opacity: 0;
      transform: translateX(100px);
    }
  }
</style>
