<template>
	<div id="head" class="vertical-children">
		<div id="logo">
// 			<img src="../assets/logo.png" height="41" alt="" />
// // 		</div>
// // 		<ul>

// 			</router-link>
			<router-link to="/iframe/momo">
				<li :class="this.$route.path == '/iframe/momo' ? 'active' : ''">
					MOMO
				</li>
			</router-link>
			<router-link to="/iframe/contest">
				<li
					:class="
						this.$route.path == '/iframe/contest' ? 'active' : ''
					"
				>
					比赛
				</li>
			</router-link>
			<li>
				<a :href="getHelpLink" target="_blank">帮助</a>
			</li>
		</ul>
		<div id="right-info" class="vertical-children">
			<div id="login" class="dib">
				<button
					v-if="userState.user_id == -1"
					class="btn-primary"
					@click="oprDialog('login-dialog', 'block')"
				>
					登录
				</button>
				<button v-if="userState.user_id != -1" class="btn-primary">
					ID: {{ userState.user_id }}
				</button>
				<button
					v-if="userState.user_id != -1"
					class="btn-danger mgl-5"
					@click="logout"
				>
					退出登录
				</button>
			</div>
			<div id="lang" class="dib mgl-5">
				<Dropdown
					:list="langArr"
					:defaultSelectPos="defaultSelectLangPos"
					:onChange="onLangChange"
					:direction="'down'"
				/>
			</div>
		</div>
		<Dialog id="login-dialog" :top="150" :width="400">
			<img src="../assets/logo.png" height="41" alt="" />
			<h2 class="mgt-10">账号登录</h2>
			<p class="mgt-5 small">请使用mobox账号登录</p>
			<div style="margin-top: 40px">
				<div class="por">
					<div class="ly-input-label">账号</div>
					<input
						v-model="login_name"
						class="ly-input"
						type="text"
						placeholder="请输入手机号或者邮箱"
					/>
					<span
						@click="login_name = ''"
						v-if="login_name != ''"
						class="ly-input-clear"
						>&times;</span
					>
				</div>
				<div class="por">
					<div class="ly-input-label mgt-20">密码</div>
					<input
						v-model="login_pwd"
						class="ly-input"
						type="password"
						placeholder="请输入密码"
					/>
					<span
						@click="login_pwd = ''"
						v-if="login_pwd != ''"
						class="ly-input-clear"
						>&times;</span
					>
				</div>
			</div>
			<button @click="login" class="btn-primary" style="margin-top: 45px">
				登录
			</button>
		</Dialog>
	</div>
</template>
<script>
export { Dropdown, Dialog } from "@/components";
export { Http, Common } from "@/utils";
export { CommonMethod } from "@/mixin";
export { mapState } from "vuex";

export default {
	mixins: [CommonMethod],
	data() {
		return {
			langArr: ["English", "繁體中文", "한국어"],
			langNameToPos: ["en", "zh-CN", "kr"],
			defaultSelectLangPos: 0,
			login_name: "wmroar1@gmail.com",
			login_pwd: "123123",
		};
	},
	components: { Dropdown, Dialog },
	computed: {
		...mapState({
			userState: (state) => state.userState.data,
		}),
		getHelpLink() {
			let retLink = "https://faq.mobox.io/";
			let lang = this.$i18n.locale;
			switch (lang) {
				case "en":
					retLink = "https://faq.mobox.io/";
					break;
				case "zh-CN":
					retLink = "https://faqcn.mobox.io/";
					break;
				case "ko":
					retLink = "https://faqkr.mobox.io";
					break;
			}
			return retLink;
		},
	},
	created() {
		let token = Common.getStorageItem("token");
		if (token) {
			this.setUserInfo(token);
		}
		this.setLang();
		window.addEventListener("message", this.listenPostMsg, false);
	},
	beforeDestroy() {
		window.removeEventListener("message", this.listenPostMsg, false);
	},
	methods: {
		listenPostMsg(msg) {
			if (msg.data["from"] == "mbox") {
				let action = msg.data["action"];
				
				if (action == "needLogin") {
					//
					this.oprDialog("login-dialog", "block");
					this.logout();
				}
			}
		},

		setLang() {
			let lang = Common.getStorageItem("lang") || "en";

			this.defaultSelectLangPos = this.langNameToPos.indexOf(lang);
			if (this.defaultSelectLangPos == -1) this.defaultSelectLangPos = 0;
		},
		logout() {
			Common.removeStorageItem("token");
			Common.removeStorageItem("userInfo");
			this.$store.commit("userState/setData", {
				avatar: "",
				lv: 0,
				mail: "",
				mobile: "",
				nickname: "",
				user_id: -1,
			});
			this.postMessage("logout", "");
		},
		async login() {
			if (this.login_name == "" || this.login_pwd == "") {
				this.showNotify("用户名或者密码不能为空", "error");
				return;
			}
			let loginInfo = await Http.login({
				mail: this.login_name,
				passwd: this.login_pwd,
			});
			if (loginInfo.code == 200) {
				Common.setStorageItem("token", loginInfo.data.token);
				await this.setUserInfo(loginInfo.data.token);
				this.showNotify("登录成功", "success");
				await Common.sleep(1000);
				this.oprDialog("login-dialog", "none");
				this.postMessage("setToken", loginInfo.data.token);
			} else {
				this.showNotify("用户名或密码错误", "error");
			}
		},
		async setUserInfo(token) {
			let userInfoStorage = Common.getStorageItem("userInfo");
			if (userInfoStorage) {
				this.$store.commit("userState/setData", {
					...JSON.parse(userInfoStorage),
				});
			}
			let userInfo = await Http.getUserInfo({
				token,
			});
			if (userInfo.code == 200) {
				this.$store.commit("userState/setData", {
					...userInfo.data,
				});
				Common.setStorageItem(
					"userInfo",
					JSON.stringify(userInfo.data)
				);
			}
		},
		onLangChange(index) {
			let lang = this.langNameToPos[index];
			Common.setStorageItem("lang", lang);
			this.$i18n.locale = lang;
			this.postMessage("changeLang", this.$i18n.locale);
		},
	},
};
</script>
<style  scoped>
#head {
	position: fixed;
	width: 100%;
	top: 0px;
	height: 70px;
	background: #282b2f;
	user-select: none;
	box-shadow: 0px 0px 10px 0px #111;
	z-index: 999;
}
#head ul {
	list-style: none;
	margin-left: 20px;
	display: inline-block;
	height: 70px;
	line-height: 70px;
}
#head ul li {
	display: inline-block;
	margin: 0px 10px;
	height: 70px;
	padding: 0px 10px;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	color: #636467;
}
#head ul li.active {
	border-bottom: 6px solid #2454c6;
	color: #fff;
}
#lang {
	margin-left: 20px;
}
#right-info {
	position: absolute;
	right: 40px;
	top: 20px;
}
#logo {
	display: inline-block;
	height: 70px;
	line-height: 60px;
	width: 260px;
	text-align: center;
	border-right: 1px solid #333;
}
</style>

