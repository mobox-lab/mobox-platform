<template>
  <div class="wallet">
//     <div class="head">
//       <div class="title">
//         <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.8133 1.33326L15.5587 4.35726H20C21.0609 4.35726 22.0783 4.77869 22.8284 5.52883C23.5786 6.27898 24 7.29639 24 8.35726V9.69059C24.7072 9.69059 25.3855 9.97154 25.8856 10.4716C26.3857 10.9717 26.6667 11.65 26.6667 12.3573V17.6906C26.6667 18.0408 26.5977 18.3875 26.4637 18.7111C26.3297 19.0346 26.1332 19.3286 25.8856 19.5762C25.638 19.8238 25.344 20.0203 25.0205 20.1543C24.697 20.2883 24.3502 20.3573 24 20.3573V21.6906C24 22.7515 23.5786 23.7689 22.8284 24.519C22.0783 25.2692 21.0609 25.6906 20 25.6906H4C2.93913 25.6906 1.92172 25.2692 1.17157 24.519C0.421427 23.7689 0 22.7515 0 21.6906V8.35726C0 6.47726 1.296 4.90259 3.04267 4.47326L10.1707 0.35726C10.7831 0.00365382 11.511 -0.0921718 12.1941 0.0908625C12.8773 0.273897 13.4597 0.720799 13.8133 1.33326ZM20 7.02393H4C3.64638 7.02393 3.30724 7.1644 3.05719 7.41445C2.80714 7.6645 2.66667 8.00364 2.66667 8.35726V21.6906C2.66667 22.0442 2.80714 22.3834 3.05719 22.6334C3.30724 22.8835 3.64638 23.0239 4 23.0239H20C20.3536 23.0239 20.6928 22.8835 20.9428 22.6334C21.1929 22.3834 21.3333 22.0442 21.3333 21.6906L21.332 20.3573H14.6667C13.9662 20.3573 13.2727 20.2194 12.6256 19.9514C11.9784 19.6834 11.3905 19.2906 10.8952 18.7953C10.3999 18.3001 10.007 17.7121 9.73894 17.065C9.47089 16.4179 9.33292 15.7243 9.33292 15.0239C9.33292 14.3235 9.47089 13.63 9.73894 12.9829C10.007 12.3358 10.3999 11.7478 10.8952 11.2525C11.3905 10.7573 11.9784 10.3645 12.6256 10.0965C13.2727 9.82845 13.9662 9.69054 14.6667 9.69059H21.3333V8.35726C21.3333 8.00364 21.1929 7.6645 20.9428 7.41445C20.6928 7.1644 20.3536 7.02393 20 7.02393ZM24 12.3573H14.6667C13.9594 12.3573 13.2811 12.6382 12.781 13.1383C12.281 13.6384 12 14.3167 12 15.0239C12 15.7312 12.281 16.4094 12.781 16.9095C13.2811 17.4096 13.9594 17.6906 14.6667 17.6906H24V12.3573ZM14.6667 13.6906C14.8418 13.6906 15.0152 13.725 15.177 13.792C15.3388 13.859 15.4858 13.9572 15.6096 14.081C15.7334 14.2049 15.8317 14.3519 15.8987 14.5136C15.9657 14.6754 16.0002 14.8488 16.0002 15.0239C16.0002 15.199 15.9657 15.3724 15.8987 15.5342C15.8317 15.696 15.7334 15.843 15.6096 15.9668C15.4858 16.0906 15.3388 16.1888 15.177 16.2558C15.0152 16.3228 14.8418 16.3573 14.6667 16.3573C14.3131 16.3572 13.974 16.2167 13.724 15.9667C13.474 15.7166 13.3335 15.3775 13.3335 15.0239C13.3335 14.6703 13.474 14.3312 13.724 14.0812C13.974 13.8311 14.3131 13.6906 14.6667 13.6906ZM11.504 2.66659L8.576 4.35726H12.48L11.504 2.66659Z" fill="#1751F6"/>
        </svg>
        <span class="text">{{title}}</span>
        <!-- 标题自定义内容 -->
        <slot name="title-footer" />
      </div>
    </div>
    <!-- 列表 -->
    <ul class="coin-list">
      <li v-for="(item, index) in coins" :key="index" @click="click(item)">
        <div class="icon">
          <img :src="item.icon" />
        </div>
        <div class="name">{{item.name}}</div>
        <div class="balance">{{item.balance | amount-format}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      
      title: String,
      
      coins: Array,
    },
    methods: {
      click(item) {
        this.$emit('click', item);
      }
    },
  }
</script>

<style lang="less" scoped>
  .wallet {
    ul {
      list-style: none;
    }
  }

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    svg {
      width: 22px;
      display: inline-block;
    }

    .text {
      margin-left: 5px;
      font-family: Poppins-bold;
      font-weight: 700;
      text-align: LEFT;
      color: #1751f6;
      flex: 1;
    }
  }

  .coin-list {
    margin-top: 10px;

    li {
      background: #212327;
      border-radius: 10px;
      margin-top: 12px;
      padding: 14px 23px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        opacity: .5;
      }

      &:first-child {
        margin-top: 0;
      }
    }

    .icon {
      margin-right: 17px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    .name {
      flex: 1;
      text-align: left;
      font-size: 16px;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: #ffffff;
      line-height: 1;
    }

    .balance {
      font-size: 18px;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: #ffffff;
      line-height: 1;
    }
  }

  // pc
  @media (min-width: 960px) {
    .wallet {
      padding: 0 42px;
    }

    .title {
      & > span {
        font-size: 20px;
      }

      .title-footer span {
        font-size: 16px;
      }
    }

    .coin-list {
      li {
        height: 55px;
      }

      .icon {
        width: 32px;
        height: 32px;
      }
    }
  }

  // mobile
  @media (max-width: 960px) {
    .wallet {
      padding: 0 20px;
    }

    .title {
      span {
        font-size: 16px;
      }
    }

    .coin-list {
      li {
        height: 45px;
      }

      .icon {
        width: 28px;
        height: 28px;
      }
    }
  }
</style>
console.log('Debug: fix: fix broken links in the help center');
console.log('Debug: fix: resolve issue with friend list syncing');
