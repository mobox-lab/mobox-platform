<template>
	<div  class="ani-bg" >
        <div id="app" >
            <div id="spine" style="z-index: index 1;">
            </div>
                <div id="openBtn"  @click="openDoor()"></div>
                <div id="infoBtn"  @click="avatarInfo()"></div>
        </div>
        
        
    
        <Dialog v-model="isShowAvatarInfo">
            <AvatarInfo v-bind:isSendBindRequest="isShowAvatarInfo" />
        </Dialog>
    </div>
</template>

<script>
import { mapState } from "vuex";
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
import Dialog from '@/components/Dialog';
import { Wallet } from '@/utils';

import AvatarInfo from './AvatarInfo/index';

// import request from "@/utils/request";
// import { Dropdown } from "@/components";
// import FormLayout from '@/components/Header/FormLayout';

// import {API_ACHIEVE_CFG, API_ACHIEVE_REWARD_CFG, API_CLAIM_BALANCE_LOGS} from '@/utils/constant';

export default {
	components: {
        Dialog,
		AvatarInfo,
        // Dropdown,
        // FormLayout
	},
    
    data(){
        return {
            app : null,
			isShowAvatarInfo:false,
        }
    },

	created(){
        Wallet.ETH.init()
	},

    mounted() {
        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
        });
       document.querySelector("#spine").appendChild(this.app.view);
       let self = this
        this.app.loader
        .add("spine", "./spine/avatar/momo-world37.json")
        .load(function (loader, resources) {
            const spine = new Spine(resources.spine.spineData);
            spine.width = window.innerHeight * 1.775956;
            spine.height = window.innerHeight;
            spine.position.set(window.innerWidth / 2, window.innerHeight / 2);
            self.app.stage.addChild(spine);
            spine.state.addAnimation(0, "idle", true);
            spine.state.addAnimation(1, "men", true);
            spine.state.addAnimation(2, "heiban", true);
            self.app.start();
        });

        window.addEventListener('resize', this.computeWindow);
        
	},

	destroyed(){
        window.removeEventListener('resize', this.computeWindow);
    },

    computed: {
		...mapState({
			userInfo: (state) => state.userState.userInfo,
			currencyInfo: (state) => state.globalState.data.currencyInfo,
        }),
	},
    
    methods:{
        openDoor(){
            console.log("openDoor")
        },
        avatarInfo(){
            const {user_id} = this.userInfo;
            console.log(JSON.stringify(this.userInfo))
			if(user_id){
				this.isShowAvatarInfo = true;
			} else {
                window.parent.postMessage({
                    from: "mbox",
                    action:"needLogin",
                    value:"value",
                }, '*');
			}
        },
        // 计算窗口
        computeWindow() {
            this.app.view.style.width = window.innerWidth + "px";
            this.app.view.style.height = window.innerHeight + "px";
            const spine = this.app.stage.children[0];
            spine.width = window.innerHeight * 1.775956;
            spine.height = window.innerHeight;
            spine.position.set(window.innerWidth / 2, window.innerHeight / 2);
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
            document.querySelector("#app").style.width = window.innerWidth + "px";
            document.querySelector("#app").style.height = window.innerHeight + "px";
        }
    },
}
</script>


<style lang="less" scoped>
.ani-bg{
  position: absolute;
        width: 100%;
        height: 100%;
    }
#openBtn {
  position: absolute;
  top: 47%;
  left: 27%;
  right: 100;
  bottom: 0;
  width:200px;
  height:80px;
//   background: black;
    z-index: index 2;
}
#infoBtn {
  position: absolute;
  top: 60%;
  left: 20%;
  width:15%;
  height:25%;
  z-index: index 2;
//   background: black;
}
</style>
return null;
