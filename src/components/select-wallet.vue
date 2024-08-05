<template>
<transition name="bounce">
	<div class="wallet-login" v-if="isShow">
// 		<div class="mask" @click="close" />
// 		<div class="content">
// 			<div class="mobox-wallet">
// 				<div class="title">{{$t("Home_10")}}</div>
				<div @click="onSelect('mobox')">
					<div class="icon">
						<img src="@/assets/index/mwallet.png" />
					</div>
					<h5 class="name">MOBOX Wallet</h5>
				</div>
			</div>
			<!-- 其他钱包 -->
			<div class="wallet-list">
			<div class="title">{{$t("Home_12")}}</div>
				<ul>
					<li @click="onSelect('metamask')">
						<span class="icon">
							<img src="@/assets/index/metamask.png" />
						</span>
						<span class="name">Metamask</span>
					</li>
					<li @click="onSelect('coinbase')">
						<span class="icon">
							<img src="@/assets/index/coinbase.png" />
						</span>
						<span class="name">Coinbase Wallet</span>
					</li>
					<li @click="onSelect('trust-wallet')">
						<span class="icon">
							<img src="@/assets/index/trust.png"/>
						</span>
						<span class="name">Trust Wallet</span>
					</li>
				</ul>
				<ul>
					<li @click="onSelect('binance')">
						<span class="icon">
							<img src="@/assets/index/binance.png" />
						</span>
						<span class="name">BNB Chain Wallet</span>
					</li>
					<li @click="onSelect('token-pocket')">
						<span class="icon">
							<img src="@/assets/index/tokenpocket.png" />
						</span>
						<span class="name">Token Pocket</span>
					</li>
					<li @click="onSelect('wallet-connect')">
						<span class="icon">
							<img src="@/assets/index/walletconnect.png" />
						</span>
						<span class="name">Wallet Connect</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</transition>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
		};
	},
	methods: {
		// 显示
		show() {
			this.isShow = true;
		},
		// 关闭
		close() {
			this.isShow = false;
			// 动画结束后销毁
			setTimeout(() => {
				this.$destroy();
				document.body.removeChild(this.$el);
			}, 300);
		},
		// 选择钱包
		onSelect(wallet) {
			this.$emit('selected', wallet);
			this.close();
		},
	},
};
</script>

<style lang="less" scoped>

// 移动端
@media (max-width: 420px) {
	.content {
		width: 90%;
	}
}

// pc端
@media (min-width: 420px) {
	.content {
		width: 397px;
	}
}

.wallet-login,
.mask {
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	cursor: pointer;
}
.wallet-login {
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
}

.mask {
	position: absolute;
	background: rgba(0, 0, 0, 0.8);
}

.content {
	position: relative;
	z-index: 99;
	border-radius: 15px;
	background: #1c222c;
	overflow: hidden;
	text-align: center;

	.title {
		font-size: 22px;
		font-weight: bold;
		color: #ffffff;
		padding-bottom: 40px;
	}
}

.mobox-wallet {
	padding: 40px 0;

	.icon {
		width: 76px;
		height: 76px;
		background: #ffffff;
		margin: 0 auto 5px auto;
		border-radius: 100%;

		img {
			width: 100%;
		}
	}

	.name {
		margin: 25px 0 0 0;
		font-size: 16px;
		font-weight: bold;
		line-height: 19px;
		color: #ffffff;
	}
}

.wallet-list {
	background: #14181e;
	padding-bottom: 35px;

	.title {
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: bold;
		line-height: 22px;
		color: #ffffff;
		letter-spacing: 2px;
		padding: 20px 0;
	}

	ul {
		width: 330px;
		margin: 0 auto 15px auto;
		text-align: left;

		li {
			width: 110px;
			text-align: center;
			display: inline-block;
			cursor: pointer;
			transition: opacity 0.2s;

			&:hover {
				opacity: 0.7;
			}
		}
	}

	.icon {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		background: white;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 25px;
		}
	}

	.name {
		margin-top: 8px;
		color: #ffffff;
		font-weight: bold;
		font-size: 12px;
		display: block;
	}
}

// 过度动画
.bounce-enter-active,
.bounce-leave-active {
	transition: opacity 0.3s;

	.mask {
		transition: opacity 0.3s;
	}

	.content {
		transition: transform 0.3s, opacity 0.3s;
	}
}

.bounce-enter .content,
.bounce-leave-to .content,
.bounce-enter .mask,
.bounce-leave-to .mask {
	opacity: 0;
}

.bounce-enter .content,
.bounce-leave-to .content {
	transform: translateY(-30px);
}
</style>
return null;
