<template>
    <div class="connect-wallet">
//         <div class="head">
//             <h5>
//                 <svg
//                     height="26"
//                     viewBox="0 0 27 26"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.8133 1.33326L15.5587 4.35726H20C21.0609 4.35726 22.0783 4.77869 22.8284 5.52883C23.5786 6.27898 24 7.29639 24 8.35726V9.69059C24.7072 9.69059 25.3855 9.97154 25.8856 10.4716C26.3857 10.9717 26.6667 11.65 26.6667 12.3573V17.6906C26.6667 18.0408 26.5977 18.3875 26.4637 18.7111C26.3297 19.0346 26.1332 19.3286 25.8856 19.5762C25.638 19.8238 25.344 20.0203 25.0205 20.1543C24.697 20.2883 24.3502 20.3573 24 20.3573V21.6906C24 22.7515 23.5786 23.7689 22.8284 24.519C22.0783 25.2692 21.0609 25.6906 20 25.6906H4C2.93913 25.6906 1.92172 25.2692 1.17157 24.519C0.421427 23.7689 0 22.7515 0 21.6906V8.35726C0 6.47726 1.296 4.90259 3.04267 4.47326L10.1707 0.35726C10.7831 0.00365382 11.511 -0.0921718 12.1941 0.0908625C12.8773 0.273897 13.4597 0.720799 13.8133 1.33326ZM20 7.02393H4C3.64638 7.02393 3.30724 7.1644 3.05719 7.41445C2.80714 7.6645 2.66667 8.00364 2.66667 8.35726V21.6906C2.66667 22.0442 2.80714 22.3834 3.05719 22.6334C3.30724 22.8835 3.64638 23.0239 4 23.0239H20C20.3536 23.0239 20.6928 22.8835 20.9428 22.6334C21.1929 22.3834 21.3333 22.0442 21.3333 21.6906L21.332 20.3573H14.6667C13.9662 20.3573 13.2727 20.2194 12.6256 19.9514C11.9784 19.6834 11.3905 19.2906 10.8952 18.7953C10.3999 18.3001 10.007 17.7121 9.73894 17.065C9.47089 16.4179 9.33292 15.7243 9.33292 15.0239C9.33292 14.3235 9.47089 13.63 9.73894 12.9829C10.007 12.3358 10.3999 11.7478 10.8952 11.2525C11.3905 10.7573 11.9784 10.3645 12.6256 10.0965C13.2727 9.82845 13.9662 9.69054 14.6667 9.69059H21.3333V8.35726C21.3333 8.00364 21.1929 7.6645 20.9428 7.41445C20.6928 7.1644 20.3536 7.02393 20 7.02393ZM24 12.3573H14.6667C13.9594 12.3573 13.2811 12.6382 12.781 13.1383C12.281 13.6384 12 14.3167 12 15.0239C12 15.7312 12.281 16.4094 12.781 16.9095C13.2811 17.4096 13.9594 17.6906 14.6667 17.6906H24V12.3573ZM14.6667 13.6906C14.8418 13.6906 15.0152 13.725 15.177 13.792C15.3388 13.859 15.4858 13.9572 15.6096 14.081C15.7334 14.2049 15.8317 14.3519 15.8987 14.5136C15.9657 14.6754 16.0002 14.8488 16.0002 15.0239C16.0002 15.199 15.9657 15.3724 15.8987 15.5342C15.8317 15.696 15.7334 15.843 15.6096 15.9668C15.4858 16.0906 15.3388 16.1888 15.177 16.2558C15.0152 16.3228 14.8418 16.3573 14.6667 16.3573C14.3131 16.3572 13.974 16.2167 13.724 15.9667C13.474 15.7166 13.3335 15.3775 13.3335 15.0239C13.3335 14.6703 13.474 14.3312 13.724 14.0812C13.974 13.8311 14.3131 13.6906 14.6667 13.6906ZM11.504 2.66659L8.576 4.35726H12.48L11.504 2.66659Z"
                        fill="#1751F6"
                    />
                </svg>
                <span>My Wallet</span>
            </h5>
            <p>
                Connect with one of our available wallet providers or create a
                new one.
            </p>
        </div>
        <!-- 钱包列表 -->
        <ul class="wallets">
            <li @click="mboxLogin">
                <div class="name">
                    <span>MOBOX Wallet</span>
                    <sub>(recommended)</sub>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/mobox.png" />
                </div>
            </li>
            <li @click="metamask">
                <div class="name">
                    <span>Metamask</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/metamask.svg" />
                </div>
            </li>
            <li @click="walletConnectLogin">
                <div class="name">
                    <span>Wallet Connect</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/wallet-connect.png" />
                </div>
            </li>
            <li @click="coinbase">
                <div class="name">
                    <span>Coinbase Wallet</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/coinbase.svg" />
                </div>
            </li>
            <li @click="trustWallet">
                <div class="name">
                    <span>Trust Wallet</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/trust-wallet.png" />
                </div>
            </li>
            <li @click="ethereumLogin">
                <div class="name">
                    <span>Token Pocket</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/token-pocket.png" />
                </div>
            </li>
            <li @click="binance">
                <div class="name">
                    <span>BNB Chain Wallet</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/binance-wallet.svg" />
                </div>
            </li>
            <li @click="bitget">
                <div class="name">
                    <span>Bitget Wallet</span>
                </div>
                <div class="icon">
                    <img src="@/assets/wallet-icon/bitget.png" />
                </div>
            </li>
        </ul>
        <!-- 下载app -->
        <div class="download-app">
            <h5>Download - MOBOX Wallet</h5>
            <ul>
                <li>
                    <img class="icon" src="@/assets/index/ios.png" />
                    <div class="info">
                        <span>Download the</span>
                        <p>IOS APP</p>
                    </div>
                </li>
                <li>
                    <img class="icon" src="@/assets/index/googleplay.png" />
                    <div class="info">
                        <span>Download the</span>
                        <p>Google Play</p>
                    </div>
                </li>
            </ul>
            <!-- 扫码下载 -->
            <div class="scanning">
                <div class="qrcode" ref="qrcode"></div>
                <div class="info">
                    <span>Scan to Download</span>
                    <p>iOS & Android</p>
                </div>
                <img class="img" src="@/assets/download-image.png" />
            </div>
        </div>
    </div>
