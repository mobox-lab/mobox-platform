<template>
  <div :class="['my-iframe', getClass]" ref="iframe">
    <div v-if="gameName === `tokenmaster`">
      <div class="iframe-master-bg"></div>
      <img
        class="iframe-master-frame"
        :style="frameStyle"
        src="@/assets/tokenmaster/frame.png"
        alt=""
      />
      <img
        class="iframe-master-logo"
        src="@/assets/tokenmaster/logo.png"
        alt=""
      />
    </div>
    <div v-if="gameName === `chainzarena`">
      <div class="chainz-arena-bg"></div>
      <img
        class="iframe-master-frame"
        :style="chainFrameStyle"
        src="@/assets/chainzarena/frame.png"
        alt=""
      />
      <img
        class="iframe-master-logo"
        src="@/assets/chainzarena/logo.png"
        alt=""
      />
    </div>
    <div v-if="gameName === `clash-moland`">
      <div class="clash-moland-bg"></div>
      <img
        class="iframe-master-frame"
        :style="chainFrameStyle"
        src="@/assets/clash-moland/border.png"
        alt=""
      />
      <img
        class="iframe-master-logo"
        src="@/assets/clash-moland/logo-2.png"
        alt=""
      />
    </div>
    <div v-if="gameName === `mobox_slp`">
      <div class="chainz-arena-bg"></div>
      <img
        class="iframe-master-frame"
        :style="slpFrameStyle"
        src="@/assets/chainzarena/frame.png"
        alt=""
      />
      <!-- <img
        class="iframe-master-logo"
        src="@/assets/chainzarena/logo.png"
        alt=""
      /> -->
    </div>
    <div v-if="gameName === `mobox_tower_defense`">
      <div class="tower-denfense-bg"></div>
      <img
        class="iframe-master-frame"
        :style="towerFrameStyle"
        src="@/assets/towerdefense/frame.png"
        alt=""
      />
      <img
        class="iframe-master-logo"
        src="@/assets/towerdefense/logo.png"
        alt=""
      />
    </div>
    <div v-if="gameName === 'momoverse' && mode === 'smallWindow'">
      <div class="momoverse-bg"></div>
      <!-- <img
        class="iframe-master-logo"
        src="@/assets/chainzarena/logo.png"
        alt=""
      /> -->
    </div>
    <!-- momoverse -->
    <div
      v-for="item in gameUrl"
      :style="getIframeStyle"
      :class="[
        'my-iframe-cont',
        mode == 'smallWindow' ? 'small-window' : null,
        gameName,
        ['tokenmaster', 'chainzarena', 'mobox_slp', 'clash-moland' ,'mobox_tower_defense', 'momoverse'].indexOf(item.name) == -1 ? '' : 'iframe-master', item.name == gameName ? '' : 'hide'
      ]"
      :key="item.name"
    >
      <iframe
        v-if="item.name == gameName"
        width="100%"
        :src="item.url  + ($route.query.channel ? '&channel=' + $route.query.channel : '') + '&token=' + token + getSearchUrl"
        :onload="postMessage('changeLang', $i18n.locale)"
      />
      <!-- logo -->
      <div class="game-logo" v-if="gameName == 'momoverse' && mode === 'smallWindow'">
        <img src="@/assets/momoverse/logo.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { CommonMethod } from "@/mixin";
import { Common } from "@/utils";
// import { mapState } from "vuex";

const screenRate = 2300 / 1242;
const slpScreenRate = 1136 / 640;

