<template>
    <div class="card" :style="cardStyle">
        <div class="card_content">
            <div>
                <div class="title">{{ title }}</div>
                <div class="desc">{{ desc }}</div>
            </div>
            <img v-if="icon" :src="icon" class="card_icon" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    title: String,
    desc: String,
    colorFrom: { type: String, default: '#ffd891' },
    colorTo: { type: String, default: '#fff' },
    icon: String
})

const cardStyle = computed(() => ({
    background: `linear-gradient(to bottom, ${props.colorFrom}, ${props.colorTo})`,
    borderRadius: '12px'
}))
</script>

<style scoped>
.card {
    width: clamp(240px, 35vw, 420px);
    height: 80px;
    box-shadow: 0 6px 24px 0 #ececec40;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 12px;
    transition: box-shadow .2s;
}

.card_content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    font-size: 1rem;
    font-weight: bold;
}

.desc {
    font-size: 0.5rem;
    margin-top: 10px;
    color: #555;
}

.card_icon {
    width: 56px;
    height: 56px;
    margin-left: 32px;
}
</style>