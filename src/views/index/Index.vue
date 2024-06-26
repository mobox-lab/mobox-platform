<template>
  <!-- <div class="index">index21</div> -->
  <div class="home">
//     <!-- <Banner></Banner> -->
//     
//     <!-- <div v-if="showMenu" class="guide-left-menu pc-state guide-left-fixed" :style="getTop"> -->
//     <div v-if="showMenu" :class="`pc-state guide-left-menu ${scrollTop > menuTop ? `guide-left-fixed` : ``}`" :style="getTop">
      <div class="guide-line">
        <img :style="getArrowTop" class="guide-arrow" src="@/assets/index/guidearrow.png" alt="">
      </div>
      <div class="menu-box">
        <ul>
          <li v-for="(item,idx) in menuArr" :key="idx" :class="selectMenuIdx == idx ? `menu-active` : ``" @click="toGuidePos(idx)">{{$t(item.title)}}</li>
        </ul>
      </div>
    </div>

    <div class="big-banner pc-state">
      <img src="@/assets/index/maskbg.jpg" alt="">
      
      <div class="banner-box">
        <div class="banner-title" v-html="$t('guide_81')"></div>
        <div class="banner-detail" v-html="$t('guide_82')"></div>

        <div class="banner-ctrls">
          <img class="sidebar" src="@/assets/index/playbar.png" alt="">
          <img @click="setVideo" class="playbtn" src="@/assets/index/playbtn.png" alt="">
          <img class="sidebar" style="transform:rotate(180deg)" src="@/assets/index/playbar.png" alt="">
        </div>

        <div style="display:flex;align-items:center;justify-content: center;">
          <div class="banner-itembox">
            <div class="boxer">
              <div @click="downIOS()" class="banner-download-item">
                <img src="../../assets/index/ios.png" alt="" />
                <div>
                  <div class="down-headtitle">Download The</div>
                  <div class="down-detail">iOS Download</div>
                </div>
              </div>
              <div @click="downAndorid()" class="banner-download-item">
                <img src="../../assets/index/andorid.png" alt="" />
                <div>
                  <div class="down-headtitle">Download The</div>
                  <div class="down-detail">Android APP</div>
                </div>
              </div>
              <div @click="downChrome()" class="banner-download-item">
                <img src="../../assets/index/chrome.png" alt="" />
                <div>
                  <div class="down-headtitle">Download The</div>
                  <div class="down-detail">Chrome Plugin</div>
                </div>
              </div>
              <div @click="downGoogle()" class="banner-download-item">
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
    
    <CommunityUpdate />

    <!-- <div class="swpier-box">
      <div ref="container" class="swiper-container">
        <div class="swiper-wrapper">
          <div @click="toCZ" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getCZ" alt="" />
            </div>
          </div>
          <div @click="toBw" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getBWPic" alt="" />
            </div>
          </div>
          <div @click="toTm" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getTMPic" alt="" />
            </div>
          </div>
          <div class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" src="@/assets/index/banner24.jpg" alt="" />
            </div>
          </div>
          <div class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" src="@/assets/index/banner25.jpg" alt="" />
            </div>
          </div>
          <div @click="toCmcReport" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" src="@/assets/index/banner21.jpg" alt="" />
            </div>
          </div>
          <div @click="toRaffle" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getRaffle" alt="" />
            </div>
          </div>
          <div
            @click="toTokenmaster"
            class="swiper-slide"
            style="cursor:pointer"
          >
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getModelPic" alt="" />
            </div>
          </div>
          <div @click="toGuide" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getGuidePic" alt="" />
            </div>
          </div>
          <div @click="toCommunity" style="cursor:pointer" class="swiper-slide">
            <div class="swiper-img-box">
              <img class="swiper-img" :src="getComPic" alt="" />
            </div>
          </div>
          <div @click="toDownLoad" style="cursor:pointer" class="swiper-slide">
            <div class="swiper-img-box">
              <img class="swiper-img" src="@/assets/index/banner16.jpg" alt="" />
            </div>
          </div>
          <div @click="toDownLoad" style="cursor:pointer" class="swiper-slide">
            <div class="swiper-img-box">
              <img class="swiper-img" src="@/assets/index/banner7.jpg" alt="" />
            </div>
          </div>
          <div @click="toCmc" class="swiper-slide" style="cursor:pointer">
            <div class="swiper-img-box">
              <img class="swiper-img" src="@/assets/index/banner0.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div @click="toGuideWay" v-if="showGuide" class="next-page">
      <img width="50" src="@/assets/landing/elements/nextpage.png" alt="" />
    </div>

    <!-- <section class="under0">
      <img class="left-bg" src="@/assets/cmcnft/bg2.png" alt="" />
    </section> -->
    <!-- <section class="under1">
      <img class="right-bg" src="@/assets/cmcnft/bg2.png" alt="" />
    </section> -->
    <!-- <section class="under2">
      <img class="left-bg" src="@/assets/cmcnft/bg2.png" alt="" />
    </section> -->
    <!-- <section class="under3">
      <img class="left-bg" src="@/assets/cmcnft/bg3.png" alt="" />
      <img class="right-bg" src="@/assets/cmcnft/bg4.png" alt="" />
    </section> -->
    <!-- <section class="under4">
      <img class="right-bg" src="@/assets/cmcnft/bg2.png" alt="" />
    </section>
    <section class="under5">
      <img class="left-bg" src="@/assets/cmcnft/bg2.png" alt="" />
    </section> -->

    <!-- <div>系统公告：帮助互联网团队更好地管理文档和设计图。可以在线展示Axure，自动生成设计图标注，展示页面之间的跳转关.</div> -->

    <GameBox />
    <NftPage />

    <!-- <div id="spine-momo-1"></div> -->
    <!-- <div class="home-gamebox-contain">

      <div class="home-gamebox-scroll-box">
        <div
          class="vertical-children game-title"
        >
          <img width="25" src="../../assets/index/gameboyhead.png" alt="" />
          <div style="display:inline-block;margin-left:10px">
            {{ $t("Home_51") }}
          </div>
        </div>

        <div style="position:relative;">
          <img
            @click="scrollSlide(-1, 1)"
            class="arrow-left"
            src="../../assets/index/arrow.png"
            alt=""
          />
          <img
            @click="scrollSlide(1, 1)"
            class="arrow-right"
            src="../../assets/index/arrow.png"
            alt=""
          />

          <div ref="scroll1" class="home-gamebox-scroll pc-state">
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
                <div style="font-size:12px;color:white">
                  {{ $t("Home_16") }}
                </div>

                <div class="home-gamebox-rtext">Go></div>
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
                <div style="font-size:12px;color:white">
                  {{ $t("Home_115") }}
                </div>

                <div class="home-gamebox-rtext">Go></div>
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
                <div style="font-size:12px;color:white">
                  {{ $t("Home_57") }}
                </div>

                <div class="home-gamebox-rtext">Go</div>
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
                <div style="font-size:12px;color:white">
                  {{ $t("Home_55") }}
                </div>

                <div class="home-gamebox-rtext">Go></div>
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
                <div style="font-size:12px;color:white">
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
        </div>
      </div>
    </div> -->

    <!-- <div ref="pagehero" class="page-hero">
      <div class="game-head">
        <block-title
          :title="$t('Home_76')"
          describe="FREE TO PLAY"
        />
        <img class="slogan" src="@/assets/cmcnft/slogan.png" alt="" />
      </div>

      <div class="game-momo-top">
        <div class="game-box">
          <div class="game-hero-box">
            <div id="hero-spine" class="hero"></div>
          </div>
          <div class="game-hero-right">
            <div class="right-box">
              <div class="heroarr">
                <img
                  class="hero1"
                  width="120"
                  :src="
                    `./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_1.png`
                  "
                  alt=""
                />
                <img
                  class="hero2"
                  width="120"
                  :src="
                    `./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_2.png`
                  "
                  alt=""
                />
                <img
                  class="hero3"
                  width="120"
                  :src="
                    `./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_3.png`
                  "
                  alt=""
                />
                <img
                  class="hero4"
                  width="120"
                  :src="
                    `./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_4.png`
                  "
                  alt=""
                />
              </div>
              <div class="detailnamebox">
                <img
                  width="30"
                  src="@/assets/landing/elements/fire.webp"
                  alt=""
                />
                <div class="name">{{ getName.normalName }}</div>
                <div>▶</div>
                <div class="name">{{ getName.upgradeName }}</div>
              </div>
              <div class="detailinfo">{{ getDescribe }}</div>
            </div>
          </div>
        </div>

        <div class="game-scroll vertical-children">
          <img
            @click="heroScrollTo(0)"
            class="arrow"
            style="display: inline-block;"
            src="@/assets/cmcnft/arrowl.png"
            alt=""
          />
          <div ref="heroscroll" class="heroscroll">
            <div id="herocategory" class="herocategory">
              <div
                class="momo-cate-box"
                v-for="(item, idx) in momoArr"
                :key="idx"
              >
                <img
                  :class="
                    `light-item ${selectMomoId === item.id ? `light-active` : ``}`
                  "
                  src="@/assets/cmcnft/light.png"
                  alt=""
                />
                <img
                  @click="selectMomo(item)"
                  :class="
                    `momo-item ${selectMomoId === item.id ? `momo-active` : ``}`
                  "
                  :momoid="item.id"
                  :src="
                    `./assets/images/heroes/momo_${item.id}/momo_${item.id}_4.png`
                  "
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            @click="heroScrollTo(1)"
            class="arrow"
            style="display: inline-block;"
            src="@/assets/cmcnft/arrowr.png"
            alt=""
          />
        </div>
      </div>
      <div class="get-momo">
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
          <li @click="$router.push('/iframe/momo?path=market&tab=4')">{{ $t("guide_3") }}</li>
          <li @click="$router.push('/iframe/momo?path=market&tab=0')">{{ $t("guide_4") }}</li>
        </ul>
      </div>
    </div> -->
    <!-- 传说NFT -->
    <!-- <div class="page-epic">
      <div class="epic-head">
        <block-title
          :title="$t('Home_77')"
          describe="FREE TO PLAY"
          direction="right"
        >
          <router-link to="/iframe/momo?path=activity&tab=3" class="block-tag"
            >{{ $t("guide_5") }}></router-link
          >
        </block-title>
      </div>

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
                <div :class="`bg ${selectedEpic == 0 ? `active` : ``}`"></div>
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
    </div> -->
    <!-- 新手指引 -->
    <Guidelines />
    <Milestone />
    <Ecosystem />

    <!-- <div class="page-adver">
      <block-title
       class="pc-state"
        :title="$t('Home_78')"
        describe="FREE TO PLAY"
        direction="right"
      />

      <block-title
        class="mobile-head"
        :title="$t('Home_78')"
        describe="FREE TO PLAY"
        direction="left"
      />

      <div class="achieve-content">
        <div class="achieve-box">
          <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="" />
          <img
            width="100"
            class="achieve-box-title"
            src="@/assets/index/achievement-1.png"
            alt=""
          />
          <div class="pc-state amount">NO.1</div>
          <div class="pc-state tip">{{ $t("guide_12") }}</div>
          <div class="pc-state title">GameFi</div>

          <div class="mobile-info">
            <div style="display:flex;align-items:center;">
              <div class="amount" style="margin-right:10px;">NO.1</div>
              <div class="title" style="padding:2px 10px;">GameFi</div>
            </div>
            <div class="tip" style="text-align:left;padding:0px;width:150px">{{ $t("guide_12") }}</div>
          </div>
        </div>
        <div class="achieve-box achieve-reverse">
          <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="" />
          <img
            width="100"
            class="achieve-box-title"
            src="@/assets/index/achievement-2.png"
            alt=""
          />
          <div class="pc-state amount">$120M+</div>
          <div class="pc-state tip">{{ $t("Home_80") }}</div>
          <div class="pc-state title">NFT Farmer</div>

          <div class="mobile-info">
            <div style="display:flex;align-items:center;">
              <div class="amount" style="margin-right:10px;">$120M+</div>
              <div class="title" style="padding:2px 10px;">NFT Farmer</div>
            </div>
            <div class="tip" style="text-align:left;padding:0px;width:150px">{{ $t("Home_80") }}</div>
          </div>
        </div>
        <div class="achieve-box">
          <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="" />
          <img
            width="100"
            class="achieve-box-title"
            src="@/assets/index/achievement-3.png"
            alt=""
          />
          <div class="pc-state amount">320K+</div>
          <div class="pc-state tip">{{ $t("Home_81") }}</div>
          <div class="pc-state title">Community</div>

          <div class="mobile-info">
            <div style="display:flex;align-items:center;">
              <div class="amount" style="margin-right:10px;">320K+</div>
              <div class="title" style="padding:2px 10px;">Community</div>
            </div>
            <div class="tip" style="text-align:left;padding:0px;width:150px">{{ $t("Home_81") }}</div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="page-opr">

      <block-title
        :title="$t('Home_84')"
        describe="FREE TO PLAY"
        direction="left"
      />
      
      <div class="eco-content">
        <div class="eco-menu">
          <div class="eco-contain">
            <div
              @click="openIto(0)"
              :class="`section ${introIdx === 0 ? `active` : ``}`"
            >
              {{ $t("Home_85") }}
            </div>
            <div
              @click="openIto(1)"
              :class="`section ${introIdx === 1 ? `active` : ``}`"
            >
              {{ $t("Home_86") }}
            </div>
            <div
              @click="openIto(2)"
              :class="`section ${introIdx === 2 ? `active` : ``}`"
            >
              VeMBOX
            </div>
            <div
              @click="openIto(3)"
              :class="`section ${introIdx === 3 ? `active` : ``}`"
            >
              MOMO Creator
            </div>
            <div
              @click="openIto(4)"
              :class="`section ${introIdx === 4 ? `active` : ``}`"
            >
              {{ $t("Home_95") }}
            </div>
          </div>
        </div>
        <div class="eco-box">
          <div v-if="introIdx === 0" class="intro1">
            <div class="video vertical-children">
              <iframe
                width="100%"
                height="100%"
                :src="getVideoSrc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <div class="video-list">
                <div
                  @click="chooseVideo(0)"
                  :class="`li ${selectVIdx == 0 ? `active` : ``}`"
                >
                  <img class="bg" :src="videoArr[0].img" alt="" />
                  <img class="play" src="@/assets/cmcnft/play.png" alt="" />
                </div>
                <div
                  @click="chooseVideo(1)"
                  :class="`li ${selectVIdx == 1 ? `active` : ``}`"
                >
                  <img class="bg" :src="videoArr[1].img" alt="" />
                  <img class="play" src="@/assets/cmcnft/play.png" alt="" />
                </div>
                <div
                  @click="chooseVideo(2)"
                  :class="`li ${selectVIdx == 2 ? `active` : ``}`"
                >
                  <img class="bg" :src="videoArr[2].img" alt="" />
                  <img class="play" src="@/assets/cmcnft/play.png" alt="" />
                </div>
                <div
                  @click="chooseVideo(3)"
                  :class="`li ${selectVIdx == 3 ? `active` : ``}`"
                >
                  <img class="bg" :src="videoArr[3].img" alt="" />
                  <img class="play" src="@/assets/cmcnft/play.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div v-if="introIdx === 1" class="intro2">
            <div class="titles">
              <div class="title1">
                <div>{{ $t("Home_87") }}</div>
                <div style="color:#FAB408">{{ `$${getBuyback.amount}` }}</div>
              </div>
              <div class="title2">
                <div>{{ $t("Home_88") }}</div>
                <div style="color:#FAB408">
                  {{ `MBOX ${getBuyback.moboxBurn}` }}
                </div>
              </div>
            </div>
            <div class="process"></div>
          </div>
          <div v-if="introIdx === 2" class="intro3">
            <div class="titles">
              <div class="title1">
                <div>{{ $t("Home_89") }}</div>
                <div style="color:#FAB408">{{ mboxInfo.totalMobox }}</div>
              </div>
              <div class="title2">
                <div>{{ $t("Home_90") }}</div>
                <div style="color:#FAB408">{{ mboxInfo.totalVemobox }}</div>
              </div>
            </div>
            <div class="title3">
              <div>{{ $t("Home_91") }}</div>
              <div style="color:#FAB408">{{ mboxInfo.avglockdays }}</div>
            </div>

            <div class="title4">
              {{ $t("Home_92") }}
              <br />
              <br />
              {{ $t("Home_93") }}
              <br />
              <br />
              {{ $t("Home_94") }}
            </div>
          </div>
          <DrawItem v-if="introIdx === 3" />
          <div v-if="introIdx === 4" class="intro5">
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q4 2020</div>
              <div class="schdule">
                <div class="line_content line_m" v-html="$t('Home_101')"></div>
              </div>
              <div class="end">{{ $t("Register_24") }}</div>
            </div>
            <div class="line"></div>
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q1 2021</div>
              <div class="schdule">
                <div class="line_content line_m" v-html="$t('Home_102')"></div>
              </div>
              <div class="end">{{ $t("Register_24") }}</div>
            </div>
            <div class="line"></div>
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q2 2021</div>
              <div class="schdule">
                <div class="line_content" v-html="$t('Home_103')"></div>
              </div>
              <div class="end"></div>
            </div>
            <div class="line"></div>
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q3 2021</div>
              <div class="schdule">
                <div class="line_content" v-html="$t('Home_104')"></div>
              </div>
              <div class="end"></div>
            </div>
            <div class="line"></div>
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q4 2021</div>
              <div class="schdule">
                <div class="line_content" v-html="$t('Home_105')"></div>
              </div>
              <div class="end"></div>
            </div>
            <div class="line"></div>
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q1 2022</div>
              <div class="schdule">
                <div class="line_content" v-html="$t('Home_106')"></div>
              </div>
              <div class="end"></div>
            </div>
            <div class="line"></div>
            <div class="stgae">
              <img class="clock" src="@/assets/cmcnft/clock.png" alt="" />
              <div class="quater">Q2 2022</div>
              <div class="schdule">
                <div class="line_content" v-html="$t('Home_107')"></div>
              </div>
              <div class="end"></div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 愿景 -->
    <our-vision />
    <!-- 实体盲盒 -->
    <blind-box />

    <Contact />
    <Cooper />

    <!-- <div class="page-community">
      <div class="contact-head">
        <div class="l-head"></div>
        <div class="r-head">
          <div class="t1">{{ $t("Home_96") }}</div>
          <div class="t2">FREE TO PLAY</div>
        </div>

        <div class="contact-area">
          <div
            @click="selectCon(0)"
            :class="`contact-box ${selectContact == 0 ? `active` : ``}`"
          >
            <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            />
            <img
              class="contact-item"
              width="100"
              src="assets/images/cmcnft/tele.svg"
              alt=""
            />
          </div>
          <div
            @click="selectCon(1)"
            :class="`contact-box ${selectContact == 1 ? `active` : ``}`"
          >
            <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            />
            <img
              class="contact-item"
              width="100"
              src="assets/images/cmcnft/twitter.svg"
              alt=""
            />
          </div>
          <div
            @click="selectCon(2)"
            :class="`contact-box ${selectContact == 2 ? `active` : ``}`"
          >
            <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            />
            <img
              class="contact-item"
              width="100"
              src="assets/images/cmcnft/wechat.svg"
              alt=""
            />
          </div>
          <div
            @click="selectCon(3)"
            :class="`contact-box ${selectContact == 3 ? `active` : ``}`"
          >
            <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            />
            <img
              class="contact-item"
              width="100"
              src="assets/images/cmcnft/discord.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="contact-content">
        <div class="contact-left">
          <div class="logo">
            <img width="100" :src="getContact.src" alt="" />
          </div>
          <div class="info">
            <div>{{ getContact.name }}</div>
            <div style="color:#FAB408">{{ getContact.amount }}</div>
          </div>
        </div>
        <div class="contact-right">
          <div>{{ $t("Home_97") }}</div>
          <div v-if="selectContact == 2" class="code">
            <img src="@/assets/index/homeqrcode.jpg" alt="" />
          </div>
          <div v-else @click="openContact" class="sub-btn">
            {{ $t("Home_98") }}
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="page-cooperate">
      <block-title
        :title="$t('Home_99')"
        describe="FREE TO PLAY， PLAY TO EARN"
        direction="left"
      />

      <div class="team-content">
        <div class="team-group">
          <img
            @click="openMate(`cmc`)"
            class="left"
            src="@/assets/cmcnft/group3.png"
            alt=""
          />
          <img
            @click="openMate(`bsc`)"
            class="middle"
            src="@/assets/cmcnft/group1.png"
            alt=""
          />
          <img
            @click="openMate(`pancake`)"
            class="right"
            src="@/assets/cmcnft/group2.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`math`)"
            class="left"
            src="@/assets/cmcnft/group4.png"
            alt=""
          />
          <img
            @click="openMate(`dapp`)"
            class="middle"
            src="@/assets/cmcnft/group5.png"
            alt=""
          />
          <img
            @click="openMate(`tp`)"
            class="right"
            src="@/assets/cmcnft/group6.png"
            alt=""
          />
        </div>
        <div class="team-group sb-demand">
          <img
            @click="openMate(`ape`)"
            class="left"
            src="@/assets/cmcnft/group7.png"
            alt=""
          />
          <img
            @click="openMate(`cko`)"
            class="middle"
            src="@/assets/cmcnft/group8.png"
            alt=""
          />
          <img
            @click="openMate(`certik`)"
            class="right"
            src="@/assets/cmcnft/group9.png"
            alt=""
          />
        </div>
        <div class="team-group high-demand">
          <img
            @click="openMate(`binance`)"
            class="left"
            src="@/assets/cmcnft/group13.png"
            alt=""
          />
          <img
            @click="openMate(`bnft`)"
            class="middle"
            src="@/assets/cmcnft/group10.png"
            alt=""
          />
          <img
            @click="openMate(`a`)"
            class="right"
            src="@/assets/cmcnft/group12.png"
            alt=""
          />
        </div>
      </div>
    </div> -->

    <!-- <div
      class="home-newbox-contain"
      style="width:100%;text-align:center;background:rgb(25,27,32);"
    >

      <div class="home-newbox-scroll-box">
        <div class="news-head">
          <div class="l-head"></div>
          <div class="r-head">
            <div class="t1">{{ $t("Home_52") }}</div>
            <div class="t2">FREE TO PLAY</div>
          </div>
        </div>

        <div class="news-box vertical-children">
          <div
            @click="getUrl(item)"
            v-for="(item, idx) in getNews"
            :key="idx"
            class="item vertical-children"
          >
            <div class="title">{{ "0" + (idx + 1) }}</div>
            <div class="content">{{ item.lang }}</div>
            <div class="time">{{ getTs(item.ts) }}</div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div id="downloadPage" class="border-3d download-page">
      <div class="spine-momo-box2">
        <div id="spine-momo-2"></div>
      </div>

      <div class="download-page-textbox">
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
      </div>

      <img class="download-img" src="../../assets/index/download.png" alt="" />
    </div> -->

    <DownPage />

    <!-- <div class="spine-momo-box2">
      <div id="spine-momo-2"></div>
    </div> -->

    <Footer />

    <!-- <footer class="border-3d">
      <img class="footer-bg" width="100%" src="@/assets/index/bottombg.png" alt="">
      <div class="first-line">
        <img height="36" class="logo" src="@/assets/head1.png" alt="" />
        <div class="footer-contact">
          <a target="_blank" href="https://twitter.com/MOBOX_Official"
            ><img type="twitter" src="@/assets/index/twitter.webp"
          /></a>
          <a target="_blank" href="https://t.me/mobox_io"
            ><img type="tele" src="@/assets/index/telegram.webp"
          /></a>
          <a target="_blank" href="https://discord.com/invite/mobox"
            ><img type="kakao" src="@/assets/index/discord.png"
          /></a>
        </div>
      </div>
      <div class="bottom">
        Copyright © 2021 MOBOX DIGITAL CO., LTD. All rights reserved.
      </div>
      <div class="bottom-contact" style="color:#9a9a9a">
        <span @click="openServe" style="cursor:pointer">{{
          $t("Home_29")
        }}</span
        >|
        <span @click="openPrivate" style="cursor:pointer">{{
          $t("Home_30")
        }}</span
        >|
        <span @click="openMail" style="cursor:pointer;color:#fff">{{
          $t("Home_31")
        }}</span>
      </div>
    </footer> -->

    <Dialog v-model="isShowModal">
      <!-- <Binder :type="binderType" /> -->
      <Guide />
    </Dialog>
    <Dialog v-bind:maskType="'black'" v-model="isShowPool">
      <div class="pool-info-box">
        <div class="pool-head" style="margin-right:10px">
          <div class="title">TVL</div>
          <div class="content">{{ getConvert(poolInfo.tvl) }}</div>
        </div>
        <div class="pool-head" style="margin-left:10px">
          <div class="title">NFTs Minted</div>
          <div class="content">${{ getConvert(poolInfo.minted) }}</div>
        </div>
        <div class="pool-excel-box">
          <div class="pool-excel">
            <span>key/Day</span>
            <span style="float:right">{{
              getConvert(poolInfo.keyPerDay)
            }}</span>
          </div>
          <div class="pool-excel">
            <span>mobox/Day</span>
            <span style="float:right">{{
              getConvert(poolInfo.moboxPerDay)
            }}</span>
          </div>
          <div class="pool-excel">
            <span>mobox销毁池</span>
            <span style="float:right">{{
              getConvert(poolInfo.poolBalance)
            }}</span>
          </div>
          <div class="pool-excel">
            <span>总算力</span>
            <span style="float:right">{{
              getConvert(poolInfo.totalHashrate)
            }}</span>
          </div>
          <div class="pool-excel">
            <span>mobox supply</span>
            <span style="float:right">{{
              Number(poolInfo.moboxSupply).toLocaleString()
            }}</span>
          </div>
          <div class="pool-excel">
            <span>mobox burn</span>
            <span style="float:right">{{
              Number(poolInfo.moboxBurn).toLocaleString()
            }}</span>
          </div>
        </div>
        <div @click="showPool(false)" style="text-align:center;">
          <div class="pool-btn">Close</div>
        </div>
      </div>
    </Dialog>

    <HomeVideo v-show="showVideo" />
  </div>
