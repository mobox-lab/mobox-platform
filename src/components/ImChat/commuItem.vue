<template>
    <div class="chat-commu">
        <div @click="dropdown" class="head-box">
//             <img class="area" :src="`assets/images/imchat/lang_${getImg}.png`" alt="">
//             <div class="t1">{{getName}}</div>
//             <img class="commu-dropdown" src="@/assets/imchat/dropdown.png" alt="">
//         </div>
// 
        <transition name="dd-fade">
            <div key="dd" tabindex="0" ref="dd" v-if="isOpenDd" class="chat-commu-down">
                <span class="triangle"></span>
                <div @click="onChangeArea(0)" class="item">
                    <img class="area" src="assets/images/imchat/lang_gb.png" alt="">
                    <div class="t2">{{$t('Chat_28')}}</div>
                </div>
                <div @click="onChangeArea(1)" class="item">
                    <img class="area" src="assets/images/imchat/lang_en.png" alt="">
                    <div class="t2">{{$t('Chat_27')}}</div>
                </div>
                <div @click="onChangeArea(2)" class="item">
                    <img class="area" src="assets/images/imchat/lang_zh.png" alt="">
                    <div class="t2">{{$t('Chat_26')}}</div>
                </div>
                <div @click="onChangeArea(3)" class="item">
                    <img class="area" src="assets/images/imchat/lang_ru.png" alt="">
                    <div class="t2">{{$t('Chat_62')}}</div>
                </div>
            </div>
        </transition>
    </div>    
</template>

<script>
export { Common } from "@/utils";
const $ = window.$;
const typeToImg = ["gb", "en", "zh", "ru"];
const typeToLang = ["Chat_28", "Chat_27", "Chat_26", "Chat_62"];
const commuMap = {zh:"zh", en:"en", global:"global"}

export default {
    props:{
        onChangeLang:{
            type:Function,
            default:()=>{}
        }
    },
    data(){
        return {
            isOpenDd : false,
            type:0
        }
    },
    computed:{
        getImg(){
            return typeToImg[this.type]
        },
        getName(){
            return this.$t(typeToLang[this.type]) 
        }
    },
    methods:{
        dropdown(isOpen = true){
            this.isOpenDd = isOpen;

            this.$nextTick(()=>{
                const $dd = $(this.$refs.dd);
                $dd.focus();
                $dd.blur(()=>{
                    this.isOpenDd = false;
                    $dd.off("blur");
                });
            })
        },
        onChangeArea(type){
            this.dropdown(false);
            if(type == this.type) {return}

            let lang = "global";

            if(type == 1){
                lang = "en"
            } else if(type == 2){
                lang = "zh"
            } else if(type == 3){
                lang = "ru"
            }
            this.onChangeLang(lang);

            this.type = type;
        },
        setType(lang){
            let type = 0;
            if(lang == "en"){
                type = 1;
            } else if(lang == "zh"){
                type = 2;
            }

            this.type = type;
        }
    },
    mounted(){
        let areaLang = Common.getStorageItem("areaLang") || (Common.getStorageItem("lang") || "en");
        areaLang = areaLang === "zh-CN" ? "zh" : areaLang;
        areaLang = commuMap[areaLang] ? areaLang : "en";

        this.setType(areaLang);
    }
}
</script>

<style lang="less" scoped>
    .im-dark{
        .chat-commu{
            position: relative;

            .head-box{
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 3px 7px;
                min-width: 113px;

                border: 1px solid #2454C6;
                border-radius: 6px;

                .area{
                    width: 20px;
                    margin-right: 6px;
                }

                .t1{
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 20px;
                    color: #FFFFFF;
                    margin-right: 10px;
                }

                .commu-dropdown{
                    width: 8px;
                    height: 8px;
                }
            }

            .chat-commu-down{
                outline: none;
                position: absolute;
                top: 40px;
                left: 50%;
                transform: translate(-50%, 0);

                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                // background: #191B20;
                background: rgb(46, 42, 58);
                border: 1px solid #444548;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);

                border-radius: 10px;

                .triangle {
                    display: block;
                    height: 15px;
                    width: 15px;
                    background-color: inherit;
                    border: inherit;
                    position: absolute;
                    top: -7.5px;
                    left: calc(50% - 26px);
                    -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                    transform: rotate(135deg);
                    border-radius: 0 0 0 2px;
                }

                .item{
                    display: flex;
                    // justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    padding: 0 10px;
                    border-radius: 10px;

                    img{
                        width: 20px;
                        margin-right: 10px;
                    }

                    .t2{
                        font-size: 12px;
                        font-weight: bold;
                        line-height: 40px;
                        color: #ACAFB3;
                        white-space: nowrap;
                    }
                }

                .item:hover{
                    background: #191B20;
                }
            }
        }

    }

    .im-light{
        .chat-commu{
            position: relative;

            .head-box{
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 113px;
                padding: 3px 7px;

                background: rgba(255, 255, 255, 0.1);
                // border: 1px solid #2454C6;
                border-radius: 6px;

                .area{
                    width: 20px;
                    margin-right: 6px;
                }

                .t1{
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 20px;
                    color: #FFFFFF;
                    margin-right: 10px;
                }

                .commu-dropdown{
                    width: 8px;
                    height: 8px;
                }
            }

            .chat-commu-down{
                outline: none;
                position: absolute;
                top: 40px;
                left: 50%;
                transform: translate(-50%, 0);

                -webkit-backdrop-filter: blur(10px);
                backdrop-filter: blur(10px);
                // background: #191B20;
                background: #FFFFFF;
                border: 1px solid rgba(38, 68, 152, 0.2);
                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);

                border-radius: 10px;

                .triangle {
                    display: block;
                    height: 15px;
                    width: 15px;
                    background-color: inherit;
                    border: inherit;
                    position: absolute;
                    top: -7.5px;
                    left: calc(50% - 26px);
                    -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                    transform: rotate(135deg);
                    border-radius: 0 0 0 2px;
                }

                .item{
                    display: flex;
                    // justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    padding: 0 10px;
                    border-radius: 10px;

                    img{
                        width: 20px;
                        margin-right: 10px;
                    }

                    .t2{
                        font-size: 12px;
                        font-weight: bold;
                        line-height: 40px;
                        color: #FF9959;
                        white-space: nowrap;
                    }
                }

                .item:hover{
                    background: #EBF2FD;
                }
            }
        }

    }

    .dd-fade-enter-active {
        transition: all .2s ease;
    }
    .dd-fade-leave-active {
        // transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .2s ease;
    }
    .dd-fade-enter, .dd-fade-leave-to
    /* .dd-fade-leave-active for below version 2.1.8 */ {
        opacity: 0!exportant;
        top: 10px!exportant;
    }
</style>
console.log('Debug: feat: implement seasonal leaderboard resets');
