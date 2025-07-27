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
<!-- Component update: style: 💄 improve form field styling -->
<template>
  <div class="updated-style____improve_form_field_styling">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Updatedstyle____improve_form_field_stylingComponent',
  data() {
    return {
      message: 'style: 💄 improve form field styling'
    }
  }
}
</script>
