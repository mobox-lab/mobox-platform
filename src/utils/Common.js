import hmacSHA256 from "crypto-js/hmac-sha256";
import hex from "crypto-js/enc-hex";
import { CURRENCY_ICON } from "@/utils/enums.js";
import TronWeb from "tronweb";
// import { marked } from 'marked';
// const ethUtil = require("ethereumjs-util");
// const regx = /@(.+?)\s/g;

export default class Common {
  // sha256加密
  static sha256Encrypt(
    value,
    key = "Zbxn5@RnZzq&GbFG8Ie0YMN$^xhl9Id7U8lLf3J8AkpBpQyU6pllsMPRv^b0qfAt^GpVJnd&GVQVD&Bs_WaxvoNK*A#f7yR^DB9d^fEuB!H%RxwQzZ1"
  ) {
    return hmacSHA256(value, key).toString(hex);
  }

  //日期格式化
  static checkIsAppleDevice() {
    let u = navigator.userAgent;
    var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var iPad = u.indexOf("iPad") !== -1;
    var iPhone = u.indexOf("iPhone") !== -1 || u.indexOf("Mac") !== -1;
    if (ios || iPad || iPhone) {
      return true;
    } else {
      return false;
    }
  }

  //js判断是否为Android设备
  static checkIsAndroidDevice() {
    var u = navigator.userAgent;

    var s1 = u.indexOf("Android") !== -1;
    var s2 = u.indexOf("Adr") !== -1;

    if (s1 || s2) {
      return true;
    } else {
      return false;
    }
  }

  static dateFtt(fmt, date) {
    //author: meizz
    var o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fmt;
  }

  static patchTimeLength(time) {
    const timeString = time.toString();

    return timeString.length === 1 ? "0" + timeString : timeString;
  }

  static getLeftTime(times) {
    let day = 0,
      hour = 0,
      minute = 0,
      second = 0;
    if (times > 0) {
      hour = Math.floor(times / (60 * 60));
      minute = Math.floor(times / 60) - day * 24 * 60 - hour * 60;
      second =
        Math.floor(times) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
    }

    return (
      this.patchTimeLength(hour) +
      ":" +
      this.patchTimeLength(minute) +
      ":" +
      this.patchTimeLength(second)
    );
  }

  static numFloor(num, decimals = 100) {
    return Number(Math.floor(num * decimals + 0.0000002) / decimals);
  }

  static getShortAddr(addr) {
    if (typeof addr != "string") return "";
    return (
      addr.substr(0, 6) + "..." + addr.substr(addr.length - 4, addr.length)
    );
  }

  static repeat(target, n) {
    if (n == 1) return target;
    var s = this.repeat(target, Math.floor(n / 2));
    s += s;
    if (n % 2) s += target;
    return s;
  }

  static setStorageItem(name, value) {
    window.localStorage.setItem(name, value);
  }
  static getStorageItem(name) {
    return window.localStorage.getItem(name);
  }
  static removeStorageItem(name) {
    window.localStorage.removeItem(name);
  }
  static getRandomNum(start, end) {
    return Math.ceil(start + Math.random() * end);
  }
  static async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static getCutStr(string, len = 10, isMiddle = false) {
    let str = string ? string.toString() : "";

    if (str.length < len) {
      return str;
    }

    let newStr = "";
    if (isMiddle) {
      let stage = Math.floor((len - 3) / 2);
      newStr =
        str.slice(0, stage) + "..." + str.slice(str.length - stage, str.length);
    } else {
      newStr = str.slice(0, len - 3) + "...";
    }

    return newStr;
  }

  // 获取url参数
  static getUrlParams(paras) {
    const reg = new RegExp("(^|&)" + paras + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r) {
      if (r != null) {
        return unescape(r[2]);
      } else {
        return null;
      }
    } else {
      var url = location.href;
      var paraArr = url.split("?");
      var paraString = paraArr[paraArr.length - 1].split("&");
      var paraObj = {};
      let j;

      for (let i = 0; paraString[i]; i++) {
        j = paraString[i];
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(
          j.indexOf("=") + 1,
          j.length
        );
      }
      var returnValue = paraObj[paras.toLowerCase()];
      if (typeof returnValue == "undefined") {
        return "";
      } else {
        return returnValue;
      }
    }
  }

