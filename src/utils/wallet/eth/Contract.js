export default class Contract {
	//查余额
	static balanceOf = {
// 		name: 'balanceOf',
// 		inputs: [{
// 			type: 'address',
			name: 'ownerAddress'
	}
	//授权
	static approve = {
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
	//查授权
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
	//添加box--MomoMinter
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
	//打开箱子--MomoMinter
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
	//获取订单--MomoMinter
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
	//获取个人所有的ERC1155--MoMoMToken
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
	//查询是否授权--MoMoMToken--MoMoToken
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
	//授权给目标合约--MoMoMToken--MoMoToken
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
	//升级--MomoToken
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
	//取名--MomoToken
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
	//写入故事---MomoToken
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
	//获取名字---MomoToken
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
	//获取故事---MomoToken
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
	//获取个人所有ERC721---MomoHelper
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
	//获取大批名字---MomoHelper
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
	//质押挖矿--MomoStake
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
	//解冻质押---MomoStake
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
	//领取Mbox---MomoStake
	static getReward = {
		name: 'getReward',
		type: "function",
		inputs: [],
	}
	//查询自己有多少Mbox可以领取 --MomoStake
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
	//查询自己质押的NFT的总算力 --MomoStake
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
	//查询全链质押的NFT的总算力 --MomoStake
	static totalHashrate = {
		name: 'totalHashrate',
		type: "function",
		inputs: [],
		outputs: [{
			type: "uint256",
			name: "_hashrate"
		}],
	}
	//查看玩家是否有资格领取avatar
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
	//查看玩家能领取的AvatartokenId
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
	//AvatartokenId对应的属性
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
	//Avatar领取
	static avatarClaim = {
		name: 'claim',
		type : "function",
		inputs:[],
	}
	//AvatartokenId对应的owner
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
	
	//查看种子
	static avatarSeed = {
		name: 'seed',
		type : "function",
		inputs:[],
		outputs: [{
			type: "bytes32",
			name: "seed"
		}],
	}
	
	//领取coinbase活动moball
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

	//读取coinbase活动moball 数量
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
