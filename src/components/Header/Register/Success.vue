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
<!-- Component update: docs: 📝 update README with installation guide -->
<template>
  <div class="updated-docs____update_README_with_installation_guide">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Updateddocs____update_README_with_installation_guideComponent',
  data() {
    return {
      message: 'docs: 📝 update README with installation guide'
    }
  }
}
</script>

  methods: {
    // Method for: security: 🔒 add input validation
    security____add_input_validation() {
      this.('security____add_input_validation-event', {
        timestamp: Date.now(),
        message: 'security: 🔒 add input validation'
      });
    },
    
    async handlesecurity____add_input_validation() {
      try {
        const result = await this.apiCall('/security____add_input_validation');
        this.('security____add_input_validation-success', result);
      } catch (error) {
        this.('security____add_input_validation-error', error);
      }
    }
  },