</template>

<script>
// export Banner from '@/components/Banner';
export { mapState } from "vuex";
export { momoCfgs } from "@/views/landing/config.js";
export { Common } from "@/utils";
export Dialog from "@/components/Dialog";
export Guide from "@/components/Header/Guide";
// export BlockTitle from "@/components/BlockTitle.vue";
export QRCode from "qrcodejs2";
// export DrawItem from "../cmcPage/drawItem.vue";
export request from "@/utils/request";
export Guidelines from "./guidelines.vue";
export CommunityUpdate from "./communityUpdate.vue";
export NftPage from "./nftPage.vue";
export GameBox from "./gamebox.vue";
export OurVision from "./our-vision.vue";
export BlindBox from "./blind-box.vue";
export Contact from "./contact.vue";
export Cooper from "./cooper.vue";
export DownPage from "./downPage.vue";
export HomeVideo from "@/components/HomeVideo";
export Footer from "./footer.vue";
export {
  API_BUYBACK_AMOUNT,
  API_AVG_DAYS,
  // HOME_BANNER,
} from "@/utils/constant";
export { MATE_LINK } from "@/utils/enums.js";

export pic_zh from "@/assets/index/banner6_1.jpg";
export pic_en from "@/assets/index/banner6_2.jpg";
export momo_zh from "@/assets/index/banner8_1.jpg";
export momo_en from "@/assets/index/banner8_2.jpg";
export bw_zh from "@/assets/index/banner11_1.jpg";
export bw_en from "@/assets/index/banner11_2.jpg";
export tm_zh from "@/assets/index/banner23_1.jpg";
export tm_en from "@/assets/index/banner23_2.jpg";
export contest_zh from "@/assets/index/banner9_1.jpg";
export contest_en from "@/assets/index/banner9_2.jpg";
export model_zh from "@/assets/index/banner10_1.jpg";
export model_en from "@/assets/index/banner10_2.jpg";
export guide_zh from "@/assets/index/banner13_1.jpg";
export guide_en from "@/assets/index/banner13_2.jpg";
export luodi_zh from "@/assets/index/banner15_1.jpg";
export luodi_en from "@/assets/index/banner15_2.jpg";
export raffle_zh from "@/assets/index/banner19_1.jpg";
export raffle_en from "@/assets/index/banner19_2.jpg";
export cz_zh from "@/assets/index/banner26_1.jpg";
export cz_en from "@/assets/index/banner26_2.jpg";
export Milestone from './milestone.vue';
export Ecosystem from './ecosystem.vue';

