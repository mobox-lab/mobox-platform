<template>
  <div></div>
  <!-- <div class="faq container">
    <div class="header">
    </div>
    <ul class="faq-list">
      <slot />
    </ul>
  </div> -->
</template>

<script>
// export BlockTitle from "@/components/BlockTitle.vue";

export default {
  // components: {
  //   BlockTitle,
  // },
};
</script>

<style lang="less" scoped>
.faq {
  padding-top: 120px;

  .header {
    background: url(../../assets/cmcnft/slogan.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
  }

  .faq-list {
    list-style: none;
  }
}

/deep/ .header {
  padding: 0 !exportant;
}

// pc
@media (min-width: 768px) {
  .faq {
    .header {
      margin-bottom: 50px;
    }
  }
}
</style>
