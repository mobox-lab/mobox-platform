// <template>
//     <div id="downloadPage" class="border-3d download-page home-item-box">
//         <img class="downbg" src="@/assets/index/downbg.png" alt="">
      <div class="spine-momo-box2 pc-state">
        <div id="spine-momo-2"></div>
      </div>
        <HomeTitle class="mobile-state" style="text-align:center" :title="[$t('Home_35')]" />
        <div class="down-box">
            <div class="left">
                <HomeTitle class="pc-state" style="margin-bottom:120px" :title="[$t('Home_35')]" />
                <div style="line-height:35px">
                  {{$t('Home_36')}}
                </div>
                <div class="down-content">
                <div class="down-itembox">
                    <div class="boxer">
                    <div @click="downIOS()" class="normal-download-item">
                        <div class="pack-content">
                            <img src="../../assets/index/ios.png" alt="" />
                            <div>
                            <div class="down-headtitle">Download The</div>
                            <div class="down-detail">iOS Download</div>
                            </div>
                        </div>
                    </div>
                    <div @click="downAndorid()" class="normal-download-item">
                        <div class="pack-content">
                            <img src="../../assets/index/andorid.png" alt="" />
                            <div>
                            <div class="down-headtitle">Download The</div>
                            <div class="down-detail">Android APP</div>
                            </div>
                        </div>
                    </div>
                    <div @click="downChrome()" class="normal-download-item">
                        <div class="pack-content">
                            <img src="../../assets/index/chrome.png" alt="" />
                            <div>
                            <div class="down-headtitle">Download The</div>
                            <div class="down-detail">Chrome Plugin</div>
                            </div>
                        </div>
                    </div>
                    <div @click="downGoogle()" class="normal-download-item">
                        <div class="pack-content">
                            <img src="../../assets/index/googleplay.png" alt="" />
                            <div>
                            <div class="down-headtitle">Download From</div>
                            <div class="down-detail">Google Play</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <img class="right" src="@/assets/index/downinfo.png" alt="">
        </div>

        <img class="deco1" src="@/assets/index/decorate1.png" alt="">

      <!-- <div class="download-page-textbox">
        <div class="left-head">
          <div class="l-head"></div>
          <div class="r-head">
            <div class="t1">{{ $t("Home_35") }}</div>
            <div class="t2">{{ $t("Home_36") }}</div>
          </div>
        </div>

        <div style="display:flex;align-items:center;">
          <div class="downlaod-itembox">
            <div class="boxer">
              <div @click="downIOS()" class="download-item">
                <img src="../../assets/index/ios.png" alt="" />
                <div>{{ $t("Home_32") }}</div>
              </div>
              <div @click="downAndorid()" class="download-item">
                <img src="../../assets/index/andorid.png" alt="" />
                <div>{{ $t("Home_33") }}</div>
              </div>
            </div>
            <div class="boxer">
              <div @click="downChrome()" class="download-item">
                <img src="../../assets/index/chrome.png" alt="" />
                <div>{{ $t("Home_34") }}</div>
              </div>
              <div @click="downGoogle()" class="download-item">
                <img src="../../assets/index/googleplay.png" alt="" />
                <div>Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <img class="download-img" src="../../assets/index/download.png" alt="" /> -->
    </div>
</template>

<script>
export HomeTitle from './homeTtile.vue'
export { Common } from "@/utils";

