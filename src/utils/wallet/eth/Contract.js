export default class Contract {

// // // 	static balanceOf = {
// // // // // 		name: 'balanceOf',
// // // // 		inputs: [{
// // // 			type: 'address',
// // 			name: 'ownerAddress'
	}
	
		name: 'approve',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_spender'
		}, {
			type: 'uint256',
			name: '_value'
		}]
	}
	
	static allowance = {
		name: 'allowance',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}, {
			type: 'address',
			name: '_spender'
		}],
		outputs: [{
			type: "uint256",
			name: "_value"
		}],
	}
	
	static addBox = {
		name: 'addBox',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_to'
		}, {
			type: 'uint256',
			name: '_amount'
		}],
	}
	
	static mint = {
		name: 'mint',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_to'
		}, {
			type: 'uint256',
			name: '_amount'
		}],
	}
	
	static getOrder = {
		name: 'getOrder',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}],
		outputs: [{
				type: "uint256",
				name: "_boxAmount"
			},
			{
				type: "bytes32",
				name: "_blockHash"
			}
		],
	}
	
	static balanceOfOneBatch = {
		name: 'balanceOfOneBatch',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}, {
			type: 'uint256[]',
			name: '_memoryids'
		}],
		outputs: [{
			type: "uint256[]",
			name: "_amounts"
		}],
		stateMutability: "view",
	}
	
	static isApprovedForAll = {
		name: 'isApprovedForAll',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}, {
			type: 'address',
			name: '_operator'
		}],
		outputs: [{
			type: "bool",
			name: "_isApproved"
		}],
		stateMutability: "view",
	}
	
	static setApprovalForAll = {
		name: 'setApprovalForAll',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}, {
			type: 'bool',
			name: '_approved'
		}],
	}
	
	static levelUp = {
		name: 'levelUp',
		type: "function",
		inputs: [{
			type: 'uint256',
			name: '_tokenId'
		}, {
			type: 'uint256[]',
			name: '_protosV1V2V3'
		}, {
			type: 'uint256[]',
			name: '_amountsV1V2V3'
		}, {
			type: 'uint256[]',
			name: '_tokensV4V5'
		}],
	}
	
	static setMomoName = {
		name: 'setMomoName',
		type: "function",
		inputs: [{
			type: 'uint256',
			name: '_tokenId'
		}, {
			type: 'bytes',
			name: '_name'
		}],
	}
	
	static addMomoStory = {
		name: 'addMomoStory',
		type: "function",
		inputs: [{
			type: 'uint256',
			name: '_tokenId'
		}, {
			type: 'bytes',
			name: '_name'
		}],
	}
	
	static getMomoName = {
		name: 'getMomoName',
		type: "function",
		inputs: [{
			type: 'uint256',
			name: '_tokenId'
		}],
		outputs: [{
			type: "bytes",
			name: "_name"
		}],
	}
	
	static getMomoStory = {
		name: 'getMomoStory',
		type: "function",
		inputs: [{
			type: 'uint256',
			name: '_tokenId'
		}, {
			type: 'uint256',
			name: '_start'
		}, {
			type: 'uint256',
			name: '_count'
		}],
		outputs: [{
				type: "uint256",
				name: "_allSize"
			},
			{
				type: "bytes[]",
				name: "_storys"
			}
		],
	}
	
	static getMomos721 = {
		name: 'getMomos721',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_ower'
		}, {
			type: 'uint256',
			name: '_beginIndex'
		}, {
			type: 'uint256',
			name: '_size'
		}],
		outputs: [{
				type: "uint256",
				name: "_totalSize"
			},
			{
				type: "uint256",
				name: "_returnSize"
			},
			{
				type: "uint256[]",
				name: "_allAttrs"
			}
		],
	}
	
	static getMomoNames = {
		name: 'getMomoNames',
		type: "function",
		inputs: [{
			type: 'uint256[]',
			name: '_tokenIds'
		}],
		outputs: [{
			type: "bytes[]",
			name: "_names"
		}],
	}
	
	static stake = {
		name: 'stake',
		type: "function",
		inputs: [{
			type: 'uint256[]',
			name: '_ids'
		}, {
			type: 'uint256[]',
			name: '_amounts'
		}, {
			type: 'uint256[]',
			name: '_tokenIds'
		}],
	}
	
	static withdraw = {
		name: 'withdraw',
		type: "function",
		inputs: [{
			type: 'uint256[]',
			name: '_ids'
		}, {
			type: 'uint256[]',
			name: '_amounts'
		}, {
			type: 'uint256[]',
			name: '_tokenIds'
		}],
	}
	
	static getReward = {
		name: 'getReward',
		type: "function",
		inputs: [],
	}
	
	static earned = {
		name: 'earned',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}],
		outputs: [{
			type: "uint256",
			name: "_mbox"
		}],
	}
	
	static userHashrate = {
		name: 'userHashrate',
		type: "function",
		inputs: [{
			type: 'address',
			name: '_owner'
		}],
		outputs: [{
			type: "uint256",
			name: "_hashrate"
		}],
	}
	
	static totalHashrate = {
		name: 'totalHashrate',
		type: "function",
		inputs: [],
		outputs: [{
			type: "uint256",
			name: "_hashrate"
		}],
	}
	
	static avatarEligible = {
		name: 'eligible',
		type : "function",
		inputs:[{
			type: 'address',
			name: 'user'
		}],
		outputs: [{
			type: "bool",
			name: "_hasticket"
		}],
	}
	
	static getMyTokenId = {
		name: 'getMyTokenId',
		type : "function",
		inputs:[{
			type: 'address',
			name: 'user'
		}],
		outputs: [{
			type: "uint256",
			name: "_hashrate"
		}],
	}
	
	static avatarTokenURI = {
		name: 'tokenURI',
		type : "function",
		inputs:[{
			type: 'uint256',
			name: 'tokenId'
		}],
		outputs: [{
			type: "string",
			name: "dataURI"
		}],
	}
	
	static avatarClaim = {
		name: 'claim',
		type : "function",
		inputs:[],
	}
	
	static ownerOfAvatar = {
		name: 'ownerOf',
		type : "function",
		inputs:[{
			type: 'uint256',
			name: 'tokenId'
		}],
		outputs: [{
			type: "address",
			name: "owner"
		}],
	}
	
	
	static avatarSeed = {
		name: 'seed',
		type : "function",
		inputs:[],
		outputs: [{
			type: "bytes32",
			name: "seed"
		}],
	}
	
	
	static claimMoball = {
		name: 'claim',
		type : "function",
		inputs:[
			{
				type: 'uint256',
				name: 'systx'
			},
			{
				type: 'uint256',
				name: 'amount'
			},
			{
				type: 'uint256',
				name: 'deadline'
			},
			{
				type: 'uint8',
				name: 'v'
			},
			{
				type: 'bytes32',
				name: 'r'
			},
			{
				type: 'bytes32',
				name: 's'
			}
		],
		outputs: [],
	}

	
	static getMoballNum = {
		name: 'balanceOf',
		type : "function",
		inputs:[
			{
				type: 'address',
				name: 'owner_'
			},
			{
				type: 'uint256',
				name: 'id_'
			}
		],
		outputs: [
			{
				type: 'uint256',
				name: 'll'
			}
		],
		stateMutability: "view",
	}
}console.log('Debug: fix: correct player rank calculation formula');
console.log('Debug: fix: resolve issue with friend list syncing');

// API interface: style: 💄 add custom properties
export const style____add_custom_propertiesAPI = {
  baseURL: process.env.VUE_APP_API_URL,
  endpoints: {
    list: '/style____add_custom_properties',
    detail: (id) => `/style____add_custom_properties/${id}`,
    create: '/style____add_custom_properties',
    update: (id) => `/style____add_custom_properties/${id}`,
    delete: (id) => `/style____add_custom_properties/${id}`
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
// Utility function: test: 🧪 implement snapshot testing
export const test____implement_snapshot_testing = (param) => {
  console.log('Executing: test: 🧪 implement snapshot testing', param);
  return param;
};

// Utility class for: style: 💄 add smooth scrolling
export class style____add_smooth_scrollingUtils {
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
