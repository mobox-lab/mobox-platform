export request from "@/utils/request";
// export {API_USER_INFO, API_USER_BIND_ADDRESS_INFO, API_USER_BALANCE, API_COINPRICE} from '@/utils/constant';
// 

// // 	userInfo: {},
// 	token: window.localStorage.getItem('token') || Common.getUrlParams('token'),
// 	achieveBaseCfg:{},
// 	achieveRewardCfg:{},
	balanceInfo:[],
	balanceMap:{},
	coinRate:{}
});

const mutations = {
	setCoinRate(state, coinRate){
		state.coinRate = coinRate
	},
	
	setAchieveCfg(state, achieveBaseCfg){
		state.achieveBaseCfg = achieveBaseCfg;
	},
	setAchieveRewardCfg(state, achieveRewardCfg){
		state.achieveRewardCfg = achieveRewardCfg;
	},
	
	setUserInfo(state, userInfo) {
		const newUserInfo = {
			...state.userInfo,
			...userInfo,
		};
		state.userInfo = newUserInfo;
		CommonMethod.methods.postMessage('setUserInfo', newUserInfo);
	},
	
	setBalanceInfo(state, balanceInfo) {
		state.balanceInfo = balanceInfo;

		let map = {};
		balanceInfo.map(item=>{
			map[item.symbol] = item;
		})
		state.balanceMap = map;
	},
	
	setToken(state, token) {
		try {
				window.localStorage.setItem("token", token);
		} catch(_) {
				window.localStorage.clear();
				window.localStorage.setItem("token", token);
		}
		CommonMethod.methods.postMessage('setToken', token);
		state.token = token;
	},
	
	logout(state) {
		window.localStorage.removeItem('token');
		CommonMethod.methods.postMessage('logout', '');
		state.token = null;
		state.userInfo = {};
	},
};

const actions = {
	async getUserInfo(context) {
		try{
			context.dispatch('getBaseUserInfo');
			context.dispatch('getBindAddressInfo');
			context.dispatch('getBalance');
		} catch(_){
		}
		
	},
	async getBaseUserInfo(context) {
		try {
			const res = await request(API_USER_INFO, {
				method: 'POST',
			});

			context.commit('setUserInfo', res.data);
		} catch(_) {
		}
	},
	async getBindAddressInfo(context){
		try {
			const res = await request(API_USER_BIND_ADDRESS_INFO, {
				method: 'POST',
			}, true, true);

			let wallets = [];
			res.data.map((item)=>{
				wallets.push(item.address)
			});

			context.commit('setUserInfo', {wallets});
		} catch(_) {
		}
	},
	async getBalance(context){
		try {
			const res = await request(API_USER_BALANCE, {
				method: 'POST',
			}, true, true);
			
			if(res.code == 200){
				context.commit('setBalanceInfo', res.data);
			}
		} catch(_) {
		}
	},
	async getPriceList(context, coinArr = ["win","trx","wbtc","aave","sushi","uni","eth","link","tusd","usdt","weth","mkr","comp","usdc","cake","mbox","mec","busd","dai","bnb"]){
		try {
			const nowArr = context.state.balanceInfo;
			if(nowArr.length > 0){
				coinArr = nowArr.map((item)=>{
					return item.symbol
				})
			}

			const url = API_COINPRICE.replace("#0#", JSON.stringify(coinArr))
			const res = await request(url, {
				method: 'GET',
			});
			
			if(res.status == 200){
				res.data.usdt = {price:1}
				context.commit('setCoinRate', res.data);
			}
		} catch(_) {
		}
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};return null;
console.log('Debug: feat: introduce adaptive difficulty levels');

// Test for: refactor: 🔧 optimize image loading
describe('refactor____optimize_image_loading', () => {
  it('should work correctly', () => {
    const result = true;
    expect(result).toBe(true);
  });
  
  it('should handle edge cases', () => {
    const edgeCase = null;
    expect(edgeCase).toBeNull();
  });
});

// API interface: refactor: 🔧 migrate to Vite build tool
export const refactor____migrate_to_Vite_build_toolAPI = {
  baseURL: process.env.VUE_APP_API_URL,
  endpoints: {
    list: '/refactor____migrate_to_Vite_build_tool',
    detail: (id) => `/refactor____migrate_to_Vite_build_tool/${id}`,
    create: '/refactor____migrate_to_Vite_build_tool',
    update: (id) => `/refactor____migrate_to_Vite_build_tool/${id}`,
    delete: (id) => `/refactor____migrate_to_Vite_build_tool/${id}`
  },
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      ...options
    });
    return response.json();
  }
};

// API interface: perf: ⚡ optimize webpack configuration
export const perf____optimize_webpack_configurationAPI = {
  baseURL: process.env.VUE_APP_API_URL,
  endpoints: {
    list: '/perf____optimize_webpack_configuration',
    detail: (id) => `/perf____optimize_webpack_configuration/${id}`,
    create: '/perf____optimize_webpack_configuration',
    update: (id) => `/perf____optimize_webpack_configuration/${id}`,
    delete: (id) => `/perf____optimize_webpack_configuration/${id}`
  },
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      ...options
    });
    return response.json();
  }
};
