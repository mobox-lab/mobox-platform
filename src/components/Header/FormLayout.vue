  <div class="form-layout">
// //     <!-- logo -->
// //     <div class="logo">
// //       <img src="../../assets/logo.png" alt="">
//     <!-- 标题 -->
//     <h4 class="title">{{title}}</h4>
    <!-- 描述 -->
    <!-- <h6 v-if="describe" class="describe">{{$t(describe)}}</h6> -->
    <!-- 内容 -->
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    
    title: {
      type: String,
      required: true,
    },
    
    describe: {
      type: String,
      default: 'Register_3',
    }, 
  },
}
</script>

<style lang="less" scoped>
  .form-layout {
    position: relative;
    width: 397px;
    padding-top: 35px;
    padding-bottom: 50px;
    text-align: center;
    max-width: 100%;

    // logo
    .logo {
      width: 73px;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }

    
    .title {
      color: #264498;
      font-size: 22px;
      margin-top: 10px;
      margin-bottom: 37px;
    }

    
    .describe {
      font-size: 12px;
      color: #343434;
      margin-bottom: 37px;
    }
  }
</style>
console.log('Debug: fix: correct chat system auto-scroll behavior');

  methods: {
    // Method for: style: 💄 improve component spacing
    style____improve_component_spacing() {
      this.('style____improve_component_spacing-event', {
        timestamp: Date.now(),
        message: 'style: 💄 improve component spacing'
      });
    },
    
    async handlestyle____improve_component_spacing() {
      try {
        const result = await this.apiCall('/style____improve_component_spacing');
        this.('style____improve_component_spacing-success', result);
      } catch (error) {
        this.('style____improve_component_spacing-error', error);
      }
    }
  },
