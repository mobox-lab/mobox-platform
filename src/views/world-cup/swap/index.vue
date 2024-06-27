<template>
  <layout :title="$t('Worldcup_4')">
//     <div class="slot">
//       <div class="title">{{$t('Worldcup_5')}}</div>
        <img src="@/assets/world-cup/moball.png" >
        <span><i>x</i>{{moball}}</span>
      </div>
      <div class="football">
        <img src="@/assets/world-cup/football.png" >
        <div class="count"><i>x </i>{{football}}</div>
      </div>
      <button class="swap-button" @click="showSwap">{{$t('Worldcup_8')}}</button>
      <p class="describe" v-html="$t('Worldcup_7')"></p>
    </div>
  </layout>
</template>

<script>
export { mapState } from 'vuex';
export Layout from '../layout.vue';

export default {
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      moball: (state) => state.worldCupState.moball,
      football: (state) => state.worldCupState.football,
    }),
  },
  methods: {
    // 兑换
    showSwap() {
      this.$emit('show-swap');
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-family: poppins-bold;
  font-weight: 900;
  color: #B5C4CF;
}

.slot {
  padding: 79rem 68rem 51rem 68rem;
}

.moball {
  span {
    font-family: poppins-bold;
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
  }

  i {
    margin-right: 3px;
    font-style: normal;
  }

  img, span {
    display: inline-block;
    vertical-align: middle;
  }
}

.line {
  background: #0C2030;
  border-radius: 2rem;
  margin: 5rem auto 0 auto;
}

.football {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B5C4CF;

  * {
    font-family: poppins-bold;
  }

  span {
    font-weight: 900;
  }

  img {
    display: inline-block;
  }

  .count {
    font-weight: 900;

    i {
      font-style: normal;
    }
  }
}

.swap-button {
  cursor: pointer;
  background: #99E143;
  box-shadow: 0px 5px 0px 0px rgba(59,83,10,0.77);
  border: none;
  border-radius: 22rem;
  outline: none;
  font-weight: 900;
  color: #3B530A;
  font-family: poppins-bold;

  &:hover {
    opacity: .8;
  }
}

.describe {
  text-align: left;
  background: rgba(12, 32, 48, .67);
  font-weight: 400;
  color: #6F8A9C;
}

@media (min-width: 960px) {
  .title {
    font-size: 36rem;
  }

  .slot {
    padding: 79rem 68rem 51rem 68rem;
  }

  .moball {
    img {
      width: 194rem;
      height: 194rem;
    }

    i {
      font-size: 70rem;
    }

    span {
      font-size: 137rem;
    }
  }

  .line {
    width: 741rem;
    height: 4rem;
  }

  .football {
    margin-top: 19rem;
    margin-bottom: 25rem;

    span {
      font-size: 35rem;
    }

    img {
      width: 80rem;
      margin-left: 38rem;
      margin-right: 7rem;
    }

    .count {
      font-size: 59rem;

      i {
        font-size: 30rem;
      }
    }
  }

  .swap-button {
    width: 646rem;
    height: 106rem;
    font-size: 50rem;
  }

  .describe {
    margin-top: 71rem;
    border-radius: 18rem;
    font-size: 24rem;
    padding: 36rem 106rem;
  }
}

@media (max-width: 960px) {
  .title {
    font-size: 103rem;
  }

  .slot {
    padding: 200rem 93rem 84rem 93rem;
  }

  .moball {
    img {
      width: 360rem;
      height: 360rem;
    }


    i {
      font-size: 190rem;
    }

    span {
      font-size: 340rem;
    }
  }

  .line {
    width: 1686rem;
    height: 10rem;
  }

  .football {
    margin-top: 159rem;
    margin-bottom: 200rem;

    span {
      font-size: 82rem;
    }

    img {
      width: 180rem;
      margin-left: 38rem;
      margin-right: 57rem;
    }

    .count {
      font-size: 140rem;

      i {
        font-size: 100rem;
      }
    }
  }

  .swap-button {
    width: 1702rem;
    height: 280rem;
    font-size: 131rem;
  }

  .describe {
    margin-top: 250rem;
    border-radius: 42rem;
    font-size: 82rem;
    padding: 195rem 175rem;
  }
}
</style>
return null;