  // 防抖
  static debounce(fun, waitTime = 500) {
    let timeout = null;

    return function() {
      const self = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fun.apply(self, Array.prototype.slice.call(arguments));
      }, waitTime);
    };
  }

  static copyTextBoard(text) {
    var input = document.createElement("input");
    // 防止手机上弹出软键盘
    input.setAttribute("readonly", "readonly");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    // input.setSelectionRange(0, 9999);
    input.select();
    var res = document.execCommand("copy");
    document.body.removeChild(input);

    return res;
  }

  static getCurrencyIcon(currency) {
    return CURRENCY_ICON[currency] || "";
  }

  static getRate(
    coin,
    balance,
    currencyInfo,
    coinRate,
    showShort = true,
    decimals = 6
  ) {
    // const {currencyInfo} = store.state.globalState.data;
    // const {coinRate} = store.state.userState;

    const { currencyMap, selectedCurrency } = currencyInfo;

    // console.log(currencyMap, selectedCurrency)
    // console.log(coin, balance, currencyMap[selectedCurrency])
    // console.log(coinRate[coin].price)

    let res = "0";
    if (coinRate[coin]) {
      let num =
        Number(balance) * coinRate[coin].price * currencyMap[selectedCurrency];
      num = this.numFloor(num, Math.pow(10, decimals));
      // res = num
      res = showShort ? this.convert(num) : num.toString();
      // res = coinRate[coin] / coinRate['usd'] * currencyMap[selectedCurrency]
    } else {
      res = "0";
    }

    return res;
  }

  static convert(money) {
    let s = money.toString().split("."); /**获取小数型数据**/
    return Number(s[0]).toLocaleString() + (Number(s[1]) ? `.${s[1]}` : "");
  }

  static isValidETHValidAddress(address) {
    if (!address || !address.startsWith("0x")) return false;
    return ethUtil.isValidAddress(address);
  }

  static isValidTRXValidAddress(address) {
    if (!address) return false;
    return TronWeb.isAddress(address);
  }

  static dateCount(nowTs, endTime) {
    // 现在时间
    var now = new Date(nowTs);
    //截止时间
    var until = new Date(endTime);
    // 计算时会发生隐式转换，调用valueOf()方法，转化成时间戳的形式
    var days = (until - now) / 1000 / 3600 / 24;
    // 下面都是简单的数学计算
    var day = Math.floor(days);
    var hours = (days - day) * 24;
    var hour = Math.floor(hours);
    var minutes = (hours - hour) * 60;
    var minute = Math.floor(minutes);
    var seconds = (minutes - minute) * 60;
    var second = Math.floor(seconds);
    var back = {
      day,
      hour,
      minute,
      second,
    };
    return back;
  }

  static getAvatarSrc(avatar) {
    return `https://www.mobox.io/img/avatar/${avatar}.png`;
  }

  static getRandom(ranNum) {
    return Math.floor(1 + ranNum * Math.random());
  }

  static getRanMomoId() {
    let wan = this.getRandom(5);
    let res = 10001;
    if (wan >= 5) {
      res = wan * 10000 + this.getRandom(80);
    } else {
      let qian = this.getRandom(4);
      res = wan * 10000 + qian * 1000 + this.getRandom(20);
    }

    return res;
  }

  static getAtFromStr(str) {
    let arr = [];

    if (str) {
      let matcher = str.match(regx);
      if (matcher) {
        matcher.map((item) => {
          let s = item.split("@")[1];
          arr.push(s.slice(0, s.length - 1));
        });
      }
    }

    return arr;
  }

  static validateImage(pathImg) {
    var reg = /\.(png|jpg|jpeg|webp)$/;
    return reg.test(pathImg);
    // var ImgObj = new Image();
    // ImgObj.src = pathImg;
    // if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
    // 	return true;
    // } else {
    // 	return false;
    // }
  }

  static validMomoId(id) {
    let num = Number(id);

    if (num) {
      let wan = parseInt((num % 100000) / 10000);
      let qian = parseInt((num % 10000) / 1000);

      let baiwei = num - (wan * 10000 + qian * 1000);

      if (wan <= 6 && wan > 0) {
        if (wan >= 5) {
          return qian == 0 && baiwei <= 80;
        } else {
          return qian <= 4 && baiwei <= 20;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // 是否是手机
  static isMobile() {
    const isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i);
    return !!isMobile;
  }

  // 金额格式化
  static formatMoney(money, digit) {
    var tpMoney = "0.00";
    if (undefined != money) {
      tpMoney = money;
    }
    tpMoney = new Number(tpMoney);
    if (isNaN(tpMoney)) {
      return "0.00";
    }
    tpMoney = tpMoney.toFixed(digit) + "";
    var re = /^(-?\d+)(\d{3})(\.?\d*)/;
    while (re.test(tpMoney)) {
      tpMoney = tpMoney.replace(re, "$1,$2$3");
    }
  
    return tpMoney;
  }

  static formatMd(str){
    return marked.parse(str);
  }
}
console.log('Debug: fix: resolve issue with player movement lag');
console.log('Debug: fix: fix broken links in the help center');
