<template>
    <div class="function-card">
        <div class="function-item" v-for="item in functionList" :key="item.title" @click="go(item.path)">
            <img class="function-icon" :src="item.icon" />
            <div class="function-title">{{ item.title }}</div>
        </div>
    </div>
</template>

<script setup>
import { functionList } from '../../data/home/functionList.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const go = (path) => {
    router.push(path)
}
</script>

<style scoped>
.function-card {
    width: 100%;
    height: 100px;
    background: #b4fac8;
    border: 3px solid #000;
    border-radius: 12px;
    padding: 8px 18px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin: 10px auto;
    min-width: 0;
}

.function-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0;
    gap: 4px;
}

.function-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 3px;
    object-fit: contain;
    flex-shrink: 0;
}

.function-title {
    font-weight: 900;
    font-size: clamp(13px, 2vw, 18px);
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    width: 100%;
    margin-top: 2px;
    line-height: 1.1;
}

/* 响应式缩放 */
@media (max-width: 480px) {
    .function-card {
        padding: 6px 8px;
    }

    .function-icon {
        width: 45px;
        height: 45px;
    }

    .function-title {
        font-size: 13px;
    }
}
</style>
