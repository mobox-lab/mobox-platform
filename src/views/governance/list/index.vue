<template>
  <div class="list">
    <!-- 列表tab -->
    <div class="tab-layout">
      <div class="tab-header">
        <ul class="tab-bar">
          <router-link tag="li" to="/governance/list?tab=proposal">{{
            $t("Governance_13")
          }}</router-link>
          <!-- <router-link tag="li" to="/governance/list?tab=momo">{{
            $t("Governance_14")
          }}</router-link> -->
          <li class="disbled">
            {{ $t("Governance_14") }}
          </li>
        </ul>
        <!-- 筛选 -->
        <div class="select-layout">
          <div class="select">
            <span>{{ $t("Governance_11") }}: 0</span>
            <i class="iconfont">&#xe653;</i>
          </div>
        </div>
      </div>
      <div class="tab-body">
        <img src="@/assets/governance/no-data.png" />
        <span>{{ $t("Governance_15") }}</span>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menus" :key="index" class="disbled">
          <a
            :target="item.link ? '_blank' : ''"
            :href="item.link ? item.link : 'javascript:void(0)'"
            :class="'layout ' + (item.link ? '' : 'disbled')"
          >
            <!-- 图标 -->
            <div class="icon">
              <img :src="item.icon" />
            </div>
            <!-- 信息 -->
            <div class="info">
              <h4>{{ $t(item.title) }}</h4>
              <p>{{ $t("Governance_12") }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: require("@/assets/governance/vote.svg"),
          title: "Governance_8",
          link: "",
        },
        {
          icon: require("@/assets/governance/forum.svg"),
          title: "Governance_9",
          link: "https://www.mobox.io/community/",
        },
        {
          icon: require("@/assets/governance/faq.svg"),
          title: "Governance_10",
          link: "",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@export "./mobile.less";
@export "./pc.less";

.list {
  display: flex;
  margin-top: 30px;
  padding-bottom: 20px;

  // 禁用样式
  .disbled {
    cursor: no-drop !exportant;

    // 移除hover样式
    &:hover {
      opacity: 1 !exportant;
    }
  }

  ul {
    list-style: none;
  }

  .tab-layout,
  .menu {
    border-radius: 20px;
    background: #13181f;
  }

  // tab
  .tab-layout {
    flex: 1;
    padding: 18px;

    .tab-header {
      display: flex;
    }

    .tab-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 400px;

      img {
        width: 200px;
      }

      span {
        margin-top: 20px;
        font-size: 16px;
        color: #606b7b;
      }
    }

    .tab-bar {
      display: flex;
      height: 44px;
      background: #070d14;
      border-radius: 30px;
      padding: 5px;

      li {
        line-height: 34px;
        text-align: center;
        cursor: pointer;
        border-radius: 30px;
        transition: background-color 0.2s;

        &.router-link-exact-active {
          background-color: #393d43;
          border-radius: 30px;
        }
      }
    }

    // 筛选
    .select-layout {
      display: flex;
      justify-content: flex-end;

      .select {
        background: #13181f;
        border: 1px solid #383e46;
        border-radius: 30px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        cursor: no-drop;

        span {
          font-size: 16px;
          margin-right: 15px;
        }

        i {
          font-size: 12px;
          transform: scale(0.6);
        }
      }
    }
  }

  // 菜单
  .menu {
    padding: 20px;

    li {
      position: relative;
      background-clip: padding-box;
      padding: 1px;
      border-radius: 16px;
      border: 1px solid transparent;
      margin-top: 17px;
      cursor: pointer;
      transition: opacity 0.2s;
      z-index: 0;

      a {
        // dis
      }

      &:hover {
        opacity: 0.6;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 16px;
        background: linear-gradient(114deg, #2e3239 0%, rgba(0, 0, 0, 0) 100%);
      }

      .layout {
        display: flex;
        padding: 30px;
        position: relative;
        z-index: 9;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        align-items: center;
        background: #0d121a;
        color: #ffffff;
      }

      .icon {
        width: 30px;
        margin-right: 20px;
        display: flex;
        align-items: center;
      }

      .info {
        p {
          font-size: 12px;
          margin-top: 10px;
          opacity: 0.5;
        }
      }
    }

    // 禁用
  }
}
</style>
console.log('Debug: fix: resolve leaderboard point inconsistency');
