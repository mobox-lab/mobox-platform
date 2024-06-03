<template>
    <div id="gamebox" class="gamebox home-gamebox-contain home-item-box">
//         <!-- <div id="spine-momo-1"></div> -->
//         <!-- <div class="normal-title">{{$t("guide_87")}}</div> -->
// //             <div class="arrow-box">
// //                 <img
//                     @click="scrollSlide(-1, 1)"
//                     class="arrow-left"
                    src="../../assets/index/arrow1.png"
                    alt=""
                />
                <img
                    @click="scrollSlide(1, 1)"
                    class="arrow-right"
                    src="../../assets/index/arrow1.png"
                    alt=""
                />
            </div>
        </HomeTtile>

      <div class="home-gamebox-scroll-box">
        <!-- <div
          class="vertical-children game-title"
        >
          <img width="25" src="../../assets/index/gameboyhead.png" alt="" />
          <div style="display:inline-block;margin-left:10px">
            {{ $t("Home_51") }}
          </div>
        </div> -->


        <div style="position:relative;">

          <div ref="scroll1" class="home-gamebox-scroll pc-state">
            <!-- <div @click="gotoSlp()" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/gameslp.jpg" />
                </div>
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  MOBOX_SLP
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_16") }}
                </div>

                <div class="home-gamebox-rtext">
                  <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div> -->
            
            <div @click="toMomoverse" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/momover.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/momoverse/logo.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  <!-- {{ $t("Home_2") }} -->
                  MOMOverse
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  Collect, Combine, Build
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>
            
            <div @click="goToGameDetail('momo')" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game1.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/index/momohead.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_2") }}
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_16") }}
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>

            <div @click="toCZ" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/chainzarena/overview.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/chainzarena/logo.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_114") }}
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_115") }}
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>

            <div @click="toSlg" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/slg/image.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="@/assets/clash-moland/logo-2.png"
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">Clash of MOland</div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_118") }}
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>

            <div @click="goToTowerDefense" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/gametd.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/index/tdlogo.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{$t('Home_116')}}
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{$t('Home_117')}}
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>

            <div @click="goToGameDetail('blockbrawler')" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game5.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/index/blackhead.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_56") }}
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_57") }}
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>

            <div @click="goToGameDetail('tokenmaster')" class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game4.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/index/tokenhead.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_54") }}
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_55") }}
                </div>

                <div class="home-gamebox-rtext">
                    <img src="@/assets/index/gameboy.png" alt="">
                </div>
              </div>
            </div>

            <div class="home-gamebox">
              <div class="gamebox-area">
                <div class="bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game6.jpg" />
                </div>
                <img
                  class="title-pic"
                  src="../../assets/index/partyhead.png"
                  alt=""
                />
              </div>

              <div class="home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_74") }}
                </div>
                <div style="font-size:12px;color: #9A9A9A;">
                  {{ $t("Home_75") }}
                </div>
                <div class="home-gamebox-rtext">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="home-mobile-scroll">
        <div class="home-mobile-scroll-box">
          <div class="home-mobile-scroll-item" @click="goToGameDetail('momo')">
            <div class="mobile-gamebox-area">
              <div class="mobile-bg-pic" style="display:inline-block;">
                <img src="../../assets/index/game1.jpg" />
              </div>
              <img
                class="mobile-title-pic"
                src="../../assets/index/momohead.png"
                alt=""
              />
            </div>

            <div class="mobile-home-gamebox-textbox">
              <div style="font-weight:bold;color:white">
                {{ $t("Home_2") }}
              </div>
              <div style="font-size:12px;color: #9B9B9B;">
                {{ $t("Home_16") }}
              </div>

              <div class="mobile-home-gamebox-rtext">Go></div>
            </div>
          </div>
          <div class="home-mobile-scroll-item" @click="goToGameDetail('blockbrawler')">
            <div class="mobile-gamebox-area">
                <div class="mobile-bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game5.jpg" />
                </div>
                <img
                  class="mobile-title-pic"
                  src="../../assets/index/blackhead.png"
                  alt=""
                />
              </div>

              <div class="mobile-home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_56") }}
                </div>
                <div style="font-size:12px;color: #9B9B9B;">
                  {{ $t("Home_57") }}
                </div>

                <div class="mobile-home-gamebox-rtext">Go></div>
              </div>
          </div>
          <div class="home-mobile-scroll-item" @click="goToTowerDefense">
            <div class="mobile-gamebox-area">
                <div class="mobile-bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/gametd.jpg" />
                </div>
                <img
                  class="mobile-title-pic"
                  src="../../assets/index/tdlogo.png"
                  alt=""
                />
              </div>

              <div class="mobile-home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_116") }}
                </div>
                <div style="font-size:12px;color: #9B9B9B;">
                  {{ $t("Home_117") }}
                </div>

                <div class="mobile-home-gamebox-rtext">Go></div>
              </div>
          </div>
          <div class="home-mobile-scroll-item" @click="toCZ">
            <div class="mobile-gamebox-area">
                <div class="mobile-bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/chainzarena/overview.jpg" />
                </div>
                <img
                  class="mobile-title-pic"
                  src="../../assets/chainzarena/logo.png"
                  alt=""
                />
              </div>

              <div class="mobile-home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_114") }}
                </div>
                <div style="font-size:12px;color: #9B9B9B;">
                  {{ $t("Home_115") }}
                </div>

                <div class="mobile-home-gamebox-rtext">Go></div>
              </div>
          </div>
          <div class="home-mobile-scroll-item" @click="goToGameDetail('tokenmaster')">
            <div class="mobile-gamebox-area">
                <div class="mobile-bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game4.jpg" />
                </div>
                <img
                  class="mobile-title-pic"
                  src="../../assets/index/tokenhead.png"
                  alt=""
                />
              </div>

              <div class="mobile-home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_54") }}
                </div>
                <div style="font-size:12px;color:white">
                  {{ $t("Home_55") }}
                </div>

                <div class="mobile-home-gamebox-rtext">Go></div>
              </div>
          </div>
          <div class="home-mobile-scroll-item" @click="goToGameDetail('market')">
            <div class="mobile-gamebox-area">
                <div class="mobile-bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game3.jpg" />
                </div>
                <img
                  class="mobile-title-pic"
                  src="../../assets/index/contesthead.png"
                  alt=""
                />
              </div>

              <div class="mobile-home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_3") }}
                </div>
                <div style="font-size:12px;color:white">
                  {{ $t("Home_28") }}
                </div>

                <div class="mobile-home-gamebox-rtext">Go></div>
              </div>
          </div>
          <div class="home-mobile-scroll-item">
            <div class="mobile-gamebox-area">
                <div class="mobile-bg-pic" style="display:inline-block;">
                  <img style="width:100%" src="../../assets/index/game6.jpg" />
                </div>
                <img
                  class="mobile-title-pic"
                  src="../../assets/index/partyhead.png"
                  alt=""
                />
              </div>

              <div class="mobile-home-gamebox-textbox">
                <div style="font-weight:bold;color:white">
                  {{ $t("Home_74") }}
                </div>
                <div style="font-size:12px;color:white">
                  {{ $t("Home_75") }}
                </div>
                <div class="mobile-home-gamebox-rtext">Coming Soon</div>
              </div>
          </div>
          <!-- <div class="home-mobile-scroll-item">
            
          </div> -->
        </div>
      </div>
    </div>
