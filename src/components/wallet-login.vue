// <template>
//     <transition name="bounce">
//         <div class="wallet-login">
//             <div class="mask" @click="close" />
//             <div class="content">
//                 <div class="mobox-wallet">
//                     <div class="title">{{$t("Home_10")}}</div>
                        <div class="icon">
                            <img src="@/assets/index/mwallet.png" />
                        </div>
                        <h5 class="name">Mobox Wallet</h5>
                    </div>
                </div>
                <!-- 其他钱包 -->
                <div class="wallet-list">
                    <div class="title">{{$t("Home_12")}}</div>
                    <ul>
                        <li @click="metamask">
                            <span class="icon">
                                <img src="@/assets/index/metamask.png" />
                            </span>
                            <span class="name">Metamask</span>
                        </li>
                        <!-- <li @click="ethereumLogin">
                            <span class="icon">
                                <img src="@/assets/images/mathwallet.png" />
                            </span>
                            <span class="name">Math Wallet</span>
                        </li> -->
                        <li @click="coinbase">
                            <span class="icon">
                                <img src="@/assets/index/coinbase.png" />
                            </span>
                            <span class="name">Coinbase Wallet</span>
                        </li>
                        <li @click="binanceLogin">
                            <span class="icon">
                                <img src="@/assets/index/binance.png" />
                            </span>
                            <span class="name">BNB Chain Wallet</span>
                        </li>
                    </ul>
                    <ul>
                        <li @click="ethereumLogin">
                            <span class="icon">
                                <img src="@/assets/index/tokenpocket.png" />
                            </span>
                            <span class="name">Token Pocket</span>
                        </li>
                        <li @click="ethereumLogin">
                            <span class="icon"
                                ><img src="@/assets/index/trust.png"
                            /></span>
                            <span class="name">Trust Wallet</span>
                        </li>
                        <li @click="walletConnectLogin">
                            <span class="icon">
                                <img src="@/assets/index/walletconnect.png" />
                            </span>
                            <span class="name">Wallet Connect</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";
import { API_WALLET_LOGIN } from "@/utils/constant";
import request from "@/utils/request";
import { CommonMethod } from "@/mixin";

