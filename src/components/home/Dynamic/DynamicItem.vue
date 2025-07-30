<template>
  <div class="dynamic-item">
    <div class="top-row">
      <img :src="item.userAvatar" class="avatar" />
      <span class="username">{{ item.userName }}</span>
      <span class="time">{{ item.time }}</span>
    </div>
    <div class="content">{{ item.content }}</div>
    <img v-if="item.img" :src="item.img" class="dynamic-img" />
    <div class="bottom-row">
      <span class="tag">{{ item.tag }}</span>
      <span class="action"><i class="iconfont icon-star"></i> {{ item.star }}</span>
      <span class="action"><i class="iconfont icon-like"></i> {{ item.like }}</span>
      <span class="action"><i class="iconfont icon-comment"></i> {{ item.comment }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

<style scoped>
.dynamic-item {
  border-bottom: 1px solid #f2f2f2;
  padding: 16px 0 8px 0;
  background: #fff;
}
.top-row {
  display: flex;
  align-items: center;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
.username {
  font-weight: 700;
  font-size: 15px;
  margin-right: 10px;
}
.time {
  color: #aaa;
  font-size: 13px;
  margin-left: auto;
}
.content {
  margin: 6px 0;
  font-size: 15px;
  color: #222;
  line-height: 1.5;
}
.dynamic-img {
  width: 90px;
  border-radius: 8px;
  margin-bottom: 6px;
  display: block;
}
.bottom-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 6px;
}
.tag {
  color: #ff8250;
  background: #fff1e6;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
}
.action {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #888;
  gap: 2px;
}
</style>
