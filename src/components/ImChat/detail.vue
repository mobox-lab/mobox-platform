<template>
    <div class="detail">
        <!-- this is detail!! -->
        <div class="detail-box">
//             <div class="detail-info">
//                 <div class="top">
//                     <div v-if="ifSys" style="color: #618FFC;" class="title">Mobox</div>
//                     <div v-else class="title">{{getName}}</div>
//                     <div class="time">{{getTs}}</div>
                </div>
                <div :class="`content ${ifSys ? `sys-text` : ``}`" v-html="getContent(this.msg)">
                </div>
            </div>
            <div @click="close" class="btn-back">{{$t("Register_13")}}</div>
        </div>
    </div>
</template>

<script>
import { EMOJI_CODE, MOMOJI_CODE } from "@/utils/enums.js";
import { Common } from "@/utils";
const xssFilters = require("xss-filters");

const regex = /\[(.+?)\]/g; // 全局搜索表情
const regex2 = /\[(.+?)\]/; // 局部搜索表情

const regex3 = /\[\*(.+?)\\*]/g;
const regex4 = /\[_(.+?)_\]/g;

export default {
    props:{
        msg:{
            type:Object,
            default:()=>{}
        }
    },
    computed:{
        ifSys(){
            let {r} = this.msg;

            if(r){
                return r == 2;
            } else {
                return false;
            }
        },
        getName(){
            const {n,u} = this.msg;
            
            if(n||u){
                return Common.getCutStr(n || u, 10)
            } else {
                return ''
            }
        },
        getTs(){
            const {s} = this.msg;
            
            if(s){
                return Common.dateFtt("yyyy-MM-dd hh:mm",new Date(s*1000));
            } else {
                return ''
            }
        }
    },
    methods:{
        close(){
            this.$parent.openDetail(false);
        },
        getContent(data){
            // let str = `fffff[momo_chick_car]aaaaa[smile]eee[smilecry]xinxi`;
            // let str = `[momo_chick_car]wearr`;

            let str = data ? (data.m || '') : '';
            str = xssFilters.inHTMLData(str);
            // console.log(str)

            // 渲染表情
            const emojiSingle = str.match(regex2);
            if(!!emojiSingle && emojiSingle[0] === emojiSingle.input){
                let key = emojiSingle[1];
                const emojiImg = EMOJI_CODE[key];
                const momojiImg = MOMOJI_CODE[key];
                
                if(emojiImg) {
                    str = `<img class="detail-single-emoji" src="assets/images/emoji/${emojiImg}.png">`;
                } else if(momojiImg){
                    str = `<img class="detail-single-momoji" src="assets/images/momoji/${momojiImg}.png">`;
                }
            } else {
                const emojiArr = str.match(regex) || [];
                emojiArr.map((item)=>{
                    let key = item.match(regex2)[1];
                    const emojiImg = EMOJI_CODE[key];
                    const momojiImg = MOMOJI_CODE[key];
    
                    if(emojiImg) {
                        str = str.replaceAll(`${item}`, `<img class="detail-emoji" src="assets/images/emoji/${emojiImg}.png">`)
                    } else if(momojiImg){
                        str = str.replaceAll(`${item}`, `<img class="detail-emoji" src="assets/images/momoji/${momojiImg}.png">`)
                    }
                })
            }

            // 渲染@人
            (data.a || []).map((item)=>{
                if(this.roomIdMap){
                    if(this.roomIdMap[item]){
                        str = str.replaceAll(`@${this.roomIdMap[item].nickName}`, `<span style="color:#618FFC">@${this.roomIdMap[item].nickName} </span>`)     
                    }
                }
            })

            const pic = str.match(regex3);
            if(!!pic && pic[0]){
                if(pic[0] === str) {
                    const url = pic[0].replace('[*', '').replace('*]', '');
                    str = Common.validateImage(url) ? 
                    `<div class="detail-img"><img src="${url}"></div>` 
                    :str
                }
            }

            const gif = str.match(regex4);
            if(!!gif && gif[0]){
                const id = gif[0].replace('[_', '').replace('_]', '');
                const idArr = id.split('/');

                if(idArr.length === 2){
                    if(Common.validMomoId(idArr[0]) && (idArr[1].indexOf('attack') != -1 || idArr[1].indexOf('hit') != -1 || idArr[1].indexOf('idle') != -1)) {
                        str = `<div class="detail-gif"><img src="https://www.mobox.io/img/gifs/${id}.gif"></div>`;
                    }
                }

                if(idArr.length === 1){
                    if(idArr[0].indexOf('stickers') != -1 && MOMOJI_CODE[idArr[0]]){
                        str = `<div class="detail-gif"><img src="https://www.mobox.io/img/gifs/${idArr[0]}.gif"></div>`;
                    }
                }
            }

            return str
        }
    }
}
</script>

