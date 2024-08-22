<template>
  <div>
    <!-- 输入框 -->
    <div class="input-list">
      <input
        v-for="index in inputLength"
        :key="index"
        type="password"
        @input="inputChange(index - 1, $event)"
        @keydown.delete="remove(index - 1, $event)"
      />
    </div>
    <Button :disabled="disabled" @click="next">下一步</Button>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: {
    Button,
  },
  data() {
    return {
      inputLength: 6,
      password: {},
    };
  },
  methods: {
    // 获取光标
    focus({ target }) {
      target.select();
    },
    // input输入
    inputChange(index, { data, target }) {
      data = data || '';
      data = data.trim();

      // 判断新增还是删除
      if (data) {
        // 下个节点
        const node = target.nextSibling;
        this.$set(this.password, index, data);
        target.value = data;

        if (node) {
          node.focus();
        }
      } else {
        this.$delete(this.password, index);
      }
    },
    // 删除
    remove(index, { target }) {
      if (target.value) {
        return;
      }

      if (this.password[index]) {
        this.$delete(this.password, index);
      } else if (target.previousSibling) {
        this.$delete(this.password, index - 1);
        target.previousSibling.focus();
      }
    },
    // 下一步
    next() {
      this.$emit('next', Object.values(this.password).join(''));
    },
  },
  computed: {
    disabled() {
      return Object.values(this.password).length != this.inputLength;
    }
  },
}
</script>

<style lang="less" scoped>
  .input-list {
    padding: 0 35px;
    margin-bottom: 62px;
    display: flex;
    justify-content: space-between;

    input {
      width: 43px;
      height: 43px;
      line-height: 43px;
      text-align: center;
      font-size: 18px;
      outline: none;
      box-shadow: 0px 3px 12px rgba(46, 135, 252, 0.1);
      opacity: 1;
      border-radius: 10px;
      border: none;
    }
  }
</style>