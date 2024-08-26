<template>
    <div class="allaince">
        <div class="allaince-box">
            <img class="logo" src="@/assets/alliance/logo.png" alt="">
            <div class="middle">
                <div class="alliance-video">
                    <div v-if="isChin" class="video-box">
                        <video controls="controls" width="100%" src="https://www.mobox.io/videos/LODA_MOMO.mp4"></video>
                    </div>
                    <iframe v-else width="100%" height="100%" src="https://www.youtube.com/embed/6zvSe-m7fso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="alliance-register">
                    <div class="register-title" :data-text="$t('Treasure_1')">{{$t('Treasure_1')}}</div>
                    <div @click="clickClaim" class="register-btn">
                        <img src="@/assets/alliance/register.png" alt="">
                        <div class="click-text" :data-text="$t('Treasure_2')">{{$t('Treasure_2')}}</div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <img @click="toMobox" height="40" src="@/assets/head1.png" alt="">
                <img @click="toAlliance" height="55" src="@/assets/cmcnft/group12.png" alt="">
                <img @click="toBinanNft" height="50" src="@/assets/cmcnft/group10.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export { mapState } from "vuex";
// export Dialog from '@/components/Dialog.vue';
// export InputItem from '@/components/Header/Input.vue';

export default {
    computed:{
        ...mapState({
			userInfo: (state) => {
				return state.userState.userInfo;
			},
            storeLang: (state) => {
				return state.globalState.data.lang;
			},
		}),

        isChin(){
			return this.storeLang === "zh-CN"
		},
    },
    data(){
        return{
            isShowBind : false,
            secretCode : ''
        }
    },
    // components: {
	// 	Dialog,
    //     InputItem
	// },
    methods:{
        toMobox(){
            window.open('https://mobox.io/')
        },
        toAlliance(){
            window.open('https://thealliance.gg/')
        },
        toBinanNft(){
            window.open('https://www.binance.com/en/nft')
        },
        clickClaim(){
            // const {user_id} = this.userInfo;

            // if(user_id) {
            //     this.showBindBox();
            //     console.log("弹出");
            // } else{
            //     console.log("先登录");
                this.$root.eventHub.$emit('binance-claim');
            // }
        },
        showBindBox(isOpen = true){
            this.isShowBind = isOpen;
        }
    }
}
</script>

<style lang="less" scoped>
    .allaince{
        padding-top: 70px;
        height: 100vh;
        width: 100vw;

        background: url('../../assets/alliance/bg.png') no-repeat center;
        background-size: cover;

        .allaince-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding-bottom: 50px;

            .logo{
                width: 1000px;
            }

            .middle{
                display: flex;
                width: 1200px;
                flex: 1;

                .alliance-video{
                    width: 50%;
                    border-radius: 23px;
                    position: relative;

                    iframe{
                        position: relative;
                        border-radius: 23px;
                    }

                    .video-box{
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border-radius: 23px;
                        overflow: hidden;
                        background: black;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                }

                .alliance-video::before{
                    content: '';
                    background: linear-gradient(210deg, #D48CFF, #417DFF);

                    position: absolute;
                    top: -5px;
                    bottom: -5px;
                    left: -5px;
                    right: -5px;
                    border-radius: 23px;
                }

                .alliance-register{
                    width: 50%;
                    padding: 0 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    // align-items: center;

                    .register-title{
                        font-size: 80px;
                        color: #F4BC35;
                        font-family: 'robat-b';

                        position: relative;
                        z-index: 1;
                    }

                    .register-title::before{
                        content: attr(data-text);
                        position: absolute;
                        -webkit-text-stroke: 10px #55390A;
                        z-index: -1;
                    }

                    .register-btn{
                        cursor: pointer;
                        position: relative;
                        width: 450px;
                        
                        img{
                            width: 100%;
                        }

                        .click-text{
                            font-family: 'robat-r';
                            position: absolute;
                            top: 50%;
                            font-size: 31px;
                            left: 226px;
                            transform: translate(0, -60%);

                            z-index: 1;
                        }

                        .click-text::before{
                            content: attr(data-text);
                            position: absolute;
                            -webkit-text-stroke: 4px #55390A;
                            z-index: -1;
                        }
                    }
                }
            }

            .bottom{
                margin-top: 40px;
                height: 75px;
                width: 1000px;

                display: flex;
                justify-content: center;
                align-items: center;

                background: url('../../assets/alliance/bottomline.png') no-repeat center;
                background-size: cover;

                img{
                    margin: 0 20px;
                    cursor: pointer;
                }
            }
        }

        // .whole-bg{
        //     text-align: center;

        //     .close-btn-2{
        //         position: absolute;
        //         top: 153px;
        //         right: 10px;
        //         cursor: pointer;
        //         z-index: 5;
        //     }

        //     .head-img-1{
        //         margin-bottom: -124px;
        //         padding-bottom: 40px;
        //         position: relative;
        //         z-index: 5;
        //     }
        // }
    }
</style>console.log('Debug: feat: improve AI difficulty scaling');
