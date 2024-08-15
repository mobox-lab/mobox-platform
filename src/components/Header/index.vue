<template>
    <header>
        <div
            :class="['container-pc', showNavBar ? 'show' : '']"
//             v-if="isShowHeader"
//         >
//             <!-- 菜单 -->
            <div class="menu">
                <!-- 下载apk -->
                <div class="wallet download" @click="switchDownloadOpen">
                    <img src="@/assets/icon/download.svg" />
                </div>
                <!-- 工单 -->
                <a
                    href="https://support.mobox.io/"
                    target="_blank"
                    class="work-order"
                >
                    <img width="35" src="@/assets/imchat/support.png" />
                </a>
                <!-- 登录 -->
                <div v-if="!isLogin" @click="toUserCenter" class="connect">
                    CONNECT
                </div>
                <!-- 钱包 -->
                <div class="wallet" @click="toggleShowWallet" v-if="isLogin">
                    <img src="@/assets/icon/wallet-icon.svg" />
                </div>
                <!-- 头像 -->
                <div
                    class="avatar"
                    @click="toUserCenter"
                    v-if="userInfo.avatar"
                >
                    <img src="@/assets/icon/avatar.jpg" />
                </div>
            </div>
        </div>
        <div class="container-mobile" v-if="!$route.meta.hideHeader">
            <div class="sidebar-menu" @click="toggleShowSidebar">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                        fill="rgba(255,255,255,1)"
                    />
                </svg>
            </div>
            <img class="logo" src="@/assets/logo.png" />
            <span class="name">MOBOX</span>
            <ul class="menu">
                <li @click="switchDownloadOpen">
                    <div class="wallet">
                        <img src="@/assets/icon/download.svg" />
                    </div>
                </li>
                <!-- 工单 -->
                <li class="work-order-li">
                    <a
                        href="https://support.mobox.io/"
                        target="_blank"
                        class="work-order"
                    >
                        <img width="35" src="@/assets/imchat/support.png" />
                    </a>
                </li>
                <!-- 登录 -->
                <div v-if="!isLogin" @click="toUserCenter" class="connect">
                    CONNECT
                </div>
                <!-- 钱包 -->
                <li>
                    <div
                        class="wallet"
                        @click="toggleShowWallet"
                        v-if="isLogin"
                    >
                        <img src="@/assets/icon/wallet-icon.svg" />
                    </div>
                </li>
                <!-- 头像 -->
                <li v-if="isLogin">
                    <div class="avatar" @click="toUserCenter">
                        <img
                            v-if="userInfo.avatar"
                            src="@/assets/icon/avatar.jpg"
                        />
                    </div>
                </li>
            </ul>
        </div>

        <!-- 注册 -->
        <Dialog v-model="isShowRegister">
            <Register ref="register" />
        </Dialog>
        <!-- 登录 -->
        <Dialog v-model="isShowLogin">
            <Login />
        </Dialog>
        <!-- 密码找回 -->
        <Dialog v-model="isShowPwsForgot">
            <Binder :type="binderType" :sign="sign" :signTs="signTs" />
        </Dialog>
        <!-- 绑定去中心化钱包 -->
        <Dialog v-model="isShowBindWallet">
            <BindWallet
                v-bind:shouldOpenBox="shouldOpenBox"
                v-bind:isSendBindRequest="isSendBindRequest"
                v-bind:bindAddressCb="bindAddressCb"
            />
        </Dialog>
        <!-- 领取box -->
        <Dialog v-model="isShowBoxes">
            <GetBoxes />
        </Dialog>
        <!-- 确认框 -->
        <Dialog v-model="isShowConfirm">
            <Confirm
                :title="confirmInfo.title"
                :msg="confirmInfo.msg"
                :callback="confirmInfo.callback"
            />
        </Dialog>
        <!-- 充值框 -->
        <Dialog v-model="isShowDeposite">
            <ReceiveBox
                ref="receivebox"
                :selectCoin="selectCoin"
                :chainIdx="chainIdx"
                :switchChainIdx="switchChainIdx"
            />
        </Dialog>
        <Dialog v-model="isShowDownload">
            <div class="download-content">
                <div class="download-title">
                    <img src="@/assets/logo.png" alt="" class="app-logo" />
                    Download MOBOX Pro App
                </div>
                <div class="download-desc">
                    MOBOX Pro App are both available on Android OS & IOS. To
                    ensure your asset safety from malware, please download
                    directly via official links below.
                </div>
                <div class="md5">
                    <div class="md5-title">md5:</div>
                    <div class="md5-value">
                        39db51129e8aa019cbe70a589f06db93e47840a3
                    </div>
                    <div class="md5-title sha1">sha1:</div>
                    <div class="md5-value">
                        321dbe6cb7a538d317498689765c486b8a7ccb9cc28fddeb8d8d8065cd78e357
                    </div>
                </div>
                <div class="menu">
                    <ul class="app-download">
                        <li class="ios download" @click="downloadIOS">
                            <img src="@/assets/home/ios.png" />
                            <div class="ifno">
                                <p>Download the</p>
                                <span>IOS APP</span>
                            </div>
                        </li>
                        <li class="google download" @click="download">
                            <img src="@/assets/home/apk.webp" />
                            <div class="info">
                                <p>Download via</p>
                                <span>Android APK</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    </header>
