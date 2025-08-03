<template>
  <div class="card">
    <div class="content">
      <img :src="avatar" class="avatar-img" alt="商品图片" />
      <div class="msg-main">
        <div class="msg-header">
          <div class="msg-title">{{ title }}</div>
          <div class="msg-time">{{ date }}</div>
        </div>
        <div class="msg-desc">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  avatar: String,
  desc: String,
  date: String
});
</script>

<style scoped>
.card {
  width: 100%;
  background: #fff;
  border-radius: 0;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  padding: 12px 14px;
  min-height: 72px;
  box-sizing: border-box;
  margin: 0;
  transition: background 0.15s;
}
.card:last-child {
  border-bottom: none;
}
.card:active {
  background: #f4f6fa;
}

.content {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
}

.avatar-img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 14px;
  background: #f6f6f6;
}

.msg-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.msg-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 0;
}

.msg-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.msg-time {
  font-size: 0.93rem;
  color: #969696;
  font-weight: 400;
  margin-left: 12px;
  flex-shrink: 0;
  white-space: nowrap;
  align-self: flex-start;
}

.msg-desc {
  font-size: 0.97rem;
  color: #969696;
  margin-top: 2px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 210px;
  font-weight: 400;
}

@media (max-width: 600px) {
  .card {
    padding: 10px 10px;
    min-height: 56px;
  }
  .avatar-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .msg-title {
    font-size: 1rem;
    max-width: 90px;
  }
  .msg-desc {
    font-size: 0.88rem;
    max-width: 120px;
  }
  .msg-time {
    font-size: 0.86rem;
  }
}
</style>
