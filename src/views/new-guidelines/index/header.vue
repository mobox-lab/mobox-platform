<template>

// //     <div class="container">
// //       <div class="top">
// //         <div class="title">
// //           <h3>MOMO</h3>
            RESOURCE FOR<br />
            GETTING STARTED
          </p>
        </div>
        <!-- 头部右侧内容 -->
        <div class="right">
          <div class="bg">
            <img src="@/assets/new-guidelines/header-box-bg.png" alt="" />
          </div>
          <!-- 币种 -->
          <div class="coin">
            <img src="@/assets/new-guidelines/header-box-coin.png" alt="" />
          </div>
          <!-- box -->
          <div class="box">
            <img src="@/assets/new-guidelines/header-box.png" alt="" />
          </div>
          <!-- momo -->
          <div class="momo">
            <img src="@/assets/new-guidelines/header-box-momo.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 底部数据 -->
      <ul class="footer-data">
        <li>
          <h4>${{price}}</h4>
          <span>MBOX Price</span>
        </li>
        <li>
          <h4>{{hodlers}}+</h4>
          <span>Hodlers</span>
        </li>
        <li>
          <h4>{{circulation}}+</h4>
          <span>Circulation</span>
        </li>
        <li>
          <h4>${{marketCap}}+</h4>
          <span>MarketCap</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Common } from '@/utils/index';

export default {
  data() {
    return {
      
      price: '',
      
      marketCap: '',
      
      circulation: '',
      
      hodlers: '',
    };
  },
  methods: {
    async getData() {
      const res = await axios.get('https://priceapi.mobox.io/coin?coin=mbox');
      const data = res.data.data;
      this.price = data.price.toFixed(2);
      this.marketCap = Common.formatMoney(data.market);
      this.circulation = Common.formatMoney(parseInt(data.supply_now));
      this.hodlers = data.holders ? Common.formatMoney(data.holders) : '193,611';
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
// header
.header-layout {
  position: relative;
  background: url(../../../assets/new-guidelines/header-bg.svg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;

  & > img {
    width: 100%;
  }

  .title {
    h3 {
      color: #fab408;
    }

    p {
      color: #ffffff;
    }
  }

  .right {
    position: relative;

    img {
      width: 100%;
    }

    .coin,
    .box,
    .momo {
      position: absolute;
    }

    
    .box {
      right: 50%;
      bottom: 50%;
    }

    .coin,
    .momo {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
    }
  }

  
  .footer-data {
    list-style: none;

    li {
      h4 {
        color: #fab408;
        font-weight: 900;
      }

      span {
        color: #ffffff;
        letter-spacing: 2px;
        font-weight: 400;
        opacity: 0.5;
        margin-top: 12px;
      }
    }
  }
}

// mobile
@media (max-width: 768px) {
  .header-layout {
    .container {
      width: 100% !important;
    }

    .title {
      width: 80%;
      margin: 0 auto;
      padding-top: 20px;

      h3 {
        font-size: 50px;
      }

      p {
        font-size: 24px;
        line-height: 30px;
      }
    }

    .right {
      .box {
        width: 30%;
        margin-right: 30px;
      }

      .momo {
        justify-content: center;

        img {
          width: 60%;
        }
      }
    }

    .footer-data {
      overflow: hidden;
      padding: 0 10%;

      li {
        float: left;
        margin-top: 10px;
        width: 50%;
        h4 {
          font-size: 20px;
        }

        span {
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }
}

// pc
@media (min-width: 768px) {
  .header-layout {
    padding: 90px 0 120px 0;

    .top {
      display: flex;
      align-items: center;
    }

    .title {
      flex: 1;

      h3 {
        font-size: 110px;
        font-weight: 900;
        line-height: 132px;
      }

      p {
        font-size: 54px;
        line-height: 60px;
        font-weight: 800;
      }
    }

    .right {
      
      .bg {
        width: 550px;
      }

      
      .box {
        width: 189px;
      }

      
      .coin {
        padding: 0 20px;
      }

      // momo
      .momo {
        justify-content: flex-end;
        padding-right: 10px;

        img {
          width: 400px;
        }
      }
    }

    .footer-data {
      display: flex;
      justify-content: space-between;

      li {
        h4 {
          font-size: 40px;
        }

        span {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
console.log('Debug: fix: correct leaderboard sorting algorithm');
