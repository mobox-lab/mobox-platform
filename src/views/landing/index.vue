<template>
    <div id="main" class="page-contain">
        <img class="bg3" src="@/assets/landing/bg3.jpg" alt="">
        <div id="scene1" ref="scene1" class="page-1">
        <!-- <div id="scene1" class="hide"> -->
            <img class="bg1" src="@/assets/landing/bg1.jpg">
            
            <div class="page-content">
                    <div class="page-head-title" v-html="$t('Landing_85').replace('#0#', `<span class='special' style='color:rgb(195,238,61);'>1000</span>`)"></div>
                    <div>
                        <img class="page-haed-img" width="348" src="@/assets/landing/elements/momobox.webp" alt="">
                    </div>
                    <!-- <div i18n-locale="Landing_16" class="page-slogan">{{$t('Landing_16')}}</div> -->

                    <div class="bnb-address vertical-children">
                        <img width="24" src="@/assets/landing/elements/bnb.png" alt="">
                        <div class="split-line"></div>
                        <!-- <input v-model="bscAddress" class="input-box" :placeholder="$t('Landing_86')"> -->
                        <!-- <div class="event-tip input-box">{{$t('Landing_144')}}</div> -->
                        <div class="event-tip input-box">{{getBindWallet}}</div>
                    </div>

                    <div @click="showClaimBox(true)" i18n-locale="Landing_17" style="margin: 10px auto;" id="click-play" class="btn-landing-1 btn-play">{{$t('Landing_87')}}</div>
                    <!-- <div i18n-locale="Landing_18" style="margin: 10px auto;" id="click-about" class="btn-2">{{$t('Landing_18')}}</div> -->
                    <div @click="toHome" i18n-locale="Landing_18" style="margin: 10px auto;" id="click-about" class="btn-3">{{$t('Landing_88')}}</div>

                    <!-- 显示领取箱子界面 -->
                    <!-- v-show="channelName" -->
                    <!-- <div class="claim-box vertical-children">
                        <div class="cont-num">
                            <div class="title">{{$t('Landing_68')}}</div>
                            <div class="Odometer2 OdometerBg"></div>
                        </div>
                        <div class="claim-btn"><div @click="clickClaim()" class="btn-landing-1">{{$t('Landing_69')}}</div></div>
                    </div> -->
                    <!-- <div class="channel-box"><img id="channel-img" :src="getChannelImg" alt=""></div> -->
                </div>
                <!-- page-1动态元素 -->
                <img width="112" class="coin-1 coin" src="@/assets/landing/elements/mboxcoin.webp" alt="">
                <img @click="openTele()" width="80" class="page-tele" src="@/assets/landing/elements/tele.webp" alt="">

                <!-- <img width="80" class="next-page" src="@/assets/landing/elements/nextpage.png" alt=""> -->
            </div>

            <div class="cover"></div>
        </div>

        <!-- 在此处加入图三图四图五的背景 -->

        <!-- <div id="scene2" class="page-2-in"> -->
        <div id="scene2" class="hide">
            <div class="cover"></div>
            <div class="contain">
                <div class="video-box">
                    <video id="cash-video" muted>
                        <source src="@/assets/landing/video/cashes.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="bg1-5">
                    <img class="bg" src="@/assets/landing/bg1-5.jpg">
                    <div class="cash-box">
                        <img class="cash-left" src="@/assets/landing/elements/cashes.png">
                        <img class="cash-right" src="@/assets/landing/elements/cashes.png">
                    </div>
                </div>
                <div style="position: absolute;width: 100%;height: 100%;top:0;left:0;">
                    <div class="middle">
                        <div class="title">{{$t('Landing_70')}}</div>

                        <div class="content">
                            <div class="money-box">
                                <div class="primary-text">{{$t('Landing_71')}}</div>
                                <div id="company-money" class="money-text">$0</div>
                                <div class="primary-text">{{$t('Landing_72')}}</div>
                            </div>
                            
                            <div class="bean-box vertical-children">
                                <div class="bean-man"><img id="bean-man-1" src="" alt=""></div>
                                <div class="bean-coin" id="bean-coin-1"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-2"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-3"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-4"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-5"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-6"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-7"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                <div class="bean-coin" id="bean-coin-8"><img src="@/assets/landing/elements/beancoin.png" alt=""></div>
                                
                                <!-- <img id="bean-coin-2" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt="">
                                <img id="bean-coin-3" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt="">
                                <img id="bean-coin-4" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt="">
                                <img id="bean-coin-5" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt="">
                                <img id="bean-coin-6" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt="">
                                <img id="bean-coin-7" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt="">
                                <img id="bean-coin-8" class="bean-coin" src="@/assets/landing/elements/beancoin.png" alt=""> -->
                            </div>
    
                            <div class="money-box">
                                <div class="primary-text">{{$t('Landing_73')}}</div>
                                <div id="player-money" class="money-text">$8700000000</div>
                                <div class="primary-text">{{$t('Landing_74')}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <!-- <div id="scene2" class="page-4-in"> -->
        <div id="scene3" class="hide">
            <!-- <div class="cover"></div> -->
            <div class="contain">
                <img class="bg2" src="@/assets/landing/bg2.jpg">
                <div style="position: absolute;width: 100%;height: 100%;top:0;left:0;">

                    <div class="middle">
                        <div i18n-locale="Landing_01" class="title">{{$t('Landing_01')}}</div>
                        <div i18n-locale="Landing_02" class="content">{{$t('Landing_02')}}</div>
                    </div>

                    <div class="treasure-contain">
                        <div id="treasure-box" class="box"></div>
                        <!-- <img class="box" width="330" src="@/assets/landing/elements/openbox.webp" alt=""> -->
    
                        <div class="bird1"><img width="260" src="@/assets/landing/elements/bird1.webp"></div>
                        <div class="bird2"><img width="260" src="@/assets/landing/elements/bird2.webp"></div>
                        <div class="bird3"><img width="150" src="@/assets/landing/elements/bird3.webp"></div>
                        <div class="bird4"><img width="260" src="@/assets/landing/elements/bird4.webp"></div>
                        <div class="bird5"><img width="260" src="@/assets/landing/elements/bird5.webp"></div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div id="scene4" class="hide">
        <!-- <div id="scene3" class="page-5-in"> -->
            <img class="bg3" src="@/assets/landing/bg3.jpg">
            <div style="position: absolute;width: 100%;height: 100%;top:0;left:0;">
                <div class="middle">
                    <div i18n-locale="Landing_03" class="title">{{$t('Landing_03')}}</div>
                    <div i18n-locale="Landing_04" class="content">{{$t('Landing_04')}}</div>
                </div>

                <div class="farm-factory" style="position: relative;margin-top: 70px;">
                    <div class="line-box pc-state">
                        <div class="shu">
                            <div class="line" style="transform: translate(38px, 28px) rotate(180deg);width: 50px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(38px, -35px);width: 50px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                        <div class="heng" style="transform: translate(-150px, 40px);">
                            <div class="line" style="transform: translate(0, -38px) rotate(180deg);"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(0, 40px);"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                        <div class="heng" style="transform: translate(150px, 40px);">
                            <div class="line" style="transform: translate(0, -38px);"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(0, 40px) rotate(180deg);"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                    </div>

                    <div class="line-box mobile-state">
                        <div class="shu" style="transform:translate(0, -62px) rotate(90deg);">
                            <div class="line" style="transform: translate(38px, 28px) rotate(180deg);width: 50px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(38px, -35px);width: 50px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                        <div class="heng" style="transform: translate(-95px, 40px);">
                            <div class="line" style="transform: translate(0, -15px) rotate(180deg);width: 70px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                        <div class="heng" style="transform: translate(95px, 40px);">
                            <div class="line" style="transform: translate(0, -15px);width: 70px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                        <div class="shu shu-collect">
                            <div class="line" style="transform: translate(108px, 158px);width: 140px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(166px, 55px) rotate(180deg);width: 70px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(166px, -55px) rotate(180deg);width: 70px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                            <div class="line" style="transform: translate(108px, -158px);width: 140px;"><img style="transform: rotate(90deg);" class="arrow" src="@/assets/landing/elements/arrow.webp" alt=""></div>
                        </div>
                    </div>

                    <div style="position: relative;">
                        <div class="farm-box">
                            <div class="farm-top">
                                <div>USER</div>
                                <div>0%</div>
                            </div>
                        </div>
                        <div class="farm-box pc-state">
                            <div class="farm-left">
                                <img width="80" src="@/assets/landing/elements/venus.webp" alt="">
                                <div>VENUS</div>
                            </div>
                            <div class="farm-bsc-inline">
                                <img width="80" src="@/assets/landing/elements/bsc.webp" alt="">
                            </div>
                            <img class="farm-mbox" width="150" src="@/assets/landing/elements/mbox.webp" alt="">
                            <div class="farm-bsc-inline">
                                <img width="80" src="@/assets/landing/elements/bsc.webp" alt="">
                            </div>
                            <div class="farm-right">
                                <img width="80" src="@/assets/landing/elements/pancake.webp" alt="">
                                <div>PANCAKE</div>
                            </div>
                        </div>

                        <div class="farm-box mobile-state">
                            <div class="farm-bsc-inline">
                                <img width="80" src="@/assets/landing/elements/bsc.webp" alt="">
                            </div>
                            <img class="farm-mbox" width="150" src="@/assets/landing/elements/mbox.webp" alt="">
                            <div class="farm-bsc-inline">
                                <img width="80" src="@/assets/landing/elements/bsc.webp" alt="">
                            </div>
                        </div>
                        <div class="farm-box mobile-state">
                            <div class="farm-left">
                                <img width="80" src="@/assets/landing/elements/venus.webp" alt="">
                                <div>VENUS</div>
                            </div>
                            <div class="farm-right">
                                <img width="80" src="@/assets/landing/elements/pancake.webp" alt="">
                                <div>PANCAKE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="scene5" class="hide">
        <!-- <div id="scene5" class="page-5-in"> -->
            <img class="bg4" src="@/assets/landing/bg4.jpg">
            <div style="position: absolute;width: 100%;height: 100%;top:0;left:0;">
                <div class="middle">
                    <div i18n-locale="Landing_05" class="title">{{$t('Landing_05')}}</div>
                    <div i18n-locale="Landing_06" style="text-align:center" class="content">{{$t('Landing_06')}}</div>

                    <div class="heroscreen">

                        <div id="hero-spine" class="herobox"></div>

                        <div class="detailbox">
                            <div class="heroarr">
                                <img class="hero1" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_1.png`" alt="">
                                <img class="hero2" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_2.png`" alt="">
                                <img class="hero3" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_3.png`" alt="">
                                <img class="hero4" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_4.png`" alt="">
                            </div>
                            <div class="detailnamebox">
                                <img width="30" src="@/assets/landing/elements/fire.webp" alt="">
                                <div class="detailname vertical-children">
                                    <!-- {{getName}} -->
                                    <div class="name">{{getName.normalName}}</div>
                                    <div>▶</div>
                                    <div class="name">{{getName.upgradeName}}</div>
                                </div>
                            </div>
                            <div i18n-locale="Landing_67" class="detailinfo">{{getDescribe}}</div>
                        </div>
                    </div>

                    <img class="splitline" src="@/assets/landing/elements/splitline.webp" alt="">

                    <div class="scrollarea vertical-children">
                        <img id="heroscrollback" class="arrow" style="display: inline-block;" src="@/assets/landing/elements/scollpage1.webp" alt="">
                        <div id="heroscroll" class="heroscroll">
                            <div id="herocategory" class="herocategory">
                                <img @click="selectMomo(item)" v-for="(item, idx) in momoArr" :key="idx" :class="`${selectMomoId === item.id ? `momo-active` : ``}`" :momoid="item.id" :src="`./assets/images/heroes/momo_${item.id}/momo_${item.id}_4.png`" alt="">
                                <!-- <img src="@/assets/landing/hero/hero3.webp" alt=""> -->
                            </div>
                        </div>
                        <img id="heroscrollforward" class="arrow" style="display: inline-block;" src="@/assets/landing/elements/scollpage2.webp" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- <div id="scene6" class="page-6-in"> -->
        <div id="scene6" class="hide">
            <div class="contain">
                <img class="bg1-5" src="@/assets/landing/bg1-5.jpg">
                <div style="position: absolute;width: 100%;height: 100%;top:0;left:0;">

                    <div class="middle">
                        <div class="title">{{$t('Landing_75')}}</div>
                    </div>

                    <div class="playbox">

                        <div class="arrowline-box pc-state">
                            <img class="line1" src="@/assets/landing/elements/arrowline1.png" alt="">
                            <img class="line2" src="@/assets/landing/elements/arrowline2.png" alt="">
                        </div>

                        <div class="arrowline-box mobile-state">
                            <img class="sline1" src="@/assets/landing/elements/sarrowline1.png" alt="">
                            <img class="sline2" src="@/assets/landing/elements/sarrowline2.png" alt="">
                            <img class="sline3" src="@/assets/landing/elements/sarrowline1.png" alt="">
                            <img class="sline4" src="@/assets/landing/elements/sarrowline2.png" alt="">
                        </div>

                        <div class="player-mbox"><img width="150" src="@/assets/landing/elements/mbox.webp" alt=""></div>
                        
                        <div class="player-box">
                            <div class="player-item">
                                <div class="player-info"><div>{{$t('Landing_77')}}</div></div>
                                <div class="player-text">{{$t('Landing_76')}}</div>
                            </div>
                            <div class="player-item">
                                <div class="player-info"><div>{{$t('Landing_79')}}</div></div>
                                <div class="player-text">{{$t('Landing_78')}}</div>
                            </div>
                            <div class="player-item">
                                <div class="player-info"><div>{{$t('Landing_81')}}</div></div>
                                <div class="player-text">{{$t('Landing_80')}}</div>
                            </div>
                            <div class="player-item">
                                <div class="player-info"><div>{{$t('Landing_83')}}</div></div>
                                <div class="player-text">{{$t('Landing_82')}}</div>
                            </div>
                        </div>
                        
                        <div style="color:#94BBFF" class="player-platform player-text">{{$t('Landing_84')}}</div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div id="scene7" class="hide">
        <!-- <div id="scene5" class="page-5-in"> -->
            <img class="bg4" src="@/assets/landing/bg4.jpg">
            <div style="position: absolute;width: 100%;height: 100%;top:0;left:0;">
                <div class="middle">
                    <div i18n-locale="Landing_07" class="title">OTHERS</div>

                    <div id="scene5info">
                        <div class="infobox info1">
                            <div class="infoboxhead"><div i18n-locale="Landing_08">{{$t('Landing_08')}}</div> <img src="@/assets/landing/elements/fliparrow.webp" alt=""> </div>
                            <div i18n-locale="Landing_09" class="infoboxcontent">{{$t('Landing_09')}}</div>
                        </div>
                        <div class="infobox info2">
                            <div class="infoboxhead"><div i18n-locale="Landing_10">{{$t('Landing_10')}}</div> <img src="@/assets/landing/elements/fliparrow.webp" alt=""> </div>
                            <div i18n-locale="Landing_11" class="infoboxcontent">{{$t('Landing_11')}}</div>
                        </div>
                        <div class="infobox info3">
                            <div  class="infoboxhead"><div i18n-locale="Landing_12">{{$t('Landing_12')}}</div> <img src="@/assets/landing/elements/fliparrow.webp" alt=""> </div>
                            <div i18n-locale="Landing_13" class="infoboxcontent">{{$t('Landing_13')}}</div>
                        </div>
                        <div class="infobox info4">
                            <div  class="infoboxhead"><div i18n-locale="Landing_14">{{$t('Landing_14')}}</div> <img src="@/assets/landing/elements/fliparrow.webp" alt=""> </div>
                            <div i18n-locale="Landing_15" class="infoboxcontent">{{$t('Landing_15')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="next-page">
            <img width="50" src="@/assets/landing/elements/nextpage.png" alt="">
        </div>
    </div>
</template>

<script>
    export { mapState } from "vuex";
    export 'animate.css'
    export './language.js'
    export './index.js'
    export './Odometer.js'
    export { Common } from "@/utils";
    export { CommonMethod } from "@/mixin";
    export {momoCfgs} from './config.js';
    export request from "@/utils/request";
    export {API_AIRDROP_INFO} from '@/utils/constant';

    const channelMap = {
        tokenpocket:{imgSrc:'./assets/images/channels/tokenpocket.png'}, 
        mathwallet:{imgSrc:'./assets/images/channels/mathwallet.png'},
        dappradar:{imgSrc:'./assets/images/channels/dappradar.png'}, 
        handy:{imgSrc:'./assets/images/channels/handy.png'}
    }

    export default {
        mixins: [CommonMethod],
        data(){
            return {
                boxSpine:null,
                selectMomoId:0,
                
                channelName:false,
                bscAddress:''
            }
        },
        mounted(){
            this.selectMomoId = this.momoArr[0].id;
            this.setHeroSpine();

            // this.setRemainBoxes();
            // this.initChannel();

            // 装载完所有节点后再清空window方法
            window.initLanding();
        },
        computed:{
            ...mapState({
                userInfo: (state) => state.userState.userInfo,
            }),
            app: () => this.$root.$children[0],
            getBindWallet(){
                const {wallets, mail, mobile} = this.userInfo;

                if(mail && mobile && wallets && wallets[0]){
                    return wallets[0]
                } else {
                    return this.$t("Landing_146")
                }
            },

            getDescribe(){
                if(momoCfgs[this.selectMomoId]) {
                    return this.$t(momoCfgs[this.selectMomoId].describe)
                } else{
                    return ''
                }
            },
            getChannelImg(){
                if(channelMap[this.channelName]){
                    return channelMap[this.channelName].imgSrc
                } else {
                    return ''
                }
            },
            getName(){
                if(momoCfgs[this.selectMomoId]){
                    const normalName = momoCfgs[this.selectMomoId].normalName;
                    const upgradeName = momoCfgs[this.selectMomoId].upgradeName;
    
                    return {
                        normalName : this.$t(normalName),
                        upgradeName : this.$t(upgradeName)
                    }
                } else {
                    return {
                        normalName:'',
                        upgradeName:''
                    }
                }
                // return ''

            },
            momoArr(){
                let arr = Object.values(momoCfgs);
                arr.sort((a,b)=>{return a.index - b.index})

                return arr
            }
        },
        methods : {
            async checkIfAirDrop(){
                try{
                    const data = {address:this.bscAddress}
                    const res = await request(API_AIRDROP_INFO, {
                        method: 'POST',
                        data
                    });

                    return {link:res.data.url, shareMan:res.data.cnt || 0}
                }catch{
                    return false
                }
            },
            async showClaimBox(){

                // alert('event over')
                // this.showNotify(this.$t('Landing_144'), 'error');
                // console.log(this.userInfo)

                // const {user_id, mail, mobile, wallets} = this.userInfo;
                // if(user_id) {
                //     // 有账号  
                //     if(mail && mobile && wallets.length > 0) {
                //         // 直接领奖
                //     } else {
                //         // 跳转注册界面
                //         this.$root.eventHub.$emit('claim-box');
                //     }
                // } else {
                //     // 没有账号
                //     this.$root.eventHub.$emit('claim-box');
                // }

                this.$root.eventHub.$emit('claim-box');

                // if(!Common.isValidETHValidAddress(this.bscAddress)){
                //     return
                // }

                // const data = await this.checkIfAirDrop();
                // if(!data){
                //     this.$root.eventHub.$emit('claim-box' , data, this.bscAddress, );
                // } else {
                //     this.$root.eventHub.$emit('claim-box' , data.link, this.bscAddress, data.shareMan);
                // }
            },
            toHome(){
                // this.$router.push('/');
                // 另开一个网页
                window.open(window.location.origin)
            },
            openTele(){
                window.open('https://t.me/mobox_io');
            },
            initChannel(){
                const channelName = Common.getUrlParams('channel');
                if(channelMap[channelName]){
                    this.channelName = channelName;
                    console.log(channelName)
                    // $('#channel-img').attr('src', channelMap[channelName].imgSrc)
                }
            },
            setRemainBoxes(){
                var num = 1846;
                var odo1 = new window.Odometer('.Odometer2',{
                    num : num,
                    speed:0,
                    delay:1000
                });

                // setTimeout(() => {
                //     odo1.update(5347, 2000)
                // }, 2000);

                console.log(odo1)
            },
            selectMomo(item){
                this.selectMomoId = item.id;
                this.setHeroSpine();
            },
            clickClaim(){
                this.$root.eventHub.$emit('landing-claimbox',true)
            },
            setHeroSpine(){
                new window.spine.SpineWidget("hero-spine", {
                    json: `./assets/images/herospine/momo_${this.selectMomoId}/momo_${this.selectMomoId}.json`,
                    atlas: `./assets/images/herospine/momo_${this.selectMomoId}/momo_${this.selectMomoId}.atlas`,
                    backgroundColor: "#00000000",
                    animation: "animation",
                    fitToCanvas: false,
                    loop: true,
                    scale: 0.3,
                    x: 95,
                    y: 80
                });
                // console.log(spineData)
            }
            
        }
    }
</script>

<style src="./style.less" lang="less" scoped />
<style src="./media.less" lang="less" scoped />console.log('Debug: fix: fix broken animation frames in combat');
console.log('Debug: feat: enhance cross-platform compatibility');
