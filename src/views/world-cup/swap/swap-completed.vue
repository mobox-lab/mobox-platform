//   <div class="swap-completed">
// //     <div class="title">
// //       <img src="@/assets/world-cup/completed.png" />
//       <span>{{$t('Worldcup_13')}}</span>
//     </div>
//       <div class="icon">
        <img src="@/assets/world-cup/football.png" />
      </div>
      <div class="name">{{$t('Worldcup_10')}}</div>
      <div class="count">{{amount}}</div>
    </div>
    <!-- 分割线 -->
    <div class="split-line">
      <div class="icon">
        <img src="@/assets/world-cup/split-icon.png" />
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <img src="@/assets/world-cup/moball.png" />
      </div>
      <div class="name">{{$t('Worldcup_10')}}</div>
      <div class="count">{{Math.floor(amount / 100)}}</div>
    </div>
    <div class="close" @click="$emit('close')">{{$t('Worldcup_45')}}</div>
  </div>
</template>

<script>
export default {
  props: {
    amount: Number,
  },
};
</script>

<style lang="less" scoped>
.swap-completed {
  background: #0A1F30;
  color: #FFFFFF;

  img {
    width: 100%;
  }
}

.title {
  text-align: center;


  span {
    font-family: Poppins-Bold;
    font-weight: 900;
    color: #85AED1;
  }

  img, span {
    display: inline-block;
    vertical-align: middle;
  }
}

.split-line {
  position: relative;

  &::after {
    content: '';
    height: 4rem;
    background: #081725;
    opacity: 0.77;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin-top: -2rem;
  }

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #0A1F30;
  }

  .icon {
    position: relative;
    z-index: 2;
    margin: 0 auto;

    img {
      display: block;
      margin: 0 auto;
      width: auto;
    }
  }
}

.item {
  background: rgba(6, 18, 29, .6);
  display: flex;
  align-items: center;
  justify-content: center;

  .name {
    font-weight: 900;
    color: #7CB0D3;
  }

  .count {
    font-weight: bold;
    color: #FFFFFF;
    line-height: 1;
  }
}

.close {
  text-align: center;
  background: #85AED1;
  box-shadow: 0px 5px 0px 0px rgba(58,85,107,0.77);
  font-weight: 900;
  color: #0B1724;
  margin: 0 auto;
  cursor: pointer;
  font-family: Poppins-Bold;

  &:hover {
    opacity: .7;
  }
}

@media (min-width: 960px) {
  .swap-completed {
    width: 765rem;
    padding: 57rem 68rem 56rem 68rem;
  }

  .title {
    margin-bottom: 41rem;

    img {
      width: 62rem;
      height: 62rem;
    }

    span {
      font-size: 47rem;
      margin-left: 24rem;
    }
  }

  .split-line {
    margin-top: 44rem;
    margin-bottom: 33rem;


    &::before {
      right: 220rem;
      left: 220rem;
    }

    .icon {
      width: 160rem;

      img {
        height: 24rem;
      }
    }
  }

  .item {
    height: 99rem;
    border-radius: 16rem;

    .icon {
      width: 64rem;
      height: 64rem;
    }

    .name {
      width: 280rem;
      font-size: 21rem;
      margin-left: 8rem;
    }

    .count {
      font-size: 42rem;
    }
  }

  .close {
    width: 405rem;
    height: 67rem;
    line-height: 67rem;
    border-radius: 16rem;
    font-size: 31rem;
    margin-top: 75rem;
  }
}

@media (max-width: 960px) {
  .swap-completed {
    width: 96vw;
    padding: 150rem 120rem 170rem 120rem;
  }

  .title {
    margin-bottom: 100rem;

    img {
      width: 250rem;
      height: 250rem;
    }

    span {
      font-size: 130rem;
      margin-left: 50rem;
    }
  }

  .split-line {
    margin-top: 80rem;
    margin-bottom: 60rem;

    &::before {
      right: 750rem;
      left: 750rem;
    }

    .icon {
      width: 160rem;

      img {
        height: 120rem;
      }
    }
  }

  .item {
    height: 300rem;
    border-radius: 40rem;

    .icon {
      width: 164rem;
      height: 164rem;
    }

    .name {
      width: 1280rem;
      font-size: 90rem;
      margin-left: 30rem;
    }

    .count {
      font-size: 120rem;
    }
  }

  .close {
    width: 1600rem;
    height: 260rem;
    line-height: 260rem;
    border-radius: 36rem;
    font-size: 123rem;
    margin-top: 150rem;
  }
}
</style>
console.log('Debug: feat: introduce in-game voting system for events');