export default {
  mixins: [CommonMethod],
  props: {
    // 游戏标识
    symbol: String,
    // 窗口模式
    mode: String,
  },
  data() {
    return {
      gameUrl: [
        {
          name: "momo",
          // url: "./momo?lang=" + this.$i18n.locale + `&t=${new Date().valueOf()}`,
          url:
            "https://www.mobox.io/momo?lang=" +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
          // url: "http://192.168.5.3:8080?lang=" + this.$i18n.locale
        },
        {
          name: "dragonmo",
          // url: "./momo?lang=" + this.$i18n.locale + `&t=${new Date().valueOf()}`,
          url:
            "https://www.mobox.io/dragonmo?lang=" +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
          // url: "http://192.168.5.3:8080?lang=" + this.$i18n.locale
        },
        {
          name: "contest",
          url:
            "https://www.mobox.io/contest?lang=" +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
          // url: "./contest?lang=" + this.$i18n.locale + `&t=${new Date().valueOf()}`,
          // url: "http://192.168.5.227:8081?lang=" + this.$i18n.locale,
          // url: "http://192.168.5.3:8082?lang=" + this.$i18n.locale,
        },
        {
          name: "tokenmaster",
          // url:"http://192.168.5.191:7456?lang=" + this.$i18n.locale
          // url:"http://192.168.5.191:7456/build/?lang=" + this.$i18n.locale
          // url:"./tokenmaster?lang=" + this.$i18n.locale

          // url:"http://192.168.5.204:7457?lang=" + this.$i18n.locale
          url:
            "https://www.mobox.io/tokenmaster?lang=" +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
        },
        {
          name: "chainzarena",
          // url:"http://192.168.5.191:7456?lang=" + this.$i18n.locale
          // url:"http://192.168.5.191:7456/build/?lang=" + this.$i18n.locale
          // url:"./tokenmaster?lang=" + this.$i18n.locale

          // url:"http://192.168.5.204:7457?lang=" + this.$i18n.locale
          // url:"http://192.168.5.233/chainz2/web-mobile?lang=" + this.$i18n.locale
          url:
            "https://www.mobox.io/chainzarena?lang=" +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
          // url:
          //   "http://192.168.5.204:1200?lang=" +
          //   this.$i18n.locale +
          //   `&t=${new Date().valueOf()}`,
        },
        {
          name: "clash-moland",
          url:
            "https://www.mobox.io/clashofmoland?lang=" +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
        },
        {
          name: "mobox_slp",
          // url:"http://192.168.5.191:7456?lang=" + this.$i18n.locale
          // url:"http://192.168.5.191:7456/build/?lang=" + this.$i18n.locale
          // url:"./tokenmaster?lang=" + this.$i18n.locale

          // url:"http://192.168.5.204:7457?lang=" + this.$i18n.locale
          // url:"http://192.168.5.233/chainz2/web-mobile?lang=" + this.$i18n.locale
          // url:
          //   "http://10.10.88.144:8888/mobox_slp?lang=" +
          //   this.$i18n.locale +
          //   `&t=${new Date().valueOf()}`,
          url:``
        },
        {
          name: "mobox_tower_defense",
          url:``
            // "http://tafang2-client.syttgame.com?lang=" +
            // this.$i18n.locale +
            // `&t=${new Date().valueOf()}`
        },
        {
          name: "momoverse",
          // url:`http://192.168.5.3:7457/web-mobile/web-mobile/index.html?lang=` +
          url:`https://www.mobox.io/momoverse?lang=` +
            this.$i18n.locale +
            `&t=${new Date().valueOf()}`,
        },
        {
          name: "dragonverse",
          url:`https://www.mobox.io/dragonverse?lang=` + this.$i18n.locale + `&t=${new Date().valueOf()}`,
        },
      ],
      token: "",
      masterStyle: "",
      slpStyle: "",
      tdStyle :"" ,

      frameStyle: "",
      chainFrameStyle: "",
      slpFrameStyle: "",
      towerFrameStyle: "",
      momoverseStyle: "",
    };
  },
  mounted() {
    this.token = this.$store.state.userState.token;

    this.$nextTick(this.setMasterSize);

    this.$root.eventHub.$on("platform-logout", () => {
      this.token = "";
    });

    this.$root.eventHub.$on("platform-setToken", (token) => {
      this.token = token;
    });

    window.onresize = () => {
      this.setMasterSize();
    };

    this.getSlpUrl();
  },
  computed: {
    getClass() {
      return this.$route.path === "/iframe/tokenmaster" || this.$route.path === "/iframe/chainzarena" ? "tiny-frame" : "";
    },
    getIframeStyle() {
      if (this.gameName === "tokenmaster" || this.gameName === "chainzarena" || this.gameName === "clash-moland") {
        return this.masterStyle;
      } else if(this.gameName === "mobox_slp") {
        return this.slpStyle
      } else if(this.gameName === "mobox_tower_defense") {
        return this.tdStyle
      } else if (this.gameName === 'momoverse') {
        return this.mode === 'smallWindow' ? this.momoverseStyle : 'height:100%;width:100%';
      } else {
        return '';
      }
    },
    getSearchUrl() {
      let retUrl = "#/";
      if (this.$route.query.path) retUrl += this.$route.query.path;
      if (this.$route.query.tab) retUrl += "?tab=" + this.$route.query.tab;
      return retUrl;
    },
    gameName() {
      return this.symbol || this.$route.params.gameName;
    },
  },
  methods: {
    getSlpUrl(){
      let arr = [];
      this.gameUrl.map((item)=>{
        if(item.name == "mobox_slp") {
          item.url = `${Common.getStorageItem("slp_url")}?lang=${this.$i18n.locale}&t=${new Date().valueOf()}`
          arr.push(item);
        } else if(item.name == "mobox_tower_defense") {
          // item.url = `${Common.getStorageItem("td_url") || `http://tafang2-client.syttgame.com`}?lang=${this.$i18n.locale}&t=${new Date().valueOf()}`
          item.url = `https://www.mobox.io/towerdefence/webIndex.html?lang=${this.$i18n.locale}&t=${new Date().valueOf()}`
          arr.push(item);
        } else {
          arr.push(item);
        }
      })

      this.gameUrl = arr;
    },
    setMasterSize() {
      // if(this.gameName !== "tokenmaster") {return}
      const offsetWidth = this.$refs.iframe.offsetWidth;

      if (offsetWidth < 500) {
        this.masterStyle = `height:100%;width:100%`;
        this.slpStyle = `height:100%;width:100%`;
        this.tdStyle = `height:100%;width:100%`;
        this.momoverseStyle = `height:100%;width:100%`;

        this.frameStyle = `display:none`;
        this.chainFrameStyle = `display:none`;
        this.slpFrameStyle = `display:none`;
        this.towerFrameStyle = `display:none`;
      } else {
        const offsetHeight = this.$refs.iframe.offsetHeight;
        // const offsetHeight = window.innerHeight - 70;

        const height = offsetHeight * 0.91;
        this.masterStyle = `height:${height * (this.gameName === 'clash-moland' ? 0.96 : 1)}px;width:${height / screenRate}px`;
        this.slpStyle = `height:${height}px;width:${height / slpScreenRate}px`;
        this.tdStyle = `height:${height}px;width:${height / slpScreenRate}px`;

        // const frameHeight = offsetHeight * 0.9 + 100;
        const frameHeight = offsetHeight * 1;
        this.frameStyle = `height:${frameHeight}px;`;

        const chainFrameHeight = offsetHeight * 1;
        // const chainFrameWidth = chainFrameHeight * 0.57;
        const chainFrameWidth = chainFrameHeight * 0.57;
        this.chainFrameStyle = `width:${chainFrameWidth}px;height:${chainFrameHeight * (this.gameName === 'clash-moland' ? 0.96 : 1)}px;`;

        const slpFrameHeight = offsetHeight * 1;
        // const chainFrameWidth = slpFrameHeight * 0.57;
        const slpFrameWidth = slpFrameHeight * 0.6;
        this.slpFrameStyle = `width:${slpFrameWidth}px;height:${slpFrameHeight}px;`;

        const tdFrameHeight = offsetHeight * 0.98;
        // const chainFrameWidth = tdFrameHeight * 0.57;
        const tdFrameWidth = tdFrameHeight * 0.596;
        this.towerFrameStyle = `width:${tdFrameWidth}px;height:${tdFrameHeight}px;top:50.3%`;

        const _height = offsetHeight * 0.6;
        this.momoverseStyle = `width:${_height * 2.3}px;height: ${_height}px`;
      }
    },
    sendMsg() {
      this.postMessage("changeLang", this.$i18n.locale);
      let token = Common.getStorageItem("token");
      if (token) {
        this.postMessage("setToken", token);
      }
    },
  },
};
</script>
<style scoped lang="less">
.my-iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  * {
    transition: all 0s;
  }
}

