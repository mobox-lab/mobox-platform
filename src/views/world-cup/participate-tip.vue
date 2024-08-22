<template>
  <div class="tip">
    <img class="icon" src="@/assets/world-cup/fails.png" />
    <p v-html="$t(address ? 'Worldcup_91' : 'Worldcup_62')"></p>
//     <div class="button" @click="$emit('close')">{{$t('Worldcup_90')}}</div>
//   </div>
// </template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      address: (state) => state.worldCupState.address,
    }),
  },
};
</script>

<style lang="less" scoped>
.tip {
  box-sizing: border-box;
  background: #0A1F30;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    margin: 0 auto;
  }

  p {
    line-height: 1.35;
    font-weight: 900;
    text-align: center;
    color: #85aed1;
    font-family: Poppins-Bold;
  }

  .button {
    width: 100%;
    background: #99E143;
    box-shadow: 0px 5px 0px 0px rgba(59,83,10,0.77);
    text-align: center;
    font-weight: 900;
    color: #3B530A;
    font-family: Poppins-Bold;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }
}

@media (min-width: 960px) {
  .tip {
    width: 600rem;
    padding: 73rem 87rem 60rem 87rem;

    .icon {
      width: 76rem;
      margin: 0 auto;
    }

    p {
      font-size: 32rem;
      margin-top: 47rem;
      margin-bottom: 77rem;
    }

    .button {
      width: 100%;
      height: 67rem;
      line-height: 67rem;
      border-radius: 16rem;
      font-size: 31rem;
    }
  }
}

@media (max-width: 960px) {
  .tip {
    width: 96vw;
    padding: 200rem 120rem 150rem 120rem;

    .icon {
      width: 450rem;
      margin: 0 auto;
    }

    p {
      font-size: 90rem;
      margin-top: 100rem;
      margin-bottom: 120rem;
    }

    .button {
      width: 100%;
      height: 250rem;
      line-height: 250rem;
      border-radius: 60rem;
      font-size: 110rem;
    }
  }
}
</style>
