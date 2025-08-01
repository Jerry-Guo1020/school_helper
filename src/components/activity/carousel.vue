<template>
    <div class="banner-slider" @mouseenter="showArrows = true" @mouseleave="showArrows = false">
        <!-- 左箭头 -->
        <button v-show="showArrows" class="arrow left" @click="prev" aria-label="prev">
            <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M15 6l-6 6 6 6" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round" />
            </svg>
        </button>

        <!-- 图片 -->
        <div class="slider-img-wrap">
            <img :src="banners[current]" class="slider-img" />
        </div>

        <!-- 右箭头 -->
        <button v-show="showArrows" class="arrow right" @click="next" aria-label="next">
            <svg viewBox="0 0 24 24" width="20" height="20">
                <path d="M9 6l6 6-6 6" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round" />
            </svg>
        </button>

        <!-- 指示器 -->
        <div class="indicator">
            <span v-for="(img, idx) in banners" :key="idx" :class="{ active: idx === current }"
                @click="goTo(idx)"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const banners = [
    '/activity/carousel/1.jpg',
    '/activity/carousel/2.jpg',
    '/activity/carousel/3.jpg',
    '/activity/carousel/4.jpg',
    '/activity/carousel/5.jpg'
]

const current = ref(0)
const showArrows = ref(false)
let timer = null

function next() {
    current.value = (current.value + 1) % banners.length
}
function prev() {
    current.value = (current.value - 1 + banners.length) % banners.length
}
function goTo(idx) {
    current.value = idx
}

onMounted(() => {
    timer = setInterval(() => {
        next()
    }, 3500)
})
onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>

<style scoped>
.banner-slider {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    border-radius: 18px;
    overflow: hidden;
    background: #f7fdfc;
    box-shadow: 0 2px 16px #eaeaea63;
    position: relative;
    min-height: 108px;
}

/* 图片区居中撑满 */
.slider-img-wrap {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}

.slider-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    border-radius: 0;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 6px #be89694d;
    z-index: 2;
    transition: background .2s;
    opacity: 0.92;
}

.arrow.left {
    left: 14px;
}

.arrow.right {
    right: 14px;
}

.arrow:hover {
    background: #fff;
}

.indicator {
    position: absolute;
    right: 20px;
    bottom: 10px;
    z-index: 5;
    display: flex;
    gap: 7px;
}

.indicator span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #222;
    opacity: 0.22;
    transition: all .2s;
    cursor: pointer;
}

.indicator span.active {
    background: #222;
    opacity: 0.88;
    width: 13px;
    height: 13px;
}

@media (max-width: 500px) {
    .banner-slider {
        max-width: 99vw;
        height: 100%;
        border-radius: 11px;
    }

    .arrow {
        width: 22px;
        height: 22px;
    }

    .arrow.left {
        left: 7px;
    }

    .arrow.right {
        right: 7px;
    }

    .indicator {
        right: 7px;
        bottom: 4px;
        gap: 4px;
    }

    .indicator span,
    .indicator span.active {
        width: 7px;
        height: 7px;
    }
}
</style>
