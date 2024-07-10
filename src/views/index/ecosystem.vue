<template>
    <div id="ecoSystem" class="page-opr home-item-box">

      <!-- <block-title
        :title="$t('Home_84')"
        describe="FREE TO PLAY"
      /> -->
      <img class="eco-bg" src="@/assets/index/ecobg.png" alt="">

      <HomeTitle :title="[$t('Home_84')]"  />
      
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
    </div>
</template>

<script>
import DrawItem from "../cmcPage/drawItem.vue";
import { Common } from "@/utils";
import request from "@/utils/request";
import {
  API_BUYBACK_AMOUNT,
  API_AVG_DAYS,
  // HOME_BANNER,
} from "@/utils/constant";
import { mapState } from "vuex";
import HomeTitle from "./homeTtile.vue";

export default {
    components:{
        DrawItem,
        HomeTitle
    },
    data(){
        return {
            introIdx : 0,
            selectVIdx : 0,
            buybackInfo: { amount: 0, moboxBurn: 0 },
            mboxInfo: {
                avglockdays: 0,
                totalMobox: 0,
                totalVemobox: 0,
            },
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
        }
    },
    mounted(){
        this.checkBaseInfos();  
    },
    computed:{
        ...mapState({
            storeLang: (state) => {
                return state.globalState.data.lang;
            }
        }),
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
        isChin() {
            return this.storeLang === "zh-CN";
        },
        getVideoSrc() {
            return this.isChin
                ? this.videoArr[this.selectVIdx].zhSrc
                : this.videoArr[this.selectVIdx].src;
        },
    },
    methods:{
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
    }
}
</script>

<style lang="less" scoped>
    .page-opr {
    position: relative;
    margin-top: 140px;
    // width: 80%;
    // max-width: 1150px;
    // margin: 10% auto 0 auto;

    .eco-bg{
      position: absolute;
      top: -140px;
      left: -17%;
      width: 99.8vw;
    }

    .eco-head {
      display: flex;

      .r-head {
        margin-left: 27px;
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

    .eco-content {
      position: relative;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .eco-menu {
        padding: 5px 0;
        width: 25%;
        // background: linear-gradient(
        //   315deg,
        //   rgba(73, 160, 253, 0.23) 0%,
        //   rgba(167, 61, 254, 0.23) 100%
        // );
        background: rgb(28, 29, 32);
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
        border-radius: 10px;

        .section {
          cursor: pointer;
          width: 100%;
          height: 50px;
        //   background: #282b2f;
        //   box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
        //   border-radius: 10px;
          margin: 40px 0;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .active {
        //   background: url("../../assets/cmcnft/selectbg.png") no-repeat;
            background: rgba(87, 87, 87, 0.2);
          background-size: cover;
          border-left: 12px solid rgb(0, 105, 255);
        }
      }

      .eco-box {
        width: 70%;
        // background: blue;
        height: 475px;

        .intro1 {
          height: 100%;

          .desc {
            width: 100%;
            height: 30%;
            overflow: auto;
          }

          .video {
            // height: 70%;
            height: 100%;
            display: flex;
            align-items: center;

            .player {
              width: 81%;
              max-height: 100%;
            }

            .video-list {
              display: inline-block;
              width: 30%;
              // height: 100%;
              padding: 0 30px;

              .li {
                cursor: pointer;
                border: 1px solid transparent;
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                margin: 15px 0;
                position: relative;

                .bg {
                  width: 100%;
                }

                .play {
                  position: absolute;
                  width: 30px;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                }
              }

              .active {
                border: 1px solid #fab408;
                box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
              }
            }
          }
        }

        .intro2 {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;

          .titles {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .title1 {
              background: rgba(40, 43, 47, 0.5);
              border: 1px solid rgba(112, 112, 112, 0.5);
              box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
              border-radius: 10px;
              width: 48%;
              text-align: center;
              font-weight: bold;
              padding: 8px 0;
            }

            .title2 {
              background: rgba(40, 43, 47, 0.5);
              border: 1px solid rgba(112, 112, 112, 0.5);
              box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
              border-radius: 10px;
              width: 48%;
              text-align: center;
              font-weight: bold;
              padding: 8px 0;
            }
          }

          .process {
            flex: 1;
            margin-top: 60px;
            width: 100%;
            // background: red;
            background: url("../../assets/cmcnft/process.png") no-repeat;
            background-size: contain;
          }
        }

        .intro3 {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;

          .titles {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .title1 {
              background: rgba(40, 43, 47, 0.5);
              border: 1px solid rgba(112, 112, 112, 0.5);
              box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
              border-radius: 10px;
              width: 48%;
              text-align: center;
              font-weight: bold;
              padding: 8px 0;
            }

            .title2 {
              background: rgba(40, 43, 47, 0.5);
              border: 1px solid rgba(112, 112, 112, 0.5);
              box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
              border-radius: 10px;
              width: 48%;
              text-align: center;
              font-weight: bold;
              padding: 8px 0;
            }
          }

          .title3 {
            margin-top: 20px;
            background: rgba(40, 43, 47, 0.5);
            border: 1px solid rgba(112, 112, 112, 0.5);
            box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
            border-radius: 10px;
            width: 100%;
            text-align: center;
            font-weight: bold;
            padding: 8px 0;
          }

          .title4 {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }

        .intro5 {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: auto;

          .stgae {
            display: flex;
            position: relative;

            div {
              display: inline-block;
            }

            .clock {
              width: 25px;
              height: 25px;
              margin-right: 20px;
            }

            .quater {
              width: 100px;
              color: #fab408;
              font-weight: bold;
            }

            .schdule {
              .line_content {
                max-width: 400px;
              }

              div {
                display: block;
              }
            }

            .end {
              position: absolute;
              right: 0;
              top: 0;
              font-weight: bold;
              color: #fab408;
            }
          }

          .line {
            margin: 20px 0;
            width: 100%;
            height: 0px;
            border-top: 1px solid #34363b;
            opacity: 1;
          }
        }
      }
    }
  }
</style>
