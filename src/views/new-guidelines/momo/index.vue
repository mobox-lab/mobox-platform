// <template>
//   <div class="momo">
// //     <div class="container">

// //       <flow :title="$t('guide_16')" :steps="[$t('guide_20'), $t('guide_22')]">
//         <flow-item
//           slot="left"
//           :image="require('@/assets/new-guidelines/momo-flow-1.png')"
        >
        </flow-item>
        <flow-item
          slot="center"
          :image="require('@/assets/new-guidelines/momo-flow-2.png')"
        >
          {{ $t("guide_21") }}
        </flow-item>
        <flow-item
          slot="right"
          :image="require('@/assets/new-guidelines/momo-flow-3.png')"
        >
          {{ $t("guide_23") }}
        </flow-item>
      </flow>
      <!-- 挖矿和采集 -->
      <div class="mining item">
        <block-title
          :title="$t('guide_24')"
          describe="FREE TO PLAY， PLAY TO EARN"
          direction="right"
        />
        <div class="layout">
          <div class="image">
            <img src="@/assets/new-guidelines/mining-image.png" alt="" />
          </div>
          <div class="text-info">
            <p>{{ $t("guide_25") }}</p>
            <ul class="button-box">
              <li class="solid">
                <a :href="links.digDetail" target="_blank">{{
                  $t("guide_26")
                }}</a>
              </li>
              <router-link tag="li" to="/iframe/momo" class="hollow">{{
                $t("guide_27")
              }}</router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 宝箱申购 -->
    <div class="purchase item">
      <div class="container">
        <!-- 信息 -->
        <div class="info">
          <block-title
            :title="$t('guide_28')"
            describe="FREE TO PLAY， PLAY TO EARN"
          />
          <h4>{{ $t("guide_29") }}</h4>
          <p>{{ $t("guide_30") }}</p>
          <ul class="button-box">
            <li class="solid">
              <a :href="links.boxDetail" target="_blank">{{
                $t("guide_31")
              }}</a>
            </li>
            <router-link
              tag="li"
              class="hollow"
              to="/iframe/momo?path=activity&tab=0"
              >{{ $t("guide_32") }}</router-link
            >
          </ul>
        </div>
        <!-- 图片 -->
        <div class="image">
          <!-- 标题 -->
          <div class="title">
            <img src="@/assets/new-guidelines/purchase-image-title.png" />
          </div>
          <!-- 背景 -->
          <div class="bg">
            <img src="@/assets/new-guidelines/purchase-image-bg.png" alt="" />
          </div>
          <!-- 底部托盘 -->
          <img
            class="footer"
            src="@/assets/new-guidelines/purchase-image-footer.png"
          />
          <!-- 箱子 -->
          <div class="box">
            <img src="@/assets/new-guidelines/purchase-image-box.png" />
          </div>
        </div>
      </div>
    </div>
    <!-- momo列表 -->
    <ul class="momo-list">
      <li v-for="item in momos" :key="item.id">
        <img
          :src="`./assets/images/heroes/momo_${item.id}/momo_${item.id}_4.png`"
        />
      </li>
    </ul>
    <!-- 介绍 -->
    <div class="container item introduce">
      <img class="image" src="@/assets/new-guidelines/introduce-icon.png" />
      <!-- 信息 -->
      <div class="info">
        <block-title
          :title="$t('guide_33')"
          describe="FREE TO PLAY， PLAY TO EARN"
          direction="right"
        />
        <p>{{ $t("guide_34") }}</p>
        <ul class="button-box">
          <li class="solid">
            <a :href="links.momoDetail" target="_blank">{{ $t("guide_35") }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- faq -->
    <faq>
      <faq-item
        title="在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息"
      >
        在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息、关注和资源，挤压其他参与方的发展空间。
        这些公司中有许多采用产品游戏化技术来留住用户。
        无论是加倍努力锻炼从而在NIKE
        Plus上积累更多的积分，还是在您最喜欢的购物应用程序上获得更多的点数来追逐另一个更大的优惠券，所有这些设计都是旨在增加用户留存率。‌正如前文提到的那样，大部分DApp只是为头部参与者设计的。
        无论是极高的行业准入壁垒还是昂贵的转账手续费，这让每个普通人都能参与其中变得不可能。
        对于每种DApp产品，价值都应该是由社区驱动并且为社区服务。
        所以消除行业准入障碍并确保项目开发者设计产品时，其规则保持透明和诚实，这对于培育和扩展社区，推动项目形成真正内在价值至关重要。
        不幸的是，大多数社区��项目背后所做的贡献和支持并没有得到应有的回报。
      </faq-item>
      <faq-item
        title="在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息"
      >
        在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息、关注和资源，挤压其他参与方的发展空间。
        这些公司中有许多采用产品游戏化技术来留住用户。
        无论是加倍努力锻炼从而在NIKE
        Plus上积累更多的积分，还是在您最喜欢的购物应用程序上获得更多的点数来追逐另一个更大的优惠券，所有这些设计都是旨在增加用户留存率。‌正如前文提到的那样，大部分DApp只是为头部参与者设计的。
        无论是极高的行业准入壁垒还是昂贵的转账手续费，这让每个普通人都能参与其中变得不可能。
        对于每种DApp产品，价值都应该是由社区驱动并且为社区服务。
        所以消除行业准入障碍并确保项目开发者设计产品时，其规则保持透明和诚实，这对于培育和扩展社区，推动项目形成真正内在价值至关重要。
        不幸的是，大多数社区��项目背后所做的贡献和支持并没有得到应有的回报。
      </faq-item>
      <faq-item
        title="在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息"
      >
        在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息、关注和资源，挤压其他参与方的发展空间。
        这些公司中有许多采用产品游戏化技术来留住用户。
        无论是加倍努力锻炼从而在NIKE
        Plus上积累更多的积分，还是在您最喜欢的购物应用程序上获得更多的点数来追逐另一个更大的优惠券，所有这些设计都是旨在增加用户留存率。‌正如前文提到的那样，大部分DApp只是为头部参与者设计的。
        无论是极高的行业准入壁垒还是昂贵的转账手续费，这让每个普通人都能参与其中变得不可能。
        对于每种DApp产品，价值都应该是由社区驱动并且为社区服务。
        所以消除行业准入障碍并确保项目开发者设计产品时，其规则保持透明和诚实，这对于培育和扩展社区，推动项目形成真正内在价值至关重要。
        不幸的是，大多数社区��项目背后所做的贡献和支持并没有得到应有的回报。
      </faq-item>
      <faq-item
        title="在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息"
      >
        在线娱乐本应该是一个极具竞争力的行业，但是垄断性的寡头公司却不断地在争夺用户的信息、关注和资源，挤压其他参与方的发展空间。
        这些公司中有许多采用产品游戏化技术来留住用户。
        无论是加倍努力锻炼从而在NIKE
        Plus上积累更多的积分，还是在您最喜欢的购物应用程序上获得更多的点数来追逐另一个更大的优惠券，所有这些设计都是旨在增加用户留存率。‌正如前文提到的那样，大部分DApp只是为头部参与者设计的。
        无论是极高的行业准入壁垒还是昂贵的转账手续费，这让每个普通人都能参与其中变得不可能。
        对于每种DApp产品，价值都应该是由社区驱动并且为社区服务。
        所以消除行业准入障碍并确保项目开发者设计产品时，其规则保持透明和诚实，这对于培育和扩展社区，推动项目形成真正内在价值至关重要。
        不幸的是，大多数社区��项目背后所做的贡献和支持并没有得到应有的回报。
      </faq-item>
    </faq>
  </div>
</template>

<script>
export BlockTitle from "@/components/BlockTitle.vue";
export Flow from "@/components/new-guidelines/flow.vue";
export FlowItem from "@/components/new-guidelines/flow-item.vue";
export Faq from "@/components/new-guidelines/faq.vue";
export FaqItem from "@/components/new-guidelines/faq-item.vue";
export { momoCfgs } from "@/views/landing/config.js";

export default {
  components: {
    BlockTitle,
    Flow,
    FlowItem,
    Faq,
    FaqItem,
  },
  computed: {
    momos() {
      const list = Object.values(momoCfgs);

      list.sort((item, next) => {
        return item.index - next.index;
      });

      return list;
    },
    links() {
      if (this.$i18n.locale === "zh-CN") {
        return {
          digDetail:
            "https://faqcn.mobox.io/zi-yuan/xin-shou-jiao-cheng/zhi-ya-wa-kuang",
          boxDetail:
            "https://faqcn.mobox.io/zi-yuan/xin-shou-jiao-cheng/box-mang-he-shen-gou",
          momoDetail:
            "https://faqcn.mobox.io/zi-yuan/xin-shou-jiao-cheng/momo-jie-shao",
        };
      }

      return {
        digDetail: "https://mbox.medium.com/a-guide-to-mobox-d7dd5fcd4be9",
        boxDetail: "https://mbox.medium.com/a-guide-to-mobox-d7dd5fcd4be9",
        momoDetail: "https://mbox.medium.com/a-guide-to-mobox-d7dd5fcd4be9",
      };
    },
  },
};
</script>

<style lang="less" scoped>
@export "./pc.less";
@export "./mobile.less";

.momo {
  .item {
    margin-top: 120px;
  }

  img {
    max-width: 100%;
  }

  
  .mining {
    .layout {
      margin-top: 60px;
      position: relative;

      .text-info {
        border: 1px solid #34363b;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        color: #e5e7f2;
      }

      
      p {
        display: block;
      }
    }
  }

  
  .purchase {
    background: url(../../../assets/new-guidelines/box-purchase-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 30px;

    .container {
      padding: 50px 0;

      .info {
        h4 {
          font-size: 20px;
          margin: 20px 0;
        }
      }

      .image {
        position: relative;

        .title,
        .box,
        .footer {
          position: absolute;
          z-index: 0;
        }

        
        .title {
          width: 100%;
          top: 30px;

          img {
            width: 140px;
            display: block;
            margin: 0 auto;
          }
        }

        
        .bg {
          overflow: hidden;
          img {
            animation: rotate 5s linear infinite;
          }
        }

        
        .footer {
          left: 0;
          bottom: 0;
        }

        
        .box {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99;

          img {
            width: 75%;
            margin-top: 20%;
          }
        }

        @keyframes rotate {
          0% {
            -webkit-transform: rotate(0deg);
          }
          25% {
            -webkit-transform: rotate(90deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
          }
          75% {
            -webkit-transform: rotate(270deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
      }
    }
  }

  
  .momo-list {
    list-style: none;
    margin-top: 33px;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;

    li {
      display: inline-block;
      box-sizing: border-box;
      padding: 1%;
      border-radius: 10px;
      background: #282b2f;
      box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
    }
  }

  
  .introduce {
    .info {
      .button-box {
        justify-content: flex-end;
      }
    }
  }
}
</style>
console.log('Debug: feat: add a friend suggestion feature');
console.log('Debug: feat: improve tutorial experience for new players');
