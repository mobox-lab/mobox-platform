<template>
    <div id="cooper" class="page-cooperate home-item-box">
      <!-- <block-title
        :title="$t('Home_99')"
        describe="FREE TO PLAY"
        direction="left"
      /> -->

        <HomeTitle :title="[$t('Home_99')]" />

      <div class="team-content pc-state">
        <div class="team-group">
          <img
            @click="openMate(`binance`)"
            class="left team-img"
            src="@/assets/cmcnft/group1.png"
            alt=""
          />
          <img
            @click="openMate(`bnft`)"
            class="middle team-img"
            src="@/assets/cmcnft/group2.png"
            alt=""
          />
          <img
            @click="openMate(`bsc`)"
            class="right team-img"
            src="@/assets/cmcnft/group3.png"
            alt=""
          />
          <img
            @click="openMate(`animoca`)"
            class="right team-img"
            src="@/assets/cmcnft/group16.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`cmc`)"
            class="right team-img"
            src="@/assets/cmcnft/group4.png"
            alt=""
          />
          <img
            @click="openMate(`math`)"
            class="left team-img"
            src="@/assets/cmcnft/group5.png"
            alt=""
          />
          <img
            @click="openMate(`dapp`)"
            class="middle team-img"
            src="@/assets/cmcnft/group6.png"
            alt=""
          />
          <img
            @click="openMate(`tp`)"
            class="right team-img"
            src="@/assets/cmcnft/group7.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`pancake`)"
            class="right team-img"
            src="@/assets/cmcnft/group8.png"
            alt=""
          />
          <img
            @click="openMate(`ape`)"
            class="left team-img"
            src="@/assets/cmcnft/group9.png"
            alt=""
          />
          <img
            @click="openMate(`cko`)"
            class="middle team-img"
            src="@/assets/cmcnft/group10.png"
            alt=""
          />
          <img
            @click="openMate(`certik`)"
            class="right team-img"
            src="@/assets/cmcnft/group11.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`a`)"
            class="right team-img"
            src="@/assets/cmcnft/group12.png"
            alt=""
          />
          <img
            @click="openMate(`galler`)"
            class="left team-img"
            src="@/assets/cmcnft/group15.png"
            alt=""
          />
          <img
            @click="openMate(`medx`)"
            class="middle team-img"
            src="@/assets/cmcnft/group14.png"
            alt=""
          />
          <img src="" alt="">
          <!-- <img
            @click="openMate(`certik`)"
            class="right team-img"
            src="@/assets/cmcnft/group11.png"
            alt=""
          />
          <img
            @click="openMate(`a`)"
            class="right team-img"
            src="@/assets/cmcnft/group12.png"
            alt=""
          /> -->
        </div>
        <!-- <div class="team-group">
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
        <div class="team-group">
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
        <div class="team-group">
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
        </div> -->
      </div>

      <div class="team-content mobile-state">
        <div class="team-group">
          <img
            @click="openMate(`binance`)"
            class="left team-img"
            src="@/assets/cmcnft/group1.png"
            alt=""
          />
          <img
            @click="openMate(`bnft`)"
            class="middle team-img"
            src="@/assets/cmcnft/group2.png"
            alt=""
          />
          <img
            @click="openMate(`bsc`)"
            class="right team-img"
            src="@/assets/cmcnft/group3.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`animoca`)"
            class="right team-img"
            src="@/assets/cmcnft/group16.png"
            alt=""
          />
          <img
            @click="openMate(`cmc`)"
            class="right team-img"
            src="@/assets/cmcnft/group4.png"
            alt=""
          />
          <img
            @click="openMate(`math`)"
            class="left team-img"
            src="@/assets/cmcnft/group5.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`dapp`)"
            class="middle team-img"
            src="@/assets/cmcnft/group6.png"
            alt=""
          />
          <img
            @click="openMate(`tp`)"
            class="right team-img"
            src="@/assets/cmcnft/group7.png"
            alt=""
          />
          <img
            @click="openMate(`pancake`)"
            class="right team-img"
            src="@/assets/cmcnft/group8.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`ape`)"
            class="left team-img"
            src="@/assets/cmcnft/group9.png"
            alt=""
          />
          <img
            @click="openMate(`cko`)"
            class="middle team-img"
            src="@/assets/cmcnft/group10.png"
            alt=""
          />
          <img
            @click="openMate(`certik`)"
            class="right team-img"
            src="@/assets/cmcnft/group11.png"
            alt=""
          />
        </div>
        <div class="team-group">
          <img
            @click="openMate(`a`)"
            class="right team-img"
            src="@/assets/cmcnft/group12.png"
            alt=""
          />
          <img
            @click="openMate(`galler`)"
            class="right team-img"
            src="@/assets/cmcnft/group15.png"
            alt=""
          />
          <img
            @click="openMate(`medx`)"
            class="right team-img"
            src="@/assets/cmcnft/group14.png"
            alt=""
          />
        </div>
      </div>
    </div>
</template>

<script>
import HomeTitle from './homeTtile.vue'
import { MATE_LINK } from "@/utils/enums.js";

export default {
    components:{
        HomeTitle
    },
    methods:{
        openMate(title) {
            window.open(MATE_LINK[title]);
        },
    }
}
</script>

<style lang="less" scoped>
    .page-cooperate {
        position: relative;
        margin-top: 240px;
        transition: 0.3s all;
        z-index: 2;
        // width: 80%;
        // max-width: 1150px;
        // margin: 10% auto 0 auto;

        .team-head {
        display: flex;
        position: relative;

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

        .mobile-state{
          display: none;
        }

        .team-content {
        width: 100%;
        margin-top: 20px;

        .team-group {
            width: 100%;
            height: 100px;
            position: relative;

            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                cursor: pointer;
                max-height: 60px;
                width: 15%;
            }
            
            .team-img{
                transition: 0.3s all;
                opacity: 0.6;

                -webkit-filter: grayscale(100%);
                -moz-filter: grayscale(100%);
                -ms-filter: grayscale(100%);
                -o-filter: grayscale(100%);
                filter: grayscale(100%);
                filter: gray;
            }

            .team-img:hover{
                transition: 0.3s all;
                opacity: 1;

                -webkit-filter: grayscale(0%);
                -moz-filter: grayscale(0%);
                -ms-filter: grayscale(0%);
                -o-filter: grayscale(0%);
                filter: grayscale(0%);
                filter: gray;
            }

            // .left {
            //     position: absolute;
            //     left: 0;
            //     top: 50%;
            //     transform: translate(0, -50%);
            // }

            // .middle {
            //     position: absolute;
            //     left: 50%;
            //     top: 50%;
            //     transform: translate(-50%, -50%);
            // }

            // .right {
            //     position: absolute;
            //     right: 0;
            //     top: 50%;
            //     transform: translate(0, -50%);
            // }
        }

        .sb-demand {
            .left {
            height: 50px;
            }

            .middle {
            height: 60px;
            }

            .right {
            height: 50px;
            }
        }

        .high-demand {
            .left {
            height: 51px;
            }

            .middle {
            height: 70px;
            }

            .right {
            height: 70px;
            }
        }

        .bottom-group {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
            cursor: pointer;
            max-height: 100px;
            }

            .middle {
            margin: 0 100px;
            }
        }
        }

        .logo {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        }
    }
</style>
