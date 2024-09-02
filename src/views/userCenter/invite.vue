//     <div class="user-invite-body">
// //         <div class="top-box vertical-children">
// //             <div class="invite-box-info">
//                 <div><span class="label-head"></span> {{$t('Setting_86')}}</div>
                <div class="copy-box url-box">
                    <div>{{getInviteCode}}</div>
                    <div @click="copyText(getInviteCode)" style="flex:1;text-align:right;"> <div class="btn-1 btn-base">{{$t('Setting_87')}}</div> </div>
                </div>
                <div><span class="label-head"></span> {{$t('Setting_88')}}</div>
                <div class="copy-box code-box">
                    <div>{{inviteInfo.source}}</div>
                    <div @click="copyText(inviteInfo.source)" style="flex:1;text-align:right;"> <div class="btn-1 btn-base">{{$t('Setting_87')}}</div> </div>
                </div>
            </div>
            <div class="invite-box-info">
                <div><span class="label-head"></span> {{$t('Setting_89')}}</div>
                <div class="invite-qrcode vertical-children">
                    <div class="qrcode" ref="qrCodeUrl"></div>
                    <div class="copy-qrcode">
                        <div class="copy-tip">{{$t('Setting_90')}}</div>
                        <div style="margin-right:10px;" @click="copyText(inviteInfo.url)" class="btn-1 btn-base">{{$t('Setting_91')}}</div>
                        <div @click="openPoster" class="btn-1 btn-base">{{$t('Setting_113')}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="invite-fri-box">
            <div style="padding:16px 0"><span class="label-head"></span> {{$t('Setting_92')}}</div>
            <table class="invite-table">
                <tr>
                    <th>{{$t('Setting_93')}}</th>
                    <th>{{$t('Asset_35')}}</th>
                    <th>{{$t('Setting_28')}}</th>
                    <th>{{$t('Setting_98')}}</th>
                    <th></th>
                    <th>{{$t('Setting_109')}}</th>
                </tr>
                <tr v-for="(item,idx) in inviteInfo.users" :key=idx >
                    <td>{{item.user_id}}</td>
                    <td>{{getDateFtt(item.registerTime)}}</td>
                    <td>{{item.score}}</td>
                    <td>{{item.claimedAmount}}</td>
                    <td>
                        <div class="achieve-reward vertical-children">
                            <div class="achieve-throphy">
                                <img src="../../assets/user/trophy.png" alt="">
                                <div class="score">{{setAchieveStage(item.currentStep).from}}</div>
                            </div>
                            <div class="achieve-arrow" v-if="setAchieveStage(item.currentStep).to > 0">
                                <div>{{item.toClaimAmount}}MBOX</div>
                                <img src="../../assets/user/arrow.png" alt="">
                            </div>
                            <div v-if="setAchieveStage(item.currentStep).to > 0" class="achieve-throphy">
                                <img src="../../assets/user/trophy.png" alt="">
                                <div class="score">{{setAchieveStage(item.currentStep).to}}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div v-if="item.status === 1" @click="claimAchieve(item.user_id)" class="claim-achieve-btn">{{$t('Setting_31')}}</div>
                        <div v-else class="disable-achieve-btn">{{$t('Setting_31')}}</div>
                    </td>
                </tr>
            </table>
        </div>

        <div v-show="isOpenPoster" class="poster">
            <div @click="openPoster(false)" class="mask"></div>
            <div class="contain">
                <img :height="posterH" :src="posterUrl" alt="">
                <div ref="postercode" :style="codeStyle" class="qrcode"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import QRCode from 'qrcodejs2'
// import Dialog from '@/components/Dialog';
// import Binder from '@/components/Header/Binder/index';
import { CommonMethod } from "@/mixin";
import { Common } from "@/utils";
import request from "@/utils/request";
import {API_ACHIEVE_INVITE_INFO, API_ACHIEVE_INVITE_CLAIM} from '@/utils/constant';

export default {
    mixins: [CommonMethod],
	components: {
	},

    props:{
        // updateInviteAmount:{
        //     type:Number,
        //     default:0
        // },
        // updateInviteMbox:{
        //     type:Number,
        //     default:0
        // },
    },
    
    data(){
        return {
            inviteInfo:{users:[]},
            stage:{
                from:0,
                to:0
            },
            isOpenPoster:false,
            posterH:0,

            codeStyle:``,
            codeW : 0,
            posterUrl : "https://mobox.io/img/invite_register_zh.jpg"
        }
    },

	created(){
	},

	destroyed(){

    },

    mounted(){
        console.log(window.innerHeight);

        this.posterH = window.innerHeight * 0.9;
        this.setStyle();

        this.getInviteInfo();
    },

    computed: {
		...mapState({
			userInfo: (state) => state.userState.userInfo,
            achieveRewardCfg: (state) => state.userState.achieveRewardCfg,
        }),
        
        getMobile(){
            return Common.getCutStr(this.userInfo.mobile, 13, true)
        },
        
        getInviteCode(){
            const source = this.inviteInfo.source;
            if(source) {
                return `https://www.mobox.io/#/cmcairdrop?source=${source}`
            } else {
                return ''
            }
            
        }
	},
    
    methods:{
        setStyle(){
            const codeW = this.posterH * (110 / 1041);
            const bottom = this.posterH * (150 / 1041);

            this.codeW = codeW;

            this.codeStyle = `width:${codeW}px;height:${codeW}px;bottom:${bottom}px`;
        },
        openPoster(isOpen = true){
            if(isOpen){
                const lang = Common.getStorageItem('lang');

                if(lang==='zh-CN'){
                    this.posterUrl = `https://mobox.io/img/invite_register_zh.jpg`
                } else {
                    this.posterUrl = `https://mobox.io/img/invite_register_en.jpg`
                }
            }

            this.isOpenPoster = isOpen
        },
        async claimAchieve(user_id){
            console.log(user_id)

            const {code, data} = await request(API_ACHIEVE_INVITE_CLAIM, {
				method: 'POST',
                data : {user_id}
			});
            if(code == 200){
                this.showNotify(this.$t('achievement_49'), "success");
                const {currentStep , toClaimAmount} = data;
                this.inviteInfo.users.map((item,i)=>{
                    if(item.user_id === user_id){
                        this.inviteInfo.users[i].currentStep = currentStep;
                        this.inviteInfo.users[i].toClaimAmount = toClaimAmount;
                        this.inviteInfo.users[i].status = toClaimAmount == 0 ? 0 : 1;
                    }
                })
            }
        },
        getDateFtt(ts){
            return Common.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(ts*1000));
        },
        copyText(text){
            Common.copyTextBoard(text);
            this.showNotify(this.$t('Setting_87'), "success");
        },
        async getInviteInfo(){

            console.log('gei in info!')
            const {code, data} = await request(API_ACHIEVE_INVITE_INFO, {
				method: 'POST'
			});

            if(code==200){
                this.inviteInfo = data;
                this.achieveRewardCfg.sort((a,b)=>{return a.score - b.score});

                this.creatQrCode(`https://www.mobox.io/#/cmcairdrop?source=${data.source}`);

                this.$emit('updateInviteAmount', data.cnt)
                this.$emit('updateInviteMbox', data.amount)
            }
        },
        creatQrCode(url) {
            new QRCode(this.$refs.qrCodeUrl, {
                text: url, // 需要转换为二维码的内容
                width: 100,
                height: 100,
                colorDark: '#254498',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })

            new QRCode(this.$refs.postercode, {
                text: url, // 需要转换为二维码的内容
                width: this.codeW,
                height: this.codeW,
                colorDark: '#254498',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })
        },
        setAchieveStage(currentStep){
            // 排序一下currentStep
            const {achieveRewardCfg} = this;
            const stage = {from:0,to:0}

            const currentIdx = currentStep-1;
            if(currentIdx < 0){
                stage.from = 0;
                stage.to = achieveRewardCfg[0].score;
            } else if(currentIdx >= 6){
                stage.from = achieveRewardCfg[6].score;
                stage.to = 0;
            } else {
                stage.from = achieveRewardCfg[currentIdx].score;
                stage.to = achieveRewardCfg[currentStep].score;
            }

            return stage
        }
    },
}
</script>


