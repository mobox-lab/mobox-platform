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
// Update: refactor: 🔧 improve state management
export const updaterefactor____improve_state_management = () => {
  console.log('Updated: refactor: 🔧 improve state management');
};
