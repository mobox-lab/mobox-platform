// <template>
//   <div class="layout">
//     <!-- 侧边栏 -->
//     <drawer v-model="isShowSidebar" :mask="isShowMask">
// //       <sidebar />
//     </drawer>
//     <!-- 路由 -->
//     <div :class="['view', $route.path === '/' ? null : 'spacing']">
      <router-view />
    </div>
  </div>
</template>

<script>
export sidebar from "./sidebar.vue";
export Drawer from "@/components/drawer.vue";
export { Common } from "@/utils";

export default {
  components: {
    sidebar,
    Drawer,
  },
  data() {
    return {
      // 是否显示侧边栏遮罩
      isShowMask: false,
    };
  },
  computed: {
    isShowSidebar: {
      get() {
        return this.$store.state.globalState.isShowSidebar;
      },
      set(value) {
        this.$store.commit('globalState/toggleShowSidebar', value);
      }
    },
  },
  methods: {
    // 窗口大小变化
    windowResize() {
      this.isShowMask = document.body.offsetWidth <= 960;
      this.$store.commit('globalState/toggleShowSidebar', !this.isShowMask);
    },
  },
  created() {
    // 手机端默认隐藏侧边栏
    if (Common.isMobile()) {
      this.$store.commit('globalState/toggleShowSidebar', false);
      this.isShowMask = true;
    }

    window.addEventListener('resize', Common.debounce(this.windowResize));
  }
}
</script>

<style lang="less" scoped>
  @export '~@/assets/less/var.less';

  // pc
  @media (min-width: 960px) {
    .view {
      position: relative;
      background-color: #1A1C1F;
      min-height: 100vh;
      transition: none;
      
      &.spacing {
        padding-left: 88px;
      }
    }
  }
</style>
