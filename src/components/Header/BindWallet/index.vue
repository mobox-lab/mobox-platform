// <template>
//     <div class="form-bg">
//         
//         <div class="mobox-wallet">
            <div class="title">{{getTitle}}</div>
            <div @click="connectMbox()" class="wallet-box">
                <div class="wallet-name">Mobox Wallet</div>
            </div>
        </div>

        <div class="other-bg">
            <div class="title">{{$t('Home_12')}}</div>
            <div style="max-width:350px;margin:auto">
                <div @click="connectMeta()" class="wallet-box">
                    <div class="wallet-bg"><img src="@/assets/index/metamask.png" alt=""></div>
                    <div class="wallet-name">Metamask</div>
                </div>
                <div @click="connectMath()" class="wallet-box">
                    <div class="wallet-bg"><img src="@/assets/index/mathwallet.png" alt=""></div>
                    <div class="wallet-name">Math Wallet</div>
                </div>
                <div @click="connectBinance()" class="wallet-box">
                    <div class="wallet-bg"><img src="@/assets/index/binance.png" alt=""></div>
                    <div class="wallet-name">BNB Chain Wallet</div>
                </div>
                <div @click="connectMath()" class="wallet-box">
                    <div class="wallet-bg"><img src="@/assets/index/tokenpocket.png" alt=""></div>
                    <div class="wallet-name">Token Pocket</div>
                </div>
                <div @click="connectMath()" class="wallet-box">
                    <div class="wallet-bg"><img src="@/assets/index/trust.png" alt=""></div>
                    <div class="wallet-name">Trust Wallet</div>
                </div>
                <div @click="connectWalletConnect()" class="wallet-box">
                    <div class="wallet-bg"><img src="@/assets/index/walletconnect.png" alt=""></div>
                    <div class="wallet-name">Wallet Connect</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import FormLayout from '../FormLayout';
import request from "@/utils/request";
import {API_USER_BIND_ADDRESS} from '@/utils/constant';
import { CommonMethod } from "@/mixin";

// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

