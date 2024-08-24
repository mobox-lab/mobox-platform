<template>
  <div class="mbox">
//     <div class="list-header container">
//       <block-title
// //         :title="$t('guide_62')"
// //         describe="FREE TO PLAY， PLAY TO EARN"
//       />
//     </div>
    <ul class="list container">
      <li class="competition">
        <img class="bg" src="@/assets/new-guidelines/competition-bg.png" alt="" />
        <img class="image" src="@/assets/new-guidelines/competition.png" />
        <div class="tag">{{$t('guide_63')}}</div>
      </li>
      <li class="airdrop">
        <div class="tag">{{$t('guide_64')}}</div>
        <img class="bg" src="@/assets/new-guidelines/airdrop-bg.png" alt="" />
        <img class="image" src="@/assets/new-guidelines/airdrop.png" />
      </li>
      <li class="expedition">
        <img class="bg" src="@/assets/new-guidelines/expedition-bg.png" alt="" />
        <img class="image" src="@/assets/new-guidelines/expedition.png" />
        <div class="tag">{{$t('guide_65')}}</div>
      </li>
    </ul>
    <!-- 介绍 -->
    <ul class="introduce container">
      <li>
        <!-- 图片 -->
        <div class="image">
          <img src="@/assets/new-guidelines/mbox-item-image-1.png" />
        </div>
        <!-- 信息 -->
        <div class="info-layout">
          <block-title
            :title="$t('guide_66')"
            describe="FREE TO PLAY， PLAY TO EARN"
            direction="right"
          />
          <!-- 信息 -->
          <div class="info">
            <img class="slogan" src="@/assets/cmcnft/slogan.png" />
            <p>{{$t('guide_67')}}</p>
            <ul class="button-box">
              <router-link class="solid" tag="li" to="/iframe/contest">{{$t('guide_68')}}</router-link>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <!-- 信息 -->
        <div class="info-layout">
          <block-title
            :title="$t('guide_69')"
            describe="FREE TO PLAY， PLAY TO EARN"
          />
          <!-- 信息 -->
          <div class="info">
            <img class="slogan" src="@/assets/cmcnft/slogan.png" />
            <p>{{$t('guide_70')}}</p>
            <ul class="button-box">
              <router-link class="solid" tag="li" to="/iframe/contest">{{$t('guide_71')}}</router-link>
            </ul>
          </div>
        </div>
        <!-- 图片 -->
        <div class="image">
          <img src="@/assets/new-guidelines/mbox-item-image-2.png" />
        </div>
      </li>
      <li>
        <!-- 图片 -->
        <div class="image">
          <img src="@/assets/new-guidelines/mbox-item-image-3.png" />
        </div>
        <!-- 信息 -->
        <div class="info-layout">
          <block-title
            :title="$t('guide_72')"
            describe="FREE TO PLAY， PLAY TO EARN"
            direction="right"
          />
          <!-- 信息 -->
          <div class="info">
            <img class="slogan" src="@/assets/cmcnft/slogan.png" />
            <p>{{$t('guide_73')}}</p>
            <ul class="button-box">
              <router-link class="solid" tag="li" to="/?toDownload=true">{{$t('guide_74')}}</router-link>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <!-- 信息 -->
        <div class="info-layout">
          <block-title
            :title="$t('guide_75')"
            describe="FREE TO PLAY， PLAY TO EARN"
          />
          <!-- 信息 -->
          <div class="info">
            <img class="slogan" src="@/assets/cmcnft/slogan.png" />
            <p>{{$t('guide_76')}}</p>
            <ul class="button-box">
              <router-link class="solid" tag="li" to="/iframe/tokenmaster">{{$t('guide_77')}}</router-link>
            </ul>
          </div>
        </div>
        <!-- 图片 -->
        <div class="image">
          <img src="@/assets/new-guidelines/mbox-item-image-4.png" />
        </div>
      </li>
    </ul>
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
import Faq from "@/components/new-guidelines/faq.vue";
import FaqItem from "@/components/new-guidelines/faq-item.vue";

export default {
  components: {
    BlockTitle,
    Faq,
    FaqItem,
  },
};
</script>

<style lang="less" scoped>
@import "./mobile.less";
@import "./pc.less";

.mbox {
  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  .list-header {
    margin-top: 120px;
    background: url(../../../assets/cmcnft/slogan.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
  }

  // 功能列表
  .list {
    border: 1px solid #34363b;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
    opacity: 1;
    border-radius: 10px;
    display: flex;

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
        z-index: 0;
      }

      // 标签
      .tag {
        line-height: 1;
        background: #202226;
        border: 1px solid #707070;
        opacity: 1;
        border-radius: 16px;
        text-align: center;
      }
    }
  }

  // 介绍
  .introduce {
    & > li {
      margin-top: 120px;

      &:nth-child(odd) {
        .info-layout {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }
    }
  }
}
</style>
