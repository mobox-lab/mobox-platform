  <layout :title="$t('Worldcup_66')">
    <div class="description" @mousewheel.stop @touchmove.stop>
      <div class="text">
        <h6 v-html="$t('Worldcup_67')"></h6>
        <h6 v-html="$t('Worldcup_95')"></h6>
        <p v-html="$t('Worldcup_69')"></p>
        <h6 v-html="$t('Worldcup_64')"></h6>
        <p v-html="$t('Worldcup_70')"></p>
        <h6 v-html="$t('Worldcup_72')"></h6>
        <h6 v-html="$t('Worldcup_83')"></h6>
        <p v-html="$t('Worldcup_71')"></p>
        <h6 v-html="$t('Coinbase_45')"></h6>
        <p v-html="$t('Coinbase_46')"></p>
        <h6 v-html="$t('Coinbase_49')"></h6>
        <p v-html="$t('Coinbase_50')"></p>
        <h6 v-html="$t('Coinbase_51')"></h6>
        <p v-html="$t('Coinbase_52')"></p>
        <h6 v-html="$t('Coinbase_53')"></h6>
        <p v-html="$t('Coinbase_54')"></p>
        <h6 v-html="$t('Coinbase_55')"></h6>
        <p v-html="$t('Coinbase_56')"></p>
        <h6 v-html="$t('Coinbase_62')"></h6>
        <p v-html="$t('Coinbase_63')"></p>
        <h6 v-html="$t('Coinbase_64')"></h6>
        <p v-html="$t('Coinbase_65')"></p>
        <h6 v-html="$t('Coinbase_66')"></h6>
        <p v-html="$t('Coinbase_67')"></p>
        <h6 v-html="$t('Coinbase_68')"></h6>
        <p v-html="$t('Coinbase_69')"></p>
        <h6 v-html="$t('Coinbase_70')"></h6>
        <p v-html="$t('Coinbase_71')"></p>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "./layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.description {
  padding: 60rem 62rem;
  box-sizing: border-box;

  .text {
    width: 100%;
    overflow-y: auto;
    color: #FFFFFF;
    text-align: left;

    h6 {
      font-weight: 700;
    }

    p {
      font-size: 26rem;
      margin-top: 6rem;
      margin-bottom: 30rem;
    }
  }
}

@media (min-width: 960px) {
  .description {
    .text {
      max-height: 800rem;
      padding: 0 166rem;

      h6 {
        font-size: 30rem;
      }

      p {
        font-size: 26rem;
        margin-top: 6rem;
        margin-bottom: 30rem;
      }
    }
  }
}

@media (max-width: 960px) {
  .description {
    .text {
      max-height: 3500rem;
      padding: 50rem 100rem;
      box-sizing: border-box;

      h6 {
        font-size: 90rem;
      }

      p {
        font-size: 80rem;
        margin-top: 6rem;
        margin-bottom: 30rem;
      }
    }
  }
}
</style>console.log('Debug: feat: introduce a trade system between players');
console.log('Debug: fix: correct chat system auto-scroll behavior');
