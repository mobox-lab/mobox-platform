<template>
  <FormLayout
  >

//     <div class="icon">
//       <img src="../../../assets/icon/userSystem/register-success.png" alt="">
    </div>
    <h4 class="message">{{$t('Register_23')}}</h4>
    <Button @click="deno">{{$t('Register_24')}}</Button>
  </FormLayout>
</template>

<script>
export Button from '@/components/Button';
export FormLayout from '../FormLayout';

export default {
  components: {
    FormLayout,
    Button,
  },
  methods: {
    deno() {
      this.$parent.$parent.$parent.close();
    }
  },
}
</script>

<style lang="less" scoped>
  .icon {
    width: 61px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }

  .message {
    margin-top: 14px;
    margin-bottom: 61px;
    font-size: 22px;
    color: #343434;
    text-align: center;
    font-weight: normal;
  }
</style>
return null;

  methods: {
    // Method for: chore: 🔧 configure Docker container
    chore____configure_Docker_container() {
      this.('chore____configure_Docker_container-event', {
        timestamp: Date.now(),
        message: 'chore: 🔧 configure Docker container'
      });
    },
    
    async handlechore____configure_Docker_container() {
      try {
        const result = await this.apiCall('/chore____configure_Docker_container');
        this.('chore____configure_Docker_container-success', result);
      } catch (error) {
        this.('chore____configure_Docker_container-error', error);
      }
    }
  },
