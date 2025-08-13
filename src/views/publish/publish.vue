<template>
     <!-- 顶部导航栏 -->
    <div class="top">
      <TopNavbar title="发布页面" />
    </div>
  <div class="container">
    <PublishCard />
  </div>
</template>

<script setup>
import TopNavbar from '../../components/Navbar/topNavbar.vue'
import PublishCard from '../../components/publish/publishCard.vue';
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
}




</style>
