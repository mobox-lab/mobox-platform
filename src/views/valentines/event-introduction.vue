<template>
  <div class="event-introduction item-container">
    <div class="title">
      <img class="icon" src="@/assets/valentines/icon.png" />
      <span>{{$t('Valentine_39')}}</span>
      <img class="icon right" src="@/assets/valentines/icon.png" />
    </div>
    <p>{{$t('Valentine_40')}}</p>
    <a class="link" target="_blank" href="https://mbox.medium.com/mobox-trust-wallet-present-the-epic-love-story-of-trustie-and-victoria-3ba8f206ad">{{$t('Valentine_52')}}</a>
  </div>
</template>

<script></script>

<style lang="less" scoped>
  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    .right {
      transform: rotateY(180deg);
    }

    span {
      font-weight: bold;
      color: #214E8F;
    }
  }

  .link {
    display: block;
    text-align: center;
    margin: 0 auto;
    color: #214E8F !important;
    font-weight: bold;
    text-decoration: revert;
  }

  .event-introduction {
    position: relative;
    z-index: 1;

    p {
      font-weight: 400;
      color: #9C5458;
    }
  }

  @media(min-width: 1024px) {
    .title {
      .icon {
        width: 50rem;
      }

      span {
        font-size: 18rem;
        line-height: 27rem;
        margin: 0 10rem;
      }
    }

    .event-introduction {
      padding: 22rem 50rem 40rem 50rem;

      p {
        font-size: 12rem;
        line-height: 19rem;
        margin-top: 30rem;
      }
    }

    .link {
      padding-top: 10rem;
      font-size: 14rem;
    }
  }

  @media(max-width: 1024px) {
    .title {
      .icon {
        width: 110rem;
      }

      span {
        font-size: 46rem;
        line-height: 68rem;
        margin: 0 27rem;
      }
    }

    .event-introduction {
      padding: 60rem 50rem 40rem 50rem;

      p {
        font-size: 12px;
        margin-top: 66rem;
      }
    }

    .link {
      padding-top: 10rem;
      font-size: 14px;
    }
  }
</style>
