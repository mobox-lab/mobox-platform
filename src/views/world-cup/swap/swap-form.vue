<template>
<div>
  <div class="swap-form">
    <h6 class="title">{{$t('Worldcup_8')}}</h6>
    <div class="item">
      <div class="head">
        <div class="icon">
          <img src="@/assets/world-cup/football.png" />
        </div>
        <div class="name">{{$t('Worldcup_10')}}</div>
        <div class="balance">{{$t('Worldcup_11')}}: {{football}}</div>
      </div>
      <!-- <div class="input-layout">
        <div class="input-container">
          <div class="icon">
            <img src="@/assets/world-cup/football.png" />
          </div>
          <input type="text" v-model="from" @keyup="inputChange" />
          <div class="max" @click="setMax">MAX</div>
        </div>
      </div> -->
    </div>
    <!-- 分割线 -->
    <div class="split-line">
      <div class="icon">
        <img src="@/assets/world-cup/split-icon.png" />
      </div>
    </div>
    <div class="item">
      <div class="head">
        <div class="icon">
          <img src="@/assets/world-cup/moball.png" />
        </div>
        <div class="name">{{$t('Worldcup_9')}}</div>
        <div class="balance">{{$t('Worldcup_11')}}: {{moball}}</div>
      </div>
      <div class="input-layout">
        <div class="input-container">
          <div class="icon">
            <img src="@/assets/world-cup/moball.png" />
          </div>
          <input readonly type="text" v-model="swapAmount" />
        </div>
      </div>
    </div>
    <button class="submit re-submit" @click="submit" v-if="chainData">
      <span>{{$t('Worldcup_104').replace('#0#', chainData.amt * 100)}}</span>
      <img src="@/assets/world-cup/football.png" >
    </button>
    <button v-else :disabled="!swapAmount || chainData" class="submit" @click="submit">{{$t('Worldcup_8')}}</button>
  </div>
</div>
</template>

<script>
export { mapState } from 'vuex';
export Web3 from 'web3';
export { CommonMethod } from "@/mixin";
export request from '@/utils/worldCupRequest';
export { getSignData } from "../utils";
export WalletUtils from '../../../utils/wallet-utils';

export default {
  mixins: [CommonMethod],
  computed: {
    ...mapState({
      address: (state) => state.worldCupState.address,
      wallet: (state) => state.worldCupState.wallet,
      moball: (state) => state.worldCupState.moball,
      football: (state) => state.worldCupState.football,
      chainData: (state) => state.worldCupState.chainData,
    }),
    swapAmount() {
      return Math.floor(this.football / 100);
    },
  },
  methods: {
    // 提交
    async submit() {
      try {
        let chainData = this.chainData;

        if (!this.chainData) {
          const headers = await getSignData();
          // 参数
          const data = {
            amt: this.swapAmount * 100,
          };
          const res = await request.post('exchange/football', data, { headers });
          chainData = res.data;
        }

        const self = this;
        const provider = WalletUtils.getProvider(this.wallet);
        const web3 = new Web3(provider);
        const contract = new web3.eth.Contract([{
          "inputs":[
            {
              "internalType":"uint256",
              "name":"systx",
              "type":"uint256"
            },
            {
              "internalType":"uint256",
              "name":"amount",
              "type":"uint256"
            },
            {
              "internalType":"uint256",
              "name":"deadline",
              "type":"uint256"
            },
            {
              "internalType":"uint8",
              "name":"v",
              "type":"uint8"
            },
            {
              "internalType":"bytes32",
              "name":"r",
              "type":"bytes32"
            },
            {
              "internalType":"bytes32",
              "name":"s",
              "type":"bytes32"
            }
          ],
          "name":"claim",
          "outputs":[],
          "stateMutability":"nonpayable",
          "type":"function"
        }], '0x9314CdD422cB6fbFAb2954B58B3D911e515A94A1');

        // 提交上链
        contract.methods
          .claim(chainData.systx, chainData.amt, chainData.deadline, chainData.v, chainData.r, chainData.s)
          .send({from: this.address})
          .on('transactionHash', (hash) => {
            this.$emit('success', self.swapAmount * 100);
            this.$store.dispatch('worldCupState/getBags');
          })
      } catch(error) {
        this.showNotify(this.$t(`Worldcup_${error.code}`), "error");
      }
    }
  },
};
</script>

<style lang="less" scoped>
.swap-form {
  background: #0A1F30;
  color: #FFFFFF;
  position: relative;
  border-radius: 27rem;
  box-sizing: border-box;

  img {
    width: 100%;
  }
}

.title {
  text-align: center;
  font-weight: 900;
  line-height: 1;
  font-family: Poppins-Bold;
}

