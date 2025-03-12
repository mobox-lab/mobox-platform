// // export Web3 from 'web3'
// // export Rpc from './Rpc';
// // export Contract from './Contract'
// // export {
// // 	Common
// // } from "@/utils";
// // export {
	EventConfig,
	WalletConfig,
	BaseConfig
} from '@/config';

const BigInt = window.BigInt;

export default class ETH {
	static web3;

	
	static boxTokenContract;
	static moMoMinterContract;
	static moMoTokenContract;
	static moMoMTokenContract;
	static momoHelperContract;
	static momoStakeContract;
	static avatarContract;
	static coinbaseContract;

	static async init() {
		console.log("init eth");
		// this.web3 = new Web3(new Web3.providers.HttpProvider(Rpc.apiNode));

		return new Promise(resolve => {
			let tmpTimer1 = setInterval(() => {
				if (window.web3) {
					clearInterval(tmpTimer1);
					if (typeof window.web3 !== undefined) {
						this.web3 = new Web3(window.web3.currentProvider);
					}
					this.initContract();
					resolve();
				}
			}, 1000);
		})
	}
	
	static initContract() {
		this.boxTokenContract = new this.web3.eth.Contract([
			Contract.approve,
			Contract.allowance
		], WalletConfig.ETH.boxToken);
		this.moMoMinterContract = new this.web3.eth.Contract([
			Contract.addBox,
			Contract.mint,
			Contract.getOrder
		], WalletConfig.ETH.moMoMinter);
		this.moMoTokenContract = new this.web3.eth.Contract([
			Contract.levelUp,
			Contract.getMomoName,
			Contract.getMomoStory,
			Contract.setMomoName,
			Contract.addMomoStory,
			Contract.isApprovedForAll,
			Contract.setApprovalForAll,
		], WalletConfig.ETH.moMoToken);
		this.moMoMTokenContract = new this.web3.eth.Contract([
			Contract.balanceOfOneBatch,
			Contract.isApprovedForAll,
			Contract.setApprovalForAll,
		], WalletConfig.ETH.moMoMToken);
		this.momoHelperContract = new this.web3.eth.Contract([
			Contract.getMomos721,
			Contract.getMomoNames,
		], WalletConfig.ETH.moMoHelper);
		this.momoStakeContract = new this.web3.eth.Contract([
			Contract.stake,
			Contract.withdraw,
			Contract.getReward,
			Contract.earned,
			Contract.userHashrate,
			Contract.totalHashrate,
		], WalletConfig.ETH.moMoStake);
		this.avatarContract = new this.web3.eth.Contract([
			Contract.avatarEligible,
			Contract.getMyTokenId,
			Contract.avatarTokenURI,
			Contract.avatarClaim,
			Contract.ownerOfAvatar,
			Contract.avatarSeed,
		], WalletConfig.ETH.avatarToken);
		this.coinbaseContract = new this.web3.eth.Contract([
			Contract.claimMoball,
			Contract.getMoballNum,
		], WalletConfig.ETH.coinbase);
	}
	
	static async getAccount() {
		if (typeof window.ethereum !== 'undefined') {
			let accounts = await window.ethereum.enable();
			let account = accounts[0];
			return account;
		} else {
			return undefined;
		}
	}
	
