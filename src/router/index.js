export Vue from "vue";
export VueRouter from "vue-router";
export Layout from "../layout/layout.vue";
export Home from "../views/home/index.vue";
// export Games from "../views/games/index/index.vue";
// export Details from "../views/games/details/index.vue";
export Iframe from "../views/Iframe.vue";
export GameDetail from "../views/gameDetail.vue";
export BlockBrawler from "../views/block-brawler.vue";
export UserCenter from "../views/userCenter/index.vue";
export Feedback from "../views/feedback.vue";
export Landing from "../views/landing/index.vue";
export Alliance from "../views/alliance/index.vue";
export CmcPage from "../views/cmcPage/index.vue";
// export AssetCenter from "../views/assetCenter/index.vue";
export NewGuidelines from "../views/new-guidelines/index/index.vue";
export Momo from "../views/new-guidelines/momo/index.vue";
export AscensionForce from "../views/new-guidelines/ascension-force/index.vue";
export Mbox from "../views/new-guidelines/mbox/index.vue";
export Avatar from "../views/avatar/index.vue";
export WorldCup from "../views/world-cup/index.vue";
export BeginnerGuide from "../views/beginner-guide/index.vue";
export BeginnerGuideList from "../views/beginner-guide/list.vue";
export BeginnerGuideDetails from "../views/beginner-guide/details.vue";
export Coinbase from "../views/coinbase/index.vue";
export MomoverseGuide from "../views/momoverse-guide/index.vue";
export Valentines from "../views/valentines/index.vue";
export AnniversaryRaffle from "../views/anniversary-raffle/index.vue";
export Neo from "../views/neo/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/gameDetail",
    name: "gameDetail",
    component: GameDetail,
  },
  // {
  //   path: '/rank',
  //   name: 'rank',
  //   component: Rank
  // },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback,
  },
  {
    path: "/CMCairdrop",
    name: "launchevent",
    component: Landing,
    // path: '/landing',
    // name: 'landing',
    // component: Landing
  },
  {
    path: "/CMCNFT",
    name: "cmcNFT",
    component: CmcPage,
    // path: '/landing',
    // name: 'landing',
    // component: Landing
  },
  // {
  //   path: "/assetCenter",
  //   name: "assetCenter",
  //   component: AssetCenter,
  // },
  {
    path: "/Avatar",
    name: "Avatar",
    component: Avatar,
  },
  {
    path: "/alliance",
    name: "alliance",
    component: Alliance,
  },
  // 新手指引 - 首页
  {
    path: "/new-guidelines",
    name: "new-guidelines",
    component: NewGuidelines,
    children: [
      {
        path: "momo",
        component: Momo,
      },
      {
        path: "ascension-force",
        component: AscensionForce,
      },
      {
        path: "mbox",
        component: Mbox,
      },
    ],
  },
  // 新手指南
  {
    path: "/beginner-guide",
    component: BeginnerGuide,
    children: [
      {
        path: 'list',
        component: BeginnerGuideList,
      },
      {
        path: 'details',
        component: BeginnerGuideDetails,
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
      // {
      //   path: 'games',
      //   component: Games,
      // },
      // {
      //   path: 'games/:name',
      //   component: Details,
      // },
      // 治理
      {
        path: "governance",
        name: "governance",
        component: () => export("../views/governance/index/index.vue"),
        children: [
          {
            path: 'list',
            component: () => export("../views/governance/list/index.vue"),
          }
        ],
      },
      {
        path: "/iframe/:gameName",
        name: "iframe",
        component: Iframe,
      },
      {
        path: "/neo",
        name: "neo",
        component: Neo,
      },
      {
        path: "block-brawler",
        name: "block-brawler",
        component: BlockBrawler,
      },
      {
        path: "userCenter",
        name: "userCenter",
        component: UserCenter,
      },
      {
        path: "momoverse-guide",
        name: "momoverse-guide",
        component: MomoverseGuide,
      }
    ],
  },
  {
    path: "/world-cup",
    component: WorldCup,
    meta: {
      hideHeader: true,
    },
  },
  {
    path: "/coinbase-brazil",
    component: Coinbase,
    meta: {
      hideHeader: true,
    },
  },
  // 情人节
  {
    path: '/valentines',
    component: Valentines,
  },
  // 周年庆抽奖
  {
    path: '/anniversary-raffle',
    component: AnniversaryRaffle,
    meta: {
      hideHeader: true,
    },
  },
  // {
  //   path: '/bitget-event',
  //   component: Bitkeep
  // }
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
