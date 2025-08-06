<template>
    <div class="contanier">
        <div class="greeting-bar">
            <div class="greeting-left">
                <span class="greeting-text">夜深了，</span>
                <span class="greeting-highlight">哈哈哈同学</span>
            </div>
            <div class="greeting-right">
                {{ dateStr }}
            </div>
        </div>
        <!-- 下面原有内容 -->
        <div class="carousel">
            <Carousel />
        </div>
        <div class="scrollbar">
            <Scrollbar />
        </div>
        <div class="function">
            <Function />
        </div>
        <div class="dynamic-section">
            <CampusDynamic />
        </div>
    </div>
    <Navbar />
</template>

<script setup>
import Carousel from '../../components/home/functions/more/carousel.vue';
import CampusDynamic from '../../components/home/Dynamic/CampusDynamic.vue';
import Function from '../../components/home/function.vue';
import Scrollbar from '../../components/home/Scrollbar.vue';
import Navbar from '../../components/Navbar/navbar.vue';

import { ref } from 'vue'
function getDateStr() {
    const now = new Date()
    const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const month = now.getMonth() + 1
    const day = now.getDate()
    const week = weekArr[now.getDay()]
    return `${month}月${day}日 · ${week}`
}
const dateStr = ref(getDateStr())
</script>


<style scoped>
.contanier {
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

.greeting-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 0 0;
    padding: 0 2px;
    height: 40px;
}

.greeting-left {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
}

.greeting-text {
    color: #222;
}

.greeting-highlight {
    color: #1cd14f;
    font-weight: 900;
    margin-left: 3px;
    font-size: 1.5rem;
    letter-spacing: 1px;
}

.greeting-right {
    font-size: 1rem;
    color: #888;
    background: #f5f5f5;
    border-radius: 12px;
    padding: 2px 14px;
    font-weight: 500;
}

.carousel {
    margin-top: 10px;
    margin-bottom: 10px;
}

.function {
    margin-top: 10px;
}

.dynamic-section {
    height: 100%;
}

@media (max-width: 500px) {
    .greeting-bar {
        height: 36px;
    }

    .greeting-left {
        font-size: 1.15rem;
    }

    .greeting-highlight {
        font-size: 1.3rem;
        letter-spacing: 1px;
    }

    .greeting-right {
        font-size: 0.95rem;
        padding: 1px 8px;
    }
}
</style>