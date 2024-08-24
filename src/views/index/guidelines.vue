// <template>
// //   <div id="guideLines" class="guidelines home-item-box">
// // //     <img class="guidebg" src="@/assets/index/guidebg.png" alt="">
// // //     
// //     <HomeTtile :title="[$t('guide_6')]">
//       <router-link to="/new-guidelines/momo" class="pc-state"><div class="link-head">{{$t('guide_78')}} ></div></router-link>
//     </HomeTtile>
//     <!-- <div>
//       <block-title
        :title="$t('guide_6')"
        describe="FREE TO PLAY"
      >
        <router-link to="/new-guidelines/momo" class="block-tag pc-state">{{$t('guide_78')}} ></router-link>
      </block-title>
    </div> -->
    <!-- 卡片列表 -->
    <div class="card">
      <div class="flex">
        <ul class="left">
          <router-link class="block-item" tag="li" to="/iframe/momo?path=activity&tab=0">
            <img class="icon" src="@/assets/index/guideline-1.png" />
            <!-- <img class="bg" src="@/assets/index/guideline-bg-1.png" /> -->
            <div class="info">
              <div>{{$t('guide_7')}}</div>
              <div class="retick">
                {{$t('Governance_12')}}
                <img src="@/assets/index/retick.png" alt="">
              </div>
              <!-- <img src="@/assets/index/play.png" /> -->
            </div>
          </router-link>
          <router-link class="block-item" tag="li" to="/iframe/momo?path=collection">
            <img class="icon" src="@/assets/index/guideline-2.png" />
            <!-- <img class="bg" src="@/assets/index/guideline-bg-2.png" /> -->
            <div class="info">
              <div>{{$t('guide_9')}}</div>
              <div class="retick">
                {{$t('Governance_12')}}
                <img src="@/assets/index/retick.png" alt="">
              </div>
              <!-- <img src="@/assets/index/play.png" /> -->
            </div>
          </router-link>
        </ul>
        <router-link tag="div" to="/iframe/tokenmaster" class="center center-block-item">
            <img class="icon" src="@/assets/index/guideline-3.png" />
            <!-- <img class="bg" src="@/assets/index/guideline-bg-3.png" /> -->
          <div class="info">
            <div>{{$t('guide_10')}}</div>
            <div class="retick">
                {{$t('Governance_12')}}
                <img src="@/assets/index/retick.png" alt="">
              </div>
            <!-- <img src="@/assets/index/play.png" /> -->
          </div>
        </router-link>
      </div>
      <ul class="right">
        <router-link class="block-item" tag="li" to="/iframe/momo?path=mypet">
          <img class="icon" src="@/assets/index/guideline-4.png" />
          <!-- <img class="bg" src="@/assets/index/guideline-bg-4.png" /> -->
          <div class="info">
            <div>{{$t('guide_8')}}</div>
            <div class="retick">
                {{$t('Governance_12')}}
                <img src="@/assets/index/retick.png" alt="">
              </div>
            <!-- <img src="@/assets/index/play.png" /> -->
          </div>
        </router-link>
        <router-link class="block-item" tag="li" to="/iframe/momo?path=market">
          <img class="icon" src="@/assets/index/guideline-5.png" />
          <!-- <img class="bg" src="@/assets/index/guideline-bg-5.png" /> -->
          <div class="info">
            <div>{{$t('guide_11')}}</div>
            <div class="retick">
                {{$t('Governance_12')}}
                <img src="@/assets/index/retick.png" alt="">
              </div>
            <!-- <img src="@/assets/index/play.png" /> -->
          </div>
        </router-link>
      </ul>
    </div>

    <div class="mobile-state">
      <router-link to="/new-guidelines/momo"><div class="link-head">{{$t('guide_78')}} ></div></router-link>
    </div>
  </div>
</template>

<script>
  // export BlockTitle from "@/components/BlockTitle.vue";
  export HomeTtile from "./homeTtile.vue";

  export default {
    components: {
      // BlockTitle,
      HomeTtile,
    },
  };
</script>

<style lang="less" scoped>
  .guidelines {
    // width: 80%;
    // max-width: 1150px;
    margin: 156px auto 110px auto;
    position: relative;
    // z-index: 1;

    .mobile-state{
      display: none;
    }

    .guidebg{
      width: 98vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .block-tag {
      cursor: pointer;
    }
    
    .block-item{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      background: rgba(20, 20, 20, 0.5);
      border: 1px solid transparent;
    }

    .center-block-item{
      display: flex;
      flex-direction: column;

      background: rgba(20, 20, 20, 0.5);
      border: 1px solid transparent;
    }

    .link-head{
      color: #668EFF;
    }

    .mobile-tag{
      display: none;
      text-align: center;

      a{
        text-align:center;
        font-size: 12px!exportant;
      }
    }

    .card {
      display: flex;
      margin-top: 20px;

      // 左边flex
      .flex {
        display: flex;
        flex: 1.5;

        .center{
          flex: 1;
        }
        .left {
          flex: 1.6;
        }
      }

      .icon {
        transition: transform 0.2s;
      }

      // 中间模块
      .center {
        min-width: 0;
        cursor: pointer;
        display: flex;
        align-items: center;

        .icon {
          width: 100%;
        }
      }

      .center,
      ul li {
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        border: 3px solid rgb(26, 27, 27);

        &:hover {
          border: 3px solid #34363B;

          .icon {
            transform: scale(1.2);
          }

          .retick{
            opacity: 1;
          }
        }
      }

      ul li {
        .icon {
          display: block;
        }
      }

      // 背景图
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      // 标题信息
      .info {
        // position: absolute;
        flex: 1;
        padding: 0 30px;
        // display: flex;
        // align-items: center;
        .retick{
          display: flex;
          align-items: center;
          color: #668EFF;
          opacity: 0.7;

          img {
            margin-left: 10px;
            width: 12px;
            height: 12px;
          }
        }

        // span {
        //   flex: 1;
        // }
      }

      ul {
        list-style: none;
        display: flex;

        li {
          flex: 1;
          cursor: pointer;
        }
      }
    }
  }

  // mobile
  @media (max-width: 768px) {
    // .card {
    //   flex-direction: column;

    //   ul li {
    //     padding: 10px 20px 20px 20px;
    //   }

    //   .icon {
    //     width: 100%;
    //   }

    //   .left {
    //     flex-direction: column;
    //     margin-right: 15px;

    //     // li:last-child {
    //     //   margin-top: 15px;
    //     // }
    //   }

    //   .right {
    //     margin-top: 15px;

    //     // li {
    //     //   &:last-child {
    //     //     margin-left: 15px;
    //     //   }
    //     // }
    //   }

    //   .info {
    //     left: 10px;
    //     right: 10px;
    //     bottom: 10px;

    //     span {
    //       font-size: 12px;
    //     }

    //     img {
    //       width: 20px;
    //       height: 20px;
    //     }
    //   }
    // }
  }

  // pc
  @media (min-width: 768px) {
    .card {
      .center {
        height: 488px;
        flex: 1;
      }

      .icon {
        margin: 20px auto 0 auto;
        width: 210px;
      }

      // 标题信息
      .info {
        left: 20px;
        right: 20px;
        bottom: 35px;

        span {
          font-size: 14px;
        }

        img {
          width: 28px;
          height: 28px;
        }
      }

      .left {
        li {
          margin-right: 50px;
        }
      }

      .right {
        flex: 1;
        
        li {
          margin-left: 50px;
        }
      }

      ul {
        flex-direction: column;
        // flex: 1;

        li {
          &:last-child {
            margin-top: 45px;
          }
        }
      }
    }
  }
</style>
