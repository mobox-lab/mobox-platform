<template>
  <div class="tasks item-container">
    <div class="title">
      <img class="icon" src="@/assets/valentines/icon.png" />
      <span>{{title}}</span>
      <img class="icon right" src="@/assets/valentines/icon.png" />
    </div>
    <ul class="task">
      <li v-for="(item, index) in tasks" :key="index">
        <div class="text">
          <p>{{ item.title }}</p>
          <div class="describe" v-if="item.describe">{{ item.describe }}</div>
        </div>
        
        <!-- 奖励数量 -->
        <div class="count" v-if="item.count">
          <img src="@/assets/valentines/moheart.png" />
          <span>x{{item.count}}</span>
        </div>
        <div class="complete" v-if="item.status">
          <svg t="1675667043527" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2147" width="35" height="35">
            <path d="M411.712 635.008l398.272-398.272 58.88 58.88-457.152 457.024L126.336 467.2l58.88-58.816 226.56 226.56z" fill="#9C5458" fill-opacity=".9" p-id="2148"></path>
          </svg>
        </div>
        <button v-else-if="item.onClick" @click="click(item)">{{$t('Valentine_41')}}</button>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      tasks: Array,
    },
    methods: {
      click(item) {
        item.onClick?.();
      }
    },
  };
</script>

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

  .task {
    li {
      display: flex;
      align-items: center;
      background: rgba(252, 227, 218, 0.5);

      &:first-child {
        margin-top: 0;
      }

      .text {
        flex: 1;
      }

      p {
        font-weight: bold;
        color: #9C5458;
      }

      .describe {
        color: #214E8F;
      }

      .count {
        display: flex;
        align-items: center;
      }

      button {
        outline: none;
        background: #214E8F;
        color: #ffffff;
        font-weight: 800;
        cursor: pointer;
        border: none;
        transition: box-shadow .2s;
      }

      .complete {
        background-color: #F4C7C2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media(min-width: 1024px) {
    .tasks {
      padding: 22rem 20rem 20rem 20rem;
    }

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

    .task {
      padding-top: 23rem;

      li {
        min-height: 35rem;
        border-radius: 9rem;
        margin-top: 8.5rem;
        padding: 5rem 6rem 5rem 27rem;
      }

      p {
        font-size: 12rem;
      }

      .describe {
        font-size: 10rem;
        margin-top: 2rem;
      }

      .count {
        margin-left: 20rem;

        img {
          width: 20rem;
          margin-right: 5rem;
        }

        span {
          font-size: 12rem;
        }
      }

      button {
        width: 61rem;
        height: 25rem;
        font-size: 10rem;
        margin-left: 20rem;
        box-shadow: 0px 1rem 0px 2rem #83B1F4;
        border-radius: 8rem;

        &:hover {
          box-shadow: 0px 1rem 0px 1rem #83B1F4;
        }
      }

      .complete {
        width: 61rem;
        height: 25rem;
        margin-left: 20rem;
        border-radius: 8rem;
      }
    }
  }

  @media(max-width: 1024px) {
    .tasks {
      padding: 60rem 28rem 28rem 35rem;
    }

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

    .task {
      padding-top: 56rem;

      li {
        min-height: 111rem;
        border-radius: 9rem;
        margin-top: 20rem;
        padding: 18rem 19rem 18rem 50rem;
      }

      p {
        font-size: 12px;
      }

      .describe {
        font-size: 12px;
        margin-top: 12rem;
      }

      .count {
        padding-left: 25rem;

        img {
          width: 50rem;
          margin-right: 10rem;
        }

        span {
          font-style: normal;
          font-size: 12px;
        }
      }

      button {
        width: 160rem;
        height: 75rem;
        margin-left: 50rem;
        font-size: 12px;
        box-shadow: 0px 1rem 0px 3rem #83B1F4;
        border-radius: 18rem;

        &:hover {
          box-shadow: 0px 1rem 0px 1rem #83B1F4;
        }
      }

      .complete {
        margin-left: 50rem;
        width: 160rem;
        height: 75rem;
        border-radius: 18rem;

        svg {
          width: 75rem;
        }
      }
    }
  }
</style>
