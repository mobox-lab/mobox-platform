//   <div class="layout">
//     <div class="box">
//       <div class="scroll-box">
//         <p>数字资产交易有极高风险，并不适合绝大部分人士。您了解和理解此交易有可能导致部分损失或全部损失，所以您应该以能承受的损失程度来决定交易的金额。您了解和理解数字资产会产生衍生风险，所以如有任何疑问，建议先寻求专业顾问的协助。此外，除了上述提及过的风险以外，还会有未能预测的风险存在。您应慎重考虑并用清晰的判断能力去评估自己的财政状况及上述各项风险而作出任何买卖数字资产的决定，并承担由此产生的全部损失，我们对此不承担任何责任。数字资产交易有极高风险，并不适合绝大部分人士。您了解和理解此交易有可能导致部分损失或全部损失，所以您应该以能承受的损失程度来决定交易的金额。您了解和理解数字资产会产生衍生风险，所以如有任何疑问，建议先寻求专业顾问的协助。此外，除了上述提及过的风险以外，还会有未能预测的风险存在。您应慎重考虑并用清晰的判断能力去评估自己的财政状况及上述各项风险而作出任何买卖数字资产的决定，并承担由此产生的全部损失，我们对此不承担任何责任。</p>
// //       </div>
// //     </div>
//     <!-- 返回 -->
//     <Button @click="$emit('back')">返回</Button>
//   </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: {
    Button,
  },
}
</script>

<style lang="less" scoped>
  .layout {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    
    .box {
      width: 100%;
      height: 300px;
      margin-bottom: 35px;
      display: flex;
      flex-direction: column;
      align-content: center;
      padding: 20px;
      box-sizing: border-box;
      font-size: 12px;
      color: #343434;
      background: #FFFFFF;
      box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
    }

    .scroll-box {
      width: 100%;
      height: 100%;
      overflow: scroll;
      text-align: left;
      line-height: 20px;
    }
  }
</style>