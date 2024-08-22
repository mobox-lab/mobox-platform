<template>
	<div>
		<Header v-if="canShowHead" />
		<LandHeader v-if="false" />
		<Notification />
		<!-- 游戏 -->
		<game-stack />
		<!-- 提示弹窗 -->
		<tip v-if="isShowTip" @close="closeTip" />
		<!-- 钱包登录 -->
		<wallet-login v-if="isShowWalletLogin" @close="isShowWalletLogin = false" />
		<!-- 钱包侧边栏 -->
		<wallet-sidebar />
		<!-- 交易 -->
		<transaction />
		<!-- 路由 -->
		<router-view />
		<!-- 弹窗 -->
		<!-- <dialog-banner /> -->
	</div>
</template>

<script>
import { Notification } from "@/components";
import Header from "@/components/Header/index.vue";
import LandHeader from "@/components/LandHeader/index.vue";
import GameStack from '@/components/game-stack.vue';
import Tip from '@/components/Tip.vue';
import WalletLogin from "@/components/wallet-login.vue";
import WalletSidebar from "@/components/wallet-sidebar/index.vue";
import Transaction from "@/components/transaction/index.vue";
// import DialogBanner from "@/components/dialog-banner.vue";

import { Common } from "@/utils";
import request from '@/utils/request';
import { API_SMS_MOBILE_CODE, API_SMS_LOCAL_MOBILE_CODE } from '@/utils/constant';

const langMap = {
	"ko":"kr", "zh-CN":"zh-CN","zh-TW":"zh-CN", "en":"en", "zh":"zh-CN", "kr":"kr" , "fr":"fr", "po":"po" , "ru" : "ru"
}

export default {
	components: {
		Notification,
		Header,
		LandHeader,
		GameStack,
		WalletLogin,
		WalletSidebar,
		Transaction,
		Tip,
	},
	data() {
		return {
			isShowWalletLogin: false,
			isShowTip: false,
		};
	},
	computed:{
		canShowHead(){
			const path = (this.$route.path).toLowerCase();
			return !(['/cmcairdrop', '/alliance', '/world-cup', '/valentines','/coinbase', '/bitget-event'].includes(path));
		},
	},
	created() {
		let lang = 'en';
		let storageLang = Common.getUrlParams('lang') || 'en'
		
		if(storageLang){
			lang = langMap[storageLang] || 'en'
		}else{
			lang = navigator.language||navigator.userLanguage;
			lang = langMap[lang] || 'en';
		}
		Common.setStorageItem("lang", lang)

		// let lang = Common.getStorageItem("lang") || "en";
		// this.defaultSelectLangPos = this.langNameToPos.indexOf(lang);
		this.$i18n.locale = lang;

		this.getAreas();
		this.getLocalArea();
	},
	mounted() {
		const tipTime = window.localStorage.getItem('tip-time');

		if (this.$i18n.locale.indexOf('zh') === 0 && (!tipTime || Date.now() >= tipTime)) {
			this.isShowTip = true;
			window.localStorage.setItem('tip-time', Date.now() + (7 * 24 * 60 * 60 * 1000));
		}

		// 邀请注册默认显示钱包登录
		const route = this.$route;

		if (route.path === '/cmcairdrop' && route.query.source && !window.localStorage.getItem('token')) {
			this.isShowWalletLogin = true;
		}
	},
	methods: {
		// 关闭提示
		closeTip() {
			this.isShowTip = false;
		}, 
		async getAreas(){
			// 获取区号 
			const res = await request(API_SMS_MOBILE_CODE, {
				method: 'POST'
			});
			let areas = [];
			Object.values(res.data).map((item)=>{
				if(item.code!=86) {
                    areas.push({
                        name:item.contry,
                        value:item.code
                    })
                }
			})

			this.$store.commit('globalState/setAreas', areas);
		},
		async getLocalArea(){
			// 获取区号 
			const res = await request(API_SMS_LOCAL_MOBILE_CODE, {
				method: 'POST'
			});
			let data = res.data.code == 86 ?  {data : {
                contry: "Singapore",
                code : 65
            }} : res;

			// let areas = [];
			// Object.values(res.data).map((item)=>{
			// 	areas.push({
			// 		name:item.contry,
			// 		value:item.code
			// 	})
			// })

			this.$store.commit('globalState/setLocalArea', {
				name: data.data.contry,
				value: data.data.code
			});
		},
	},
};
</script>

<style lang="less">
	@import './main.less';
	@import './layout.less';
</style>

