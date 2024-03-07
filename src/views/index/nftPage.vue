// <template>
//   <div id="nftPage" class="home-item-box nft-page">
//     <HomeTtile class="pc-state" :callback="setSelect" :title="[$t('Home_76'), $t('Home_77')]">
// //       <div v-if="selectIdx == 0" class="arrow-box">
// //         <img
//           @click="heroScrollTo(0)"
          class="arrow-left"
          src="../../assets/index/arrow1.png"
          alt=""
        <img
          @click="heroScrollTo(1)"
          class="arrow-right"
          src="../../assets/index/arrow1.png"
          alt=""
        />
      </div>
    </HomeTtile>

    <HomeTtile class="mobile-state" :callback="setSelect" :title="[$t('Home_76')]" />

    <div ref="pagehero" class="page-hero" v-show="selectIdx==0">
      <!-- <div class="game-head">
        <block-title
          :title="$t('Home_76')"
          describe="FREE TO PLAY"
        />
      </div> -->
        <!-- <img class="slogan" src="@/assets/cmcnft/slogan.png" alt="" /> -->

      <div class="game-momo-top">
        <div class="mobile-state">
          <div class="mobile-info-area">
            <div class="title-box">
              <img class="logo" src="@/assets/index/purchasecar.png" alt="">
              <div class="title" v-html="$t('guide_1')"></div>
            </div>
            <div class="info-detail">
              {{$t('guide_88')}}
            </div>
          </div>

          <div class="mobile-link-area">
            <div @click="$router.push('/iframe/momo')" class="mobile-link-item">
              {{$t("guide_2")}}
              <img class="retick" src="@/assets/index/retick.png" alt="">
            </div>
            <div @click="$router.push('/iframe/momo?path=market&tab=4')" class="mobile-link-item">
              {{$t("guide_3")}}
              <img class="retick" src="@/assets/index/retick.png" alt="">
            </div>
            <div @click="$router.push('/iframe/momo?path=market&tab=0')" class="mobile-link-item">
              {{$t("guide_4")}}
              <img class="retick" src="@/assets/index/retick.png" alt="">
            </div>
          </div>
        </div>

        <div class="game-box">
          <div class="game-hero-box">
            <div id="hero-spine" class="hero"></div>
          </div>
          <div class="game-hero-box-text">
            <div class="game-hero-right">
              <div class="right-box">
                <div class="detailnamebox">
                  <!-- <img
                    width="30"
                    src="@/assets/landing/elements/fire.webp"
                    alt=""
                  /> -->
                  <div class="name">{{ getName.normalName }}</div>
                  <div>></div>
                  <div class="name">{{ getName.upgradeName }}</div>
                </div>
                <div class="heroarr">
                  <img
                    class="hero1"
                    width="50"
                    :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_1.png`"
                    alt=""
                  />
                  <img
                    class="hero2"
                    width="50"
                    :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_2.png`"
                    alt=""
                  />
                  <img
                    class="hero3"
                    width="50"
                    :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_3.png`"
                    alt=""
                  />
                  <img
                    class="hero4"
                    width="50"
                    :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_4.png`"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="detailinfo">{{ getDescribe }}</div>
          </div>
        </div>

        <div class="game-scroll vertical-children">
          <!-- <img
            @click="heroScrollTo(0)"
            class="arrow"
            style="display: inline-block"
            src="@/assets/cmcnft/arrowl.png"
            alt=""
          /> -->
          <div ref="heroscroll" class="heroscroll">
            <div id="herocategory" class="herocategory">
              <div
                class="momo-cate-box"
                v-for="(item, idx) in momoArr"
                :key="idx"
              >
                <img
                  :class="`light-item ${
                    selectMomoId === item.id ? `light-active` : ``
                  }`"
                  src="@/assets/cmcnft/light.png"
                  alt=""
                />
                <img
                  @click="selectMomo(item)"
                  :class="`momo-item ${
                    selectMomoId === item.id ? `momo-active` : ``
                  }`"
                  :momoid="item.id"
                  :src="`./assets/images/heroes/momo_${item.id}/momo_${item.id}_4.png`"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="info-area pc-state">
            <div class="title-box">
              <img class="logo" src="@/assets/index/purchasecar.png" alt="">
              <div class="title" v-html="$t('guide_1')"></div>
            </div>
            <div class="info-detail">
              {{$t('guide_88')}}
            </div>
          </div>
          <div class="link-area pc-state">
            <div @click="$router.push('/iframe/momo')" class="link-item">
              {{$t("guide_2")}}
              <img class="retick" src="@/assets/index/retick.png" alt="">
            </div>
            <div @click="$router.push('/iframe/momo?path=market&tab=4')" class="link-item">
              {{$t("guide_3")}}
              <img class="retick" src="@/assets/index/retick.png" alt="">
            </div>
            <div @click="$router.push('/iframe/momo?path=market&tab=0')" class="link-item">
              {{$t("guide_4")}}
              <img class="retick" src="@/assets/index/retick.png" alt="">
            </div>
          </div>
          <!-- <img
            @click="heroScrollTo(1)"
            class="arrow"
            style="display: inline-block"
            src="@/assets/cmcnft/arrowr.png"
            alt=""
          /> -->
        </div>
      </div>
      <!-- 获取第一只MOMO -->
      <!-- <div class="get-momo">
        <div class="title-info">
          <img src="@/assets/index/get-momo-box.png" alt="" />
          <p>
            <span class="text-1">{{ $t("guide_1") }}</span>
          </p>
        </div>
        <p class="mobile-slogan">
          <span class="text-1">{{ $t("guide_1") }}</span>
        </p>
        <ul>
          <li @click="$router.push('/iframe/momo')">{{ $t("guide_2") }}</li>
          <li @click="$router.push('/iframe/momo?path=market&tab=4')">
            {{ $t("guide_3") }}
          </li>
          <li @click="$router.push('/iframe/momo?path=market&tab=0')">
            {{ $t("guide_4") }}
          </li>
        </ul>
      </div> -->
    </div>

    <div class="page-epic" v-show="selectIdx==1">
      <div class="box">
        <img class="bg" src="@/assets/cmcnft/showbg.png" alt="" />
        <div class="momo">
          <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="" />
          <img class="character" :src="getSelectEpicInfo.src" alt="" />
        </div>
        <div class="info">
          <div class="name">{{ getSelectEpicInfo.name }}</div>
          <img class="line" src="@/assets/cmcnft/splitline.png" alt="" />
          <div class="decs">{{ getSelectEpicInfo.desc }}</div>
        </div>
      </div>

      <div class="select-scroll">
        <img
          @click="epicScrollTo(0)"
          class="epic-arrow-left"
          src="@/assets/cmcnft/arrow1.png"
          alt=""
        />
        <div class="scroll-contain">
          <div ref="epicScroll" class="scroll-area">
            <div
              v-for="(item, index) in epicArr"
              :key="index"
              @click="selectEpic(index)"
              class="momo-box"
            >
              <div class="momo-box-top">
                <div :class="`bg ${selectedEpic == index ? `active` : ``}`"></div>
                <div class="momo-select-box">
                  <img class="character" :src="item.src" />
                  <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="" />
                </div>
              </div>
              <div class="name" v-html="item.title" />
              <div v-if="item.price" class="price">
                <a  v-if="item.link" :href="item.link"  target="_blank">Last <img src="@/assets/icon/busd.png" />{{ item.price }}</a>
                <span v-else>Last <img src="@/assets/icon/busd.png" />{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
        <img
          @click="epicScrollTo(1)"
          class="epic-arrow-left"
          src="@/assets/cmcnft/arrow2.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export HomeTtile from "./homeTtile.vue";
export { momoCfgs } from "@/views/landing/config.js";

export default {
  components: {
    HomeTtile,
  },
  data(){
    return {
      selectMomoId : 0,
      selectIdx : 0,
      selectedEpic : 0,

      epicArr: [
        {
          title: "CoinMarketCap<br />Robot",
          price: "57,000",
          name: `CoinMarketCap Robot`,
          src: `assets/images/cmcnft/momo1.png`,
          desc: `Meet Mr Roberto C.M.C Datatrom , He is flashy, he is Unique, he is super intelligent & always on the move! Watch him as he nuts through data, collaborates statistics & is up for for any challenge & ready to take on any of the MOMOs in the MOBOX Meterverse.`,
        },
        {
          title: "Danny<br />Dapporovsky",
          price: "96,000",
          name: `Danny Dapporovsky`,
          src: `assets/images/cmcnft/momo2.png`,
          desc: ` He is a unique & quick-witted number cruncher grasping all mathematical concepts and strategies quickly. He works through data & stats to compile the best outcome better than anyone in his field. Keep your eyes peeled for this numbers man he's ready to show off his sharp skills!`,
        },
        {
          title: "Bobo<br />Banana-Bot",
          price: "76,000",
          name: `Bobo Banana-Bot`,
          src: `assets/images/cmcnft/momo3.png`,
          desc: `Deep in the Apeswaposhphere Jungle lies a rare simian primate. Half bot half mammal. His mighty monkey-like attributes help him swing from tree to tree as he swaps from bot to monkey in the blink of an eye. Collect this banana loving tree hugger for your chance to see him in action.`,
        },
        {
          title: "Loda Team<br />Alliance",
          price: "391,220",
          name: `Loda Team Alliance`,
          src: `assets/images/cmcnft/momo4.png`,
          desc: `This unique guy is a famous E sports fan and takes Gaming to the next level. He is one of a kind and a leader in his pack. Collect this Rare Unique MOMO NFT for your chance to get a hold of a piece of E sports History!!`,
          link: 'https://bscscan.com/tx/0x457e32df83d3619cbcfde5ad0643bcd233c723ffeccd2c0f295fefab65218ff1',
        },
        {
          title: "Goldorian<br />Smart Chainadore",
          price: "560,883",
          name: `Goldorian Smart Chainadore`,
          src: `assets/images/cmcnft/momo5.png`,
          desc: `This unique feisty little guy blocks any unwanted predators from getting through to protect his community.Watch him flex in and out of ledgers of information adapting morphing and blocking any evil.`,
          link: 'https://bscscan.com/tx/0x46e3074ba31f10a67fd810acd83a4ace7c57097fc75c39ee140437d3860e38bb',
        },
        {
          title: "Bino<br />Binancian Bot",
          price: "350,000",
          name: `Bino Binancian Bot`,
          src: `assets/images/cmcnft/momo6.png`,
          desc: `he Is an engineered people pleaser with a tough outer chamber, helping charity is one of his sweeter roles. He is one of the main men in the Cryptosphere.  With his most powerful features & attributes being that he is brisk and quick to rush & assist his realm & people with swift & easy exchanges & transactions`,
        },
        {
          title: "Coming Soon",
          src: require("@/assets/cmcnft/momoq.png"),
        },
        {
          title: "Coming Soon",
          src: require("@/assets/cmcnft/momoq.png"),
        },
      ],
    }  
  },
  mounted(){
    this.selectMomoId = this.momoArr[0].id;
    this.setHeroSpine();
  },
  computed:{
    getSelectEpicInfo() {
      return this.epicArr[this.selectedEpic];
    },
    momoArr() {
      let arr = Object.values(momoCfgs);
      arr.sort((a, b) => {
          return a.index - b.index;
      });

      return arr;
    },
    getName() {
      if (momoCfgs[this.selectMomoId]) {
        const normalName = momoCfgs[this.selectMomoId].normalName;
        const upgradeName = momoCfgs[this.selectMomoId].upgradeName;

        return {
          normalName: this.$t(normalName),
          upgradeName: this.$t(upgradeName),
        };
      } else {
        return {
          normalName: "",
          upgradeName: "",
        };
      }
    },

    getDescribe() {
      if (momoCfgs[this.selectMomoId]) {
        return this.$t(momoCfgs[this.selectMomoId].describe);
      } else {
        return "";
      }
    },
  },
  methods: {
    setSelect(idx){
      this.selectIdx = idx;
      console.log(idx)
    },
    heroScrollTo(side) {
      const $scroll = window.$(this.$refs.heroscroll);
      const wholeWidth = $scroll.scrollWidth;
      const scrollOffset = $scroll.scrollLeft();

      const scrollTo =
        side == 0
        ? scrollOffset - 600 < 0
            ? 0
            : scrollOffset - 600
        : scrollOffset + 600 > wholeWidth
        ? wholeWidth
        : scrollOffset + 600;

      $scroll.animate(
          {
          scrollLeft: `${scrollTo}px`,
          },
          300
      );

      // if (side == 0) {
      //   console.log("????");
      //   this.$refs.heroscroll.scrollBy(-80, 0);
      // } else if (side == 1) {
      //   this.$refs.heroscroll.scrollBy(80, 0);
      // }
    },
    epicScrollTo(side) {
      const $scroll = window.$(this.$refs.epicScroll);
      const wholeWidth = $scroll.scrollWidth;
      const scrollOffset = $scroll.scrollLeft();

      const scrollTo =
        side == 0
        ? scrollOffset - 300 < 0
            ? 0
            : scrollOffset - 300
        : scrollOffset + 300 > wholeWidth
        ? wholeWidth
        : scrollOffset + 300;

      $scroll.animate(
          {
          scrollLeft: `${scrollTo}px`,
          },
          300
      );

      // if (side == 0) {
      //   // 往左
      //   console.log("????");
      //   this.$refs.epicScroll.scrollBy(-80, 0);
      // } else if (side == 1) {
      //   // 往右
      //   this.$refs.epicScroll.scrollBy(80, 0);
      // }
    },
    selectEpic(index) {
      if (this.epicArr[index].name) {
        this.selectedEpic = index;
      }
    },
    selectMomo(item) {
      this.selectMomoId = item.id;
      this.setHeroSpine();
    },
    setHeroSpine() {
      new window.spine.SpineWidget("hero-spine", {
        json: `./assets/images/herospine/momo_${this.selectMomoId}/momo_${this.selectMomoId}.json`,
        atlas: `./assets/images/herospine/momo_${this.selectMomoId}/momo_${this.selectMomoId}.atlas`,
        // json: "./assets/images/box/skeleton.json",
        // atlas: "./assets/images/box/skeleton.atlas",
        backgroundColor: "#00000000",
        animation: "animation",
        fitToCanvas: false,
        loop: true,
        scale: 0.3,
        x: 110,
        y: 110,
      });
      // console.log(spineData)
    },
  },
};
</script>

