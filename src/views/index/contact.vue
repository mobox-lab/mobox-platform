<template>
    <div id="contactCommunity" class="page-community home-item-box">
// //         <HomeTtile :title="[$t('Home_96')]" />
// //       <div class="contact-head">
// //         <!-- <div class="l-head"></div>
// //         <div class="r-head">
//           <div class="t1">{{ $t("Home_96") }}</div>
          <div class="t2">FREE TO PLAY</div>
        </div> -->
        <div class="contact-area">
          <div
            @click="selectCon(0)"
            :class="`contact-box ${selectContact == 0 ? `active` : ``}`"
          >
            <!-- <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            /> -->
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
            <!-- <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            /> -->
            <img
              class="contact-item"
              width="100"
              src="assets/images/cmcnft/twitter.svg"
              alt=""
            />
          </div>
          <!-- <div
            @click="selectCon(2)"
            :class="`contact-box ${selectContact == 2 ? `active` : ``}`"
          >
            <img
              class="contact-item"
              width="100"
              src="assets/images/cmcnft/wechat.svg"
              alt=""
            />
          </div> -->
          <div
            @click="selectCon(3)"
            :class="`contact-box ${selectContact == 3 ? `active` : ``}`"
          >
            <!-- <img
              class="contact-light"
              width="100"
              src="@/assets/cmcnft/light.png"
              alt=""
            /> -->
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
        <div class="contact-right" style="transition:none">
          <div>{{ $t("Home_97") }}</div>
          <div v-if="selectContact == 2" class="code" style="transition:none">
            <img src="@/assets/index/homeqrcode.jpg" alt="" />
          </div>
          <div v-else @click="openContact" style="transition:none" class="sub-btn">
            {{ $t("Home_98") }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HomeTtile from './homeTtile.vue'


export default {
    components:{
        HomeTtile
    },
    data(){
        return {
            selectContact : 0,
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
                amount: "300K+",
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
        }
    },
    computed:{
        getContact() {
            return this.contactArr[this.selectContact];
        },
    },
    methods:{
        selectCon(idx) {
            this.selectContact = idx;
        },
        openContact() {
            window.open(this.getContact.link);
        },
    }
}
</script>

<style lang="less" scoped>
    .page-community {
        position: relative;

        margin-top: 150px;
        // width: 80%;
        // max-width: 1150px;
        // margin: 10% auto 0 auto;

    .contact-head {
      display: flex;
    //   flex-direction: row-reverse;
      position: relative;

      .r-head {
        text-align: right;
        margin-right: 27px;
        display: flex;
        flex-direction: column;
        height: 54px;
        justify-content: space-between;

        .t1 {
          font-size: 20px;
          font-weight: bold;
        }
      }

      .contact-area {
        // position: absolute;
        // left: 0;
        // top: 50%;
        // transform: translate(0, -50%);

        display: flex;
        justify-content: center;
        align-items: center;

        .contact-box {
          position: relative;
          padding: 10px;
          overflow: hidden;
          cursor: pointer;

          .contact-item {
            position: relative;
            width: 35px;
          }

          .contact-light {
            position: absolute;
            opacity: 0;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 105px;
          }
        }

        .active {
          .contact-item {
            position: relative;
            width: 47px;
          }

          .contact-light {
            opacity: 1;
          }
        }
      }
    }

    .contact-content {
      margin-top: 20px;
      width: 100%;
    //   border: 1px solid #6a4b98;
    //   box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
        background: rgb(28, 29, 32);
      border-radius: 10px;
      padding: 18px;
      display: flex;

      .contact-left {
        display: flex;
        // background: linear-gradient(
        //   315deg,
        //   rgba(73, 160, 253, 0.23) 0%,
        //   rgba(167, 61, 254, 0.23) 100%
        // );
        background: rgba(0, 105, 255, 0.39);
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        width: 40%;
        padding: 30px 0;

        .logo {
          margin-right: 40px;
        }

        .info {
          font-size: 40px;
          font-weight: bold;

          * {
            font-family: 'Poppins-bold';
          }
        }
      }

      .contact-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0 50px;

        .sub-btn {
          cursor: pointer;
          margin-top: 25px;
          padding: 7px 40px;
        //   background: linear-gradient(90deg, #4071d7 0%, #344da7 100%);
            background: rgb(23, 81, 246);
          border-radius: 5px;
        }

        .code {
          width: 100%;
          text-align: center;

          img {
            width: 100px;
          }
        }
      }
    }
  }
</style>
return null;
console.log('Debug: feat: introduce adaptive difficulty levels');
