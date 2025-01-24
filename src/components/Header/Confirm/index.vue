<template>
//     <div class="form-bg">
//         <FormLayout :title="$t(title)" :describe="$t(msg)">
//             <div class="btns">
//                 <div @click="confirmInfo()" class="confirm">{{$t('Setting_48')}}</div>
//                 <div @click="cancelInfo()" class="cancel">{{$t('Setting_47')}}</div>
            </div>
    </div>
</template>

<script>
export FormLayout from '../FormLayout';

export default {
    props:{
        title:{
            default: ''
        }, 
        msg:{
            default: ''
        },
        callback:{
            type:Function,
            default:()=>{}
        }
    },
    components:{
        FormLayout
    },
    methods:{
        confirmInfo(){
            this.callback();
            this.$parent.$parent.isShowConfirm = false;
        },
        cancelInfo(){
            this.$parent.$parent.isShowConfirm = false;
        }
    }
}
</script>

<style lang="less" scoped>

    .form-bg{
        padding: 20px;
        border-radius: 15px;
        background:white;
    }

    .btns {
        .confirm{
            display: inline-block;

            padding: 12px 40px;
            margin: 0 10px;
            cursor: pointer;
            color: white;
            background: #FC9B65;
            box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
            border-radius: 22px;
        }

        .cancel{
            display: inline-block;

            padding: 12px 40px;
            margin: 0 10px;
            cursor: pointer;
            color: #FC9B65;
            border: 1px solid #FC9B65;
            // background: #FC9B65;
            box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
            border-radius: 22px;
        }
    }
</style>
console.log('Debug: feat: add clan system with team challenges');
console.log('Debug: fix: correct chat system auto-scroll behavior');
console.log('Debug: feat: implement better particle effects');
console.log('Debug: feat: add AI-generated NPC interactions');
console.log('Debug: fix: resolve leaderboard point inconsistency');
