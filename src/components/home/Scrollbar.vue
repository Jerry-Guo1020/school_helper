<template>
    <div class="scrollar">
        <img src="/home/tonggao.png" class="scrollar-icon" />
        <span class="status">【官方消息】</span>
        <div class="marquee-wrapper">
            <div class="marquee">{{ message }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('发广告直接封禁账号！无论什么广告！')
</script>

<style scoped>
.scrollar {
    width: 100%;
    background: #b4fac8;
    border: 3px solid #000;
    border-radius: 12px;
    padding: 8px 18px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 10px 0;
    min-width: 0;
}

.scrollar-icon {
    width: 28px;
    height: 28px;
    margin-right: 10px;
    flex-shrink: 0;
}

.status {
    font-size: 18px;
    color: #e10029;
    font-weight: 900;
    margin-right: 10px;
    flex-shrink: 0;
    white-space: nowrap;
}

.marquee-wrapper {
    flex: 1;
    overflow: hidden;
    height: 34px;
    display: flex;
    align-items: center;
}

.marquee {
    white-space: nowrap;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    color: #222;
    animation: scroll-left 10s linear infinite;
    min-width: 0;
}

@keyframes scroll-left {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

/* 响应式缩放 */
@media (max-width: 480px) {
    .scrollar {
        padding: 6px 8px;
    }

    .scrollar-icon {
        width: 22px;
        height: 22px;
    }

    .status,
    .marquee {
        font-size: 14px;
    }
}
</style>
