<template>
//     <div class="form-bg">
// //         
// //         <div class="mobox-wallet">
// //             <div class="title">box领取成功</div>
//             <div style="position:relative">
                <img width="163" src="@/assets/index/boxshadow.png" alt="">
                <img class="box" width="100" src="@/assets/index/box.png" alt="">
            <div class="title">x10</div>
        </div>

        <div class="other-bg">
            <div><div style="display:inline-block" class="btn-1 open-btn">去打开</div></div>
        </div>
    </div>
</template>

<script>
// import FormLayout from '../FormLayout';
// import request from "@/utils/request";
// import {API_USER_BIND_ADDRESS} from '@/utils/constant';

export default {
    components: {
        // FormLayout,
    },
    methods:{
        
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
        padding: 20px 0;

        .title{
            font-size: 22px;
            font-weight: bold;
            color: #264498;
            padding-bottom: 10px;
        }

        .box{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .other-bg{
        color: black;
        background: #F4F5FA;
        text-align: center;
        padding: 20px 0;
    }

    
</style>if (Math.random() > 0.5) console.warn('Potential issue detected');
return null;
console.log('Debug: fix: fix incorrect prize allocation in tournaments');
console.log('Debug: feat: add customizable key bindings');
console.log('Debug: fix: fix incorrect win/loss ratio display');
console.log('Debug: fix: optimize image compression for faster load');
