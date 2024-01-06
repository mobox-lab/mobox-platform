// <template>
// // 		<div class="background"></div>
// // // 		<!-- logo -->
// // 			<img @click="backHome()" style="cursor:pointer" src="../../assets/head1.png" alt="" />
// 			<!-- <div class="title">
// 				<h5>Trade Action</h5>
				<h6>Bulls VS.{{$route.path}} Bears</h6>
		</div>
			<div class="menu-contact-landing">
				<a target="_blank" href="https://twitter.com/MOBOX_Official"><img type="twitter" src="@/assets/index/twitter.webp"></a>
				<a target="_blank" href="https://t.me/mobox_io"><img type="tele" src="@/assets/index/telegram.webp"></a>
				<!-- <a target="_blank" href="https://open.kakao.com/o/g82ljd4b"><img type="kakao" src="@/assets/index/kakao.webp"></a> -->
				<a target="_blank" href="https://discord.com/invite/mobox"><img type="kakao" src="@/assets/index/discord.png"></a>
				<!-- <a target="_blank" href="https://m.weibo.cn/status/4495842515471242?wm=3333_2001&from=10A3293010&sourcetype=dingding&featurecode=newtitle"><img type="weibo" src="@/assets/index/weibo.png"></a> -->
				<div class="link">
					<img class="icon" type="weibo" src="@/assets/index/wechat.png">
					<img class="code" src="@/assets/index/homeqrcode.jpg" alt="">
				</div>
			</div>

			<!-- 右侧菜单 -->
            <ul class="menu" style="justify-content:center;align-items:center;" v-if="userInfo.user_id">
                <li class="user-info">
                        <div class="user-head">
                            <img src="../../assets/icon/userSystem/head.png" alt="">
                        </div>
                        <span>{{userInfo.nickname || userInfo.user_id}}</span>
                </li>
                <li @click="logout">{{$t('Register_40')}}</li>
            </ul>
            <ul class="menu" v-else>
                <li @click="toggleLoginModal">{{$t('Home_7')}}</li>
                <li @click="showShowRegister" class="register">{{$t('Home_8')}}</li>
            </ul>

            <ul class="menu">
                <!-- <li class="connect-wallet">Connect wallet</li> -->
                <li>
                    <Dropdown
                        :list="langArr"
                        :defaultSelectPos="defaultSelectLangPos"
                        :onChange="onLangChange"
                        :direction="'down'"
                    />
                </li>
            </ul>
        </div>

	<!-- <Advertise :isShowMask="true" /> -->
	<!-- <Activity v-model="isShowCmc" /> -->
	<Activity ref="activity" />

	<!-- bianance合作弹窗 -->
	<Dialog v-model="isShowBindBinance">
		<div class="whole-bg">
			<img class="head-img-1" width="177" src="@/assets/alliance/box.png" alt="">
			<!-- <img class="head-img-2" src="@/assets/landing/elements/flags.png" alt=""> -->
			<img @click="showBindBinance(false)" width="12" class="close-btn-3" src="@/assets/landing/elements/closebtn2.png" alt="">

			<div class="claim-binance-bg">
				<div class="claim-head-bg">
					<div class="claim-title" :data-text="$t('Treasure_3')">{{$t('Treasure_3')}}</div>
					<!-- <div class="h1">{{$t('Landing_123')}}</div>
					<div class="h2" v-html="$t('Landing_124').replace('#0#', `<span style='color:rgb(168,235,252);'>3</span>`).replace('#1#', `<span style='color:rgb(168,235,252);'>X2</span>`)"></div> -->
				</div>
				
				<div class="input-contain">
					<div class="enter-box">
						<InputItem
							label=""
							:placeholder="$t('Treasure_4')"
							v-model="secretCode"
						/>
					</div>
					<div class="enter-box">
						<div class="address-box">{{getAddress}}</div>
						<div @click="startBind" class="confirm-btn">{{$t('Treasure_6')}}</div>
					</div>
				</div>
			</div>
		</div>
	</Dialog>

	<Dialog v-model="isShowBinanceRes">
		<div class="whole-bg">
			<img class="head-img-1" width="177" src="@/assets/alliance/box.png" alt="">
			<!-- <img class="head-img-2" src="@/assets/landing/elements/flags.png" alt=""> -->

			<div class="claim-binance-bg">
				<div class="claim-head-bg">
					<!-- <div class="claim-title" :data-text="getCodeResLang">{{getCodeResLang}}</div> -->
					<div class="claim-title" :data-text="$t('Treasure_7')">{{$t('Treasure_7')}}</div>
					<div class="claim-title" :data-text="$t('Treasure_8')">{{$t('Treasure_8')}}</div>
					<!-- <div class="h1">{{$t('Landing_123')}}</div>
					<div class="h2" v-html="$t('Landing_124').replace('#0#', `<span style='color:rgb(168,235,252);'>3</span>`).replace('#1#', `<span style='color:rgb(168,235,252);'>X2</span>`)"></div> -->
				</div>
				
				<div class="input-contain">
					<div class="btns">
						<div @click="showBinanceRes(false)" class="binan-btn" style="background:linear-gradient(149deg, #f4bc35, #e58b04);">{{$t('Treasure_9')}}</div>
						<div @click="toHome" class="binan-btn">{{$t('Treasure_10')}}</div>
					</div>
				</div>
			</div>
		</div>
	</Dialog>

	<Dialog v-model="isShowBinanceFailed">
		<div class="whole-bg">
			<img class="head-img-1" width="177" src="@/assets/alliance/box.png" alt="">

			<div class="claim-binance-bg">
				<div class="claim-head-bg">
					<div class="claim-title" :data-text="$t('Treasure_13')">{{$t('Treasure_13')}}</div>
				</div>
				
				<div class="input-contain">
					<div class="btns">
						<div @click="tryAgainCode" class="binan-btn" style="background:linear-gradient(149deg, #f4bc35, #e58b04);">{{$t('Treasure_11')}}</div>
						<div @click="toBinance" class="binan-btn">{{$t('Treasure_12')}}</div>
					</div>
				</div>
			</div>
		</div>
	</Dialog>
	
    <!-- 登录 -->
    <Dialog v-model="isShowLogin">
      <Login />
    </Dialog>
	<!-- 密码找回 -->
	<Dialog v-model="isShowPwsForgot">
		<Binder :type="binderType" />
	</Dialog>
	<!-- 绑定去中心化钱包 -->
	<Dialog v-model="isShowBindWallet">
		<!-- <BindWallet v-bind:shouldOpenBox="shouldOpenBox" v-bind:isSendBindRequest="isSendBindRequest" /> -->
		<BindWallet v-bind:isSendBindRequest="isSendBindRequest" />
	</Dialog>
	<!-- 领取box -->
	<Dialog v-model="isShowBoxes">
		<GetBoxes />
	</Dialog>
	<!-- 确认框 -->
	<Dialog v-model="isShowConfirm">
		<Confirm :title="confirmInfo.title" :msg="confirmInfo.msg" :callback="confirmInfo.callback" />
	</Dialog>
	<!-- 充值框 -->
	<Dialog v-model="isShowDeposite">
		<ReceiveBox ref="receivebox" :selectCoin="selectCoin" :chainIdx="chainIdx" :switchChainIdx="switchChainIdx" />
	</Dialog>



	<!-- 充值框 -->
	<Dialog v-model="isShowClaimBox">
		<div class="whole-bg">
			<img class="head-img-1" width="177" src="@/assets/landing/elements/claimbox.png" alt="">

			<div class="claim-bg">
				<img @click="showClaimBox(false)" width="12" class="close-btn" src="@/assets/landing/elements/closebtn.png" alt="">
				<div class="claim-head-bg">
					<div class="h1">{{$t('Landing_117')}}</div>
					<div class="h2">{{$t('Landing_118')}}</div>
				</div>

				<div class="input-contain">
					<div class="input-box">
						<input v-model="email" :placeholder="$t('Register_5')">
						<div @click="sendCode" :class="`input-btn ${isEmailValid ? `` : `disabled`}`">{{getSendCodeText}}</div>
					</div>
					<div class="input-box">
						<input v-model="code" :placeholder="$t('Register_7')">
						<div @click="sendInviteCode" style="background:rgb(84,165,246)" :class="`input-btn ${isInviteValid ? `` : `disabled`}`">{{$t('Landing_122')}}</div>
					</div>
				</div>
			</div>
		</div>
	</Dialog>

	<!-- 分享框 -->
	<Dialog v-model="isShowShareBox">
		<div class="whole-bg">
			<img class="head-img-1" width="177" src="@/assets/landing/elements/balls.png" alt="">
			<img class="head-img-2" src="@/assets/landing/elements/flags.png" alt="">
			<img @click="showShareBox(false)" width="12" class="close-btn-2" src="@/assets/landing/elements/closebtn.png" alt="">

			<div class="claim-bg">
				<div class="claim-head-bg">
					<div class="h1">{{$t('Landing_123')}}</div>
					<div class="h2" v-html="$t('Landing_124').replace('#0#', `<span style='color:rgb(168,235,252);'>3</span>`).replace('#1#', `<span style='color:rgb(168,235,252);'>X2</span>`)"></div>
				</div>

				<div class="input-contain">
					<div class="invite-link-box">
						<div class="link">{{shareLink}}</div>
						<div @click="copyAddress" style="background:rgb(84,165,246)" class="copy-btn">{{$t('Setting_87')}}</div>
					</div>
				</div>

				<div class="share-text">- {{$t('Landing_127')}} -</div>
				<div class="share-area">
					<div class="components vertical-children">
						<img src="@/assets/landing/elements/friends.png" alt="">
						<span v-html="$t('Landing_128').replace('#0#', `<span class='mark'>${shareMan}</span>`)"></span>
					</div>

					<div class="components vertical-children">
						<img src="@/assets/landing/elements/multi.png" alt="">
						<span v-html="$t('Landing_129').replace('#0#', `<span class='mark' style='color:#77C10E'>${getShareCont} x</span>`)"></span>
					</div>
				</div>
			</div>
		</div>
	</Dialog>

	<!-- 下载框 -->
	<Dialog v-model="isShowDownPage">
		<div class="whole-bg">
			<img class="head-img-1" width="277" src="@/assets/landing/elements/download.png" alt="">
			<img @click="showDownPage(false)" width="12" class="close-btn-2" src="@/assets/landing/elements/closebtn.png" alt="">

			<div class="claim-bg">
				<div class="claim-head-bg">
					<div class="h4">{{$t('Landing_147')}}</div>
					<div class="h4" style="font-size:16px;">{{$t('Landing_148')}}</div>
					<!-- <div class="h2" v-html="$t('Landing_124').replace('#0#', `<span style='color:rgb(168,235,252);'>3</span>`).replace('#1#', `<span style='color:rgb(168,235,252);'>X2</span>`)"></div> -->
				</div>

				<div class="download-contain">
					<div @click="downAndorid" class="down-btn-1" style="margin-right:20px">
						<img width="20" height="23" src="@/assets/landing/elements/andorid.png" alt="">
						<div>{{$t('Home_33')}}</div>
					</div>
					<div @click="downIOS" class="down-btn-2">
						<img width="20" height="23" src="@/assets/index/ios.png" alt="">
						<div>{{$t('Home_32')}}</div>
					</div>
				</div>
			</div>
		</div>
	</Dialog>

	</header>
