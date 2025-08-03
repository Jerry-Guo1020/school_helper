<template>
  <div class="profile-page">
    <!-- 顶部个人信息区 -->
    <div class="profile-top">
      <img :src="user.avatar" alt="avatar" class="avatar" />
      <div class="user-info">
        <div class="nickname">{{ user.nickname }}</div>
        <div class="user-desc">{{ user.desc }}</div>
      </div>
      <!-- 可加ID/认证等 -->
      
      <!-- 水印大logo，可选 -->
      <img src="" class="bg-logo" alt="logo" />
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
      <!-- 收藏tab -->
      <div v-if="currentTab === 'collect'">
        <div v-if="collectList.length === 0" class="empty-state">
          <img :src="emptyImg" alt="empty" class="empty-img" />
          <div class="empty-text">还没有收藏的店铺</div>
        </div>
        <div v-else>
          <!-- 有内容时展示收藏列表 -->
        </div>
      </div>
      <!-- 订单tab -->
      <div v-if="currentTab === 'order'">
        <div class="empty-state">
          <img :src="emptyImg" alt="empty" class="empty-img" />
          <div class="empty-text">暂无订单记录</div>
        </div>
      </div>
      <!-- 打卡tab -->
      <div v-if="currentTab === 'checkin'">
        <div class="empty-state">
          <img :src="emptyImg" alt="empty" class="empty-img" />
          <div class="empty-text">你还没有打过卡哦</div>
        </div>
      </div>
    </div>
  </div>
  <Navbar />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../../components/Navbar/navbar.vue'

// 你的图片路径（记得自己换成实际图片）
const user = ref({
  avatar: '/avatar.png', // 你的头像图片
  nickname: 'LANMIN',
  desc: 'SAVE MONEY SAVE FOOD',
  score: 0
})

const tabs = [
  { key: 'collect', label: '收藏' },
  { key: 'order', label: '订单' },
  { key: 'checkin', label: '打卡' }
]
const currentTab = ref('collect')

// 收藏店铺数据
const collectList = ref([]) // 没内容默认空
// const collectList = ref([{name:'测试店'}]) // 有内容可以用这个做演示

// 空状态图片（用你的插画，也可以自己替换为 /mnt/data/ebb0d8bf-ab95-4f9b-bae1-4225255a764c.png）
const emptyImg = '/vite.svg'
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #fafcff;
}

/* 顶部个人信息区 */
.profile-top {
  position: relative;
  background: linear-gradient(135deg, #adffb0 0%, #c6ffd8 100%);
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 20px 0 20px;
  overflow: hidden;
}
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 4px 16px #b8ffbb50;
  z-index: 1;
}
.user-info {
  margin-left: 80px;
  margin-top: -56px;
  z-index: 1;
}
.nickname {
  font-size: 1.32rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 2px;
}
.user-desc {
  font-size: 0.95rem;
  color: #3c8d50;
  opacity: .83;
  font-weight: 500;
}
.user-score {
  position: absolute;
  left: 20px;
  top: 140px;
  display: flex;
  align-items: center;
  z-index: 2;
}
.score-icon {
  width: 18px;
  margin-right: 6px;
}
.user-score span {
  font-size: 1.08rem;
  color: #222;
  font-weight: 700;
}

.bg-logo {
  position: absolute;
  right: 24px;
  top: 44px;
  width: 120px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}

/* tab栏 */
.tab-bar {
  display: flex;
  background: #fff;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 2px 10px #e9ffe6b2;
  margin-top: -12px;
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

/* 内容区 */
.tab-content {
  min-height: 320px;
  background: #fafcff;
  padding: 44px 0 0 0;
}

/* 空状态 */
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