<style lang="less" scoped>
.mobile-state{
  display: none;
}

.arrow-left {
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
}

.arrow-right {
    width: 30px;
    transform: rotate(180deg);
    cursor: pointer;
}

.nft-page {
  margin-top: 136px;

  .page-hero {
    position: relative;
    width: 100%;
    margin: 40px auto 0 auto;

    .game-head {
      position: relative;

      .r-head {
        margin-right: 27px;
        display: flex;
        flex-direction: column;
        height: 54px;
        justify-content: space-between;
        text-align: right;

        .t1 {
          font-size: 20px;
          font-weight: bold;
        }
      }

      .slogan {
        position: absolute;
        height: 57px;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
      }
    }

    .game-momo-top{
        width: 100%;
        display: flex;
    }
    .game-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    //   border: 1px solid #34363b;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
      border-radius: 10px;
      background: rgb(20, 20, 20);

      width: 300px;
    //   margin: 30px 0;

      .game-hero-box {
        // background: #282B2F;
        // background: linear-gradient(145deg, #30bafd, #c320ff);
        // border: 1px solid #264498;
        border-radius: 10px;
        box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
        opacity: 1;
        position: relative;

        width: 300px;
        height: 230px;

        .hero {
          width: 230px;
          height: 230px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);

          /deep/ canvas {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(1.3);
            width: 230px !exportant;
            height: 230px !exportant;
          }
        }
      }

    //   .game-hero-box::before {
    //     content: "";
    //     position: absolute;
    //     // background: linear-gradient(145deg,#30bafd,#c320ff);
    //     background: #282b2f;
    //     left: 3px;
    //     top: 3px;
    //     bottom: 3px;
    //     right: 3px;
    //     z-index: 0;
    //     border-radius: 10px;
    //   }

      .game-hero-right {
        // flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(32, 34, 38);
        margin: 0 5px;

        .heroarr{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .detailnamebox {
          display: flex;
          align-items: center;
          justify-content: center;

          .name {
            margin: 10px;
            font-size: 18px;
            // font-weight: bold;
          }
        }

      }
    }
    
    .detailinfo {
      text-align:left;
      margin: 0 10%;
      margin-top: 10px;
      height: 85px;
      color: #9A9A9A;
    }

    .game-scroll {
      padding-bottom: 26px;
      position: relative;
      text-align: center;
      flex: 1;
      min-width: 0;
      // margin-top: 20px;
      user-select: none;
      margin-left: 3%;

      .arrow {
        width: 30px;
        cursor: pointer;
        transition: 0.2s all;
      }

      .arrow:hover {
        transform: translate(-2px, -2px);
      }

      .heroscroll {
        display: inline-block;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
      }

      .heroscroll::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
        scrollbar-arrow-color: red;
      }
      .heroscroll::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.2);
        scrollbar-arrow-color: red;
      }
      .heroscroll::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
      }

      .herocategory {
        white-space: nowrap;
        padding-bottom: 10px;

        .momo-cate-box {
          display: inline-block;
          position: relative;

          .momo-item {
            -webkit-filter: grayscale(1); /* Webkit */
            filter: gray; /* IE6-9 */
            filter: grayscale(1); /* W3C */
            opacity: 0.4;
            transform: translateY(10px);

            cursor: pointer;
            // width: 50px;
            width: 133px;
            margin: 0 8px;

            transition: 0.5s all;
          }

          .momo-active {
            -webkit-filter: grayscale(0) !exportant; /* Webkit */
            filter: grayscale(0) !exportant; /* W3C */
            opacity: 1 !exportant;
            transform: translateY(0) !exportant;
          }

          .light-item {
            transition: 0.5s all;

            position: absolute;
            // left: 0;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;

            width: 100px;
          }

          .light-active {
            opacity: 1;
          }
        }
      }

      .info-area{
        .title-box{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 20px 0 10px 0;
  

          .logo{
            width: 60px;
          }

          .title{
            font-family: 'Poppins-bold';
            margin-left: 27px;
            font-size: 48px;

            /deep/ span{
              font-family: 'Poppins-bold';
            }
          }
        }

        .info-detail{
          text-align: left;
          color: #9A9A9A;
        }
      }

      .link-area{
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #668EFF;

        .link-item{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          margin-right: 50px;
          opacity: 0.7;
          cursor: pointer;

          img{
            margin-left: 5px;
            height: 12px;
          }
        }

        .link-item:hover{
          opacity: 1;
        }
      }
    }

    // 获取第一只momo
    .get-momo {
      margin-top: 20px;
      border: 1px solid #34363b;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
      opacity: 1;
      border-radius: 10px;
      overflow: hidden;

      .mobile-slogan{
        display: none;
      }

      // 标题信息
      .title-info {
        display: flex;
        align-items: center;
        background: url(../../assets/index/box-bg.png) no-repeat 100%;

        img {
          width: 102px;
          margin-top: 5px;
        }

        span {
          display: block;
          color: #bcb4cd;
          font-weight: 800;
        }
      }

      ul {
        list-style: none;

        li {
          height: 69px;
          border: 1px solid #8a17c5;
          box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
          opacity: 1;
          border-radius: 10px;
          font-size: 14px;
          font-weight: bold;
          line-height: 17px;
          color: #ffffff;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: background-color 0.2s;
          cursor: pointer;

          &:hover {
            background-color: #8a17c5;
          }
        }
      }
    }
  }

  .page-epic {
    position: relative;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 1150px;

    .epic-head {
      width: 100%;
      margin-bottom: 40px;
    }

    .box {
      position: relative;
      display: flex;
      align-items: flex-end;
      margin-bottom: 85px;

      .bg {
        position: absolute;
        bottom: -15%;
        left: -15%;
        height: 95%;
      }

      .momo {
        position: relative;
        margin-right: 40px;
        height: 258px;

        .character {
          position: relative;
          width: 280px;
        }

        .shadow {
          width: 100%;
          position: absolute;
          bottom: -20px;
          left: 0;
        }
      }

      .info {
        position: relative;
        width: 500px;

        .name {
          font-family: Bigb;
          white-space: nowrap;
          font-size: 55px;
          font-weight: 400;
          color: #ffffff;
        }

        .line {
          max-width: 300px;
          margin: 10px 0;
        }

        .decs {
          max-width: 500px;
          min-height: 110px;
        }
      }
    }

    .select-scroll {
      display: flex;
      width: 110%;
      justify-content: center;
      align-items: center;

      .epic-arrow-left {
        cursor: pointer;
        width: 35px;
      }

      .epic-arrow-right {
        cursor: pointer;
        width: 35px;
      }

      .scroll-contain {
        width: 800px;
        max-width: 80%;
        margin: 0 20px;

        .scroll-area {
          width: 100%;
          white-space: nowrap;
          overflow: auto;
          padding: 20px 10px;

          .momo-box {
            display: inline-block;
            vertical-align: top;
            align-items: center;
            position: relative;
            width: 150px;
            cursor: pointer;
            text-align: center;

            .momo-box-top {
              margin: auto;
              position: relative;
              height: 105px;
              width: 90%;
              display: flex;
              align-items: flex-end;
              margin-bottom: 10px;

              .bg {
                transform: skew(15deg);
                width: 100%;
                height: 82px;
                background: #2e2e2e;
                border: 2px solid;
                border-image: linear-gradient(0deg, transparent, transparent) 2
                  2;
                // border-image: linear-gradient(0deg, #1B1C1D, #1578FF) 2 2;
              }

              .active {
                border-image: linear-gradient(0deg, #1b1c1d, #1578ff) 2 2;
              }

              .momo-select-box {
                position: absolute;
                width: 70%;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%, 0);

                .character {
                  position: relative;
                  z-index: 5;
                  width: 100%;
                }

                .shadow {
                  left: 50%;
                  position: absolute;
                  width: 120%;
                  transform: translate(-50%, 0);
                  bottom: -15px;
                }
              }
            }

            .name {
              margin-top: 10px;
              width: 90%;
              margin: auto;
              height: 36.8px;
              font-size: 13px;
              font-weight: bold;
              word-break: break-all;
              white-space: break-spaces;
            }

            // 价格
            .price {
              margin-top: 10px;

              & > * {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
              }

              img {
                width: 16px;
                height: 16px;
                margin: 0 6px;
              }
            }
          }
        }
      }

      .scroll-area::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 4px;
        scrollbar-arrow-color: red;
      }
      .scroll-area::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.2);
        scrollbar-arrow-color: red;
      }
      .scroll-area::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
console.log('Debug: fix: optimize NPC pathfinding logic');
