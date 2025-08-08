<template>
  <div class="info-card" v-for="item in cards" :key="item.id">
    <div class="card-header">
      <img :src="item.avatar" class="avatar" alt="avatar" />
      <div class="user-info">
        <div class="user-row">
          <span class="username">匿名用户</span>
          <span class="date">{{ item.date }}</span>
        </div>
        <span class="tag" :class="'tag--' + item.typeColor">{{ item.type }}</span>
      </div>
    </div>
    <div class="card-content">
      <div class="card-title">{{ item.title }}</div>
      <div class="card-desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
    avatar: '/vite.svg', // 你自己换成你的头像路径
    date: '2025-07-10',
    type: '生活适应',
    typeColor: 'green',
    title: '测试1',
    desc: '哈哈哈',
  },
  {
    id: 2,
    avatar: '/vite.svg',
    date: '2025-07-10',
    type: '生活适应',
    typeColor: 'green',
    title: '测试1',
    desc: '哈哈哈',
  },
  {
    id: 3,
    avatar: '/vite.svg',
    date: '2025-07-10',
    type: '其他类型',
    typeColor: 'orange',
    title: '测试2',
    desc: '哈哈哈',
  },
]
</script>

<style scoped>
.info-card {
  background: #fff;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px #f5cfa45d;
  padding: 18px 18px 16px 18px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  align-items: flex-start;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 14px;
  background: #ffe9d1;
  border: 1.5px solid #ffe5c2;
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.user-row {
  display: flex;
  flex-direction: column;
}

.username {
  color: #222;
  font-weight: 700;
  font-size: 17px;
  margin-right: 4px;
}

.date {
  color: #b3b3b3;
  font-size: 13px;
  margin-top: 2px;
}

.tag {
  position: absolute;
  right: 0;
  top: 0;
  padding: 2px 14px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
  /* 动态颜色 */
}
.tag--green {
  background: #e3f6e6;
  color: #41aa57;
}
.tag--orange {
  background: #ffe9d1;
  color: #ff9f38;
}

.card-content {
  margin-top: 10px;
}
.card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;
  color: #333;
}
.card-desc {
  font-size: 15px;
  color: #666;
  margin-top: 2px;
}
</style>
