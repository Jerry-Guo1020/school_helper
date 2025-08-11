<template>
  <div class="container">
    <div class="top">
      <TopNavbar title="失物招领" />
    </div>

    <div class="content">
      <!-- 搜索栏 + 发布按钮 -->
      <div class="search-bar">
        <i class="icon icon-search">🔍</i>
        <input class="search-input" placeholder="请搜索你丢失的物品" />
        <button class="btn-add" aria-label="发布">＋</button>
      </div>

      <!-- 提示横幅 -->
      <div class="tip-banner">
        提示：检测到人向您索要xxxxx，请提高xxxx！
      </div>

      <!-- 顶部 Tab -->
      <div class="tabs">
        <div
          class="tab"
          :class="{ active: currentTab === 'seek' }"
          @click="currentTab = 'seek'"
        >
          寻物
        </div>
        <div
          class="tab"
          :class="{ active: currentTab === 'found' }"
          @click="currentTab = 'found'"
        >
          招领
        </div>
      </div>

      <!-- 筛选条 -->
      <div class="filters">
        <div class="filter-item">全部类型 <span class="caret">▾</span></div>
        <div class="filter-item">全部时间 <span class="caret">▾</span></div>
        <div class="filter-item">全部地点 <span class="caret">▾</span></div>
      </div>

      <!-- 列表 -->
      <div class="list">
        <div v-for="item in items" :key="item.id" class="card">
          <img :src="item.img" class="thumb" alt="lost item" />
          <div class="info">
            <div class="title">
              <span class="label">失物：</span>
              <span class="name">{{ item.name }}</span>
            </div>
            <div class="row">
              <span class="k">时间：</span>
              <span class="v">{{ item.time }}</span>
            </div>
            <div class="row">
              <span class="k">地点：</span>
              <span class="v">{{ item.place }}</span>
            </div>
            <button class="claim">认领</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNavbar from '../../../components/Navbar/topNavbar.vue'
import { ref } from 'vue'

// tab 状态（仅展示）
const currentTab = ref('seek')

// 演示数据：你用后端数据替换即可
const items = ref([
  {
    id: 1,
    name: '耳机',
    time: '三天内',
    place: '图书馆',
    img:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'iPad',
    time: '三天内',
    place: '教学楼',
    img:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'iPhone',
    time: '一周内',
    place: '教学楼',
    img:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop'
  }
])
</script>

<style scoped>
:root {
  /* 你的绿色：浅绿做背景/高亮底色，深绿做主色 */
  --brand-soft: #b4fac8;
  --brand: #23c46e;
  --text: #222;
  --muted: #777;
  --line: #eee;
  --white: #fff;
}

.container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f8f9fb;
}

/* 顶部由 TopNavbar 渲染，此处不改 */
.top {
  width: 100%;
}

/* 内容区域 */
.content {
  padding: 12px;
}

/* 搜索栏 */
.search-bar {
  display: flex;
  align-items: center;
  background: var(--white);
  border: 1.5px solid #ddd;
  border-radius: 28px;
  padding: 8px 12px;
  gap: 8px;
}

.icon-search {
  font-style: normal;
  font-size: 18px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--text);
}

.btn-add {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: var(--brand);
  color: #fff;
  font-size: 20px;
  line-height: 34px;
  cursor: pointer;
}

/* 提示横幅 */
.tip-banner {
  margin-top: 8px;
  background: var(--brand-soft);
  color: #0b6b3a;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 13px;
}

/* 顶部 Tabs */
.tabs {
  display: flex;
  gap: 36px;
  padding: 14px 8px 0;
  background: transparent;
}

.tab {
  position: relative;
  font-size: 22px;
  font-weight: 700;
  color: #8c8c8c;
  cursor: pointer;
}

.tab.active {
  color: var(--brand);
}

.tab.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  margin: 0 auto;
  width: 60px;
  height: 4px;
  border-radius: 4px;
  background: var(--brand);
}

/* 筛选条 */
.filters {
  display: flex;
  justify-content: space-between;
  padding: 12px 4px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  margin-top: 10px;
  background: var(--white);
}

.filter-item {
  font-size: 14px;
  color: var(--text);
}

.caret {
  color: var(--muted);
  margin-left: 4px;
}

/* 列表卡片 */
.list {
  padding-top: 8px;
}

.card {
  display: grid;
  grid-template-columns: 145px 1fr;
  gap: 12px;
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 10px;
  margin: 12px 0;
  box-shadow: 0 2px 10px #0000000b;
}

.thumb {
  width: 100%;
  height: 145px;
  object-fit: cover;
  border-radius: 10px;
  background: #f2f3f5;
}

.info {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 72px; /* 给“认领”按钮留空间 */
}

.title {
  font-size: 20px;
  margin-bottom: 8px;
}

.label {
  color: #f43; /* “失物：”可读性强调 */
  font-weight: 600;
}

.name {
  color: #f43;
  font-weight: 700;
}

.row {
  margin: 6px 0;
  font-size: 16px;
}

.k {
  color: var(--muted);
  margin-right: 6px;
}

.v {
  color: var(--text);
  font-weight: 600;
}

/* 认领按钮 */
.claim {
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  background: var(--brand);
  color: #fff;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
}

/* 小屏适配 */
@media (max-width: 360px) {
  .card {
    grid-template-columns: 120px 1fr;
  }
  .thumb {
    height: 120px;
  }
}
</style>
