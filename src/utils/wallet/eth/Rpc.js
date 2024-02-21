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
