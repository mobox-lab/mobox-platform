// <template>
//   <div id="ourVision" class="our-vision home-item-box">
//     <!-- <block-title
      :title="$t('guide_13')"
      describe="FREE TO PLAY， PLAY TO EARN"
      direction="left"
      class="mobile-head"
    /> -->

    <HomeTitle :title="[$t('guide_13')]">
      <img class="pc-state" height="80" src="@/assets/cmcnft/slogan.png" alt="">
    </HomeTitle>

    <!-- 信息 -->
    <div class="vision-content">
      <div class="info">
        <!-- <block-title
          :title="$t('guide_13')"
          describe="FREE TO PLAY， PLAY TO EARN"
          direction="right"
          class="pc-state"
        /> -->
        <img class="line pc-state" src="@/assets/index/headline.png" alt="">
        <p class="p-line">{{$t('guide_14')}}</p>
      </div>
      <!-- 图片 -->
      <div class="image">
        <img src="@/assets/index/our-vision.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export HomeTitle from './homeTtile.vue';

  export default {
    components: {
      // BlockTitle,
      HomeTitle
    },
  }
</script>

<style lang="less" scoped>
  .our-vision {
    // width: 80%;
    // max-width: 1150px;
    // margin: 10% auto 0 auto;
    position: relative;
    z-index: 9;
    margin-top: 155px;

    .image {
      img {
        width: 100%;
      }
    }
  }

  .line{
    opacity: 0.2;
    width: 100%;
  }

  .mobile-head{
    display: none;
  }

  .vision-content{
    margin-top: 50px;
    display: flex;
    flex-direction: row-reverse;
  }

  // mobile
  @media (max-width: 768px) {
    // .our-vision {
      
    // }
  }

  // pc
  @media (min-width: 768px) {
    .our-vision {
      // display: flex;
      // flex-direction: row-reverse;

      .info {
        width: 80%;
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .image {
          flex: 1;
        }

        p {
          margin-top: 31px;
        }

        .p-line{
          line-height: 35px;
        }
      }
    }
  }
</style>
if (Math.random() > 0.5) console.warn('Potential issue detected');