</template>

<script>
export { Common, EventBus } from "@/utils";
export { CommonMethod } from "@/mixin";
export { mapState } from "vuex";
export Dialog from "../Dialog";
export Register from "./Register/index";
export Login from "./Login/index";
export Binder from "./Binder/index";
export BindWallet from "./BindWallet/index";
export GetBoxes from "./GetBoxes/index";
export Confirm from "./Confirm/index";
export ReceiveBox from "@/components/ReceiveBox/index.vue";
export request from "@/utils/request";
export { API_USER_INFO, LOGINHEAD } from "@/utils/constant";

export default {
    mixins: [CommonMethod],
    components: {
        Dialog,
        Register,
        Login,
        Binder,
        BindWallet,
        GetBoxes,
        Confirm,
        ReceiveBox,
    },
    data() {
        return {
            // 存在打开的游戏
            isShowGame: false,
            // 上一次滚动值
            oldScrollTop: null,
            // 是否显示导航
            showNavBar: true,
            // 搜索输入
            searchValue: "",
            // 当前链
            chainIndex: 0,
            // 链
            chains: [
                {
                    icon: "https://www.mobox.io/icons/bnb.png",
                    symbol: "bnb",
                    name: "BNB Chain",
                },
                {
                    icon: "https://www.mobox.io/icons/arb.png",
                    symbol: "arb",
                    name: "Arbitrum",
                },
            ],
            // 语言
            langArr: [
                "English",
                "Português",
                "繁體中文",
                "Русский язык",
                "français",
                "한국어",
                "Tiếng Việt",
            ],
            langNameToPos: ["en", "po", "zh-CN", "ru", "fr", "kr", "vn"],
            defaultSelectLangPos: 0,
            // 注册弹窗显示状态
            isShowRegister: Common.getUrlParams("showRegister") == "true",
            // 登录弹窗显示状态
            isShowLogin: !!Common.getUrlParams("login"),
            // 密码找回弹窗显示状态
            isShowPwsForgot: false,
            binderType: "password",
            // 是否显示绑定去中心化钱包
            isShowBindWallet: false,
            // 是否需要发送绑定请求
            isSendBindRequest: 0,
            bindAddressCb: () => {},

            // 是否显示领取box界面
            isShowBoxes: false,
            shouldOpenBox: false,

            // 弹出通用确认框
            isShowConfirm: false,
            isShowDeposite: false,

            isShowDownload: false,

            confirmInfo: {
                title: "",
                msg: "",
            },

            toggleOepn: false,

            selectCoin: {
                symbol: "mbox",
                chainTypes: ["bnb", "arb"],
                balance: 0,
            },
            chainIdx: 0,

            sign: "",
            signTs: 0,
        };
    },
    computed: {
        ...mapState({
            // 是否登录
            isLogin: (state) => !!state.userState.token,
            // 市值
            marketCap: (state) => state.globalState.marketCap,
            userInfo: (state) => state.userState.userInfo,
            coinRate: (state) => state.userState.coinRate,
            poolInfo: (state) => state.globalState.data.poolInfo,
            // 游戏列表
            games(state) {
                return state.globalState.games.map((item) => {
                    return {
                        ...item,
                        name: this.$t(item.name),
                        describe: this.$t(item.describe),
                    };
                });
            },
        }),
        // 搜索结果
        searchResult() {
            return this.games.filter(
                (item) =>
                    item.name
                        .toLocaleLowerCase()
                        .indexOf(this.searchValue.toLocaleLowerCase()) != -1
            );
        },
        mboxPrice() {
            if (this.coinRate.mbox) {
                return `${Common.numFloor(this.coinRate.mbox.price, 1000)}`;
            } else {
                return `0`;
            }
        },
        // 是否显示搜索
        isShowHeader() {
            return this.$route.path === "/" ? !this.isShowGame : false;
        },
    },
    methods: {
        // 切换链
        switchChain(chain) {
            window.localStorage.setItem("chain", chain);
            EventBus.$emit("switch-chain", chain);
        },
        // 链变化
        changeChain(chain) {
            this.chainIndex = this.chains.findIndex(
                (item) => item.symbol === chain
            );
        },
        // 切换侧边菜单显示状态
        toggleShowSidebar() {
            this.$store.commit(
                "globalState/toggleShowSidebar",
                !this.$store.state.globalState.isShowSidebar
            );
        },
        // 跳转用户中心
        toUserCenter() {
            if (this.userInfo.avatar) {
                const gameStack = this.$parent.$children.find(
                    (item) => item.$options.name === "game-stack"
                );

                if (gameStack.current) {
                    gameStack.minimize();
                }

                if (this.$route.path !== "/userCenter") {
                    this.$router.push("/userCenter");
                }
                return;
            }

            window.location.href = `${LOGINHEAD}?redirect=${encodeURIComponent(
                window.location.href
            )}`;
        },
        // 跳转钱包
        toBoxWallet() {
            const link = `https://www.mobox.io/#/assetCenter`;
            window.open(link);
        },
        toMomo() {
            this.$router.push("/iframe/momo");
        },
        toPancake() {
            window.open(
                "https://pancakeswap.finance/swap?outputCurrency=0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377"
            );
        },
        toFAQ() {
            let lang = Common.getStorageItem("lang") || "en";
            if (lang === "zh-CN") {
                lang = "cn";
            }

            window.open(`https://faq${lang}.mobox.io/`);
        },
        switchChainIdx(idx) {
            this.chainIdx = idx;
            this.$refs.receivebox.createQrCode(
                this.selectCoin.chainTypes[this.chainIdx]
            );
        },
        openToggle(isOpen) {
            this.toggleOepn = isOpen;
        },
        showPwdForgot() {
            this.binderType = "password";
            this.isShowPwsForgot = true;
        },
        // 显示注册
        showShowRegister() {
            window.location.href = `${LOGINHEAD}register/phone?redirect=${encodeURIComponent(
                window.location.href
            )}`;
        },
        closeModal() {
            this.isShowPwsForgot = false;
        },
        close() {
            this.isShowRegister = false;
        },
        // 退出登录
        logout() {
            this.$root.eventHub.$emit("platform-logout");
            this.$store.commit("userState/logout");
            this.$root.eventHub.$emit("set-login-token", false);

            if (
                this.$route.path === "/userCenter" ||
                this.$route.path === "/assetCenter"
            ) {
                this.$router.push("/");
            }
        },
        // 消息监听
        messageListen(message) {
            const data = message.data;

            if (data.from == "mbox" && data.action == "goBindWallet") {
                this.isShowBindWallet = true;
                this.isSendBindRequest = 1;
            }
            if (data.from == "mbox" && data.action == "needLogin") {
                window.location.href = `${LOGINHEAD}?redirect=${encodeURIComponent(
                    window.location.href
                )}`;
            }
            if (data.from == "mbox" && data.action == "getUserInfo") {
                this.getUserInfo();
            }
            if (data.from == "mbox" && data.action == "needBindMobile") {
                if (!this.userInfo.mobile || !this.userInfo.mail) {
                    this.$store.commit("globalState/addNotify", {
                        msg: this.$t("Error_12"),
                        type: "error",
                    });

                    const type = !this.userInfo.mail ? "mail" : "mobile";

                    this.binderType = type;
                    this.isShowPwsForgot = true;
                }
            }
            if (data.from == "mbox" && data.action == "ShowMeTheMoney") {
                this.selectCoin.symbol = "mbox";
                this.isShowDeposite = true;
                this.switchChainIdx(0);
            }
            if (data.from == "mbox" && data.action == "ShowMeTheMec") {
                this.selectCoin.symbol = "mec";
                this.isShowDeposite = true;
                this.switchChainIdx(0);
            }
        },
        // 设置语言
        setLang() {
            let lang = Common.getStorageItem("lang") || "en";
            this.$store.commit("globalState/setLang", lang);

            this.defaultSelectLangPos = this.langNameToPos.indexOf(lang);
            if (this.defaultSelectLangPos == -1) this.defaultSelectLangPos = 0;
        },
        // 语言切换
        onLangChange(index) {
            let lang = this.langNameToPos[index];
            Common.setStorageItem("lang", lang);
            this.$store.commit("globalState/setLang", lang);
            this.$i18n.locale = lang;
            this.postMessage("changeLang", this.$i18n.locale);
            this.defaultSelectLangPos = index;
        },
        async getUserInfo() {
            const token = this.$store.state.userState.token;
            if (token) {
                try {
                    const res = await request(API_USER_INFO, {
                        method: "POST",
                    });

                    this.$store.commit("userState/setUserInfo", res.data);
                } catch {
                    this.openSource();
                }
            } else {
                this.openSource();
            }
        },
        openSource() {
            const source = Number(Common.getUrlParams("source"));
            if (source) {
                this.isShowRegister = true;
                this.$refs.register.initSource(source);
            }
        },
        // 窗口通信
        listenMessage({ data }) {
            if (data.action === "refresh-token") {
                this.$store.commit("userState/setToken", data.value);
                this.init();
            }
        },
        init() {
            this.getUserInfo();
            this.$store.dispatch("userState/getBindAddressInfo");
            this.$store.dispatch("userState/getBalance");
            this.$store.dispatch("userState/getPriceList");
            // 获取充值地址
            this.$store.dispatch("globalState/getChargeAddr");
        },
        // 切换钱包显示状态
        toggleShowWallet() {
            this.$store.commit("globalState/toggleShowWallet");
        },
        windowScroll() {
            // 滚动条距文档顶部的距离
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // 滚动条滚动的距离
            const scrollStep = scrollTop - this.oldScrollTop;
            // 更新——滚动前，滚动条距文档顶部的距离
            this.oldScrollTop = scrollTop;

            this.showNavBar = scrollStep < 0;
        },
        openGame(symbol) {
            if (symbol === "momo-farmer") {
                this.$router.push("/iframe/momo");
            } else if (Common.isMobile()) {
                this.$router.push(
                    `${symbol === "block-brawler" ? "" : "/iframe"}/${symbol}`
                );
            } else {
                EventBus.$emit("open-game", symbol);
            }
        },
        // 游戏状态改变
        gameChange(value) {
            this.isShowGame = value;
        },
        switchDownloadOpen() {
            this.isShowDownload = !this.isShowDownload;
        },
        download() {
            window.open(
                "https://www.mobox.io/download/app-latest.apk",
                "__blank"
            );
            this.isShowDownload = false;
        },
        downloadIOS() {
            window.open(
                "https://apps.apple.com/us/app/mobox-wallet/id1545109501"
            );
        },
    },
    beforeDestroy() {
        window.removeEventListener("message", this.messageListen, false);
    },
    created() {
        const chain = window.localStorage.getItem("chain");
        this.chainIndex = chain
            ? this.chains.findIndex((item) => item.symbol === chain)
            : 0;
        window.addEventListener("message", this.messageListen, false);
        window.addEventListener("scroll", this.windowScroll);
        this.$store.dispatch("globalState/getMarketCap");
        EventBus.$on("game-change", this.gameChange);
        this.setLang();

        this.$root.eventHub.$on("forgot-password", () => {
            this.showPwdForgot();
        });

        this.$root.eventHub.$on("landing-claimbox", (shouldOpenBox = false) => {
            const { user_id, wallets } = this.userInfo;

            if (user_id) {
                if (wallets && wallets[0]) {
                    this.isShowBoxes = true;
                    console.log("bindwallet now");
                } else {
                    this.shouldOpenBox = shouldOpenBox;
                    this.isShowBindWallet = true;
                    this.isSendBindRequest = 1;
                }
            } else {
                this.isShowLogin = true;
            }
        });

        this.$root.eventHub.$on("landing-claimbox-2", () => {
            const { user_id } = this.userInfo;

            if (user_id) {
                this.isShowBindWallet = true;
                this.isSendBindRequest = 0;
            } else {
                this.isShowLogin = true;
            }
        });

        this.$root.eventHub.$on("bind-address", (cb) => {
            this.shouldOpenBox = false;
            this.isShowBindWallet = true;
            if (cb) {
                this.isSendBindRequest = 2;
            } else {
                this.isSendBindRequest = 1;
            }
            this.bindAddressCb = cb;
        });

        this.$root.eventHub.$on("sign-withdraw", (cb) => {
            this.shouldOpenBox = false;
            this.isShowBindWallet = true;
            this.isSendBindRequest = 3;
            this.bindAddressCb = cb;
        });

        this.$root.eventHub.$on("confrim-box", (info, cb) => {
            this.confirmInfo = info;
            this.confirmInfo.callback = cb;

            this.isShowConfirm = true;
        });

        // 获取nft基本信息
        this.$store.dispatch("globalState/getPoolInfo");
        setInterval(() => {
            // 每五分钟请求一次基本信息
            this.$store.dispatch("userState/getPriceList");
            this.$store.dispatch("globalState/getPoolInfo");
        }, 60 * 5 * 1000);
    },
    mounted() {
        this.init();
        // 订阅链修改
        EventBus.$on("switch-chain", this.changeChain);
        // 获取货币汇率
        this.$store.dispatch("globalState/getCurrency");
        // 获取提现配置
        this.$store.dispatch("globalState/getPaymentCfg");
        // 监听窗口通信
        window.addEventListener("message", this.listenMessage, false);
    },
};
</script>