</template>

<script>
import HomeTtile from "./homeTtile.vue";

export default {
    components: {
        HomeTtile
    },
    mounted(){
        this.scrollInit();
    },
    methods:{
        toMomoverse() {
			this.$router.push('/iframe/momoverse')
        },
        toCZ() {
			this.$router.push('/iframe/chainzarena')
        },
        gotoSlp(){
          this.$router.push("/iframe/mobox_slp");
        },
        toSlg() {
          this.$router.push("/iframe/clash-moland");
        },
        goToTowerDefense(){
          this.$router.push("/iframe/mobox_tower_defense");
        },
        goToGameDetail(type = "momo") {
            // if (type == "blockbrawler") {
            //   this.$router.push("/block-brawler");
            //   return;
            // }

            this.$store.commit("globalState/setGameDetail", type);
            this.$router.push("/gameDetail");
        },
        scrollSlide(direction, index) {
            const $scroll =
                index === 1
                ? window.$(this.$refs.scroll1)
                : window.$(this.$refs.scroll2);
            const wholeWidth = $scroll.scrollWidth;
            const scrollOffset = $scroll.scrollLeft();

            const scrollTo =
                direction < 0
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
        },
        scrollInit() {
            this.scroll1 = this.$refs.scroll1; // 获取DOM元素节点
            // 添加监听事件（不同浏览器，事件方法不一样，所以可以作判断，也可以如下偷懒）
            this.scroll1.addEventListener(
                "DOMMouseScroll",
                this.handlerMouserScroll1,
                false
            );
            this.scroll1.addEventListener(
                "mousewheel",
                this.handlerMouserScroll1,
                false
            );
        },
        handlerMouserScroll1(event) {
            let detail = event.wheelDelta || event.detail;
            let moveForwardStep = -1;
            let moveBackStep = 1;
            let step = detail > 0 ? moveForwardStep * 20 : moveBackStep * 20;
            this.scroll1.scrollLeft = this.scroll1.scrollLeft + step;

            event.preventDefault();
        },
    }

}
</script>

