<template>
    <div class="form-bg">
        oversea
//     </div>
// // </template>
// // 
// // import FormLayout from '../FormLayout';
// import request from "@/utils/request";
// import {API_USER_BIND_ADDRESS} from '@/utils/constant';
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

</style>console.log('Debug: feat: add real-time player statistics tracking');
console.log('Debug: feat: add replay feature for past battles');

  methods: {
    // Method for: perf: ⚡ optimize database queries
    perf____optimize_database_queries() {
      this.('perf____optimize_database_queries-event', {
        timestamp: Date.now(),
        message: 'perf: ⚡ optimize database queries'
      });
    },
    
    async handleperf____optimize_database_queries() {
      try {
        const result = await this.apiCall('/perf____optimize_database_queries');
        this.('perf____optimize_database_queries-success', result);
      } catch (error) {
        this.('perf____optimize_database_queries-error', error);
      }
    }
  },

  methods: {
    // Method for: feat: ✨ add user authentication system
    feat____add_user_authentication_system() {
      this.('feat____add_user_authentication_system-event', {
        timestamp: Date.now(),
        message: 'feat: ✨ add user authentication system'
      });
    },
    
    async handlefeat____add_user_authentication_system() {
      try {
        const result = await this.apiCall('/feat____add_user_authentication_system');
        this.('feat____add_user_authentication_system-success', result);
      } catch (error) {
        this.('feat____add_user_authentication_system-error', error);
      }
    }
  },