<style lang="less" scoped>
@export "~@/assets/less/var.less";

// 导航高度
@size: 44px;

header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999999;

    img {
        max-width: 100%;
    }

    ul {
        list-style: none;
    }
}

.container-pc {
    display: flex;
    height: @size;
    opacity: 0;
    justify-content: flex-end;
    transition: opacity 1s;

    &.show {
        opacity: 1;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    // 搜索
    .search-container {
        flex: 1;
        height: 100%;
    }

    .search {
        width: 502px;
        padding: 0 18px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-radius: 6px;
        background: rgba(80, 78, 78, 0.8);
        position: relative;
        transform-style: preserve-3d;
        transform: perspective(500px);

        input {
            flex: 1;
            height: @size;
            background: none;
            outline: none;
            border: none;
            font-size: 16px;
            font-family: Poppins-Regular;
            font-weight: 400;
            color: #ffffff;
            line-height: 16px;
            padding: 0 14px;
        }

        .icon {
            font-size: 0;
        }
    }

    // 搜索结果
    .search-result {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin-top: 2px;
        background: rgba(26, 28, 31, 0.9);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        padding: 0 30px;
        box-sizing: border-box;

        .title {
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #9a9a9a;
            line-height: 16px;
        }

        .result-data {
            padding: 15px 0;

            ul {
                margin-top: 10px;

                li {
                    display: flex;
                    align-items: center;
                    padding: 10px 0;
                    cursor: pointer;
                    transition: opacity 0.2s;

                    &:hover {
                        opacity: 0.6;
                    }
                }
            }

            .icon {
                width: 42px;
                height: 42px;
                border-radius: 10px;
                overflow: hidden;
                margin-right: 12px;
            }

            .info {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;

                span {
                    font-size: 18px;
                    font-weight: 400;
                    text-align: left;
                    color: #ffffff;
                    line-height: 20px;
                }

                p {
                    font-size: 14px;
                    font-weight: 400;
                    text-align: left;
                    color: #9a9a9a;
                    line-height: 16px;
                    margin-top: 2px;
                }
            }
        }

        // 无数据
        .no-data {
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            color: #9a9a9a;
            line-height: 16px;
            padding: 15px 0;
        }
    }

    .menu {
        display: flex;
        align-items: center;

        & > * {
            cursor: pointer;
        }

        .chain {
            ul {
                padding: 5px !exportant;
                background-color: rgba(44, 44, 44, 0.9) !exportant;
            }

            .list {
                li {
                    display: flex;
                    align-items: center;

                    &:hover {
                        opacity: 1 !exportant;
                        background-color: rgba(88, 88, 88, 0.9);
                        border-radius: 6px;
                    }

                    img {
                        width: 28px;
                        height: 28px;
                    }

                    span {
                        font-size: 16px;
                        font-weight: 700;
                        text-align: left;
                        color: #ffffff;
                        line-height: 1;
                        margin-left: 14px;
                    }
                }
            }
        }

        .mbox-price,
        .popover {
            height: @size;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
            font-size: 16px;
            font-family: Poppins-Bold;
            font-weight: 700;
            color: #ffffff;
            line-height: 16px;
            position: relative;

            & > .icon {
                width: 28px;
                margin-right: 12px;
            }
        }

        .mbox-price {
            margin-right: 20px;

            span {
                margin-left: 3px;
                color: #f9b309;
            }
        }

        .popover {
            margin-right: 20px;

            & > span {
                margin-right: 3px;
            }

            &:hover {
                .list {
                    display: block;
                }
            }

            .list {
                display: none;
                position: absolute;
                top: 100%;

                ul {
                    background: rgba(26, 28, 31, 0.9);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    border-radius: 6px;
                    margin-top: 5px;
                    padding: 5px 0;

                    li {
                        font-size: 15px;
                        white-space: nowrap;
                        padding: 12px 15px;
                        transition: opacity 0.2s;

                        &:hover {
                            opacity: 0.5;
                        }
                    }
                }
            }
        }

        .avatar,
        .work-order {
            margin-left: 12px;
        }

        .wallet {
            margin-left: 15px;
        }

        .avatar {
            border-radius: 100%;
            overflow: hidden;
        }

        .work-order {
            background: #2446ed;
            border: 2px solid #0069ff;
            position: relative;

            &::before {
                transform: scale(1.3);
            }

            &::after {
                transform: scale(1.5);
            }

            &::after,
            &::before {
                content: "";
                display: block;
                border-radius: 12px;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border: 1px solid #0069ff;
            }
        }

        .connect {
            padding: 0 20px;
            background: #2446ed;
            height: @size - 2px;
            border-radius: 8px;
            margin-left: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            line-height: 1;
            cursor: pointer;
            font-weight: bold;

            &:hover {
                opacity: 0.7;
            }
        }

        .download {
            margin-right: 4px;
        }

        .wallet,
        .work-order,
        .avatar {
            width: @size - 2px;
            height: @size - 2px;
            border-radius: 12px;

            &:hover {
                opacity: 0.7;
            }
        }
    }
}

.container-mobile {
    width: 100%;
    height: @header-mobile-height;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);

    .sidebar-menu {
        height: 100%;
        padding-left: 17px;
        padding-right: 15px;
        display: flex;
        align-items: center;
    }

    .logo {
        height: 30px;
    }

    .name {
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
        padding-top: 4px;
    }

    .menu {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .work-order-li {
            padding: 10px !exportant;
        }

        li {
            padding: 10px 4px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
        }

        a {
            box-sizing: border-box;
        }

        img,
        svg {
            width: 100%;
            height: auto;
        }
    }

    .work-order {
        background: #2446ed;
        border: 2px solid #0069ff;
        position: relative;
        border-radius: 8px;
        width: 32px;
        height: 32px;

        &::before {
            transform: scale(1.3);
        }

        &::after {
            transform: scale(1.5);
        }

        &::after,
        &::before {
            content: "";
            display: block;
            border-radius: 8px;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 1px solid #0069ff;
        }
    }

    .connect {
        padding: 0 15px;
        background: #2446ed;
        height: 35px;
        border-radius: 8px;
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        line-height: 1;
        cursor: pointer;
        font-weight: bold;
    }

    .download {
        width: 35px;
        border: 1px solid #707070;
        background: #433e45;
        border-radius: 6px;
        height: 35px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        line-height: 1;
        cursor: pointer;
        font-weight: bold;
        color: #000;

        img {
            width: 20px;
            height: 20px;
        }
    }

    .avatar,
    .wallet {
        width: 35px;
        height: 35px;
    }

    .avatar {
        border-radius: 8px;
        overflow: hidden;
    }
}

