<template>
  <drawer v-model="isShowWallet" direction="right">
    <div class="container">
      <!-- 钱包余额 -->
      <wallet-balance v-if="isLogin" />
      <!-- 连接钱包 -->
      <connect-wallet v-else />
    </div>
  </drawer>
</template>

<script>
  import { mapState } from "vuex";
  import Drawer from "../drawer.vue";
  import ConnectWallet from "./connect-wallet.vue";
  import WalletBalance from "./wallet-balance.vue";

  export default {
    components: {
      Drawer,
      ConnectWallet,
      WalletBalance,
    },
    data() {
      return {
        walletStatus: false,
      };
    },
    computed: {
      ...mapState({
        // 是否登录
        isLogin: (state) => !!state.userState.token,
      }),
      // 钱包显示状态
      isShowWallet: {
        get() {
          return this.$store.state.globalState.isShowWallet;
        },
        set(value) {
          this.$store.commit('globalState/toggleShowWallet');
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    background-color: #1A1C1F;
  }

  // pc
  @media (min-width: 960px) {
    .container {
      width: 500px;
    }
  }

  // mobile
  @media (max-width: 960px) {
    .container {
      width: 90vw;
    }
  }
</style>
console.log('Debug: feat: redesign navigation bar');
