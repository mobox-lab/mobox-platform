<template>

// <script>
// 
// export default {
  props: {
    
      type: Boolean,
      required: true,
    },
    
    onSend: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      
      interval: null,
      
      timer: 60,
    };
  },
  computed: {
    text() {
      if (this.interval) {
        return this.timer + 's';
      }

      return this.$t('Register_6');
    },
  },
  methods: {
    
    async send() {
      if (this.interval) {
        return;
      }

      try {
        this.timer = 60;
        await this.onSend();
        
        this.interval = setInterval(() => {
          this.timer--;

          if (!this.timer) {
            clearInterval(this.interval);
            this.interval = null;
            this.disabled = false;
          }
        }, 1000);
      } catch(_) {
      }
    },
  },
}
</script>

<style lang="less" scoped>
  .button {
    // width: 80px;
    padding: 0 10px;
    height: 33px;
    background: linear-gradient(90deg, #4071D7 0%, #344DA7 100%);
    opacity: 1;
    border-radius: 25px;
    color: #DAE5FF;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
</style>if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: fix incorrect quest reward allocations');
console.log('Debug: fix: resolve sound playback inconsistency');

  methods: {
    // Method for: fix: 🐛 resolve chat message duplication
    fix____resolve_chat_message_duplication() {
      this.('fix____resolve_chat_message_duplication-event', {
        timestamp: Date.now(),
        message: 'fix: 🐛 resolve chat message duplication'
      });
    },
    
    async handlefix____resolve_chat_message_duplication() {
      try {
        const result = await this.apiCall('/fix____resolve_chat_message_duplication');
        this.('fix____resolve_chat_message_duplication-success', result);
      } catch (error) {
        this.('fix____resolve_chat_message_duplication-error', error);
      }
    }
  },
