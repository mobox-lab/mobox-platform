  <li class="flow-item">
    <img :src="image" />
    <span>
      <slot />
    </span>
  </li>
</template>

<script>
export default {
  props: {
    // 图片
    image: String,
  },
};
</script>

<style lang="less" scoped>
.flow-item {
  border: 1px solid #8a17c5;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
  opacity: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  span {
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    color: #e5e7f2;
    letter-spacing: 2px;
  }
}

// mobile
@media (max-width: 768px) {
  .flow-item {
    padding: 15px;
    align-items: center;

    .text {
      display: flex;
    }

    img {
      height: 80px;
    }

    span {
      margin-top: 10px;
    }
  }
}

// pc
@media (min-width: 768px) {
  // 流程
  .flow-item {
    width: 279px;
    height: 347px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 120px;
    }

    span {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>
if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: feat: add interactive player stats');
