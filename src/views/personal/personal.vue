<template>
  <div class="profile-page">
    <!-- 绿色顶区：头像+昵称+按钮+统计栏都包含在一起 -->
    <div class="profile-top">
      <div class="profile-main">
        <img :src="user.avatar" alt="avatar" class="avatar" />
        <div class="user-meta">
          <div class="nickname-row">
            <span class="nickname">{{ user.nickname }}</span>
            <img v-if="user.verified" src="/vite.svg" class="verified-icon" />
          </div>
          <div class="userid">@{{ user.userid }}</div>
        </div>
        <div class="profile-btn">
        <button class="main-btn">个人主页</button>
      </div>
      </div>
      
      <!-- 统计栏横排 (现在放在绿色背景内部) -->
      <div class="profile-stats">
        <div class="stat-col">
          <div class="stat-num">{{ user.following }}</div>
          <div class="stat-label">关注</div>
        </div>
        <div class="stat-col">
          <div class="stat-num">{{ user.fans }}</div>
          <div class="stat-label">粉丝</div>
        </div>
        <div class="stat-col">
          <div class="stat-num">{{ user.visitor }}</div>
          <div class="stat-label">访客</div>
        </div>
      </div>
    </div>
    <!-- Tab区 -->
    <div class="tab-bar">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-item"
        :class="{ active: currentTab === tab.key }"
        @click="currentTab = tab.key"
      >
        {{ tab.label }}
      </div>
    </div>
    <!-- 内容区 -->
    <div class="tab-content">
      <div v-if="currentTab === 'posts'">
        <div v-if="postList.length === 0" class="empty-state">
          <img :src="emptyPostImg" alt="empty" class="empty-img" />
          <div class="empty-text">还没有发布过动态</div>
        </div>
        <div v-else>
          <div v-for="item in postList" :key="item.id" class="post-item">
            <div class="post-title">{{ item.title }}</div>
            <div class="post-content">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'liked'">
        <div v-if="likedList.length === 0" class="empty-state">
          <img :src="emptyLikeImg" alt="empty" class="empty-img" />
          <div class="empty-text">还没有赞过的内容</div>
        </div>
        <div v-else>
          <div v-for="item in likedList" :key="item.id" class="post-item">
            <div class="post-title">{{ item.title }}</div>
            <div class="post-content">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../../components/Navbar/navbar.vue'

const user = ref({
  avatar: '/mnt/data/175d8cf3-7d6e-4f83-8f33-64b48d19685c.png', // 新头像
  nickname: '海豚-630390',
  userid: '630390',
  verified: true,
  following: 3,
  fans: 4,
  visitor: 2,
})

const tabs = [
  { key: 'posts', label: '动态' },
  { key: 'liked', label: '赞过' }
]
const currentTab = ref('posts')
const postList = ref([])
const likedList = ref([])
const emptyPostImg = '/mnt/data/e4f8b829-2ce8-4387-a799-1a690c65802a.png'
const emptyLikeImg = '/mnt/data/c9b4b9c4-f313-4959-9549-806d584b7c3d.png'
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #fafcff;
}
/* 绿色大背景包裹所有内容 */
.profile-top {
  background: linear-gradient(135deg, #adffb0 0%, #c6ffd8 100%);
  padding: 26px 20px 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  margin-bottom: 10px;
}
/* 上排 头像+信息+按钮 横排分布 */
.profile-main {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 4px 16px #b8ffbb50;
  object-fit: cover;
  background: #fff;
}
.user-meta {
  display: flex;
  flex-direction: column;
  margin-left: 14px;
}
.nickname-row {
  display: flex;
  align-items: center;
}
.nickname {
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
}
.verified-icon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  vertical-align: middle;
}
.userid {
  margin-top: 4px;
  font-size: 1rem;
  color: #6bc098;
  font-weight: 700;
  letter-spacing: 1px;
}
.profile-btn {
  margin-left: auto;
}
.main-btn {
  background: #fff;
  border-radius: 16px;
  padding: 7px 24px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: #3cb478;
  box-shadow: 0 2px 10px #e9ffe6b2;
  cursor: pointer;
  margin-top: 6px;
  transition: background .18s;
}
.main-btn:hover {
  background: #f1fff3;
}
/* 统计栏横排 包含在绿色背景内，紧跟头像信息下方 */
.profile-stats {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  margin-top: 16px;
  margin-bottom: 0;
}
.stat-col {
  text-align: center;
  flex: 1;
}
.stat-num {
  font-size: 1.13rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
}
.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: #3b686a;
  opacity: .87;
}
/* tab等内容区保留你的原样式 */
.tab-bar {
  display: flex;
  background: #fff;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 2px 10px #e9ffe6b2;
  margin-top: -10px;
  z-index: 2;
  position: relative;
}
.tab-item {
  flex: 1;
  text-align: center;
  padding: 14px 0 10px 0;
  font-weight: 600;
  font-size: 1.11rem;
  color: #333;
  cursor: pointer;
  transition: color .15s;
  border-bottom: 3px solid transparent;
}
.tab-item.active {
  color: #00a854;
  border-bottom: 3px solid #00e37f;
}
.tab-content {
  min-height: 320px;
  background: #fafcff;
  padding: 44px 0 0 0;
}
.post-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px #0001;
  margin: 14px 18px;
  padding: 18px 16px 10px 16px;
  font-size: 1rem;
}
.post-title {
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
}
.post-content {
  color: #666;
  font-size: 0.98rem;
  word-break: break-all;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  color: #888;
}
.empty-img {
  width: 105px;
  margin-bottom: 16px;
  opacity: .92;
}
.empty-text {
  font-size: 1.12rem;
  font-weight: 600;
  color: #222;
}
</style>
