<template>
    <transition name="bounce">
        <div class="wallet-login" v-if="value">
            <div class="mask" @click="close" />
            <div class="content">
                <div class="mobox-wallet">
                    <div class="title">{{ $t("Home_10") }}</div>
                    <div @click="mboxLogin">
                        <div class="icon">
                            <img src="@/assets/wallet-icon/wallet.png" />
                        </div>
                        <h5 class="name">Mobox Wallet</h5>
                    </div>
                </div>
                <!-- 其他钱包 -->
                <div class="wallet-list">
                    <div class="title">{{ $t("Home_12") }}</div>
                    <ul>
                        <li @click="metamask">
                            <span class="icon">
                                <img src="@/assets/wallet-icon/metamask.svg" />
                            </span>
                            <span class="name">Metamask</span>
                        </li>
                        <li @click="coinbase">
                            <span class="icon">
                                <img src="@/assets/wallet-icon/coinbase.svg" />
                            </span>
                            <span class="name">Coinbase Wallet</span>
                        </li>
                        <li @click="binanceLogin">
                            <span class="icon">
                                <img
                                    src="@/assets/wallet-icon/binance-wallet.svg"
                                />
                            </span>
                            <span class="name">BNB Chain Wallet</span>
                        </li>
                    </ul>
                    <ul>
                        <li @click="ethereumLogin">
                            <span class="icon">
                                <img
                                    src="@/assets/wallet-icon/token-pocket.png"
                                />
                            </span>
                            <span class="name">Token Pocket</span>
                        </li>
                        <li @click="ethereumLogin">
                            <span class="icon">
                                <img src="@/assets/wallet-icon/trust-wallet.png"
                            /></span>
                            <span class="name">Trust Wallet</span>
                        </li>
                        <li @click="walletConnectLogin">
                            <span class="icon">
                                <img
                                    src="@/assets/wallet-icon/wallet-connect.png"
                                />
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
// export WalletConnect from "@walletconnect/client";
// export QRCodeModal from "@walletconnect/qrcode-modal";
export { CommonMethod } from "@/mixin";

export default {
    mixins: [CommonMethod],
    props: {
        // 钱包地址
        address: String,
        // 显示状态
        value: Boolean,
        // 签名消息
        message: {
            type: String,
            required: true,
        },
    },
    methods: {
        // mbox钱包
        async mboxLogin() {
            if (!window.mbox) {
                this.showNotify(this.$t("Tips_1"), "error");
                return;
            }

            try {
                const res = await window.mbox?.BinanceChain?.enable();
                // 地址
                const address = res[0];
                // 签名
                window.mbox?.bscWeb3.personal.sign(
                    this.message,
                    address,
                    (err, sign) => {
                        if (!err) {
                            this.onSign(address, sign);
                        }
                    }
                );
            } catch (_) {}
        },
        // ethereum标准
        async ethereumLogin() {
            if (!window.ethereum) {
                this.showNotify(this.$t("Tips_1"), "error");
                return;
            }

            try {
                const res = await window.ethereum?.request({
                    method: "eth_requestAccounts",
                });
                // 地址
                const address = res[0];
                // 签名
                const sign = await window.ethereum?.request({
                    method: "personal_sign",
                    params: [address, this.message],
                });

                this.onSign(address, sign);
            } catch (_) {
            }
        },
        // 币安钱包
        async binanceLogin() {
            try {
                const res = await window.BinanceChain.enable();
                // 地址
                const address = res[0];
                // 签名
                const { signature } = await window.BinanceChain.bnbSign(
                    address,
                    this.message
                );

                this.onSign(address, signature);
            } catch (_) {
            }
        },
        // metamask
        metamask() {
            const provider =
                window.ethereum?.providers?.find((item) => item.isMetaMask) ||
                (window.ethereum?.isMetaMask ? window.ethereum : null);
            this.web3Sign(provider);
        },
        // coinbase
        coinbase() {
            const provider =
                window.ethereum?.providers?.find(
                    (item) => item.isCoinbaseWallet
                ) ||
                (window.ethereum?.isCoinbaseWallet ? window.ethereum : null);
            this.web3Sign(provider);
        },
        // web3
        async web3Sign(provider) {
            if (!provider) {
                this.showNotify(this.$t("Tips_1"), "error");
                return;
            }

            if (provider._state?.isUnlocked === false) {
                this.showNotify(this.$t("Tips_2"), "error");
                return;
            }

            try {
                const res = await provider.request({
                    method: "eth_requestAccounts",
                });
                // 地址
                const address = res[0];
                let params = [];

                // coinbase参数顺序相反
                if (provider.isCoinbaseWallet) {
                    params = [this.message, address];
                } else {
                    params = [address, this.message];
                }

                // 签名
                const sign = await provider.request({
                    method: "personal_sign",
                    params: params,
                });

                this.onSign(address, sign);
            } catch (_) {
            }
        },
        // Wallet Connect登录
        walletConnectLogin() {
            // const self = this;
            // const connector = new WalletConnect({
            //     bridge: "https://bridge.walletconnect.org",
            //     qrcodeModal: QRCodeModal,
            // });

            // async function sign() {
            //     const address = connector.accounts[0];
            //     const sign = await connector.signMessage([
            //         address,
            //         self.message,
            //     ]);
            //     self.onSign(address, sign);
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
        // 签名完成回调
        onSign(address, sign) {
            this.$emit("sign", address, sign);
            this.close();
        },
        // 关闭
        close() {
            this.$emit("input", false);
        },
    },
};
</script>

<style lang="less" scoped>
// 移动端
@media (max-width: 420px) {
    .content {
        width: 90%;
    }
}

// pc端
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

// 过度动画
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
console.log('Debug: fix: correct leaderboard sorting algorithm');
