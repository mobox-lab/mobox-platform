<template>
  <layout :title="$t('Worldcup_4')">
    <div class="challenges">
//       <ul class="buttons">
//         <li class="social" @click="showSocial">{{$t('Worldcup_17')}}</li>
//         <li class="game" @click="showGame">{{$t('Worldcup_18')}}</li>
//       </ul>
      <div class="reward">
        <div class="label">
          <img src="@/assets/world-cup/reward.png" >
          <span>{{$t('Worldcup_26')}}:</span>
        </div>
        <ul>
          <li>{{$t('Worldcup_20')}}</li>
          <li>{{$t('Worldcup_21')}}</li>
          <li>{{$t('Worldcup_22')}}</li>
          <li>MBOX x 10,000</li>
          <li>{{$t('Worldcup_23')}}</li>
        </ul>
      </div>
      <img class="image-1" src="@/assets/world-cup/challenges-1.png" >
      <img class="image-2" src="@/assets/world-cup/challenges-2.png" >
    </div>
  </layout>
</template>

<script>
export Layout from "./layout.vue";
export { mapState } from "vuex";

export default {
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      status: (state) => state.worldCupState.status,
    }),
  },
  methods: {
    showSocial() {
      if (this.status === 0) {
        this.$parent.isShowParticipateTip = true;
        return;
      }

      this.$emit('show-social');
    },
    showGame() {
      if (this.status === 0) {
        this.$parent.isShowParticipateTip = true;
        return;
      }

      this.$emit('show-game');
    },
  },
};
</script>

<style lang="less" scoped>
.challenges {
  position: relative;

  .image-1 {
    position: absolute;
    bottom: 0;
    left: -101rem;
  }

  .image-2 {
    position: absolute;
    right: -105rem;
  }
}

.buttons {
  li {
    font-family: poppins-bold;
    font-weight: 900;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
      opacity: .6;
    }
  }

  .social {
    color: #3B530A;
    background: #99E143;
    box-shadow: 0px 5px 0px 0px rgba(59,83,10,0.77);
    margin-bottom: 60rem;
  }

  .game {
    color: #68561E;
    background: #F1B909;
    box-shadow: 0px 5px 0px 0px rgba(104,86,30,0.77);
  }
}

.reward {
  display: flex;
  align-items: center;
  background: rgba(12, 32, 48, .67);
  border-radius: 18px;

  .label,
  ul {
    flex: 1;
    box-sizing: border-box;
  }

  .label {
    span {
      font-family: poppins-bold;
      font-weight: 900;
      color: #6F8A9C;
      line-height: 1;
    }

    img, span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  ul li {
    font-weight: 400;
    line-height: 1.4;
    color: #FFFFFF;
    text-align: left;

    &:first-child {
      color: #FFC201;
    }
  }
}

@media (min-width: 960px) {
  .challenges {
    padding: 100rem 68rem 54rem 68rem;

    .image-1 {
      width: 300rem;
    }

    .image-2 {
      top: -34rem;
      width: 288rem;
    }
  }

  .buttons {
    li {
      width: 620rem;
      height: 90rem;
      line-height: 90rem;
      border-radius: 22rem;
      font-size: 45rem;
    }

    .social {
      margin-bottom: 60rem;
    }
  }

  .reward {
    margin-top: 85rem;
    padding: 31rem 0;

    .label,
    ul {
      flex: 1;
      box-sizing: border-box;
    }

    .label {
      text-align: right;

      img {
        width: 62rem;
      }

      span {
        font-size: 48rem;
        margin-left: 26rem;
        padding-right: 72rem;
      }
    }

    ul li {
      font-size: 24rem;
    }
  }
}

@media (max-width: 960px) {
  .challenges {
    padding: 246rem 280rem 102rem 280rem;

    .image-1 {
      width: 600rem;
    }

    .image-2 {
      top: -300rem;
      width: 390rem;
    }
  }

  .buttons {
    li {
      width: 1773rem;
      height: 291rem;
      line-height: 291rem;
      border-radius: 50rem;
      font-size: 120rem;
    }

    .social {
      margin-bottom: 180rem;
    }
  }

  .reward {
    margin-top: 230rem;
    padding: 200rem;
    flex-direction: column;

    .label {
      text-align: center;
      margin-bottom: 120rem;

      img {
        width: 210rem;
      }

      span {
        font-size: 166rem;
        margin-left: 90rem;
      }
    }

    ul li {
      font-size: 95rem;
    }
  }
}
</style>