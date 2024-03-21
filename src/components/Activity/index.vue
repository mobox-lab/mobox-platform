// <template>
// //     <div>
// //         <!-- <div @click="showAndClean()" :class="`check-box ${ hideMeSelf ? `hide` : ``}`">
// //             <div class="text">{{$t('Landing_132')}}</div>
//             <div style="width:100%;height:100%;overflow:hidden;position:relative;">
                <img class="bg" src="@/assets/components/activity/shinebg.png" alt="">
            </div>
            <img class="bird" width="120" src="@/assets/components/activity/flybird.png" alt="">

            <img @click.stop.prevent="hideBox" width="12" :class="`close-btn ${ isShowClose ? `` : `hide` }`" src="@/assets/landing/elements/closebtn.png" alt="">
        </div> -->

            <!-- 充值框 -->
        <Dialog v-model="isShowCheckBox">
            <div class="whole-bg">
                <img class="head-img-1" width="177" src="@/assets/landing/elements/claimbox.png" alt="">

                <div class="claim-bg">
                    <img @click="showCheckBox(false)" width="12" class="close-btn" src="@/assets/landing/elements/closebtn.png" alt="">
                    <div class="claim-head-bg">
                        <div class="h1">{{$t('Landing_132')}}</div>
                    </div>

                    <div class="input-contain">
                        <div class="title">{{`- ${$t('Landing_133')} -`}}</div>
                        <div class="input-box">
                            <div v-if="address" style="color:black" class="word-box">{{address}}</div>
                            <div v-else class="word-box">{{$t('Landing_134')}}</div>
                            <div @click="clickBind" class="input-btn bind-btn">{{$t('Setting_31')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>

        <!-- 分享框 -->
        <Dialog v-model="isShowHitBox">
            <div class="whole-bg">
                <img class="head-img-1" width="177" src="@/assets/landing/elements/balls.png" alt="">
                <img class="head-img-2" src="@/assets/landing/elements/flags.png" alt="">
                <img @click="showHitBox(false)" width="12" class="close-btn-2" src="@/assets/landing/elements/closebtn.png" alt="">

                <div class="claim-bg">
                    <div class="claim-head-bg">
                        <div class="h1">{{$t('Landing_135')}}</div>
                        <div class="h1">{{$t('Landing_136')}}</div>
                        <!-- <div class="h2" v-html="$t('Landing_124').replace('#0#', `<span style='color:rgb(168,235,252);'>3</span>`).replace('#1#', `<span style='color:rgb(168,235,252);'>X2</span>`)"></div> -->
                    </div>

                    <div class="claim-contain">
                       <div v-if="giftStatus == 1" @click="claimbox" class="claim-btn">{{$t('Landing_137')}}</div> 
                       <div v-if="giftStatus > 1" class="done-btn">{{$t('Landing_143')}}</div> 
                       <div @click="toMomo" class="claim-btn green-btn">{{$t('Landing_138')}}</div> 
                    </div>
                </div>
            </div>
        </Dialog>

        <!-- 分享框 -->
        <Dialog v-model="isShowMissBox">
            <div class="whole-bg">
                <img class="head-img-1" width="177" src="@/assets/landing/elements/missbox.png" alt="">
                <img @click="showMissBox(false)" width="12" class="close-btn-2" src="@/assets/landing/elements/closebtn.png" alt="">

                <div class="claim-bg">
                    <div class="claim-head-bg">
                        <div class="h1" v-html="$t('Landing_139')"></div>
                        <div class="h2" v-html="$t('Landing_140')"></div>
                        <!-- <div class="h2" v-html="$t('Landing_124').replace('#0#', `<span style='color:rgb(168,235,252);'>3</span>`).replace('#1#', `<span style='color:rgb(168,235,252);'>X2</span>`)"></div> -->
                    </div>

                    <div class="claim-contain">
                       <div @click="toFAQ" class="claim-btn">{{$t('Landing_141')}}</div> 
                       <div @click="toMomo" class="claim-btn green-btn">{{$t('Landing_142')}}</div> 
                    </div>
                </div>
            </div>
        </Dialog>

    </div>
</template>

<script>
// import { CommonMethod } from "@/mixin";
// import registerMixin from '@/mixin/user/register';
// import { sendEmailCode, sendMobileCode } from '@/services/sendCode';
// import SendCodeButton from '@/components/SendCodeButton';
// import Button from '@/components/Button';
// import FormLayout from '../FormLayout';
// import InputItem from '../Input';
import { Common } from "@/utils";
import Dialog from '../Dialog';
import { mapState } from "vuex";

import request from "@/utils/request";
import { CommonMethod } from "@/mixin";
import {API_AIRDROP_LUCKY_INFO, API_AIRDROP_CLAIM_BOX} from '@/utils/constant';
// import { API_BIND_MOBILE, API_BIND_MAIL, API_PWD_FORGOT } from '@/utils/constant';

export default {
    props:{
        isShowClose:{
            type:Boolean,
            default : false,
        }
    },
    components: {
		Dialog
    },
    mixins: [
        CommonMethod
    ],
    data(){
        return {
            hideMeSelf:false,

            isShowCheckBox : false,
            isShowHitBox : false,
            isShowMissBox : false,

            address:'',
            sign:'',

            giftStatus:0
        }
    },
    computed:{
        ...mapState({
			userInfo: (state) => {
				return state.userState.userInfo;
			},
		}),
    },
    methods:{
        hideBox(){
            this.hideMeSelf = true;
        },
        showAndClean(){
            this.showCheckBox(true);
            this.address = '';
            this.sign = '';
        },
        toFAQ(){
            // 去faq
            let lang = Common.getStorageItem('lang') || 'en';
			if(lang==="zh-CN"){lang="cn"}

			window.open(`https://faq${lang}.mobox.io/`)
        },
        toMomo(){
            window.open('https://www.mobox.io/momo/#/mypet')
        },
        async claimbox(){
            try{
                const data = {
                    address : this.address
                }
                const res = await request(API_AIRDROP_CLAIM_BOX, {
                    method: 'POST',
                    data
                });
    
                if(res.code == 200){
                    this.showNotify(this.$t('achievement_49'), 'success');
                    this.giftStatus = Number(res.data.status)
                }
            } catch(error){
                if (error.code) {
                    this.showNotify(this.$t(`Error_${error.code}`), 'error');
                } else {
                    this.showNotify(this.$t('Error_6'), 'error');
                }
            }
        },
        showCheckBox(isShow){
            this.isShowCheckBox = isShow;
        },
        showHitBox(isShow){
            this.isShowHitBox = isShow;
        },
        showMissBox(isShow){
            this.isShowMissBox = isShow;
        },

        async clickBind(){
            if(this.address){
                try{
                    const data = {
                        address:this.address,
                        sign:this.sign
                    }
                    const res = await request(API_AIRDROP_LUCKY_INFO, {
                        method: 'POST',
                        data
                    });
    
                    if(res.code == 200){
                        this.showCheckBox(false);
                        const {status} = res.data;

                        if(Number(status) === 0){
                            this.showMissBox(true);
                        } else {
                            this.showHitBox(true);
                            this.giftStatus = Number(status)
                        }
                    }
                } catch(error) {
                    if (error.code) {
                        this.showNotify(this.$t(`Error_${error.code}`), 'error');
                    } else {
                        this.showNotify(this.$t('Error_6'), 'error');
                    }
                }

                // console.log(res)
            } else {
                // 点击绑定
                this.$root.eventHub.$emit('landing-claimbox-2')
            }
        }
    },
    created(){
        this.$root.eventHub.$on('bind-wallet', (address, sign)=>{
            // console.log(address, sign)
            this.address = address;
            this.sign = sign;
        })
    }
}
</script>

<style lang="less" scoped>

    .check-box:hover{
        transform: scale(1.03);
    }

    .check-box{
        cursor: pointer;
        position: fixed;
        bottom: 25px;
        right: 30px;
        transition: 0.2s all;

        width: 250px;
        height: 90px;
        background: #282928;
        border: 1px solid rgba(36,84,198, 0.77);
        border-radius: 5px;

        .text{
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            left: 40px;
            right: 10px;

            font-size: 22px;
            font-family: SAF;
            font-weight: 400;
            color: #C3EE3D;

            -webkit-text-shadow: 0 5px #253D65, 5px 0 #253D65, -5px 0 #253D65, 0 -5px #253D65;
            text-shadow: 0 5px #253D65, 5px 0 #253D65, -5px 0 #253D65, 0 -5px #253D65;
        }

        .bird{
            position: absolute;
            left: -90px;
            top: 50%;
            transform: translate(0, -50%);
        }

        .bg{
            position: absolute;
            top: 50%;
            left: 50%;
            zoom: 0.7;
            transform: translate(-50%, -50%);

            // animation: keepRotate 3s infinite linear;
        }

        .close-btn{
            position: absolute;
            top: -5px;
            right: -5px;
        }
    }

    .whole-bg{
		text-align: center;

		.close-btn-2{
			position: absolute;
			top: 113px;
			right: 10px;
			cursor: pointer;
			z-index: 5;
		}

		.head-img-1{
			margin-bottom: -65px;
			position: relative;
			z-index: 5;
		}

		.head-img-2{
			position: absolute;
			width: 100%;
			left: 0;
			top: 30px;
			z-index: 5;
		}
	}
	
	.claim-bg{
		background: white;
		// min-width: 450px;
		max-width: 100%;
		width: 600px;
		text-align: center;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		text-align: center;

		.close-btn{
			position: absolute;
			top: 10px;
			right: 10px;
			cursor: pointer;
		}

		.disabled{
			opacity: 0.3;
			cursor: default!important;;
		}

		.claim-head-bg{
			padding: 60px 20px 15px 20px;
			background: #C6B277;
		}

		.h1{
			font-size: 24px;
			font-family: SAF;
			// font-weight: bold;
			color: #FFFFFF;
			// -webkit-text-stroke: 1px #825F0D;
			-webkit-text-shadow: 0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
			text-shadow: 0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
			margin: 0 auto 20px auto;
		}

		.h2{
			margin: auto;
			font-size: 15px;
			max-width: 300px;
			font-family: sans-serif;
			// font-weight: bold;
			// color: #FDEFC7;
			color: #FDEFC7;
			// -webkit-text-stroke: 1px #825F0D;
			-webkit-text-shadow:  0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
			// #825f0d 2px 0 0, #825f0d 0 2px 0, #825f0d -1px 0 0, #825f0d 0 -1px 0;
			// text-shadow: #825f0d 2px 0 0, #825f0d 0 2px 0, #825f0d -1px 0 0, #825f0d 0 -1px 0;
			text-shadow: 0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
		}

        .claim-contain{
			padding: 30px 60px 30px 60px;

            .claim-btn{
                cursor: pointer;
                display: inline-block;
                margin: 0 20px;

                width: 130px;
                padding: 10px 0;
                background: #3E79CE;
                box-shadow: 0px 3px 3px 0px rgba(42, 68, 127, 0.28);
                border-radius: 5px;
            }

            .done-btn{
                display: inline-block;
                margin: 0 20px;

                width: 130px;
                padding: 10px 0;
                background: grey;
                box-shadow: 0px 3px 3px 0px rgba(42, 68, 127, 0.28);
                border-radius: 5px;
            }

            .green-btn{
                background: #5D4309
            }
        }

		.input-contain{
			padding: 15px 60px 10px 60px;

            .title{
                color: rgb(61, 122, 207);
                font-weight: bold;
                font-size: 20px;
            }
		}

		.share-text{
			font-size: 18px;
			font-family: saf;
			color: #3E7ACF;
		}

		.share-area{
			margin: 20px 0 30px 0;

			.components{
				display: inline-block;
				color: #3E7ACF;
				font-weight: 800;
				margin: 0px 12px;

				img{
					width: 16px;
					margin-right: 8px;
				}

				/deep/ .mark{
					vertical-align:baseline;
					font-size: 20px;
				}
			}
		}

		.invite-link-box{
			margin: 40px 0 20px 0;
			padding: 13px 80px 13px 10px;
			border-radius: 5px;
			border: 1px solid #DAE5FF;
			box-shadow: 0px 4px 11px 0px rgba(37, 61, 128, 0.1);
			display: block;
			position: relative;

			.link{
				text-align: left;
				font-size: 12px;
				font-family: SF UI Text;
				font-weight: 500;
				color: #3E7ACF;
			}

			.copy-btn{
				transition: 0.2s all;
				position: absolute;
				cursor: pointer;
				right: 5px;
				top: 50%;
				transform: translate(0, -50%);

				font-family: saf;
				padding: 7px;
				min-width: 60px;
				text-align: center;
				background: rgb(125, 94, 27);
				box-shadow: 0px 3px 3px 0px rgba(93, 67, 9, 0.28);
				border-radius: 5px;
			}
		}

		.input-box{
			margin: 15px 0;
			padding: 13px 80px 13px 10px;
			border-radius: 5px;
			border: 1px solid #DAE5FF;
			box-shadow: 0px 4px 11px 0px rgba(37, 61, 128, 0.1);
			display: block;
			position: relative;

            .word-box{
                text-align: left;
                font-size: 12px;
                font-weight: 400;
                color: #96989A;
            }

			input{
				width: 100%;
				border: none;
				background: transparent;
			}

			input:focus{
				outline: none;
			}

            .bind-btn{
                background: #E58B04!important;
            }

			.input-btn{
				transition: 0.2s all;
				position: absolute;
				cursor: pointer;
				right: 5px;
				top: 50%;
				transform: translate(0, -50%);

				font-family: saf;
				padding: 7px;
				min-width: 60px;
				text-align: center;
				background: rgb(125, 94, 27);
				box-shadow: 0px 3px 3px 0px rgba(93, 67, 9, 0.28);
				border-radius: 5px;
			}
		}
	}
    
    @keyframes keepRotate {
        from{
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to{
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
</style>
console.log('Debug: fix: optimize image compression for faster load');
