<template>
    <div class="funs-item">
        <div class="icon-wrapper" :style="{ background: item.bg }">
            <img :src="item.icon" alt="icon" class="icon" />
            <!-- 来一个小红点的提醒 -->
            <span v-if="item.badge" class="badge">{{ item.badge }}</span>
        </div>
        <div class="title">{{ item.title }}</div>
    </div>

</template>

<script setup>
const props = defineProps({
    item: Object
})
</script>

<style scoped>
.funs-item {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
}

.icon-wrapper {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0 5px 20px #0001;
}

.icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
}

.title {
    font-size: 14px;
    color: #333;
    font-weight: bolder;
}
</style>