export default {
    props:{
        shouldOpenBox : {
            type: Boolean,
            default:false
        },
        isSendBindRequest : {
            type: Number,
            default:1
        },
        bindAddressCb : {
            type: Function,
            default:()=>{}
        },
    },
    mixins: [
        CommonMethod
    ],
    components: {
        // FormLayout,
    },
    computed:{
        getTitle(){
            return this.isSendBindRequest == 3 ? this.$t('Asset_11') : this.$t('Home_10')
        }
    },
    data(){
        return {
            walletInfo:{
                address:'',
                chainId:0
            },
            signTs:0,
            signStr : `bits_wallet_sign`
        }
    },
    methods:{
        getSign(){
            this.signTs = Math.floor(Date.now() / 60000);
            this.signStr = this.isSendBindRequest == 2 ? `wallet_bind_${this.signTs}` : (this.isSendBindRequest == 3 ? `wallet_withdraw_${this.signTs}` : `bits_wallet_sign`);

            return this.signStr
        },
        connectWalletConnect(){
            // const connector = new WalletConnect({
            // bridge: "https://bridge.walletconnect.org", // Required
            //     qrcodeModal: QRCodeModal,
            // });

            // // Check if connection is already established
            // if (connector.connected) {
            //     // create new session
            //     const message = this.getSign();

            //     const msgParams = [
            //         connector._accounts[0],                            // Required
            //         message
            //     ];

            //     // Sign message
            //     connector
            //     .signMessage(msgParams)
            //     .then(async(result) => {
            //         // Returns signature.
            //         let bindRes = await this.bindAddress(connector._accounts[0], result)
            //         if(bindRes){
            //             // 关闭此界面
            //             this.$parent.$parent.isShowBindWallet = false;
            //             // 进入领key界面
            //             console.log('绑定成功')
            //         }
            //     })
            //     .catch(error => {
            //         // Error returned when rejected
            //         console.error(error);
            //     })
                
            //     return
            // } else {
            //     connector.createSession();
            // }

            // // Subscribe to connection events
            // connector.on("connect", (error, payload) => {
            //     if (error) {
            //         throw error;
            //     }

            //     // Get provided accounts and chainId
            //     const { accounts, chainId } = payload.params[0];
                
            //     this.walletInfo.address = accounts[0];
            //     this.walletInfo.chainId = chainId;

            //     const message = this.getSign();

            //     const msgParams = [
            //         this.walletInfo.address,                            // Required
            //         message
            //     ];

            //     console.log(msgParams);

            //     // Sign message
            //     connector
            //     .signMessage(msgParams)
            //     .then(async(result) => {
            //         // Returns signature.
            //         let bindRes = await this.bindAddress(accounts[0], result)
            //         if(bindRes){
            //             // 关闭此界面
            //             this.$parent.$parent.isShowBindWallet = false;
            //             // 进入领key界面
            //             console.log('绑定成功')
            //         }
            //     })
            //     .catch(error => {
            //         // Error returned when rejected
            //         console.error(error);
            //     })
                
            //     if(chainId != 56){
            //         this.showNotify(this.$t('Error_27'), 'error');
            //         return
            //     }

            // });
        },
        async connectMbox(){
            const {mbox} = window;
            if(!mbox){
                this.showNotify(this.$t('Error_22'), 'error');
                return
            }
            let wallets = await mbox.BinanceChain.enable();
            if(wallets && wallets[0]) { 
                mbox.bscWeb3.personal.sign(this.getSign(), wallets[0], async (err, res)=>{
                    if(!err){
                        let bindRes = await this.bindAddress(wallets[0], res)
                        if(bindRes){
                            // 关闭此界面
                            this.$parent.$parent.isShowBindWallet = false;
                            // 进入领key界面
                            console.log('绑定成功')
                        }
                    }
                })
            } else {
                this.showNotify(this.$t('Error_22'), 'error');
            }
        },
        async connectMath(){
            const {web3} = window;
            if(!web3){
                this.showNotify(this.$t('Error_22'), 'error');
                return
            }
            let wallets = web3.eth.accounts;
            if(wallets && wallets[0]) {
                web3.personal.sign(this.getSign(), wallets[0], async (err, res)=>{
                    if(!err){
                        let bindRes = await this.bindAddress(wallets[0], res)
                        if(bindRes){
                            // 关闭此界面
                            this.$parent.$parent.isShowBindWallet = false;
                            // 进入领key界面
                            console.log('绑定成功')
                        }
                    }
                })
            } else {
                this.showNotify(this.$t('Error_22'), 'error');
            }
            console.log(wallets)
        },
        async connectBinance(){
            const {BinanceChain} = window;
            if(!BinanceChain){
                this.showNotify(this.$t('Error_22'), 'error');
                return
            }
            let wallets = await BinanceChain.enable();

            // const key = "bits_wallet_sign";

            if(wallets && wallets[0]){
                BinanceChain.bnbSign(wallets[0], this.getSign()).then(async (res)=>{
                    console.log(res)
                    let bindRes = await this.bindAddress(wallets[0], res.signature)
                    if(bindRes){
                        // 关闭此界面
                        this.$parent.$parent.isShowBindWallet = false;
                        // 进入领key界面
                        // console.log('领key界面')
                    }
                }).catch((err)=>{
                })
            } else {
                this.showNotify(this.$t('Error_22'), 'error');
            }
        },
        async connectMeta(){
            // 链接metamask钱包
            const {ethereum} = window;
            if(!ethereum){
                this.showNotify(this.$t('Error_22'), 'error');
                return
            }
            let wallets = await ethereum.enable();
            if(wallets && wallets[0]){
                ethereum.request({
                    jsonrpc:"2.0",
                    method: 'personal_sign',
                    params: [wallets[0], this.getSign()]
                }).then(async (res)=>{
                    
                    let bindRes = await this.bindAddress(wallets[0], res)
                    if(bindRes){
                        // 关闭此界面
                        this.$parent.$parent.isShowBindWallet = false;
                        // 进入领key界面
                        console.log('领key界面')
                    }
                }).catch((err)=>{
                    console.log(err)
                })
            } else {
                this.showNotify(this.$t('Error_22'), 'error');
            }
        },
        async bindAddress(address, sign){
            try{
                if(this.isSendBindRequest == 0){
                    this.$root.eventHub.$emit('bind-wallet', address, sign)
                    return true
                }else if(this.isSendBindRequest == 1){
                    const data = {chainType:'eth', address, sign}
                    const res = await request(API_USER_BIND_ADDRESS, {
                        method: 'POST',
                        data
                    });
    
                    if(res.code == 200){
                        let wallets = [];
                        res.data.map((item)=>{
                            wallets.push(item.address)
                        });
        
                        this.$store.commit('userState/setUserInfo', {wallets});
                        return true
                    } else {
                        return false
                    }
                } else if(this.isSendBindRequest == 2){
                    this.bindAddressCb({sign, signTs:this.signTs})
                    this.$parent.$parent.isShowBindWallet = false;
                } else if(this.isSendBindRequest == 3){
                    this.bindAddressCb({sign, signTs:this.signTs})
                    this.$parent.$parent.isShowBindWallet = false;
                }
            }catch(error){
                console.log("error")
                if (error.code) {
                    this.showNotify(this.$t(`Error_${error.code}`), 'error');
                } else {
                    this.showNotify(this.$t('Error_6'), 'error');
                }

                return false
            }
        },
    }

}
</script>

<style lang="less" scoped>
    .form-bg{
        border-radius: 15px;
        background:white;
        overflow: hidden;
    }

    .mobox-wallet{
        width: 397px;
        text-align: center;
        padding: 40px 0;

        .title{
            font-size: 22px;
            font-weight: bold;
            color: #264498;
            padding-bottom: 40px;
        }

        .wallet-box{
            display: inline-block;
            cursor: pointer;

            img{
                width: 76px;
                margin-bottom: 5px;
            }

            .wallet-name{
                font-size: 16px;
                font-weight: bold;
                line-height: 19px;
                color: #343434;
            }
        }
    }

    .other-bg{
        color: black;
        background: #F4F5FA;
        text-align: center;
        padding-bottom: 20px;

        .title{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 22px;
            color: #264498;
            letter-spacing: 2px;
            padding: 20px 0;
        }

        .wallet-box{
            display: inline-block;
            cursor: pointer;
            width: 100px;
            margin-bottom: 15px;

            .wallet-bg{
                border-radius: 50%;
                width: 50px;
                height: 50px;
                background: white;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 25px;
                }
            }

            .wallet-name{
                margin-top: 5px;
                color: #2454C6;
                font-weight: bold;
                font-size: 12px;
            }
        }
    }

    
</style>