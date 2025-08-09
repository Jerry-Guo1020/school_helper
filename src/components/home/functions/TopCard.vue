<template>
    <div class="topcard" :style="{ backgroundColor: bgColor }">
        <div class="topcard-title" :style="{ color: titleColor }">{{ title }}</div>
        <div class="topcard-content" :style="{ color: contentColor }" v-html="content"></div>
        <button class="topcard-btn" :style="{ background: buttonBg, color: buttonTextColor }" @click="onClick">
            {{ buttonText }}
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, default: '纯粹表达，无需完美' },
    content: { type: String, default: '一个匿名、无压力的创意空间随时记录<br>你的想法、草图或语音片段。' },
    buttonText: { type: String, default: '立即分享灵感' },
    titleColor: { type: String, default: '#80baa7' },
    contentColor: { type: String, default: '#4d6907' },
    buttonBg: { type: String, default: 'radial-gradient(circle at 112% 0%, #ffb570 6%, #80baa7 81%)' },
    buttonTextColor: { type: String, default: '#fff' },
    bgColor: { type: String, default: '#fff' }
});

const emit = defineEmits(['click']);

function onClick() {
    emit('click');
}
</script>

<style scoped>
.topcard {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.topcard-title {
    font-size: 25px;
    font-weight: 700;
}

.topcard-content {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
}

.topcard-btn {
    margin-top: 20px;
    border-radius: 25px;
    width: 150px;
    height: 40px;
    border: none;
    font-weight: 600;
    font-size: 14px;
}
</style>