@media (min-width: 960px) {
  .my-iframe {
    left: 88px;
  }
}

@media (max-width: 960px) {
  .my-iframe {
    left: 0;
    top: 57px;
  }
}

.my-iframe-cont {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
}
.my-iframe iframe {
  border: none;
  height: 100%;
}
.iframe-master {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* margin-top : 0.4%; */
}
.iframe-master-frame {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.iframe-master-bg {
  background: url("../assets/tokenmaster/bg.png");
  background-size: cover;

  position: absolute;
  width: 100%;
  /* height: calc(100vh - 70px); */
  height: 100%;
}
.chainz-arena-bg {
  background: url("../assets/chainzarena/bg.jpg");
  background-size: cover;

  position: absolute;
  width: 100%;
  /* height: calc(100vh - 70px); */
  height: 100%;
}

.clash-moland-bg {
  background: url("../assets/clash-moland/bg.jpg");
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

.clash-moland {
  iframe {
    border-radius: 12px;
    overflow: hidden;
  }
}

.tower-denfense-bg {
  background: url("../assets/towerdefense/bg.jpg");
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

.momoverse-bg {
  background: url("../assets/momoverse-bg.jpg");
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
}

.iframe-master-logo {
  position: absolute;
  width: 200px;
  left: 8%;
  top: 3%;
}

.momoverse {
  &.small-window {
    box-sizing: border-box;
    background: url(../assets/momoverse-border.png) no-repeat;
    background-size: 100% 100%;
    padding: 40px 47px 48px 46px;
    border-radius: 20px;

    iframe {
      overflow: hidden;
      border-radius: 15px;
    }
  }

  .game-logo {
    position: absolute;
    top: -20px;
    left: 0;

    img {
      width: 160px;
      transform: translate(-100%, -100%);
    }
  }
}
</style>