export default {
    components:{
        HomeTitle
    },
    methods:{
      downIOS() {
      // console.log(Common.getStorageItem("lang"))
      // const isCN = Common.getStorageItem("lang") === "zh-CN";
      // if (isCN) {
      //   // window.open('https://testflight.apple.com/join/abV2hPXU')
      //   window.open("https://testflight.apple.com/join/zusuXNhi");
      // } else {
        // window.open('https://apps.apple.com/app/mobox-wallet/id1545109501?l=en')
        window.open("https://apps.apple.com/us/app/mobox-wallet/id1545109501");
      // }
    },

    downAndorid() {
      window.open("https://www.mobox.io/download/app-latest.apk");
    },

    downChrome() {
      if (Common.getStorageItem("lang") === "zh-CN") {
        window.open("https://www.mobox.io/download/moboxwallet.zip");
        this.isShowModal = true;
      } else {
        window.open(
          "https://chrome.google.com/webstore/detail/mobox-wallet/fcckkdbjnoikooededlapcalpionmalo?hl=en"
        );
      }
    },
    downGoogle() {
      window.open(
        "https://play.google.com/store/apps/details?id=com.mobox.wallet"
      );
    },
    }
}
</script>

<style lang="less" scoped>

.deco1{
    position: absolute;
    width: 15vw;
    bottom: -10%;
    left: -15vw;
}

.downbg{
    position: absolute;
    width: 99.7vw;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
}

.down-box{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left{
        text-align: left ;
        width: 40%;
    }

    .right{
        width: 45%;
    }
}

.down-content {
    margin-top: 30px;
    width: 100%;
    display:flex;
    align-items:center;
    // justify-content: center;
}

.boxer{
    width: 365px;
}

.normal-download-item{
    background: rgb(0, 0, 0);
    box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
    border-radius: 10px;
    cursor: pointer;

    margin: 10px 12px 10px 0;
    // padding: 10px;
    width: 170px;
    height: 45px;
    display: inline-block;

    .pack-content{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }

    .down-headtitle{
        font-size: 12px;
        opacity: 0.7;
    }

    .down-detail{
        font-size: 12px;
    }

    img {
        margin: 0 8px 0 12px;
        width: 20px;
        vertical-align: middle;
    }
}

.spine-momo-box2 {
  width: 200px;
  height: 200px;
  position: absolute;
  right: -12.4vw;
  overflow: hidden;
  margin: 0 !exportant;
  top: -89px;

  #spine-momo-2 {
    position: absolute;
    transform: rotate(-45deg);
    width: 200px;
    right: -80px;

    canvas {
      width: 200px !exportant;
      height: 200px !exportant;
    }
  }
}

.download-page {
    margin-top: 180px;
  padding: 20px 0 200px 0;
  text-align: center;
  position: relative;

  color: white;
  width: 100%;
  // background: url('../../assets/index/downbg.jpg');
  background-size: auto 100%;

  .mobile-state{
    display: none;
  }
//   margin: 10% 0 0 0;
}

// .download-page > img{
// 	vertical-align: middle;
// 	margin: 0 15px;
// }

// .download-page > div{
// 	display: inline-block;
// 	vertical-align: middle;
// 	margin: 0 15px;
// }

.download-item {
  background: #303338;
  box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
  border-radius: 10px;
  cursor: pointer;

  margin: 10px 0;
  // padding: 10px;
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  img {
    width: 20px;
    vertical-align: middle;
  }

  div {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    font-weight: bold;
  }
}

.downlaod-itembox {
  display: inline-block;
  margin: 10px 10px 0 32px;

  .boxer {
    margin: 0 5px;
    display: inline-block;
  }
}

.download-img {
  display: inline-block;
  vertical-align: middle;
  height: 310px;
  margin-left: 80px;
}

.code-box {
  background: #303338;
  box-shadow: 0px 28px 46px rgba(38, 68, 152, 0.08);
  border-radius: 10px;
  padding: 10px;

  div {
    width: 100%;
    text-align: center;
    // color:#FC9B65
  }
}

.code-box > img {
  width: 100px;
}

.download-page-textbox {
  display: inline-block;
  vertical-align: middle;
  margin: 0 15px;
  flex-direction: column;
}

.download-page-title-1 {
  font-size: 20px;
  font-weight: bold;
  height: 35px;
}

.download-page-title-2 {
  font-size: 14px;
}
</style>
return null;
