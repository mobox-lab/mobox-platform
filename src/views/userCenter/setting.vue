<template>
    <div class="user-setting-body">
        <div class="user-set-body-head"><span class="label-head"></span> {{$t('Setting_33')}}</div>
        <ul class="setting-ul">
                <div class="user-bind">
                    <div @click="changeName()" class="btn-1">{{$t('Setting_39')}}</div>
                </div>
            </li>
            <li>{{$t('Setting_22')}}
                <div class="user-bind">
                    <div v-if="!userInfo.mail" @click="bindMail()" class="user-bind-btn">{{$t('Setting_23')}}</div>
                    <div v-else-if="!!userInfo.mail" class="user-bind-show">{{userInfo.mail}}</div>
                </div>
            </li>
            <li>{{$t('Setting_24')}}
                <div class="user-bind">
                    <div v-if="!userInfo.mobile" @click="bindMobile()" class="user-bind-btn">{{$t('Setting_23')}}</div>
                    <div v-else-if="!!userInfo.mobile" class="user-bind-show">+{{getMobile}}</div>
                </div>
            </li>
            <li>
                <div v-for="(item,idx) in userInfo.wallets" :key="idx" class="user-address">
                    {{getAddr(item)}}
                    <div v-if="userInfo.open_camp != 'bsc_wallet'" class="user-bind">
                        <div @click="unbindAddress(item)" class="user-bind-btn">{{$t('Setting_102')}}</div>
                    </div>
                </div>
                <div v-if="userInfo.open_camp != 'bsc_wallet'" class="user-address">
                    <div style="max-width:117px;word-break:break-all">{{$t('Setting_101')}}</div>
                    <div class="user-bind">
                        <div @click="bindAddress()" class="user-bind-btn">{{$t('Setting_23')}}</div>
                    </div>
                </div>
            </li>
            <li>{{$t('Asset_48')}}
                <div class="user-bind">
                    <div @click="changTradePwd()" class="user-bind-btn">{{$t('Setting_39')}}</div>
                </div>
            </li>
            <li v-if="userInfo.open_camp !== 'bsc_wallet'">{{$t('Register_30')}}
                <div class="user-bind">
                    <div @click="changePassword()" class="user-bind-btn">{{$t('Setting_39')}}</div>
                </div>
            </li>
        </ul>
        <Dialog v-model="isShowChange">
            <Binder :type="modalType" />
        </Dialog>

        <Dialog v-model="isShowTradePwd">
            <div class="form-bg">
                <FormLayout :title="$t('Asset_48')">
                    <!-- <div>
                        <div v-if="userInfo.mail" class="user-vertify">
                            <div class="icon" @click="chooseVertify(0)">
                            <i v-if="selectVertify===0 || (userInfo.mail && !userInfo.mobile)" class="iconfont">&#xe62a;</i>
                            <i v-else class="iconfont">&#xe627;</i>
                            </div>
                            <span>{{$t('Asset_62')}}</span>
                        </div>
                        <div v-if="userInfo.mobile" class="user-vertify">
                            <div class="icon" @click="chooseVertify(1)">
                            <i v-if="selectVertify===1 || (!userInfo.mail && userInfo.mobile)" class="iconfont">&#xe62a;</i>
                            <i v-else class="iconfont">&#xe627;</i>
                            </div>
                            <span>{{$t('Asset_63')}}</span>
                        </div>
                    </div> -->

                    <InputItem 
                    :label="$t('Register_6')"
                    :placeholder="$t('Register_7')"
                    v-model="code"
                    v-if="userInfo.open_camp != 'bsc_wallet'"
                    >
                        <SendCodeButton
                            slot="suffix"
                            :disabled="false"
                            :onSend="sendCode"
                        />
                    </InputItem>

                    <InputItem
                        maxlength="6"
                        :label="$t('Register_14')"
                        type="password"
                        :placeholder="$t('Register_15')"
                        v-model="password"
                    />
                    <InputItem
                        maxlength="6"
                        class="validation-password"
                        :label="$t('Register_16')"
                        type="password"
                        :placeholder="$t('Register_15')"
                        v-model="confirmPassword"
                    />

                    <ul class="rules">
                    <li
                        v-for="(item, index) in rules"
                        :key="index"
                        :class="{success: item.status}"
                    >
                        <span>{{item.message}}</span>
                    </li>
                    </ul>

                    <!-- <div @click="confrimChangePwd()" class="confirm-change-btn btn-1">{{$t('Setting_58')}}</div> -->
                    <Button :disabled="submitChangePwd" @click="confrimChangePwd()">{{$t('Setting_58')}}</Button>
                </FormLayout>
            </div>
        </Dialog>

        <Dialog v-model="isShowName">
            <div class="form-bg">
                <FormLayout :title="$t('Setting_114')">
                    <InputItem
                        maxlength="25"
                        :label="$t('Setting_114')"
                        :placeholder="$t('Register_36')"
                        v-model="nickName"
                        :onWatchChange="confirmName"
                    >
                    <span
                        v-if="isRepeatName"
                        slot="message"
                        class="input-message"
                    >{{$t('Error_3')}}</span>
                    </InputItem>

                    <div style="display:flex;justify-content:center;align-items:center;">
                        <div @click="claimChange" :class="!isConfirming&&!isRepeatName&&!!nickName ? `btn-1`: `btn-disabled`">{{$t('Setting_58')}}</div>
                    </div>

                </FormLayout>
            </div>
        </Dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Dialog from '@/components/Dialog';