	static async approveBoxToMinter() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.boxTokenContract) return;
		return new Promise(resolve => {
			this.boxTokenContract.methods.approve(WalletConfig.ETH.moMoMinter,
				"0x" + Common.repeat("f", 64)).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err));
		});
	}
	
	static async boxAllowanceToMinter() {
		let myAddr = await this.getAccount();
		if (!myAddr) return -1;
		if (!this.boxTokenContract) return -1;
		return new Promise(resolve => {
			this.boxTokenContract.methods.allowance(myAddr, WalletConfig.ETH.moMoMinter).call().then(res => {
				resolve(res);
			});
		});
	}
	
	static async viewTransactionByTx() {
		let transaction = await this.web3.eth.getTransaction('0x3c0698217882cf8a91c7a9705cf38195e95fa835b8317c3d2acd0d07373ab286');
		console.log({
			transaction
		});
	}
	
	static async getMyBalance() {
		let myAddr = await this.getAccount();
		if (!myAddr) return 0;
		let balance = await Rpc.getEthBalance(myAddr);
		return Common.numFloor(parseInt(balance) / 1e18, 10000);
	}
	
	static async getErc20BalanceByTokenAddr(tokenAddr) {
		let myAddr = await this.getAccount();
		if (!myAddr) return 0;
		let data = this.web3.eth.abi.encodeFunctionCall(Contract.balanceOf, [myAddr]);
		let myBox = await Rpc.getErc20Balance({
			data,
			from: WalletConfig.ETH.defaultFromAddr,
			to: tokenAddr
		});
		return parseInt(myBox / BigInt(1e6));
	}
	
	static async addBox(amount) {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.moMoMinterContract) return;

		return new Promise(resolve => {
			this.moMoMinterContract.methods.addBox(myAddr, amount).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err));
		});
	}
	
	static async openBox(amount) {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.moMoMinterContract) return;

		return new Promise(resolve => {
			this.moMoMinterContract.methods.mint(myAddr, amount).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				EventBus.$emit(EventConfig.OpenBoxConfirm, "eth");
			});
		});
	}
	
	static async getOrder() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.moMoMinterContract) return;

		return new Promise(resolve => {
			this.moMoMinterContract.methods.getOrder(myAddr).call().then(getOrderRes => {
				resolve(getOrderRes);
			});
		});
	}
	
	static async isApprovedForAllByTokenAddr_1155(tokenAddr) {
		let myAddr = await this.getAccount();
		if (!myAddr) return null;
		if (!this.moMoMTokenContract) return null;
		return new Promise(resolve => {
			this.moMoMTokenContract.methods.isApprovedForAll(myAddr, tokenAddr).call().then(isApproved => {
				console.log("isApprovedForAllByTokenAddr_1155", {
					isApproved
				});
				resolve(isApproved);
			});
		});
	}
	
	static async approve1155ToTargetToken(tokenAddr) {
		let myAddr = await this.getAccount();
		if (!myAddr) return null;
		if (!this.moMoMTokenContract) return null;
		return new Promise(resolve => {
			this.moMoMTokenContract.methods.setApprovalForAll(tokenAddr, true).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				EventBus.$emit(EventConfig.ApprovedConfirm, {
					chain: "eth"
				});
			});
		});
	}
	
	static async isApprovedForAllByTokenAddr_721(tokenAddr) {
		let myAddr = await this.getAccount();
		if (!myAddr) return null;
		if (!this.moMoTokenContract) return null;
		return new Promise(resolve => {
			this.moMoTokenContract.methods.isApprovedForAll(myAddr, tokenAddr).call().then(isApproved => {
				console.log("isApprovedForAllByTokenAddr_721", {
					isApproved
				});
				resolve(isApproved);
			});
		});
	}
	
	static async approve721ToTargetToken(tokenAddr) {
		let myAddr = await this.getAccount();
		if (!myAddr) return null;
		if (!this.moMoTokenContract) return null;
		return new Promise(resolve => {
			this.moMoTokenContract.methods.setApprovalForAll(tokenAddr, true).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				EventBus.$emit(EventConfig.ApprovedConfirm, "eth");
			});
		});
	}
	
	static async getErc1155() {
		let myAddr = await this.getAccount();
		if (!myAddr) return null;
		if (!this.moMoMTokenContract) return null;

		let arr = [];
		for (let key in BaseConfig.NftCfg) {
			let {
				prototype,
				quality
			} = BaseConfig.NftCfg[key];
			if (quality < 4) {
				arr.push(
					prototype);
			}
		}

		return new Promise(resolve => {
			this.moMoMTokenContract.methods.balanceOfOneBatch(myAddr, arr.reverse()).call().then(getErc1155 => {
				let erc1155Obj = [];
				arr.map((item, index) => {
					let num = Number(getErc1155[index]);
					let {
						tokenName,
						quality,
						category,
					} = BaseConfig.NftCfg[item];
					if (num > 0) {
						erc1155Obj.push({
							prototype: item,
							num,
							tokenId: 1,
							level: 1,
							category,
							tokenName: tokenName,
							quality,
							hashrate: quality * 10,
							chain: "eth"
						});
					}
				});
				console.log({
					getErc1155
				});
				resolve(erc1155Obj);
			});
		});
	}
	
	static async getErc721() {
		let myAddr = await this.getAccount();
		if (!myAddr) return null;
		if (!this.momoHelperContract) return null;

		return new Promise(resolve => {
			this.momoHelperContract.methods.getMomos721(myAddr, 0, 999).call().then(getErc721 => {
				let {
					_allAttrs,
					_returnSize,
					_totalSize
				} = getErc721;
				let erc721Obj = {
					_totalSize,
					_returnSize,
					arr: []
				};
				for (let index = 0; index < _returnSize; index++) {
					let itemAttr = _allAttrs.slice(index * 7, (index + 1) * 7);
					erc721Obj.arr.push({
						tokenId: Number(itemAttr[0]),
						prototype: itemAttr[1],
						quality: itemAttr[2],
						category: itemAttr[3],
						level: Number(itemAttr[4]),
						speciality: itemAttr[5],
						hashrate: Number(itemAttr[6]),
						num: 1,
						chain: "eth",
						tokenName: BaseConfig.NftCfg[itemAttr[1]]["tokenName"]
					});
				}
				console.log({
					erc721Obj
				});
				
				erc721Obj.arr.sort((a, b) =>
					b.hashrate - a.hashrate
				);
				resolve(erc721Obj);
			});
		});
	}
	
	static async getMomoNameByTokenId(tokenId) {
		if (!this.moMoTokenContract) return "";
		return new Promise(resolve => {
			this.moMoTokenContract.methods.getMomoName(tokenId).call().then(name => {
				name = name || "";
				if (name == "") {
					resolve("");
				} else {
					resolve(this.web3.utils.hexToUtf8(name) || "");
				}
			});
		});
	}
	
	static async getMomoNamesByTokenIds(tokenIds) {
		if (!this.momoHelperContract) return "";
		return new Promise(resolve => {
			this.momoHelperContract.methods.getMomoNames(tokenIds).call().then(names => {
				let retNames = [];
				names.map(item => retNames.push(this.web3.utils.hexToUtf8(item)));
				resolve(retNames);
			});
		});
	}
	
	static async setMomoNameByTokenId(tokenId, name, isFirst) {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.moMoTokenContract) return;
		return new Promise(resolve => {
			this.moMoTokenContract.methods.setMomoName(tokenId, this.web3.utils.utf8ToHex(name)).send({
				from: myAddr,
				value: isFirst ? 0 : 0.01e18
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				EventBus.$emit(EventConfig.SetNameConfirm, {
					chain: "eth",
					tokenId,
					name
				});
			});
		});
	}
	
	static async upgrade(gotoLv, tokenId, protosV1V2V3 = [], amountsV1V2V3 = [], tokensV4V5 = []) {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.moMoTokenContract) return;
		return new Promise(resolve => {
			
			protosV1V2V3.map((item, index) => protosV1V2V3[index] = Number(item));
			tokensV4V5.map((item, index) => tokensV4V5[index] = Number(item));
			console.log({
				gotoLv,
				tokenId,
				protosV1V2V3,
				amountsV1V2V3,
				tokensV4V5
			});
			this.moMoTokenContract.methods.levelUp(tokenId, protosV1V2V3, amountsV1V2V3, tokensV4V5).send({
				from: myAddr,
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				console.log("receipt");
				EventBus.$emit(EventConfig.LevelUpConfirm, {
					chain: "eth",
					gotoLv,
					tokenId
				});
			});
		});
	}
	
	static async testMint1155(ids, amounts) {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		return new Promise(resolve => {
			let testMintBatchAbi = {
				name: 'testMintBatch',
				type: "function",
				inputs: [{
					type: 'address',
					name: 'ownerAddress'
				}, {
					type: 'uint256[]',
					name: 'ids'
				}, {
					type: 'uint256[]',
					name: 'amounts'
				}],
			}
			let testMint1155 = new this.web3.eth.Contract([
				testMintBatchAbi,
			], WalletConfig.ETH.moMoMToken);
			testMint1155.methods.testMintBatch(myAddr, ids, amounts).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				EventBus.$emit(EventConfig.OpenBoxConfirm, {
					chain: "eth"
				});
			});
		})
	}
	
	static async testMint721(item) {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		return new Promise(resolve => {
			let testMintAbi = {
				name: 'testMint',
				type: "function",
				inputs: [{
					type: 'address',
					name: 'ownerAddress'
				}, {
					type: 'uint256[]',
					name: '_tokenIds'
				}],
			}
			let testMint721 = new this.web3.eth.Contract([
				testMintAbi,
			], WalletConfig.ETH.moMoToken);
			console.log(item);
			console.log(Object.values(item));
			testMint721.methods.testMint(myAddr, Object.values(item)).send({
				from: myAddr
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				EventBus.$emit(EventConfig.OpenBoxConfirm, "eth");
			});
		})
	}
	
	static async stakeNft(erc1155ids, erc1155Num, erc721TokenIds) {
		console.log(erc1155ids, erc1155Num, erc721TokenIds);
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.momoStakeContract) return;
		return new Promise(resolve => {
			this.momoStakeContract.methods.stake(erc1155ids, erc1155Num, erc721TokenIds).send({
				from: myAddr,
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				console.log("stake success!!!!!");
				EventBus.$emit(EventConfig.StakeNftConfirm, {
					chain: "eth",
				});
			});
		});
	}
	
	static async getMyHashrate() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.momoStakeContract) return;
		return new Promise(resolve => {
			this.momoStakeContract.methods.userHashrate(myAddr).call().then(hashrate => {
				resolve(Number(hashrate));
			})
		});
	}
	
	static async getTotalHashrate() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.momoStakeContract) return;
		return new Promise(resolve => {
			this.momoStakeContract.methods.totalHashrate().call().then(hashrate => {
				resolve(Number(hashrate));
			})
		});
	}
	
	static async getEarnedMobx() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.momoStakeContract) return;
		return new Promise(resolve => {
			this.momoStakeContract.methods.earned(myAddr).call().then(mobox => {
				resolve(Common.numFloor(mobox / 1e6, 100));
			})
		});
	}
	
	static async takeEarnedMbox() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.momoStakeContract) return;
		return new Promise(resolve => {
			this.momoStakeContract.methods.getReward().send({
				from: myAddr,
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				console.log("getReward success!!!!!");
			});
		});
	}

	
	
	static async getAvatarEligble() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.avatarContract) return;
		return new Promise(resolve => {
			this.avatarContract.methods.eligible(myAddr).call().then(eligible => {
				resolve(Number(eligible));
			})
		});
	}

	
	static async getAvatarTokenId() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.avatarContract) return;
		return new Promise(resolve => {
			this.avatarContract.methods.getMyTokenId(myAddr).call().then(hashrate => {
				resolve(Number(hashrate));
			})
		});
	}

	
	static async getAvatarPros(tokenid) {
		if (!this.avatarContract) return;
		return new Promise(resolve => {
			this.avatarContract.methods.tokenURI(tokenid).call().then(dataURI => {
				resolve(dataURI)
			})
		});
	}

	
	static async getAvatarOwner(tokenid) {
		if (!this.avatarContract) return;
		console.log(this.avatarContract.methods)
		return new Promise(resolve => {
			this.avatarContract.methods.ownerOf(tokenid).call().then(owner => {
				console.log(owner)
				resolve(owner);
			})
		});
	}

	
	static async avatarClaim() {
		if (!this.avatarContract) return;
		return new Promise(resolve => {
			this.avatarContract.methods.claim().call().then(re => {
				console.log(re)
				resolve(1);
			})
		});
	}

	
	static async avatarSeed() {
		if (!this.avatarContract) return;
		return new Promise(resolve => {
			this.avatarContract.methods.seed().call().then(seed => {
				console.log("seed="+seed)
				resolve(seed);
			})
		});
	}

	
	static async getCoinbaseMoball(systx,amount,v,r,s,deadline) {
		if (!this.coinbaseContract) return;
		console.log("getCoinbaseMoball systx="+systx+" amount="+amount+" v="+v+" r="+r+" s="+s)
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		return new Promise(resolve => {
			this.coinbaseContract.methods.claim(systx,amount,deadline,v,r,s).send({
				from: myAddr,
			}).on("transactionHash", hash => {
				resolve(hash);
			}).on("error", err => console.log(err)).on("receipt", () => {
				console.log("stake success!!!!!");
				EventBus.$emit(EventConfig.ClaimMobalConfirm, {
					chain: "eth",
				});
			});
		});
	}

	
	static async getCoinbaseMoballNum() {
		let myAddr = await this.getAccount();
		if (!myAddr) return;
		if (!this.coinbaseContract) return;
		return new Promise(resolve => {
			console.log(this.coinbaseContract, '======');
			this.coinbaseContract.methods.balanceOf(myAddr,1).call().then(eligible => {
				resolve(Number(eligible));
			})
		});
	}
}console.log('Debug: feat: optimize performance for low-end devices');
