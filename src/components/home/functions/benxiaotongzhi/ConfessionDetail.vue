<template>
    <TopNavbar title="详情页面" />
    <div class="container">
        <!-- 表白卡片 -->
        <div class="confession-card">
            <div class="card-header">
                <img class="avatar" :src="confession.avatar" />
                <div class="info">
                    <div class="nickname">{{ confession.nickname }}</div>
                    <div class="date">{{ confession.time }}</div>
                </div>
            </div>

            <div class="card-title">{{ confession.title }}</div>
            <div class="card-content">{{ confession.content }}</div>
            <div class="tag">#{{ confession.tag }}</div>

            <div class="card-footer">
                <span class="footer-btn" @click="like">
                    ❤️ {{ confession.likes }}
                </span>
                <span class="footer-btn">
                    💬 {{ comments.length }}
                </span>
                <span class="footer-btn">🔗 分享</span>
            </div>
        </div>

        <!-- 评论输入框 -->
        <div class="comment-input">
            <img class="comment-avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=guest" />
            <input v-model="newComment" type="text" placeholder="在这里写下你的想法..." />
            <button class="comment-btn" @click="postComment">评论</button>
        </div>

        <!-- 评论列表 -->
        <div class="comment-section">
            <div v-for="(c, index) in comments" :key="index" class="comment-item">
                <img class="comment-avatar" :src="c.avatar" />
                <div class="comment-info">
                    <div class="comment-top">
                        <span class="comment-nickname">{{ c.nickname }}</span>
                        <span class="comment-time">{{ c.time }}</span>
                    </div>
                    <div class="comment-text">{{ c.content }}</div>
                    <div class="comment-actions">
                        👍 {{ c.likes }} | 回复
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TopNavbar from '../../../../components/Navbar/topNavbar.vue';
import { useRoute } from 'vue-router';
import { confessions } from '/src/data/home/functionListDetails/xiaoyuandidi/confessions.js';
import { reactive, ref } from 'vue';

const route = useRoute();
const confessionId = Number(route.params.id);
const confession = reactive({
    ...confessions[confessionId],
    title: confessions[confessionId].title || '放假喽',
    tag: confessions[confessionId].tag || '情绪情感'
});

const comments = reactive([
    {
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
        nickname: '郭笑荣',
        time: '刚刚',
        content: '哇塞😆好羡慕你们啊🥺我还有几天才能够放假',
        likes: 3
    }
]);

const newComment = ref('');

function like() {
    confession.likes++;
}

function postComment() {
    if (!newComment.value.trim()) return;
    comments.push({
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=guest',
        nickname: '游客',
        time: '刚刚',
        content: newComment.value,
        likes: 0
    });
    newComment.value = '';
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    padding: 10px;
    box-sizing: border-box;
}

.confession-card {
    background: #fff;
    border-radius: 12px;
    padding: 14px;
    margin-bottom: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.info {
    margin-left: 10px;
}

.nickname {
    font-weight: bold;
    font-size: 14px;
}

.date {
    font-size: 12px;
    color: #999;
}

.card-title {
    font-size: 16px;
    font-weight: bold;
    margin: 6px 0;
}

.card-content {
    font-size: 14px;
    color: #333;
}

.tag {
    display: inline-block;
    background: #ffe0c2;
    color: #ff8247;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 8px;
    margin-top: 8px;
}

.card-footer {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
}

.footer-btn {
    font-size: 14px;
    margin-right: 16px;
    cursor: pointer;
    color: #666;
}

.comment-input {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;
}

.comment-input input {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 6px 12px;
    outline: none;
    font-size: 14px;
    margin: 0 8px;
}

.comment-btn {
    background: #ff8247;
    color: #fff;
    padding: 6px 12px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
}

.comment-section {
    background: #fff;
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.comment-item {
    display: flex;
    margin-bottom: 12px;
}

.comment-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}

.comment-info {
    margin-left: 10px;
    flex: 1;
}

.comment-top {
    display: flex;
    justify-content: space-between;
}

.comment-nickname {
    font-weight: bold;
    font-size: 13px;
}

.comment-time {
    font-size: 12px;
    color: #999;
}

.comment-text {
    font-size: 14px;
    margin: 4px 0;
}

.comment-actions {
    font-size: 12px;
    color: #ff8247;
    cursor: pointer;
}
</style>
