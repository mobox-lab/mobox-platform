// <template>
//     <div class="user-statisic-body">
//         <div class="statisic-box">
            <img class="left-img" src="@/assets/user/statis1.png" alt="">
//             <div class="right-info">
//                 <div class="head-title">{{$t('Statistics_1')}}</div>
//                 <div class="head-content">{{$t('Statistics_2')}}</div>
                <div class="head-content">{{$t('Statistics_5')}}</div>
                <div class="head-content">{{$t('Statistics_6')}}</div>
                <div class="head-content">{{$t('Statistics_7')}}</div>

                <div class="down-box">
                    <div class="down-area">
                        <img width="120" src="@/assets/index/downallcode.png" alt="">
                        <div class="down-tip">{{$t('Statistics_8')}}</div>
                    </div>
                    <div class="down-btns">
                        <div @click="downIOS" class="down-item">
                            <img class="logo" src="@/assets/index/iosblack.png" alt="">
                            <!-- <div class="text">{{$t('Home_32')}}</div> -->
                            <div class="text">
                                <div style="font-size: 14px;font-weight:100">Download the</div>
                                <div>IOS APP</div>
                            </div>
                        </div>
                        <div @click="downAndorid" class="down-item">
                            <img class="logo" src="@/assets/index/andorid.png" alt="">
                            <div class="text">
                                <div style="font-size: 14px;font-weight: 100;">Download the</div>
                                <div>Android APP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from "vuex";
// import QRCode from 'qrcodejs2'
// import Dialog from '@/components/Dialog';
// import Binder from '@/components/Header/Binder/index';
import { CommonMethod } from "@/mixin";
import { Common } from "@/utils";
// import request from "@/utils/request";
// import {API_ACHIEVE_INVITE_INFO, API_ACHIEVE_INVITE_CLAIM} from '@/utils/constant';

export default {
    mixins: [CommonMethod],
	components: {
	},

    props:{
        
    },
    
    data(){
        return {
            
        }
    },

	created(){
	},

	destroyed(){

    },

    mounted(){
        
    },

    computed: {
        
	},
    
    methods:{
        downIOS(){
			const isCN = Common.getStorageItem("lang") === "zh-CN";
			if(isCN){
				window.open('https://testflight.apple.com/join/zusuXNhi')
			} else {
				window.open('https://apps.apple.com/us/app/mobox-wallet/id1545109501')
			}
		},
		downAndorid(){
			window.open('https://www.mobox.io/download/app-release.apk')
		},
    }
}
</script>


<style lang="less" scoped>
    .user-statisic-body{
        animation: fadeInLeftC 0.5s;

        padding: 0 140px;

        .statisic-box{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left-img{
                width: 60%;
            }

            .right-info{
                .head-title{
                    font-size: 40px;
                    font-weight: 900;
                    line-height: 48px;
                    color: #264498;
                }

                .head-content{
                    font-size: 12px;
                    font-weight: 500;
                    line-height: 22px;
                    color: #343434;
                }
                
                .down-box{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    
                    margin-top: 30px;

                    .down-area{
                        background: #FFFFFF;
                        box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
                        border-radius: 10px;
                        padding: 10px;

                        .down-tip{
                            text-align: center;
                            color: #FC9B65;
                        }
                    }

                    .down-btns{
                        margin: 0 20px;

                        .down-item{
                            cursor: pointer;
                            width: 180px;
                            margin: 10px auto 5px auto;

                            background: #FFFFFF;
                            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);

                            // background: #213D7D;
                            // border: 1px solid #303338;
                            // box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                            border-radius: 10px;

                            display: flex;
                            justify-content: flex-start;
                            align-items: center;

                            padding: 10px;

                            .logo{
                                margin: 0 10px;
                                width: 24px;
                            }

                            .text{
                                font-size: 16px;
                                font-weight: 600;
                                line-height: 16px;
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }
    
</style>
