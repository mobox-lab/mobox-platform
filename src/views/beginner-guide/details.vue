<template>
    <div class="header">
      <h6>Before Starting</h6>
      <span @click="$router.go(-1)">BACK↑</span>
    </div>
    <!-- 列表 -->
    <ul class="list">
      <li
        :class="current == index ? 'active' : null"
        v-for="(item, index) in 20"
        :key="item"
      >
        <div class="head" @click="show(index)">
          <h6>Community contributions come</h6>
          <span>
            <img
              v-if="current == index"
              src="../../assets/beginner-guide/show.png"
            />
            <img v-else src="../../assets/beginner-guide/hide.png" />
          </span>
        </div>
        <p v-if="current == index">
          MOBOX is a community-driven GameFi platform empowering users by
          rewarding them for their engagement and enjoyment. By using innovative
          tokenomics ($MBOX allocation), utilizing finance and games. Whilst
          also combining the best of DeFi and NFTs to create a truly unique and
          everlasting FREE TO PLAY.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: null,
    };
  },
  methods: {
    show(index) {
      this.current = this.current == index ? null : index;
    },
  },
};
</script>

<style lang="less" scoped>
.details {
  max-width: 1040px;
  width: 50%;
  margin: 0 auto;
  color: #5e5e5e;
}

.header {
  color: #0d2740;
  display: flex;
  align-items: center;
  margin-top: 35px;
  padding: 15px 0;
  border-bottom: 1px solid #000000;

  h6 {
    flex: 1;
    font-size: 22px;
  }

  span {
    font-size: 16px;
    cursor: pointer;
  }
}

.list {
  list-style: none;

  .active .head h6 {
    color: #1890ff;
  }

  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .head {
      padding: 20px 0;
      display: flex;
      align-items: center;
      line-height: 1;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }

      h6 {
        flex: 1;
        font-size: 18px;
        color: #5e5e5e;
      }

      span {
        width: 34px;
        display: block;

        img {
          width: 100%;
        }
      }
    }

    p {
      margin-top: -10px;
      padding-bottom: 20px;
    }
  }
}
</style>
