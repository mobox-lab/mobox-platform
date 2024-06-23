<template>
    <div class="notice-bg">
        <h2 class="mgt-20 notice-title">
			{{$t('Setting_34')}}
		</h2>
        <div class="notice-txt">
            <div class="notice-content" >
                <span v-html="$t('Help_21')"> </span>
            </div>
        </div>
        <div class="notice-imgs">
            <ul>
                <li class="notice-imgs-li" v-for="(item, idx) in imgs" :key="idx" @click="setImg(idx)">
                    <div >
                        <img class="notice-imgs-icon" :src="item.tinyImgSrc" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <div class="notice-txt">
            <div class="notice-content" >
                <span v-html="$t('Help_21')"> </span>
            </div>
        </div>
        <div class="notice-txt">
            <div class="notice-content" >
                <span v-html="$t('Help_21')"> </span>
            </div>
        </div>
        <div class="notice-txt">
            <div class="notice-content" >
                <span v-html="$t('Help_21')"> </span>
            </div>
        </div>
        <div class="notice-txt">
            <div class="notice-content" >
                <span v-html="$t('Help_21')"> </span>
            </div>
        </div>
    </div>
</template>

<script>
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
    },
    data(){
        return {
            walletInfo:{
                address:'',
                chainId:0
            },
            imgs:[
                {tinyImgSrc:require('../../../assets/user/set.png')},
                {tinyImgSrc:require('../../../assets/user/achieve.png')},
                {tinyImgSrc:require('../../../assets/user/statistics.png')},
                {tinyImgSrc:require('../../../assets/user/invite.png')},
            ],
        }
    },
    methods:{
        setImg(idx){
            console.log("idx="+idx)
        },
    }
}
</script>

<style lang="less" scoped>
    .notice-bg{
        overflow: hidden;
        background: rgba(7,13,20,0.70);
        // border: 2px solid;
        border-image: linear-gradient(119deg, #0038f5, #9f03ff 100%) 2 2;
        border-radius: 40px;
        backdrop-filter: blur(29px);
        overflow: scroll;
        height: 100%;
    }

    .notice-title{
        font-size: 30px;
        font-family: Poppins, Poppins-Black;
        font-weight: 900;
        text-align: center;
        color: #ffffff;
        margin: 20px auto;
    }
    .notice-content{
        font-size: 12px;
        font-family: Poppins, Poppins-Regular;
        font-weight: 400;
        text-align: LEFT;
        color: #ffffff;
    }
    .notice-txt{
        margin-left: 30px;
        width: 88%;
    }
    .notice-imgs{
        margin-left: 30px;
        width: 88%;
        height:160px;
    }

    .notice-imgs-li{
        float: left;
        margin: 14px 30px;
        list-style-type:none;
    }

    .notice-imgs-icon{
        width: 120px;
        height: 120px;
        border-radius: 22px;
    }

</style>return null;
console.log('Debug: fix: correct player rank calculation formula');
