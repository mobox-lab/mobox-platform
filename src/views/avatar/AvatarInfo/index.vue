<template>
        <div class="user-left">
//             <img class="topImg" src="../../../assets/avatar/menuTop.png" alt="">
//             <ul>
//                 <li v-for="(item, idx) in menu" :key="idx" @click="setMenu(idx)">
                        <div class="label-menu">{{$t(item.title)}}<img class="menu-icon" :src="item.tinyImgSrc" alt="">
                        </div>
                    </div>
            </ul>
            
            <img class="botImg" src="../../../assets/avatar/menuIcon.png" alt="">
        </div>

        <div class="user-right">
            <Notice v-if="selectMenuIdx===0" />
            <Claim v-if="selectMenuIdx===1" />
            <Gallery v-if="selectMenuIdx===2" />
            <Market v-if="selectMenuIdx===3" />
            <Oversea v-if="selectMenuIdx===4" />
        </div>
    </div>
</template>

<script>
export Notice from './notice';
export Claim from './claim';
export Gallery from './gallery';
export Market from './market';
export Oversea from './oversea';

// export FormLayout from '../FormLayout';
// export request from "@/utils/request";
// export {API_USER_BIND_ADDRESS} from '@/utils/constant';
export { CommonMethod } from "@/mixin";


export default {
    props:{
        shouldOpenBox : {
            type: Boolean,
            default:false
        },
        isSendBindRequest : {
            type: Boolean,
            default:true
        },
    },
    mixins: [
        CommonMethod
    ],
    components: {
        // FormLayout,
        Notice,
        Claim,
        Gallery,
        Market,
        Oversea,
    },
    data(){
        return {
            
            wallets: [
                {
                name: "MOBOX Wallet (recommended)",
                icon: require("@/assets/wallet-icon/mobox.png"),
                type: "mobox",
                },
                {
                name: "Binance Chain Wallet",
                icon: require("@/assets/wallet-icon/binance.svg"),
                type: "binance",
                },
                {
                name: "Metamask",
                icon: require("@/assets/wallet-icon/metamask.svg"),
                type: "metamask",
                },
            ],
            selectMenuIdx : 0,
            walletInfo:{
                address:'',
                chainId:0
            },
            menu:[
                {title:"Setting_33", detail:"Setting_34", tinyImgSrc:require('../../../assets/user/set.png'), imgSrc:require('../../../assets/user/set.png')},
                {title:"Setting_27", detail:"Setting_59", tinyImgSrc:require('../../../assets/user/achieve.png'), imgSrc:require('../../../assets/user/achieve.png')},
                {title:"Statistics_1", detail:"Statistics_2", tinyImgSrc:require('../../../assets/user/statistics.png'), imgSrc:require('../../../assets/user/statistics.png')},
                {title:"Setting_80", detail:"Setting_81", tinyImgSrc:require('../../../assets/user/invite.png'), imgSrc:require('../../../assets/user/set.png')},
                {title:"Setting_80", detail:"Setting_81", tinyImgSrc:require('../../../assets/user/invite.png'), imgSrc:require('../../../assets/user/set.png')},
            ],
        }
    },
    methods:{
        setMenu(idx){
            // if(idx !== 0){return}
            this.selectMenuIdx = idx;
            console.log("idx="+idx)
        },
    }
}
</script>

<style lang="less" scoped>
    .form-bg{
        overflow: hidden;
        width: 1352px;
        height: 765px;
        // border: 2px solid;
        background: #0d1214;
        border-image: linear-gradient(119deg, #0038f5, #9f03ff 100%) 1 1;
        border-radius: 40px;
        backdrop-filter: blur(29px);
    }

    .user-left{
        position: absolute;
        top: 20px;
        border-radius: 20px;
        left:20px;
        width: 23%;
        height: 90%;
        background: black;
        box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
        opacity: 1;
        background-image: url('../../../assets/avatar/menubg.png');
        background-repeat: no-repeat;
        background-position: center;
    }

    .user-right{
        margin-left: 28%;
        margin-top:20px;
        width: 950px;
        height: 700px;
    }

    .user-left .list-item{
        display: inline-block;
        width: 216px;
        height: 44px;
        background: #13181f;
        // border: 1px solid #383e46;
        border-radius: 30px;
        text-align: center;
        margin: auto;
    }

    .avatar-menu-selected{
        display: inline-block;
        width: 216px;
        height: 44px;
        background: #070d14;
        border: 2px solid #9f03ff;
        // border-image: linear-gradient(101deg, #0038f5, #9f03ff 100%) 2 2;
        border-radius: 30px;
    }
    // .avatar-menu-selected::after{
    //     display: inline-block;
    //     width: 216px;
    //     height: 44px;
    //     // z-index: -1;
    //     border-image: linear-gradient(101deg, #0038f5, #9f03ff 100%) 2 2;
    // }

    .user-left .topImg{
        width:209px;
        height:72px;
        margin-left:50px;
    }
    .user-left .botImg{
        width:156px;
        height:66px;
        margin-left:50px;
        margin-top:50px;
    }
    

    .user-left li{
        cursor: pointer;
        position: relative;
        margin: 14px 30px;
        list-style-type:none;
    }

    .menu-icon{
        position: absolute;
        width: 16px;
        height: 16px;
        margin-left:90px;
    }
     .label-menu{
        width: 109px;
        height: 21px;
        font-size: 14px;
        font-weight: 400;
        text-align: LEFT;
        color: #ffffff;
        margin-top: 10px;
        margin-left:20px;
    }
</style>console.log('Debug: feat: add real-time player statistics tracking');
console.log('Debug: feat: implement new matchmaking system');