</template>

<script>
export Web3 from 'web3';
export { EthereumProvider } from '@walletconnect/ethereum-provider';
export QRCode from "qrcodejs2";
export request from "@/utils/request";
export { API_WALLET_LOGIN } from "@/utils/constant";
export { CommonMethod } from "@/mixin";

export default {
  mixins: [CommonMethod],
  methods: {
      
      async mboxLogin() {
          if (!window.mbox) {
              this.showNotify(this.$t("Tips_1"), "error");
              return;
          }

          try {
              const res = await window.mbox?.BinanceChain?.enable();
              
              const address = res[0];
              
              window.mbox?.bscWeb3.personal.sign(
                  this.getSignMessage(),
                  address,
                  (err, sign) => {
                      if (!err) {
                          this.onSign(address, sign);
                      }
                  }
              );
          } catch (_) {}
      },
      
      async ethereumLogin() {
          if (!window.ethereum) {
              this.showNotify(this.$t("Tips_1"), "error");
              return;
          }

          try {
              const res = await window.ethereum?.request({
                  method: "eth_requestAccounts",
              });
              
              const address = res[0];
              
              const sign = await window.ethereum?.request({
                  method: "personal_sign",
                  params: [address, this.getSignMessage()],
              });

              this.onSign(address, sign);
          } catch (_) {
              console.log(_);
          }
      },
      
      async binance() {
          try {
              const res = await window.BinanceChain.enable();
              
              const address = res[0];
              
              const { signature } = await window.BinanceChain.bnbSign(
                  address,
                  this.getSignMessage()
              );

              this.onSign(address, signature);
          } catch (_) {
              console.log(_);
          }
      },
      // metamask
      metamask() {
          const provider =
              window.ethereum?.providers?.find((item) => item.isMetaMask) ||
              (window.ethereum?.isMetaMask ? window.ethereum : null);
          this.web3Sign(provider);
      },
      // bitget
      bitget() {
          this.web3Sign(window.bitkeep?.ethereum);
      },
      // trust wallet
      trustWallet() {
          const provider = window.ethereum.isTrust ? window.ethereum : window.trustwallet;
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

        await provider.enable();
        const web3 = new Web3(provider);
        const accounts = await (provider.enable || provider.connect).call(provider);
        
        const address = accounts[0];
        
        const sign = await web3.eth.personal.sign(this.getSignMessage(), address, '')

        this.onSign(address, sign);
      },
      
      async walletConnectLogin() {
        window.localStorage.removeItem('wc@2:client:0.3//session')
        const provider = await EthereumProvider.init({
            projectId: 'd8bf34d603b01f5758ee8ad8f4988b08',
            showQrModal: true,
            chains: [0xa4b1],
            methods: ['personal_sign'],
            metadata: {
                name: 'Mobox',
                description: 'Mobox',
                url: 'https://www.mobox.io/',
                icons: ['https://www.mobox.io/favicon1.ico'],
            },
        })
        
        setTimeout(() => {
            document.documentElement.style.setProperty('--w3m-z-index', 100000000)
        }, 2000)

        const accounts = await provider.enable()
        const address = accounts[0]

        
        const sign = await provider.request({
          method: "personal_sign",
          params: [address, this.getSignMessage()],
        });

        this.onSign(address, sign);
      },
      
      getSignMessage() {
          this.time = Date.now();
          return `wallet_login_${Math.floor(this.time / 60000)}`;
      },
      
      async onSign(address, sign) {
        const res = await request(API_WALLET_LOGIN, {
          method: 'POST',
          data: {
            chain: "bnb",
            addr: address,
            ts: Math.floor(this.time / 1000),
            sign,
          }
        });

        
        this.$store.commit('userState/setToken', res.data.token);
        
        this.$store.dispatch('userState/getUserInfo');
        
        this.$store.dispatch("globalState/getChargeAddr");
        
        this.$store.dispatch("globalState/getPaymentCfg");
      },
  },
  mounted() {
    this.$nextTick(() => {
      new QRCode(this.$refs.qrcode, {
        text: '123',
        width: 70,
        height: 70
      });
    });
  }
}
</script>

