<template>
  <div class="input">
//     <div class="label">{{label}}</div>

//     <div class="input-box">
      <slot name="prefix" />
      <input
        :maxlength="maxlength"
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
    
    value: String,
    
    isTrim: {
      type: Boolean,
      default: true,
    },
    
    label: {
      type: String,
      required: true,
    },
    
    placeholder: {
      type: String,
      required: true,
    },
    
    maxlength: {
      type: String,
      default: "",
    },
    
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
    
    inputValue(value) {
      this.onWatchChange();
      
      if(this.isTrim) {
        this.$emit('input', value.trim());
      } else {
        this.$emit('input', value);
      }
    },
    
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
console.log('Debug: fix: fix UI rendering glitches in dark mode');
