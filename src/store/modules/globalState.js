// import request from "@/utils/request";
// import i18n from "@/i18n";
// // import {API_CURRENCYPRICE, API_GET_DEPOSIT_ADDR, API_PAYMENT_WITHDRAW_CFG, API_STATIC_MOBOX_INFOS, MARKE_VALUE} from '@/utils/constant';
// // import { Common } from "@/utils";
// 
// 金额格式化
function formatMoney(money, digit) {
	var tpMoney = "0.00";
	if (undefined != money) {
		tpMoney = money;
	}
	tpMoney = new Number(tpMoney);
	if (isNaN(tpMoney)) {
		return "0.00";
	}
	tpMoney = tpMoney.toFixed(digit) + "";
	var re = /^(-?\d+)(\d{3})(\.?\d*)/;
	while (re.test(tpMoney)) {
		tpMoney = tpMoney.replace(re, "$1,$2$3");
	}

	return tpMoney;
}

const state = () => ({
	data: {
		selectChain: "trx",
		addressArr: ["ETH: 未连接", "TRX: 未连接", "BNB: 未连接"],
		notifications: [],
		myPetPage: 1,
		detailGame:"momo",
		areas:[],
		localArea:{
			name:"Singapore",
			value: '65',
		},
		
		currencyInfo:{
			currencyMap:{},
			selectedCurrency:'USD'
		},
		chargeAddrs:{},
		paymentCfg:{},
		poolInfo:{
			moboxSupply:0
		},

		lang: 'en'
	},
	marketCap: '$0',
	// 钱包侧边栏显示状态
	isShowWallet: false,
	// 侧边菜单显示状态
	isShowSidebar: true,
	// 游戏列表
	games: [
		// {
		// 	icon: require('@/assets/home/games/dragonverse.png'),
		// 	symbol: 'dragonverse',
		// 	name: 'Dragonverse',
		// 	describe: 'Unleash The Dragons',
		// 	type: 'mobox'
		// },
		{
			icon: require('@/assets/home/games/modragon.png'),
			symbol: 'dragonmo',
			name: 'MODragon',
			describe: 'Unleash The Dragons',
			type: 'mobox'
		},
		{
			icon: require('@/assets/home/games/momoverse.png'),
			symbol: 'momoverse',
			name: 'MOMOverse',
			describe: 'Collect, Combine, Build',
			type: 'mobox'
		},
		// {
		// 	icon: require('@/assets/home/games/clash-of-moland.png'),
		// 	symbol: 'clash-moland',
		// 	name: 'Clash of MOland',
		// 	describe: 'Home_118',
		// 	type: 'party'
		// },
		{
			icon: require('@/assets/home/games/chaincarena.png'),
			symbol: 'chainzarena',
			name: 'Home_114',
			describe: 'Home_115',
			type: 'mobox'
		},
		// {
		// 	icon: require('@/assets/home/games/moland-defense.png'),
		// 	symbol: 'mobox_tower_defense',
		// 	name: 'Home_116',
		// 	describe: 'Home_117',
		// 	type: 'party'
		// },
		{
			icon: require('@/assets/home/games/block-brawler.png'),
			symbol: 'block-brawler',
			name:  'Home_109',
			describe: 'Home_57',
			type: 'mobox'
		},
		{
			icon: require('@/assets/home/games/token-master.png'),
			symbol: 'tokenmaster',
			name: 'Home_67',
			describe: 'Home_75',
			type: 'mobox'
		},
	],
})

const chainPos = {
	"ETH": 0,
	"TRX": 1,
	"BNB": 2,
}