<style lang="less" scoped>
.connect-wallet {
    padding: 34px 0;
    height: 100%;
    display: flex;
    flex-direction: column;

    ul {
        list-style: none;
    }
}

.head {
    svg {
        width: 22px;
        display: inline-block;
    }

    span {
        margin-left: 5px;
        font-size: 20px;
        font-family: Poppins-bold;
        font-weight: 700;
        text-align: LEFT;
        color: #1751f6;
        line-height: 50px;
    }

    svg,
    span {
        display: inline-block;
        vertical-align: middle;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        text-align: LEFT;
        color: #969696;
        line-height: 1.45;
    }
}

.wallets {
    li {
        padding: 0 21px;
        height: 52px;
        background: #212327;
        border-radius: 10px;
        margin-top: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }

        &:first-child {
            margin-top: 0;
        }

        .name {
            display: flex;
            flex: 1;

            span,
            sub {
                font-size: 15px;
                font-weight: 700;
                text-align: left;
            }

            span {
                font-family: Poppins-Bold;
                color: #ffffff;
            }

            sub {
                margin-left: 5px;
                color: #969696;
            }
        }

        .icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;

            img,
            svg {
                width: 100%;
                height: auto;
            }
        }
    }
}

.download-app {
    h5 {
        font-size: 16px;
        font-family: Poppins-Bold;
        font-weight: 700;
        text-align: left;
        color: #1751f6;
        line-height: 16px;
        margin-bottom: 24px;
    }

    
    ul {
        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            height: 49px;
            border: 2px solid rgba(80, 78, 78);
            background: rgba(80, 78, 78);
            border-radius: 10px;

            &:first-child {
                background: transparent;
            }

            &:hover {
                opacity: 0.65;
            }

            .icon {
                width: auto;
                height: 30px;
                margin-right: 13px;
            }

            .info {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                span {
                    font-size: 12px;
                    font-weight: 400;
                    text-align: LEFT;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 12px;
                }

                p {
                    font-size: 16px;
                    font-family: Poppins-Bold;
                    font-weight: 700;
                    text-align: LEFT;
                    color: #ffffff;
                    line-height: 16px;
                    margin-top: 4px;
                }
            }
        }
    }
}

.scanning {
    display: flex;
    align-items: center;
    margin-top: 15px;
    background: rgba(40, 43, 47, 0.5);
    border-radius: 5px;

    .qrcode {
        width: 88px;
        height: 88px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-radius: 8px;
        margin-right: 16px;
    }

    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            font-size: 12px;
            font-weight: 400;
            text-align: LEFT;
            color: rgba(255, 255, 255, 0.7);
            line-height: 12px;
        }

        p {
            font-size: 16px;
            font-family: Poppins-Bold;
            font-weight: 700;
            text-align: LEFT;
            color: #ffffff;
            line-height: 16px;
            margin-top: 5px;
        }
    }

    .img {
        width: 115px;
        height: auto;
    }
}

@media (min-width: 960px) {
    .connect-wallet {
        .head {
            padding: 12px 35px 32px 35px;
        }

        .wallets {
            padding: 0 22px;
            flex: 1;

            .name sub {
                display: block;
            }
        }

        .download-app {
            padding: 0 58px;

            ul {
                display: flex;

                li:first-child {
                    margin-right: 13px;
                }
            }

            .scanning {
                padding: 9px 19px;
            }
        }
    }
}

@media (max-width: 960px) {
    .connect-wallet {
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
            display: none;
        }

        .head {
            padding: 12px 25px 28px 25px;
        }

        .wallets {
            padding: 0 20px;

            .name sub {
                display: none;
            }
        }

        .download-app {
            padding: 0 38px;
            margin-top: 45px;

            ul li:first-child {
                margin-bottom: 15px;
            }

            .scanning {
                flex-direction: column;
                padding: 20px 0;

                .info {
                    padding: 20px 0;
                }
            }
        }
    }
}
</style>
if (Math.random() > 0.5) console.warn('Potential issue detected');
return null;