</template>

<script>
export { Dropdown } from "@/components";
export { Common } from "@/utils";
export { CommonMethod } from "@/mixin";
export { mapState } from "vuex";
export Dialog from '../Dialog';
export Login from '../Header/Login/index';
export Binder from '../Header/Binder/index';
export BindWallet from '../Header/BindWallet/index';
export GetBoxes from '../Header/GetBoxes/index';
export Confirm from '../Header/Confirm/index';
export InputItem from '../Header/Input';
export ReceiveBox from '@/components/ReceiveBox/index.vue';
// export Advertise from '@/components/Advertise/index.vue';
export Activity from '@/components/Activity/index.vue';

// export head1 from '../../assets/head1.png';
// export head2 from '../../assets/head2.png';
// export head3 from '../../assets/head3.png';

export { sendEmailCode } from '@/services/sendCode';
export request from "@/utils/request";
export { LOGINHEAD, API_USER_INFO, API_AIRDROP_GENCODE, API_BINANCE_CODE} from '@/utils/constant';
// export TradePasswordVue from '../Header/Register/TradePassword.vue';

export default {
	mixins: [CommonMethod],
  components: {
		Dialog,
		Login,
		Dropdown,
		Binder,
		BindWallet,
		GetBoxes,
		Confirm,
		InputItem,
		ReceiveBox,
		// Advertise,
		Activity
	},
	data() {
		return {
			
			langArr: ["English", "繁體中文", "한국어"],
			langNameToPos: ["en", "zh-CN", "kr"],
			defaultSelectLangPos: 0,
			
			isShowRegister: false,
			
			isShowLogin: false,
			
			isShowPwsForgot: false,
			binderType:"password",

			
			isShowBindWallet:false,
			
			isSendBindRequest:0,
			isShowBindBinance:false,
			isShowBinanceRes:false,
			isShowBinanceFailed:false,
			secretCode:'',

			
			isShowBoxes: false,
			shouldOpenBox:false,

			
			isShowConfirm : false,
			isShowDeposite : false,

			isShowDownPage : false,

			confirmInfo:{
				title:'',
				msg:''
			},

			toggleOepn:false,

			selectCoin:{
                symbol:'win',
                chainTypes:[
                    'eth',
                    'bnb',
                    'trx'
                ],
                balance:0,
            },
			chainIdx:0,

			isShowClaimBox:false,
			email : '',
			code: '',
			bscAddress:'',

			isShowShareBox:false,
			shareLink:'http',
			shareMan:0,

			t1:null,
			times:0,
			canSendCode : true
		};
	},
	methods: {
		toBinance(){
			window.open('https://www.binance.com/en/nft/blindBox/detail?productId=116861468145843200')
		},
		tryAgainCode(){
			this.showBinanceFailed(false);
			this.showBindBinance();
		},
		toHome(){
			window.open("https://mobox.io")
		},
		async startBind(){
			const {wallets} = this.userInfo;
            console.log(wallets.length);

			if(!this.secretCode) {
				// this.showNotify(this.$t(`Error_10`), "error");
				this.showNotify("请先输入码", "error");
			} else {
				if(!wallets || wallets.length <= 0){
					this.$root.eventHub.$emit('landing-claimbox-3');
				} else {
					if(this.secretCode === "MO-ALLIANCE-MO") {
						try{
							const data = {
								bcode:this.secretCode
							};
		
							const res = await request(API_BINANCE_CODE, {
								method: 'POST',
								data
							});

							if(res.code == 200){
								this.showBindBinance(false);
								this.showBinanceRes();
							}
						}catch(error){
							if (error.code) {
								this.showNotify(this.$t(`Error_${error.code}`),"error");
							} else {
								this.showNotify(this.$t(`Error_10`), "error");
							}
						}
					} else {
						this.showBindBinance(false);
						this.showBinanceFailed();
					}
				}
			}
		},
		showBindBinance(isOpen = true){
			this.isShowBindBinance = isOpen;
		},
		showBinanceRes(isOpen = true){
			this.isShowBinanceRes = isOpen;
		},
		showBinanceFailed(isOpen = true){
			this.isShowBinanceFailed = isOpen;
		},
		downIOS(){
			// console.log(Common.getStorageItem("lang"))
			const isCN = Common.getStorageItem("lang") === "zh-CN";
			if(isCN){
				// window.open('https://testflight.apple.com/join/abV2hPXU')
				window.open('https://testflight.apple.com/join/zusuXNhi')
			} else {
				// window.open('https://apps.apple.com/app/mobox-wallet/id1545109501?l=en')
				// window.open('https://testflight.apple.com/join/abV2hPXU')
				window.open('https://apps.apple.com/us/app/mobox-wallet/id1545109501')
			}
		},
		downAndorid(){
			window.open('https://www.mobox.io/download/app-release.apk')
		},
		setCd(){
			clearInterval(this.t1);
			this.canSendCode = false
			this.times = 60;
			this.t1 = setInterval(() => {
				this.times--;
				if(this.times<=0){
					this.times = 0;
					clearInterval(this.t1);
					this.canSendCode = true;
				}
			}, 1000);
		},
		copyAddress(){
			Common.copyTextBoard(this.shareLink);
            this.showNotify(this.$t('Asset_23'), "success");
		},
		async sendCode(){
			if(this.isEmailValid){
				try {
					this.setCd(); 
					await sendEmailCode(this.email, 'MAIL_VERIFY');
				} catch(error) {
					if (error.code) {
						this.showNotify(this.$t(`Error_${error.code}`), 'error');
					} else {
						this.showNotify(this.$t('Error_6'), 'error');
					}

					throw error;
				}
			}
		},
		async sendInviteCode(){
			if(this.isInviteValid){
				const source = Common.getUrlParams('source')
				try{
                    const data = {
						mail:this.email,
						address:this.bscAddress,
						verify_code : this.code,
					}
					if(source){
						data.source = source
					}
                    const res = await request(API_AIRDROP_GENCODE, {
                        method: 'POST',
                        data
                    });

                    if(res.code == 200){
						this.showClaimBox(false);
						this.showShareBox(true);

						
						this.shareLink = res.data.url;
						this.shareMan = 0;
					}
                    return true
                }catch(error){
                    if (error.code) {
						this.showNotify(this.$t(`Error_${error.code}`),"error");
					} else {
						this.showNotify(this.$t(`Error_10`), "error");
					}
                }
			}
		},
		showClaimBox(isShow){
			this.isShowClaimBox = isShow;
		},
		showShareBox(isShow){
			this.isShowShareBox = isShow;
		},
		showDownPage(isShow){
			this.isShowDownPage = isShow;
		},
        backHome(){
            location.reload();
        },
		switchChainIdx(idx){
            this.chainIdx = idx;
            this.$refs.receivebox.createQrCode(this.selectCoin.chainTypes[this.chainIdx]);
        },
		openToggle(isOpen){
			this.toggleOepn = isOpen;
		},
		showPwdForgot(){
			this.binderType = "password";
			this.isShowPwsForgot = true;
		},
		hidePwdForgot(){
			this.isShowPwsForgot = false;
		},
		
		showShowRegister() {
			// this.isShowRegister = true;

			window.location.href = `${LOGINHEAD}register/phone?redirect=${encodeURIComponent(window.location.href)}`;
		},
		closeModal(){
			const {wallets} = this.userInfo;
			if(!wallets || !wallets.length) {
				this.isSendBindRequest = true;
				this.isShowBindWallet = true;
			} else {
				// 
				this.showNotify(this.$t("Landing_118"), "error")
				
				// this.$refs.activity.showAndClean()
			}
			
			this.isShowPwsForgot = false;
		},
		close() {
			
			
			// const {mail, mobile} = this.userInfo;
			// if(!mail || !mobile) {
			// 	this.binderType = !mail ? "mail" : "mobile";
			// 	this.isShowPwsForgot = true;
			// } else {
			// 	this.isSendBindRequest = true;
			// 	this.isShowBindWallet = true;
			// }

			

			// this.showBindBinance();
			if(this.$router.history.current.name === "alliance"){
				this.showBindBinance();
			} else{
				this.showDownPage(true);
			}

			this.isShowRegister = false;
		},
		
		toggleLoginModal() {
			// this.isShowLogin = !this.isShowLogin;
			window.location.href = `${LOGINHEAD}?redirect=${encodeURIComponent(window.location.href)}`
		},
		
		logout() {
			this.$store.commit('userState/logout');

			if(this.$route.path === '/userCenter' || this.$route.path === 'assetCenter'){
				this.$router.push('/');
			}
		},
		
		messageListen(message) {
			const data = message.data;

			if (data.from == 'mbox' && data.action == 'needLogin') {
				this.isShowLogin = true;
				this.logout();
			}
			if (data.from == 'mbox' && data.action == 'getUserInfo') {
				this.getUserInfo()
			}
			if (data.from == 'mbox' && data.action == 'needBindMobile') {
				if(!this.userInfo.mobile || !this.userInfo.mail){
					this.$store.commit("globalState/addNotify", {
						msg: this.$t('Error_12'),
						type: "error",
					})

					const type = !this.userInfo.mail ? "mail" : "mobile";

					this.binderType = type;
					this.isShowPwsForgot = true;
				}
			}
			if (data.from == 'mbox' && data.action == "ShowMeTheMoney") {
				this.isShowDeposite = true;
				this.switchChainIdx(0);
			}
		},
		beforeDestroy() {
			clearInterval(this.t1)
			window.removeEventListener('message', this.messageListen, false);
		},
		
		setLang() {
			let lang = Common.getStorageItem("lang") || "en";
			this.$store.commit("globalState/setLang", lang);

			this.defaultSelectLangPos = this.langNameToPos.indexOf(lang);
			if (this.defaultSelectLangPos == -1) this.defaultSelectLangPos = 0;
		},
		
		onLangChange(index) {
			let lang = this.langNameToPos[index];
			this.$store.commit("globalState/setLang", lang);
			Common.setStorageItem("lang", lang);
			this.$i18n.locale = lang;
			this.postMessage("changeLang", this.$i18n.locale);
		},
		async getUserInfo(){
			const token = this.$store.state.userState.token;
			if(token){
				try{
					const res = await request(API_USER_INFO, {
						method: 'POST',
					});
		
					this.$store.commit('userState/setUserInfo', res.data);
					this.postMessage("setUserInfo", res.data);
					console.log("ininfinint")
					console.log(res)
				}catch(e){
					console.log(e)
				}
			}
		},
	},
	computed: {
		...mapState({
			userInfo: (state) => {
				return state.userState.userInfo;
			},
		}),

		getAddress(){
			const { wallets } = this.userInfo;	
			if(!wallets || !wallets[0]){
				return this.$t('Treasure_5')
			} else{
				return Common.getCutStr(wallets[0], 20, true)
			}
		},

		getShareCont(){
			const amount = 2 * Math.floor(this.shareMan/3);
			return amount <= 0 ? 1 : amount;
		},

		getSendCodeText(){
			if(this.times <= 0){
				return this.$t('Landing_120')
			} else {
				return this.times + 's'
			}
		},

		isEmailValid() {
			return /\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{1,30}/.test(this.email) && this.canSendCode;
		},

		isInviteValid() {
			return /\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{1,30}/.test(this.email) && this.code.length === 6
		},

		// getHead(){
		// 	const route = this.$route.path;
		// 	if(route === "/iframe/contest") {
		// 		return head2
		// 	} else if(route === "/iframe/momo") {
		// 		return head3
		// 	} else {
		// 		return head1
		// 	}
		// },

		// getHeadClass(){
		// 	const route = this.$route.path;
		// 	return route === "/" ?  '' : 'head-bg'
		// }
	},
	created() {
		window.addEventListener('message', this.messageListen, false);
		this.setLang();

		this.$root.eventHub.$on('showDownPage', () => {
			this.showDownPage(true);
		});

		this.$root.eventHub.$on('landing-claimbox',(shouldOpenBox = false)=>{
			const {user_id, wallets} = this.userInfo;
			
			if(user_id){
				if(wallets && wallets[0]){
					this.isShowBoxes = true
					console.log("bindwallet now")
				} else {
					this.shouldOpenBox = shouldOpenBox;
					this.isShowBindWallet = true;
					this.isSendBindRequest = 1;
				}
			} else {
				this.isShowLogin = true;
			}
		})

		this.$root.eventHub.$on('landing-claimbox-2',()=>{
			const {user_id} = this.userInfo;
			
			if(user_id){
				this.isSendBindRequest = 0;
				this.isShowBindWallet = true;
			} else {
				this.isShowLogin = true;
			}
		})

		this.$root.eventHub.$on('landing-claimbox-3',()=>{
			const {user_id} = this.userInfo;
			
			if(user_id){
				this.isSendBindRequest = 1;
				this.isShowBindWallet = true;
			} else {
				this.isShowLogin = true;
			}
		})

		this.$root.eventHub.$on('bind-address',(cb)=>{
			this.shouldOpenBox = false;
			this.isShowBindWallet = true;
			if(cb) {
        this.isSendBindRequest = 2;
      } else {
        this.isSendBindRequest = 1;
      }
		})

		// this.$root.eventHub.$on('claim-box',(link, bscAddress, shareMan)=>{
		// 	if(link){
		// 		this.shareLink = link;
		// 		this.shareMan = shareMan;
		// 		this.showShareBox(true);
		// 	} else {
		// 		// this.showShareBox(true);
		// 		this.bscAddress = bscAddress;
		// 		this.showClaimBox(true);
		// 	}
		// })

		this.$root.eventHub.$on('binance-claim',()=>{
			const {user_id} = this.userInfo;

			if(user_id){
				this.showBindBinance();
			} else {
				// this.isShowRegister = true;
				// const source = Number(Common.getUrlParams('source'))
				// if(source){
				// 	this.$refs.register.initSource(source);
				// }

				this.isShowLogin = true;
			}
		})

		this.$root.eventHub.$on('claim-box',()=>{
			// this.userInfo.mobile = true;
			// const {user_id, mail, mobile, wallets} = this.userInfo;
			const {user_id} = this.userInfo;
			if(user_id){
				// --
				this.showDownPage(true);

				
				// if(!mail || !mobile){
				// 	this.binderType = !mail ? "mail" : "mobile";
				// 	this.isShowPwsForgot = true;
				// } else if(!wallets || !wallets.length){
				// 	this.isSendBindRequest = true;
				// 	this.isShowBindWallet = true;	
				// } else {
				
				// 	// this.showNotify(this.$t("Landing_118"), "error")
				
				// 	this.$refs.activity.showAndClean()
				// }
			} else {
				this.$root.$children[0].isShowWalletLogin = true;
				// this.isShowRegister = true;
				// const source = Number(Common.getUrlParams('source'))
				// if(source){
				// 	this.$refs.register.initSource(source);
				// }
				// this.openSource();
				// this.isShowRegister = true;
				// this.$refs.register.initSource("CMCAIRDROP");
			}
		})

		this.$root.eventHub.$on('confrim-box', (info, cb)=>{
			this.confirmInfo = info;
			this.confirmInfo.callback = cb;

			this.isShowConfirm = true;
		})
	},
	mounted(){
		this.getUserInfo();
		this.$store.dispatch('userState/getBindAddressInfo');
	}
}
</script>