<style lang="less" scoped>
    .im-dark{
        .detail{
            // position: relative;
            z-index: 101;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);

            position: absolute;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            .detail-box{
                background: #191B20;
                border: 1px solid #444548;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                border-radius: 10px;
                padding: 10px;
                width: 80%;
                height: 80%;

                display: flex;
                flex-direction: column;

                .detail-info{
                    white-space: break-spaces;
                    overflow: auto;
                    background: rgba(25,27,32,0.7);
                    border: 1px solid #444548;
                    border-radius: 10px;
                    padding: 18px;
                    flex: 1;

                    display: flex;
                    flex-direction: column;

                    .top{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 10px;

                        .title{
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 17px;
                            color: #5C9719;
                            opacity: 1;
                        }

                        .time{
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 17px;
                            color: #747474;
                            opacity: 1;
                        }
                    }

                    .content{
                        flex: 1;
                        overflow: auto;
                        position: relative;

                        /deep/ .detail-single-emoji{
                            width: 45px;
                            vertical-align: middle;
                        }

                        /deep/ .detail-single-momoji{
                            width: 60px;
                            vertical-align: middle;
                        }

                        /deep/ .detail-emoji{
                            width: 30px;
                            vertical-align: middle;
                        }

                        /deep/ .detail-img{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 100%;
                            height: 100%;
                            text-align: center;

                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img{
                                max-width: 100%;
                                max-height: 100%;
                            }
                        }

                        /deep/ .detail-gif{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);

                            img{
                                width: 200px;
                                max-height: 80%;
                                max-width: 80%;
                            }
                        }
                    }

                    .sys-text{
                        color: #D26133!important;
                    }
                }

                .btn-back{
                    background: #0E0F12;
                    border: 1px solid #213D7D;
                    border-radius: 13px;
                    padding: 6px 0;
                    cursor: pointer;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15px;
                }
            }
        }
    }

    .im-light{
        .detail{
            // position: relative;
            z-index: 101;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);

            position: absolute;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            .detail-box{
                background: #191B20;
                background: #FFF;
                border: 1px solid rgba(38, 68, 152, 0.3);
                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);

                border-radius: 10px;
                padding: 10px;
                width: 80%;
                height: 80%;

                display: flex;
                flex-direction: column;

                .detail-info{
                    white-space: break-spaces;
                    overflow: auto;
                    background: #F4F5FA;
                    border: 1px solid #CAD1E6;
                    border-radius: 10px;
                    padding: 18px;
                    flex: 1;

                    display: flex;
                    flex-direction: column;

                    .top{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 10px;

                        .title{
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 17px;
                            color: #5C9719;
                            opacity: 1;
                        }

                        .time{
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 17px;
                            color: #838383;
                            opacity: 1;
                        }
                    }

                    .content{
                        flex: 1;
                        overflow: auto;
                        position: relative;
                        color: #343434;

                        /deep/ .detail-single-emoji{
                            width: 45px;
                            vertical-align: middle;
                        }

                        /deep/ .detail-single-momoji{
                            width: 60px;
                            vertical-align: middle;
                        }

                        /deep/ .detail-emoji{
                            width: 30px;
                            vertical-align: middle;
                        }

                        /deep/ .detail-img{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 100%;
                            height: 100%;
                            text-align: center;

                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img{
                                max-width: 100%;
                                max-height: 100%;
                            }
                        }

                        /deep/ .detail-gif{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);

                            img{
                                width: 200px;
                                max-height: 80%;
                                max-width: 80%;
                            }
                        }
                    }

                    .sys-text{
                        color: #D26133!important;
                    }
                }

                .btn-back{
                    // background: #0E0F12;
                    // border: 1px solid #213D7D;
                    background: #FC9B65;
                    box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                    border-radius: 13px;
                    padding: 6px 0;
                    cursor: pointer;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15px;
                }
            }
        }
    }
</style>
return null;
console.log('Debug: fix: resolve sound playback inconsistency');
