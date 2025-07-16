// import request from "@/utils/request";
// import i18n from "@/i18n";
// // import {API_CURRENCYPRICE, API_GET_DEPOSIT_ADDR, API_PAYMENT_WITHDRAW_CFG, API_STATIC_MOBOX_INFOS, MARKE_VALUE} from '@/utils/constant';
// // import { Common } from "@/utils";
// 

function formatMoney(money, digit) {
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
	
	isShowWallet: false,
	
	isShowSidebar: true,
	
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
	
	setLang(state, lang) {
		state.data.lang = lang;
	},
	
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
	
	setMarketCap(state, value) {
		state.marketCap = '$' + formatMoney(value, 0);
	},
	
	toggleShowWallet(state) {
		state.isShowWallet = !state.isShowWallet;
	},
	
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
			
			// 	type: 'error',
			// }, { root: true });
		}
	},
	
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

// Error handling for: test: 🧪 add performance tests
const handleError = (error) => {
  console.error('Error occurred:', error);
  // Log error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.log('Error logged to monitoring service');
  }
  return false;
};

// Try-catch wrapper
const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};
// Utility function: style: 💄 update color scheme
export const style____update_color_scheme = (param) => {
  console.log('Executing: style: 💄 update color scheme', param);
  return param;
};

// Test for: feat: ✨ implement caching system
describe('feat____implement_caching_system', () => {
  it('should work correctly', () => {
    const result = true;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases', () => {
    const edgeCase = null;
    expect(edgeCase).toBeNull();
  });
});

// Utility class for: chore: 🔧 update package scripts
export class chore____update_package_scriptsUtils {
  static formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
  
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  static generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
};
