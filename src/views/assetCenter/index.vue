<template>
//     <div v-if="isLogin" class="asset-center">
//         <div class="asset-top">
//             <img width="600" src="@/assets/rank/bg1.png" alt="">
// 
//             <div v-if="selectIdx === 0" class="asset-box">
//                 <div class="title">{{$t('Asset_1')}}</div>
//                 <div class="balance">{{`≈ ${getWalletBalance}`}}</div>
            </div>


            <div v-else class="section-box">
                <div @click="selectPage(0)" class="back-btn">{{$t('Register_13')}}</div>

                <div class="coin-info vertical-children">
                    <img :src="`https://www.mobox.io/icons/${selectCoin.symbol}.png`" alt="">
                    <div class="content">
                        <div class="coin">{{`${selectCoin.balance} ${selectCoin.symbol.toUpperCase()}`}}</div>
                        <div class="currency">{{getRate(selectCoin)}}</div>
                    </div>
                </div>

                <div class="select-area">
                    <div @click="selectPage(1)" :class="`${selectIdx === 1 ? `active` : ``}`">{{$t('Asset_10')}}</div>
                    <div @click="selectPage(2)" :class="`${selectIdx === 2 ? `active` : ``}`">{{$t('Asset_11')}}</div>
                </div>
            </div>

            <div v-if="selectIdx==0" @click="openLog" class="log-btn">{{$t('Asset_27')}}</div>
        </div>

        <div v-show="selectIdx === 0" class="asset-content">
            <div class="title"><span class="label-head"></span> {{$t('Asset_4')}}</div>
            <div class="asset-body-board">
                <div class="table-line vertical-children">
                    <div @click="tete()" class="table-box-1">{{$t('Asset_6')}}</div>
                    <div class="table-box-1">{{$t('Asset_7')}}</div>
                    <div class="table-box-1">{{$t('Asset_8')}}</div>
                    <div class="table-box-2">{{$t('Asset_9')}}</div>
                </div>
                
                <div v-for="(item,idx) in balanceInfo" :key="idx" class="table-line vertical-children">
                    <div class="table-box-1 vertical-children">
                        <img class="coin-box" width="37" :src="`https://www.mobox.io/icons/${item.symbol}.png`" alt="">
                        <span> {{item.symbol.toUpperCase()}}</span>
                    </div>
                    <div class="table-box-1">{{getConvert(item.balance)}}</div>
                    <div class="table-box-1">{{`${getRate(item)}`}}</div>
                    <div class="table-box-2 vertical-children">
                        <div @click="receiveCoin(item)" class="operate-box">
                            <img src="@/assets/balance/receive.png" alt="">
                            <div>{{$t('Asset_10')}}</div>
                        </div>
                        <div @click="sendCoin(item)" class="operate-box">
                            <img src="@/assets/balance/withdraw.png" alt="">
                            <div>{{$t('Asset_11')}}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div v-show="selectIdx === 1" class="asset-content">
            <div class="receive-area">
                <ReceiveBox ref="receivebox" :chainIdx="chainIdx" :switchChainIdx="switchChainIdx" :selectCoin="selectCoin" />
                <!-- <div class="receive-box">
                    <div class="title vertical-children">
                        <img width="46" src="@/assets/index/mwallet.png" alt="">
                        <div class="text">快速充币</div>
                    </div>
                    <div class="content">
                        <div class="chain-area vertical-children">
                            <div v-for="(item, idx) in selectCoin.chainTypes" @click="switchChainIdx(idx)" :class="`chain-btn ${chainIdx === idx ? `active`:``}`" :key="idx">
                                {{item}}
                            </div>
                        </div>
                        <div class="addr-area vertical-children">
                            <div ref="qrCodeUrl" class="code side">
                            </div>
                            <div class="side">
                                <div class="addr">{{chargeAddrs[selectCoin.chainTypes[chainIdx]]}}</div>
                                <div class="warn">{{$t('Asset_15').replace("#0#", selectCoin.symbol)}}</div>
                                <div @click="copyText(chargeAddrs[selectCoin.chainTypes[chainIdx]])" class="copy btn-1">{{$t('Asset_16')}}</div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="receive-list">
                <div class="title"><span class="label-head"></span> {{$t('Asset_17')}}</div>
                <div class="table-list">
                    <div class="table-line vertical-children">
                        <div class="table-box-1">{{$t('Asset_18')}}</div>
                        <div class="table-box-1">{{$t('Asset_19')}}</div>
                        <div class="table-box-1">{{$t('Asset_20')}}</div>
                        <div style="text-align:center" class="table-box-1">{{$t('Asset_21')}}</div>
                        <div style="text-align:center" class="table-box-1">{{$t('Asset_22')}}</div>
                    </div>

                    <div v-for="(item,idx) in logs" :key="idx" class="table-line vertical-children">
                        <div class="table-box-1">
                            <img width="35" src="@/assets/balance/in.png" alt="">
                            <span> {{$t('Asset_10')}}</span>
                        </div>
                        <div class="table-box-1">{{item.amount}}</div>
                        <div class="table-box-1">{{getTs(item.ts)}}</div>
                        <div style="text-align:center" class="table-box-1">{{$t('Asset_23')}}</div>
                        <div style="text-align:center" class="table-box-1">
                            <div @click="checkMoreLog(item)" class="btn-more">{{$t('Asset_26')}}</div>
                        </div>
                    </div>

                    <div class="rank-body-page">
                        <img @click="turnPage(-1)" style="cursor:pointer;" width="16px" src="@/assets/rank/back.png" alt="">
                        <div style="padding:0 5px;">
                            {{$t('Ranking_10')}}
                            <div class="rank-body-curPage" style="display:inline-block">{{page+1}}</div>
                            {{$t('Ranking_11').replace("#0#", maxPage)}}
                        </div>
                        <img @click="turnPage(1)" width="16px" style="cursor:pointer;transform:rotate(180deg);" src="@/assets/rank/back.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div v-show="selectIdx === 2" class="asset-content">
            <div class="send-area">
                <div class="send-box">
                    <div class="chain-area">
                        <div v-for="(item, idx) in selectCoin.chainTypes" @click="switchChainIdx(idx)" :class="`chain-btn ${chainIdx === idx ? `active`:``}`" :key="idx">
                            {{getChain(item)}}
                        </div>
                    </div>
                    <div class="title"><span class="label-head"></span> {{$t('Asset_34')}} <span v-if="!addressValid && this.address" class="error-tip">{{$t('Asset_53')}}</span></div>
                    <div class="input-box"><input v-model="address" :disabled="userInfo.open_camp === 'bsc_wallet'" :placeholder="$t('Asset_34')" type="text"></div>

                    <div class="vertical-children">
                        <div :class="`${canSwap ? `swap-left` : ``}`">
                            <div class="title"><span class="label-head"></span> {{$t('Asset_37')}} <span v-if="!amountValid && this.amount" class="error-tip">{{amountError}}</span> <span class="balance-range">{{`${getRange.min}~${getRange.max}`}}</span></div>
                            <div class="input-box"><input v-model="amount" :placeholder="`${selectCoin.balance} ${selectCoin.symbol.toUpperCase()} ≈ ${getRate(selectCoin)}`" type="text"></div>
                        </div>
                            
                        <div v-if="canSwap" class="swap-right">
                            <div class="title"><span class="label-head"></span> {{$t('Asset_60')}} <span class="balance-range">{{$t('Asset_61')}}</span></div>
                            <div @click="selectSwap()" :class="`swap-box ${wantSwap ? `swap-box-active`: ``}`">
                                0.1BNB ≈ {{getSwapAmount}}{{this.selectCoin.symbol.toUpperCase()}}
                                <div class="swap-btn"><div :class="`swap-selected ${wantSwap ? `active` : ``}`"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="operate">
                        <div>{{$t('Asset_40')}} : {{getFee}} {{this.selectCoin.symbol.toUpperCase()}}</div>
                        <div>{{$t('Asset_41')}} : {{finalAmount}}</div>

                        <!-- <div class="btn-1" @click="chargeCoin()">{{$t('Register_8')}}</div> -->
                        <Button style="color:white" :disabled="canSendCoin" @click="confrimSend()">{{$t('Register_8')}}</Button>
                        <!-- <Button style="color:white" @click="confrimSend()">{{$t('Register_8')}}</Button> -->
                        <!-- <div class="btn-1" @click="chargeCoin()">{{$t('Register_8')}}</div> -->
                    </div>
                </div>
            </div>
            <div class="send-list">
                <div class="title"><span class="label-head"></span> {{$t('Asset_17')}}</div>
                <div class="table-list">
                    <div class="table-line vertical-children">
                        <div class="table-box-1">{{$t('Asset_18')}}</div>
                        <div class="table-box-1">{{$t('Asset_19')}}</div>
                        <div class="table-box-1">{{$t('Asset_20')}}</div>
                        <div class="table-box-1" style="text-align:center">{{$t('Asset_21')}}</div>
                        <div class="table-box-1" style="text-align:center">{{$t('Asset_22')}}</div>
                    </div>

                    <div v-for="(item,idx) in logs" :key="idx" class="table-line vertical-children">
                        <div class="table-box-1">
                            <img width="35" src="@/assets/balance/out.png" alt="">
                            <span> {{$t('Asset_11')}}</span>
                        </div>
                        <div class="table-box-1">{{item.amount}}</div>
                        <div class="table-box-1">{{getTs(item.ts)}}</div>
                        <div class="table-box-1" style="text-align:center">{{$t('Asset_23')}}</div>
                        <div class="table-box-1" style="text-align:center">
                            <div @click="checkMoreLog(item)" class="btn-more">{{$t('Asset_26')}}</div>
                        </div>
                    </div>
                </div>
                
                <div class="rank-body-page">
                        <img @click="turnPage(-1)" style="cursor:pointer;" width="16px" src="@/assets/rank/back.png" alt="">
                        <div style="padding:0 5px;">
                            {{$t('Ranking_10')}}
                            <div class="rank-body-curPage" style="display:inline-block">{{page+1}}</div>
                            {{$t('Ranking_11').replace("#0#", maxPage)}}
                        </div>
                        <img @click="turnPage(1)" width="16px" style="cursor:pointer;transform:rotate(180deg);" src="@/assets/rank/back.png" alt="">
                    </div>
            </div>
        </div>

        <Dialog v-model="isShowWithdraw">
            <div class="form-bg">
                <FormLayout :title="$t('Asset_11')">
                    <div class="send-info">
                        <div class="send-withdraw-title">{{$t('Register_8')}}</div>
                        <div class="send-withdraw-amount">{{amount}} {{selectCoin.symbol.toUpperCase()}}</div>
                        <!-- <div class="send-withdraw-cash">{{`≈ ${getRate({symbol:selectCoin.symbol, balance:amount})}`}}</div> -->
                        <div class="send-withdraw-text">To<br />{{address}}</div>
                        <div class="send-withdraw-fee">{{$t('Asset_40')}} : {{getFee}}</div>
                        <div class="send-withdraw-receive">{{$t('Asset_41')}} : {{finalAmount}}</div>
                    </div>

                    <div>
                        <!-- <div v-if="userInfo.mail" class="user-vertify">
                            <div class="icon" @click="chooseVertify(0)">
                            <i v-if="selectVertify===0 || (userInfo.mail && !userInfo.mobile)" class="iconfont">&#xe62a;</i>
                            <i v-else class="iconfont">&#xe627;</i>
                            </div>
                            <span>{{$t('Asset_62')}}</span>
                        </div> -->
                        <div v-if="userInfo.mobile && userInfo.open_camp != 'bsc_wallet'" class="user-vertify">
                            <div class="icon" @click="chooseVertify(1)">
                            <i class="iconfont">&#xe62a;</i>
                            <!-- <i class="iconfont">&#xe627;</i> -->
                            </div>
                            <span>{{$t('Asset_63')}}</span>
                        </div>
                    </div>

                    <InputItem 
                    :label="$t('Register_6')"
                    :placeholder="$t('Register_7')"
                    v-model="vertifyCode"
                    v-if="userInfo.open_camp != 'bsc_wallet'"
                    >
                        <SendCodeButton
                            slot="suffix"
                            :disabled="false"
                            :onSend="sendCode"
                            style="color:white"
                        />
                    </InputItem>

                    <InputItem
                        v-if="userInfo.open_camp != 'bsc_wallet'"
                        maxlength="6"
                        :label="$t('Asset_48')"
                        type="password"
                        :placeholder="$t('Register_15')"
                        v-model="password"
                        :confirmInput="confirmWithdraw"
                    />

                    <Button style="color:white" :disabled="submitWithdraw" @click="confirmWithdraw()">{{$t('Asset_11')}}</Button>
                </FormLayout>
            </div>
        </Dialog>

        <Dialog v-model="isShowLogDetail">
            <div class="form-bg">
                <div v-if="logDetail.length > 1" class="logdetail-select vertical-children">
                    <div @click="setLogIdx(idx)" v-for="(item, idx) in logDetail" :key="idx" :class="`logdetail-item ${idx === logIdx ? `log-actvie` : ``}`">
                        {{item.coin.toUpperCase()}}
                    </div>
                </div>
                <FormLayout :title="$t('Asset_27')" describe="Asset_28">
                    <div class="trans-box">
                        <div v-if="logDetail[logIdx].action == 701"><img width="35" src="@/assets/balance/in.png" alt=""></div>
                        <div v-if="logDetail[logIdx].action == 5001"><img width="35" src="@/assets/balance/out.png" alt=""></div>
                        <div class="trans-status">Transaction Successed</div>
                        <div class="trans-amount">{{`${logDetail[logIdx].action == 701 ? `+` : `-`}${logDetail[logIdx].amount} ${logDetail[logIdx].coin.toUpperCase()}`}}</div>
                        
                        <div class="trans-info">
                            <div class="label-head"></div> {{$t('Asset_33')}}
                            <div class="content">{{logDetail[logIdx].fromAddr}}</div>
                        </div>
                        <div class="trans-info">
                            <div class="label-head"></div> {{$t('Asset_34')}}
                            <div class="content">{{logDetail[logIdx].toAddr}}</div>
                        </div>
                        <div class="trans-info">
                            <div class="label-head"></div> {{$t('Asset_35')}}
                            <div class="content">{{getTs(logDetail[logIdx].ts)}}</div>
                        </div>
                        <div class="trans-info">
                            <div class="label-head"></div> {{$t('Asset_36')}}
                            <div style="font-size:10px;" class="content">
                                <div class="tx">{{logDetail[logIdx].tx}}</div>
                                <img @click="copyText(logDetail[logIdx].tx)" class="copy-icon" src="@/assets/balance/copy.png" alt="">
                            </div>
                        </div>
                    </div>
                </FormLayout>
            </div>
        </Dialog>

        <Dialog v-model="isShowWarn">
            <div class="form-bg">
                <FormLayout :title="$t('Asset_64')">
                    <div class="warn-bg">
                        <div v-html="$t('Asset_65')"></div>
                        <div @click="closeWarn" class="btn-1">{{$t("Asset_66")}}</div>
                    </div>
                </FormLayout>
            </div>
        </Dialog>

        <Dialog v-model="isShowRecord">
            <div class="form-bg">
                <FormLayout :title="$t('Asset_27')" describe="">
                    <div style="padding: 0 5px">
                        <div @scroll="scollRecord" class="coin-record">
                            <div v-for="(item, idx) in coinRecords" :key="idx" class="coin-item">
                                <img v-if="getTransType(item) == 0" width="40" src="@/assets/balance/in.png" alt="">
                                <img v-if="getTransType(item) == 1" width="40" src="@/assets/balance/out.png" alt="">
                                <div class="coin-item-detail">
                                    <div style="color:black">{{$t(getLocale(item))}}</div>
                                    <div>{{`${item.amount} ${item.coin.toUpperCase()}`}}</div>
                                </div>

                                <div class="coin-item-ts">
                                    <div style="color:black">{{getDateFtt(item.ts)}}</div>
                                    <div style="color:black">{{getTransType(item) == 0 ? $t('Asset_10') : $t('Asset_11')}}</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </FormLayout>
            </div>
        </Dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Common } from "@/utils";
