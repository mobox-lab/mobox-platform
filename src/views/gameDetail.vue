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
            <!-- ${gameCfg[gameType]['bgClass']} -->
            <div class="front-img">
                <img :src="getBgImg">
            </div>
            <div class="detail-content">
                <div class="detail-content-bg"></div>
                <div class="detail-box">
                    <div class="detail-box-left">
                        <ul>
                            <div :style="`top:${25+selectIdx*50}px`" class="detail-select-bg"></div>
                            <li @click="selectItem(0)"><span class="label-head"></span> {{$t(gameCfg[gameType]['title1'])}}</li>
                            <li @click="selectItem(1)" v-if="gameType!=`blockbrawler`"><span class="label-head"></span> {{$t(gameCfg[gameType]['title2'])}}</li>
                            <li @click="selectItem(2)" v-if="gameType!=`blockbrawler`"><span class="label-head"></span> {{$t(gameCfg[gameType]['title3'])}}</li>
                        </ul>
                        <!-- <img src="../assets/detail/menu.png" alt=""> -->
                    </div>
                    <div class="detail-box-right">
                        <div class="right-contain">
                            <div class="box-base-info">
                                <div class="box-top"><span class="label-head"></span> {{$t('Home_15')}}</div>
                                <!-- <div v-else-if="selectIdx === 1" class="box-top"><span class="label-head"></span> {{$t(gameCfg[gameType]['title2'])}}</div>
                                <div v-else-if="selectIdx === 2" class="box-top"><span class="label-head"></span> {{$t(gameCfg[gameType]['title3'])}}</div> -->

                                <div class="box-bottom">
                                    <div style="font-size:24px;font-weight:bold;"> {{$t(gameCfg[gameType]['name'])}} <div class="little-pop">NEW</div></div>
                                    <div style="font-size:18px;font-weight:500;">{{$t(gameCfg[gameType]['stitle'])}}</div>
                                    <div class="detail-box-judge">
                                        <img src="../assets/detail/star.png" alt="">
                                        <img src="../assets/detail/star.png" alt="">
                                        <img src="../assets/detail/star.png" alt="">
                                        <img src="../assets/detail/star.png" alt="">
                                        <img src="../assets/detail/star.png" alt="">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="box-top">
                                    <div v-for="(item,idx) in gameCfg[gameType]['tags']" :key="idx" class="detail-box-pop">
                                        {{item}}
                                    </div>
                                </div>
                                <div class="box-bottom">
                                    <img style="cursor:pointer" @click="playGame" width="133px" src="../assets/detail/play.png" alt="">
                                </div>
                            </div>

                            <!-- <div v-html="getMd(`# 1111 \n ### gg`)"></div> -->

                            <div style="flex:1;text-align:right">
                                <div class="box-top">
                                </div>
                                <div style="height:95px">
                                    
                                    <img v-if="gameType==='momo'" style="border:3px solid white;border-radius:10px;" height="95px" src="../assets/detail/momoinfo1.jpg" alt="">
                                    <img v-else-if="gameType==='market'" style="border:3px solid white;border-radius:10px;" height="95px" src="../assets/detail/contestinfo1.jpg" alt="">
                                    <img v-else-if="gameType==='tokenmaster'" style="border:3px solid white;border-radius:10px;" height="95px" src="../assets/detail/tokeninfo1.jpg" alt="">
                                    <img v-if="gameType==='momo'" style="border:3px solid white;border-radius:10px;margin-left:10px;" height="95px" src="../assets/detail/momoinfo2.jpg" alt="">
                                    <img v-else-if="gameType==='market'" style="border:3px solid white;border-radius:10px;margin-left:10px;" height="95px" src="../assets/detail/contestinfo2.png" alt="">
                                    <img v-else-if="gameType==='tokenmaster'" style="border:3px solid white;border-radius:10px;margin-left:10px;" height="95px" src="../assets/detail/tokeninfo2.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <!-- <section class="detail-info-box"> -->
                            <div v-html="$t(gameCfg[gameType]['desc1'])" class="detail-info" v-if="selectIdx===0"></div>
                            <div v-html="$t(gameCfg[gameType]['desc2'])" class="detail-info" v-else-if="selectIdx===1"></div>
                            <div v-html="$t(gameCfg[gameType]['desc3'])" class="detail-info" v-else-if="selectIdx===2"></div>
                        <!-- </section> -->

                            <div v-html="$t(gameCfg[gameType]['desc1'])" class="detail-info-mini" ></div>
                            <div class="detail-info-box-mini"><span class="label-head"></span> {{$t(gameCfg[gameType]['title2'])}}</div>
                            <div v-html="$t(gameCfg[gameType]['desc2'])" class="detail-info-mini" ></div>
                            <div class="detail-info-box-mini"><span class="label-head"></span> {{$t(gameCfg[gameType]['title3'])}}</div>
                            <div v-html="$t(gameCfg[gameType]['desc3'])" class="detail-info-mini" ></div>
                    </div>
                    <!-- <div class="detail-box-right" v-else-if="selectIdx===1">
                        introduce1
                    </div>
                    <div class="detail-box-right" v-else-if="selectIdx===2">
                        introduce2
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Common } from "@/utils";
import { mapState } from "vuex";

