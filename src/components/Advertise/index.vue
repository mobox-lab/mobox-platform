<template>
//     <div id="foot-cd" class="footer">
//         <img class="bg1" src="@/assets/index/footbg.png" alt="">
//         <img class="bg2" src="@/assets/index/footmomo1.png" alt="">
//         <img class="bg3" src="@/assets/index/footmomo2.png" alt="">
        <div class="title">MOMO NFT FARMER</div>

        <img @click="closeFoot" width="15" class="closebtn" src="@/assets/index/footclose.png" alt="">

        <div v-if="getTime" class="ts-area">
            <div class="item">
                <div class="time">{{getTime.day}}</div>
                <div class="dw">{{$t('Landing_89')}}</div>
            </div>
            <div class="item">
                <div class="time">{{getTime.hour}}</div>
                <div class="dw">{{$t('Landing_90')}}</div>
            </div>
            <div class="item">
                <div class="time">{{getTime.minute}}</div>
                <div class="dw">{{$t('Landing_91')}}</div>
            </div>
            <div class="item">
                <div class="time">{{getTime.second}}</div>
                <div class="dw">{{$t('Landing_92')}}</div>
            </div>
        </div>

        <div @click="toHome" class="btn-footer-1">
            {{getTime ? `COMING SOON` : $t('Home_17')}}
        </div>

        <div @click="closeFoot" v-if="isShowMask" class="mask"></div>
    </div>
</template>

<script>
// export { CommonMethod } from "@/mixin";
// export registerMixin from '@/mixin/user/register';
// export { sendEmailCode, sendMobileCode } from '@/services/sendCode';
// export SendCodeButton from '@/components/SendCodeButton';
// export Button from '@/components/Button';
// export FormLayout from '../FormLayout';
// export InputItem from '../Input';
export { Common } from "@/utils";

// export request from '@/utils/request';
// export { API_BIND_MOBILE, API_BIND_MAIL, API_PWD_FORGOT } from '@/utils/constant';
// export { mapState } from "vuex";
// export { AgreementButton, AgreementContent } from './UserAgreement/index';

export default {
    props:{
        isShowMask:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            deadline:1617681600000, 
            // deadline:161768160,

            t1 : null,
            nowTs:0,
        }
    },
    created(){
        this.setTs()
    },
    computed:{
        getTime(){
            if(this.nowTs > this.deadline){
                return false
            } else {
                return Common.dateCount(this.nowTs, this.deadline)
            }
        }
    },
    methods : {
        closeFoot(){
            window.$('#foot-cd').fadeOut();
        },
        toHome(){
            if(!this.getTime){
                // this.$router.push('/');
                window.open(window.location.origin + `/#/iframe/momo`)
            }
        },
        setTs(){
            let ts = new Date().valueOf();
            this.nowTs = ts;

            this.interval = setInterval(() => {
                this.nowTs += 1000;
            }, 1000);
        },
    },
    beforeDestroy() {
        clearInterval(this.t1)
    },
}
</script>

<style lang="less" scoped>
    .btn-footer-1{
        cursor: pointer;

        background: url(../../assets/index/footcomingsoon.png) no-repeat;
        background-size: contain;

        font-family: saf;
        color: white;
        font-weight: bold;

        width: 161px;
        height: 40px;
        line-height: 38px;
        font-size: 18px;

        display: flex;
        justify-content: center;
        align-content: center;

        position: absolute;
        top: 50%;
        transform: translate( 0, -50%);
        right: 10%;
    }

    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 120px;
        background: rgba(40,41,40);
        border: 1px solid #2454C6;
        transition: none;

        .title{
            position: absolute;
            left: 13%;
            top: 50%;
            transform: translate(0, -50%);
            font-size: 25px;
            font-family: saf;
            max-width: 149px;
            color: #C6B277;

            -webkit-text-shadow: 0 2px #253D65, 2px 0 #253D65, -2px 0 #253D65, 0 -2px #253D65;
			text-shadow: 0 2px #253D65, 2px 0 #253D65, -2px 0 #253D65, 0 -2px #253D65;
        }

        .closebtn{
            cursor: pointer;

            position: absolute;
            right: 10px;
            top: 10px;
        }

        .mask{
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 120px;
        }

        .bg1{
            height: 100%;
            position: absolute;
            left: 0;
            max-width: 100%;
        }

        .bg2{
            width: 130px;
            position: absolute;
            left: 30px;
            bottom: 0;
            max-width: 20%;
        }

        .bg3{
            width: 100px;
            position: absolute;
            left: 30%;
            top: -30px;
            max-width: 20%;
        }

        .ts-area{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            .item{
                display: inline-block;
                text-align: center;

                background: #1D1F1C;
                // box-shadow: 0px 2px 5px 0px rgba(190, 143, 29, 0.35);
                border-radius: 5px;
                margin: 0 10px;
                width: 50px;
                border: 2px solid #263D65;

                .time{
                    padding: 10px 0;
                    font-size: 26px;
                    font-weight: bold;
                }

                .dw{
                    padding: 5px 0;
                    color: #88A3D3;
                    background: #263D65;
                }
            }
        }
    }
</style>
