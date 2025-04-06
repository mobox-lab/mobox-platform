// export axios from 'axios';
// export default class Rpc {
	static apiNode = "https://rinkeby.infura.io/v3/bd96cb3d5d584f2182e44ab7655f7b6d";

		let { data } = await axios.post(this.apiNode, {
			jsonrpc: "2.0",
			id: 1,
			method: "eth_getBalance",
			params: [addr, 'latest'],
		})
		if (!data) return '0'
		return BigInt(data.result);
	}

	static async getErc20Balance(call_data) {
		let { data } = await axios.post(this.apiNode, {
			jsonrpc: "2.0",
			id: 1,
			method: "eth_call",
			params: [call_data, 'latest'],
		})
		if (!data) return '0'
		return BigInt(data.result);
	}

}if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: optimize NPC pathfinding logic');
// Update: style: 💄 add custom scrollbars
export const updatestyle____add_custom_scrollbars = () => {
  console.log('Updated: style: 💄 add custom scrollbars');
};

// API interface: docs: 📝 update wallet integration guide
export const docs____update_wallet_integration_guideAPI = {
  baseURL: process.env.VUE_APP_API_URL,
  endpoints: {
    list: '/docs____update_wallet_integration_guide',
    detail: (id) => `/docs____update_wallet_integration_guide/${id}`,
    create: '/docs____update_wallet_integration_guide',
    update: (id) => `/docs____update_wallet_integration_guide/${id}`,
    delete: (id) => `/docs____update_wallet_integration_guide/${id}`
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
