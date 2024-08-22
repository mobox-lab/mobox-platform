<template>
  <div class="guidelines">
    <!-- 头部 -->
    <header-layout />
    <!-- tab -->
    <tab />
    <!-- 子路由 -->
  </div>
</template>

<script>
import headerLayout from "./header.vue";
import tab from "./tab.vue";

export default {
  components: {
    headerLayout,
    tab,
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/var.less";

.guidelines {
  padding-top: @header-pc-height;
  padding-bottom: 50px;
  background: #202226;

  /deep/ .container {
    width: 80%;
    max-width: 1150px;
    margin: 0 auto;
  }

  // 按钮 - 通用
  /deep/ .button-box {
    list-style: none;
    margin-top: 24px;
    display: flex;

    li {
      min-width: 101px;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      border-radius: 25px;
      cursor: pointer;

      a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .solid {
      background: linear-gradient(90deg, #4071d7 0%, #344da7 100%);
    }

    .hollow {
      border: 2px solid #395ebd;
    }
  }
}

// mobile
@media (max-width: 768px) {
  .guidelines {
    // 按钮
    /deep/ .button-box {
      li {
        margin: 0 10px;
        flex: 1;
      }
    }
  }
}

// pc
@media (min-width: 768px) {
  .guidelines {
    // 按钮
    /deep/ .button-box {
      li {
        padding: 0 10px;
        min-width: 101px;
        height: 33px;
        margin-left: 20px;
      }
    }
  }
}
</style>
