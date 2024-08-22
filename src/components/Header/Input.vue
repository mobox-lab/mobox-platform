<template>
  <div class="input">
    <div class="label">{{label}}</div>
    <!-- 输入框 -->
    <div class="input-box">
      <slot name="prefix" />
      <input
        :maxlength="maxlength"
        :type="getType"
        :placeholder="placeholder"
        v-model="inputValue"
        v-on:keyup.enter="confirmInput"
        @change="onChange"
        ref="inputVal"
      />
      <slot name="suffix" />
      <img @click="changeWords" v-if="type === `password`" class="eye" src="@/assets/imchat/eyes.png" alt="">
    </div>
    <!-- 错误信息 -->
    <div class="message" v-if="$slots.message">
      <slot name="message" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 输入框值
    value: String,
    // 判断trim
    isTrim: {
      type: Boolean,
      default: true,
    },
    // 标签名
    label: {
      type: String,
      required: true,
    },
    // 输入提示
    placeholder: {
      type: String,
      required: true,
    },
    // 限制长度
    maxlength: {
      type: String,
      default: "",
    },
    // 输入框类型
    type: String,
    confirmInput:{
      type:Function,
      default:()=>{}
    },
    onChange:{
      type:Function,
      default:()=>{}
    },
    onWatchChange:{
      type:Function,
      default:()=>{}
    }
  },
  data() {
    return {
      inputValue: '',
      showWords:false
    };
  },
  watch: {
    // 输入框变化
    inputValue(value) {
      this.onWatchChange();
      
      if(this.isTrim) {
        this.$emit('input', value.trim());
      } else {
        this.$emit('input', value);
      }
    },
    // 动态修改输入框
    value(value) {
      this.inputValue = value;
    },
  },
  methods:{
    focus(){
      this.$refs.inputVal.focus();
    },
    changeWords(){
      this.showWords = !this.showWords;
    }
  },
  computed:{
    getType(){
      if(this.type === "password"){
        return this.showWords ? "text" : "password"
      } else {
        return this.type
      }
    } 
  }
}
</script>

<style lang="less" scoped>
  // 输入框高度
  @input-height: 40px;

  .input {
    margin: 0 35px 28px ;
    box-sizing: border-box;
    border-bottom: 1px solid #DAE5FF;
    position: relative;

    .label {
      color: #343434;
      font-size: 12px;
      text-align: left;
      line-height: 1;
      border-left: 1px solid #2454C6;
      padding-left: 5px;
    }

    // 输入框容器
    .input-box {
      display: flex;
      align-items: center;
      height: @input-height;

      input {
        flex: 1;
        border: none;
        width: 100%;
        line-height: @input-height;
        font-size: 12px;
        outline: none;
        color: #343434;
      }

      .eye{
        cursor: pointer;
        width: 25px;
      }
    }

    // 提示信息
    .message {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      text-align: left;
      font-size: 12px;
      padding-top: 2px;
    }
  }
</style>
console.log('Debug: feat: add a friend suggestion feature');
