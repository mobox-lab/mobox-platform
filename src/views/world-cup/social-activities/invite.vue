<template>
<div class="invite">
  <div class="icon">
    <img src="@/assets/world-cup/moball-3.png" />
  </div>
  <div class="title">{{$t('Coinbase_11')}}</div>
  <div class="container">
    <p class="text" v-html="tip"></p>
    <div class="link">
      <p>{{link}}</p>
      <div class="copy" @click="copy">{{$t('Worldcup_38')}}</div>
    </div>
    <ul class="statistics">
      <li>
        <img src="@/assets/world-cup/friends.png" />
        <p v-html="friends"></p>
      </li>
      <li>
        <img src="@/assets/world-cup/multiplier.png" />
        <p v-html="multiplier"></p>
      </li>
    </ul>
  </div>
  <div class="tip">
    <img src="@/assets/world-cup/tip-2.png" />
    <span v-html="$t('Worldcup_88')"></span>
  </div>
</div>
</template>

<script>
import { CommonMethod } from "@/mixin";
import { Common } from "@/utils";
import { mapState } from "vuex";

export default {
  mixins: [ CommonMethod ],
  computed: {
    ...mapState({
      address: (state) => state.worldCupState.address,
      inviteTask: (state) => state.worldCupState.socialChallenges[1],
    }),
    link() {
      return `${window.origin}/#/world-cup?source=${this.address}`;
    },
    count() {
      return Math.floor((this.inviteTask?.amt ?? 0) / 3) * 100;
    },
    tip() {
      return this.$t('Worldcup_35')
      .replace('#0#', '<text style="color: #f1b909">3</text>')
      .replace('#1#', '<text style="color: #f1b909">100</text>');
    },
    friends() {
      return this.$t('Worldcup_36')
        .replace('#0#', `<text style="color: #ffffff">${this.inviteTask?.amt ?? 0}</text>`);
    },
    multiplier() {
      return this.$t('Worldcup_37')
        .replace('#0#', `<text style="color: #ffffff">${this.count}</text>`);
    },
  },
  methods: {
    copy() {
      Common.copyTextBoard(this.link);
      this.showNotify(this.$t('Chat_29'), "success");
    }
  },
};
</script>

<style lang="less" scoped>
.invite {
  background-color: #0A1F30;
  background-image: url('~@/assets/world-cup/invite-background.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  box-sizing: border-box;
  position: relative;

  .icon {
    position: absolute;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }
}

.title {
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
  font-family: Poppins-Bold;
}

.container {
  background: rgba(6, 18, 29, .7);

  .text {
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
  }

  .link,
  .statistics {
    display: flex;
    align-items: center;
    background: rgba(15, 42, 61, .7);
  }

  .link {
    p {
      flex: 1;
      min-width: 0;
      font-weight: 400;
      color: #FFFFFF;
      padding-right: 50rem;
      word-break: break-all;
    }

    .copy {
      background: #7CB0D3;
      font-weight: bold;
      color: #081725;
      line-height: 1;
      cursor: pointer;
      font-family: poppins-bold;
      
      &:hover {
        opacity: .7;
      }
    }
  }

  .statistics {
    li {
      flex: 1;
      display: flex;
      align-items: center;

      p {
        font-weight: bold;
        color: #7CB0D3;
        line-height: 1;
      }

      span {
        color: #ffffff;
      }
    }
  }
}

.tip {
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  span {
    font-weight: 400;
    color: #6F8A9C;
    line-height: 1;
    margin-left: 12rem;
    text-align: left;
  }
}

@media (min-width: 960px) {
  .invite {
    width: 978rem;
    padding: 104rem 42rem 45rem 42rem;
  }

  .title {
    font-size: 47rem;
  }

  .icon {
    width: 236rem;
    top: 30rem;
    left: 35rem;
  }

  .container {
    border-radius: 16rem;
    padding: 53rem 33rem 32rem 33rem;
    margin-top: 37rem;

    .text {
      font-size: 26rem;

      span {
        font-size: 36rem;
      }
    }
  }

  .link,
  .statistics {
    padding-left: 55rem;
    padding-right: 23rem;
    border-radius: 16rem;
  }

  .link {
    margin-top: 34rem;
    margin-bottom: 20rem;

    p {
      font-size: 18rem;
      padding: 20rem 0;
    }

    .copy {
      padding: 13rem 17rem;
      border-radius: 9rem;
      font-size: 20rem;
    }
  }

  .statistics {
    height: 63rem;

    li {
      img {
        width: 25rem;
        margin-right: 15rem;
      }

      p {
        font-size: 26rem;
      }
    }
  }

  .tip {
    img {
      width: 31rem;
    }

    span {
      font-size: 24rem;
      margin-left: 12rem;
    }
  }
}

@media (max-width: 960px) {
  .invite {
    padding: 120rem 80rem 70rem 80rem;
    width: 96vw;
  }

  .title {
    font-size: 100rem;
  }

  .icon {
    width: 400rem;
    top: 30rem;
    left: 300rem;
  }

  .container {
    border-radius: 16rem;
    padding: 120rem 100rem 100rem 100rem;
    margin-top: 150rem;

    .text {
      font-size: 86rem;

      span {
        font-size: 36rem;
      }
    }
  }

  .link,
  .statistics {
    padding: 0 100rem;
    border-radius: 40rem;
  }

  .link {
    margin-top: 80rem;
    margin-bottom: 60rem;

    p {
      font-size: 80rem;
      padding: 50rem 0;
      margin-right: 10rem;
    }

    .copy {
      padding: 50rem 80rem;
      border-radius: 20rem;
      font-size: 80rem;
    }
  }

  .statistics {
    height: 300rem;

    li {
      img {
        width: 90rem;
        margin-right: 35rem;
      }

      p {
        font-size: 80rem;
      }
    }
  }

  .tip {
    img {
      width: 120rem;
    }

    span {
      font-size: 14px;
      margin-left: 12px;
    }
  }
}
</style>
