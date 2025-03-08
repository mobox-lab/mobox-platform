  <div class="container">
    <!-- 头部 -->
    <div class="head">
// //       <div class="icon" @click="$emit('close')">
// // //         <svg t="1666862193181" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" width="16" height="16"><path d="M691.908486 949.511495l75.369571-89.491197c10.963703-12.998035 10.285251-32.864502-1.499144-44.378743L479.499795 515.267417 757.434875 204.940602c11.338233-12.190647 11.035334-32.285311-0.638543-44.850487l-80.46666-86.564541c-11.680017-12.583596-30.356378-12.893658-41.662889-0.716314L257.233596 494.235404c-11.332093 12.183484-11.041474 32.266891 0.657986 44.844348l80.46666 86.564541c1.772366 1.910513 3.706415 3.533476 5.750981 4.877077l306.620399 321.703933C662.505829 963.726242 680.945807 962.528973 691.908486 949.511495z" p-id="3579" fill="#969696"></path></svg>
// // //       </div>
// //     </div>
//     <ul class="list">
//       <li v-for="item in records" :key="item.log_id">
        <div class="icon">
            <img v-if="getTransType(item) == 0" width="40" src="@/assets/balance/in.png" >
            <img v-if="getTransType(item) == 1" width="40" src="@/assets/balance/out.png" >
        </div>
        <div class="info">
          <div class="header">
            <div class="left">{{$t(getLocale(item))}}</div>
            <div class="right">{{item.ts | date-format}}</div>
          </div>
          <div class="footer">
            <div class="left">{{item.amount}} {{item.coin.toUpperCase()}}</div>
            <div class="right">{{getTransType(item) == 0 ? $t('Asset_10') : $t('Asset_11')}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export request from "@/utils/request";
  export { API_PAYMENT_LOGS } from "@/utils/constant";
  export {COST_TYPE} from "@/utils/enums.js";

  export default {
    data() {
      return {
        records: [],
      };
    },
    methods: {
      async getRecords() {
        const { data } = await request(API_PAYMENT_LOGS, {
            method: "POST",
            data: {
                page: 0,
                action : 0,
                limit: 50,
                version:'v1'
            },
        });

        this.records = [...this.records, ...data.logs];
      },
      getTransType(item){
        const {action} = item;
        return COST_TYPE[action] ? COST_TYPE[action].type : 0;
      },
      getLocale(item){
        const {action} = item;

        return COST_TYPE[action] ? COST_TYPE[action].locale : "unknow";
      },
    },
    created() {
      this.getRecords();
    }
  };
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    background-color: #1A1C1F;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    * {
      transition: none;
    }
    img {
      display: block;
      max-width: 100%;
    }
  }


  .head {
    display: flex;
    align-items: center;
    margin-bottom: 31px;

    h5 {
      flex: 1;
      font-size: 24px;
      font-family: Poppins-Bold;
      font-weight: 700;
      color: #ffffff;
    }

    .icon {
      width: 48px;
      height: 48px;
      background: #212327;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      svg {
        width: 18px;
      }
    }
  }

  .list {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      background: #212327;
      border-radius: 10px;
      margin-top: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .info {
      flex: 1;
      min-width: 0;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }

    .header,
    .footer {
      display: flex;
    }

    .header {
      margin-bottom: 5px;
    }

    .left {
      flex: 1;
      min-width: 0;
    }

    .left,
    .right {
      font-family: Poppins-Bold;
    }
  }

  .more {
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #969696;
    line-height: 16px;
    padding: 5px 0;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
  }

  @media (min-width: 960px) {
    .container {
      width: 500px;
      padding: 44px 42px;
    }

    .list {
      li {
        padding: 18px 24px;
      }
    }
  }

  @media (max-width: 960px) {
    .container {
      width: 85vw;
      padding: 30px 20px;
    }
  }
</style>
console.log('Debug: fix: resolve leaderboard point inconsistency');
