// <template>
// //     <div id="milestone" class="page-adver home-item-box">
// // 
// //         <HomeTtile :title="[$t('Home_78')]" />
// // 
//       <!-- <block-title
//        class="pc-state"
        :title="$t('Home_78')"
        describe="FREE TO PLAY"
      />

      <block-title
        class="mobile-head"
        :title="$t('Home_78')"
        describe="FREE TO PLAY"
        direction="left"
      /> -->

      <div class="achieve-content">
        <div class="achieve-box">
          <!-- <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="" /> -->
          <img
            width="100"
            class="achieve-box-title"
            src="@/assets/index/achievement-1.png"
            alt=""
          />
          <div class="desc-box">
            <div class="pc-state amount">NO.1</div>
            <div class="pc-state tip">{{ $t("guide_12") }}</div>
            <div class="pc-state title">GameFi</div>
          </div>

          <div class="mobile-info">
            <div style="display:flex;align-items:center;">
              <div class="amount" style="margin-right:10px;">NO.1</div>
              <div class="title" style="padding:2px 10px;">GameFi</div>
            </div>
            <div class="tip" style="text-align:left;padding:0px;width:150px">{{ $t("guide_12") }}</div>
          </div>
        </div>
        <div class="achieve-box achieve-reverse">
          <!-- <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="" /> -->
          <img
            width="100"
            class="achieve-box-title"
            src="@/assets/index/achievement-2.png"
            alt=""
          />
          <div class="desc-box">
            <div class="pc-state amount">$300M+</div>
            <div class="pc-state tip">{{ $t("Home_80") }}</div>
            <div class="pc-state title">NFT Farmer</div>
          </div>

          <div class="mobile-info">
            <div style="display:flex;align-items:center;">
              <div class="amount" style="margin-right:10px;">$300M+</div>
              <div class="title" style="padding:2px 10px;">NFT Farmer</div>
            </div>
            <div class="tip" style="text-align:left;padding:0px;width:150px">{{ $t("Home_80") }}</div>
          </div>
        </div>
        <div class="achieve-box">
          <!-- <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="" /> -->
          <img
            width="100"
            class="achieve-box-title"
            src="@/assets/index/achievement-3.png"
            alt=""
          />
          <div class="desc-box">
            <div class="pc-state amount">320K+</div>
            <div class="pc-state tip">{{ $t("Home_81") }}</div>
            <div class="pc-state title">Community</div>
          </div>

          <div class="mobile-info">
            <div style="display:flex;align-items:center;">
              <div class="amount" style="margin-right:10px;">320K+</div>
              <div class="title" style="padding:2px 10px;">Community</div>
            </div>
            <div class="tip" style="text-align:left;padding:0px;width:150px">{{ $t("Home_81") }}</div>
          </div>
        </div>
      </div>

        <img class="bodian" src="@/assets/index/milestonebodian.png" alt="">

    </div>
</template>

<script>
export HomeTtile from './homeTtile.vue'
export default {
  components: { HomeTtile },
    
}
</script>

<style lang="less" scoped>
    .page-adver {
        position: relative;
        padding-top: 170px;
        padding: 80px 0;
        // width: 80%;
        // max-width: 1150px;
        // margin: 10% auto 0 auto;

        .mile-bg{
            position: absolute;
            height: 100%;
            width: 99.5vw;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            background: rgba(28, 29, 32);
        }

        .bodian{
            position: absolute;
            right: -10%;
            bottom: -20%;
            width: 10vw;
        }

        .achieve-content {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .achieve-box {
            display: flex;
            // flex-direction: column;
            position: relative;
            justify-content: center;
            align-items: center;

            // border: 1px solid #6a4b98;
            // box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
            border-radius: 10px;
            width: 25%;
            height: 180px;

            .mobile-info{
            display: none;
            }

            .achieve-box-title {
            margin-bottom: 15px;
            }

            .desc-box{
              padding-left: 50px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
            }

            div {
            position: relative;
            }

            img {
            position: relative;
            }

            .amount {
              font-family: 'Poppins-bold';
              font-size: 30px;
              color: #fab408;
              font-weight: bold;
            }

            .tip {
              font-size: 12px;
              // padding: 0 10%;
              text-align: left;
            }

            .title {
            padding: 5px 10px;
            // background: #202226;
            // border: 1px solid #707070;
            background: rgb(42, 45, 51);
            border-radius: 18px;
            font-size: 14px;
            margin-top: 10px;
            }

            .achieve-bg {
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 50%;
            transform: translate(-50%, 0);
            }
        }
    }
  }
</style>