import { CommonMethod } from "@/mixin";
import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import FormLayout from '@/components/Header/FormLayout.vue';
import InputItem from '@/components/Header/Input.vue';
import SendCodeButton from '@/components/SendCodeButton.vue';
import ReceiveBox from '@/components/ReceiveBox/index.vue';
import { sendMobileCode } from '@/services/sendCode';
import request from "@/utils/request";
import {COST_TYPE} from "@/utils/enums.js";
import {API_USER_WALLET_WITHDRAW ,API_USER_WITHDRAW, API_PAYMENT_LOGS, API_PAYMENT_LOGS_DETAIL} from '@/utils/constant';
// import {API_USER_WALLET_WITHDRAW} from '@/utils/constant';

export default {
    components:{
        Button,
        Dialog,
        FormLayout,
        InputItem,
        SendCodeButton,
        ReceiveBox
    },
    mixins: [CommonMethod],
    mounted(){
        const hasWarned = Common.getStorageItem('walletwarned');
        this.isShowWarn = !hasWarned;
    },
    data(){
        return {
            recordPage:0,
            coinRecords:[],
            isRequesting:false,

            isShowRecord : false,
            isShowWarn : false,

            selectVertify:0,
            selectIdx : 0,
            selectCoin:{
                symbol:'mbox',
                chainTypes:[
                    'bsc',
                    'eth',
                    'trx'
                ],
                balance:0,
            },
            chainIdx:0,

            address:'',
            amount:'',

            // 是否显示提现界面
            isShowWithdraw : false,
            isShowLogDetail : false,

            // 交易验证码 密码
            vertifyCode:'',
            password:'',

            logs:[],

            logIdx : 0,
            logDetail:[{
                action : 701,
                amount : '',
                fromAddr:'',
                toAddr:'',
                coin:'',
                tx:'',
                ts:0,
            }],

            page:0,
            maxPage:1,
            
            wantSwap:false

            // addressValid:false,
            // amountValid:false,
        }
    },
    created(){
        this.$store.dispatch('userState/getPriceList');
    },
    watch : {
        amount(){
            this.wantSwap = false;
        }
    },
    methods:{
        getLocale(item){
            const {action} = item;

            return COST_TYPE[action] ? COST_TYPE[action].locale : "unknow";
        },
        scollRecord(e){
            const {offsetHeight, scrollTop, scrollHeight} = e.target;
            if(offsetHeight+scrollTop > scrollHeight){
                this.requestMoreRecord();
            }
        },
        getDateFtt(deadline){
            return Common.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(deadline*1000));
        },
        getTransType(item){
            const {action} = item;
            
            return COST_TYPE[action] ? COST_TYPE[action].type : 0;
        },
        async requestMoreRecord(){
            if(this.isRequesting) {return}
            this.recordPage++;
            this.isRequesting = true;

            const res = await request(API_PAYMENT_LOGS, {
                method: 'POST',
                data:{
                    action : 0,
                    page : this.recordPage,
                    limit:10,
                    version:'v1'
                }
            });

            console.log(res)
            this.isRequesting = false;
            if(res.code == 200){
                if(res.data.logs.length > 0){
                    this.coinRecords = [...this.coinRecords, ...res.data.logs];
                } else {
                    this.isRequesting = true;
                }
            }

        },
        async openLog(){
            this.isShowRecord = true;
            this.recordPage = 0;

            this.coinRecords = [];
            const res = await request(API_PAYMENT_LOGS, {
                method: 'POST',
                data:{
                    action : 0,
                    page : this.recordPage,
                    limit:10,
                    version:'v1'
                }
            });

            if(res.code == 200){
                this.coinRecords = [...this.coinRecords, ...res.data.logs];
            }

            console.log(res.data)
            // if(res.code == 200){
            //     this.page = page;
            //     this.logs = res.data.logs;
            //     this.maxPage = Math.ceil(res.data.total / 10)
            // }
        },
        getChain(item){
            if(item==="bnb"){
                return "BSC"
            } else {
                return item.toUpperCase()
            }
        },
        closeWarn(){
            this.isShowWarn = false;
            Common.setStorageItem('walletwarned', "done")
        },
        chooseVertify(idx){
            this.selectVertify = idx;
        },
        setLogIdx(idx){
            this.logIdx = idx;
        },
        copyText(text){
            Common.copyTextBoard(text);
            this.showNotify(this.$t('Setting_87'), "success");
        },
        selectSwap(){
            if( Number(this.getSwapAmount) > Number(this.amount) -  this.paymentCfg[this.selectCoin.symbol].fee){
                this.showNotify(this.$t("Asset_55"), "error");
                return
            }
            this.wantSwap = !this.wantSwap;
        },
        showLogDetail(isShow){
            this.logIdx = 0;
            this.isShowLogDetail = isShow;
        },
        async checkMoreLog(item){
            this.showLogDetail(true);
            this.logDetail = [{
                action : 701,
                amount : '',
                fromAddr:'',
                toAddr:'',
                coin:'',
                tx:'',
                ts:0,
            }];
            const data = {
                action:item.action,
                log_id:item.log_id,
                version:'v1'
            }
            const res = await request(API_PAYMENT_LOGS_DETAIL, {
                method: 'POST',
                data
            });

            // let newData = {...res.data, ...data};
            let newData = [];
            res.data.map(item=>{
                newData.push({...item, ...data})
            })
            this.logDetail = newData;
            console.log(newData)
        },
        getConvert(balance){
            return Common.convert(balance)
        },
        turnPage(turn){
            let toPage = this.page + turn;
            if(toPage < 0 || toPage >= this.maxPage){
                return
            }

            if(this.selectIdx === 1){
                this.requestLogs("deposite", toPage)
            } else if(this.selectIdx === 2){
                this.requestLogs("withdraw", toPage)
            }
        },
        getTs(ts){
            return Common.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(ts*1000));
        },
        async confirmWithdraw(){
            const {open_camp} = this.userInfo;

            if(open_camp == "bsc_wallet") {
                this.isShowWithdraw = false;

                this.$root.eventHub.$emit("sign-withdraw", async ({sign, signTs}) => {
                    console.log({sign, signTs})
                    try{
                        let data = {
                            chain:this.selectCoin.chainTypes[this.chainIdx],
                            symbol:this.selectCoin.symbol,
                            amount:this.amount,
                            sign,
                            ts : Math.floor(Date.now() / 1000)
                        }

                        const res = await request(API_USER_WALLET_WITHDRAW, {
                            method: 'POST',
                            data
                        });
            
                        if(res.code == 200){
                            // this.isShowWithdraw = false;
                            this.showNotify(this.$t("Asset_31"), "success");
            
                            if(this.page === 0){
                                this.requestLogs("withdraw")
                            }
                        }
                    }catch(error){
                        if (error.code) {
                            this.showNotify(this.$t(`Error_${error.code}`), 'error');
                        } else {
                            this.showNotify(this.$t('Error_6'), 'error');
                        }
                    }
                })
            } else {
                try{
                    let data = {
                        chain_type:this.selectCoin.chainTypes[this.chainIdx],
                        address:this.address,
                        symbol:this.selectCoin.symbol,
                        amount:this.amount,
                        trade_passwd:this.password,
                        verify_code:this.vertifyCode,
                        swap:this.wantSwap ? 1 : 0
                    }
                    const res = await request(API_USER_WITHDRAW, {
                        method: 'POST',
                        data
                    });
        
                    if(res.code == 200){
                        this.isShowWithdraw = false;
                        this.showNotify(this.$t("Asset_31"), "success");
        
                        if(this.page === 0){
                            this.requestLogs("withdraw")
                        }
                    }
                }catch(error){
                    if (error.code) {
                        this.showNotify(this.$t(`Error_${error.code}`), 'error');
                    } else {
                        this.showNotify(this.$t('Error_6'), 'error');
                    }
                }
            }

        },
        sendCode(){
            // console.log(this.selectVertify)
            // console.log(sendEmailCode)
            // console.log(sendMobileCode)

            const {mobile} = this.userInfo;
    
            sendMobileCode(mobile, 'MOBILE_WITHDRAW', true);
            // if(mail && !mobile){
            //     sendEmailCode(mail, 'MAIL_WITHDRAW', true);
            // } else if(!mail && mobile) {
            //     console.log(mobile)
            //     sendMobileCode(mobile, 'MOBILE_WITHDRAW', true);
            // } else if(mail && mobile) {
            //     if(this.selectVertify === 0){
            //         sendEmailCode(mail, 'MAIL_WITHDRAW', true);
            //     } else if(this.selectVertify === 1){
            //         sendMobileCode(mobile, 'MOBILE_WITHDRAW', true);
            //     }
            // }
        },
        getRate(item){
            if(!this.coinRate[item.symbol]){
                return '-'
            } else {
                return Common.getCurrencyIcon(this.currencyInfo.selectedCurrency) + Common.getRate(item.symbol, item.balance, this.currencyInfo, this.coinRate, 6)
            }
        },
        confrimSend(){
            console.log(this.userInfo)
            const {mobile, open_camp} = this.userInfo;

            if(mobile || open_camp == "bsc_wallet"){
            // if(mobile){
                this.isShowWithdraw = true;
            } else {
                this.showNotify(this.$t("Error_1007"), "error");
            }
        },
        selectPage(idx){
            this.wantSwap = false;

            this.selectIdx = idx;
            this.switchChainIdx(0);

            this.address = this.userInfo.open_camp === "bsc_wallet" ? this.userInfo.addresses[0].address : '';
            this.amount = '';

            if(idx === 1){
                this.requestLogs("deposite")
            } else if(idx === 2){
                this.requestLogs("withdraw")
            }
        },
        // createQrCode(url) {
        //     this.$refs.qrCodeUrl.innerHTML = '';
        //     new QRCode(this.$refs.qrCodeUrl, {
        //         text: url, // 需要转换为二维码的内容
        //         width: 150,
        //         height: 150,
        //         colorDark: '#254498',
        //         colorLight: '#ffffff',
        //         correctLevel: QRCode.CorrectLevel.H
        //     })
        // },
        async requestLogs(type = 'deposite', page = 0){
            this.logs = [];
            const action = type === 'deposite' ? 701 :5001 ;
            const {symbol} = this.selectCoin;
            const res = await request(API_PAYMENT_LOGS, {
                method: 'POST',
                data:{
                    symbol,
                    action,
                    page,
                    limit:10,
                    version:'v1'
                }
            });

            console.log(res.data)
            if(res.code == 200){
                this.page = page;
                this.logs = res.data.logs;
                this.maxPage = Math.ceil(res.data.total / 10)
            }
        },
        receiveCoin(coinInfo){
            // console.log(coinInfo)
            console.log(this.chargeAddrs)
            this.selectCoin = coinInfo;
            this.selectPage(1);
        },
        sendCoin(coinInfo){
            console.log(coinInfo)
            this.selectCoin = coinInfo;
            this.selectPage(2);
        },
        switchChainIdx(idx){
            this.chainIdx = idx;

            this.$refs.receivebox.createQrCode(this.selectCoin.chainTypes[this.chainIdx]);
        },
    },
    computed:{
        ...mapState({
            balanceInfo: (state) =>  state.userState.balanceInfo,
            userInfo: (state) =>  state.userState.userInfo,
            balanceMap: (state) =>  state.userState.balanceMap,
            coinRate: (state) =>  state.userState.coinRate,
            chargeAddrs: (state) =>  state.globalState.data.chargeAddrs,
            currencyInfo: (state) =>  state.globalState.data.currencyInfo,
            paymentCfg: (state) =>  state.globalState.data.paymentCfg,
        }),

        getSwapAmount(){
            let coinRate = this.selectCoin.symbol === 'usdt' ? {price:1} : this.coinRate[this.selectCoin.symbol]
            return Common.numFloor(0.1 * this.coinRate.bnb.price * coinRate.price * 1.005, 1000)
        },

        canSwap(){
            if(this.paymentCfg[this.selectCoin.symbol]){
                return this.paymentCfg[this.selectCoin.symbol].canSwap && this.selectCoin.chainTypes[this.chainIdx] === 'bnb'
            } else {
                return false
            }
        },

        isLogin(){
            return this.userInfo.user_id;
        },

        getWalletBalance(){
            let amount = 0;
            this.balanceInfo.map((item)=>{
                amount += Number(Common.getRate(item.symbol, item.balance, this.currencyInfo, this.coinRate, false, 6));
            })

            return Common.getCurrencyIcon(this.currencyInfo.selectedCurrency) + Common.convert(amount)
        },

        submitWithdraw(){
            return !((this.vertifyCode.length === 6 && this.password && this.userInfo.open_camp != "bsc_wallet") || (this.userInfo.open_camp == "bsc_wallet"))
        },

        canSendCoin(){
            return !(this.addressValid && this.amountValid)
        },

        addressValid(){
            let res = false;
            const chain = this.selectCoin.chainTypes[this.chainIdx];

            if(chain === 'trx'){
                res = Common.isValidTRXValidAddress(this.address)
            } else {
                res = Common.isValidETHValidAddress(this.address)
            }

            return res
        },
        
        amountValid(){
            let res = false;
            const num = Number(this.amount);
            if(!num){
                res = false;
            } else {
                res = num <= this.getRange.max && num >= this.getRange.min && num <= Number(this.selectCoin.balance)
            }
            
            return res
        },

        amountError(){
            const num = Number(this.amount);
            if(!num){return this.$t('Asset_54')}
            if(!(num <= this.getRange.max && num >= this.getRange.min)){
                return this.$t('Asset_54') 
            } else if(num > Number(this.selectCoin.balance)){
                return this.$t('Asset_55') 
            } else{
                return ''
            }
        },

        finalAmount(){
            let res = ''
            if(this.amountValid){
                if(this.wantSwap) {
                    res = Common.numFloor(this.amount - this.getFee < 0 ? 0 : this.amount - this.getFee - this.getSwapAmount, 10000) + ' ' + this.selectCoin.symbol.toUpperCase()
                    + '+ 0.1BNB'
                    ;
                } else {
                    res = (this.amount - this.getFee < 0 ? 0 : this.amount - this.getFee) + ' ' + this.selectCoin.symbol.toUpperCase();
                }
            } else {
                res = '0 ' + this.selectCoin.symbol.toUpperCase();
            }

            return res
        },

        getFee(){
            const {selectCoin, paymentCfg} = this;
            const {symbol} = selectCoin;

            if(paymentCfg[symbol]){
                const {chainTypes} = this.selectCoin;
                const rate = chainTypes[this.chainIdx] === 'eth' ? 40 : 1;

                return Common.numFloor(paymentCfg[symbol].fee * rate, 100000000)
            } else{
                return '0'
            }
        },

        getRange(){
            const {selectCoin, paymentCfg} = this;
            const {symbol} = selectCoin;

            if(paymentCfg[symbol]){
                return paymentCfg[symbol]
            } else{
                return '0'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .user-vertify {
        height: 16px;
        color: #343434;
        line-height: 16px;
        display: inline-block;
        font-size: 12px;
        margin: 0 18px 25px 18px;

        .icon {
        display: inline-block;
        }

        .icon,
        span {
        vertical-align: middle;
        }

        i,
        .agreement {
        color: #FC9B65;
        cursor: pointer;
        }

        i {
        margin-right: 3px;
        }
    }

    .asset-center{
        * {
            color: black;
        }

        width: 100%;
        min-height: 100vh;
        padding-bottom: 80px;
        background: white;

        .rank-body-page{
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;   
            
            color: #9A9A9A;
            font-size: 12px;
            height: 70px;
        }

        .form-bg{
            padding: 20px;
            border-radius: 15px;
            background:white;

            .logdetail-select{
                text-align: center;

                .logdetail-item{
                    border-bottom: 4px solid transparent;

                    margin: 0 10px;
                    padding-bottom: 5px;
                    cursor: pointer;

                    display: inline-block;
                    font-size: 16px;
                    font-weight: bold;
                    
                }

                .log-actvie{
                    border-bottom: 4px solid rgb(36, 84, 198);
                }
            }

            .warn-bg{
                margin: 0 30px;
                border: 1px solid #F4F5FA;
                box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
                border-radius: 20px;
                padding: 40px 64px;

                .btn-1{
                    color: white;
                    margin-top: 30px;
                }
            }

            .coin-record{
                overflow: auto;
                height: 200px;
                overscroll-behavior: contain;
                padding: 0 5px;

                .coin-item{
                    background: #FFFFFF;
                    box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                    border-radius: 10px;
                    padding: 5px 10px;
                    margin: 10px 0;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .coin-item-detail{
                        text-align: left;
                        padding-left: 10px;
                    }
                }

                .coin-item-ts{
                    color: #264498;
                    flex:1;
                    text-align:right;
                }
            }
        }

        .send-info{
            background: #FFFFFF;
            border: 1px solid #F4F5FA;
            box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
            opacity: 1;
            font-weight: bold;
            border-radius: 20px;

            padding: 25px 0;

            margin-bottom: 15px;

            .send-withdraw-title{
                font-size: 20px;
                color: #264498;
            }

            .send-withdraw-amount{
                font-size: 26px;
            }

            .send-withdraw-cash{
                color: #838383;
            }
            
            .send-withdraw-text{
                margin-top: 20px;
                color: #264498;
            }

            .send-withdraw-fee{
                margin-top: 20px;
            }

            .send-withdraw-receive{
                color: #838383;
            }
        }

        .trans-box{
            border: 1px solid #F4F5FA;
            box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
            padding: 30px;

            .trans-status{
                font-size: 14px;
                font-weight: bold;
                line-height: 17px;
                color: #08C08C;
            }

            .trans-amount{
                font-size: 28px;
                font-family: DIN;
                font-weight: 500;
                line-height: 34px;
                color: #343434;
            }

            .trans-info{
                width: 100%;
                text-align: left;
                padding: 13px 0;
                position: relative;

                .content{
                    position: absolute;
                    color: #343434;
                    right: 0;
                    top: 50%;
                    transform: translate(0, -50%);
                    max-width: 200px;
                    word-break: break-all;
                    text-align: right;
                    font-weight: 600;

                    .tx{
                        margin-right: 20px;
                    }

                    .copy-icon{
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translate(0, -50%);
                        width: 14px;
                    }
                }
            }
        }

        .send-area{
            margin-top: 10px;
            width: 100%;
            background: #F4F5FA;
            border: 1px solid #F5F5F5;
            padding: 30px 0;
            text-align: center;

            .send-box{
                display: inline-block;
                text-align: left;
                width: 700px;
                max-width: 90%;

                .chain-area{
                    .chain-btn{
                        cursor: pointer;
                        display: inline-block;
                        padding: 8px 20px;
                        box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
                        border-radius: 10px;
                        background: #FFF;
                        margin: 0 10px 0 0;
                        border: 1px solid transparent;
                    }

                .active {
                        border: 1px solid #FF9959;
                    }
                }

                .swap-left{
                    display: inline-block;
                    width: 48%;
                    margin-right: 4%;
                }

                .swap-right{
                    display: inline-block;
                    width: 48%;
                }

                .title{
                    margin: 10px 0;
                }

                .swap-box{
                    background: white;
                    width: 100%;
                    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                    padding: 16px;
                    border-radius: 10px;
                    position: relative;
                    cursor: pointer;
                    color: #838383;
                    font-weight: bold;
                    transition: 0.2s all;

                    .swap-btn{
                        width: 16px;
                        height: 16px;
                        border: 1px solid #FF9959;
                        border-radius: 50%;
                        opacity: 1;

                        position: absolute;
                        right: 10px;
                        top: 50%;
                        transform: translate(0, -50%);
                        font-weight: bold;

                        .swap-selected{
                            position: absolute;
                            width: 8px;
                            height: 8px;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            background: #FF9959;
                            border-radius: 50%;
                            opacity: 0;

                            transition: 0.2s all;
                        }

                        .active {
                            opacity: 1;
                        }
                    }
                }

                .swap-box-active{
                    color: black;
                }

                .input-box{
                    input{
                        border: none;
                        width: 100%;
                        box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                        padding: 16px;
                        border-radius: 10px;
                    }

                    input:focus{
                        outline: none;
                    }
                }

                .balance-range{
                    float: right;
                    font-weight: bold;
                    color: #343434;
                }

                .operate{
                    margin-top: 15px;
                    text-align: center;

                    * {
                        color: #264498;
                    }

                    .btn-1{
                        color: white;
                        display: inline-block;
                        padding: 5px 100px;
                    }
                }

                .operate > div{
                    margin: 5px;
                }
            }
        }

        .receive-area{
            margin-top: 10px;
            width: 100%;
            background: #F4F5FA;
            border: 1px solid #F5F5F5;
            padding: 30px 0;

            // .receive-box{
            //     margin: auto;
            //     overflow:hidden;
            //     width: 580px;
            //     background: #FFFFFF;
            //     box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
            //     border-radius: 10px;

            //     .title{
            //         text-align: center;
            //         background: linear-gradient(0deg, #EEF0FD 0%, #FFFFFF 100%);
            //         border-radius: 10px;
            //         padding: 20px 0;
            //         margin: 0!important;

            //         .text{
            //             margin-left: 10px;
            //             display: inline-block;
            //             color: #264498;
            //         }
            //     }
                
            //     .content{
            //         padding: 30px 0;

            //         .chain-area{
            //             text-align: center;
            //             margin-bottom: 30px;

            //             .chain-btn{
            //                 cursor: pointer;
            //                 padding: 8px 20px;
            //                 box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
            //                 border-radius: 10px;
            //                 margin: 0 5px;
            //                 border: 1px solid transparent;
            //             }

            //             .active {
            //                 border: 1px solid #FF9959;
            //             }

            //             div{
            //                 display: inline-block;
            //             }
            //         }

            //         .addr-area{
            //             text-align: center;

            //             .code{
            //                 margin-right: 30px;
            //             }

            //             .side{
            //                 display: inline-block;
            //                 width: 150px;

            //                 .addr{
            //                     color: #FC9B65;
            //                     word-break: break-all;
            //                     min-height: 60px;
            //                 }

            //                 .warn{
            //                     font-size: 12px;
            //                     color: #264498;
            //                     margin: 5px 0 22px 0;
            //                 }

            //                 .copy{
            //                     padding: 5px;
            //                     color: white;
            //                 }
            //             }
            //         }
            //     }
            // }
        }
        
        .receive-list{
            .title{
                margin: 16px 0;
            }

            .table-list{
                .table-line{
                    padding: 17px 10px;
                    border: 1px solid #F5F5F5;
    
                    .table-box-1{
                        display: inline-block;
                        width: 20%;
                    }
                }
            }
        }

        .send-list{
            .title{
                margin: 16px 0;
            }

            .table-list{
                .table-line{
                    padding: 17px 10px;
                    border: 1px solid #F5F5F5;
    
                    .table-box-1{
                        display: inline-block;
                        width: 20%;
                    }
                }
            }
        }

        .asset-body-board{
            width: 100%;

            .table-line{
                padding: 17px 10px;
                border: 1px solid #F5F5F5;

                .table-box-1{
                    display: inline-block;
                    width: 15%;
                }

                .table-box-2{
                    display: inline-block;
                    width: 55%;
                    text-align: right;

                    .operate-box{
                        margin-left: 60px;
                        cursor: pointer;
                    }
                    
                    div{
                        display: inline-block;
                    }

                    img{
                        width:35px;
                        margin-right: 10px;
                    }
                }   
            }
        }

        .asset-top{
            width: 100%;
            height: 240px;
            background: #264498;
            position: relative;
            display: flex;
            padding-top: 70px;
            align-items: center;

            .log-btn{
                position: absolute;
                right: 17%;

                background: #FFFFFF;
                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                border-radius: 17px;

                color: #FC9B65;
                padding: 6px 20px;
                cursor: pointer;
            }

            * {
                transition: none;
            }
            
            .section-box{
                position: absolute;
                top: 70px ;
                left: 17%;
                right: 17%;
                bottom: 0;

                .coin-info{
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(0 ,-50%);

                    * {
                        color: white;
                    }

                    img{
                        border-radius: 50%;
                        position: relative;
                        display: inline-block;

                        width: 40px;
                    }

                    .content{
                        margin-left: 20px;
                        display: inline-block;

                        .coin{
                            font-size: 28px;
                        }
                    }
                }

                .back-btn{
                    cursor: pointer;
                    position: absolute;
                    top: 10px;
                    left: 0;
                    color: white;
                    padding: 5px 20px;
                    border: 1px solid #2FF;
                    border-radius: 20px;
                }

                .select-area{
                    position: absolute;
                    bottom: 0;
                    left: 0;

                    div{
                        cursor: pointer;
                        display: inline-block;
                        font-weight: bold;
                        transition: 0.3s all;
                        width: 100px;
                        text-align: center;
                        border-bottom: 5px solid transparent;
                    }

                    .active {
                        border-bottom: 5px solid #FC9B65;
                    }

                    * {
                        color: white;
                    }
                }
            }

            img{
                position: absolute;
                right: 0;
                bottom: 0;
            }

            .asset-box{
                margin-left: 17%;

                .title{
                    margin-bottom: 5px;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 17px;
                    color: #FFFFFF;
                }

                .balance{
                    font-size: 28px;
                    font-family: DIN;
                    font-weight: 500;
                    line-height: 34px;
                    color: #FFFFFF;
                }
            }
        }

        .asset-content{
            animation: fadeInLeftC 0.5s;

            padding: 0 17%;

            .title{
                margin: 25px 0
            }
            
            .coin-box{
                border-radius: 50%;
            }
        }

        .btn-more{
            cursor: pointer;
            color: #2454C6;
            display: inline-block;
            padding: 5px 10px;
            border: 1px solid #2454C6;
            border-radius: 17px;
        }
    }
</style>
console.log('Debug: fix: resolve UI scaling issues on mobile');
console.log('Debug: feat: implement new matchmaking system');
