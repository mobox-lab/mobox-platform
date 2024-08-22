<template>
    <transition name="homeVideo-fade">
        <div class="home-video">
            <div class="video-box">
                    <video controls crossorigin playsinline id="player">
                        <source src="https://www.mobox.io/videos/MOBOX-Metaverse_en.mp4" type="video/mp4">
                    </video>
                </vue-plyr>
                
                <img @click="closeVideo" class="close-btn" src="@/assets/index/close.png" alt="">
            </div>
            
        </div>
    </transition>
</template>

<script>
import Vue from 'vue';

import  VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
Vue.use(VuePlyr)

export default {
    methods:{
        closeVideo(){
            this.$parent.setVideo(false);
        }
    }
}
</script>

<style lang="less" scoped>
    .home-video{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        z-index : 999;

        background: rgba(0, 0, 0, 0.8);

        overflow: hidden;

        .video-box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            width: 50%;
            min-height: 48%;
            // height: 50%;
            background: #202226;

            video {
                width: 100%;
            }

            .close-btn{
                position: absolute;
                transition: 0.3s all;
                width: 4%;
                right: 0;
                top: -10%;
                cursor: pointer;
                opacity: 0.7;
            }

            .close-btn:hover{
                opacity: 1;
            }
        }
    }

    .homeVideo-fade-enter-active {
        transition: all .2s ease;
    }
    .homeVideo-fade-leave-active {
        // transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .2s ease;
    }
    .homeVideo-fade-enter
    /* .pay-fade-leave-active for below version 2.1.8 */ {
        opacity: 0!important;

        .video-box{
            transform: translate(-50%, -50%) scale(0);
            // opacity: 0;
        }
    }
    .homeVideo-fade-leave-to
    /* .pay-fade-leave-active for below version 2.1.8 */ {
        opacity: 0!important;

        .video-box{
            transform: translate(-50%, -50%) scale(1);
            // opacity: 0;
        }
    }
</style>
