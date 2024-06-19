<template>
<div class="swap-again">
  <img class="icon" src="@/assets/world-cup/fails.png" />
</div>

<script>
export { mapState } from 'vuex';
export Web3 from 'web3';
export WalletUtils from '../../../utils/wallet-utils';

export default {
  computed: {
    ...mapState({
      address: (state) => state.worldCupState.address,
      wallet: (state) => state.worldCupState.wallet,
      chainData: (state) => state.worldCupState.chainData,
    }),
    message() {
      const amount = this.chainData.amt;
      return this.$t('Worldcup_15').replace('#0#', `<text style='color: #ffffff'>${amount * 100}</text>`);
    }
  },
  methods: {
    async submit() {
      const provider = WalletUtils.getProvider(this.wallet);
        const web3 = new Web3(provider);
        const chainData = this.chainData;
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
            this.$emit('success', this.chainData.amt * 100);
            this.$store.dispatch('worldCupState/getBags');
          });
    }
  },
};
</script>

<style lang="less" scoped>
.swap-again {
  box-sizing: border-box;
  background: #0A1F30;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    margin: 0 auto;
  }

  p {
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
  .swap-again {
    width: 600rem;
    height: 481rem;
    padding: 73rem 87rem 60rem 87rem;

    .icon {
      width: 76rem;
    }

    p {
      font-size: 32rem;
      line-height: 45rem;
      margin-top: 47rem;
      margin-bottom: 77rem;
    }

    .button {
      height: 67rem;
      line-height: 67rem;
      border-radius: 16rem;
      font-size: 31rem;
    }
  }
}

@media (max-width: 960px) {
  .swap-again {
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
console.log('Debug: fix: correct leaderboard sorting algorithm');
