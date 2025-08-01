<template>
  <div class="activity-card">
    <div class="card-left">
      <img :src="item.cover" alt="活动封面" class="card-cover" />
      <span class="card-status">{{ item.status }}</span>
    </div>
    <div class="card-main">
      <div class="card-title">{{ item.title }}</div>
      <div class="card-info">
        <span class="card-time">🕒 {{ item.time }}</span>
        <span class="card-place">{{ item.place }}</span>
        <span class="card-distance">{{ item.distance }}</span>
      </div>
      <div class="card-type">{{ item.type }}</div>
      <div class="card-avatars">
        <template v-for="(avatar, idx) in item.joinedAvatars" :key="avatar">
          <img :src="avatar" class="avatar" v-if="idx < 4"/>
        </template>
        <span class="joined-num">等 {{ item.joinedNum }} 人已报名</span>
      </div>
      <button class="card-review">{{ item.review }}</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

<style scoped>
.activity-card {
  display: flex;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px #0001;
  padding: 12px 13px 12px 12px;
  align-items: flex-start;
  gap: 12px;
  position: relative;
}

.card-left {
  position: relative;
  min-width: 84px;
  max-width: 84px;
}
.card-cover {
  width: 84px;
  height: 84px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 10px #17e7a033;
}
.card-status {
  position: absolute;
  left: 7px;
  top: 6px;
  background: #666a78d9;
  color: #fff;
  font-size: 0.59rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 1.5px 7px;
  z-index: 1;
  letter-spacing: 1px;
}

.card-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.card-title {
  font-size: 1.09rem;
  font-weight: 800;
  color: #212529;
  margin-bottom: 6px;
}
.card-info {
  font-size: 0.93rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 3px;
}
.card-place {
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-distance {
  color: #ffbc0b;
  font-size: 0.92rem;
  font-weight: 800;
  background: #fff8d7;
  border-radius: 8px;
  padding: 1.5px 7px;
  margin-left: 3px;
}
.card-type {
  font-size: 0.83rem;
  color: #17e7a0;
  margin-bottom: 2px;
  margin-top: 2px;
}
.card-avatars {
  display: flex;
  align-items: center;
  gap: 1px;
  margin-bottom: 4px;
  margin-top: 4px;
}
.avatar {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-right: -6px;
  box-shadow: 0 2px 5px #17e7a022;
}
.joined-num {
  margin-left: 13px;
  color: #666;
  font-size: 0.92rem;
}
.card-review {
  margin-top: 2px;
  align-self: flex-end;
  background: #ffe271;
  color: #795300;
  font-weight: 700;
  font-size: 0.98rem;
  border-radius: 12px;
  padding: 3px 18px;
  border: none;
  box-shadow: 0 1px 5px #ffe27130;
  letter-spacing: 2px;
  cursor: pointer;
  transition: box-shadow .18s;
}
.card-review:hover {
  box-shadow: 0 2px 8px #ffe27190;
}

/* 响应式缩放 */
@media (max-width: 500px) {
  .activity-card {
    padding: 8px 5px 8px 5px;
    border-radius: 13px;
  }
  .card-cover, .card-left {
    width: 60px;
    min-width: 60px;
    height: 60px;
    max-width: 60px;
  }
  .card-title { font-size: 0.95rem; }
}
</style>
