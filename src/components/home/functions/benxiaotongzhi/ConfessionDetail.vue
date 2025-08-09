<template>
  <div class="top">
    <TopNavbar title="表白详情" />
  </div>
  <div class="container">
    <!-- 表白内容 -->
    <div class="confession-card">
      <div class="confession-header">
        <img class="avatar" :src="confession.avatar" alt="头像" />
        <div class="user-info">
          <div class="nickname">{{ confession.nickname }}</div>
          <div class="time">{{ confession.time }}</div>
        </div>
      </div>
      <div class="confession-content">{{ confession.content }}</div>
      <div class="confession-footer">
        <span class="like-btn" @click="like">❤️ {{ confession.likes }}</span>
      </div>
    </div>

    <!-- 评论区 -->
    <div class="comment-section">
      <h3>评论</h3>
      <div v-if="comments.length === 0" class="no-comment">暂无评论，快来抢沙发~</div>
      <div v-for="(c, index) in comments" :key="index" class="comment-item">
        <div class="comment-nickname">{{ c.nickname }}</div>
        <div class="comment-content">{{ c.content }}</div>
      </div>

      <!-- 发布评论 -->
      <div class="comment-input">
        <input v-model="newComment" type="text" placeholder="写下你的评论..." />
        <button @click="postComment">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopNavbar from '../../../../components/Navbar/topNavbar.vue';
import { useRoute } from 'vue-router';
import { confessions } from '/src/data/home/functionListDetails/xiaoyuandidi/confessions.js'; 
import { reactive , ref} from 'vue';

const route = useRoute();
const confessionId = Number(route.params.id); // 从路由参数获取 id
const confession = reactive({ ...confessions[confessionId] });

// 评论数据
const comments = reactive([]);
const newComment = ref('');

// 点赞
function like() {
  confession.likes++;
}

// 发表评论
function postComment() {
  if (!newComment.value.trim()) return;
  comments.push({
    nickname: '游客',
    content: newComment.value
  });
  newComment.value = '';
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 12px;
  box-sizing: border-box;
}

.confession-card {
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
.confession-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-info {
  margin-left: 10px;
}
.nickname {
  font-weight: bold;
}
.time {
  font-size: 12px;
  color: #999;
}
.confession-content {
  font-size: 14px;
  color: #333;
}
.confession-footer {
  margin-top: 10px;
  text-align: right;
}
.like-btn {
  color: #ff5a5f;
  cursor: pointer;
}

.comment-section {
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.comment-item {
  padding: 8px 0;
  border-bottom: 1px solid #f1f1f1;
}
.comment-nickname {
  font-weight: bold;
  font-size: 13px;
}
.comment-content {
  font-size: 14px;
  color: #555;
}
.no-comment {
  color: #999;
  font-size: 13px;
  padding: 10px 0;
}
.comment-input {
  display: flex;
  margin-top: 10px;
}
.comment-input input {
  flex: 1;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
}
.comment-input button {
  margin-left: 8px;
  background-color: #ff8247;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
