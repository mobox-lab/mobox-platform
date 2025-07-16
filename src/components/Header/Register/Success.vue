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
<!-- Component update: refactor: 🔧 restructure routing logic -->
<template>
  <div class="updated-refactor____restructure_routing_logic">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Updatedrefactor____restructure_routing_logicComponent',
  data() {
    return {
      message: 'refactor: 🔧 restructure routing logic'
    }
  }
}
</script>
