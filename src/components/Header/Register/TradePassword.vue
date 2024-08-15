// <template>
//   <FormLayout
//     title="设置PIN"
//   >
//   </FormLayout>
// </template>
// 
<script>
import FormLayout from '../FormLayout';
import TradePasswordInput from './TradePasswordInput';

export default {
  components: {
    FormLayout,
    TradePasswordInput,
  },
  methods: {
    // 下一步
    next(password) {
      this.$parent.formData.trade_passwd = password;
      this.$parent.next();
    },
  },
}
</script>