// pc
@media (min-width: 1920px) {
    .container-pc {
        padding: 0 150px;
    }
}

@media (max-width: 1920px) and (min-width: 1200px) {
    .container-pc {
        padding: 0 80px;
    }
}

@media (max-width: 1400px) {
    .container-pc .search-container {
        flex: 1;
        margin-right: 20px;
    }
}

@media (max-width: 1200px) {
    .container-pc {
        padding: 0 40px;

        .search-container {
            display: none;
        }

        .menu {
            flex: 1;
            justify-content: flex-end;
        }
    }
}

@media (min-width: 960px) {
    header {
        top: 30px;
        padding-left: @sidebar-width;
    }

    .container-mobile {
        display: none;
    }
}

@media (max-width: 960px) {
    header {
        top: 0;
        left: 0;
    }

    .container-pc {
        display: none;
    }

    .container-mobile {
        .search svg {
            width: 22px;
        }
    }

    .download-content {
        width: 375px !exportant;
    }
    .app-download {
        li:last-child {
            margin-left: 0px !exportant;
        }
    }
}

// 搜索结果过度动画
.search-animate-enter-active,
.search-animate-leave-active {
    transition: opacity 0.4s, transform 0.4s;
}

.search-animate-enter,
.search-animate-leave-to {
    opacity: 0;
    transform: rotateX(6deg);
}

