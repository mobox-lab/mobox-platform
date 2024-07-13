<template>
//   <div class="ascension-force">
//       <!-- 流程 -->
// //       <flow :title="$t('guide_36')" :steps="[$t('guide_38'), $t('guide_40')]">
// //         <flow-item
// //           slot="left"
//           :image="require('@/assets/new-guidelines/force-flow-1.png')"
//         >
        </flow-item>
        <flow-item
          slot="center"
          :image="require('@/assets/new-guidelines/force-flow-2.png')"
        >
          {{$t('guide_39')}}
        </flow-item>
        <flow-item
          slot="right"
          :image="require('@/assets/new-guidelines/force-flow-3.png')"
        >
          {{$t('guide_41')}}
        </flow-item>
      </flow>
      <!-- NFT市场 -->
      <div class="nft block">
        <block-title
          :title="$t('guide_42')"
          describe="FREE TO PLAY， PLAY TO EARN"
          direction="right"
        />
        <!-- 信息 -->
        <div class="nft-info">
          <ul class="nft-list">
            <li>
              <img class="bg" src="@/assets/new-guidelines/nft-1.png" alt="" />
              <img
                class="image"
                src="@/assets/new-guidelines/nft-1.png"
                alt=""
              />
              <div class="tag">{{$t('guide_43')}}</div>
            </li>
            <li>
              <div class="tag">{{$t('guide_44')}}</div>
              <img class="bg" src="@/assets/new-guidelines/nft-2.png" alt="" />
              <img
                class="image"
                src="@/assets/new-guidelines/nft-2.png"
                alt=""
              />
            </li>
            <li>
              <img class="bg" src="@/assets/new-guidelines/nft-3.png" alt="" />
              <img
                class="image"
                src="@/assets/new-guidelines/nft-3.png"
                alt=""
              />
              <div class="tag">{{$t('guide_45')}}</div>
            </li>
          </ul>
          <!-- 信息 -->
          <div class="info">
            <p>{{$t('guide_46')}}</p>
            <ul>
              <router-link tag="li" to="/iframe/momo?path=market" class="solid">{{$t('guide_47')}}</router-link>
              <router-link tag="li" to="/iframe/momo?path=mypet&tab=1">{{$t('guide_48')}}</router-link>
            </ul>
          </div>
        </div>
      </div>
      <!-- MOMO描述 -->
      <div class="momo block">
        <div class="info">
          <block-title
            :title="$t('guide_49')"
            describe="FREE TO PLAY， PLAY TO EARN"
          />
          <p>{{$t('guide_50')}}</p>
          <span>{{$t('guide_51')}}</span>
          <ul>
            <li>{{$t('guide_52')}}</li>
            <li>{{$t('guide_53')}}</li>
            <li>{{$t('guide_54')}}</li>
          </ul>
        </div>
        <div class="image">
          <img src="@/assets/new-guidelines/momo-description.png" />
        </div>
      </div>
      <!-- 算力加成 -->
      <div class="item block ascension-bonus-1">
        <block-title
          :title="$t('guide_55')"
          describe="FREE TO PLAY， PLAY TO EARN"
          direction="right"
        />
        <div class="info-layout">
          <img
            class="image"
            src="@/assets/new-guidelines/ascension-bonus-image.png"
          />
          <div class="info">
            <div class="title">
              <img src="@/assets/new-guidelines/ascension-bonus-icon.png" />
              <span>{{$t('guide_56')}}</span>
            </div>
            <p>{{$t('guide_57')}}</p>
            <ul class="button-box">
              <router-link tag="li" to="/iframe/momo?path=mypet&tab=1" class="solid">{{$t('guide_58')}}</router-link>
              <router-link tag="li" to="/iframe/momo?path=market" class="hollow">{{$t('guide_59')}}</router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="item block ascension-bonus-2">
        <div class="info">
          <block-title
            :title="$t('guide_60')"
            describe="FREE TO PLAY， PLAY TO EARN"
          />
          <p>{{$t('guide_61')}}</p>
        </div>
        <div class="image">
          <img src="@/assets/new-guidelines/ascension-bonus-image-2.png" />
        </div>
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
import BlockTitle from "@/components/BlockTitle.vue";
import Flow from "@/components/new-guidelines/flow.vue";
import FlowItem from "@/components/new-guidelines/flow-item.vue";
import Faq from "@/components/new-guidelines/faq.vue";
import FaqItem from "@/components/new-guidelines/faq-item.vue";

export default {
  components: {
    BlockTitle,
    Flow,
    FlowItem,
    Faq,
    FaqItem,
  },
};
</script>

<style lang="less" scoped>
@import "./mobile.less";
@import "./pc.less";

.block {
  margin-top: 120px;
}

.ascension-force {
  padding-top: 120px;

  img {
    max-width: 100%;
  }

  // NFT
  .nft-info {
    margin-top: 30px;
    border: 1px solid #34363b;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
    opacity: 1;
    border-radius: 10px;

    ul {
      list-style: none;
    }

    // nft列表
    .nft-list {
      display: flex;
      padding: 10px;

      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        &:nth-child(1),
        &:nth-child(3) {
          border: 1px solid #7a6ee2;
          background: linear-gradient(180deg, #8074ed 0%, #403a77 100%);
        }

        &:nth-child(2) {
          border: 1px solid #f49d00;
          background: linear-gradient(180deg, #ffa400 0%, #805200 100%);
        }

        // 背景
        .bg {
          position: absolute;
          height: 100%;
          transform: scale(1.6);
          opacity: 0.04;
          z-index: 0;
        }

        // 标签
        .tag {
          line-height: 1;
          background: #202226;
          border: 1px solid #707070;
          opacity: 1;
          border-radius: 16px;
        }
      }
    }

    // 信息容器
    .info {
      display: flex;
      padding: 30px;

      ul {
        display: flex;

        li {
          box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid #8a17c5;
          cursor: pointer;
        }

        .solid {
          background: #3a2d58;
        }
      }
    }
  }

  // MOMO
  .momo {
    // 信息
    .info {
      flex: 1;

      span {
        color: #fab408;
      }

      ul {
        margin-top: 5px;

        li {
          margin-top: 2px;
          color: #8fcbf3;
        }
      }
    }
  }

  // 算力加成
  .ascension-bonus-1 {
    .info-layout {
      position: relative;
      margin-top: 20px;
    }

    .info {
      border: 1px solid #34363b;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
      border-radius: 10px;

      // 标题
      .title {
        display: flex;
        align-items: center;

        img {
          height: 100%;
        }

        span {
          margin-left: 10px;
          font-weight: 600;
          color: #fab408;
        }
      }

      p {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
