<template>
    <div class="chat-box">
        <div class="border-line"></div>
//         
//         <div class="head-box">
//             <img v-if="ifSys" width="40" src="assets/images/imchat/mobox.png" alt="">
//             <img v-else width="40" height="40" :src="getAvatar" alt="">

            <div v-if="!ifSys" class="lv">
                <div class="stroke">Lv{{getLv}}</div> 
                <div class="stroke outline">Lv{{getLv}}</div> 
            </div>
        </div>
        <div class="content-box">
            <div class="content-head">
                <div class="left">
                    <div v-if="ifSys" style="color: #618FFC;" class="chat-name">Mobox</div>
                    <div v-else class="chat-name">{{getName}}</div>

                    <img @click="toTitlePage" v-if="ifTitle&&!ifSys&&!ifManager" class="title" height="20" :src="getTitle" alt="">
                    <div v-if="ifSys" class="robot">ROBOT</div>
                    <div v-if="ifManager" class="robot">{{$t('Chat_57')}}</div>

                    <div v-if="ifShowMenu&&!ifSys" class="opearte-area">
                        <img @click="chatTap(0)" width="17" :src="`assets/images/imchat/${system == `im-light` ? `op1_light` : `op1_dark`}.png`" alt="">
                        <img @click="chatTap(1)" width="17" :src="`assets/images/imchat/${system == `im-light` ? `op2_light` : `op2_dark`}.png`" alt="">
                        <img @click="chatTap(2)" width="17" :src="`assets/images/imchat/${system == `im-light` ? `op3_light` : `op3_dark`}.png`" alt="">
                        <img @click="translate()" width="17" :src="`assets/images/imchat/${system == `im-light` ? `op4_light` : `op4_dark`}.png`" alt="">
                    </div>
                </div>
                <div class="ts">{{getTs}}</div>
            </div>
            
            <div v-if="data.isCom">
                <div @click="clickDetail($event,item)" @contextmenu.prevent="openSideMenu($event, item)" v-for="(item,idx) in data.data" :key="idx" :class="`text com-text ${ifSys ? `sys-text` : ``} ${idx > 0 ? `borderhead` : ``}`" v-html="getContent(item)"></div>
            </div>
            <div v-else>
                <div @click="clickDetail($event, data.data)" @contextmenu.prevent="openSideMenu($event, data.data)" :class="`text ${ifSys ? `sys-text` : ``}`" v-html="getContent(data.data)"></div>
            </div>

            <div v-if="data.isCom">
                <div @click="clickDetail($event, item)" v-for="(item,idx) in translateArr" :key="idx" :class="`text com-text ${ifSys ? `sys-text` : ``} borderhead`" v-html="getContent(item)"></div>
            </div>
            <div v-if="!data.isCom">
                <div v-if="translateMap[data.data.id]" class="text translate-item borderhead" v-html="getContent(getTranslate(data.data.id))"></div>
            </div>
        </div>

        <div v-if="ifSys" class="top-right">
            <img width="10" src="@/assets/imchat/ding.png" alt="">
        </div>

        <!-- <transition name=""> -->
        <div ref="menu" :tabindex="index" v-if="isOpenMenu" :class="`content-menu ${getClass}`">
            <div @click="oprMenu(0)" class="selector">
                <div class="imgBox">
                    <img :src="`assets/images/imchat/${system == `im-light` ? `up_light` : `up_dark`}.png`" alt="">
                </div>
                <div class="title">{{$t('Chat_41')}}</div>
            </div>
            <div @click="oprMenu(1)" class="selector">
                <div class="imgBox">
                    <img :src="`assets/images/imchat/${system == `im-light` ? `recall_light` : `recall_dark`}.png`" alt="">
                </div>
                <div class="title">{{$t('Chat_42')}}</div>
            </div>
            <div @click="oprMenu(2)" class="selector">
                <div class="imgBox">
                    <img :src="`assets/images/imchat/${system == `im-light` ? `recallall_light` : `recallall_dark`}.png`" alt="">
                </div>
                <div class="title">{{$t('Chat_43')}}</div>
            </div>
            <div class="selector">
                <div class="imgBox">
                    <img :src="`assets/images/imchat/${system == `im-light` ? `shutup_light` : `shutup_dark`}.png`" alt="">
                </div>
                <div class="title">{{$t('Chat_44')}}</div>

                <div class="side-menu">
                    <div class="contain">
                        <div @click="oprMenu(3)" class="select-text">{{$t('Chat_46')}}</div>
                        <div @click="oprMenu(4)" class="select-text">{{$t('Chat_59')}}</div>
                        <div @click="oprMenu(5)" class="select-text">{{$t('Chat_47')}}</div>
                        <div @click="oprMenu(6)" class="select-text">{{$t('Chat_48')}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- </transition> -->
    </div>
</template>

<script>
import { EMOJI_CODE, MOMOJI_CODE } from "@/utils/enums.js";
import { Common } from "@/utils";
import {API_TRANSLATE} from '@/utils/constant.js'
import request from "@/utils/request";
import redbg from "@/assets/imchat/redpocketbg.png";
import treasure from "@/assets/imchat/treasure.png";

const langMap = {
	"kr":"ko", "zh-CN":"zh-CN","zh-TW":"zh-CN", "en":"en", "zh":"zh-CN" , "fr":"fr", "po":"pt", "ru" : "ru"
}
const xssFilters = require("xss-filters");

const regex = /\[(.+?)\]/g; // 全局搜索表情
const regex2 = /\[(.+?)\]/; // 局部搜索表情

const regex3 = /\[\*(.+?)\\*]/g;
const regex4 = /\[_(.+?)_\]/g;

const regex5 = /\[@(.+?)@\]/g

const $ = window.$;
export default {
    props:{
        system:{
            type:String,
            default:"im-dark"
        },
        data:{
            type:Object,
            default:()=>{}
        },
        onClickMenu:{
            type:Function,
            default:()=>{}
        },
        onClickTap:{
            type:Function,
            default:()=>{}
        },
        index:{
            type:Number,
            default:0
        },
        currentChatIdx:{
            type:Number,
            default:0
        },
        myid:{
            type:Number,
            default:0
        },
        roomIdMap:{
            type:Object,
            default:()=>{}
        },
        isRole:{
            type:Number,
            default:0
        },
        onOprMenu:{
            type:Function,
            default:()=>{}
        },
        date:{
            type:Date,
            default:()=>{}
        }
    },
    data(){
        return {
            isOpenMenu:false,
            posIdx : 0 ,// 0是正常 1是顶部 2是底部

            selectContent:{},
            translateMap:{},
            t1:null
        }
    },
    methods:{
        toTitlePage(){
            const lang = Common.getStorageItem('lang');
            if(lang === "zh-CN"){
                window.open('https://faqcn.mobox.io/ecosystem/momo-chang-liao/hui-zhang-ti-xi')
            } else {
                window.open('https://faqen.mobox.io/ecosystem/momo-chat/badges')
            }
        },
        getLang(){
            let lang = Common.getStorageItem('lang');
            lang = langMap[lang] || 'en';

            return lang
        },
        getTranslate(id){
            return this.translateMap[id]
        },
        canTrans(str){
            const pic = str.match(regex3);
            if(!!pic && pic[0]){
                if(pic[0] === str) {
                    return false
                }
            }

            const gif = str.match(regex4);
            if(!!gif && gif[0]){
                return false
            }

            return true
        },
        async translate(){
            clearTimeout(this.t1);
            this.t1 = setTimeout(() => {
                if(this.data.isCom){
                    this.data.data.map((item)=>{
                        const str = item.m;
                        if(!this.canTrans(str)) {return}
    
                        this.requestTrans(item);
                    })
                } else {
                    const str = this.data.data.m;
                    if(!this.canTrans(str)) {return}
                    this.requestTrans(this.data.data);
                }
            }, 200);
        },
        async requestTrans(data){
            try{
                const replaceArr = data.m.match(regex) || [];
                let transMsg = data.m;

                replaceArr.map((item)=>{
                    transMsg = transMsg.replace(item, '[]');
                });

                const url = `${API_TRANSLATE}?text=${transMsg}&to=${this.getLang()}&tm=16333244568&id=${encodeURIComponent(`GSsWSch5muZQ6q4+NF5gZqZJhpM`)}`;
                const res = await request( url, {
                    method: 'GET',
                }, false);

                if(res.rv == 200){
                    replaceArr.map((item)=>{
                        res.dat = res.dat.replace('[]', item);
                    })

                    this.$set(this.translateMap, data.id, {...data, m:res.dat});
                    // this.translateMap[data.id] = res.dat;
                }
            }catch(error){
                console.log(error)
            }
        },  
        clickDetail(e, data){
            let str = data ? (data.m || '') : '';

            const pic = str.match(regex3);
            if(!!pic && pic[0]){
                if(pic[0] === str) {
                    const url = pic[0].replace('[*', '').replace('*]', '');
                    if(Common.validateImage(url)){
                        this.$parent.openFroceTop(data)
                    }
                }
            }

            if(e.target.id === "chat-red-claim"){
                this.$parent.openDownload();
            }
        },
        oprMenu(type){
            this.openMenu(false);
            this.onOprMenu(this.selectContent, type);
        },
        chatTap(type){
            this.onClickTap(type, this.data)
        },
        openSideMenu(e, data){
            // console.log(e)
            // console.log("heyhey")
            if(!this.isRole || this.isRole == 0) {
                // 不是管理员
                return
            }

            this.selectContent = data;

            const { clientY } = e;
            const wholeY = window.window.innerHeight;
            const dis = wholeY - clientY;

            if(dis < 200){
                this.posIdx = 2;
            } else if(dis > 630){
                this.posIdx = 1;
            } else {
                this.posIdx = 0;
            }

            // this.isOpenMenu = true;
            this.openMenu();
            this.onClickMenu(this.index);

            // this.$nextTick(()=>{
            //     // console.log($);
            //     const $menu = $(this.$refs.menu);
            //     $menu.focus();
            //     $menu.blur(()=>{
            //         this.isOpenMenu = false;
            //         $menu.off("blur");
            //     });
            // })
        },
        openMenu(isOpen = true){
            this.isOpenMenu = isOpen;
            // this.onClickMenu(this.index);

            this.$nextTick(()=>{
                // console.log($);
                const $menu = $(this.$refs.menu);
                $menu.focus();
                $menu.blur(()=>{
                    this.isOpenMenu = false;
                    $menu.off("blur");
                });
            })
        },
        atMan(){
            console.log("@@@@@@")
        },
        getContent(data){
            // let str = `fffff[momo_chick_car]aaaaa[smile]eee[smilecry]xinxi`;
            // let str = `[momo_chick_car]wearr`;

            let str = data ? (data.m || '') : '';
            str = xssFilters.inHTMLData(str);
            // console.log(str)

            const isRedPocket = data.p.split("|")[0] === "2021";
            if(isRedPocket){
                return `<div class="chat-redpocket">
                <img class="chat-bg" src="${redbg}">
                <img class="chat-left-line">
                <div class="chat-treasure">
                    <img class="" src=${treasure}>
                    <div class="chat-red-text">${this.$t('Airdrop_1')}</div>
                </div>
                <div id="chat-red-claim" class="chat-red-claim-btn btn-1">${this.$t('Airdrop_2')}</div>
                </div>`
            }

            // 渲染表情
            const emojiSingle = str.match(regex2);
            if(!!emojiSingle && emojiSingle[0] === emojiSingle.input){
                let key = emojiSingle[1];
                const emojiImg = EMOJI_CODE[key];
                const momojiImg = MOMOJI_CODE[key];
                
                if(emojiImg) {
                    str = `<img class="chat-single-emoji" src="assets/images/emoji/${emojiImg}.png">`;
                } else if(momojiImg){
                    str = `<img class="chat-single-momoji" src="assets/images/momoji/${momojiImg}.png">`;
                }
            } else {
                const emojiArr = str.match(regex) || [];
                emojiArr.map((item)=>{
                    let key = item.match(regex2)[1];
                    const emojiImg = EMOJI_CODE[key];
                    const momojiImg = MOMOJI_CODE[key];
    
                    if(emojiImg) {
                        str = str.replaceAll(`${item}`, `<img class="chat-emoji" src="assets/images/emoji/${emojiImg}.png">`)
                    } else if(momojiImg){
                        str = str.replaceAll(`${item}`, `<img class="chat-emoji" src="assets/images/momoji/${momojiImg}.png">`)
                    }
                })
            }

            // 渲染@人
            // console.log(data.a)
            if(data.a){
                if(data.a.length && typeof data.a == "object"){
                    const atArr = str.match(regex5);
                    (atArr || []).map((item)=>{
                        str = str.replaceAll(item, `<span style="color:#618FFC">@${item.slice(2, item.length - 2)} </span>`)
                    })

                    // (data.a || []).map((item)=>{
                    //     if(this.roomIdMap){
                    //         if(this.roomIdMap[item]){
                    //             str = str.replaceAll(`@${this.roomIdMap[item].nickName}`, `<span style="color:#618FFC">@${this.roomIdMap[item].nickName} </span>`)     
                    //         }
                    //     }
                    // })
                }
            }

            const pic = str.match(regex3);
            if(!!pic && pic[0]){
                if(pic[0] === str) {
                    const url = pic[0].replace('[*', '').replace('*]', '');
                    str = Common.validateImage(url) ? 
                    `<div class="chat-img"><div class="chat-border"><img src="${url}"></div></div>` 
                    :str
                }
            }

            const gif = str.match(regex4);
            if(!!gif && gif[0]){
                const id = gif[0].replace('[_', '').replace('_]', '');
                const idArr = id.split('/');

                if(idArr.length === 2){
                    if(Common.validMomoId(idArr[0]) && (idArr[1].indexOf('attack') != -1 || idArr[1].indexOf('hit') != -1 || idArr[1].indexOf('idle') != -1)) {
                        str = `<div class="chat-gif"><img src="https://www.mobox.io/img/gifs/${id}.gif"></div>`;
                    }
                }

                if(idArr.length === 1){
                    if(idArr[0].indexOf('stickers') != -1 && MOMOJI_CODE[idArr[0]]){
                        str = `<div class="chat-gif"><img src="https://www.mobox.io/img/gifs/${idArr[0]}.gif"></div>`;
                    }
                }
            }

            return str
        }
    },
    computed:{
        isChin(){
			return this.storeLang === "zh-CN"
		},
        translateArr(){
            if(this.data.isCom){
                let arr = [];
                this.data.data.map((item)=>{
                    if(this.translateMap[item.id]){
                        arr.push(this.translateMap[item.id])
                    }
                })

                return arr
            } else {
                return []
            }
        },
        ifTitle(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                return data.t && data.t!=0;
            } else {
                return false;
            }
        },
        ifSys(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                return data.r == 2;
            } else {
                return false;
            }
        },
        ifManager(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                return data.r == 1;
            } else {
                return false;
            }
        },
        getTitle(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                return data.t ? `https://www.mobox.io/img/badges/1380${data.t}.png` : ``;
            } else {
                return ``
            }
        },
        ifShowMenu(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                return Number(this.myid) !== Number(data.u);
            } else {
                return false
            }
        },
        getLv(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                return data.l || 0;
            } else {
                return ''
            }
        },
        getAvatar(){
            let {isCom, data} = this.data;

            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组
                
                if(this.ifSys){
                    return ''
                } else {
                    return Common.getAvatarSrc(data.h);
                }
            } else {
                return ''
            }
        },
        getTs(){
            let {isCom, data} = this.data;
            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组

                const date = new Date(data.s*1000);
                const chatYear = date.getFullYear();
                const chatMonth = date.getMonth();
                const chatDay = date.getDate();

                let nowYear = this.date.getFullYear();
                let nowMonth = this.date.getMonth();
                let nowDay = this.date.getDate();

                if(chatYear === nowYear && chatMonth === nowMonth && chatDay === nowDay){
                    return Common.dateFtt("hh:mm",date);
                } else {
                    return Common.dateFtt("yyyy-MM-dd",date);
                }

            } else {
                return '';
            }

        },
        getName(){
            let {isCom, data} = this.data;
            if(data){
                if(isCom) {data = data[0]} // 如果是合并情况 取第一个数组
                const {n, u} = data;

                if(n){
                    return Common.getCutStr(n, 10)
                } else if(u){
                    return Common.getCutStr(u, 10)
                } else {
                    return ''
                }

            } else {
                return ''
            }

        },
        getClass(){
            if(this.posIdx === 0){
                return ``
            } else if(this.posIdx === 1){
                return `content-menu-top`
            } else if(this.posIdx === 2){
                return `content-menu-bottom`
            } else {
                return ``
            }
        },
    },
    mounted(){
        
    }
}
</script>

