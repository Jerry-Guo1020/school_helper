<template>
    <div class="activity-container">
        <!-- 顶部banner -->
        <div class="activity-banner-wrap">
            <Carousel />
        </div>

        <!-- 分类Tab -->
        <div class="activity-tabs">
            <span class="tab active"><span class="icon">🏁</span>全部</span>
            <span class="tab"><span class="icon">🎮</span>休闲聚玩</span>
            <span class="tab"><span class="icon">🌊</span>兴趣沙龙</span>
            <span class="tab"><span class="icon">🚌</span>旅游出行</span>
        </div>

        <!-- 过滤条 -->
        <div class="activity-filter-bar">
            <span class="filter active">全部时间</span>
            <span class="filter">推荐</span>
        </div>

        <!-- 活动列表 -->
        <div class="activity-list">
            <ActivityCard v-for="item in activityList" :key="item.id" :item="item" />
        </div>
        <Navbar />
    </div>
</template>

<script setup>
import ActivityCard from '../../components/activity/ActivityCard.vue'
import Carousel from '../../components/activity/carousel.vue';
import Navbar from '../../components/Navbar/navbar.vue'
import { activityList } from '/src/data/activity/activityList.js'
</script>

<style scoped>
.activity-container {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: calc(124px + env(safe-area-inset-bottom, 24px));

}

/* 顶部banner整体包裹留白+圆角 */
.activity-banner-wrap {
    width: 100%;
    margin-top: 18px;
    margin-bottom: 8px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px #17e7a025;
}

.activity-banner {
    width: 100%;
    height: 106px;
    object-fit: cover;
    display: block;
}

/* 分类Tab */
.activity-tabs {
    display: flex;
    align-items: center;
    background: #e5fff2;
    border-radius: 10px;
    margin: 0 0 8px 0;
    padding: 6px 10px;
    font-size: 1.08rem;

}

.tab {
    color: #222;
    font-weight: 500;
    padding: 2px 0;  /* 上下留白，左右去掉，用宽度控制 */
    border-radius: 8px;
    transition: all .16s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;  /* 居中 */
    gap: 3px;
    white-space: nowrap;
    min-width: 80px;    /* 固定每个按钮最小宽度，可以微调 */
    height: 55px;       /* 固定高度，可微调 */
    box-sizing: border-box;
    flex: 1;            /* 让每个tab自动均分父容器宽度，等宽 */
    flex-direction: column; 
    overflow: hidden;
}

.tab.active {
    background: #17e7a0;
    color: #fff;
    font-weight: 700;
    box-shadow: 0 2px 8px #17e7a022;
    flex: 1;
}

/* 过滤条 */
.activity-filter-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.99rem;
    gap: 18px;
    margin-bottom: 6px;
    margin-top: 8px;
}

.filter {
    color: #9eaeaf;
    font-weight: 500;
    cursor: pointer;
}

.filter.active {
    color: #17e7a0;
    font-weight: 800;
    border-bottom: 2.2px solid #17e7a0;
}

.activity-list {
    width: 100%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* 响应式调整 */
@media (max-width: 600px) {

    .activity-banner {
        height: 80px;
    }
}
</style>
