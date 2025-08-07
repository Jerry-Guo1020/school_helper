<template>
<div class="container">
    <div class="top">
        <TopNavbar title="匿名投稿"/>
    </div>
    <div class="topphoto">
    </div>
    </div>
</template>

<script setup>
import TopNavbar from '../../../components/Navbar/topNavbar.vue';
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
}
</style>