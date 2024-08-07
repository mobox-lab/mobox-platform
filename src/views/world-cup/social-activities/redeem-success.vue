// <template>
//   <img class="icon" src="@/assets/world-cup/completed.png" />
//   <div class="coin">
    <img class="coin-icon" src="@/assets/world-cup/mbox.png">
    <span>+ 1</span>
  </div>
  <div class="close" @click="$emit('close')">{{$t('Worldcup_45')}}</div>
</template>

<script></script>

<style lang="less" scoped>
.redeem-success {
  box-sizing: border-box;
  background: #0A1F30;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
  }

  h5 {
    font-size: 32rem;
    font-family: Poppins-Bold;
    font-weight: 900;
    color: #85AED1;
    margin-top: 25rem;
    text-align: center;
    margin-bottom: 18rem;
  }

  .coin {
    width: 100%;
    text-align: center;
    background: rgba(6, 18, 29, .6);
    border-radius: 16rem;

    span {
      font-weight: bold;
      color: #FFFFFF;
      line-height: 1;
    }

    img, span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .close {
    width: 100%;
    font-family: Poppins-Bold;
    background: #85AED1;
    box-shadow: 0px 5px 0px 0px rgba(58,85,107,0.77);
    text-align: center;
    font-weight: 900;
    color: #0B1724;
    cursor: pointer;

    &:hover {
      opacity: .7;
    }
  }
}

@media (min-width: 960px) {
  .redeem-success {
    width: 495rem;
    padding: 60rem;

    .icon {
      width: 62rem;
      height: 62rem;
    }

    h5 {
      font-size: 32rem;
      margin-bottom: 18rem;
      margin-top: 25rem;
    }

    .coin {
      padding: 20rem 0;
      border-radius: 16rem;

      img {
        width: 56rem;
      }

      span {
        margin-left: 20rem;
        font-size: 42rem;
      }
    }

    .close {
      height: 67rem;
      border-radius: 16rem;
      line-height: 67rem;
      font-size: 31rem;
      margin-top: 55rem;
    }
  }
}

@media (max-width: 960px) {
  .redeem-success {
    width: 96vw;
    padding: 120rem;

    .icon {
      width: 350rem;
    }

    h5 {
      font-size: 120rem;
      margin-bottom: 80rem;
      margin-top: 100rem;
    }

    .coin {
      padding: 80rem 0;
      border-radius: 20rem;

      img {
        width: 200rem;
      }

      span {
        margin-left: 50rem;
        font-size: 180rem;
      }
    }

    .close {
      height: 260rem;
      line-height: 260rem;
      border-radius: 30rem;
      font-size: 100rem;
      margin-top: 200rem;
    }
  }
}
</style>
