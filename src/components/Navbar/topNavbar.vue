<template>
  <div class="card">
    <div class="title-bar">
      <span class="header-btn left" @click="goBack">←</span>
      <span class="title">{{ title }}</span>
      <span class="header-btn right"></span> <!-- 可放头像/更多按钮，先留空 -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Default Title'
  }
});

// 示例返回
const goBack = () => window.history.back();
</script>

<style scoped>
.card {
  width: 100%;
  background: white;
  height: 60px;
  box-sizing: border-box;
  border: 1px solid #e2eeee; 
}


.title-bar {
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 居左按钮 */
.header-btn.left {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #222;
  cursor: pointer;
  font-weight: 400;
}

/* 居右按钮（可以放头像或更多，默认空） */
.header-btn.right {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  /* 可自定义内容 */
}

.title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  margin: 0 auto;
  letter-spacing: 2px;
}
</style>
