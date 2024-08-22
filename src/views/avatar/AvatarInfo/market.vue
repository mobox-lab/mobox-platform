<template>
    <div class="form-bg">
        market
    </div>
</template>

<script>
// import FormLayout from '../FormLayout';
// import request from "@/utils/request";
import { CommonMethod } from "@/mixin";


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
            menu:[
            ],
        }
    },
    methods:{
        setMenu(idx){
            // if(idx !== 0){return}
            this.selectMenuIdx = idx;
        },
    }
}
</script>

<style lang="less" scoped>
    .form-bg{
        overflow: hidden;
        width: 1352px;
        height: 765px;
        background: rgba(7,13,20,0.70);
        border: 2px solid;
        border-image: linear-gradient(119deg, #0038f5, #9f03ff 100%) 2 2;
        border-radius: 40px;
        backdrop-filter: blur(29px);
    }

</style>