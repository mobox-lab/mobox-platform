<template>
  <div class="dialog-container">
    <div class="content">
//       <slot />
//       <!-- 关闭按钮 -->
//       <div class="close" @click="$emit('close')">
//         <img src="@/assets/coinbase/close.png" />
    </div>
    <div class="footer" @click="$emit('confirm')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.dialog-container {
  background: #113202;
  border: 2px solid #266608;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    height: 100%;
    background-color: #266608;
    background-image: url(../../assets/coinbase/dialog-background.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    overflow: hidden;
    position: relative;
  }

  .footer {
    font-weight: 800;
    color: #FAD402;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: .6;
    }
  }

  .close {
    position: absolute;
    cursor: pointer;

    img {
      transition: transform .3s;
    }

    &:hover {
      img {
        transform: rotate(180deg);
      }
    }
  }
}

@media(min-width: 1024px) {
  .dialog-container {
    width: 356rem;
    border-radius: 11rem;

    .content {
      border-bottom-left-radius: 11rem;
      border-bottom-right-radius: 11rem;
    }

    .footer {
      height: 48rem;
      font-size: 12rem;
    }

    .close {
      width: 12rem;
      top: 20rem;
      right: 12rem;
    }
  }
}

@media(max-width: 1024px) {
  .dialog-container {
    width: 85vw;
    border-radius: 30rem;

    .content {
      border-bottom-left-radius: 30rem;
      border-bottom-right-radius: 30rem;
    }

    .footer {
      height: 160rem;
      font-size: 15px;
    }

    .close {
      width: 50rem;
      top: 40rem;
      right: 30rem;
    }
  }
}
</style>