export default {
	mixins: [CommonMethod],
    data() {
        return {
            time: null
        };
    },
    methods: {
        
        async mboxLogin() {
            if (!window.mbox) {
                this.showNotify(this.$t('Tips_1'), "error");
                return;
            }

            try {
                const res = await window.mbox?.BinanceChain?.enable();
                
                const address = res[0];
                
                window.mbox?.bscWeb3.personal.sign(
                    this.getSignKey(),
                    address,
                    (err, sign) => {
                        if (!err) {
                            this.login(address, sign);
                        }
                    }
                );
            } catch (_) {
            }
        },
        
        async ethereumLogin() {
            if (!window.ethereum) {
                this.showNotify(this.$t('Tips_1'), "error");
                return;
            }

            try {
                const res = await window.ethereum?.request({
                    method: "eth_requestAccounts",
                });
                
                const address = res[0];
                
                const sign = await window.ethereum?.request({
                    method: "personal_sign",
                    params: [address, this.getSignKey()],
                });

                this.login(address, sign);
            } catch (_) {
            }
        },
        
        async binanceLogin() {
            try {
                const res = await window.BinanceChain.enable();
                
                const address = res[0];
                
                const { signature } = await window.BinanceChain.bnbSign(
                    address,
                    this.getSignKey()
                );

                this.login(address, signature);
            } catch (_) {
                this.showNotify(this.$t('Tips_1'), "error");
            }
        },
        // metamask
        metamask() {
            const provider = window.ethereum?.providers?.find((item) => item.isMetaMask) || (window.ethereum?.isMetaMask ? window.ethereum : null);
            this.web3Login(provider);
        },
        // coinbase
        coinbase() {
            const provider = window.ethereum?.providers?.find((item) => item.isCoinbaseWallet) || (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);
            this.web3Login(provider);
        },
        // web3
        async web3Login(provider) {
            if (!provider) {
                this.showNotify(this.$t('Tips_1'), "error");
                return;
            }

            if (provider._state?.isUnlocked === false) {
                this.showNotify(this.$t('Tips_2'), "error");
                return;
            }

            try {
                const res = await provider.request({
                    method: "eth_requestAccounts",
                });
                
                const address = res[0];
                let params = [];

                if (provider.isCoinbaseWallet) {
                    params = [this.getSignKey(), address];
                } else {
                    params = [address, this.getSignKey()];
                }

                
                const sign = await provider.request({
                    method: "personal_sign",
                    params: params,
                });

                this.login(address, sign);
            } catch (_) {
            }
        },
        
        walletConnectLogin() {
            // const self = this;
            // const connector = new WalletConnect({
            //     bridge: "https://bridge.walletconnect.org",
            //     qrcodeModal: QRCodeModal,
            // });

            // async function sign() {
            //     const address = connector.accounts[0];
            //     const sign = await connector.signMessage([address, self.getSignKey()]);
            //     self.login(address, sign);
            // }

            // connector.on("connect", async (error) => {
            //     if (!error) {
            //         sign();
            //     }
            // });

            // if (connector.connected) {
            //     sign();
            // } else {
            //     connector.createSession();
            // }
        },
        
        async login(address, sign) {
            try {
                const data = {
                    chain: "bnb",
                    addr: address,
                    ts: Math.floor(this.time / 1000),
                    sign,
                };

                const { source } = this.$route.query;

                if (source) {
                    data.source = source;
                }

                const res = await request(API_WALLET_LOGIN, {
                    method: 'POST',
                    data,
                });

                
                this.$store.commit('userState/setToken', res.data.token);
                this.$root.eventHub.$emit("platform-setToken", res.data.token);
                
                this.$store.dispatch('userState/getUserInfo');
                this.$root.$children[0].isShowWalletLogin = false;
                this.$root.eventHub.$emit('showDownPage');
            } catch(error) {
                if (error.code) {
                    this.showNotify(`${error.code} - ${this.$t(`Error_${error.code}`)}`,"error");
                } else {
                    this.showNotify(`${error}` + this.$t(`Error_10`), "error");
                }
            }
        },
        
        close() {
            this.$emit("close");
        },
        getSignKey() {
            this.time = Date.now();
            return `wallet_login_${Math.floor(this.time / 60000)}`;
        },
    },
};
</script>

<style lang="less" scoped>


@media (max-width: 420px) {
    .content {
        width: 90%;
    }
}


@media (min-width: 420px) {
    .content {
        width: 397px;
    }
}

.wallet-login,
.mask {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    cursor: pointer;
}
.wallet-login {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mask {
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
}

.content {
    position: relative;
    z-index: 99;
    border-radius: 15px;
    background: #1c222c;
    overflow: hidden;
    text-align: center;

    .title {
        font-size: 22px;
        font-weight: bold;
        color: #ffffff;
        padding-bottom: 40px;
    }
}

.mobox-wallet {
    padding: 40px 0;

    .icon {
        width: 76px;
        height: 76px;
        background: #ffffff;
        margin: 0 auto 5px auto;
        border-radius: 100%;

        img {
            width: 100%;
        }
    }

    .name {
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;
        color: #ffffff;
    }
}

.wallet-list {
    background: #14181e;
    padding-bottom: 35px;

    .title {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 22px;
        color: #ffffff;
        letter-spacing: 2px;
        padding: 20px 0;
    }

    ul {
        width: 330px;
        margin: 0 auto 15px auto;
        text-align: left;

        li {
            width: 110px;
            text-align: center;
            display: inline-block;
            cursor: pointer;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }
    }

    .icon {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background: white;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 25px;
        }
    }

    .name {
        margin-top: 8px;
        color: #ffffff;
        font-weight: bold;
        font-size: 12px;
        display: block;
    }
}


.bounce-enter-active,
.bounce-leave-active {
    transition: opacity 0.3s;

    .mask {
        transition: opacity 0.3s;
    }

    .content {
        transition: transform 0.3s, opacity 0.3s;
    }
}

.bounce-enter .content,
.bounce-leave-to .content,
.bounce-enter .mask,
.bounce-leave-to .mask {
    opacity: 0;
}

.bounce-enter .content,
.bounce-leave-to .content {
    transform: translateY(-30px);
}
</style>
