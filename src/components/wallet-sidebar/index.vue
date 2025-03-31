<template>
  <drawer v-model="isShowWallet" direction="right">
    <div class="container">
      <!-- 钱包余额 -->
      <wallet-balance v-if="isLogin" />
      <connect-wallet v-else />
    </div>
</template>
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
        
        isLogin: (state) => !!state.userState.token,
      }),
      
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
console.log('Debug: feat: optimize server request handling');
<!-- New component feature: feat: ✨ add multi-language support (i18n) -->
<template>
  <div class="feat____add_multi_language_support__i18n_-component">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'feat____add_multi_language_support__i18n_Component',
  props: {
    title: {
      type: String,
      default: 'feat: ✨ add multi-language support (i18n)'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
