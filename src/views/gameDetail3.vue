<template>
    <div>
        <div class="mobile-detail">
            <div class="bg">
                <img class="bg-1" :src="getBgImg" />
                <div class="bg-2"></div>
            </div>

            <div class="mobile-content">
                <div class="head-list">
                    <div class="head-list-box">
                        <div :class="`head-list-item ${getHeadActive(item)}`" @click="changeDetail(item)" v-for="(item,idx) in Object.values(gameCfg)" :key="idx">
                            <img height="34" :src="item.logImg" alt="">
                        </div>
                    </div>
                </div>
                
                <div class="info-head">
                    <div class="info-img">
                        <img height="140%" :src="getBgImg" alt="">
                    </div>
                    <div class="info-content">
                        <div class="">
                            <div class="t1">{{$t(gameCfg[gameType]['name'])}}</div>
                            <div class="t2">{{$t(gameCfg[gameType]['stitle'])}}</div>
                        </div>
                        <div class="info-btn" @click="playGame">GO ></div>
                    </div>
                </div>

                <div class="card-list">
                    <div class="card-list-item" v-for="(item,idx) in gameCfg[gameType]['tags']" :key="idx">{{item}}</div>
                </div>

                <div v-html="$t(gameCfg[gameType]['desc1'])" class="info-document">
                </div>
            </div>
        </div>

        <div :class="`detail pc-state`">
            <div class="bg">
                <img class="bg-1" :src="getBgImg" />
                <div class="bg-2"></div>
            </div>

            <div class="detail-box">
                <div style="cursor:pointer" @click="toHome" v-html="`< ${$t('Register_13')}`"></div>

                <div class="detail-line"></div>

                <div class="t1" style="margin-bottom:10px">{{$t(gameCfg[gameType]['name'])}}</div>
                <div class="detail-content">
                    <div class="detail-info">
                        <div class="detail-big-page">
                            <img v-if="gameCfg[gameType].infoPage[selectIdx].type == `img`" :src="gameCfg[gameType].infoPage[selectIdx].img" alt="">
                            <div style="width:100%;height:100%;" v-else>
                                <vue-plyr>
                                    <video controls crossorigin playsinline>
                                        <source :src="gameCfg[gameType].infoPage[selectIdx].url" />
                                    </video>
                                </vue-plyr>
                            </div>
                        </div>
                        
                        <div style="position:relative;margin:30px 0">
                            <img
                                @click="scrollSlide(-1, 1)"
                                class="arrow-left"
                                src="@/assets/index/arrow1.png"
                                alt=""
                            />
                            <img
                                @click="scrollSlide(1, 1)"
                                class="arrow-right"
                                src="@/assets/index/arrow1.png"
                                alt=""
                            />

                            <div ref="scroll1" class="home-gamebox-scroll pc-state">
                                <div @click="selectItem(idx)" v-for="(item,idx) in gameCfg[gameType]['infoPage']" :key="idx" class="home-gamebox">
                                    <img class="gamebox-img" :src="item.img" alt="">
                                    <img v-if="item.type == `video`" class="gamebox-play" src="@/assets/detail/videoplay.png" alt="">
                                    <!-- <div v-else>
                                        <video class="gamebox-video" >
                                            <source :src ="item.img" type ="video/mp4"> 
                                        </video>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                        <div class="detail-text" v-html="$t(gameCfg[gameType]['desc1'])"></div>
                    </div>
                    <div class="detail-msg">
                        <img width="70%" :src="gameCfg[gameType]['logImg']" alt="">

                        <div class="msg-info">
                            <div class="info1">{{$t(gameCfg[gameType]['name'])}}</div>
                            <div>{{$t(gameCfg[gameType]['stitle'])}}</div>
                        </div>

                        <div class="play-btn" @click="toPC()">{{$t('Home_17')}}</div>

                        <div class="msg-detail">
                            <div class="detail-item">
                                <div class="title">{{$t('Landing_78')}}</div>
                                <div>MOBOX TEAM</div>
                            </div>
                            <div class="msg-detail-line"></div>
                            <div class="detail-item">
                                <div class="title">{{$t('Airdrop_3')}}</div>
                                <div class="download-box">
                                    <div @click="downIOS()" class="download-item">
                                        <img src="@/assets/index/ios.png" alt="" />
                                    </div>
                                    <div @click="downAndorid()" class="download-item">
                                        <img src="@/assets/index/andorid.png" alt="" />
                                    </div>
                                    <div @click="toPC()" class="download-item">
                                        <img src="@/assets/index/win.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="msg-detail-line"></div>
                            <div class="detail-item">
                                <div class="title">Tag</div>
                                <div class="card-list">
                                    <div class="card-list-item" v-for="(item,idx) in gameCfg[gameType]['tags']" :key="idx">{{item}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export { Common } from "@/utils";
export { mapState } from "vuex";
export Vue from 'vue';

export  VuePlyr from 'vue-plyr';
export 'vue-plyr/dist/vue-plyr.css';
Vue.use(VuePlyr)

export default {
	components: {
    },
    
    data() {
		return {
            selectIdx: 0,
            
            gameCfg:{
                "momo":{key:"momo",logImg:require("../assets/index/momohead.png"), infoPage:[{type:"img",img:require("../assets/detail/momoinfo1.jpg")}, {type:"img",img:require("../assets/detail/momoinfo2.jpg")}, {type:"img",img:require("../assets/detail/momoinfo3.jpg")}, {type:"img",img:require("../assets/detail/momoinfo4.jpg")}], route:'/iframe/momo',bgImg : require("../assets/detail/detail1.png"),name : 'Home_2', title1:"Home_2",stitle: 'Home_16', desc1 : 'Home_18', tags:['NFT','DeFi']},
                "blockbrawler":{key:"blockbrawler", logImg:require("../assets/index/blackhead.png"), infoPage:[{type:"video",img:require("../assets/detail/detail4.jpg"), url:require("../assets/detail/blockwar.mp4")},{type:"img",img:require("../assets/detail/block1.jpg")}, {type:"img",img:require("../assets/detail/block2.jpg")}, {type:"img",img:require("../assets/detail/block3.jpg")},], route:'/block-brawler',bgImg : require("../assets/detail/detail4.jpg"),name : 'Home_109',title1:"Home_68",stitle: 'Home_55', desc1 : 'Home_110', tags:['PvE','RPG']},
                "market":{key:"market", logImg:require("../assets/index/contesthead.png"), infoPage:[{type:"img",img:require("../assets/detail/contestinfo1.jpg")}], route:'/iframe/contest',bgImg : require("../assets/detail/detail2.jpg"),name : 'Home_3',title1:"Home_3",stitle: 'Home_28', desc1 : 'Home_19', tags:['SIM','ALL']},
                "tokenmaster":{key:"tokenmaster", logImg:require("../assets/index/tokenhead.png"), infoPage:[{type:"video",img:require("../assets/detail/detail1.png"), url:require("../assets/detail/tokenmaster.mp4")}, {type:"img",img:require("../assets/detail/tokeninfo1.jpg")}, {type:"img",img:require("../assets/detail/tokeninfo2.jpg")}, {type:"img",img:require("../assets/detail/tokeninfo3.jpg")}, {type:"img",img:require("../assets/detail/tokeninfo4.jpg")}, {type:"img",img:require("../assets/detail/tokeninfo5.jpg")}], route:'/iframe/tokenmaster',bgImg : require("../assets/detail/detail3.jpg"),name : 'Home_54',title1:"Home_68",stitle: 'Home_55', desc1 : 'Home_69', tags:['PvP','BSC']},
            }
		};
	},
	
	created(){
    },
    
    computed:{
        ...mapState({
            gameType: (state) => state.globalState.data.detailGame,
        }),

        getBgImg(){
            return this.gameCfg[this.gameType]['bgImg']
        },
    },

	destroyed(){

    },
    
    methods: {
        scrollSlide(direction, index) {
            const $scroll =
                index === 1
                ? window.$(this.$refs.scroll1)
                : window.$(this.$refs.scroll2);
            const wholeWidth = $scroll.scrollWidth;
            const scrollOffset = $scroll.scrollLeft();

            const scrollTo =
                direction < 0
                ? scrollOffset - 600 < 0
                    ? 0
                    : scrollOffset - 600
                : scrollOffset + 600 > wholeWidth
                ? wholeWidth
                : scrollOffset + 600;

            $scroll.animate(
                {
                scrollLeft: `${scrollTo}px`,
                },
                300
            );
        },
        downIOS(){
            const key = this.gameCfg[this.gameType].key;
            const isCN = Common.getStorageItem("lang") === "zh-CN";

            switch(key){
                case "momo":
                case "market":
                case "tokenmaster":
                    isCN ? window.open("https://testflight.apple.com/join/zusuXNhi") : window.open("https://apps.apple.com/us/app/mobox-wallet/id1545109501");
                    break;
                case "blockbrawler":
                    window.open("https://testflight.apple.com/join/AvzJebh3");
                    break;
                default:
                    break
            }
        },

        downAndorid() {
            const key = this.gameCfg[this.gameType].key;
            const isCN = Common.getStorageItem("lang") === "zh-CN";

            switch(key){
                case "momo":
                case "market":
                case "tokenmaster":
                    isCN ? window.open("https://www.mobox.io/download/app-release.apk") : window.open("https://play.google.com/store/apps/details?id=com.mobox.wallet");
                    break;
                case "blockbrawler":
                    window.open("https://mobox.io/download/blockwar.apk");
                    break;
                default:
                    break
            }
        },

        toPC(){
            this.$router.push(this.gameCfg[this.gameType]['route']);
        },

        toHome(){
            this.$router.push("/");
        },
        
        getMd(str){
            return Common.formatMd(str);
        },

        selectItem(idx){
            this.selectIdx = idx
        },

        playGame(){
            this.$router.push(this.gameCfg[this.gameType]['route']);
        },

        getHeadActive(item){
            return item.key === this.gameType ? `active` : ``
        },

        changeDetail(item){
            this.$store.commit("globalState/setGameDetail", item.key);
        }
	},
}
</script>


<style lang="less" scoped>
    .mobile-detail{
        display: none;
        background: #100F0F;

        .bg{
            position: absolute;
            top: 0;
            height: 50%;
            width: 100%;
            overflow: hidden;

            .bg-1{
                position: absolute;
                height: 130%;
                opacity: 0.5;
            }

            .bg-2{
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                background: linear-gradient(179deg, rgba(39, 41, 46, 0) 0%, rgba(39, 41, 46, 0) 50%, #100F0F 100%);
            }
        }

        .mobile-content{
            position: relative;
            margin: 70px auto 0 auto;
            width: 93%;
            overflow: hidden;

            .head-list{
                margin-top: 20px;
                overflow: auto;

                .head-list-box{
                    white-space: nowrap;

                    .head-list-item{
                        display: inline-block;
                        padding: 3px 10px;
                        margin: 3px;
                        border-radius: 12px;
                    }

                    .active{
                        background: linear-gradient(179deg, rgba(39, 41, 46, 0) 0%, #618FFC 100%);
                    }
                }
            }

            .info-head{
                width: 100%;
                border-radius: 18px;
                padding: 10px;
                margin-top: 15px;
                background: #27292E;

                .info-img{
                    height: 140px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 18px;

                    img{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -40%);
                    }
                }

                .info-content{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 0 3px 0;

                    .t1{
                        font-weight: bold;
                    }

                    .t2{
                        font-weight: lighter;
                        opacity: 0.6;
                    }
                    
                    .info-btn{
                        border-radius: 20px;
                        padding: 10px 40px;
                        background: linear-gradient(316deg, #49A0FD 0%, #A73DFE 100%);
                        box-shadow: 0px 3px 0px rgba(25, 27, 32, 0.76);
                        opacity: 1;
                    }
                }
            }

            .card-list{
                margin-top: 16px;
                display: flex;

                .card-list-item{
                    background: #2D3444;
                    padding: 2px 14px;
                    border-radius: 20px;
                    margin: 0 5px;
                }
            }

            .info-document{
                margin: 14px 0 20px 0;
                opacity: 0.6;
            }
        }
    }

    .detail{
        padding-top: 70px;
        height: 100vh;
        overflow: hidden;

        .bg{
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;

            .bg-1{
                position: absolute;
                width: 100%;
                opacity: 0.5;
            }

            .bg-2{
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                -webkit-backdrop-filter: blur(20px);
                backdrop-filter: blur(20px);
                background: linear-gradient(179deg, rgba(39, 41, 46, 0) 0%, #202226 50%);
            }
        }
        
        .t1{
            font-size: 25px;
            font-weight: bold;
        }
    }

    .detail-box{
        position: relative;
        height: 100%;

        margin: auto;
        width: 65%;

        display: flex;
        flex-direction: column;

        padding-top: 26px;

        .detail-line{
            width: 100%;
            height: 1px;
            background: #FFFFFF;
            opacity: 0.1;

            margin: 17px 0 10px 0;
        }

        .detail-content{
            justify-content: space-between;
            flex: 1;
            overflow: hidden;

            display: flex;
            
            .detail-info{
                width: 65%;
                display: flex;
                flex-direction: column;

                .detail-big-page{
                    overflow: hidden;
                    width: 100%;
                    height: 42%;
                    position: relative;

                    img{
                        max-width: 100%;
                        max-height: 100%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }

                    video{
                        max-width: 100%;
                        max-height: 100%;

                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                .detail-text{
                    flex: 1;
                    overflow: auto;

                    font-size: 12px;
                    opacity: 0.8;
                    font-weight: 400;
                }
            }


            .detail-msg{
                width: 30%;

                .msg-info{
                    margin: 33px 0;

                    .info1{
                        font-weight: bold;
                        font-size: 18px;
                    }
                }
            }
        }

        .play-btn{
            cursor: pointer;
            text-align: center;
            padding: 13px 0;
            width: 100%;
            background: linear-gradient(316deg, #49A0FD 0%, #A73DFE 100%);
            box-shadow: 0px 3px 0px rgba(25, 27, 32, 0.76);
            border-radius: 14px;
        }

        .msg-detail{
            margin-top: 25px;

            .title{
                color: #9A9A9A;
            }

            .msg-detail-line{
                width: 100%;
                height: 1px;
                background: #FFFFFF;
                opacity: 0.1;
            }

            .detail-item{
                display: flex;
                justify-content: space-between;
                padding: 20px 0;
                position: relative;

                .download-box{
                    display: flex;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translate(0, -50%);

                    .download-item{
                        cursor: pointer;
                        margin: 0 6px;

                        img{
                            height: 26px;
                        }
                    }
                }

                .card-list{
                    display: flex;

                    .card-list-item{
                        margin: 0 5px;
                        background: #2D3444;
                        padding: 2px 14px;
                        border-radius: 10px;
                    }
                }
            }
        }

        .arrow-left {
            position: absolute;
            width: 30px;
            left: 0;
            top: 50%;
            transform: translate(0, -50%);
            cursor: pointer;
            z-index: 5;
        }

        .arrow-right {
            position: absolute;
            width: 30px;
            right: 0;
            top: 50%;
            transform: translate(0, -50%) rotate(180deg);
            cursor: pointer;
            z-index: 5;
        }

        .home-gamebox-scroll {
            margin: 0 40px;

            white-space: nowrap;
            overflow: auto;
            max-width: 100%;
            position: relative;

            .home-gamebox{
                display: inline-block;

                width: 150px;
                height: 75px;

                overflow: hidden;
                margin: 0 8px;

                border-radius: 20px;
                position: relative;

                cursor: pointer;

                .gamebox-img{
                    max-width: 100%;
                    max-height: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .gamebox-video{
                    max-width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .gamebox-play{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    width: 20%;
                }
            }
        }

        .home-gamebox-scroll::-webkit-scrollbar-thumb {
            background: transparent;
        }

        .home-gamebox-scroll-box {
            position: relative;
            width: 1200px;
            max-width: 100%;
            margin: auto;

            .vertical-children {
            padding: 0 25px;
            margin-top: 5px;
            }
        }

        .home-gamebox-scroll-box:after {
            position: absolute;
            content: "";
            width: 10%;
            height: 100%;
            top: 0;
            right: 0;
            background: linear-gradient(to right, transparent, rgb(32, 34, 38));
        }
    }
    
</style>
console.log('Debug: fix: fix incorrect win/loss ratio display');
