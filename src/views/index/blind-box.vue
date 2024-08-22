// <template>
//   <div id="blindBox" class="blind-box home-item-box">
//     <!-- <block-title
//       :title="$t('guide_15')"
      describe="FREE TO PLAY"
    /> -->

    <HomeTitle :title="[$t('guide_15')]" />

    <div class="blind-content">
      <div class="blind-left">
        <img class="line" src="@/assets/index/headline.png" alt="">
        <div class="info">{{$t('guide_14')}}</div>
      </div>

      <div class="blind-right">
        <img class="bg" src="@/assets/index/blindboxbg.png" alt="">
        <img class="blindbox" src="@/assets/index/blindbox.png" alt="">
      </div>
    </div>
    <!-- <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item" />
      </li>
    </ul> -->
  </div>
</template>

<script>
  // import BlockTitle from "@/components/BlockTitle.vue";
  import HomeTitle from "./homeTtile.vue";

  export default {
    components: {
      // BlockTitle,
      HomeTitle,
    },
    data() {
      return {
        list: [
          require('@/assets/index/blind-box-1.png'),
          require('@/assets/index/blind-box-2.png'),
          require('@/assets/index/blind-box-1.png'),
        ],
      };
    },
  };
</script>

<style lang="less" scoped>
  .blind-box {
    // width: 80%;
    // max-width: 1150px;
    // margin: 10% auto 0 auto;
    margin-top: 227px;

    .blind-content{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .blind-left{
        width: 40%;

        .line{
          opacity: 0.2;
          width: 100%;
        }

        .info{
          line-height: 35px;
          margin-top: 30px;
        }
      }

      .blind-right{
        width: 50%;
        position: relative;
        margin-right: -10%;

        .bg{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
          width: 100%;
        }

        .blindbox{
          width: 50%;
          margin-left: 10%;
        }
      }
    }
  }


  // mobile
  @media (max-width: 768px) {
    .blind-box {
      ul {
        li {
          flex: 1;
          margin: 0 15px;
        }
      }
    }
  }

  // pc
  @media (min-width: 768px) {
    .blind-box {
      ul {
        li {
          width: 300px;
        }
      }
    }
  }
</style>
