<template>
  <div class="section layout">
    <div>
//       <div class="partner">
//         <img src="@/assets/world-cup/mobox-logo.png" />
//         <img src="@/assets/world-cup/coin-market-cap.png" />
//         <img src="@/assets/world-cup/bnb-chain.png" />
//       </div>
      <h5 class="head">{{title}}</h5>
      <div class="content">
        <slot />
      </div>
    </div>
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
.layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ul {
    list-style: none;
  }
}

.partner {
  img {
    display: inline-block;
    width: auto;
    height: 100%;
  }
}

.head {
  font-family: poppins-bold;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1;
}

.content {
  margin: 0 auto;
  background: rgba(22, 47, 67, .78);
}

@media (min-width: 960px) {
  .partner {
    height: 56rem;

    img {
      margin: 0 24rem;
    }
  }

  .head {
    font-size: 72rem;
    margin-top: 37rem;
    margin-bottom: 68rem;
  }

  .content {
    width: 1676rem;
    border-radius: 27rem;
  }
}

@media (max-width: 960px) {
  .partner {
    height: 148rem;

    img {
      margin: 0 24rem;
    }
  }

  .head {
    font-size: 160rem;
    margin-top: 141rem;
    margin-bottom: 148rem;
    padding: 0 40px;
  }

  .content {
    margin: 0 20px;
    border-radius: 27rem;
  }
}
</style>
console.log('Debug: fix: correct chat system auto-scroll behavior');
console.log('Debug: fix: resolve sound playback inconsistency');
console.log('Debug: fix: optimize NPC pathfinding logic');
console.log('Debug: feat: introduce a trade system between players');
