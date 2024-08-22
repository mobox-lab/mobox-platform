<template>
	<div v-if="isLogin" class="userCenter">
        <div class="user-left">
            <div class="user-left-head">
                <div @click="openDropdown()" class="user-title vertical-children">
                    <img src="@/assets/user/avatar.png" alt="">
                    <div class="content">
                        <div class="h1">{{$t(menuTitle.title)}}</div>
                        <div class="h2">{{$t(menuTitle.detail)}}</div>
                    </div>
                </div>

                <div class="drop-area">
                    <Dropdown
                        system="light"
                        :list="getCurrency"
                        :defaultSelectPos="getDefaultCurPos"
                        :onChange="onChangeCurrency"
                        :direction="'down'"
                    />
                </div>
            </div>
            <ul>
                <li v-for="(item, idx) in menu" :key="idx" @click="setMenu(idx)">
                    <div :class="`list-item ${selectMenuIdx===idx ? `user-setting-selected`:``}`"><div class="label-head"></div><div>{{$t(item.title)}}</div><div class="user-trian"></div></div>
                </li>
            </ul>
        </div>

        <div class="user-bottom vertical-children">
            <div v-for="(item, idx) in menu" :key="idx" @click="setMenu(idx)" :class="`section ${selectMenuIdx===idx ? `section-active`:``}`">
                <div class="img-box"><img :src="item.tinyImgSrc" alt=""></div>
                <div>{{$t(item.title)}}</div>
            </div>
        </div>

        <div class="user-right">
            <div class="user-setting">
                <div class="user-setting-head">
                    <div class="user-set-head-title vertical-children">
                        <img width="34px" style="vertical-align:middle;margin-right:15px;" :src="menu[selectMenuIdx].imgSrc" alt="">
                        <div style="display:inline-block;vertical-align:middle;">
                            <div style="font-size:20px;color:#264498;font-weight:bold;height:30px;">{{$t(menu[selectMenuIdx].title)}}</div>
                            <div style="font-size:12px;color:#343434;">{{$t(menu[selectMenuIdx].detail)}}</div>
                        </div>

                        <div v-if="selectMenuIdx === 3" class="user-achieve-infobox">
                            <div class="contain">
                                <div class="title vertical-children"><img width="14" src="@/assets/user/head.png" alt=""> <span>{{$t('Setting_82')}}</span></div>
                                <div class="content">{{inviteAmount}}</div>
                            </div>
                            <div class="contain">
                                <div class="title"><img width="14" src="@/assets/user/coins.png" alt=""> <span>{{$t('Setting_83')}}</span></div>
                                <div class="content">{{inviteMbox}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="user-setting-extra-btns">
                        <div @click="showRecord(true)" v-if="selectMenuIdx===1 || selectMenuIdx===3" class="achieve-log-btn">{{$t('Setting_100')}}</div>
                    </div>
                    <img width="600px" style="position:absolute;right:0;bottom:0;" src="../../assets/rank/bg1.png" alt="">
                </div>

                <Setting v-if="selectMenuIdx===0" />
                <Achieve ref="achieveComponent" v-if="selectMenuIdx===1" />
                <Statistic v-if="selectMenuIdx===2" />
                <Invite
                    @updateInviteAmount="updateInviteAmount"
                    @updateInviteMbox="updateInviteMbox"
                    v-if="selectMenuIdx===3"
                />
            </div>
        </div>

        <Dialog v-model="isShowRecord">
            <div class="form-bg">
                <FormLayout :title="$t('Setting_100')" describe="">
                    <div style="padding: 20px 20px">
                        <div class="achieve-record">
                            <div v-for="(item, idx) in setAchieveRecord" :key="idx" class="record-item">
                                <img width="40" src="../../assets/user/import.png" alt="">
                                <div class="record-item-detail">
                                    <div style="color:black">{{item.action == 704 ? $t('Setting_27') :$t('achievement_9')}}</div>
                                    <div>{{`${item.amount}${item.coin.toUpperCase()}`}}</div>
                                </div>

                                <div class="record-item-ts">
                                    <div v-if="item.status == 0">{{getCntDown(item.deadline)}}</div>
                                    <div v-else>
                                        <div style="color:black">{{getDateFtt(item.deadline)}}</div>
                                        <div style="color:black">{{$t('Setting_95')}}</div>
                                    </div>
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
import Dialog from '@/components/Dialog';

import Setting from './setting';
import Achieve from './achieve';
import Invite from './invite';
import Statistic from './statistics';

import request from "@/utils/request";
import { Dropdown } from "@/components";
import FormLayout from '@/components/Header/FormLayout';

import {API_ACHIEVE_CFG, API_ACHIEVE_REWARD_CFG, API_CLAIM_BALANCE_LOGS} from '@/utils/constant';

export default {
	mixins: [CommonMethod],
	components: {
        Setting,
        Dialog,
        Achieve,
        Invite,
        Dropdown,
        Statistic,
        FormLayout
	},
    
    data(){
        return {
            selectMenuIdx : 0,
            modalType : "",
            menu:[
                // {title:"Setting_1", detail:"", tinyImgSrc:require('../../assets/user/user.png'), imgSrc:require('../../assets/user/set.png')},
                {title:"Setting_33", detail:"Setting_34", tinyImgSrc:require('../../assets/user/set.png'), imgSrc:require('../../assets/user/set.png')},
                {title:"Setting_27", detail:"Setting_59", tinyImgSrc:require('../../assets/user/achieve.png'), imgSrc:require('../../assets/user/achieve.png')},
                // {title:"Setting_49", detail:"", tinyImgSrc:require('../../assets/user/address.png'), imgSrc:require('../../assets/user/set.png')},
                // {title:"Setting_66", detail:"", tinyImgSrc:require('../../assets/user/'), imgSrc:require('../../assets/user/set.png')},
                {title:"Statistics_1", detail:"Statistics_2", tinyImgSrc:require('../../assets/user/statistics.png'), imgSrc:require('../../assets/user/statistics.png')},
                {title:"Setting_80", detail:"Setting_81", tinyImgSrc:require('../../assets/user/invite.png'), imgSrc:require('../../assets/user/set.png')},
            ],
            isShowRecord:false,
            achieveRecords:[],
            nowTs : 0,

            inviteAmount:0,
            inviteMbox:0
        }
    },

	created(){
        this.getBaseCfg();
        this.getAchieveRewardCfg();
        this.setTs();
	},

	destroyed(){

    },

    computed: {
		...mapState({
			userInfo: (state) => state.userState.userInfo,
			currencyInfo: (state) => state.globalState.data.currencyInfo,
        }),

        setAchieveRecord(){
            let arr = this.achieveRecords;
            arr.sort((a,b)=>{
                const aTs = this.nowTs/1000 - a.deadline;
                const bTs = this.nowTs/1000 - b.deadline;
                
                if(aTs < 0 && bTs < 0) {
                    return bTs - aTs
                } else {
                    return aTs - bTs
                }
            })

            return arr
        },

        menuTitle(){
            const data = this.menu[this.selectMenuIdx];
            return {
                title:data.title,
                detail:data.detail
            }
        },

        isLogin(){
            return this.userInfo.user_id;
        },
        
        getMobile(){
            return Common.getCutStr(this.userInfo.mobile, 13, true)
        },

        getCurrency(){
            let arr = Object.keys(this.currencyInfo.currencyMap)
            // arr.map((item,i)=>{arr[i] = `${Common.getCurrencyIcon(item)}${item}`})

            return arr
        },

        getDefaultCurPos(){
            // 获取默认选中的货币类型
            const {currencyMap, selectedCurrency} = this.currencyInfo;
            const currencyArr = Object.keys(currencyMap);
            let res = 0;
            if(currencyArr.length > 0){
                currencyArr.map((item,i)=>{
                    if(item === selectedCurrency){res = i}
                })
            }

            return res
        }
	},
    
    methods:{
        updateInviteAmount(value) {
            this.inviteAmount = value;
        },
        updateInviteMbox(value) {
            this.inviteMbox = value;
        },
        getDateFtt(deadline){
            return Common.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(deadline*1000));
        },
        setTs(){
            let ts = new Date().valueOf();
            this.nowTs = ts;

            this.interval = setInterval(() => {
                this.nowTs += 1000;
            }, 1000);
        },
        getCntDown(deadline){
            return Common.getLeftTime(deadline - Math.floor(this.nowTs/1000))
        },
        showRecord(isShow = true){
            if(isShow){
                this.getRecord()
            }
            this.isShowRecord = isShow
        },
        async getRecord(){
            const {code, data} = await request(API_CLAIM_BALANCE_LOGS, {
				method: 'POST',
			});

            if(code == 200){
                this.achieveRecords = data;
            }
        },
        onChangeCurrency(index){
            const selectedCurrency = Object.keys(this.currencyInfo.currencyMap)[index];
            Common.setStorageItem("currency", selectedCurrency);
            this.$store.commit('globalState/setCurrency', {selectedCurrency});
            
            // console.log(this.currencyInfo)
            // console.log(index)
        },
        openDropdown(){
            console.log(this.currencyInfo.selectedCurrency)
            console.log(this.$refs.dropdown)
        },
        setMenu(idx){
            if(idx === 1) {
				this.showNotify(this.$t('Error_1026'), "error");
                return;
            }

            this.selectMenuIdx = idx;
        },
        async getBaseCfg(){
            // 获取成就系统的基本配置
            const {code, data} = await request(API_ACHIEVE_CFG, {
				method: 'POST',
			});
            if(code == 200){
                const cfg = {};
                data.map((item)=>{
                    cfg[item.id] = item;
                })
                this.$store.commit('userState/setAchieveCfg', cfg);
            }
        },
        async getAchieveRewardCfg(){
            const {code, data} = await request(API_ACHIEVE_REWARD_CFG, {
				method: 'POST',
			});
            if(code == 200){
                this.$store.commit('userState/setAchieveRewardCfg', data);
            }
        }
    },
}
</script>