import Binder from '@/components/Header/Binder/index';
import FormLayout from '@/components/Header/FormLayout.vue';
import { CommonMethod } from "@/mixin";
import InputItem from '@/components/Header/Input.vue';
import SendCodeButton from '@/components/SendCodeButton.vue';
import Button from '@/components/Button';
import { sendMobileCode } from '@/services/sendCode';
import { Common } from "@/utils";
import request from "@/utils/request";
import {API_USER_UNBIND_ADDRESS, API_USER_SET_TRADEPASS, API_SYS_NICKNAME, API_SET_NICKNAME} from '@/utils/constant';

export default {
    mixins: [
        CommonMethod
    ],
	components: {
		Dialog,
		Binder,
        FormLayout,
        InputItem,
        SendCodeButton,
        Button
	},
    
    data(){
        return {
            selectVertify:1,
            isShowChange:false,
            isShowTradePwd:false,
            isShowName:false,
            modalType : "",

            nickName:"",
            isRepeatName:false,
            isConfirming:false,

            t1 : null,

            
            code:'',
            
            password: '',
            
            confirmPassword: '',
            sign : '',
            signTs : ''
        }
    },

	created(){

	},

	destroyed(){

    },

    computed: {
        
        rules() {
            return [
                {
                    message: this.$t('Setting_110'),
                    status: this.verifyLength,
                },
                {
                    message: this.$t('Setting_111'),
                    status: this.onlyNumber,
                },
                {
                    message: this.$t('Setting_112'),
                    status: this.shouldBeSame,
                },
            ];
        },
        
        verifyLength() {
            return this.password.length === 6;
        },
        onlyNumber() {
            // return /^[0-9]*$/.test(this.password);
            return (this.password).match(/^[0-9]*$/) && this.password;
        },
        shouldBeSame() {
            return this.password === this.confirmPassword && this.password;
        },

        submitChangePwd(){
            return !(this.verifyLength && this.onlyNumber && this.shouldBeSame && ((this.userInfo.open_camp != "bsc_wallet" && this.code.length === 6) || this.userInfo.open_camp == "bsc_wallet"))
        },

		...mapState({
			userInfo: (state) => state.userState.userInfo,
        }),
        
        getMobile(){
            return Common.getCutStr(this.userInfo.mobile, 13, true)
        },
	},
    
    methods:{
        async confirmName(){
            if(!this.nickName){
                return
            }

            clearTimeout(this.t1)
            this.t1 = setTimeout(async () => {
                this.isConfirming = true;
                try{
                    const data = {
                        nick_name: this.nickName
                    }
                    const res = await request(API_SYS_NICKNAME, {
                        method: 'POST',
                        data
                    });
    
                    this.isRepeatName = false;
                    this.isConfirming = false;
    
                    // if(res.code == 200){
                    //     console.log
                    // }
                }catch(error){
                    this.isRepeatName = true;
                    this.isConfirming = false;
                }
            }, 200);
        },
        async claimChange(){
            if(this.isConfirming||this.isRepeatName||!this.nickName){return}

            // console.log(API_SET_NICKNAME)
            try{
                const data = {
                    nickname: this.nickName
                }
                const res = await request(API_SET_NICKNAME, {
                    method: 'POST',
                    data
                });

                this.isShowName = false;
                this.showNotify(this.$t('Setting_107'), 'success');

                if(res.code == 200){
                    this.$store.commit('userState/setUserInfo', res.data);
                }
            }catch(error){
                if (error.code) {
                    this.showNotify(this.$t(`Error_${error.code}`), 'error');
                } else {
                    this.showNotify(this.$t('Error_6'), 'error');
                }
            }
        },
        changeName(){
            this.isShowName = true;
        },
        chooseVertify(idx){
            this.selectVertify = idx;
        },
        async confrimChangePwd(){
            // try{
                const data = {
                    trade_passwd: this.password,
                    verify_code:this.code
                }
                if(this.userInfo.open_camp == "bsc_wallet") {
                    data.sign = this.sign;
                    data.ts = this.signTs;
                    data.verify_code = `123456`;
                }
                const res = await request(API_USER_SET_TRADEPASS, {
                    method: 'POST',
                    data
                });

                if(res.code == 200){
                    this.isShowTradePwd = false;
                    this.showNotify(this.$t('Setting_107'), 'success');
                }
            // }catch(error){
            //     if (error.code) {
            //         this.showNotify(this.$t(`Error_${error.code}`), 'error');
            //     } else {
            //         this.showNotify(this.$t('Error_6'), 'error');
            //     }
            // }
        },
        sendCode(){
            const {mobile} = this.userInfo;
    
            sendMobileCode(mobile, 'MOBILE_UPDATE_PASSWD', true);
            // if(mail && !mobile){
            //     sendEmailCode(mail, 'MAIL_UPDATE_PASSWD', true);
            // } else if(!mail && mobile) {
            //     console.log(mobile)
            //     sendMobileCode(mobile, 'MOBILE_UPDATE_PASSWD', true);
            // } else if(mail && mobile) {
            //     if(this.selectVertify === 0){
            //         sendEmailCode(mail, 'MAIL_UPDATE_PASSWD', true);
            //     } else if(this.selectVertify === 1){
            //         sendMobileCode(mobile, 'MOBILE_UPDATE_PASSWD', true);
            //     }
            // }
        },
        changTradePwd(){
            const {open_camp} = this.userInfo;
            if(open_camp == "bsc_wallet") {
                this.$root.eventHub.$emit('bind-address', (signData)=>{
                    if(signData.sign) {
                        this.sign = signData.sign;
                        this.signTs = signData.signTs;
                        this.isShowTradePwd = true;
                    }
                })
            } else {
                this.isShowTradePwd = true;
            }
        },
        changePassword(){
            this.$root.eventHub.$emit("forgot-password");
        },
        bindMail(){
            this.modalType = "mail";
            this.isShowChange = true;
        },
        bindMobile(){
            this.modalType = "mobile";
            this.isShowChange = true;
        },
        bindWallet(){
            
        },
        changePwd(){
            this.modalType = "password";
            this.isShowChange = true;
        },
        closeModal(){
            this.isShowChange = false;
        },
        getAddr(addr){
            return Common.getCutStr(addr, 15, true)
        },

        bindAddress(){
            this.$root.eventHub.$emit('bind-address')
        },
        unbindAddress(address){
            this.$root.eventHub.$emit('confrim-box', {title:'Setting_102', msg:'Setting_104'}, async ()=>{
                try{
                    const data = {address}
                    const res = await request(API_USER_UNBIND_ADDRESS, {
                        method: 'POST',
                        data
                    });

                    if(res.code == 200){
                        let wallets = [];
                        res.data.map((item)=>{
                            wallets.push(item.address)
                        });
        
                        this.$store.commit('userState/setUserInfo', {wallets});
                    } else {
                        console.log('解绑失败')
                    }
                }catch{
                    console.log('error')
                }
            })
        }
    },
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

    .form-bg{
        padding: 20px;
        border-radius: 15px;
        background:white;

        .confirm-change-btn{
            display: inline-block;
            margin-top: 20px;
            padding: 8px 40px;
        }

        .rules {
            margin: 10px 34px;
            padding: 20px;
            background: rgba(255, 151, 69, 0.1);
            border-radius: 0px 10px 10px 10px;

            li {
            display: flex;
            align-items: flex-start;
            padding: 4px 0;

            &::before {
                content: '';
                display: inline-block;
                width: 16px;
                height: 16px;
                background-image: url('../../assets/icon/userSystem/warning.png');
                background-size: 100%;
            }

            span {
                flex: 1;
                text-align: left;
                display: block;
                line-height: 16px;
                font-weight: bold;
                font-size: 12px;
                color: #9B9B9B;
                padding-left: 9px;
                white-space: normal;
            }

            
            &.success {
                &::before {
                background-image: url('../../assets/icon/userSystem/success.png');
                background-size: 100%;
                }
            }
            }
        }
    }

    .user-address{
        position: relative;
        padding: 10px 0;
        // max-width: 200px;

        .user-bind{
            left: 210px;
        }
    }

    .user-setting-body .setting-ul{
        list-style: none;
        padding: 0;
        margin: 17px 0;

        width: 100%;

        li{
            position: relative;
            width: 100%;
            padding: 25px 40px;
            border: 1px solid #F5F5F5;
        }
    }

    .user-setting-body{
        animation: fadeInLeftC 0.5s;

        padding: 44px 140px;
    }

    .user-set-body-head{
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        color: #2E3134;
    }

    .userCenter{
        height: calc(100vh - 70px);
        overflow: auto;
        
        background: white;
        color: black;
    }
    
    .user-left{
        position: fixed;
        left:0;
        top: 70px;

        width: 15%;
        height: 100%;
        background: #FFFFFF;
        box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
        opacity: 1;
    }

    .user-set-head-title{
        position: absolute;
    }

    .user-setting{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .user-setting-selected{
        box-shadow: 0px 3px 12px rgb(117 115 151 / 10%);
        border-left: 3px solid #264498;
    }

    .user-setting-head{
        position: relative;

        display: flex;
        align-items: center;
        padding-left: 140px;

        width: 100%;
        height: 170px;
        background: linear-gradient(0deg, #EEF0FD 0%, #FFFFFF 100%);
    }

    .user-right{
        padding-top: 70px;
        margin-left: 15%;
        width: 85%;
        height: 100%;
    }

    .user-left-head{
        background: url('../../assets/user/bg1.png') no-repeat;
        width: 100%;
        height: 20%;
        background-size: cover;
    }

    .user-left .list-item{
        position: relative;
        padding: 20px 24px;
        font-weight: bold;
    }

    .user-left li{
        cursor: pointer;
        // position: relative;
    }

    .list-item > div{
        display: inline-block;
        vertical-align: middle;
    }

    .userCenter .label-head{
        margin-right: 5px;
    }

    .user-trian{
        position: absolute;
        right: 18px;
        top: 50%;
        transform: translate(0, -50%);

        border-top:5px solid transparent;
        border-bottom:5px solid transparent;
        border-left:5px solid #FF9959;
    }

    .user-bind{
        position: absolute;
        left: 250px;
        top: 50%;
        transform: translate(0, -50%);
    }

    .user-bind-btn{
        cursor: pointer;
        padding: 7px 20px;
        border: 1px solid #2454C6;
        opacity: 1;
        border-radius: 17px;
        color: #2454C6;

        font-weight: bold;
    }
</style>
console.log('Debug: fix: correct leaderboard sorting algorithm');
console.log('Debug: fix: resolve UI scaling issues on mobile');
console.log('Debug: feat: optimize server request handling');