<style lang="less" scoped>
    .gamebox{
        margin-top: 123px;
    }

    .home-mobile-scroll{
        display: none;
    }

    .arrow-box{
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
    }

    .game-title{
        text-align:left;
        margin-bottom:17px;
    }

    .home-gamebox-contain {
        width: 100%;
        text-align: center;
        // padding: 50px 0;
        position: relative;
        background: rgb(32, 34, 38);

        .home-gamebox-bg {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;

            background: url("../../assets/index/homeboxbg.png");
            background-size: cover;
        }

        .home-gamebox-scroll {
            white-space: nowrap;
            overflow: auto;
            max-width: 100%;
            position: relative;
        }

        .home-gamebox-scroll::-webkit-scrollbar-thumb {
            background: transparent;
        }

        .home-gamebox-scroll-box {
            position: relative;
            width: 100%;
            // max-width: 100%;
            margin: auto;

            .vertical-children {
            padding: 0 25px;
            margin-top: 5px;
            }
        }

        .home-gamebox-scroll-box:after {
            position: absolute;
            content: "";
            width: 10%;
            height: 100%;
            top: 0;
            right: 0;
            background: linear-gradient(to right, transparent, rgb(32, 34, 38));
        }
    }

    .home-gamebox > img {
        width: 100%;
        border-radius: 10px;
    }

    .home-gamebox-textbox {
        text-align: left;
        padding-top: 30px;
        position: relative;
    }

    .home-gamebox-rtext {
        position: absolute;
        right: 15px;
        text-align: right;
        bottom: 0;
        color: #fc9b65;
        font-weight: bold;
        opacity: 0.5;

        img{
            width: 33px;
        }
    }

    .home-gamebox {
        /* max-width: 350px;
        display: inline-block; */
        cursor: pointer;
        max-width: 300px;
        display: inline-block;
        margin: 0 3% 0 0;
        transition: 0.2s all;
        position: relative;
        background: transparent;
        border-radius: 10px;
        // background: #282B2F;

        .gamebox-area {
            position: relative;
        }

        .bg-pic {
            border-radius: 10px;
            overflow: hidden;
            display: inline-block;

            img {
            transition: 0.2s all;
            }
        }

        .title-pic {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 150px;
            transform: translate(-50%, -50%);
        }
    }

    .home-gamebox:hover {

        .home-gamebox-rtext{
            opacity: 1;
        }
    .gamebox-area {
        .bg-pic {
        img {
            transform: scale(1.1);
        }
        }
    }
    }
</style>
if (Math.random() > 0.5) console.warn('Potential issue detected');