<style lang="less" scoped>
    .user-invite-body{
        animation: fadeInLeftC 0.5s;

        padding: 22px 140px;

        .top-box{
            background: #F4F5FA;
            border: 1px solid #F5F5F5;
            text-align: center;
            padding: 60px 0;

            .invite-box-info{
                width: 40%;
                display: inline-block;
                text-align: left;
                margin: 0 2%;

                .copy-box{
                    background: #FFFFFF;
                    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                    padding: 10px 17px;
                    margin: 20px 0;
                }

                .url-box{
                    color: #FC9B65;
                }
                .code-box{
                    color: #264598;
                }
            }

            .invite-qrcode{
                background: #F9FAFE;
                box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
                border-radius: 10px;
                padding: 44px 60px;
                margin: 20px 0;

                .qrcode{
                    display: inline-block;
                }

                .copy-qrcode{
                    display: inline-block;
                    max-width: 250px;
                    text-align: center;
                    margin-left: 25px;

                    .copy-tip{
                        color: #FC9B65;
                        margin-bottom: 10px;
                    }
                }
            }
        }

        .btn-base{
            display: inline-block;
        }

        .invite-table{
            width: 100%;
            border: 1px solid #F5F5F5;
            padding: 0 30px;

            tr{
                th{
                    text-align: left;
                    padding: 15px 0;
                }

                td{
                    padding: 5px 0;
                    border-width:1px 0 0 0;
                    border-color:#F5F5F5;
                    border-style:solid;
                }
            }
            
            .achieve-reward{
                margin: 30px 0;

                .achieve-arrow{
                    text-align: center;
                    display: inline-block;

                    div{
                        color: #264498;
                        font-weight: bold;
                        margin: 0 0 10px 0;
                    }

                    img{
                        width: 34px;
                    }
                }
            }

            .achieve-throphy{
                display: inline-block;
                position: relative;

                .score{
                    position: absolute;
                    left: 50%;
                    transform: translate(-52%, 0);
                    bottom: 23%;
                    font-weight: bold;
                    color: white;
                }

                img{
                    width: 150px;
                }
            }

            .achieve-throphy + img{
                width: 30px;
                margin: 0 30px;
            }

            .claim-achieve-btn{
                color: #2454C6;
                border: 1px solid #2454C6;
                border-radius: 17px;
                cursor: pointer;
                text-align: center;
                padding: 5px;
            }

            .disable-achieve-btn{
                color: #9F9F9F;
                border: 1px solid #9F9F9F;
                border-radius: 17px;
                text-align: center;
                padding: 5px;
            }
        }

        .poster{
            background: rgba(0, 0, 0, 0.8);
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            z-index: 99999999;
            
            display: flex;
            justify-content: center;
            align-items: center;

            .mask{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }

            .contain{
                position: relative;

                .qrcode{
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0);
                }
            }
        }
    }
    
</style>