.split-line {
  position: relative;

  &::after {
    content: '';
    background: #081725;
    opacity: 0.77;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
  }

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #0A1F30;
  }

  .icon {
    position: relative;
    z-index: 2;
    margin: 0 auto;
    background: #081725;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.head {
  display: flex;
  align-items: center;

  .name {
    font-family: Poppins-Bold;
    font-weight: 900;
    color: #7CB0D3;
  }

  .balance {
    flex: 1;
    text-align: right;
    font-size: 21rem;
    font-weight: 400;
    color: #7CB0D3;
  }
}

.input-layout {
  background: rgba(6, 18, 29, .6);

  .input-container {
    display: flex;
    align-items: center;
    background: rgba(15, 42, 61, .7);
  }

  .icon {
    width: 35rem;
    height: 35rem;
    margin-right: 10rem;
    opacity: .8;
  }

  input {
    min-width: 0;
    flex: 1;
    height: 100%;
    font-weight: 400;
    color: #FFFFFF;
    background: none;
    outline: none;
    border: none;
  }
}

.submit {
  display: block;
  border: none;
  background: #99E143;
  box-shadow: 0px 5rem 0px 0px rgba(59, 83, 10, .77);
  font-weight: 900;
  color: #3B530A;
  margin: 77rem auto 0 auto;
  cursor: pointer;

  img {
    width: 25px;
    margin-left: 2px;
    display: inline-block;
  }

  &:hover {
    opacity: .7;
  }

  &[disabled] {
    opacity: .7;
    cursor: no-drop;
  }
}

.re-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #68561E;
  background: #F1B909;
  box-shadow: 0px 5px 0px 0px rgb(104 86 30 / 77%);
}

.fail {
  cursor: pointer;
  padding: 40rem 0;
  background: #2E1804;
  border: 4rem solid #000000;
  border-radius: 27rem;
  text-align: center;
  box-sizing: border-box;
  margin-top: 18rem;

  img {
    width: 23rem;
    margin-right: 12rem;
  }

  span {
    font-size: 20rem;
    font-weight: normal;
    color: #B76113;
    line-height: 26rem;
  }

  img, span {
    display: inline-block;
    vertical-align: middle;
  }
}

@media (min-width: 960px) {
  .swap-form {
    width: 765rem;
    padding: 45rem 70rem 78rem 70rem;
    border: 4px solid #000000;
  }

  .title {
    font-size: 47rem;
    margin-bottom: 42rem;
  }

  .split-line {
    padding: 30rem 0 17rem 0;

    &::after {
      height: 4rem;
      margin-top: -2rem;
    }

    &::before {
      right: 220rem;
      left: 220rem;
    }

    .icon {
      width: 53rem;
      height: 53rem;

      img {
        width: 26rem;
      }
    }
  }

  .head {
    .icon {
      width: 64rem;
      height: 64rem;
    }

    .name {
      font-size: 21rem;
      margin-left: 8rem;
    }

    .balance {
      font-size: 21rem;
    }
  }

  .input-layout {
    margin-top: 10rem;
    padding: 15rem 14rem;
    border-radius: 16rem;

    .input-container {
      height: 69rem;
      border-radius: 16rem;
      padding-left: 29rem;
      padding-right: 14rem;
    }

    .icon {
      width: 35rem;
      height: 35rem;
      margin-right: 10rem;
    }

    input {
      font-size: 34rem;
    }

    .max {
      width: 64rem;
      height: 35rem;
      border-radius: 9rem;
      font-size: 14rem;
      line-height: 35rem;
    }
  }

  .submit {
    width: 405rem;
    height: 67rem;
    border-radius: 16rem;
    font-size: 31rem;
  }
}

@media (max-width: 960px) {
  .swap-form {
    width: 96vw;
    padding: 152rem 125rem 250rem 125rem;
    border: 4px solid #000000;
  }

  .title {
    font-size: 162rem;
    margin-bottom: 140rem;
  }

  .split-line {
    padding: 105rem 0 60rem 0;

    &::after {
      height: 4rem;
      margin-top: -2rem;
    }

    &::before {
      right: 750rem;
      left: 750rem;
    }

    .icon {
      width: 190rem;
      height: 190rem;

      img {
        width: 90rem;
      }
    }
  }

  .head {
    .icon {
      width: 220rem;
      height: 220rem;
    }

    .name {
      font-size: 82rem;
      margin-left: 24rem;
    }

    .balance {
      font-size: 82rem;
    }
  }

  .input-layout {
    margin-top: 60rem;
    padding: 50rem;
    border-radius: 36rem;

    .input-container {
      height: 236rem;
      border-radius: 36rem;
      padding-left: 29rem;
      padding-right: 14rem;
    }

    .icon {
      width: 150rem;
      height: 150rem;
      margin-right: 45rem;
    }

    input {
      font-size: 116rem;
    }

    .max {
      width: 64rem;
      height: 35rem;
      border-radius: 9rem;
      font-size: 14rem;
      line-height: 35rem;
    }
  }

  .submit {
    width: 1600rem;
    height: 260rem;
    border-radius: 36rem;
    font-size: 123rem;
  }
}
</style>
