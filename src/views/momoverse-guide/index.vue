<template>
  <div class="momoverse-guide">
    <div class="index">
      <div class="logo">
        <img src="@/assets/momoverse/logo.png" />
      </div>
      <h6>MOMOverse</h6>
      <p>Collect, Combine, Build</p>
      <ul class="button">
        <li @click="openMomoverse">
          <img src="@/assets/momoverse-guide/game.png" />
          <span>Explore Game</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/', 'https://mobox.gitbook.io/momoverse/')">
          <img src="@/assets/momoverse-guide/manual.png" />
          <span>{{$t('tutorial_1')}}</span>
        </li>
      </ul>
      <div class="footer" />
    </div>
    <div class="mo-home">
      <div class="container">
        <div class="logo">
          <img src="@/assets/momoverse-guide/image-7.png" />
        </div>
        <div class="title">
          <span>MOMOverse</span>
          <span> MOHome Launch</span>
        </div>
        <div class="division">
          <img src="@/assets/momoverse-guide/image-8.png" />
        </div>
        <ul>
          <li @click="openLink('https://mobox.gitbook.io/momoversezh/jia-yuan-pian/jia-yuan-jian-zhu', 'https://mobox.gitbook.io/momoverse/mohome/mohome-buildings')">
            <div class="background">
              <img src="@/assets/momoverse-guide/image-12.png" />
            </div>
            <div class="content">
              <span>{{$t('tutorial_2')}}</span>
              <img class="image" src="@/assets/momoverse-guide/image-11.png" />
              <img class="icon" src="@/assets/momoverse-guide/image-13.png" />
            </div>
          </li>
          <li @click="openLink('https://mobox.gitbook.io/momoversezh/jia-yuan-pian/guo-yuan/zhong-zhi-guo-shi-zhong-cai', 'https://mobox.gitbook.io/momoverse/mohome/orchard')">
            <div class="background">
              <img src="@/assets/momoverse-guide/image-12.png" />
            </div>
            <div class="content">
              <span>{{$t('tutorial_3')}}</span>
              <img class="image" src="@/assets/momoverse-guide/image-9.png" />
              <img class="icon" src="@/assets/momoverse-guide/image-14.png" />
            </div>
          </li>
          <li @click="openLink('https://mobox.gitbook.io/momoversezh/jia-yuan-pian/guo-yuan/lve-duo-guo-shi-tou-cai', 'https://mobox.gitbook.io/momoverse/mohome/orchard/lve-duo-guo-shi-tou-cai')">
            <div class="background">
              <img class="image" src="@/assets/momoverse-guide/image-12.png" />
            </div>
            <div class="content">
              <span>{{$t('tutorial_4')}}</span>
              <img class="image" src="@/assets/momoverse-guide/image-10.png" />
              <img class="icon" src="@/assets/momoverse-guide/image-15.png" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="spacecraft">
      <div class="airship" ref="airship"></div>
      <div class="info">
        <h6>
          <span>{{$t('tutorial_5')}}</span><br />{{$t('tutorial_6')}}
        </h6>
        <p>{{$t('tutorial_7')}}</p>
        <ul>
          <li>
            <img src="@/assets/momoverse-guide/check.png" />
            <span>{{$t('tutorial_8')}}</span>
          </li>
          <li>
            <img src="@/assets/momoverse-guide/check.png" />
            <span>{{$t('tutorial_9')}}</span>
          </li>
          <li>
            <img src="@/assets/momoverse-guide/check.png" />
            <span>{{$t('tutorial_10')}}</span>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="icon" ref="collection">
          <div class="img">
            <img src="@/assets/momoverse-guide/image-29.png" />
          </div>
          <div class="amount">x593</div>
        </div>
        <p>{{$t('tutorial_11')}}<br />{{$t('tutorial_12')}}</p>
        <img class="footer-image" src="@/assets/momoverse-guide/image-17.png" />
      </div>
    </div>
    <div class="introduction core">
      <h6>{{$t('tutorial_13')}}</h6>
      <img class="icon" src="@/assets/momoverse-guide/image-8.png" />
      <ul>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/zi-yuan-pian/huo-de-zi-yuan', 'https://mobox.gitbook.io/momoverse/Resource/resource-mining')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-18.png" />
          </div>
          <span>{{$t('tutorial_14')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/da-zao-pian/he-cheng-cai-liao', 'https://mobox.gitbook.io/momoverse/craft/material-crafting')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-19.png" />
          </div>
          <span>{{$t('tutorial_15')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/zi-yuan-pian/shi-chang-jiao-yi', 'https://mobox.gitbook.io/momoverse/Resource/maketplace')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-20.png" />
          </div>
          <span>{{$t('tutorial_16')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/jia-yuan-pian/jia-yuan-jian-zhu', 'https://mobox.gitbook.io/momoverse/mohome/mohome-buildings')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-21.png" />
          </div>
          <span>{{$t('tutorial_17')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/jia-yuan-pian/guo-yuan/zhong-zhi-guo-shi-zhong-cai', 'https://mobox.gitbook.io/momoverse/mohome/orchard/zhong-zhi-guo-shi-zhong-cai')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-22.png" />
          </div>
          <span>{{$t('tutorial_18')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/jia-yuan-pian/guo-yuan/xing-ji-mao-yi-shou-cai', 'https://mobox.gitbook.io/momoverse/mohome/orchard/d.s.c-trading')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-23.png" />
          </div>
          <span>{{$t('tutorial_19')}}</span>
        </li>
      </ul>
    </div>
    <div class="introduction games">
      <h6>{{$t('tutorial_20')}}</h6>
      <img class="icon" src="@/assets/momoverse-guide/image-8.png" />
      <ul>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/xiao-you-xi-pian/zhua-momo', 'https://mobox.gitbook.io/momoverse/minigames/momo-boxing')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-24.png" />
          </div>
          <span>{{$t('tutorial_21')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/xiao-you-xi-pian/huang-ye-qiu-sheng', 'https://mobox.gitbook.io/momoverse/minigames/survivor')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-25.png" />
          </div>
          <span>{{$t('tutorial_22')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/xiao-you-xi-pian/cang-bao-tu', 'https://mobox.gitbook.io/momoverse/minigames/treasure-map')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-26.png" />
          </div>
          <span>{{$t('tutorial_23')}}</span>
        </li>
        <li @click="openLink('https://mobox.gitbook.io/momoversezh/xiao-you-xi-pian/cai-ji', 'https://mobox.gitbook.io/momoverse/minigames/collecting')">
          <div class="image">
            <img src="@/assets/momoverse-guide/image-27.png" />
          </div>
          <span>{{$t('tutorial_24')}}</span>
        </li>
        <li>
          <div class="image">
            <img src="@/assets/momoverse-guide/image-28.png" />
          </div>
          <span>Coming Soon</span>
        </li>
        <li>
          <div class="image">
            <img src="@/assets/momoverse-guide/image-28.png" />
          </div>
          <span>Coming Soon</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/utils/index";
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";

export default {
  data() {
    return {
      airship: null,
      collection: null
    };
  },
  methods: {
    openMomoverse() {
      EventBus.$emit('open-game', 'momoverse');
    },
    setSize() {
      const screenWidth = document.documentElement.clientWidth;
      const fontSize = screenWidth / 1280;
      document.documentElement.style.fontSize = `${fontSize}px`;

      if (this.airship) {
        this.$nextTick(() => {
          const $airship = this.$refs.airship;
          this.airship.stage.width = $airship.clientWidth;
          this.airship.stage.height = $airship.clientHeight;
          this.airship.renderer.resize($airship.clientWidth, $airship.clientHeight);
        });
      }
    },
    openLink(zh, en) {
      window.open(this.$i18n.locale.indexOf('zh') === 0 ? zh : en);
    },
    airshipAnimation() {
      const $airship = this.$refs.airship;
      const app = this.airship = new PIXI.Application({
        width: $airship.clientWidth,
        height: $airship.clientHeight,
        transparent: true,
      });

      $airship.appendChild(app.view);

      app.loader
        .add("spine", "./spine/airship/fc1.json")
        .load((loader, resources) => {
          const spine = new Spine(resources.spine.spineData);
          spine.width = $airship.clientWidth;
          spine.height = $airship.clientHeight;
          app.stage.addChild(spine);
          spine.position.set($airship.clientWidth / 1.5, $airship.clientHeight / 1.7);
          spine.state.addAnimation(0, 'animation', true);
          app.start();
        });
    },
    collectionAnimation() {
      const $collection = this.$refs.collection;
      const app = this.collection = new PIXI.Application({
        width: $collection.clientWidth,
        height: $collection.clientHeight,
        transparent: true,
      });

      $collection.appendChild(app.view);

      app.loader
        .add("spine", "./spine/collection/caijihuode.json")
        .load((loader, resources) => {
          const spine = new Spine(resources.spine.spineData);
          spine.width = $collection.clientWidth * 0.9;
          spine.height = $collection.clientHeight * 0.9;
          app.stage.addChild(spine);
          spine.position.set($collection.clientWidth / 1.9, $collection.clientHeight / 1.8);
          spine.state.addAnimation(0, 'cheng', true);
          app.start();
        });
    },
  },
  created() {
    window.addEventListener('resize', this.setSize);
    this.setSize();
  },
  mounted() {
    this.airshipAnimation();
    this.collectionAnimation();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setSize);
  }
};
</script>

<style lang="less" scoped>
.momoverse-guide {
  background: #101114;

  img, ul, li {
    display: block;
  }

  img {
    max-width: 100%;
  }

  * {
    transition: none;
  }
}

.index {
  position: relative;
  background: url(../../assets/momoverse-guide/image-1.jpg) no-repeat;
  background-size: cover;
  background-position: center;

  .logo {
    position: absolute;
  }

  h6 {
    line-height: 1.5;
    font-weight: 900;
    color: #FFFFFF;
    text-shadow: 0px 2px 0px rgba(16,17,20,0.72);
  }

  p {
    font-weight: 400;
    color: #FFFFFF;
    line-height: 1.5;
    text-shadow: 0px 2px 0px rgba(16,17,20,0.72);
  }

  .button {
    display: flex;
    align-items: center;

    li {
      background: #1751F6;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      span {
        color: #FFFFFF;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: 96rem;
    background: url(../../assets/momoverse-guide/image-3.png) no-repeat;
    background-size: cover;
    transform: translateY(50%);
  }
}

.mo-home {
  background: url(../../assets/momoverse-guide/image-2.jpg) no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    span {
      font-weight: 900;
      text-shadow: 0px 2px 0px rgba(16,17,20,0.72);

      &:first-child {
        color: #FBD515;
      }

      &:last-child {
        color: #ffffff;
      }
    }
  }

  ul {
    display: flex;
  }

  li {
    position: relative;
    cursor: pointer;
  }

  li:hover {
    .content {
      span {
        color: #ffffff;
      }
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      display: block;
      text-align: center;
      font-weight: 900;
      color: #89A9EE;
      line-height: 1;
      text-shadow: 0px 1px 0px rgba(20,26,68,0.72);
    }
  }
}

.spacecraft {
  background: url(../../assets/momoverse-guide/image-5.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  .info {
    h6 {
      font-weight: 900;
      color: #ffffff;
      text-shadow: 0px 2px 0px rgba(16,17,20,0.72);

      span {
        color: #FBD515;
      }
    }

    p {
      font-weight: 400;
      color: #FFFFFF;
      text-shadow: 0px 2px 0px rgba(23,25,28,0.72);
    }

    ul {
      li {
        display: flex;
        align-items: center;
      }

      span {
        font-weight: 400;
        color: #FFFFFF;
        text-shadow: 0px 2px 0px rgba(23,25,28,0.72);
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 80px;
      height: 80px;
      position: relative;

      .img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0 20px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
      }

      .amount {
        position: absolute;
        left: 0;
        bottom: 2px;
        right: 0;
        font-size: 18px;
        color: #e8c93f;
        text-align: center;
        font-weight: 900;
        text-shadow: #494060 0px 2px 0px;
        // -webkit-text-stroke: 1px rgb(96, 115, 255);
      }
    }

    p {
      font-weight: 400;
      color: #FFFFFF;
      text-shadow: 0px 2px 0px rgba(23,25,28,0.72);
    }
  }
}

.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    font-weight: 900;
    color: #FBD515;
    text-shadow: 0px 2px 0px rgba(40,45,49,0.72);
  
    span {
      color: #ffffff;
    }
  }

  .image {
    overflow: hidden;
    border-radius: 13rem;

    img {
      transition: transform .3s;
    }
  }

  ul {
    display: grid;

    li {
      transition: background-color .3s;
      background-color: #282D31;
      cursor: pointer;

      span {
        font-weight: 900;
        color: #6A7589;
        display: block;
        text-align: center;
        text-shadow: 0px 1px 0px rgba(16,17,20,0.72);
        transition: color .3s;
      }

      &:hover {
        background-color: #1E2235;

        .image img {
          transform: scale(1.2);
        }

        span {
          color: #ffffff;
        }
      }
    }
  }
}

.core {
  padding-top: 82rem;
  padding-bottom: 86rem;
}

.games {
  padding-top: 152rem;
  padding-bottom: 150rem;
  background: url(../../assets/momoverse-guide/image-6.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

@media(min-width: 960px) {
  .index {
    padding: 397rem 80rem 0 80rem;

    .logo {
      top: 42rem;
      left: 74rem;
      width: 137rem;
    }

    h6 {
      font-size: 36rem;
    }

    p {
      font-size: 18rem;
    }

    .button {
      padding-top: 53rem;
      padding-bottom: 100rem;

      li {
        height: 34rem;
        padding: 0 24rem;
        border-radius: 8rem;

        &:last-child {
          margin-left: 9rem;
        }

        img {
          height: 15rem;
          margin-right: 9rem;
        }

        span {
          font-size: 12rem;
        }
      }
    }
  }

  .mo-home {
    margin-bottom: 180rem;

    .container {
      top: 100rem;
    }

    .logo {
      width: 129rem;
    }

    .title {
      margin-top: 71rem;

      span {
        font-size: 36rem;
      }
    }

    .division {
      width: 263rem;
      margin-top: 38rem;
      margin-bottom: 21rem;
    }

    li {
      width: 214rem;
      margin: 0 14rem;
    }

    .content {
      span {
        font-size: 20rem;
        margin-top: 28rem;
        margin-bottom: 11rem;
      }

      .image {
        width: 173rem;
        margin-right: 10rem;
      }

      .icon {
        width: 35rem;
        margin-top: 14rem;
      }
    }
  }

  .spacecraft {
    padding-top: 74rem;
    padding-bottom: 46rem;

    .airship {
      width: 419rem;
      height: 263rem;
      position: absolute;
      top: 8rem;
      left: 58rem;
    }

    .info {
      padding-left: 500rem;
      margin-bottom: 25rem;

      h6 {
        font-size: 28rem;
      }

      p {
        font-size: 18rem;
        margin-top: 14rem;
        margin-bottom: 12rem;
      }

      ul {
        img {
          width: 30rem;
          margin-right: 8rem;
        }

        span {
          font-size: 15rem;
        }
      }
    }

    .footer {
      .icon {
        margin-right: 12rem;
      }

      p {
        font-size: 18rem;
      }

      .footer-image {
        width: 284rem;
        margin-left: 35rem;
      }
    }
  }

  .introduction {
    h6 {
      font-size: 36rem;
    }

    .icon {
      width: 262.5rem;
      margin-top: 21rem;
    }

    ul {
      grid-template-columns: 244rem 244rem 244rem;
      column-gap: 30rem;

      li {
        border-radius: 13rem;
        padding: 9rem 12rem 0 12rem;
        margin-top: 30rem;

        span {
          font-size: 15rem;
          padding-top: 23rem;
          padding-bottom: 15rem;
        }
      }
    }
  }
}

@media(max-width: 960px) {
  .momoverse-guide {
    padding-top: 57px;
  }

  .index {
    padding: 420rem 120rem 0 120rem;

    .logo {
      top: 120rem;
      left: 120rem;
      width: 250rem;
    }

    h6 {
      font-size: 80rem;
    }

    p {
      font-size: 48rem;
    }

    .button {
      padding-top: 60rem;
      padding-bottom: 150rem;

      li {
        height: 100rem;
        padding: 0 40rem;
        border-radius: 15rem;

        &:last-child {
          margin-left: 25rem;
        }

        img {
          height: 40rem;
          margin-right: 25rem;
        }

        span {
          font-size: 12px;
        }
      }
    }
  }

  .mo-home {
    margin-bottom: 250rem;

    .container {
      top: 150rem;
    }

    .logo {
      width: 250rem;
    }

    .title {
      margin-top: 100rem;

      span {
        font-size: 60rem;
      }
    }

    .division {
      width: 600rem;
      margin-top: 50rem;
      margin-bottom: 40rem;
    }

    li {
      width: 350rem;
      margin: 0 14rem;
    }

    .content {
      span {
        font-size: 40rem;
        margin-top: 55rem;
        margin-bottom: 11rem;
      }

      .image {
        width: 260rem;
        margin-right: 20rem;
      }

      .icon {
        width: 70rem;
        margin-top: 20rem;
      }
    }
  }

  .spacecraft {
    padding-top: 200rem;
    padding-bottom: 180rem;

    .airship {
      width: 1000rem;
      height: 628rem;
      margin: 0  auto;
    }

    .info {
      margin-top: 100rem;
      margin-bottom: 90rem;
      padding: 0 120rem;

      h6 {
        font-size: 45rem;
      }

      p {
        font-size: 30rem;
        margin-top: 22rem;
        margin-bottom: 20rem;
      }

      ul {
        img {
          width: 65rem;
          margin-right: 20rem;
        }

        span {
          font-size: 45rem;
        }
      }
    }

    .footer {
      flex-direction: column;

      .icon {
        margin-bottom: 30rem;
      }

      p {
        font-size: 40rem;
      }

      .footer-image {
        width: 450rem;
        margin-top: 40rem;
      }
    }
  }

  .introduction {
    h6 {
      font-size: 70rem;

      span {
        font-size: 70rem;
      }
    }

    .icon {
      width: 600rem;
      margin-top: 50rem;
    }

    ul {
      grid-template-columns: 530rem 530rem;
      column-gap: 60rem;

      li {
        border-radius: 20rem;
        padding: 20rem 20rem 0 20rem;
        margin-top: 50rem;

        span {
          font-size: 12px;
          padding-top: 30rem;
          padding-bottom: 25rem;
        }
      }
    }
  }
}
</style>
console.log('Debug: feat: introduce night mode in battle maps');
