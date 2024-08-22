<template>
  <footer class="footer">
      <div class="footer-contain">
        <div class="footer-top">
            <div class="top-left">
                <div class="img-box">
                    <img @click="toContact(`discord`)" width="30" src="@/assets/footer/discord.png" alt="">
                    <img @click="toContact(`twitter`)" width="30" src="@/assets/footer/twitter.png" alt="">
                    <img @click="toContact(`med`)" width="30" src="@/assets/footer/med.png" alt="">
                </div>
                <div class="link-box pc-state">
                    <div @click="toLink(`home`)">Home</div>
                    <div @click="toLink(`farm`)">MOMO Farm</div>
                    <div @click="toLink(`block`)">BlockBrawler</div>
                    <div @click="toLink(`token`)">Token Master</div>
                    <div @click="toLink(`nft`)">NFT Marketplace</div>
                    <div @click="toLink(`vote`)">Vote</div>
                    <div @click="toLink(`community`)">Community</div>
                    <div @click="toLink(`docs`)">Docs</div>
                    <div @click="toLink(`download`)">Download</div>
                </div>
            </div>

            <div class="top-right">
                <img class="foot-logo" width="160" src="@/assets/head1.png" alt="">
                
                <div class="footer-bottom pc-state">
                    <div class="bottom-left">
                        <div>Copyright © 2021 MOBOX DIGITAL CO., LTD. All rights reserved.</div>
                        <div class="links">
                            <div @click="openServe" style="cursor:pointer">Terms of Service</div>
                            <div>|</div>
                            <div @click="openPrivate" style="cursor:pointer">Privacy Policy</div>
                            <div>|</div>
                            <div @click="openMail" style="cursor:pointer">Contact us</div>
                        </div>
                    </div>
                    <!-- <div class="bottom-right">
                        <div @click="openMate(idx)" class="logo-item" v-for="(item, idx) in 15" :key="idx">
                            <img :src="require(`@/assets/index/footer/logos/logo${idx+1}.png`)" alt="">
                        </div>
                    </div> -->
                </div>
            </div>

        </div>

      </div>

      <div class="bottom-left mobile-state">
            <div>Copyright © 2021 MOBOX DIGITAL CO., LTD. All rights reserved.</div>
            <div class="links">
                <div @click="openServe" style="cursor:pointer">Terms of Service</div>
                <div>|</div>
                <div @click="openPrivate" style="cursor:pointer">Privacy Policy</div>
                <div>|</div>
                <div @click="openMail" style="cursor:pointer">Contact us</div>
            </div>
        </div>
  </footer>
</template>

<script>
// import {OLDPAGE} from '@/utils/constant'