<style lang="less" scoped>

    .user-achieve-infobox{
        display: inline-block;

        .contain{
            display: inline-block;
            margin: 0 30px;

            .title{
                font-size: 14px;
                color: #8AA0DF;
                height: 20px;
            }

            .content{
                font-size: 20px;
                font-family: DIN;
                font-weight: bold;
                color: #264498;
            }
        }
    }

    .achieve-record{
        max-height: 500px;
        overflow: auto;
        padding: 0 10px;

        .record-item{
            background: #FFFFFF;
            box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
            border-radius: 10px;
            padding: 5px 10px;
            margin: 10px 0;

            display: flex;
            justify-content: center;
            align-items: center;

            .record-item-detail{
                text-align: left;
                padding-left: 10px;
            }

            .record-item-ts{
                color: #264498;
                flex:1;
                text-align:right;
            }
        }
    }

    .achieve-record::-webkit-scrollbar {
        width: 4px;
        background: rgba(218,229,255,0.5);
    }

    .achieve-record::-webkit-scrollbar-thumb{
        background: #2454C6;
    }

    .form-bg{
        background: white;
        border-radius: 15px;
    }

    .user-bottom{
        position: absolute;
        bottom: 0;
        white-space: nowrap;
        // overflow-x: auto;
        width: 100%;
        z-index: 9;
        display: none;
        background: white;
        border-top: 1px solid #F4F5FA;

        .img-box{
            height: 35px;
            text-align: center;
        }

        .section{
            display: inline-block;
            width: 20%;
            text-align: center;
            padding: 10px 0;

            div{
                font-size: 10px!important;
            }

            img{
                width: 25px;
            }
        }

        .section-active{
            background: #F4F5FA;
            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
            border-bottom: 3px solid #264498;
        }
    }

    .user-setting-body ul{
        list-style: none;
        padding: 0;
        margin: 17px 0;

        width: 100%;
    }

    .user-setting-body li{
        position: relative;
        width: 100%;
        padding: 25px 40px;
        border: 1px solid #F5F5F5;
    }

    .user-setting-body{
        padding: 44px 140px;
    }

    .user-set-body-head{
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        color: #2E3134;
    }

    .userCenter{
        height: calc(100vh);
        overflow: auto;
        
        background: white;
        color: black;
    }
    
    .user-left{
        position: fixed;
        left: 88px;
        top: 0;
        width: 15%;
        height: 100%;
        background: #FFFFFF;
        box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
        z-index: 1;
    }

    .user-set-head-title{
        position: absolute;
    }

    .user-setting{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .user-setting-extra-btns{
        position: absolute;
        right: 50px;
        z-index: 10;
        bottom: 50px;
    }

    .achieve-log-btn{
        background: #FFFFFF;
        box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
        border-radius: 17px;

        color: #FC9B65;
        padding: 6px 20px;
        cursor: pointer;
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
        margin-left: 15%;
        width: 85%;
        height: 100%;
        padding-top: 20px;
    }

    .user-left-head{
        background: url('../../assets/user/bg1.png') no-repeat;
        width: 100%;
        height: 20%;
        background-size: cover;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .user-title{
            color: white;
            text-align: center;

            .content{
                text-align: left;
                display: inline-block;
            }

            img{
                width: 35px;
                margin-right: 10px;
            }

            .h1{
                font-size: 16px;
            }

            .h2{
                font-size: 12px;
                font-weight: 400;
                line-height: 17px;
                color: #97B8FF;
                width: 120px;
            }
        }

        .drop-area{
            margin-top: 20px;
            color: white;

            ul{
                list-style: none;
            }
        }
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