.download-content {
    width: 426px;
    background: #1a1c1f;
    border-radius: 5px;
    padding: 24px;

    .download-title {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #fff;
        font-weight: 600;
        text-align: center;
        gap: 8px;
    }

    .app-logo {
        width: 44px;
        height: auto;
    }

    .download-desc {
        margin-top: 32px;
        text-align: left;
        color: #ebe3b1;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
    }

    .md5 {
        margin-top: 28px;
        padding: 12px;
        background: #151418;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        overflow-wrap: break-word;

        .md5-value {
            color: #565558;
        }
    }
    .sha1 {
        margin-top: 12px;
    }

    .app-download {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        li:last-child {
            margin-left: 10px;
        }
    }

    .menu {
        list-style: none;
        margin-top: 11px;

        li {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            padding: 0 0px;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: 10px;

            &:hover {
                opacity: 0.7;
            }

            img {
                margin-right: 8px;
            }
        }

        .play-game {
            background: rgba(23, 81, 246, 0.7);
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);

            img {
                height: 15px;
            }
        }

        .download {
            width: 181px;
            box-sizing: border-box;
            background: rgba(80, 78, 78, 0.8);

            img {
                height: 32px;
            }

            p,
            span {
                line-height: 1;
            }

            p {
                color: rgba(255, 255, 255, 0.7);
                font-size: 12px;
            }

            span {
                margin-top: 2px;
                font-size: 14px;
                font-weight: bold;
                color: #ffffff;
            }
        }
    }
}
</style>
console.log('Debug: feat: implement weekly challenges');
console.log('Debug: feat: improve tutorial experience for new players');
console.log('Debug: feat: add real-time player statistics tracking');
