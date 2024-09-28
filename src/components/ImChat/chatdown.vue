// <template>
// //     <div class="detail">
// //         <!-- this is detail!! -->
// //         <div @click="close" class="down-mask"></div>
// //         <div class="detail-box">
//             <div class="detail-info">
                <img class="down-bg" src="@/assets/index/download.png" alt="">
                <div class="down-t1">{{$t('Airdrop_3')}}</div>
                <div class="down-t2">{{$t('Airdrop_4')}}</div>
                <!-- <div class="top">
                    
                </div> -->
            </div>
            <div @click="downIOS" class="down-ios">
                <img class="logo" src="@/assets/index/ios.png" alt="">
                <!-- <div class="text">{{$t('Home_32')}}</div> -->
                <div class="text">
                    <div style="font-size: 14px;font-weight:100">Download the</div>
                    <div>IOS APP</div>
                </div>
            </div>
            <div @click="downAndorid" class="down-andorid">
                <img class="logo" src="@/assets/index/andorid.png" alt="">
                <div class="text">
                    <div style="font-size: 14px;font-weight: 100;">Download the</div>
                    <div>Android APP</div>
                </div>
            </div>
            <!-- <div @click="close" class="btn-back">{{$t("Register_13")}}</div> -->
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
        close(){
            this.$parent.openDownload(false);
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
            }

            return str
        }
    }
}
</script>

<style lang="less" scoped>
    .detail{
        .down-mask{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }

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
                position: relative;
                background: #191B20;
                border: 1px solid #444548;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);

                border-radius: 10px;
                padding: 10px;
                width: 60%;
                // height: 80%;

                display: flex;
                flex-direction: column;

                .detail-info{
                    white-space: break-spaces;
                    // overflow: auto;
                    background: rgba(25,27,32,0.7);
                    border: 1px solid #444548;
                    border-radius: 10px;
                    padding: 18px;

                    align-items: center;
                    justify-content: center;
                    // flex: 1;

                    display: flex;
                    flex-direction: column;

                    .down-bg{
                        width: 220px;
                        margin-top: -70px;
                    }
                    
                    .down-t1{
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 24px;
                        color: #FF9959;
                        opacity: 0.7;
                    }

                    .down-t2{
                        text-align: center;
                        width: 120px;
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 20px;
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
                
                .down-ios{
                    cursor: pointer;
                    width: 80%;
                    margin: 10px auto 5px auto;

                    background: #213D7D;
                    border: 1px solid #303338;
                    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
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

                .down-andorid{
                    cursor: pointer;
                    width: 80%;
                    margin: 5px auto 10px auto;

                    border: 1px solid #303338;
                    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                    opacity: 1;
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

            // .detail-box{
            //     position: relative;
            //     background: #191B20;
            //     border: 1px solid #444548;
            //     box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
            //     border-radius: 10px;
            //     padding: 10px;
            //     width: 80%;
            //     height: 80%;

            //     display: flex;
            //     flex-direction: column;

            //     .detail-info{
            //         white-space: break-spaces;
            //         overflow: auto;
            //         background: rgba(25,27,32,0.7);
            //         border: 1px solid #444548;
            //         border-radius: 10px;
            //         padding: 18px;
            //         flex: 1;

            //         display: flex;
            //         flex-direction: column;

            //         .top{
            //             display: flex;
            //             justify-content: space-between;
            //             align-items: center;
            //             margin-bottom: 10px;

            //             .title{
            //                 font-size: 14px;
            //                 font-weight: 600;
            //                 line-height: 17px;
            //                 color: #5C9719;
            //                 opacity: 1;
            //             }

            //             .time{
            //                 font-size: 14px;
            //                 font-weight: 500;
            //                 line-height: 17px;
            //                 color: #747474;
            //                 opacity: 1;
            //             }
            //         }

            //         .content{
            //             flex: 1;
            //             overflow: auto;
            //             position: relative;

            //             /deep/ .detail-single-emoji{
            //                 width: 45px;
            //                 vertical-align: middle;
            //             }

            //             /deep/ .detail-single-momoji{
            //                 width: 60px;
            //                 vertical-align: middle;
            //             }

            //             /deep/ .detail-emoji{
            //                 width: 30px;
            //                 vertical-align: middle;
            //             }

            //             /deep/ .detail-img{
            //                 position: absolute;
            //                 top: 50%;
            //                 left: 50%;
            //                 transform: translate(-50%,-50%);
            //                 width: 100%;
            //                 height: 100%;
            //                 text-align: center;

            //                 display: flex;
            //                 justify-content: center;
            //                 align-items: center;

            //                 img{
            //                     max-width: 100%;
            //                     max-height: 100%;
            //                 }
            //             }

            //             /deep/ .detail-gif{
            //                 position: absolute;
            //                 top: 50%;
            //                 left: 50%;
            //                 transform: translate(-50%,-50%);

            //                 img{
            //                     width: 200px;
            //                     max-height: 80%;
            //                     max-width: 80%;
            //                 }
            //             }
            //         }

            //         .sys-text{
            //             color: #FF9E61!important;
            //         }
            //     }

            //     .btn-back{
            //         background: #0E0F12;
            //         border: 1px solid #213D7D;
            //         border-radius: 13px;
            //         padding: 6px 0;
            //         cursor: pointer;

            //         display: flex;
            //         justify-content: center;
            //         align-items: center;
            //         margin-top: 15px;
            //     }
            // }
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
                position: relative;
                background: #FFF;
                border: 1px solid rgba(38, 68, 152, 0.3);
                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);

                border-radius: 10px;
                padding: 10px;
                width: 60%;
                // height: 80%;

                display: flex;
                flex-direction: column;

                .detail-info{
                    white-space: break-spaces;
                    // overflow: auto;
                    background: #F4F5FA;
                    // border: 1px solid #CAD1E6;
                    border-radius: 10px;
                    padding: 18px;

                    align-items: center;
                    justify-content: center;
                    // flex: 1;

                    display: flex;
                    flex-direction: column;

                    .down-bg{
                        width: 220px;
                        margin-top: -70px;
                    }
                    
                    .down-t1{
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 24px;
                        color: #FF9959;
                        opacity: 0.7;
                    }

                    .down-t2{
                        text-align: center;
                        width: 120px;
                        font-size: 12px;
                        font-weight: 500;
                        line-height: 20px;
                        color: #343434;
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
                
                .down-ios{
                    cursor: pointer;
                    width: 80%;
                    margin: 10px auto 5px auto;

                    background: #303338;
                    border: 1px solid #303338;
                    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
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

                .down-andorid{
                    cursor: pointer;
                    width: 80%;
                    margin: 5px auto 10px auto;

                    border: 1px solid #303338;
                    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                    opacity: 1;
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
                        color: #303338;
                        opacity: 1;
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