const $ = window.$;

export default {
  components: {
    Dialog,
    Guide,
    // DrawItem,
    // BlockTitle,
    Guidelines,
    OurVision,
    BlindBox,
    CommunityUpdate,
    GameBox,
    NftPage,
    Cooper,
    Footer,
    HomeVideo,
    Contact,
    Milestone,
    DownPage,
    Ecosystem
    // Banner
  },
  data() {
    return {
      // 轮播图初始化高度 - 防止轮播首次加载抖动
      bannerInitHeight: window.innerWidth * 0.271733 + "px",
      isShowModal: false,
      isShowPool: false,
      selectedEpic: 0,
      selectMomoId: 0,
      introIdx: 0,
      selectVIdx: 0,
      selectContact: 0,
      showGuide: true,
      showVideo: false,
      menuTop:0,
      showMenu:false,
      selectMenuIdx:0,
      scrollTop:0,
      t1:null,
      // 轮播图数据
      bannerSource: [],
      menuArr : [
        {title:'guide_86', id:'communityUpdate'},
        {title:'guide_87', id:'gamebox'},
        {title:'Home_76', id:'nftPage'},
        {title:'guide_6', id:'guideLines'},
        {title:'Home_78', id:'milestone'},
        {title:'Home_84', id:'ecoSystem'},
        {title:'guide_13', id:'ourVision'},
        {title:'guide_15', id:'blindBox'},
        {title:'Home_96', id:'contactCommunity'},
        {title:'Home_99', id:'cooper'},
      ],
      zhNews: [
        {
          ts: 1599840000,
          lang: "如何将MetaMask链接币安智能链（BSC）？",
          url: "https://www.theblockbeats.com/news/19588",
        },
        {
          ts: 1636698079,
          lang: "MOBOX社区更新#31",
          url:
            "https://www.mobox.io/community/article/618a329740256ce1d7b41f53",
        },
        {
          ts: 1642490160,
          lang: "MOBOX新手指引",
          url: "https://faqcn.mobox.io/zi-yuan/xin-shou-jiao-cheng",
        },
        {
          ts: 1635306037,
          lang: "MOBOX & YGG达成战略合作",
          url: "https://www.mobox.io/community/article/6172a7d840256ce1d7ab2564",
        },
        {
          ts: 1632377882,
          lang: "MOBOX Token- Nasdaq",
          url: "https://www.nasdaq.com/articles/this-crypto-is-up-414-in-the-past-month.-should-you-buy-2021-09-01",
        },
        {
          ts: 1629346594,
          lang: "MOBOX-币安行研",
          url: "https://research.binance.com/en/projects/mobox",
        },
        {
          ts: 1629302400,
          lang: "币安上市 MOBOX（MBOX）",
          url: "https://www.binance.com/zh-CN/support/announcement/1423a4dfd8a247a0a94acf20ac47d111",
        },
        {
          ts: 1642403760,
          lang: "Chainz Arena - MOBOX Edition BETA测试开启公告",
          url: "https://www.mobox.io/community/article/61deabd939ef680c43141d1d",
        },
      ],
      news: [
        {
          ts: 1635219637,
          lang: "YGG Partnership!",
          url:
            "https://mbox.medium.com/mobox-partners-with-yield-guild-games-6e05fd4b567?source=user_profile---------1----------------------------",
        },
        {
          ts: 1629346594,
          lang: "MOBOX-Binance Research",
          url:
            "https://research.binance.com/en/projects/mobox",
        },
        {
          ts: 1642490160,
          lang: "A Guide to MOBOX",
          url: "https://faqen.mobox.io/",
        },
        {
          ts: 1642403760,
          lang: "Chainz Arena - MOBOX Edition - BETA TEST",
          url:
            "https://www.mobox.io/community/article/61deabb039ef680c43141cf6",
        },
        {
          ts: 1642317360,
          lang: "Self-service Solution For MBOX Withdrawal Failure",
          url: "https://www.mobox.io/community/article/61de81c539ef680c4314089f",
        },
        {
          ts: 1641971760,
          lang: "MOBOX Community Update #32",
          url:
            "https://www.mobox.io/community/article/61dd31a739ef680c431378ef",
        },
        {
          ts: 1629346594,
          lang: "Introducing Mobox (MBOX) on Binance Launchpool! Farm MBOX by Staking BNB, MBOX and BUSD Tokens",
          url:
            "https://www.binance.com/en/support/announcement/3e99653fbe67405fb69e1b6d5b93bb06",
        },
        {
          ts: 1632377882,
          lang: "MOBOX Token- Nasdaq",
          url: "https://www.nasdaq.com/articles/this-crypto-is-up-414-in-the-past-month.-should-you-buy-2021-09-01",
        },
      ],
      // 传说momo介绍详情
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

      contactArr: [
        {
          name: `Telegram`,
          link: "https://t.me/mobox_io",
          src: `assets/images/cmcnft/tele.svg`,
          amount: "80K+",
        },
        {
          name: `Twitter`,
          link: "https://twitter.com/MOBOX_Official",
          src: `assets/images/cmcnft/twitter.svg`,
          amount: "150K+",
        },
        {
          name: `Wechat`,
          link: "",
          src: `assets/images/cmcnft/wechat.svg`,
          amount: "7K+",
        },
        {
          name: `Discord`,
          link: "https://discord.com/invite/mobox",
          src: `assets/images/cmcnft/discord.svg`,
          amount: "12K+",
        },
      ],

      videoArr: [
        {
          zhSrc: "https://mobox.io/videos/V1.mp4",
          src: "https://www.youtube.com/embed/00q7_Vjo2zI",
          img:
            "https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d049ac0ea9174ea8238494_Frame%2014.png",
        },
        {
          zhSrc: "https://mobox.io/videos/V2.mp4",
          src: "https://www.youtube.com/embed/CoAx_NQSOWY",
          img:
            "https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d04a6ff766a650e2330a5e_Frame%2015.png",
        },
        {
          zhSrc: "https://mobox.io/videos/V3.mp4",
          src: "https://www.youtube.com/embed/zfZGHH_uiFg",
          img:
            "https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d04b9dcf11cbcfe013fb6e_3.png",
        },
        {
          zhSrc: "https://mobox.io/videos/V4.mp4",
          src: "https://www.youtube.com/embed/JiFESMpKjU8",
          img:
            "https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d04bdf06a4a7a730bba763_4.png",
        },
      ],

      buybackInfo: { amount: 0, moboxBurn: 0 },
      mboxInfo: {
        avglockdays: 0,
        totalMobox: 0,
        totalVemobox: 0,
      },
    };
  },
  created() {
    window.onresize = ()=>{
      this.getMenuTop();
    }
  },
  mounted() {
    // this.getBanner();
    this.initSpine();
    // this.setSwiper();
    // this.scrollInit();
    // this.createQrCode();
    this.checkBaseInfos();

    this.selectMomoId = this.momoArr[0].id;
    this.setHeroSpine();

    // 判断是否需要去下载页
    const toDownLoad = Common.getUrlParams("toDownLoad");
    if (toDownLoad) {
      let t = $("#downloadPage")[0].offsetTop;
      window.scroll({ top: t, left: 0, behavior: "smooth" });
    }

    let guide = Common.getStorageItem("guide");
    if (guide) {
      this.showGuide = false;
    }

    window.addEventListener("scroll", () => {

      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      this.scrollTop = scrollTop;

      this.setScrollMenuIdx();

      if (!this.showGuide) {
        return;
      }
      if (scrollTop > 200) {
        Common.setStorageItem("guide", "done");
        this.showGuide = false;
      }
    });

    let t = setTimeout(() => {
      clearTimeout(t);
      this.getMenuTop();
    }, 200);
    
  },
  computed: {
    ...mapState({
      // 市值
      marketCap: (state) => state.globalState.marketCap,
      poolInfo: (state) => {
        return state.globalState.data.poolInfo;
      },
      storeLang: (state) => {
        return state.globalState.data.lang;
      },
      coinRate: (state) => {
        return state.userState.coinRate;
      },
    }),

    getArrowTop(){
      return `top : ${this.selectMenuIdx * 50}px`
    },

    getTop(){
      if(this.scrollTop > this.menuTop) {
        return `top : 15px`
      } else {
        return `top : ${this.menuTop}px`
      }
    },

    getCZ() {
      return this.isChin ? cz_zh : cz_en;
    },

    getRaffle() {
      return this.isChin ? raffle_zh : raffle_en;
    },

    getGuidePic() {
      return this.isChin ? guide_zh : guide_en;
    },

    getModelPic() {
      return this.isChin ? model_zh : model_en;
    },

    getLuodiPic() {
      return this.isChin ? luodi_zh : luodi_en;
    },

    getBWPic() {
      return this.isChin ? bw_zh : bw_en;
    },

    getTMPic() {
      return this.isChin ? tm_zh : tm_en;
    },

    getMomoPic() {
      return this.isChin ? momo_zh : momo_en;
    },

    getContestPic() {
      return this.isChin ? contest_zh : contest_en;
    },

    getComPic() {
      return this.isChin ? pic_zh : pic_en;
    },

    getVideoSrc() {
      return this.isChin
        ? this.videoArr[this.selectVIdx].zhSrc
        : this.videoArr[this.selectVIdx].src;
    },

    getContact() {
      return this.contactArr[this.selectContact];
    },

    getBuyback() {
      const { amount, moboxBurn } = this.buybackInfo;

      return {
        amount: Common.convert(Common.numFloor(amount, 1)),
        moboxBurn: Common.numFloor(
          Number(moboxBurn) / 1e18,
          1
        ).toLocaleString(),
      };
    },

    momoArr() {
      let arr = Object.values(momoCfgs);
      arr.sort((a, b) => {
        return a.index - b.index;
      });

      return arr;
    },

    getSelectEpicInfo() {
      return this.epicArr[this.selectedEpic];
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

    isChin() {
      return this.storeLang === "zh-CN";
    },

    getMboxPrice() {
      if (this.coinRate.mbox) {
        return `$${Common.numFloor(this.coinRate.mbox.price, 100)}`;
      } else {
        return `$0`;
      }
    },

    getMoboxSupply() {
      return Number(this.poolInfo.moboxSupply).toLocaleString();
    },

    getMoboxBurn() {
      return Number(this.poolInfo.moboxBurn).toLocaleString();
    },

    getNews() {
      let news = this.isChin ? this.zhNews : this.news;
      news.sort((a, b) => {
        return b.ts - a.ts;
      });
      return news;
    },
    // 轮播
    bannerList() {
      const locale = this.$i18n.locale == "zh-CN" ? "zh_CN" : "en";
      return this.bannerSource.map((item) => item[locale]);
    },
  },

  // destroyed(){
  // 	let body = document.getElementsByTagName("body")[0]
  // 	body.setAttribute("id","dark")
  // },

  methods: {
    setScrollMenuIdx() {
      clearTimeout(this.t1);
      this.t1 = setTimeout(() => {
        let toIdx = 0;

        this.menuArr.map((item,idx)=>{
          // const itemTop = idx == 1 ? item.top - 150 : item.top;
          if(this.scrollTop > item.top-200) {
            toIdx = idx
          }
        });

        // this.selectMenuIdx = toIdx > 0 ? (toIdx+1 >= this.menuArr.length ? toIdx : toIdx+1) : toIdx;
        this.selectMenuIdx = toIdx;
      }, 200);
    },
    toGuidePos(idx){
      this.selectMenuIdx = idx;

      let t = $(`#${this.menuArr[idx].id}`)[0].offsetTop - 100;
      window.scroll({ top: t, left: 0, behavior: "smooth" });
    },
    getMenuTop(){
      const top = $('#communityUpdate').offset().top;

      // console.log("get top now!")
      // console.log(top)
      
      this.menuArr.map((item,i)=>{
        const top = $(`#${item.id}`).offset().top;
        this.menuArr[i].top = top;
      })

      this.menuTop = top;
      this.showMenu = true;

      // console.log(this.menuArr)
    },
    setVideo(isShow = true){
      this.showVideo = isShow;

      const $body = window.$('body');

      console.log($body);

      // if(isShow) {
      //   $body.addClass("hideOver");
      // } else {
      //   $body.removeClass("hideOver");
      // }
    },
		toContest(){
			this.$router.push('/iframe/contest')
		},
    toMomoPai() {
      window.open("https://www.mobox.io/#/iframe/momo?path=activity&tab=1");
    },
    toBw() {
			this.$router.push('/block-brawler')
    },
    toTm() {
			this.$router.push('/iframe/tokenmaster')
    },
    toCZ() {
			this.$router.push('/iframe/chainzarena')
    },
    toGuide() {
      if (this.isChin) {
        window.open("https://faqcn.mobox.io/");
      } else {
        window.open("https://mbox.medium.com/a-guide-to-mobox-d7dd5fcd4be9");
      }
    },
    toHalloween() {
      if (this.isChin) {
        window.open("https://www.mobox.io/community/article/6176755e40256ce1d7ac4044");
      } else {
        window.open("https://www.mobox.io/community/article/6176733440256ce1d7ac3cf6");
      }
    },
    toTokenmaster() {
      this.$router.push("/iframe/tokenmaster");
    },
    toBinance() {
      if (this.isChin) {
        window.open(
          "https://www.binance.com/zh-CN/support/announcement/3e99653fbe67405fb69e1b6d5b93bb06"
        );
      } else {
        window.open(
          "https://www.binance.com/en/support/announcement/3e99653fbe67405fb69e1b6d5b93bb06"
        );
      }
    },
    toCmcReport() {
      window.open(
        "https://coinmarketcap.com/alexandria/article/what-is-mobox-mbox"
      );
    },
    toRaffle() {
      window.open("https://www.mobox.io/#/iframe/momo");
    },
    toBinanNft() {
      // window.open('https://mobox.io/#/Alliance')
      window.open(
        "https://www.binance.com/en/nft/blindBox/detail?productId=116861468145843200"
      );
    },
    toLuodi() {
      window.open("https://mobox.io/#/Alliance");
    },
    toCommunity() {
      if (this.isChin) {
        window.open("https://bihu.com/people/1971797222");
      } else {
        window.open("https://mbox.medium.com/");
      }
    },
    toDownLoad() {
      let t = $("#downloadPage")[0].offsetTop;
      window.scroll({ top: t, left: 0, behavior: "smooth" });
    },
    toCmc() {
      window.open("https://coinmarketcap.com/earn/project/mobox");
    },
    toGuideWay() {
      let t = this.$refs.pagehero.offsetTop;
      window.scroll({ top: t, left: 0, behavior: "smooth" });

      Common.setStorageItem("guide", "done");
      this.showGuide = false;
    },
    openMate(title) {
      window.open(MATE_LINK[title]);
    },
    openContact() {
      window.open(this.getContact.link);
    },
    selectCon(idx) {
      this.selectContact = idx;
    },
    async checkBaseInfos() {
      this.checkBuyBack();
      this.checkAvgInfos();
    },
    async checkBuyBack() {
      try {
        const { amount, moboxBurn } = await request(API_BUYBACK_AMOUNT, {
          method: "GET",
        });

        this.buybackInfo = { amount, moboxBurn };
      } catch {
        console.log("error");
      }
    },
    async checkAvgInfos() {
      try {
        const { avglockdays, totalMobox, totalVemobox } = await request(
          API_AVG_DAYS,
          {
            method: "GET",
          }
        );

        this.mboxInfo = {
          totalMobox: Common.convert(Math.floor(totalMobox)),
          totalVemobox: Common.convert(Math.floor(totalVemobox)),
          avglockdays: Math.floor(avglockdays),
        };
      } catch {
        console.log("error");
      }
    },
    openIto(idx) {
      // console.log(idx)
      this.introIdx = idx;
    },
    chooseVideo(idx) {
      this.selectVIdx = idx;
    },
    selectEpic(index) {
      if (this.epicArr[index].name) {
        this.selectedEpic = index;
      }
    },
    epicScrollTo(side) {
      if (side == 0) {
        // 往左
        console.log("????");
        this.$refs.epicScroll.scrollBy(-80, 0);
      } else if (side == 1) {
        // 往右
        this.$refs.epicScroll.scrollBy(80, 0);
      }
    },
    heroScrollTo(side) {
      if (side == 0) {
        // 往左
        console.log("????");
        this.$refs.heroscroll.scrollBy(-80, 0);
      } else if (side == 1) {
        // 往右
        this.$refs.heroscroll.scrollBy(80, 0);
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
    createQrCode() {
      // let url = this.chargeAddrs[type]

      // this.$refs.iosqrcode.innerHTML = '';
      // this.$refs.andqrcode.innerHTML = '';
      // const iosUrl = "https://testflight.apple.com/join/abV2hPXU";
      const iosUrl = "https://testflight.apple.com/join/zusuXNhi";
      const andUrl = "https://www.mobox.io/download/app-release.apk";

      new QRCode(this.$refs.iosqrcode, {
        text: iosUrl, // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      new QRCode(this.$refs.andqrcode, {
        text: andUrl, // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
    toMomo() {
      this.$router.push("/iframe/momo");
    },
    toPancake() {
      window.open(
        "https://pancakeswap.finance/swap?outputCurrency=0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377"
      );
    },
    getTs(ts) {
      return Common.dateFtt("yyyy-MM-dd", new Date(ts * 1000));
    },
    getUrl(item) {
      window.open(item.url);
    },
    getConvert(num) {
      return Common.convert(Common.numFloor(Number(num), 10000));
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

      // this.scroll2 = this.$refs.scroll2; // 获取DOM元素节点
      // // 添加监听事件（不同浏览器，事件方法不一样，所以可以作判断，也可以如下偷懒）
      // this.scroll2.addEventListener('DOMMouseScroll', this.handlerMouserScroll2, false);
      // this.scroll2.addEventListener('mousewheel', this.handlerMouserScroll2, false);

      // // 获取要绑定事件的元素
      // const scrollDiv = this.$refs.scroll1;
      // // document.addEventListener('DOMMouseScroll', handler, false)
      // // 添加滚轮滚动监听事件，一般是用下面的方法，上面的是火狐的写法
      // scrollDiv.addEventListener('mousewheel', handler, false)
      // // 滚动事件的出来函数
      // function handler(event) {
      // 	// 获取滚动方向
      // 	const detail = event.wheelDelta || event.detail;
      // 	// 定义滚动方向，其实也可以在赋值的时候写
      // 	const moveForwardStep = 1;
      // 	const moveBackStep = -1;
      // 	// 定义滚动距离
      // 	let step = 0;
      // 	// 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
      // 	if (detail < 0) {
      // 		step = moveForwardStep * 100;
      // 	} else {
      // 		step = moveBackStep * 100;
      // 	}
      // 	// 对需要滚动的元素进行滚动操作
      // 	scrollDiv.scrollLeft += step;
      // }
    },
    handlerMouserScroll1(event) {
      let detail = event.wheelDelta || event.detail;
      let moveForwardStep = -1;
      let moveBackStep = 1;
      let step = detail > 0 ? moveForwardStep * 20 : moveBackStep * 20;
      this.scroll1.scrollLeft = this.scroll1.scrollLeft + step;

      event.preventDefault();
    },
    handlerMouserScroll2(event) {
      let detail = event.wheelDelta || event.detail;
      let moveForwardStep = -1;
      let moveBackStep = 1;
      let step = detail > 0 ? moveForwardStep * 20 : moveBackStep * 20;
      this.scroll2.scrollLeft = this.scroll2.scrollLeft + step;

      event.preventDefault();
    },
    scrollSlide(direction, index) {
      // console.log(direction)
      // console.log(index)
      // console.log(window.$(this.$refs.scroll1))
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
    initSpine() {
      let arr = Object.values(momoCfgs);
      const key1 = Math.floor(arr.length * Math.random());
      let key2 = -1;

      do key2 = Math.floor(arr.length * Math.random());
      while (key2 === key1);

      // const momoName1 = arr[key1].spine;
      const momoName2 = arr[key2].spine;

      // new window.spine.SpineWidget("spine-momo-1", {
      //   json: `./assets/images/herospine/${momoName1}/${momoName1}.json`,
      //   atlas: `./assets/images/herospine/${momoName1}/${momoName1}.atlas`,
      //   backgroundColor: "#00000000",
      //   animation: "animation",
      //   loop: true,
      //   fitToCanvas: false,
      //   scale: 0.3,
      //   x: 95,
      //   y: 80,
      // });

      new window.spine.SpineWidget("spine-momo-2", {
        json: `./assets/images/herospine/${momoName2}/${momoName2}.json`,
        atlas: `./assets/images/herospine/${momoName2}/${momoName2}.atlas`,
        backgroundColor: "#00000000",
        animation: "animation",
        loop: true,
        fitToCanvas: false,
        scale: 0.3,
        x: 95,
        y: 80,
      });
    },

    // setSwiper() {
    //   this.mySwiper = new window.Swiper(this.$refs.container, {
    //     direction: "horizontal",
    //     slidesPerView: 1,
    //     loop: true,
    //     // autoplay: false,
    //     autoplay: {
    //       delay: 5000,
    //       stopOnLastSlide: false,
    //       disableOnInteraction: false,
    //     },
    //     resistanceRatio: 0,
    //     pagination: {
    //       el: this.$refs.pagination,
    //       type: "bullets",
    //       clickable: true,
    //     },
    //   });
    // },

    closeModal() {
      this.isShowModal = false;
    },

    goToGameDetail(type = "momo") {
      // if (type == "blockbrawler") {
      //   this.$router.push("/block-brawler");
      //   return;
      // }

      this.$store.commit("globalState/setGameDetail", type);
      this.$router.push("/gameDetail");
    },

    openServe() {
      const lang = Common.getStorageItem("lang") || "en";
      const keyend = lang === "zh-CN" ? "zh" : "en";

      window.open(`./docs/termofuse${keyend}.pdf`);
    },

    openPrivate() {
      const lang = Common.getStorageItem("lang") || "en";
      const keyend = lang === "zh-CN" ? "zh" : "en";

      window.open(`./docs/private${keyend}.pdf`);
      // window.open('../../assets/docs/privateen.pdf')
    },

    openMail() {
      window.open("mailto:community@mobox.io");
    },

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
      window.open("https://www.mobox.io/download/app-release.apk");
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
    showPool(isShow) {
      this.isShowPool = isShow;
    },
    // 获取轮播
    // async getBanner() {
    //   const { data } = await request(HOME_BANNER, {
    //     method: "POST",
    //     data: {
    //       version: "web",
    //     },
    //   });
    //   this.bannerSource = data.map((item) => item.content);
    //   // 初始化轮播
    //   this.$nextTick(() => {
    //     this.setSwiper();
    //   });
    // },
    // 轮播点击
    bannerClick(item) {
      if (item.link.indexOf("http") === 0) {
        window.open(item.link);
        return;
      }

      this.$router.push(item.link);
    },
  },
};
</script>

<style lang="less" scoped>
@export "./mobile.less";
@export "./pc.less";

// 公用
/deep/ .block-tag {
  padding: 0 22px;
  display: inline-block;
  height: 33px;
  background: #3a2d58;
  border: 1px solid #8a17c5;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  opacity: 1;
  border-radius: 17px;
  line-height: 33px;
  text-align: center;
}

.info-box {
  cursor: pointer;
  background: rgba(40, 43, 47, 0.5);
  border: 1px solid #707070;
  box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  border-radius: 47px;
  padding: 7px 16px;
  margin: 0 5px;
  display: inline-block;
  font-weight: bold;

  span {
    color: #fab408;
  }
}

.guide-left-menu{
  position: absolute;
  z-index: 998;
  left: 0;
  width: 10%;
  display: flex;
  transition: none;

  .guide-line{
    position: relative;
    height: 530px;
    margin: 0 21px;
    width: 3px;
    background: rgba(0,105,255, 0.5);

    .guide-arrow{
      transition: 0.3s all;
      position: absolute;
      height: 78px;
      left: -2px;
    }
  }

  .menu-box{
    ul {
      li{
        font-size: 12px;
        transition: 0.3s all;

        opacity: 0.5;
        // padding: 10px 0;
        // font-family: 'Poppins-bold'; 
        margin: 30px 0;
        height: 20px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        cursor: pointer;

        &:hover{
          opacity: 1;
        }
      }

      .menu-active{
        opacity: 1;
      }
    }
  }
}

.guide-left-fixed{
   position: fixed;
   left: 0;
}

.home {
  // height: calc(100vh);
  // background: rgb(25, 27, 32);
  padding-top: 70px;
  // background: #100F0F;
  background: rgb(32, 34, 38);

  .big-banner{
    width: 100%;
    height: 44vw;
    position: relative;
    text-align: center;
    
    img{
      width: 100%;
    }

    .banner-box{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .banner-title{
        font-family: 'Poppins-bold';
        font-size: 3.5vw;
        // font-weight: bold;
        line-height: 3.7vw;
        margin-bottom: 1vw;
      }

      .banner-detail{
        font-size: 0.9vw;
        max-width: 600px;
        opacity: 0.8;
        margin: auto;
      }

      .banner-ctrls{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2vw 0;
        
        .sidebar{
          width: 10vw;
        }
        .playbtn{
          width: 3.3vw;
          margin: 0 2vw;
          cursor: pointer;
        }
      }

      .banner-itembox{
        .boxer{
          display: flex;
          align-items: center;
          justify-content: center;

          .banner-download-item{
            background: rgb(0, 0, 0);
            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
            border-radius: 10px;
            cursor: pointer;

            margin: 10px 12px;
            // padding: 10px;
            width: 170px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-align: left;

            .down-headtitle{
              // font-family: 'Poppins-bold';
              font-size: 12px;
              opacity: 0.7;
            }

            .down-detail{
              // font-family: 'Poppins-bold';
              font-size: 12px;
            }

            img {
              margin: 0 12px 0 12px;
              width: 20px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

  .home-item-box{
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    /deep/ .normal-title{
      font-size: 22px;
      margin-bottom: 15px;
      text-align: left;
    }
  }

  .mobile-head{
    display: none;
  }
  
  .home-mobile-scroll{
    display: none;
  }

  .game-title{
    text-align:left;
    margin-bottom:17px;
  }

  .line_m {
    text-decoration: line-through;
  }

  .swiper-slide {
    cursor: pointer;
  }

  .next-page {
    width: 50px;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    z-index: 90;
    left: 50%;

    animation: floatInfini 2s infinite;
  }

  .left-head {
    display: flex;
    text-align: left;

    .r-head {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      height: 54px;
      justify-content: space-between;

      .t1 {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .under0 {
    position: absolute;
    top: 120vh;
    height: 50vh;
    width: 100%;

    .left-bg {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }
  }

  .under1 {
    position: absolute;
    top: 170vh;
    height: 50vh;
    width: 100%;

    .right-bg {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      transform: rotate(180deg);
    }
  }

  .under2 {
    position: absolute;
    top: 220vh;
    height: 50vh;
    width: 100%;

    .left-bg {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }
  }

  .under3 {
    position: absolute;
    top: 270vh;
    height: 50vh;
    width: 100%;

    .left-bg {
      position: absolute;
      left: 0;
      top: 50%;
      height: 50%;
      transform: translate(0, -50%);
    }

    .right-bg {
      position: absolute;
      right: 0;
      top: 50%;
      height: 50%;
      transform: translate(0, -50%);
    }
  }

  .under4 {
    position: absolute;
    top: 320vh;
    height: 50vh;
    width: 100%;

    .right-bg {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      transform: rotate(180deg);
    }
  }

  .under5 {
    position: absolute;
    top: 370vh;
    height: 50vh;
    width: 100%;

    .left-bg {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }
  }

  .page-hero {
    position: relative;
    width: 80%;
    max-width: 1150px;
    margin: 10% auto 0 auto;

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

    .game-box {
      display: flex;
      border: 1px solid #34363b;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
      border-radius: 10px;
      margin: 30px 0;

      .game-hero-box {
        // background: #282B2F;
        background: linear-gradient(145deg, #30bafd, #c320ff);
        // border: 1px solid #264498;
        border-radius: 10px;
        box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
        opacity: 1;
        position: relative;

        width: 300px;
        height: 300px;

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

      .game-hero-box::before {
        content: "";
        position: absolute;
        // background: linear-gradient(145deg,#30bafd,#c320ff);
        background: #282b2f;
        left: 3px;
        top: 3px;
        bottom: 3px;
        right: 3px;
        z-index: 0;
        border-radius: 10px;
      }

      .game-hero-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .detailnamebox {
          display: flex;
          align-items: center;

          .name {
            margin: 0 10px;
            font-size: 18px;
            font-weight: bold;
          }
        }

        .detailinfo {
          margin-top: 10px;
        }
      }
    }

    .game-scroll {
      text-align: center;
      margin-top: 20px;
      user-select: none;

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
        width: 90%;
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
        padding: 20px 0;

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
            width: 50px;
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
    margin: 10% auto 0 auto;
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

  // .page-adver {
  //   position: relative;
  //   width: 80%;
  //   max-width: 1150px;
  //   margin: 10% auto 0 auto;

  //   .achieve-content {
  //     display: flex;
  //     justify-content: space-between;
  //     margin-top: 20px;

  //     .achieve-box {
  //       display: flex;
  //       flex-direction: column;
  //       position: relative;
  //       justify-content: center;
  //       align-items: center;

  //       border: 1px solid #6a4b98;
  //       box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  //       border-radius: 10px;
  //       width: 25%;
  //       height: 350px;

  //       .mobile-info{
  //         display: none;
  //       }

  //       .achieve-box-title {
  //         margin-bottom: 15px;
  //       }

  //       div {
  //         position: relative;
  //       }

  //       img {
  //         position: relative;
  //       }

  //       .amount {
  //         font-size: 30px;
  //         color: #fab408;
  //         font-weight: bold;
  //       }

  //       .tip {
  //         font-size: 12px;
  //         padding: 0 10%;
  //         text-align: center;
  //       }

  //       .title {
  //         padding: 5px 10px;
  //         background: #202226;
  //         border: 1px solid #707070;
  //         border-radius: 18px;
  //         font-size: 14px;
  //         margin-top: 40px;
  //       }

  //       .achieve-bg {
  //         position: absolute;
  //         bottom: 0;
  //         width: 100%;
  //         left: 50%;
  //         transform: translate(-50%, 0);
  //       }
  //     }
  //   }
  // }

  // .page-opr {
  //   position: relative;
  //   width: 80%;
  //   max-width: 1150px;
  //   margin: 10% auto 0 auto;

  //   .eco-head {
  //     display: flex;

  //     .r-head {
  //       margin-left: 27px;
  //       display: flex;
  //       flex-direction: column;
  //       height: 54px;
  //       justify-content: space-between;

  //       .t1 {
  //         font-size: 20px;
  //         font-weight: bold;
  //       }
  //     }
  //   }

  //   .eco-content {
  //     margin-top: 20px;
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;

  //     .eco-menu {
  //       padding: 5px 10px;
  //       width: 25%;
  //       background: linear-gradient(
  //         315deg,
  //         rgba(73, 160, 253, 0.23) 0%,
  //         rgba(167, 61, 254, 0.23) 100%
  //       );
  //       box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  //       border-radius: 10px;

  //       .section {
  //         cursor: pointer;
  //         width: 100%;
  //         height: 69px;
  //         background: #282b2f;
  //         box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  //         border-radius: 10px;
  //         margin: 20px 0;

  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //       }

  //       .active {
  //         background: url("../../assets/cmcnft/selectbg.png") no-repeat;
  //         background-size: cover;
  //       }
  //     }

  //     .eco-box {
  //       width: 70%;
  //       // background: blue;
  //       height: 475px;

  //       .intro1 {
  //         height: 100%;

  //         .desc {
  //           width: 100%;
  //           height: 30%;
  //           overflow: auto;
  //         }

  //         .video {
  //           // height: 70%;
  //           height: 100%;
  //           display: flex;
  //           align-items: center;

  //           .player {
  //             width: 81%;
  //             max-height: 100%;
  //           }

  //           .video-list {
  //             display: inline-block;
  //             width: 30%;
  //             // height: 100%;
  //             padding: 0 10px;

  //             .li {
  //               cursor: pointer;
  //               border: 1px solid transparent;
  //               width: 100%;
  //               border-radius: 10px;
  //               overflow: hidden;
  //               margin: 15px 0;
  //               position: relative;

  //               .bg {
  //                 width: 100%;
  //               }

  //               .play {
  //                 position: absolute;
  //                 width: 30px;
  //                 left: 50%;
  //                 top: 50%;
  //                 transform: translate(-50%, -50%);
  //               }
  //             }

  //             .active {
  //               border: 1px solid #fab408;
  //               box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  //             }
  //           }
  //         }
  //       }

  //       .intro2 {
  //         width: 100%;
  //         height: 100%;

  //         display: flex;
  //         flex-direction: column;

  //         .titles {
  //           display: flex;
  //           justify-content: space-between;
  //           width: 100%;

  //           .title1 {
  //             background: rgba(40, 43, 47, 0.5);
  //             border: 1px solid rgba(112, 112, 112, 0.5);
  //             box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  //             border-radius: 10px;
  //             width: 48%;
  //             text-align: center;
  //             font-weight: bold;
  //             padding: 8px 0;
  //           }

  //           .title2 {
  //             background: rgba(40, 43, 47, 0.5);
  //             border: 1px solid rgba(112, 112, 112, 0.5);
  //             box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  //             border-radius: 10px;
  //             width: 48%;
  //             text-align: center;
  //             font-weight: bold;
  //             padding: 8px 0;
  //           }
  //         }

  //         .process {
  //           flex: 1;
  //           margin-top: 60px;
  //           width: 100%;
  //           // background: red;
  //           background: url("../../assets/cmcnft/process.png") no-repeat;
  //           background-size: contain;
  //         }
  //       }

  //       .intro3 {
  //         width: 100%;
  //         height: 100%;

  //         display: flex;
  //         flex-direction: column;

  //         .titles {
  //           display: flex;
  //           justify-content: space-between;
  //           width: 100%;

  //           .title1 {
  //             background: rgba(40, 43, 47, 0.5);
  //             border: 1px solid rgba(112, 112, 112, 0.5);
  //             box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  //             border-radius: 10px;
  //             width: 48%;
  //             text-align: center;
  //             font-weight: bold;
  //             padding: 8px 0;
  //           }

  //           .title2 {
  //             background: rgba(40, 43, 47, 0.5);
  //             border: 1px solid rgba(112, 112, 112, 0.5);
  //             box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  //             border-radius: 10px;
  //             width: 48%;
  //             text-align: center;
  //             font-weight: bold;
  //             padding: 8px 0;
  //           }
  //         }

  //         .title3 {
  //           margin-top: 20px;
  //           background: rgba(40, 43, 47, 0.5);
  //           border: 1px solid rgba(112, 112, 112, 0.5);
  //           box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  //           border-radius: 10px;
  //           width: 100%;
  //           text-align: center;
  //           font-weight: bold;
  //           padding: 8px 0;
  //         }

  //         .title4 {
  //           flex: 1;
  //           display: flex;
  //           flex-direction: column;
  //           justify-content: center;
  //         }
  //       }

  //       .intro5 {
  //         width: 100%;
  //         height: 100%;
  //         display: flex;
  //         flex-direction: column;
  //         overflow: auto;

  //         .stgae {
  //           display: flex;
  //           position: relative;

  //           div {
  //             display: inline-block;
  //           }

  //           .clock {
  //             width: 25px;
  //             height: 25px;
  //             margin-right: 20px;
  //           }

  //           .quater {
  //             width: 100px;
  //             color: #fab408;
  //             font-weight: bold;
  //           }

  //           .schdule {
  //             .line_content {
  //               max-width: 400px;
  //             }

  //             div {
  //               display: block;
  //             }
  //           }

  //           .end {
  //             position: absolute;
  //             right: 0;
  //             top: 0;
  //             font-weight: bold;
  //             color: #fab408;
  //           }
  //         }

  //         .line {
  //           margin: 20px 0;
  //           width: 100%;
  //           height: 0px;
  //           border-top: 1px solid #34363b;
  //           opacity: 1;
  //         }
  //       }
  //     }
  //   }
  // }

  // .page-community {
  //   position: relative;
  //   width: 80%;
  //   max-width: 1150px;
  //   margin: 10% auto 0 auto;

  //   .contact-head {
  //     display: flex;
  //     flex-direction: row-reverse;
  //     position: relative;

  //     .r-head {
  //       text-align: right;
  //       margin-right: 27px;
  //       display: flex;
  //       flex-direction: column;
  //       height: 54px;
  //       justify-content: space-between;

  //       .t1 {
  //         font-size: 20px;
  //         font-weight: bold;
  //       }
  //     }

  //     .contact-area {
  //       position: absolute;
  //       left: 0;
  //       top: 50%;
  //       transform: translate(0, -50%);

  //       display: flex;
  //       justify-content: center;
  //       align-items: center;

  //       .contact-box {
  //         position: relative;
  //         padding: 10px;
  //         overflow: hidden;
  //         cursor: pointer;

  //         .contact-item {
  //           position: relative;
  //           width: 35px;
  //         }

  //         .contact-light {
  //           position: absolute;
  //           opacity: 0;
  //           left: 50%;
  //           top: 50%;
  //           transform: translate(-50%, -50%);
  //           width: 105px;
  //         }
  //       }

  //       .active {
  //         .contact-item {
  //           position: relative;
  //           width: 47px;
  //         }

  //         .contact-light {
  //           opacity: 1;
  //         }
  //       }
  //     }
  //   }

  //   .contact-content {
  //     margin-top: 20px;
  //     width: 100%;
  //     border: 1px solid #6a4b98;
  //     box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  //     border-radius: 10px;
  //     padding: 18px;
  //     display: flex;

  //     .contact-left {
  //       display: flex;
  //       background: linear-gradient(
  //         315deg,
  //         rgba(73, 160, 253, 0.23) 0%,
  //         rgba(167, 61, 254, 0.23) 100%
  //       );
  //       box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  //       border-radius: 10px;
  //       justify-content: center;
  //       align-items: center;
  //       width: 40%;
  //       padding: 30px 0;

  //       .logo {
  //         margin-right: 40px;
  //       }

  //       .info {
  //         font-size: 40px;
  //         font-weight: bold;
  //       }
  //     }

  //     .contact-right {
  //       flex: 1;
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: center;
  //       align-items: flex-start;
  //       padding: 0 50px;

  //       .sub-btn {
  //         cursor: pointer;
  //         margin-top: 25px;
  //         padding: 7px 40px;
  //         background: linear-gradient(90deg, #4071d7 0%, #344da7 100%);
  //         border-radius: 25px;
  //       }

  //       .code {
  //         width: 100%;
  //         text-align: center;

  //         img {
  //           width: 100px;
  //         }
  //       }
  //     }
  //   }
  // }

  // .page-cooperate {
  //   position: relative;
  //   width: 80%;
  //   max-width: 1150px;
  //   margin: 10% auto 0 auto;

  //   .team-head {
  //     display: flex;
  //     position: relative;

  //     .r-head {
  //       margin-left: 27px;
  //       display: flex;
  //       flex-direction: column;
  //       height: 54px;
  //       justify-content: space-between;

  //       .t1 {
  //         font-size: 20px;
  //         font-weight: bold;
  //       }
  //     }
  //   }

  //   .team-content {
  //     width: 100%;
  //     margin-top: 20px;

  //     .team-group {
  //       width: 100%;
  //       height: 100px;
  //       position: relative;

  //       img {
  //         cursor: pointer;
  //         height: 40px;
  //       }

  //       .left {
  //         position: absolute;
  //         left: 0;
  //         top: 50%;
  //         transform: translate(0, -50%);
  //       }

  //       .middle {
  //         position: absolute;
  //         left: 50%;
  //         top: 50%;
  //         transform: translate(-50%, -50%);
  //       }

  //       .right {
  //         position: absolute;
  //         right: 0;
  //         top: 50%;
  //         transform: translate(0, -50%);
  //       }
  //     }

  //     .sb-demand {
  //       .left {
  //         height: 50px;
  //       }

  //       .middle {
  //         height: 60px;
  //       }

  //       .right {
  //         height: 50px;
  //       }
  //     }

  //     .high-demand {
  //       .left {
  //         height: 51px;
  //       }

  //       .middle {
  //         height: 70px;
  //       }

  //       .right {
  //         height: 70px;
  //       }
  //     }

  //     .bottom-group {
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;

  //       img {
  //         cursor: pointer;
  //         max-height: 100px;
  //       }

  //       .middle {
  //         margin: 0 100px;
  //       }
  //     }
  //   }

  //   .logo {
  //     position: absolute;
  //     right: 0;
  //     top: 50%;
  //     transform: translate(0, -50%);
  //   }
  // }

  @keyframes floatInfini {
    0% {
      transform: translate(-50%, 0);
      animation-timing-function: linear;
    }
    50% {
      transform: translate(-50%, -10px);
      animation-timing-function: linear;
    }
    100% {
      transform: translate(-50%, 0);
      animation-timing-function: linear;
    }
  }
}

.arrow-left {
  position: absolute;
  width: 30px;
  left: -50px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
}

.arrow-right {
  position: absolute;
  width: 30px;
  right: -50px;
  top: 50%;
  transform: translate(0, -50%) rotate(180deg);
  cursor: pointer;
}

.pool-info-box {
  padding: 60px 41px;
  background: rgba(25, 27, 32, 0.67);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  .pool-head {
    padding: 17px 25px;
    display: inline-block;
    border: 1px solid #707070;
    border-radius: 10px;
    box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
    background: rgba(40, 43, 47, 0.5);

    .title {
      color: white;
    }

    .content {
      min-width: 200px;
      font-size: 28px;
      color: #fab408;
    }
  }

  .pool-excel-box {
    margin: 40px 0;

    .pool-excel {
      padding: 2px 5px;
    }
  }

  .pool-btn {
    display: inline-block;
    cursor: pointer;

    padding: 10px 50px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;

    background: linear-gradient(90deg, #4071d7 0%, #344da7 100%);
    border-radius: 7px;
  }
}

.pool-box::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(40, 43, 47, 0.7);
  // border: 1px solid #707070;
  box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  // filter: blur(2px);
  border-radius: 10px;
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.pool-box {
  position: absolute;
  top: 50%;
  right: 24%;
  transform: translate(0, -50%);
  z-index: 5;
  padding: 21px 41px;
  border: 1px solid #707070;
  border-radius: 10px;
  overflow: hidden;

  // background: rgba(40,43,47,0.7);
  // border: 1px solid #707070;
  // box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
  // // filter: blur(2px);
  // border-radius: 10px;

  .pool-bg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 155px;
  }

  .pool-head {
    padding: 17px 25px;
    display: inline-block;
    border: 1px solid #707070;
    border-radius: 10px;
    box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
    background: rgba(40, 43, 47, 0.5);

    .title {
      color: white;
    }

    .content {
      font-size: 28px;
      color: #fab408;
      min-width: 200px;
    }
  }

  .pool-info {
    margin: 10px 0;
  }

  .pool-btn {
    display: inline-block;
    cursor: pointer;

    padding: 13px 37px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;

    background: linear-gradient(90deg, #4071d7 0%, #344da7 100%);
    border-radius: 7px;
  }
}

.swiper-img {
  width: 100%;
}

#spine-momo-1 {
  position: absolute;
  transform: rotateY(180deg) rotate(-45deg);
  left: -70px;
  bottom: -50px;
  width: 200px;

  canvas {
    width: 200px !exportant;
    height: 200px !exportant;
  }
}

// .spine-momo-box2 {
//   width: 200px;
//   height: 200px;
//   position: absolute;
//   right: 0;
//   overflow: hidden;
//   margin: 0 !exportant;
//   top: -89px;

//   #spine-momo-2 {
//     position: absolute;
//     transform: rotate(-45deg);
//     width: 200px;
//     right: -80px;

//     canvas {
//       width: 200px !exportant;
//       height: 200px !exportant;
//     }
//   }
// }

// .border-3d{
// 	border-top: 1px solid rgba(112,112,112, 0.5);
// 	border-bottom: 1px solid #000;
// }

.home-gamebox {
  /* max-width: 350px;
		display: inline-block; */
  cursor: pointer;
  max-width: 300px;
  display: inline-block;
  margin: 0 3% 0 0;
  transition: 0.2s all;
  position: relative;
  background: #282b2f;
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
  .gamebox-area {
    .bg-pic {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.home-newbox {
  max-width: 300px;
  display: inline-block;
  margin: 0 3% 0 0;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s all;
  position: relative;
  // background: #282B2F;

  .bg-pic {
    width: 100%;
    transition: 0.2s all;
    border-radius: 10px;
    overflow: hidden;

    img {
      transition: 0.2s all;
      width: 100%;
    }
  }

  .title-pic {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .newbox-area {
    background: #282b2f;
  }
}

.newbox-area:hover {
  cursor: pointer;

  .bg-pic {
    img {
      transform: scale(1.1);
    }
  }
}

// .gamebox-area:hover{
// 	cursor: pointer;

// 	.bg-pic{
// 		img{
// 			transform: scale(1.1);

// 		}

// 	}
// 	// box-shadow: 0px 3px 12px rgb(38 68 152 / 50%);
// 	// transform: translate(-3px, -3px);
// }

.home-newbox-contain {
  margin: 10% 0 0 0;

  .home-newbox-scroll {
    white-space: nowrap;
    overflow: auto;
    max-width: 100%;
    position: relative;
  }

  .home-newbox-scroll::-webkit-scrollbar-thumb {
    background: transparent;
  }

  .home-newbox-scroll-box {
    position: relative;
    width: 1200px;
    max-width: 100%;
    margin: auto;

    .news-head {
      display: flex;
      flex-direction: row-reverse;

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
    }
  }

  // .home-newbox-scroll-box:after{
  // 	position:absolute;
  // 	content:'';
  // 	width:10%;
  // 	height:100%;
  // 	top:0;
  // 	right:0;
  // 	background: linear-gradient(to right, transparent, rgb(25, 27, 32));
  // }
}

.news-box {
  text-align: left;

  .item {
    cursor: pointer;
    width: 44%;
    text-align: left;
    position: relative;
    display: inline-block;
    padding: 20px 0;
    margin: 0 2%;
    border-bottom: 1px solid #34363b;
    transition: 0.2s all;

    .title {
      display: inline-block;
      font-size: 30px;
      font-weight: bold;
      line-height: 35px;
      color: #fc9b65;
      opacity: 1;
    }
    .content {
      margin-left: 20px;
      display: inline-block;
      max-width: 50%;

      font-size: 13px;
      font-weight: bold;
      line-height: 17px;
      color: #ffffff;
      opacity: 1;
    }
    .time {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);

      font-size: 11px;
      font-family: San Francisco Display;
      font-weight: bold;
      line-height: 15px;
      color: #fc9b65;
      opacity: 1;
    }
  }

  .item:hover {
    .content {
      opacity: 0.5;
    }
  }
}

.home-gamebox-contain {
  width: 100%;
  text-align: center;
  padding: 50px 0;
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
    width: 1200px;
    max-width: 100%;
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
  padding: 30px 20px;
  position: relative;
}

.home-gamebox-rtext {
  position: absolute;
  right: 15px;
  text-align: right;
  top: 50%;
  transform: translate(0, -50%);
  color: #fc9b65;
  font-weight: bold;
}

// footer {
//   margin-top: 300px;
//   position: relative;
//   flex: 1;
//   min-height: 170px;
//   background: #282b2f;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .footer-bg{
//     display: none;
//   }

//   .first-line{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }

//   .footer-contact {
//     margin: 10px 0;

//     a {
//       display: inline-block;
//       vertical-align: middle;
//       img {
//         cursor: pointer;
//         margin: 0 5px;
//         vertical-align: middle;
//         height: 20px;
//       }
//     }

//     .link {
//       display: inline-block;
//       vertical-align: middle;
//       position: relative;
//       overflow: hidden;

//       .icon {
//         cursor: pointer;
//         margin: 0 5px;
//         vertical-align: middle;
//         height: 28px;
//       }

//       .code {
//         position: absolute;
//         width: 200px;
//         bottom: 35px;
//         right: 0;

//         opacity: 0;
//         transition: 0.2s all;
//       }
//     }

//     .link:hover {
//       overflow: initial;
//       .code {
//         opacity: 1;
//       }
//     }
//   }

//   .bot1 {
//     width: 30%;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     max-width: 580px;
//   }

//   .bot2 {
//     max-width: 750px;
//     width: 40%;
//     position: absolute;
//     right: 0;
//     bottom: 0;
//   }
// }

// .download-page {
//   padding: 20px 0;
//   text-align: center;
//   position: relative;

//   color: white;
//   width: 100%;
//   // background: url('../../assets/index/downbg.jpg');
//   background-size: auto 100%;
//   margin: 10% 0 0 0;
// }

// // .download-page > img{
// // 	vertical-align: middle;
// // 	margin: 0 15px;
// // }

// // .download-page > div{
// // 	display: inline-block;
// // 	vertical-align: middle;
// // 	margin: 0 15px;
// // }

// .download-item {
//   background: #303338;
//   box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
//   border-radius: 10px;
//   cursor: pointer;

//   margin: 10px 0;
//   // padding: 10px;
//   width: 150px;
//   height: 45px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: left;

//   img {
//     width: 20px;
//     vertical-align: middle;
//   }

//   div {
//     margin-left: 10px;
//     display: inline-block;
//     vertical-align: middle;
//     font-size: 12px;
//     font-weight: bold;
//   }
// }

// .downlaod-itembox {
//   display: inline-block;
//   margin: 10px 10px 0 32px;

//   .boxer {
//     margin: 0 5px;
//     display: inline-block;
//   }
// }

// .download-img {
//   display: inline-block;
//   vertical-align: middle;
//   height: 310px;
//   margin-left: 80px;
// }

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

// .download-page-textbox {
//   display: inline-block;
//   vertical-align: middle;
//   margin: 0 15px;
//   flex-direction: column;
// }

// .download-page-title-1 {
//   font-size: 20px;
//   font-weight: bold;
//   height: 35px;
// }

// .download-page-title-2 {
//   font-size: 14px;
// }

.menu-contact {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 20;
  display: none;

  a {
    display: inline-block;
    vertical-align: middle;
    img {
      cursor: pointer;
      margin: 0 5px;
      vertical-align: middle;
      height: 20px;
    }
  }

  .link {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    overflow: hidden;

    .icon {
      cursor: pointer;
      margin: 0 5px;
      vertical-align: middle;
      height: 28px;
    }

    .code {
      position: absolute;
      width: 200px;
      top: 35px;
      right: 0;
      opacity: 0;
      transition: 0.2s all;
    }
  }

  .link:hover {
    overflow: initial;
    .code {
      opacity: 1;
    }
  }
}

.l-head {
  width: 12px;
  height: 54px;
  background: url("../../assets/cmcnft/titlehead.png") no-repeat;
  background-size: cover;
}
</style>
console.log('Debug: feat: add real-time player statistics tracking');