const mutations = {
	// 修改多语言
	setLang(state, lang) {
		state.data.lang = lang;
	},
	//修改全局选中的链
	setPaymentCfg(state, paymentCfg) {
		state.data.paymentCfg = paymentCfg;
	},
	changeSelectChain(state, chainName) {
		state.data.selectChain = chainName;
	},
	setChainAddr(state, {
		type,
		addr
	}) {
		let defaultArr = [...state.data.addressArr];
		defaultArr[chainPos[type]] = type + ": " + addr;
		state.data.addressArr = defaultArr;
	},
	removeNotify(state) {
		let notifications = [...state.data.notifications];
		notifications.shift();
		state.data.notifications = notifications;
	},
	addNotify(state, notify) {
		notify.hash = new Date().valueOf();
		let notifications = [...state.data.notifications];
		notifications.push(notify);
		state.data.notifications = notifications;
	},
	setMyPetPage(state, page) {
		state.data.myPetPage = page;
	},
	setGameDetail(state, gameDetail){
		state.data.detailGame = gameDetail;
	},
	setAreas(state, areas){
		state.data.areas = areas;
	},
	setLocalArea(state, localArea){
		state.data.localArea = localArea;
	},
	setCurrency(state, currency){
		state.data.currencyInfo = {
			...state.data.currencyInfo,
			...currency
		}
	},
	setChargeAddr(state, chargeAddrs){
		state.data.chargeAddrs = chargeAddrs
	},
	setPoolInfo(state, poolInfo){
		state.data.poolInfo = poolInfo
	},
	// 设置市值
	setMarketCap(state, value) {
		state.marketCap = '$' + formatMoney(value, 0);
	},
	// 切换显示钱包
	toggleShowWallet(state) {
		state.isShowWallet = !state.isShowWallet;
	},
	// 切换侧边菜单显示状态
	toggleShowSidebar(state, value) {
		state.isShowSidebar = value;
	}
};

const actions = {
	async getPoolInfo(context){
		try {
			const res = await request(API_STATIC_MOBOX_INFOS, {
				method: 'GET',
			});

			context.commit('setPoolInfo', res);
		} catch(_) {
			// context.commit("globalState/addNotify", {
			// 	msg: 'get nft info failed',
			// 	type: 'error',
			// }, { root: true });
		}
	},
	async getChargeAddr(context){
		try {
			const res = await request(API_GET_DEPOSIT_ADDR, {
				method: 'POST',
			}, true, true);
			
			let chargeAddrs = {};
			if(res.code == 200){
				res.data.map((item)=>{
					chargeAddrs[item.chainType] = item.address;
				})
			}
			context.commit('setChargeAddr', chargeAddrs);
		} catch(_) {
			console.log(_);
		}
	},
	async getCurrency(context){
		try {
			const localCurrency = Common.getStorageItem("currency");
			let currency = localCurrency;
			if(!currency){
				Common.setStorageItem("currency", "USD");
				currency = "USD";
			}
			context.commit('setCurrency', {selectedCurrency:currency});

			const res = await request(API_CURRENCYPRICE, {
				method: 'GET',
			});
			
			// console.log(res)
			if(res.status == 200){
				context.commit('setCurrency', {currencyMap:res.data});
			}
		} catch(_) {
			console.log('用户获取汇率信息失败')
			// context.commit("globalState/addNotify", {
			// 	msg: '用户获取汇率信息失败',
			// 	type: 'error',
			// }, { root: true });
		}
	},
	async getPaymentCfg(context){
		try {
			const res = await request(API_PAYMENT_WITHDRAW_CFG, {
				method: 'POST',
			}, true, true);
			
			if(res.code == 200){
				context.commit('setPaymentCfg', res.data);
			}
		} catch(_) {
			console.log('用户获取提现配置失败')
			// context.commit("globalState/addNotify", {
			// 	msg: '用户获取提现配置失败',
			// 	type: 'error',
			// }, { root: true });
		}
	},
	// 获取市值
	async getMarketCap(context) {
		const { data } = await request(MARKE_VALUE, {
			params: {
				coin: "mbox",
			},
		});

		context.commit('setMarketCap', data.market);
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
};console.log('Debug: fix: resolve UI scaling issues on mobile');
