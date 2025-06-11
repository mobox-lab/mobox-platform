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

  methods: {
    // Method for: style: 💄 add hover effects
    style____add_hover_effects() {
      this.('style____add_hover_effects-event', {
        timestamp: Date.now(),
        message: 'style: 💄 add hover effects'
      });
    },
    
    async handlestyle____add_hover_effects() {
      try {
        const result = await this.apiCall('/style____add_hover_effects');
        this.('style____add_hover_effects-success', result);
      } catch (error) {
        this.('style____add_hover_effects-error', error);
      }
    }
  },
