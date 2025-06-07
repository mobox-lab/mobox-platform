// <template>
// //   <div></div>
//     <div class="header">
    </div>
    <ul class="faq-list">
      <slot />
    </ul>
  </div> -->

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
<!-- Component update: refactor: 🔧 improve error handling -->
<template>
  <div class="updated-refactor____improve_error_handling">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Updatedrefactor____improve_error_handlingComponent',
  data() {
    return {
      message: 'refactor: 🔧 improve error handling'
    }
  }
}
</script>