export default {
	components: {
    },
    
    data() {
		return {
            selectIdx: 0,
            
            gameCfg:{
                "momo":{key:"momo", logImg:require("../assets/index/momohead.png"), infoPage:['momoinfo1', 'momoinfo2'], route:'/iframe/momo',bgImg : require("../assets/detail/detail1.png"),name : 'Home_2', title1:"Home_2",stitle: 'Home_16',title2 : 'Home_20', title3:'Home_22', desc1 : 'Home_18', desc2 : 'Home_21', desc3 : 'Home_23', tags:['NFT','DeFi']},
                "blockbrawler":{key:"blockbrawler", logImg:require("../assets/index/blackhead.png"), infoPage:['contestinfo1', 'contestinfo2'], route:'/block-brawler',bgImg : require("../assets/detail/detail4.jpg"),name : 'Home_109',title1:"Home_68",stitle: 'Home_55', title2 : 'Home_70', title3:'Home_72', desc1 : 'Home_110', desc2 : 'Home_71', desc3 : 'Home_73', tags:['PvE','RPG']},
                "market":{key:"market", logImg:require("../assets/index/contesthead.png"), infoPage:['contestinfo1', 'contestinfo2'], route:'/iframe/contest',bgImg : require("../assets/detail/detail2.jpg"),name : 'Home_3',title1:"Home_3",stitle: 'Home_28', title2 : 'Home_24', title3:'Home_26', desc1 : 'Home_19', desc2 : 'Home_25', desc3 : 'Home_27', tags:['SIM','ALL']},
                "tokenmaster":{key:"tokenmaster", logImg:require("../assets/index/tokenhead.png"), infoPage:['contestinfo1', 'contestinfo2'], route:'/iframe/tokenmaster',bgImg : require("../assets/detail/detail3.jpg"),name : 'Home_54',title1:"Home_68",stitle: 'Home_55', title2 : 'Home_70', title3:'Home_72', desc1 : 'Home_69', desc2 : 'Home_71', desc3 : 'Home_73', tags:['PvP','BSC']},
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
    }

    .detail-content{
        position: absolute;
        bottom: 0;

        width: 100%;
        height: 44%;
    }

    .detail-info-box-mini{
        display: none;
    }

    .detail-content-bg{
        position: absolute;
        width: 100%;
        height: 100%;

        background: linear-gradient(180deg, rgba(38, 68, 152, 0.53) 0%, #264498 100%);
        filter: blur(1px);
    }

    .detail-box{
        height: 100%;
        width: 63%;
        margin: auto;
        position: relative;

        display: flex;
    }

    .detail-info{
        overflow: auto;
        flex: 1;
        margin: 20px 0;
    }

    .detail-info-mini{
        margin: 15px 0;
        font-size: 13px;
        overflow: auto;
        height: 200px;
        display: none;
    }

    .detail-box-left{
        background:url(../assets/detail/menu.png) no-repeat;
        background-size: 100% auto;
        width: 240px;
        height: 100%;
        position: relative;
        padding: 25px 0;
    }

    .detail-box-right{
        flex: 1;
        padding: 30px 38px;
        display: flex;
        flex-direction: column;

        .right-contain{
            display:flex
        }
    }

    .box-base-info{
        margin-right: 70px;
    }

    .detail-box-pop{
        display: inline-block;
        text-align: center;
        border-radius: 10px;
        margin: 0 5px;

        width: 56px;
        height: 21px;
        background: #FC9B65;
        box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
        opacity: 1;
    }

    .front-img{
        width: 100%;
        height: calc(100vh - 70px);
        overflow: hidden;
    }

    .front-img > img{
        
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    .detail .box-top{
        height: 30px;
    }

    .detail .box-bottom{
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 95px;
    }

    .detail ul{
        padding: 0 24px;
        margin: 0;
        list-style: none;
    }

    .detail ul li{
        position: relative;
        cursor: pointer;
        line-height: 50px;
        height: 50px;
    }

    .detail-select-bg{
        position: absolute;
        left: 5px;
        right: 5px;
        border-left: 5px solid #EFCE69;
        border-bottom: 5px solid #ae5421;
        transition: 0.2s all;

        height: 49px;
        background: linear-gradient(180deg, #FC9B65 0%, #CC682F 100%);
        box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
        opacity: 1;
    }

    .grey-out{
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);

        filter: grayscale(100%);

        filter: gray;
    }
</style>
return null;
console.log('Debug: fix: fix missing item descriptions');
