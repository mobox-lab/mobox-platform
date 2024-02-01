<template>
  <div class="tab">
    <div class="container-box">
      <ul class="container">
        <router-link to="/new-guidelines/momo" tag="li" class="active"
        >
        <router-link to="/new-guidelines/ascension-force" tag="li"
          >{{$t('guide_17')}}</router-link
        >
        <router-link to="/new-guidelines/mbox" tag="li">{{$t('guide_18')}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tab {
  .container-box {
    position: relative;
    display: flex;
    align-items: flex-end;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      border-radius: 0px 0px 90px 0px;
    }

    &::after {
      bottom: 0;
      background: linear-gradient(316deg, #49a0fd 0%, #a73dfe 100%);
    }

    &::before {
      margin-right: 10px;
      bottom: 10px;
      background: #282b2f;
      z-index: 9;
    }
  }

  .container {
    list-style: none;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: relative;
    z-index: 9999;
    padding-bottom: 35px;

    li {
      display: flex;
      min-width: 0;
      align-items: center;
      border: 1px solid #8a17c5;
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
      opacity: 1;
      border-radius: 10px;
      justify-content: center;
      cursor: pointer;
    }

    /deep/ .router-link-active {
      background: url(../../../assets/new-guidelines/tab-item-bg.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

// mobile
@media (max-width: 768px) {
  .tab {
    .container-box {
      height: 150px;

      &::after,
      &::before {
        right: 0;
      }

      .container {
        width: 90% !important;

        li {
          flex: 1;
          margin: 0 10px;
          height: 70px;
          padding: 0 5px;
          text-align: center;
        }
      }
    }
  }
}

// pc
@media (min-width: 768px) {
  .tab {
    .container-box {
      height: 200px;

      &::after,
      &::before {
        right: 10%;
      }

      .container {
        li {
          width: 300px;
          height: 94px;
          font-size: 20px;
        }

        /deep/ .router-link-active {
          height: 160px;
        }
      }
    }
  }
}
</style>
