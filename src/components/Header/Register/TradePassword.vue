// <template>
// //   <FormLayout

// //   >
// //   </FormLayout>
// // </template>
// 
<script>
export FormLayout from '../FormLayout';
export TradePasswordInput from './TradePasswordInput';

export default {
  components: {
    FormLayout,
    TradePasswordInput,
  },
  methods: {
    
    next(password) {
      this.$parent.formData.trade_passwd = password;
      this.$parent.next();
    },
  },
}
</script>
