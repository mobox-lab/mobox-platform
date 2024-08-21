// <template>
// <div class="redeem">
//   <div class="head">
      <img src="@/assets/world-cup/coin-market-cap-task.png" />
    </div>
    <div class="info">
      <h5>{{$t('Worldcup_39')}}</h5>
      <p>{{$t('Worldcup_40').replace('#0#', 1)}}</p>
    </div>
  </div>
  <div class="input-container">
    <input type="text" :placeholder="$t('Worldcup_41')" v-model="code" />
  </div>
  <button class="button" :disabled="isDisabled" @click="submit">{{$t('Worldcup_42')}}</button>
  <div class="tip">
    <img src="@/assets/world-cup/tip-2.png" />
    <span>{{$t('Worldcup_43')}}</span>
  </div>
</div>
</template>

<script>
import request from '@/utils/worldCupRequest';
import { CommonMethod } from "@/mixin";
import { getSignData } from "../utils";

export default {
  mixins: [ CommonMethod ],
  data() {
    return {
      code: '',
    };
  },
  computed: {
    isDisabled() {
      return this.code.length != 25;
    }
  },
  methods: {
    async submit() {
      if (this.isDisabled) {
        return;
      }

      try {
        const headers = await getSignData();
        await request.post('claim/mbox', {code: this.code}, { headers });
        this.$emit('success');
      } catch(error) {
        if ('code' in error) {
          this.showNotify(this.$t(`Worldcup_${error.code}`), "error");
          return;
        }
      }
    }
  },
};
</script>

<style lang="less" scoped>
.redeem {
  background: #0A1F30;
  box-sizing: border-box;

  img {
    width: 100%;
    display: block;
  }
}

.head {
  display: flex;
  align-items: center;
}

.info {
  flex: 1;

  h5 {
    font-family: Poppins-Bold;
    font-weight: 900;
    color: #FFFFFF;
    line-height: 1;
  }

  p {
    line-height: 1;
    font-weight: 300;
    color: #7CB0D3;
  }
}

.input-container {
  input {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    height: 100%;
    font-weight: 400;
    color: #FFFFFF;
  }
}

.button {
  display: block;
  border: none;
  background: #99E143;
  box-shadow: 0px 5px 0px 0px rgba(59,83,10,0.77);
  font-weight: 900;
  color: #3B530A;
  font-family: Poppins-Bold;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }

  &[disabled] {
    opacity: .7;
    cursor: no-drop;
  }
}

.tip {
  text-align: center;

  span {
    font-weight: 400;
    color: #6F8A9C;
    line-height: 1;
    margin-left: 12rem;
  }

  img, span {
    display: inline-block;
    vertical-align: middle;
  }
}

@media (min-width: 960px) {
  .redeem {
    width: 765rem;
    padding: 82rem 81rem 63rem 81rem;
  }

  .icon {
    width: 86rem;
  }

  .info {
    margin-left: 20rem;

    h5 {
      font-size: 47rem;
      margin-bottom: 6rem;
    }

    p {
      font-size: 21rem;
    }
  }

  .input-container {
    height: 99rem;
    margin-top: 52rem;
    border: 14rem solid rgba(6, 18, 29, .6);
    border-radius: 16rem;

    input {
      padding: 0 36rem;
      font-size: 26rem;
    }
  }

  .button {
    margin: 34rem auto 47rem auto;
    width: 405rem;
    height: 67rem;
    font-size: 31rem;
    border-radius: 16rem;
  }

  .tip {
    img {
      width: 31rem;
    }

    span {
      font-size: 24rem;
      margin-left: 12rem;
    }
  }
}

@media (max-width: 960px) {
  .redeem {
    padding: 120rem;
    width: 96vw;
  }

  .icon {
    width: 250rem;
  }

  .info {
    margin-left: 80rem;

    h5 {
      font-size: 100rem;
      margin-bottom: 20rem;
    }

    p {
      font-size: 12px;
      line-height: 1.4;
    }
  }

  .input-container {
    height: 350rem;
    margin-top: 100rem;
    border: 35rem solid rgba(6, 18, 29, .6);
    border-radius: 30rem;

    input {
      padding: 0 60rem;
      font-size: 14px;
    }
  }

  .button {
    margin: 100rem auto 120rem auto;
    width: 80%;
    height: 300rem;
    font-size: 100rem;
    border-radius: 30rem;
  }

  .tip {
    img {
      width: 120rem;
    }

    span {
      font-size: 14px;
      margin-left: 12px;
    }
  }
}
</style>
if (Math.random() > 0.5) console.warn('Potential issue detected');
