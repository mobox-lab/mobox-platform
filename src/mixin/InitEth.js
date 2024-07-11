export {
	Common,
	EventBus,
// } from "@/utils";
// export {
// 	EventConfig,
	StorageConfig
} from "@/config";
export {
	mapState
} from "vuex";
export WalletConfig from "../config/WalletConfig";

const InitEth = {
	data() {
		return ({
			timer: null
		})
	},
	computed: {
		...mapState({
			erc721: (state) => state.ethState.data.erc721,
			ethState: (state) => state.ethState.data,
		}),
	},
	created() {
		this.eth_init();
		//事件监听
		EventBus.$on(
			EventConfig.OpenBoxConfirm,
			this.eth_openBoxConfirm.bind(this)
		);
		EventBus.$on(
			EventConfig.SetNameConfirm,
			this.eth_setNameConfirm.bind(this)
		);
		EventBus.$on(
			EventConfig.Approved1155Confirm,
			this.eth_approvedConfirm.bind(this)
		);
		EventBus.$on(
			EventConfig.LevelUpConfirm,
			this.eth_levelUpConfirm.bind(this)
		);
		EventBus.$on(
			EventConfig.StakeNftConfirm,
			this.eth_stakeNftConfirm.bind(this)
		);
	},
	beforeDestroy() {
		console.log("beforeDestroy");
		EventBus.$off(
			EventConfig.StakeNftConfirm,
			this.eth_stakeNftConfirm.bind(this)
		);
		EventBus.$off(
			EventConfig.OpenBoxConfirm,
			this.eth_openBoxConfirm.bind(this)
		);
		EventBus.$off(
			EventConfig.SetNameConfirm,
			this.eth_setNameConfirm.bind(this)
		);
		EventBus.$off(
			EventConfig.ApprovedConfirm,
			this.eth_approvedConfirm.bind(this)
		);
		EventBus.$off(
			EventConfig.LevelUpConfirm,
			this.eth_levelUpConfirm.bind(this)
		);
		if (this.timer) clearInterval(this.timer);
	},
	methods: {
		async eth_init() {
			await Wallet.ETH.init();
			let account = await Wallet.ETH.getAccount();
			if (account) {
				this.$store.commit("globalState/setChainAddr", {
					type: "ETH",
					addr: Common.getShortAddr(account),
				});
				this.$store.commit("globalState/setChainAddr", {
					type: "BNB",
					addr: Common.getShortAddr(account),
				});

				this.eth_set721();
				this.eth_set1155();
				this.eth_set1155IsApprovedFor721();
				this.eth_set1155IsApprovedForStake();
				this.eth_set721IsApprovedForStake();

				this.needUpdate();
				this.timer = setInterval(() => {
					this.needUpdate();
				}, 10000);

			}
		},
		//需要定时去取的数据
		needUpdate() {
			this.setOrder();
			this.eth_setBox();
			this.eth_setMbox();
			this.eth_setBalance();
			this.eth_setMyHashrate();
			this.eth_setTotalHashrate();
			this.eth_setEarnedMbox();
			if (this.ethState.allowance_box_to_minter < 10000) {
				this.eth_setBoxAllowance();
			}
		},
		//设置开箱子的订单
		async setOrder() {
			let order = await Wallet.ETH.getOrder();
			if (order) {
				this.$store.commit("ethState/setData", {
					canOpenBox: Number(order._boxAmount),
					orderBlockHash: order._blockHash,
				});
			}
		},
		//设置待领取的mbox
		async eth_setEarnedMbox() {
			let earnedMbox = await Wallet.ETH.getEarnedMobx();
			this.$store.commit("ethState/setData", {
				earnedMbox
			});
		},
		//查询质押总战力
		async eth_setMyHashrate() {
			let hashrate = await Wallet.ETH.getMyHashrate();
			this.$store.commit("ethState/setData", {
				myHashrate: hashrate
			});
		},
		//查询全网质押总算力
		async eth_setTotalHashrate() {
			let totalHashrate = await Wallet.ETH.getMyHashrate();
			this.$store.commit("ethState/setData", {
				totalHashrate
			});
		},
		//721升级
		async eth_levelUpConfirm({
			chain,
			tokenId,
			gotoLv
		}) {
			console.log("levelUpConfirm", {
				chain,
				tokenId,
				gotoLv
			});
			if (chain == "eth") {
				this.erc721.map((item) => {
					if (item.tokenId == tokenId) item.level = gotoLv;
				});
				this.eth_saveUpdate721();
				//更新消耗掉的
				this.eth_set1155();
				this.eth_set721();
			}
		},
		//授权1155合约确认
		eth_approvedConfirm({
			chain
		}) {
			console.log("approvedConfirm");
			if (chain == "eth") {
				this.eth_set1155IsApprovedFor721();
				this.eth_set1155IsApprovedForStake();
				this.eth_set721IsApprovedForStake();
			}
		},
		//设置名字合约确认
		async eth_setNameConfirm({
			chain,
			tokenId,
			name
		}) {
			if (chain == "eth") {
				this.erc721.map((item) => {
					if (item.tokenId == tokenId) item.tokenName = name;
				});
				this.eth_saveUpdate721();
			}
		},
		//开箱子合约确认
		eth_openBoxConfirm({
			chain
		}) {
			console.log("openBoxConfirm");
			if (chain == "eth") {
				this.eth_set1155();
				this.eth_set721();
			}
		},
		//质押NFT确认
		eth_stakeNftConfirm({
			chain
		}) {
			if (chain == "eth") {
				this.eth_set1155();
				this.eth_set721();
			}
		},
		//持久化修改的721
		async eth_saveUpdate721() {
			let account = await Wallet.ETH.getAccount();
			Common.setStorageItem(
				StorageConfig.myErc721 + "-" + account,
				JSON.stringify(this.erc721)
			);
		},
		//设置1155是否授权给721和stake
		async eth_set1155IsApprovedFor721() {
			let isApproved = await Wallet.ETH.isApprovedForAllByTokenAddr_1155(WalletConfig.ETH.moMoToken);
			if (isApproved != null) {
				this.$store.commit("ethState/setData", {
					allowance_1155_to_721: Number(isApproved)
				});
			}
		},
		async eth_set1155IsApprovedForStake() {
			let isApproved = await Wallet.ETH.isApprovedForAllByTokenAddr_1155(WalletConfig.ETH.moMoStake);
			if (isApproved != null) {
				this.$store.commit("ethState/setData", {
					allowance_1155_to_stake: Number(isApproved)
				});
			}
		},
		//设置721是否授权给721和stake
		async eth_set721IsApprovedForStake() {
			let isApproved = await Wallet.ETH.isApprovedForAllByTokenAddr_721(WalletConfig.ETH.moMoStake);
			if (isApproved != null) {
				this.$store.commit("ethState/setData", {
					allowance_721_to_stake: Number(isApproved)
				});
			}
		},
		//获取BOX是否授权
		async eth_setBoxAllowance() {
			let allowance = await Wallet.ETH.boxAllowanceToMinter();
			if (allowance != null) {
				this.$store.commit("ethState/setData", {
					allowance_box_to_minter: allowance
				});
			}
		},
		//获取ETH余额
		async eth_setBalance() {
			let balance = await Wallet.ETH.getMyBalance();
			if (balance != null) {
				this.$store.commit("ethState/setData", {
					balance
				});
			}
		},
		//获取ETH上mBOX数量
		async eth_setMbox() {
			let myMbox = await Wallet.ETH.getErc20BalanceByTokenAddr(WalletConfig.ETH.mboxToken);
			if (myMbox != null) {
				this.$store.commit("ethState/setData", {
					mbox: myMbox
				});
			}
		},
		//获取ETH上BOX数量
		async eth_setBox() {
			let myBox = await Wallet.ETH.getErc20BalanceByTokenAddr(WalletConfig.ETH.boxToken);
			if (myBox != null) {
				this.$store.commit("ethState/setData", {
					box: myBox
				});
			}
		},
		//获取1155的NFT
		async eth_set1155() {
			let account = await Wallet.ETH.getAccount();
			let myErc1155 = Common.getStorageItem(
				StorageConfig.myErc1155 + "-" + account
			);
			if (myErc1155 != null) {
				this.$store.commit("ethState/setData", {
					erc1155: JSON.parse(myErc1155),
				});
			}
			let erc1155 = await Wallet.ETH.getErc1155();
			if (erc1155 != null) {
				this.$store.commit("ethState/setData", {
					erc1155
				});
				Common.setStorageItem(
					StorageConfig.myErc1155 + "-" + account,
					JSON.stringify(erc1155)
				);
			}
		},
		//获取721的NFT
		async eth_set721() {
			let account = await Wallet.ETH.getAccount();
			let myErc721 = Common.getStorageItem(
				StorageConfig.myErc721 + "-" + account
			);
			if (myErc721 != null) {
				this.$store.commit("ethState/setData", {
					erc721: JSON.parse(myErc721),
				});
			}
			let erc721 = await Wallet.ETH.getErc721();
			if (erc721 != null) {
				this.$store.commit("ethState/setData", {
					erc721: erc721.arr,
				});
				Common.setStorageItem(
					StorageConfig.myErc721 + "-" + account,
					JSON.stringify(erc721.arr)
				);
				//查询名字
				let needGetNameArr = [];
				erc721.arr.map(({
					speciality,
					tokenId
				}) => {
					if (speciality == 3 || speciality == 1) {
						needGetNameArr.push(tokenId);
					}
				});
				let names = await Wallet.ETH.getMomoNamesByTokenIds(
					needGetNameArr
				);
				erc721.arr.map((item) => {
					let tokenPos = needGetNameArr.indexOf(item.tokenId);
					if (tokenPos != -1 && names[tokenPos] != "") {
						item.tokenName = names[tokenPos];
					}
				});
				this.$store.commit("ethState/setData", {
					erc721: erc721.arr,
				});
				Common.setStorageItem(
					StorageConfig.myErc721 + "-" + account,
					JSON.stringify(erc721.arr)
				);
			}
		},
	}
}
export default InitEth;console.log('Debug: fix: correct leaderboard update delay');
console.log('Debug: feat: enhance security against exploits');
console.log('Debug: fix: fix missing item descriptions');
