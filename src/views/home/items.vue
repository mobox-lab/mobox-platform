<template>
//   <div class="item">
//     <div class="flex">
//       <h6 class="module-title">{{ title }}</h6>
//     </div>
//     <ul>
      <li v-for="item in 8" :key="item">
        <!-- 图片 -->
        <div class="image"></div>
        <!-- 标题 -->
        <div class="title">
          <div class="logo">
            <img src="@/assets/home/games/momoverse.png" />
          </div>
          <span>MOMOverse</span>
          <img class="icon" src="@/assets/home/describe.png" />
        </div>
        <p class="describe">Tomahawk <span>(Epic)</span></p>
        <!-- 底部 -->
        <div class="footer">
          <div class="icon">
            <img src="@/assets/coin-icon/mbox.png" />
          </div>
          <span>600.32</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="less" scoped>
@size: 160px;

.item {
  img {
    width: 100%;
    display: block;
  }

  ul {
    li {
      margin-right: 25px;
      display: inline-block;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.image {
  width: @size;
  height: @size;
  background: #535353;
  border-radius: 6px;
}

.title {
  margin-top: 3px;
  margin-bottom: 2px;
  position: relative;

  .logo {
    width: 38px;
    height: 38px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 3px solid #070707;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #070707;
  }

  span, img {
    vertical-align: middle;
  }

  span {
    padding-left: 43px;
    font-size: 13px;
    color: #969696;
    font-weight: bold;
    font-size: 12px;
  }

  .icon {
    display: inline-block;
    width: 12px;
    margin-left: 5px;
  }
}

.describe {
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 3px;
  font-weight: bold;

  span {
    color: #969696;
  }
}

.footer {
  .icon, span {
    display: inline-block;
    vertical-align: middle;
  }

  .icon {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 6px;
  }

  span {
    line-height: 1;
    font-size: 15px;
    font-weight: 900;
  }
}

@media (min-width: 1920px) {
  .item {
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
}

@media (max-width: 1920px) {
  .item {
    ul {
      white-space: nowrap;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

@media (min-width: 960px) {
  .item {
    margin-top: 80px;
  }
}

@media (max-width: 960px) {
  .item {
    margin-top: 40px;
  }
}
</style>
