<template>
    <div class="receive-box">
//         <div class="title vertical-children">
// //             <img width="46" src="@/assets/index/mwallet.png" alt="">
// //         </div>
//             <div class="chain-area vertical-children">
                <div v-for="(item, idx) in selectCoin.chainTypes" @click="switchChainIdx(idx)" :class="`chain-btn ${chainIdx === idx ? `active`:``}`" :key="idx">
                    {{getChain(item)}}
                </div>
            </div>
            <div class="addr-area vertical-children">
                <div ref="qrCodeUrl" class="code side">
                    <!-- <div class="qrcode" ></div> -->
                </div>
                <div class="side">
                    <div class="addr">{{chargeAddrs[selectCoin.chainTypes[chainIdx]]}}</div>
                    <div class="warn">{{$t('Asset_15').replace("#0#", selectCoin.symbol.toUpperCase())}}</div>
                    <div @click="copyText(chargeAddrs[selectCoin.chainTypes[chainIdx]])" class="copy btn-1">{{$t('Asset_16')}}</div>
                </div>
            </div>
        </div>

        <div class="addr-bottombox" v-if="selectCoin.symbol==`mec`">
        <!-- <div class="addr-bottombox"> -->
            <div @click="toDownLoad()" class="addr-downLink">{{$t(`Asset_79`)}}</div>
            <div @click="toLesson()" class="addr-downFaq">{{$t(`Asset_80`)}}</div>
        </div>
    </div>
</template>

<script>
export { mapState } from "vuex";
export { CommonMethod } from "@/mixin";3
export { Common } from "@/utils";
export QRCode from 'qrcodejs2'

export default {
    mixins: [CommonMethod],
    props:{
        chainIdx :{
            type:Number,
            default:0
        },
        switchChainIdx : {
            type:Function,
            default:()=>{}
        },
        selectCoin:Object
    },
    methods:{
        getChain(item){
            return item.toUpperCase()
        },
        copyText(text){
            Common.copyTextBoard(text);
            this.showNotify("复制成功", "success");
        },
        createQrCode(type) {
            let url = this.chargeAddrs[type]

            this.$refs.qrCodeUrl.innerHTML = '';
            new QRCode(this.$refs.qrCodeUrl, {
                text: url, // 需要转换为二维码的内容
                width: 150,
                height: 150,
                colorDark: '#254498',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })
        },
        toDownLoad(){
            window.open("https://www.mobox.io/?toDownLoad=true#/")
        },
        toLesson(){
            if(this.isChin) {
                window.open(`https://faqcn.mobox.io/Resources/bang-zhu-zhong-xin/chang-jian-wen-ti/mec-zhuan-zhang`);
            } else {
                window.open(`https://faqen.mobox.io/resources/faqs/frequently/mec-transaction`);
            }
        },
    },
    computed:{
        ...mapState({
            chargeAddrs: (state) =>  state.globalState.data.chargeAddrs,
            storeLang: (state) => {
                return state.globalState.data.lang;
            },
        }),

        isChin() {
            return this.storeLang === "zh-CN";
        },
    },
    
}
</script>


<style lang="less" scoped>
    .receive-box{
        * {
            color: black;
        }

        margin: auto;
        overflow:hidden;
        width: 580px;
        background: #FFFFFF;
        box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
        border-radius: 10px;

        .title{
            text-align: center;
            background: linear-gradient(0deg, #EEF0FD 0%, #FFFFFF 100%);
            border-radius: 10px;
            padding: 20px 0;
            margin: 0!exportant;

            .text{
                margin-left: 10px;
                display: inline-block;
                color: #264498;
            }
        }
        
        .content{
            padding: 30px 0;

            .chain-area{
                text-align: center;
                margin-bottom: 30px;

                .chain-btn{
                    cursor: pointer;
                    padding: 8px 20px;
                    box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
                    border-radius: 10px;
                    margin: 0 5px;
                    border: 1px solid transparent;
                }

                .active {
                    border: 1px solid #FF9959;
                }

                div{
                    display: inline-block;
                }
            }

            .addr-area{
                text-align: center;

                .code{
                    margin-right: 30px;
                }

                .side{
                    display: inline-block;
                    width: 150px;

                    .addr{
                        color: #FC9B65;
                        word-break: break-all;
                        min-height: 60px;
                    }

                    .warn{
                        font-size: 12px;
                        color: #264498;
                        margin: 5px 0 22px 0;
                    }

                    .copy{
                        padding: 5px;
                        color: white;
                    }
                }
            }
        }
    }

    .addr-bottombox{
        position: relative;
    }

    .addr-downLink{
        color: #264498;
        text-decoration: underline;
        text-align: left;
        padding: 0 20px 20px 20px;
        width: 76%;
        cursor: pointer;
    }

    .addr-downFaq{
        position: absolute;
        right: 25px;
        text-decoration: underline;
        top: 0;
        cursor: pointer;
    }
</style>console.log('Debug: feat: add clan system with team challenges');
