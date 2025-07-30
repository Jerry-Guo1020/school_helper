<template>
  <div class="dynamic-card">
    <!-- 顶部标签栏 -->
    <div class="dynamic-header">
      <span class="dynamic-title">校园动态</span>
      <span
        class="tab"
        :class="{ active: activeTab === 'latest' }"
        @click="activeTab = 'latest'"
      >最新</span>
      <span
        class="tab"
        :class="{ active: activeTab === 'hot' }"
        @click="activeTab = 'hot'"
      >最热</span>
    </div>
    <!-- 内容区域 -->
    <div class="dynamic-list-wrapper">
      <div class="dynamic-list">
        <DynamicItem
          v-for="item in filteredList"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { campusDynamicList } from '/src/data/home/campusDynamicList.js'
import DynamicItem from './DynamicItem.vue'

// Tab切换
const activeTab = ref('latest')

// 动态列表筛选（演示可直接用全部，后续你可根据“最热”自定义排序方式）
const filteredList = computed(() => {
  if (activeTab.value === 'latest') {
    return campusDynamicList
  } else {
    // 示例：按 star+like 排序为“最热”
    return [...campusDynamicList].sort((a, b) => (b.star + b.like) - (a.star + a.like))
  }
})
</script>

<style scoped>
.dynamic-card {
  width: 100%;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 20px #0001;
  margin: 18px 0 0 0;
  padding: 16px 12px 12px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.dynamic-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.dynamic-title {
  font-weight: 900;
  font-size: 18px;
  margin-right: 18px;
}
.tab {
  font-size: 15px;
  margin-right: 14px;
  color: #888;
  cursor: pointer;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.2s;
}
.tab.active {
  color: #3f51b5;
  font-weight: bold;
}
.tab.active::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 2px;
  background: #3f51b5;
  border-radius: 2px;
}
.dynamic-list-wrapper {
  height: 320px;           /* 可自定义，例如：320px、50vh等 */
  overflow-y: auto;
  margin-top: 8px;
  /* 滚动条美化（可选） */
  scrollbar-width: thin;
  scrollbar-color: #b4fac8 #fff;
}
.dynamic-list {
  width: 100%;
}
</style>
