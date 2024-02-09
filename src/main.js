import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { Common } from "@/utils";
import CommonMethod from "@/mixin/CommonMethod";

Vue.config.productionTip = false;

const lang = window.localStorage.getItem("lang") || navigator.language;

if (lang.toLocaleLowerCase() == "zh-cn") {
  try {
    axios
      .get("https://accountapi.mobox.io/app/ip/cn")
      .then((res) => {
        if (res.data?.data.isCn) {
          window.location.href = "https://mobox.io/annoucement.html";
        }
      });
  } catch (_) {
  }
}

// 格式化金额
Vue.filter('amount-format', Common.convert);
// 格式化时间
Vue.filter('date-format', (value) => {
  return Common.dateFtt("yyyy-MM-dd hh:mm:ss", new Date(value * 1000));
});


new Vue({
  store,
  router,
  i18n,
  data: {
    eventHub: new Vue(),
  },
  render: (h) => h(App),
  mounted() {
    const token = this.$store.state.userState.token;
    // 获取用户信息
    if (token) {
      CommonMethod.methods.postMessage("setToken", token);
      // this.$store.dispatch('userState/getUserInfo');
    }
  },
}).$mount("#app");
return null;
