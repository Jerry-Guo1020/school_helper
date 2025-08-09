<template>
  <div class="top">
    <TopNavbar title="校园滴滴" />
  </div>
  <div class="contanier">
    <!-- 顶部图片区 -->
    <TopCard 
      title="校园表白墙"
      content="💌 匿名倾诉心声，传递温暖与祝福"
      titleColor="#ff4d6d"
      contentColor="#b23a48"
      buttonBg="linear-gradient(90deg, #ff9a9e, #fad0c4)"
      buttonTextColor="#fff"
      @click="goToConfession" />

    <!-- 表白列表 -->
    <div class="confession-list">
      <div v-for="(item, index) in confessionList" 
      :key="index" 
      class="confession-card"
      @click="goDetail(index)"
      >
        <div class="confession-header">
          <img class="avatar" :src="item.avatar" alt="头像" />
          <div class="user-info">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
        <div class="confession-content">{{ item.content }}</div>
        <div class="confession-footer">
          <span class="like-btn" @click="like(item)">❤️ {{ item.likes }}</span>
        </div>
      </div>
    </div>

    <!-- 悬浮发布按钮 -->
    <div class="fab" @click="onPublish">
      <AddButtom />
    </div>
  </div>
</template>

<script setup>
import AddButtom from '../../../components/home/functions/nimingtougao/addButtom.vue';
import TopCard from '../../../components/home/functions/TopCard.vue';
import TopNavbar from '../../../components/Navbar/topNavbar.vue';
import { confessions } from '/src/data/home/functionListDetails/xiaoyuandidi/confessions.js'; 
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function goDetail(index) {
  router.push(`/confession/${index}`);
}

const confessionList = reactive([...confessions]);

function onPublish() {
  alert('点击发布！');
}

function like(item) {
  item.likes++;
}
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
}

.topphoto {
  background-color: #fff;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin: 15px auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
.top-title {
  font-size: 20px;
  font-weight: bold;
}
.top-subtitle {
  font-size: 14px;
  color: #888;
  margin-top: 6px;
}

.confession-list {
  margin-top: 15px;
}
.confession-card {
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
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
  font-size: 14px;
}
.time {
  font-size: 12px;
  color: #999;
}
.confession-content {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}
.confession-footer {
  margin-top: 8px;
  text-align: right;
}
.like-btn {
  font-size: 14px;
  color: #ff5a5f;
  cursor: pointer;
}

.fab {
  position: fixed;
  right: 44rpx;
  bottom: 268rpx;
  width: 102rpx;
  height: 102rpx;
  border-radius: 50%;
  background: radial-gradient(circle at 65% 28%, #ffb570 60%, #ff8247 100%);
  box-shadow: 0 8rpx 28rpx rgba(255,130,71,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
  transition: box-shadow .18s, transform .13s;
  animation: fabGlow 2.5s infinite alternate cubic-bezier(.85,0,.13,1);
}
.fab:active {
  box-shadow: 0 5rpx 17rpx rgba(255,130,71,0.27);
  transform: scale(.97);
}
</style>