<style lang="less" scoped>
	.menu-contact-landing{
		margin-right: 20px;
		a{
			display: inline-block;
			vertical-align: middle;
			img{
				cursor: pointer;
				margin: 0 5px;
				vertical-align: middle;
				height: 20px;
			}
		}

		.link{
			display: inline-block;
			vertical-align: middle;
			position: relative;
			overflow: hidden;
			
			.icon{
				cursor: pointer;
				margin: 0 5px;
				vertical-align: middle;
				height: 28px;
			}

			.code{
				position: absolute;
				width: 200px;
				top: 35px;
				left: 50%;
				transform: translate(-50%, 0);

				opacity: 0;
				transition: 0.2s all;
			}
		}

		.link:hover{
			overflow: initial;
			.code{
				opacity: 1;
			}
		}
	}

	.whole-bg{
		text-align: center;

		.close-btn-2{
			position: absolute;
			top: 153px;
			right: 10px;
			cursor: pointer;
			z-index: 5;
		}

		.close-btn-3{
			position: absolute;
			top: 114px;
			right: 10px;
			cursor: pointer;
			z-index: 5;
		}

		.head-img-1{
			margin-bottom: -113px;
			padding-bottom: 40px;
			position: relative;
			z-index: 5;
		}

		.head-img-2{
			position: absolute;
			width: 100%;
			left: 0;
			top: 30px;
			z-index: 5;
		}
	}
	
	.claim-bg{
		background: white;
		// min-width: 450px;
		max-width: 100%;
		width: 600px;
		text-align: center;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		text-align: center;

		.close-btn{
			position: absolute;
			top: 10px;
			right: 10px;
			cursor: pointer;
		}

		.disabled{
			opacity: 0.3;
			cursor: default!exportant;;
		}

		.claim-head-bg{
			padding: 60px 0 20px 0;
			background: #C6B277;
		}

		.h1{
			font-size: 22px;
			font-family: SAF;
			// font-weight: bold;
			color: #FFFFFF;
			// -webkit-text-stroke: 1px #825F0D;
			-webkit-text-shadow: 0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
			text-shadow: 0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
			margin: 0 auto 20px auto;
		}

		.h4{
			font-size: 22px;
			font-family: SAF;
			// font-weight: bold;
			color: #FFFFFF;
			// -webkit-text-stroke: 1px #825F0D;
			-webkit-text-shadow: 0 1.5px #825f0d, 1.5px 0 #825f0d, -1.5px 0 #825f0d, 0 -1.5px #825f0d;
			text-shadow: 0 1.5px #825f0d, 1.5px 0 #825f0d, -1.5px 0 #825f0d, 0 -1.5px #825f0d;
			margin: 0 auto 20px auto;
		}

		.h2{
			margin: auto;
			font-size: 15px;
			max-width: 300px;
			font-family: sans-serif;
			// font-weight: bold;
			// color: #FDEFC7;
			color: #FDEFC7;
			// -webkit-text-stroke: 1px #825F0D;
			-webkit-text-shadow:  0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
			// #825f0d 2px 0 0, #825f0d 0 2px 0, #825f0d -1px 0 0, #825f0d 0 -1px 0;
			// text-shadow: #825f0d 2px 0 0, #825f0d 0 2px 0, #825f0d -1px 0 0, #825f0d 0 -1px 0;
			text-shadow: 0 1px #825f0d, 1px 0 #825f0d, -1px 0 #825f0d, 0 -1px #825f0d;
		}

		.input-contain{
			padding: 15px 60px 5px 60px;
		}

		.download-contain{
			padding: 15px 60px 5px 60px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 20px;

			.down-btn-1{
				// background: linear-gradient(149deg, #01FAFF, #01FAFF, #FFFC01, #FFFFFF, #FC9B65, #56A6F6, #3E79CE);
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				padding: 10px 20px;
				background: -webkit-linear-gradient(left top, rgb(86,166,246) , rgb(61,121,206));
				box-shadow: 0px 3px 3px 0px rgba(42, 68, 127, 0.28);
				border-radius: 5px;

				img{
					width: 20px;
					margin-right: 10px;
				}
			}

			.down-btn-2{
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;

				padding: 10px 20px;
				background: -webkit-linear-gradient(left top, rgb(125,94,27) , rgb(93,67,9));
				box-shadow: 0px 3px 3px 0px rgba(42, 68, 127, 0.28);
				border-radius: 5px;

				img{
					width: 20px;
					margin-right: 10px;
				}
			}
		}

		.share-text{
			font-size: 18px;
			font-family: saf;
			color: #3E7ACF;
		}

		.share-area{
			margin: 20px 0 30px 0;

			.components{
				display: inline-block;
				color: #3E7ACF;
				font-weight: 800;
				margin: 0px 12px;

				img{
					width: 16px;
					margin-right: 8px;
				}

				/deep/ .mark{
					vertical-align:baseline;
					font-size: 20px;
				}
			}
		}

		.invite-link-box{
			margin: 40px 0 20px 0;
			padding: 13px 80px 13px 10px;
			border-radius: 5px;
			border: 1px solid #DAE5FF;
			box-shadow: 0px 4px 11px 0px rgba(37, 61, 128, 0.1);
			display: block;
			position: relative;

			.link{
				text-align: left;
				font-size: 12px;
				font-family: SF UI Text;
				font-weight: 500;
				color: #3E7ACF;
			}

			.copy-btn{
				transition: 0.2s all;
				position: absolute;
				cursor: pointer;
				right: 5px;
				top: 50%;
				transform: translate(0, -50%);

				font-family: saf;
				padding: 7px;
				min-width: 60px;
				text-align: center;
				background: rgb(125, 94, 27);
				box-shadow: 0px 3px 3px 0px rgba(93, 67, 9, 0.28);
				border-radius: 5px;
			}
		}

		.input-box{
			margin: 15px 0;
			padding: 13px 80px 13px 10px;
			border-radius: 5px;
			border: 1px solid #DAE5FF;
			box-shadow: 0px 4px 11px 0px rgba(37, 61, 128, 0.1);
			display: block;
			position: relative;

			input{
				width: 100%;
				border: none;
				background: transparent;
			}

			input:focus{
				outline: none;
			}

			.input-btn{
				transition: 0.2s all;
				position: absolute;
				cursor: pointer;
				right: 5px;
				top: 50%;
				transform: translate(0, -50%);

				font-family: saf;
				padding: 7px;
				min-width: 60px;
				text-align: center;
				background: rgb(125, 94, 27);
				box-shadow: 0px 3px 3px 0px rgba(93, 67, 9, 0.28);
				border-radius: 5px;
			}
		}
	}

	.claim-binance-bg{
		background: white;
		// min-width: 450px;
		max-width: 100%;
		width: 600px;
		text-align: center;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		text-align: center;

		.close-btn{
			position: absolute;
			top: 10px;
			right: 10px;
			cursor: pointer;
		}

		.disabled{
			opacity: 0.3;
			cursor: default!exportant;;
		}

		.claim-head-bg{
			padding: 60px 0 20px 0;
			background: #C6B277;
			background: linear-gradient(149deg, #56a6f6, #3e79ce);

			.claim-title{
				font-size: 40px;
				color: #FFF;
				font-family: 'robat-b';

				position: relative;
				z-index: 1;
			}

			.claim-title::before{
				content: attr(data-text);
				position: absolute;
				-webkit-text-stroke: 5px #0035BB;
				z-index: -1;
				width: 100%;
				top: 0;
				left: 0;
			}
		}

		.input-contain{
			padding: 10px 60px;

			.enter-box{
				// width: 321px;
				// height: 37px;
				background: #FFFFFF;
				border: 1px solid #DAE5FF;
				box-shadow: 0px 4px 11px 0px rgba(37, 61, 128, 0.1);
				border-radius: 5px;
				padding: 0 80px 0 10px;

				margin: 15px 0;
				position: relative;

				/deep/ .input .input-box input{
					font-family: 'robat-r'!exportant;
					font-size: 14px;
				}

				.input{
					margin: 0px;
					border-bottom: 0px;
				}

				.address-box{
					font-family: 'robat-r';
					color: #464646;
					height: 40px;
					line-height: 40px;
					text-align: left;
				}

				.confirm-btn{
					font-family: 'robat-b';
					font-size: 16px;
					width: 80px;
					height: 33px;
					line-height: 33px;
					position: absolute;
					background: linear-gradient(149deg, #56a6f6, #3e79ce);
					border-radius: 7px;
					cursor: pointer;
					right: 7px;

					top: 50%;
					transform: translate(0, -50%);

					text-align: center;
				}
			}

			.btns{
				padding: 20px 0;
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: bold;
			}

			.binan-btn{
				margin: 0 20px;
				font-family: 'robat-b';
				font-size: 16px;
				width: 150px;
				// height: 33px;
				line-height: 33px;
				background: linear-gradient(149deg, #56a6f6, #3e79ce);
				border-radius: 7px;
				cursor: pointer;
				right: 7px;
				padding: 5px 0;

				text-align: center;
			}
		}
	}

	.head-bg{
		background: #282b2f!exportant;
	}

	.header {
		width: 100%;
		height: 70px;
		padding: 0 40px;
		background: transparent;
		display: flex;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 59;
		background: linear-gradient(180deg, rgba(32, 34, 38, 0.63) 0%, rgba(32, 34, 38, 0) 100%);

		.background{
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: -1;
			background: rgb(32,34,38);
		}

        .right-menu{
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
            text-align: right;
        }

		ul {
			list-style: none;
			display: flex;

			li {
				cursor: pointer;
				display: flex;
				align-items: center;
				height: 100%;
				font-size: 14px;
			}
		}

		.nav-btn{
			display: none;
		}

		.nav-btn-toggle{
			position: fixed;
			height: 100%;
			width: 100%;
			top: 0;
			z-index: 99;

			ul{
				flex-direction: column;
			}

			li{
				width: 100%;
				height: 49px;

				padding-left: 30px;

				&.router-link-active {
					background: rgba(36,84,198, 0.5);
					border-left: 3px solid #65BDFE;
					box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
				}
			}

			span{
				margin-right: 10px;
			}
		}

		// logo
		.lan-logo {
			width: 110px;
			display: flex;
			flex-direction: row;

			img {
				height: 40px;
			}

			
			.title {
				display: flex;
				padding-left: 20px;
				flex-direction: column;
				justify-content: center;

				h5,
				h6 {
					display: block;
				}

				h5 {
					font-size: 14px;
					font-weight: 800;
					color: #ffffff;
				}

				h6 {
					font-size: 12px;
					color: rgba(255, 255, 255, 0.23);
				}
			}
		}

		
		.nav {
			height: 100%;
			margin-left: 58px;
			flex: 1;

			li {
				color: #9A9A9A;
				padding: 0 10px;
				margin: 0 10px;
				transition: color 0.3s;
				position: relative;

				
				// &::after {
				// 	position: absolute;
				// 	bottom: 0;
				// 	left: 0;
				// 	right: 0;
				// 	content: '';
				// 	display: block;
				// 	width: 100%;
				// 	height: 6px;
				// 	background: #2454C6;
				// 	transform: scaleX(0);
				// 	transition: transform 0.3s;
				// }

				
				&.router-link-active {
					color: #ffffff;

          
          &::after {
            transform: scaleX(1);
          }
				}
			}
		}

		
		.menu {
			padding: 18px 0;
			height: 100%;
			box-sizing: border-box;
            align-items: center;

			li {
				height: 100%;
				font-size: 14px;
				color: #ffffff;
				padding: 0 10px;
				margin: 0 5px;
			}

			
			.user-info {
				display: flex;
				align-items: center;

				.user-head {
					width: 34px;
					height: 34px;
					margin-right: 10px;

					img {
						width: 100%;
					}
				}

				span {
					font-size: 12px;
					font-weight: 600px;
				}
			}

			.connect-wallet,
			.register {
				border-radius: 25px;
                padding: 5px 10px;
			}

			
			.register {
				background: linear-gradient(90deg, #4071D7 0%, #344DA7 100%);
			}

			
			.connect-wallet {
				background: #191B20;
			}
		}
	}
</style>console.log('Debug: fix: resolve memory leaks in battle logic');
console.log('Debug: feat: implement better particle effects');
