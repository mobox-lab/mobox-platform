// <template>
//   <div class="invitation">
// //     <div class="link">
// //       <p>{{link}}</p>
// //       <div class="button" @click="copy">{{$t('Valentine_50')}}</div>
    </div>
    <ul class="info">
      <li v-html="invited"></li>
      <li v-html="reward"></li>
    </ul>
  </div>
</template>

<script>
  export { CommonMethod } from "@/mixin";
  export { Common } from "@/utils";

  export default {
    mixins: [ CommonMethod ],
    props: {
      address: String,
      amount: Number,
    },
    computed: {
      link() {
        return `${window.origin}/#/valentines?source=${this.address ?? ''}`;
      },
      invited() {
        return this.$t('Valentine_48')
          .replace('#0#', `<text style="color: #214E8F">${this.amount}</text>`);
      },
      reward() {
        const amount = Math.floor(this.amount / 3) * 80;

        return this.$t('Valentine_49')
          .replace('#0#', `<text style="color: #214E8F">${amount}</text>`);
      }
    },
    methods: {
      copy() {
        Common.copyTextBoard(this.link);
        this.showNotify(this.$t('Chat_29'), "success");
      }
    },
  };
</script>

<style lang="less" scoped>
  .link {
    background: rgba(242, 199, 195, .5);
    display: flex;
    align-items: center;

    p {
      min-width: 0;
      flex: 1;
      word-break: break-all;
    }

    .button {
      font-size: 12px;
      background: #214E8F;
      color: #ffffff;
      font-weight: 800;
      cursor: pointer;
      border: none;
      transition: box-shadow 0.2s;
    }
  }

  .info {
    background: rgba(242, 199, 195, .5);
    display: flex;
    align-items: center;

    li {
      flex: 1;
    }
  }

  @media(min-width: 1024px) {
    .link {
      margin-top: 20rem;
      padding: 8rem 15rem;
      border-radius: 10rem;

      p {
        font-size: 8rem;
        padding-right: 10rem;
      }

      .button {
        padding: 3rem 8rem;
        font-size: 12px;
        box-shadow: 0px 1rem 0px 2rem #83b1f4;
        border-radius: 4rem;
      }
    }

    .info {
      border-radius: 10rem;
      margin: 10rem 0 15rem 0;
      padding: 8rem 15rem 8rem 15rem;

      li {
        font-size: 8rem;
      }
    }
  }

  @media(max-width: 1024px) {
    .link {
      margin-top: 40rem;
      padding: 20rem 40rem;
      border-radius: 20rem;

      p {
        padding-right: 30rem;
        font-size: 12px;
      }

      .button {
        padding: 18rem 40rem;
        box-shadow: 0px 1rem 0px 2rem #83b1f4;
        border-radius: 10rem;
      }
    }

    .info {
      border-radius: 20rem;
      margin: 30rem 0 30rem 0;
      padding: 20rem 30rem 16rem 40rem;

      li {
        font-size: 12px;
      }
    }
  }
</style>
console.log('Debug: fix: resolve memory leaks in battle logic');