export default {
    methods:{
        toContact(key){
            switch(key){
                case `discord`:
                    window.open(`https://discord.com/invite/mobox`)
                    break;
                case `twitter`:
                    window.open(`https://twitter.com/MOBOX_Official`)
                    break;
                case `telegram`:
                    window.open(`https://t.me/mobox_io`)
                    break;
                case `med`:
                    window.open(`https://mbox.medium.com/`)
                    break;
                default:
                    break;
            }
        },
        toLink(key){
            let url = ``;

            switch(key){
                case `home`:
                    url = `/`;
                    this.$router.push(url);
                    break;
                case `farm`:
                    url = `/iframe/momo`;
                    this.$router.push(url);
                    break;
                case `block`:
                    url = `/block-brawler`;
                    this.$router.push(url);
                    break;
                case `token`:
                    url = `/iframe/tokenmaster`;
                    this.$router.push(url);
                    break;
                case `nft`:
                    url = `/iframe/momo?path=market&tab=0`;
                    this.$router.push(url);
                    break;
                case `vote`:
                    url = `/governance/list?tab=momo`;
                    this.$router.push(url);
                    break;
                case `community`:
                    url = `https://www.mobox.io/community/`;
                    window.open(url)
                    break;
                case `docs`:
                    url = `https://faqen.mobox.io/`;
                    window.open(url)
                    break;
                case `download`:
                    url = `/?toDownLoad=true`;
                    this.$router.push(url);
                    break;
                default:
                    break;
            }
        },
        openServe() {
            // const lang = Common.getStorageItem("lang") || "en";
            // const keyend = lang === "zh-CN" ? "zh" : "en";

            window.open(`./docs/termofuseen.pdf`);
        },

        openPrivate() {
            // const lang = Common.getStorageItem("lang") || "en";
            // const keyend = lang === "zh-CN" ? "zh" : "en";

            window.open(`./docs/privateen.pdf`);
        },

        openMail() {
            window.open("mailto:community@mobox.io");
        },

        openMate(idx){
            // const MATE_LINK = {
            //     // cmc: "https://coinmarketcap.com/earn/project/mobox",
            //     bsc: "https://www.binance.org/",
            //     // pancake:  "https://pancakeswap.info/pool/0x8FA59693458289914dB0097F5F366d771B7a7C3F",
            //     // math: "https://mathwallet.org/",
            //     // dapp: "https://dappradar.com/binance-smart-chain/games/mobox-nft-farmer",
            //     tp:  "https://www.tokenpocket.pro/",
            //     // ape: "https://apeswap.finance/",
            //     cko: "https://www.coingecko.com/en/coins/mobox",
            //     // certik: "https://www.certik.org/projects/mobox",
            //     // bnft: "https://www.binance.com/en/nft",
            //     africa : "https://twitter.com/BinanceAfrica/status/1407235892364800001",
            //     // a:"https://thealliance.gg/",
            //     // binance:"https://www.binance.com/",
            // }

            switch(idx){
                case 0:
                    window.open("https://www.binance.com/");
                    break;
                case 1:
                    window.open("https://thealliance.gg/");
                    break;
                case 2:
                    window.open("https://dappradar.com/binance-smart-chain/games/mobox-nft-farmer");
                    break;
                case 3:
                    window.open("https://www.certik.org/projects/mobox");
                    break;
                case 4:
                    window.open("https://www.binance.org/");
                    break;
                case 5:
                    window.open("https://coinmarketcap.com/earn/project/mobox");
                    break;
                case 6:
                    window.open("https://pancakeswap.info/pool/0x8FA59693458289914dB0097F5F366d771B7a7C3F");
                    break;
                case 7:
                    window.open("https://mathwallet.org/");
                    break;
                case 8:
                    window.open("https://www.binance.com/en/nft");
                    break;
                case 9:
                    window.open("https://apeswap.finance/");
                    break;
                case 10:
                    window.open("https://www.tokenpocket.pro/");
                    break;
                case 11:
                    window.open("https://www.coingecko.com/en/coins/mobox");
                    break;
                case 12:
                    window.open("https://yieldguild.io/");
                    break;
                case 13:
                    window.open("https://mdex.com/");
                    break;
                case 14:
                    window.open("https://labs.binance.com/");
                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .footer{
        padding: 100px 0;
        background: #000;

        .mobile-state{
            display: none;
        }

        .footer-contain{
            width: 85%;
            margin: auto;
            position: relative;

            .footer-top{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .top-left{
                    .img-box{
                        img{
                            cursor: pointer;
                            margin-right: 30px;
                        }
                    }

                    .link-box{
                        width: 50%;
                        margin-top: 90px;

                        div{
                            cursor: pointer;
                            display: inline-block;
                            color: white;
                            font-size: 14px;
                            margin-right: 20px;
                        }
                    }
                }

                .top-right{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
            }

            // .foot-logo{
            //     // margin-right: 2%;
            // }

            .footer-bottom{
                margin-top: 105px;
                color: white;
                font-size: 9px;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;

                .bottom-left{
                    font-size: 14px;
                    display: inline-block;

                    .links{
                        display: flex;
                        justify-content: space-between;
                    }
                }

                .bottom-right{
                    width: 40%;

                    .logo-item{
                        display: inline-block;
                        cursor: pointer;
                        width: 20%;
                        margin: 2%;

                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }

    }
</style>
