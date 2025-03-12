// // <template>
// // //   <div class="user-agreement">
// // // // //     <div class="icon" @click="toggle">
// // // // // //       <i v-if="value" class="iconfont">&#xe62a;</i>
// // // //       <i v-else class="iconfont">&#xe627;</i>
// //     </div>
    <span @click="$emit('click')">{{$t('Register_9')}}</span>
  </div>
</template>

<script>
export default {
  props: {
    
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  },
}
</script>

<style lang="less" scoped>
  .user-agreement {
    height: 16px;
    color: #343434;
    line-height: 16px;
    font-size: 12px;
    margin-bottom: 27px;

    .icon {
      display: inline-block;
    }

    .icon,
    span {
      vertical-align: middle;
    }

    i,
    .agreement {
      // color: #FC9B65;
      cursor: pointer;
    }

    i {
      margin-right: 8px;
    }
  }
</style>