<style lang="less" scoped>
    .im-dark{
        .chat-box:hover{
            background: #202226;
            
            .opearte-area{
                opacity: 1!important;
            }
        }

        .chat-box{
            transition: 0.3s all;
            cursor: pointer;
            position: relative;
            padding: 14px 40px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            white-space: break-spaces;
            
            .top-right{
                position: absolute;
                right: 0;
                top: 0;
                width: 0;
                height: 0;
                border-top: 40px solid rgba(27,79,245, 0.3);
                border-left: 40px solid transparent; 

                img{
                    position: absolute;
                    right: 6px;
                    top: -32px;
                }
            }

            .head-box{
                background: rgba(0, 0, 0, 0);
                // border: 1px solid #444548;
                border-radius: 6px;
                position: relative;

                .lv{
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0);
                    bottom: 5px;
                    zoom: 0.8;

                    .stroke{
                        font-size: 8px;
                        font-weight: 600;
                        line-height: 11px;
                        // color: #A6A6A6;
                        color: #5C9719;
                        -webkit-text-stroke:2px rgb(68, 69, 72);
                    }

                    .outline{
                        bottom: 0;
                        left: 0;
                        position: absolute;
                        color: #5C9719;
                        -webkit-text-stroke:0px!important;
                    }
                }
            }

            .content-box{
                flex: 1;
                padding: 0 10px;

                .content-head{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;

                    .left{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #A6A6A6;
                        font-weight: 600;

                        .chat-name{
                            font-size: 13px;
                            font-weight: 600;
                            line-height: 17px;
                            color: #5C9719;
                        }
                        
                        .robot{
                            margin: 0 10px;
                            font-size: 12px;
                            padding: 2px 10px;
                            background: #618FFC;
                            border-radius: 6px;
                            color: #FFF;
                        }

                        .title{
                            margin: 0 7px;
                        }

                        .opearte-area{
                            transition: 0.3s all;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            opacity: 0;
                            margin-left: 10px;

                            img{
                                margin: 0 4px;
                            }
                        }
                    }

                    .ts{
                        font-size: 12px;
                        color: #747474;
                    }
                }

                .text{
                    font-weight: bold;
                    width: 100%;
                    // word-break: break-all;
                    word-break: normal;

                    font-size: 12px;
                    line-height: 20px;
                    color: #ACAFB3;

                    /deep/ .chat-redpocket{
                        width: 300px;
                        max-width: 100%;

                        height: 80px;
                        background: rgba(192,206,252, 0.16);
                        overflow: hidden;

                        position: relative;

                        .chat-bg{
                            position: absolute;
                            height: 100%;
                            top: 0;
                            left: 0;
                        }

                        .chat-left-line{
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 6px;
                            height: 100%;
                            background: linear-gradient(224deg, #64D9EB 0%, #022CFF 100%);
                            box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
                        }

                        .chat-treasure{
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            position: absolute;
                            top: 50%;
                            transform: translate(0, -50%);
                            left: 20px;

                            img{
                                width: 60px;
                                margin-right: 16px;
                            }

                            .chat-red-text{
                                font-size: 14px;
                                font-weight: 800;
                                line-height: 20px;
                                color: #618FFC;
                                width: 80px;
                            }
                        }

                        .chat-red-claim-btn{
                            position: absolute;
                            right: 13px;
                            top: 50%;
                            transform: translate(0, -50%);
                            padding: 5px 10px;
                        }
                    }

                    /deep/ .chat-single-emoji{
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }

                    /deep/ .chat-single-momoji{
                        width: 60px;
                        min-height: 60px;
                        vertical-align: middle;
                    }

                    /deep/ .chat-emoji{
                        width: 30px;
                        vertical-align: middle;
                    }

                    /deep/ .chat-img{
                        position: relative;
                        width: 187px;
                        height: 120px;
                        vertical-align: middle;

                        .chat-border{
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(0 , -50%);
                            padding: 10px;
                            background: #202226;;

                            img{
                                // position: absolute;
                                // left: 0;
                                // top: 50%;
    
                                max-width: 167px;
                                max-height: 100px;
                                // transform: translate(0 , -50%);
                            }
                        }

                    }

                    /deep/ .chat-gif{
                        position: relative;
                        width: 120px;
                        height: 120px;
                        vertical-align: middle;

                        img{
                            position: absolute;
                            left: 50%;
                            top: 50%;

                            max-height: 120px;
                            max-width: 120px;
                            transform: translate(-50% , -50%);
                        }
                    }
                }

                .sys-text{
                    color: #D26133!important;
                }

                .com-text{
                    padding: 10px 0;
                }

                .borderhead{
                    border-top: 2px solid rgba(46,49,52, 0.7)
                }
            }
            
            .side-menu{
                // top: 50%;
                // left: 50%;
                position: absolute;
                bottom: 0;
                display: none;
                padding: 0 10px;

                transform: translate(131px, 0);
                
                .contain{
                    // position: absolute;
                    width: 70px;
                    // height: 161px;
                    background: #191B20;
                    border: 1px solid #444548;
                    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                    opacity: 1;
                    border-radius: 10px;
                    bottom: 0;
    
                    outline: none;
                    overflow: hidden;

                    .select-text{
                        text-align: center;
                        font-size: 14px;
                        padding: 10px 0 10px 0;
                        color: #ACAFB3;
                        font-weight: bold;
                    }

                    .select-text:hover{
                        background: #111111;
                    }
                }
            }

            .content-menu{
                top: 50%;
                left: 50%;
                position: absolute;
                width: 133px;
                // height: 161px;
                background: #191B20;
                border: 1px solid #444548;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                opacity: 1;
                border-radius: 10px;
                transform: translate(-50%, -50%);

                outline: none;
                // overflow: hidden;

                .selector{
                    border-radius: 10px;

                    *{
                        vertical-align: middle;
                    }
                    
                    .imgBox{
                        display: inline-block;
                        width : 30px;
                        height: 30px;
                        position: relative;

                        img{
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            max-width: 20px;
                            max-height: 20px;
                        }
                    }

                    .title{
                        display: inline-block;
                        font-size: 14px;
                        padding: 10px 0 10px 0;
                        color: #ACAFB3;
                        font-weight: bold;
                    }
                }

                .selector:hover{
                    background: #111111;

                    .side-menu{
                        display: block;
                    }
                }
            }

            .content-menu-bottom{
                top: auto;
                bottom: 10px;
                transform: translate(-50%, 0);
            }

            .content-menu-top{
                top: 10px;
                transform: translate(-50%, 0);
            }

            .border-line{
                position: absolute;
                top: 0;
                left: 40px;
                right: 40px;

                width: 100%;
                height: 1px;
                background: #2E3134;
            }
        }
    }

    .im-light{
        .chat-box:hover{
            background: #FFFFFF;
            
            .opearte-area{
                opacity: 1!important;
            }
        }

        .chat-box{
            transition: 0.3s all;
            cursor: pointer;
            position: relative;
            padding: 14px 40px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            white-space: break-spaces;

            .top-right{
                position: absolute;
                right: 0;
                top: 0;
                width: 0;
                height: 0;
                border-top: 40px solid rgba(192,206,252, 0.3);
                border-left: 40px solid transparent; 

                img{
                    position: absolute;
                    right: 6px;
                    top: -32px;
                }
            }
            
            .head-box{
                // background: rgba(0, 0, 0, 0);
                // border: 1px solid #444548;
                border-radius: 6px;
                position: relative;

                .lv{
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0);
                    bottom: 5px;
                    zoom: 0.8;

                    .stroke{
                        font-size: 8px;
                        font-weight: 600;
                        line-height: 11px;
                        color: #A6A6A6;
                        // color: #5C9719;
                        -webkit-text-stroke:2px #FFF;
                    }

                    .outline{
                        bottom: 0;
                        left: 0;
                        position: absolute;
                        color: #5C9719;
                        -webkit-text-stroke:0px!important;
                    }
                }
            }

            .content-box{
                flex: 1;
                padding: 0 10px;

                .content-head{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;

                    .left{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #A6A6A6;
                        font-weight: 600;

                        .chat-name{
                            font-size: 13px;
                            font-weight: 600;
                            line-height: 17px;
                            color: #5C9719;
                        }

                        .robot{
                            margin: 0 10px;
                            font-size: 12px;
                            padding: 2px 10px;
                            background: #618FFC;
                            border-radius: 6px;
                            color: #FFF;
                        }

                        .title{
                            margin: 0 7px;
                        }

                        .opearte-area{
                            transition: 0.3s all;
                            display: flex;
                            margin-left: 10px;
                            justify-content: center;
                            align-items: center;
                            opacity: 0;

                            img{
                                margin: 0 4px;
                            }
                        }
                    }

                    .ts{
                        font-size: 12px;
                        color: #838383;
                    }
                }

                .text{
                    font-weight: bold;
                    width: 100%;
                    // word-break: break-all;
                    word-break: normal;

                    font-size: 12px;
                    line-height: 20px;
                    color: #343434;

                    /deep/ .chat-redpocket{
                        width: 300px;
                        max-width: 100%;

                        height: 80px;
                        background: rgba(192,206,252, 0.16);
                        overflow: hidden;

                        position: relative;

                        .chat-bg{
                            position: absolute;
                            height: 100%;
                            top: 0;
                            left: 0;
                        }

                        .chat-left-line{
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 6px;
                            height: 100%;
                            background: linear-gradient(224deg, #64D9EB 0%, #022CFF 100%);
                            box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
                        }

                        .chat-treasure{
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            position: absolute;
                            top: 50%;
                            transform: translate(0, -50%);
                            left: 20px;

                            img{
                                width: 60px;
                                margin-right: 16px;
                            }

                            .chat-red-text{
                                font-size: 14px;
                                font-weight: 800;
                                line-height: 20px;
                                color: #618FFC;
                                width: 80px;
                            }
                        }

                        .chat-red-claim-btn{
                            position: absolute;
                            right: 13px;
                            top: 50%;
                            transform: translate(0, -50%);
                            padding: 5px 10px;
                        }
                    }

                    /deep/ .chat-single-emoji{
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }

                    /deep/ .chat-single-momoji{
                        width: 60px;
                        vertical-align: middle;
                    }

                    /deep/ .chat-emoji{
                        width: 30px;
                        vertical-align: middle;
                    }

                    /deep/ .chat-img{
                        position: relative;
                        width: 187px;
                        height: 120px;
                        vertical-align: middle;

                        .chat-border{
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(0 , -50%);
                            padding: 10px;
                            background: #FDFDFE;

                            img{
                                // position: absolute;
                                // left: 0;
                                // top: 50%;
    
                                max-width: 167px;
                                max-height: 100px;
                                // transform: translate(0 , -50%);
                            }
                        }

                    }

                    /deep/ .chat-gif{
                        position: relative;
                        width: 120px;
                        height: 120px;
                        vertical-align: middle;

                        img{
                            position: absolute;
                            left: 50%;
                            top: 50%;

                            max-height: 120px;
                            max-width: 120px;
                            transform: translate(-50% , -50%);
                        }
                    }
                }

                .sys-text{
                    color: #D26133!important;
                }

                .com-text{
                    padding: 10px 0;
                }

                .borderhead{
                    border-top: 2px solid rgba(239,240,250, 0.7)
                }
            }
            
            .side-menu{
                // top: 50%;
                // left: 50%;
                position: absolute;
                bottom: 0;
                display: none;
                padding: 0 10px;

                transform: translate(131px, 0);
                
                .contain{
                    // position: absolute;
                    width: 70px;
                    // height: 161px;
                    background: #FFFFFF;
                    border: 1px solid rgba(38, 68, 152, 0.3);
                    box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                    opacity: 1;
                    border-radius: 10px;
                    bottom: 0;
    
                    outline: none;
                    overflow: hidden;

                    .select-text{
                        text-align: center;
                        font-size: 14px;
                        padding: 10px 0 10px 0;
                        color: #343434;
                        font-weight: bold;
                    }

                    .select-text:hover{
                        background: #EBF2FD;
                    }
                }
            }

            .content-menu{
                top: 50%;
                left: 50%;
                position: absolute;
                width: 133px;
                // height: 161px;
                
                background: #FFFFFF;
                border: 1px solid rgba(38, 68, 152, 0.3);
                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                opacity: 1;
                border-radius: 10px;
                transform: translate(-50%, -50%);

                outline: none;
                // overflow: hidden;

                .selector{
                    border-radius: 10px;

                    *{
                        vertical-align: middle;
                    }
                    
                    .imgBox{
                        display: inline-block;
                        width : 30px;
                        height: 30px;
                        position: relative;

                        img{
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            max-width: 20px;
                            max-height: 20px;
                        }
                    }

                    .title{
                        display: inline-block;
                        font-size: 14px;
                        padding: 10px 0 10px 0;
                        color: #343434;
                        font-weight: bold;
                    }
                }

                .selector:hover{
                    background: #EBF2FD;

                    .side-menu{
                        display: block;
                    }
                }
            }

            .content-menu-bottom{
                top: auto;
                bottom: 10px;
                transform: translate(-50%, 0);
            }

            .content-menu-top{
                top: 10px;
                transform: translate(-50%, 0);
            }

            .border-line{
                position: absolute;
                top: 0;
                left: 40px;
                right: 40px;

                width: 100%;
                height: 2px;
                background: #EFF0FA;;
            }
        }
    }

    .translate-item{
        margin-top: 10px;
        padding-top: 10px;
    }
</style>
return null;
