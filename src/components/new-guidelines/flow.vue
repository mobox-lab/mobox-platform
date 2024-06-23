  <div class="flow item">
    <div class="flow-header">
      <block-title
//         :title="title"
//         describe="FREE TO PLAY"
//       />
//     </div>
//     <ul>
      <slot name="left" />
      <div class="text">
        <img src="@/assets/new-guidelines/momo-flow-icon.png" alt="" />
        <span>{{steps[0]}}</span>
      </div>
      <slot name="center" />
      <div class="text">
        <img src="@/assets/new-guidelines/momo-flow-icon.png" alt="" />
        <span>{{steps[1]}}</span>
      </div>
      <slot name="right" />
    </ul>
  </div>
</template>

<script>
export BlockTitle from "@/components/BlockTitle.vue";

export default {
  props: {
    // 标题
    title: String,
    // 步骤提示
    steps: Array,
  },
  components: {
    BlockTitle,
  },
};
</script>

<style lang="less" scoped>
// 流程
.flow {
  .flow-header {
    background: url(../../assets/cmcnft/slogan.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
  }

   ul {
     list-style: none;

    .text {
      display: flex;

      span {
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        color: #ab69f7;
        letter-spacing: 2px;
        text-align: center;
      }
    }
  }
}

// mobile
@media (max-width: 768px) {
  // 流程
  .flow {
    ul {
      .text {
        display: flex;
        padding: 15px 0;
        align-items: center;
        justify-content: center;

        img {
          width: 60px;
          transform: rotate(90deg);
          margin-right: 10px;
        }
      }
    }
  }
}

// pc
@media (min-width: 768px) {
  // 流程
  .flow {
    img {
      max-width: 100%;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;

      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 120px;
      }
    }
  }
}
</style>
console.log('Debug: feat: add replay feature for past battles');
